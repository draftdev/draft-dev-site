export interface MetricData {
  date: string
  metricName: string
  value: number | string
  previousValue: number | string
  category: string
  change: ChangeData
  isCurrentMonth?: boolean
  isPercentage: boolean
  lowerIsBetter: boolean
}

export interface ChangeData {
  value: number
  direction: 'up' | 'down' | 'neutral'
  formatted: string
}

export interface NoteData {
  date: string
  title: string
  note: string
  section: string
  screenshotFile: string | null
  rowNumber?: number
  embeddedImage?: string
  screenshots?: { key: string; data: string }[]
  url?: string
}

/**
 * Group metrics by their category field
 */
export function groupMetricsByCategory(
  metrics: MetricData[]
): Record<string, MetricData[]> {
  return metrics.reduce<Record<string, MetricData[]>>((acc, metric) => {
    const category = metric.category
    if (!acc[category]) acc[category] = []
    acc[category].push(metric)
    return acc
  }, {})
}

function formatDateLabel(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr + 'T00:00:00')
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
}

/**
 * Extract time-series data for a named metric (used for chart generation)
 */
export function getChartData(
  metrics: MetricData[],
  metricName: string
): { labels: string[]; values: (number | string)[]; previousValues: (number | string)[]; currentMonthIndex: number | null } {
  const filtered = metrics.filter(m => m.metricName === metricName)
  filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  const currentMonthIndex = filtered.findIndex(m => m.isCurrentMonth === true)
  return {
    labels: filtered.map(m => formatDateLabel(m.date)),
    values: filtered.map(m => m.value),
    previousValues: filtered.map(m => m.previousValue),
    currentMonthIndex: currentMonthIndex >= 0 ? currentMonthIndex : null,
  }
}
