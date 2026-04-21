import * as XLSX from 'xlsx'
import AdmZip from 'adm-zip'
import path from 'path'
import type { MetricData, NoteData, ChangeData } from './csv-parser'

interface ImageData {
  data: string // base64 data URI
  row: number
  index: number
  name: string
}

export interface ExcelParseResult {
  metrics: MetricData[] & { _inlineNote?: string }
  notes: NoteData[]
  images: Record<string, ImageData>
}

const DEFAULT_METRIC_MAPPINGS: Record<
  string,
  { name: string; category: string; isPercentage?: boolean; absoluteChange?: boolean; lowerIsBetter?: boolean; isText?: boolean }
> = {
  'LLM Response Presence': { name: 'LLM Response Presence', category: 'ai-visibility', isPercentage: true, absoluteChange: true },
  'Citations from own website': { name: 'Citations from Website', category: 'ai-visibility' },
  'Citation Consistency': { name: 'Citation Consistency', category: 'ai-visibility', isPercentage: true, absoluteChange: true },
  'Domain Rating': { name: 'Domain Rating', category: 'seo', absoluteChange: true },
  'SEO keywords position 1-3': { name: 'SEO Keywords (Position 1-3)', category: 'seo', absoluteChange: true },
  'SEO keywords position 4-10': { name: 'SEO Keywords (Position 4-10)', category: 'seo', absoluteChange: true },
  'Monthly users on website': { name: 'Monthly Users', category: 'traffic' },
  'Page Health Score': { name: 'Page Health Score', category: 'seo', absoluteChange: true },
  Backlinks: { name: 'Backlinks', category: 'seo' },
  'Pieces Delivered': { name: 'Pieces Delivered', category: 'content' },
  'Pieces Published': { name: 'Pieces Published', category: 'content' },
  'Avg. time to publish (days)': { name: 'Avg. Time to Publish (days)', category: 'content', lowerIsBetter: true },
}

export async function parseExcel(
  buffer: Buffer,
  month: string,
  options: { metricsSheet?: string; reviewSheet?: string; metricMappings?: Record<string, unknown> } = {}
): Promise<ExcelParseResult> {
  const workbook = XLSX.read(buffer, { type: 'buffer', cellDates: true })
  const sheetNames = workbook.SheetNames

  const metricsSheetName = options.metricsSheet || findMetricsSheet(sheetNames)
  const metricsSheet = workbook.Sheets[metricsSheetName]

  const reviewSheetName = options.reviewSheet || findReviewSheet(sheetNames, month)
  const reviewSheet = reviewSheetName ? workbook.Sheets[reviewSheetName] : null

  const metrics = parseMetricsSheet(metricsSheet, month, options.metricMappings as Record<string, unknown> | undefined)
  const notes = reviewSheet ? parseReviewSheet(reviewSheet, month) : []

  const sheetIndex = reviewSheetName ? sheetNames.indexOf(reviewSheetName) : -1
  const images = sheetIndex >= 0 ? extractImagesFromExcel(buffer, sheetIndex + 1) : {}

  if (Object.keys(images).length > 0) {
    associateImagesWithNotes(notes, images)
  }

  return { metrics, notes, images }
}

export function getAvailableMonths(buffer: Buffer): string[] {
  const workbook = XLSX.read(buffer, { type: 'buffer', cellDates: true })
  const metricsSheetName = findMetricsSheet(workbook.SheetNames)
  const sheet = workbook.Sheets[metricsSheetName]
  const data = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: null })

  const months: string[] = []
  for (const row of data) {
    if (row['Date'] === null || row['Date'] === undefined) continue
    const parsed = parseDateFromString(row['Date'])
    if (parsed) {
      const key = parsed.substring(0, 7) // "YYYY-MM"
      if (!months.includes(key)) months.push(key)
    }
  }
  return months
}

// ── private helpers ────────────────────────────────────────────────────────────

function findMetricsSheet(sheetNames: string[]): string {
  const exact = sheetNames.find(n => n === 'Key Metrics' || n.toLowerCase() === 'key metrics')
  if (exact) return exact
  return (
    sheetNames.find(n => n === 'Sheet1' || n.toLowerCase().includes('metric') || n.toLowerCase().includes('data')) ||
    sheetNames[0]
  )
}

function findReviewSheet(sheetNames: string[], month: string): string | null {
  const [year, monthNum] = month.split('-')
  const exact = sheetNames.find(n => n === month)
  if (exact) return exact

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthName = monthNames[parseInt(monthNum) - 1]
  return (
    sheetNames.find(n => {
      const l = n.toLowerCase()
      return (
        (l.includes(monthName.toLowerCase()) && l.includes(year)) ||
        (l.includes('review') && l.includes(monthName.toLowerCase()))
      )
    }) || null
  )
}

function parseMetricsSheet(
  sheet: XLSX.WorkSheet,
  month: string,
  customMappings?: Record<string, unknown>
): MetricData[] & { _inlineNote?: string } {
  const data = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: null })
  const mappings = { ...DEFAULT_METRIC_MAPPINGS, ...(customMappings || {}) } as typeof DEFAULT_METRIC_MAPPINGS

  if (data.length === 0) return []

  // Build case-insensitive column map
  const columnNameMap: Record<string, string> = {}
  for (const col of Object.keys(data[0])) {
    columnNameMap[col.toLowerCase().trim()] = col
  }

  const [year, monthNum] = month.split('-')
  const targetPrefix = `${year}-${monthNum.padStart(2, '0')}`

  // Find last row that matches current month
  let currentMonthIndex = -1
  let inlineNote: string | null = null
  for (let i = 0; i < data.length; i++) {
    const parsed = parseDateFromString(data[i]['Date'])
    if (parsed && parsed.startsWith(targetPrefix)) {
      currentMonthIndex = i
      if (data[i]['Notes']) inlineNote = String(data[i]['Notes'])
    }
  }

  const metrics: MetricData[] = []

  for (let i = 0; i < data.length; i++) {
    const row = data[i]
    if (row['Date'] === null || row['Date'] === undefined) continue

    const parsedDate = parseDateFromString(row['Date'])
    if (!parsedDate) continue

    const isCurrentMonth = i === currentMonthIndex
    const previousRow = i > 0 ? data[i - 1] : null

    for (const [colName, mapping] of Object.entries(mappings)) {
      const actualCol = columnNameMap[colName.toLowerCase().trim()]
      if (!actualCol || row[actualCol] === undefined || row[actualCol] === null) continue

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let value: any = row[actualCol]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let previousValue: any = previousRow ? previousRow[actualCol] : 0

      if (mapping.isText) {
        value = value instanceof Date ? `${value.getMonth() + 1}/${value.getDate()}` : String(value)
        previousValue = previousValue instanceof Date
          ? `${previousValue.getMonth() + 1}/${previousValue.getDate()}`
          : previousValue !== null && previousValue !== undefined ? String(previousValue) : ''
        metrics.push({
          date: parsedDate,
          metricName: mapping.name,
          value,
          previousValue,
          category: mapping.category,
          change: { value: 0, direction: 'neutral', formatted: 'N/A' },
          isCurrentMonth,
          isPercentage: false,
          lowerIsBetter: mapping.lowerIsBetter || false,
        })
        continue
      }

      if (mapping.isPercentage && typeof value === 'number' && value <= 1) {
        value = value * 100
        if (previousValue !== null && typeof previousValue === 'number' && previousValue <= 1) {
          previousValue = previousValue * 100
        }
      }

      if (typeof value === 'string') value = parseFloat(value.replace(/,/g, '')) || 0
      if (typeof previousValue === 'string') previousValue = parseFloat(previousValue.replace(/,/g, '')) || 0

      metrics.push({
        date: parsedDate,
        metricName: mapping.name,
        value: value as number,
        previousValue: (previousValue as number) || 0,
        category: mapping.category,
        change: calculateChange(value as number, previousValue as number, mapping.absoluteChange, mapping.isPercentage),
        isCurrentMonth,
        isPercentage: mapping.isPercentage || false,
        lowerIsBetter: mapping.lowerIsBetter || false,
      })
    }
  }

  const result = metrics as MetricData[] & { _inlineNote?: string }
  if (inlineNote) result._inlineNote = inlineNote
  return result
}

function parseDateFromString(dateValue: unknown): string | null {
  if (dateValue === null || dateValue === undefined) return null

  // Handle JavaScript Date objects (returned by xlsx when cellDates: true)
  if (dateValue instanceof Date) {
    const m = dateValue.getMonth() + 1
    const y = dateValue.getFullYear()
    return `${y}-${String(m).padStart(2, '0')}-01`
  }

  const dateStr = String(dateValue).trim()
  if (!dateStr) return null

  // Handle M/D/YYYY or MM/DD/YYYY numeric format (e.g., "3/18/2026", "4/14/2026")
  const numericMatch = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (numericMatch) {
    const monthNum = parseInt(numericMatch[1], 10)
    return `${numericMatch[3]}-${String(monthNum).padStart(2, '0')}-01`
  }

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const patterns = [
    /([A-Za-z]+)\s+\d+(?:st|nd|rd|th)?,?\s+(\d{4})/,
    /([A-Za-z]+)\s+\d+\s*-\s*[A-Za-z]+\s+\d+(?:st|nd|rd|th)?,?\s+(\d{4})/,
    /([A-Za-z]+)[,\s-]*(\d{4})/,
  ]
  let monthStr: string | null = null
  let year: string | null = null
  for (const p of patterns) {
    const m = dateStr.match(p)
    if (m) { monthStr = m[1]; year = m[2]; break }
  }
  if (!monthStr || !year) return null
  const monthNum = monthNames.findIndex(m => monthStr!.toLowerCase().startsWith(m.toLowerCase())) + 1
  if (monthNum === 0) return null
  return `${year}-${String(monthNum).padStart(2, '0')}-01`
}

function calculateChange(
  current: number,
  previous: number,
  absoluteChange = false,
  isPercentage = false
): ChangeData {
  if (!previous && previous !== 0) return { value: 0, direction: 'neutral', formatted: 'N/A' }
  if (absoluteChange) {
    const change = current - previous
    const direction: ChangeData['direction'] = change > 0 ? 'up' : change < 0 ? 'down' : 'neutral'
    const formatted = isPercentage
      ? `${change >= 0 ? '+' : ''}${change.toFixed(1)}`
      : `${change >= 0 ? '+' : ''}${Math.round(change)}`
    return { value: change, direction, formatted }
  }
  if (previous === 0) return { value: 0, direction: 'neutral', formatted: 'N/A' }
  const change = ((current - previous) / previous) * 100
  const direction: ChangeData['direction'] = change > 0 ? 'up' : change < 0 ? 'down' : 'neutral'
  return { value: change, direction, formatted: `${change >= 0 ? '+' : ''}${change.toFixed(1)}%` }
}

function parseReviewSheet(sheet: XLSX.WorkSheet, month: string): NoteData[] {
  const data = XLSX.utils.sheet_to_json<unknown[]>(sheet, { header: 1, defval: '' }) as string[][]
  const notes: NoteData[] = []
  const [year, monthNum] = month.split('-')
  const dateStr = `${year}-${monthNum}-15`
  let currentSection = 'highlights'
  let noteBuffer: string[] = []
  let noteBufferStartRow = 0

  for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
    const row = data[rowIndex]
    const cellValue = String(row[0] || '').trim()
    const secondCell = String(row[1] || '').trim()
    if (!cellValue) continue

    const lower = cellValue.toLowerCase()
    if (lower.includes('notes/highlights') || lower === 'highlights') {
      flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr)
      currentSection = 'highlights'; noteBuffer = []; noteBufferStartRow = rowIndex + 1; continue
    }
    if (lower === 'lowlights' || lower.includes('low lights')) {
      flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr)
      currentSection = 'lowlights'; noteBuffer = []; noteBufferStartRow = rowIndex + 1; continue
    }
    if (lower.includes('notes and questions') || lower.includes('notes & questions') || lower.includes('questions') || lower.includes('feedback')) {
      flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr)
      currentSection = 'notes and questions'; noteBuffer = []; noteBufferStartRow = rowIndex + 1; continue
    }
    if (cellValue.startsWith('http')) {
      noteBuffer.push(cellValue)
      if (secondCell) noteBuffer.push(secondCell)
      continue
    }
    if (cellValue.length > 0 && cellValue.length <= 80 && secondCell.length > 50) {
      if (noteBuffer.length > 0) { flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr); noteBuffer = [] }
      notes.push({ date: dateStr, title: cellValue, note: secondCell, section: currentSection, screenshotFile: null, rowNumber: rowIndex })
      noteBufferStartRow = rowIndex + 1; continue
    }
    if (noteBuffer.length === 0) noteBufferStartRow = rowIndex
    noteBuffer.push(cellValue)
    if (secondCell) noteBuffer.push(secondCell)
    const nextRow = rowIndex + 1
    if (nextRow >= data.length || !String(data[nextRow]?.[0] || '').trim()) {
      flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr)
      noteBuffer = []; noteBufferStartRow = nextRow + 1
    }
  }
  flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr)
  return notes
}

function flushNoteBuffer(notes: NoteData[], buffer: string[], rowNumber: number, section: string, dateStr: string) {
  if (buffer.length === 0) return
  const combined = buffer.join('\n')
  notes.push({
    date: dateStr,
    title: generateTitle(combined),
    note: combined,
    section,
    screenshotFile: null,
    rowNumber,
  })
}

function generateTitle(text: string): string {
  if (!text) return ''
  let clean = text.replace(/(https?:\/\/[^\s<>"']+)/g, '').trim()
  clean = clean.replace(/"[^"]+"/g, '').trim()
  clean = clean.replace(/\([^)]+\)/g, '').trim()
  let working = clean.split(/[.!?]\s+/)[0] || clean
  const beforeColon = working.split(/[:–—-]\s*/)[0]
  if (beforeColon && beforeColon.length > 20 && beforeColon.length < working.length) working = beforeColon
  const beforeComma = working.split(/,\s+/)[0]
  if (beforeComma && beforeComma.length > 15) working = beforeComma

  const words = working.split(/\s+/)
  const filler = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'from', 'with', 'by'])
  let fallback = words.filter(w => !filler.has(w.toLowerCase()) && w.length > 0).slice(0, 6).join(' ')
  if (fallback.length > 60) fallback = fallback.substring(0, 57) + '...'
  return fallback.trim() || words.slice(0, 5).join(' ')
}

function extractImagesFromExcel(buffer: Buffer, sheetNumber: number): Record<string, ImageData> {
  const images: Record<string, ImageData> = {}
  try {
    const zip = new AdmZip(buffer)
    const entries = zip.getEntries()

    const mediaFiles: Record<string, { data: string; name: string }> = {}
    for (const entry of entries) {
      if (entry.entryName.startsWith('xl/media/')) {
        const name = path.basename(entry.entryName)
        const imageData = entry.getData()
        const ext = path.extname(name).toLowerCase().slice(1)
        const mime = ext === 'png' ? 'image/png' : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : `image/${ext}`
        mediaFiles[name] = { data: `data:${mime};base64,${imageData.toString('base64')}`, name }
      }
    }

    // Find drawing rels for this sheet
    const sheetRelsPath = `xl/worksheets/_rels/sheet${sheetNumber}.xml.rels`
    const sheetRelsEntry = entries.find(e => e.entryName === sheetRelsPath)
    if (sheetRelsEntry) {
      const content = sheetRelsEntry.getData().toString('utf8')
      const drawingMatch = content.match(/Target="\.\.\/drawings\/drawing(\d+)\.xml"/)
      if (drawingMatch) {
        return extractImagesFromDrawing(entries, mediaFiles, drawingMatch[1])
      }
    }

    return extractImagesFromDrawing(entries, mediaFiles, String(sheetNumber))
  } catch {
    return images
  }
}

function extractImagesFromDrawing(
  entries: AdmZip.IZipEntry[],
  mediaFiles: Record<string, { data: string; name: string }>,
  drawingNum: string
): Record<string, ImageData> {
  const images: Record<string, ImageData> = {}
  const relsEntry = entries.find(e => e.entryName === `xl/drawings/_rels/drawing${drawingNum}.xml.rels`)
  if (!relsEntry) return images

  const relsContent = relsEntry.getData().toString('utf8')
  const rIdToImage: Record<string, string> = {}
  const relMatches = relsContent.matchAll(/Relationship[^>]+Id="(rId\d+)"[^>]+Target="[^"]*\/media\/([^"]+)"/g)
  for (const m of relMatches) rIdToImage[m[1]] = m[2]

  const drawingEntry = entries.find(e => e.entryName === `xl/drawings/drawing${drawingNum}.xml`)
  if (!drawingEntry) return images

  const drawingContent = drawingEntry.getData().toString('utf8')
  const anchorPattern = /<xdr:oneCellAnchor>[\s\S]*?<xdr:row>(\d+)<\/xdr:row>[\s\S]*?<a:blip[^>]+r:embed="(rId\d+)"[\s\S]*?<\/xdr:oneCellAnchor>/g

  let match: RegExpExecArray | null
  let idx = 0
  while ((match = anchorPattern.exec(drawingContent)) !== null) {
    const row = parseInt(match[1])
    const rId = match[2]
    const imageName = rIdToImage[rId]
    if (imageName && mediaFiles[imageName]) {
      const key = `excel_image_${idx}`
      images[key] = { ...mediaFiles[imageName], row, index: idx }
      idx++
    }
  }
  return images
}

function associateImagesWithNotes(notes: NoteData[], images: Record<string, ImageData>) {
  if (Object.keys(images).length === 0 || notes.length === 0) return

  const imageArray = Object.entries(images)
    .map(([key, data]) => ({ key, row: data.row, data: data.data, used: false }))
    .sort((a, b) => a.row - b.row)

  notes.forEach(n => { n.screenshots = [] })

  const sortedNotes = notes.filter(n => n.rowNumber !== undefined).sort((a, b) => a.rowNumber! - b.rowNumber!)

  for (const image of imageArray) {
    let assigned: NoteData | null = null
    for (let i = 0; i < sortedNotes.length; i++) {
      const cur = sortedNotes[i]
      const next = sortedNotes[i + 1]
      if (image.row >= cur.rowNumber!) {
        if (next && image.row < next.rowNumber!) { assigned = cur; break }
        else if (!next && image.row - cur.rowNumber! < 15) { assigned = cur; break }
      }
    }
    if (assigned) {
      assigned.screenshots!.push({ key: image.key, data: image.data })
      if (!assigned.screenshotFile) {
        assigned.screenshotFile = image.key
        assigned.embeddedImage = image.data
      }
    }
  }
}
