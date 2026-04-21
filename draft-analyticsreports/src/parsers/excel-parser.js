import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';
import AdmZip from 'adm-zip';

/**
 * Metric column mappings - maps Excel column names to standardized metric names
 * Add new mappings here as needed for different clients
 */
const DEFAULT_METRIC_MAPPINGS = {
  'LLM Response Presence': { name: 'LLM Response Presence', category: 'ai-visibility', isPercentage: true, absoluteChange: true },
  'Citations from own website': { name: 'Citations from Website', category: 'ai-visibility', isPercentage: false },
  'Citations of Website': { name: 'Citations of Website', category: 'ai-visibility', isPercentage: false },
  'Citation Consistency': { name: 'Citation Consistency', category: 'ai-visibility', isPercentage: true, absoluteChange: true },
  'Domain Rating': { name: 'Domain Rating', category: 'seo', isPercentage: false, absoluteChange: true },
  'SEO keywords position 1-3': { name: 'SEO Keywords (Position 1-3)', category: 'seo', isPercentage: false, absoluteChange: true },
  'SEO keywords position 4-10': { name: 'SEO Keywords (Position 4-10)', category: 'seo', isPercentage: false, absoluteChange: true },
  'Monthly users on website': { name: 'Monthly Users', category: 'traffic', isPercentage: false },
  'Page Health Score': { name: 'Page Health Score', category: 'seo', isPercentage: false, absoluteChange: true },
  'Backlinks': { name: 'Backlinks', category: 'seo', isPercentage: false },
  'Pieces Delivered': { name: 'Pieces Delivered', category: 'content', isPercentage: false },
  'Pieces Published': { name: 'Pieces Published', category: 'content', isPercentage: false },
  'Avg. time to publish (days)': { name: 'Avg. Time to Publish (days)', category: 'content', isPercentage: false, lowerIsBetter: true },
};

/**
 * Parse an Excel file and extract metrics and notes
 *
 * Expected Excel Structure:
 * 1. "Key Metrics" tab - Contains key metrics data and trend information
 *    - Used for the key metrics section and trend charts in the report
 * 2. Date-specific tab (e.g., "2025-12") - Contains period-specific data
 *    - Tab name should match the exact date format YYYY-MM
 *    - Used for all data specific to that reporting period
 *
 * The function will fall back to alternative sheet names if the preferred
 * structure is not found (for backward compatibility).
 *
 * @param {string} filePath - Path to the Excel file
 * @param {string} month - Month in YYYY-MM format to filter data
 * @param {Object} options - Additional options
 * @returns {Promise<{metrics: Array, notes: Array, images: Object}>}
 */
export async function parseExcel(filePath, month, options = {}) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Excel file not found: ${filePath}`);
  }

  const workbook = XLSX.readFile(filePath);
  const sheetNames = workbook.SheetNames;

  console.log(`  Found sheets: ${sheetNames.join(', ')}`);

  // Find the metrics sheet (preferably "Key Metrics" tab)
  const metricsSheetName = options.metricsSheet || findMetricsSheet(sheetNames);
  const metricsSheet = workbook.Sheets[metricsSheetName];
  console.log(`  Using metrics sheet: "${metricsSheetName}"`);

  // Find the review/notes sheet for the specified month (preferably exact date format like "2025-12")
  const reviewSheetName = options.reviewSheet || findReviewSheet(sheetNames, month);
  const reviewSheet = reviewSheetName ? workbook.Sheets[reviewSheetName] : null;

  if (reviewSheetName) {
    console.log(`  Using period-specific sheet: "${reviewSheetName}"`);
  } else {
    console.log(`  No period-specific sheet found for ${month}`);
  }

  // Parse metrics from the metrics sheet
  const metrics = parseMetricsSheet(metricsSheet, month, options.metricMappings);

  // Parse notes from the review sheet
  const notes = reviewSheet ? parseReviewSheet(reviewSheet, month) : [];

  // Extract images from the review sheet
  const sheetIndex = reviewSheetName ? sheetNames.indexOf(reviewSheetName) : -1;
  const images = sheetIndex >= 0 ? extractImagesFromExcel(filePath, sheetIndex + 1) : {};

  // Associate images with notes based on row position
  if (Object.keys(images).length > 0) {
    associateImagesWithNotes(notes, images);
    console.log(`  Extracted ${Object.keys(images).length} images from Excel`);
  }

  return { metrics, notes, images };
}

/**
 * Extract images from an Excel file
 * @param {string} filePath - Path to the Excel file
 * @param {number} sheetNumber - 1-based sheet number
 * @returns {Object} Map of image names to {data, row, col} objects
 */
function extractImagesFromExcel(filePath, sheetNumber) {
  const images = {};

  try {
    const zip = new AdmZip(filePath);
    const zipEntries = zip.getEntries();

    // Find all media files (images)
    const mediaFiles = {};
    for (const entry of zipEntries) {
      if (entry.entryName.startsWith('xl/media/')) {
        const imageName = path.basename(entry.entryName);
        const imageData = entry.getData();
        const ext = path.extname(imageName).toLowerCase().slice(1);
        const mimeType = ext === 'png' ? 'image/png' : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : `image/${ext}`;
        mediaFiles[imageName] = {
          data: `data:${mimeType};base64,${imageData.toString('base64')}`,
          name: imageName
        };
      }
    }

    // Find the drawing relationships for this sheet
    const drawingRelsPath = `xl/drawings/_rels/drawing${sheetNumber}.xml.rels`;
    const drawingRelsEntry = zipEntries.find(e => e.entryName === drawingRelsPath);

    if (!drawingRelsEntry) {
      // Try alternative path patterns
      const sheetRelsPath = `xl/worksheets/_rels/sheet${sheetNumber}.xml.rels`;
      const sheetRelsEntry = zipEntries.find(e => e.entryName === sheetRelsPath);

      if (sheetRelsEntry) {
        const sheetRelsContent = sheetRelsEntry.getData().toString('utf8');
        // Extract drawing reference
        const drawingMatch = sheetRelsContent.match(/Target="\.\.\/drawings\/drawing(\d+)\.xml"/);
        if (drawingMatch) {
          const drawingNum = drawingMatch[1];
          return extractImagesFromDrawing(zip, zipEntries, mediaFiles, drawingNum);
        }
      }
      return images;
    }

    return extractImagesFromDrawing(zip, zipEntries, mediaFiles, sheetNumber);
  } catch (error) {
    console.warn(`  Warning: Could not extract images: ${error.message}`);
    return images;
  }
}

/**
 * Extract images from a specific drawing
 */
function extractImagesFromDrawing(zip, zipEntries, mediaFiles, drawingNum) {
  const images = {};

  // Parse drawing relationships to map rIds to image files
  const drawingRelsPath = `xl/drawings/_rels/drawing${drawingNum}.xml.rels`;
  const drawingRelsEntry = zipEntries.find(e => e.entryName === drawingRelsPath);

  if (!drawingRelsEntry) return images;

  const relsContent = drawingRelsEntry.getData().toString('utf8');
  const rIdToImage = {};

  // Parse relationships: <Relationship Id="rId1" ... Target="../media/image1.png"/>
  const relMatches = relsContent.matchAll(/Relationship[^>]+Id="(rId\d+)"[^>]+Target="[^"]*\/media\/([^"]+)"/g);
  for (const match of relMatches) {
    rIdToImage[match[1]] = match[2];
  }

  // Parse the drawing XML to get image positions
  const drawingPath = `xl/drawings/drawing${drawingNum}.xml`;
  const drawingEntry = zipEntries.find(e => e.entryName === drawingPath);

  if (!drawingEntry) return images;

  const drawingContent = drawingEntry.getData().toString('utf8');

  // Extract image anchors with their row positions
  // Pattern: <xdr:from><xdr:col>...</xdr:col>...<xdr:row>N</xdr:row>...</xdr:from>...<a:blip ... r:embed="rIdX"/>
  const anchorPattern = /<xdr:oneCellAnchor>[\s\S]*?<xdr:row>(\d+)<\/xdr:row>[\s\S]*?<a:blip[^>]+r:embed="(rId\d+)"[\s\S]*?<\/xdr:oneCellAnchor>/g;

  let match;
  let imageIndex = 0;
  while ((match = anchorPattern.exec(drawingContent)) !== null) {
    const row = parseInt(match[1]);
    const rId = match[2];
    const imageName = rIdToImage[rId];

    if (imageName && mediaFiles[imageName]) {
      const imageKey = `excel_image_${imageIndex}`;
      images[imageKey] = {
        ...mediaFiles[imageName],
        row: row,
        index: imageIndex
      };
      imageIndex++;
    }
  }

  return images;
}

/**
 * Associate extracted images with notes based on row proximity
 * Supports multiple screenshots per note
 */
function associateImagesWithNotes(notes, images) {
  if (Object.keys(images).length === 0 || notes.length === 0) return;

  // Convert images to array with keys
  const imageArray = Object.entries(images).map(([key, data]) => ({
    key,
    row: data.row,
    data: data.data,
    used: false
  }));

  // Sort images by row
  imageArray.sort((a, b) => a.row - b.row);

  // Initialize screenshots array for each note
  notes.forEach(note => {
    note.screenshots = [];
  });

  // Sort notes by row number for proper processing
  const sortedNotes = notes.filter(n => n.rowNumber).sort((a, b) => a.rowNumber - b.rowNumber);

  // Assign images to notes based on proximity
  // Images between two notes go to the note above them
  for (const image of imageArray) {
    let assignedNote = null;

    // Find the note this image belongs to
    for (let i = 0; i < sortedNotes.length; i++) {
      const currentNote = sortedNotes[i];
      const nextNote = i < sortedNotes.length - 1 ? sortedNotes[i + 1] : null;

      // Image is after this note
      if (image.row >= currentNote.rowNumber) {
        // Check if there's a next note and if the image is before it
        if (nextNote && image.row < nextNote.rowNumber) {
          // Image is between currentNote and nextNote
          // Assign to currentNote
          assignedNote = currentNote;
          break;
        } else if (!nextNote) {
          // This is the last note, assign if within reasonable range
          const distance = image.row - currentNote.rowNumber;
          if (distance < 15) { // Extended range for last note
            assignedNote = currentNote;
          }
          break;
        }
      }
    }

    // If we found a note to assign to, add the image
    if (assignedNote) {
      assignedNote.screenshots.push({
        key: image.key,
        data: image.data
      });

      // For backwards compatibility, set the first screenshot as screenshotFile
      if (!assignedNote.screenshotFile) {
        assignedNote.screenshotFile = image.key;
        assignedNote.embeddedImage = image.data;
      }
    }
  }
}

/**
 * Find the metrics sheet (specifically "Key Metrics" tab)
 */
function findMetricsSheet(sheetNames) {
  // Look for "Key Metrics" tab specifically
  const keyMetricsSheet = sheetNames.find(name =>
    name === 'Key Metrics' ||
    name.toLowerCase() === 'key metrics'
  );

  if (keyMetricsSheet) {
    return keyMetricsSheet;
  }

  // Fallback to old behavior if "Key Metrics" tab doesn't exist
  const preferred = sheetNames.find(name =>
    name === 'Sheet1' ||
    name.toLowerCase().includes('metric') ||
    name.toLowerCase().includes('data')
  );
  return preferred || sheetNames[0];
}

/**
 * Find the review sheet for a specific month
 * First looks for exact date format (YYYY-MM), then falls back to month name format
 */
function findReviewSheet(sheetNames, month) {
  const [year, monthNum] = month.split('-');

  // First, look for exact date format match (e.g., "2025-12")
  const exactMatch = sheetNames.find(name => name === month);
  if (exactMatch) {
    return exactMatch;
  }

  // Fallback: look for sheets like "Jan 2025 Analytics Review" or "Jan 2025"
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthName = monthNames[parseInt(monthNum) - 1];

  return sheetNames.find(name => {
    const nameLower = name.toLowerCase();
    return (
      (nameLower.includes(monthName.toLowerCase()) && nameLower.includes(year)) ||
      (nameLower.includes('review') && nameLower.includes(monthName.toLowerCase()))
    );
  });
}

/**
 * Parse the metrics sheet (wide format) into long format
 * Returns ALL historical data for trend charts, with current month marked
 */
function parseMetricsSheet(sheet, month, customMappings = {}) {
  const data = XLSX.utils.sheet_to_json(sheet, { defval: null, cellDates: true });
  const mappings = { ...DEFAULT_METRIC_MAPPINGS, ...customMappings };

  if (data.length === 0) {
    return [];
  }

  // Create case-insensitive column name lookup
  // Maps lowercase, trimmed column names to actual column names in the Excel file
  const columnNameMap = {};
  if (data.length > 0) {
    const firstRow = data[0];
    for (const actualColName of Object.keys(firstRow)) {
      const normalizedName = actualColName.toLowerCase().trim();
      columnNameMap[normalizedName] = actualColName;
    }
  }

  const [year, monthNum] = month.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthName = monthNames[parseInt(monthNum) - 1];

  const metrics = [];
  let currentMonthIndex = -1;
  let inlineNote = null;

  const targetPrefix = `${year}-${monthNum.padStart(2, '0')}`;

  // First pass: find the LAST row that matches the current month
  // This handles cases where there are multiple rows for the same month (e.g., "Dec 11th, 2025" and "Dec 1 - Dec 31st, 2025")
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (row.Date === null || row.Date === undefined) continue;

    const parsedDate = parseDateFromString(row.Date);
    if (!parsedDate) continue;

    if (parsedDate.startsWith(targetPrefix)) {
      currentMonthIndex = i; // Keep updating to get the LAST matching row
      // Extract inline notes from current month
      if (row.Notes) {
        inlineNote = row.Notes;
      }
    }
  }

  // Parse ALL rows for historical trend data
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (row.Date === null || row.Date === undefined) continue;

    // Parse the date from the row
    const parsedDate = parseDateFromString(row.Date);
    if (!parsedDate) continue; // Skip if we can't parse the date

    // Only mark the LAST row that matched as isCurrentMonth
    const isCurrentMonth = (i === currentMonthIndex);

    // Get previous row for change calculation
    const previousRow = i > 0 ? data[i - 1] : null;

    // Transform wide format to long format for all metrics
    for (const [columnName, mapping] of Object.entries(mappings)) {
      // Find the actual column name (case-insensitive, trimmed match)
      const normalizedColumnName = columnName.toLowerCase().trim();
      const actualColumnName = columnNameMap[normalizedColumnName];

      if (actualColumnName && row[actualColumnName] !== undefined && row[actualColumnName] !== null) {
        let value = row[actualColumnName];
        let previousValue = previousRow ? previousRow[actualColumnName] : null;

        // Handle text values (preserve as plain text, convert dates back to M/D format)
        if (mapping.isText) {
          // If Excel converted "6/5" to a date, convert it back
          if (value instanceof Date) {
            value = `${value.getMonth() + 1}/${value.getDate()}`;
          } else {
            // Keep as string
            value = String(value);
          }

          if (previousValue instanceof Date) {
            previousValue = `${previousValue.getMonth() + 1}/${previousValue.getDate()}`;
          } else if (previousValue !== null) {
            previousValue = String(previousValue);
          }

          metrics.push({
            date: parsedDate,
            metricName: mapping.name,
            value: value,
            previousValue: previousValue || '',
            category: mapping.category,
            change: { value: 0, direction: 'neutral', formatted: 'N/A' }, // No change calculation for text
            isCurrentMonth: isCurrentMonth,
            isPercentage: false,
            lowerIsBetter: mapping.lowerIsBetter || false
          });
          continue; // Skip numeric processing
        }

        // Handle percentage values (stored as decimals like 0.69)
        if (mapping.isPercentage && typeof value === 'number' && value <= 1) {
          value = value * 100;
          if (previousValue !== null && typeof previousValue === 'number' && previousValue <= 1) {
            previousValue = previousValue * 100;
          }
        }

        // Parse string numbers with commas
        if (typeof value === 'string') {
          value = parseFloat(value.replace(/,/g, '')) || 0;
        }
        if (typeof previousValue === 'string') {
          previousValue = parseFloat(previousValue.replace(/,/g, '')) || 0;
        }

        metrics.push({
          date: parsedDate,
          metricName: mapping.name,
          value: value,
          previousValue: previousValue || 0,
          category: mapping.category,
          change: calculateChange(value, previousValue, mapping.absoluteChange, mapping.isPercentage),
          isCurrentMonth: isCurrentMonth,
          isPercentage: mapping.isPercentage || false,
          lowerIsBetter: mapping.lowerIsBetter || false
        });
      }
    }
  }

  if (currentMonthIndex === -1) {
    console.warn(`  Warning: No data found for ${month} in Key Metrics sheet`);
  }

  // Add inline note if present
  if (inlineNote) {
    metrics._inlineNote = inlineNote;
  }

  return metrics;
}

/**
 * Parse a date value from the Excel Date column.
 * Handles: JS Date objects, M/D/YYYY numeric strings, "Jan 2025", "Oct 31st, 2025", date ranges.
 * Returns YYYY-MM-DD format (always normalized to the 1st of the month).
 */
function parseDateFromString(dateValue) {
  if (!dateValue && dateValue !== 0) return null;

  // Handle JavaScript Date objects (returned by xlsx when cellDates: true)
  if (dateValue instanceof Date) {
    const m = dateValue.getMonth() + 1;
    const y = dateValue.getFullYear();
    return `${y}-${String(m).padStart(2, '0')}-01`;
  }

  const dateStr = String(dateValue).trim();
  if (!dateStr) return null;

  // Handle M/D/YYYY or MM/DD/YYYY numeric format (e.g., "3/18/2026", "4/14/2026")
  const numericMatch = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (numericMatch) {
    const monthNum = parseInt(numericMatch[1], 10);
    const year = numericMatch[3];
    return `${year}-${String(monthNum).padStart(2, '0')}-01`;
  }

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fullMonthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December'];

  // Try to extract month and year from the string
  // Patterns to try:
  // 1. "Oct 31st, 2025" or "Nov 30th, 2025"
  // 2. "Dec 1 - Dec 31st, 2025"
  // 3. "Jan 2025" or "January 2025"
  const patterns = [
    /([A-Za-z]+)\s+\d+(?:st|nd|rd|th)?,?\s+(\d{4})/, // Oct 31st, 2025
    /([A-Za-z]+)\s+\d+\s*-\s*[A-Za-z]+\s+\d+(?:st|nd|rd|th)?,?\s+(\d{4})/, // Dec 1 - Dec 31st, 2025
    /([A-Za-z]+)[,\s-]*(\d{4})/ // Jan 2025
  ];

  let monthStr = null;
  let year = null;

  for (const pattern of patterns) {
    const match = dateStr.match(pattern);
    if (match) {
      monthStr = match[1];
      year = match[2];
      break;
    }
  }

  if (!monthStr || !year) return null;

  // Find month number
  let monthNum = monthNames.findIndex(m => monthStr.toLowerCase().startsWith(m.toLowerCase())) + 1;

  if (monthNum === 0) {
    monthNum = fullMonthNames.findIndex(m => monthStr.toLowerCase() === m.toLowerCase()) + 1;
  }

  if (monthNum === 0) return null;

  return `${year}-${String(monthNum).padStart(2, '0')}-01`;
}

/**
 * Parse the review sheet (unstructured notes) into structured format
 */
function parseReviewSheet(sheet, month) {
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  const notes = [];
  const [year, monthNum] = month.split('-');
  const dateStr = `${year}-${monthNum}-15`; // Mid-month date for notes

  let currentSection = 'highlights';
  let noteBuffer = [];
  let noteBufferStartRow = 0;

  for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
    const row = data[rowIndex];
    const cellValue = String(row[0] || '').trim();
    const secondCell = String(row[1] || '').trim();

    if (!cellValue) continue;

    // Detect section headers
    if (cellValue.toLowerCase().includes('notes/highlights') ||
        (cellValue.toLowerCase() === 'highlights')) {
      flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr);
      currentSection = 'highlights';
      noteBuffer = [];
      noteBufferStartRow = rowIndex + 1;
      continue;
    }

    if (cellValue.toLowerCase() === 'lowlights' ||
        cellValue.toLowerCase().includes('low lights')) {
      flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr);
      currentSection = 'lowlights';
      noteBuffer = [];
      noteBufferStartRow = rowIndex + 1;
      continue;
    }

    if (cellValue.toLowerCase().includes('notes and questions') ||
        cellValue.toLowerCase().includes('notes & questions') ||
        cellValue.toLowerCase().includes('questions') ||
        cellValue.toLowerCase().includes('feedback')) {
      flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr);
      currentSection = 'notes and questions';
      noteBuffer = [];
      noteBufferStartRow = rowIndex + 1;
      continue;
    }

    // Check if this is a URL with associated note
    if (cellValue.startsWith('http')) {
      // Just add to buffer - URLs are part of the note content
      noteBuffer.push(cellValue);
      if (secondCell) {
        noteBuffer.push(secondCell);
      }
      continue;
    }

    // Check if this is a headline + content pattern:
    // Column A is concise (1-80 chars) and Column B has substantial content (> 50 chars)
    // This means Column A is the explicit headline, Column B is the description
    if (cellValue.length > 0 && cellValue.length <= 80 &&
        secondCell.length > 50) {
      // Flush any existing buffer
      if (noteBuffer.length > 0) {
        flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr);
        noteBuffer = [];
      }

      // Create note with explicit headline
      notes.push({
        date: dateStr,
        title: cellValue, // Use Column A as explicit headline
        note: secondCell, // Use Column B as content
        section: currentSection,
        screenshotFile: null,
        rowNumber: rowIndex
      });

      noteBufferStartRow = rowIndex + 1;
      continue;
    }

    // Regular note text - add to buffer
    if (noteBuffer.length === 0) {
      noteBufferStartRow = rowIndex;
    }
    noteBuffer.push(cellValue);
    if (secondCell) {
      noteBuffer.push(secondCell);
    }

    // Check if next row is empty or an image - flush if so
    const nextRowIndex = rowIndex + 1;
    if (nextRowIndex >= data.length || !String(data[nextRowIndex][0] || '').trim()) {
      flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr);
      noteBuffer = [];
      noteBufferStartRow = nextRowIndex + 1;
    }
  }

  // Flush any remaining notes
  flushNoteBuffer(notes, noteBuffer, noteBufferStartRow, currentSection, dateStr);

  return notes;
}

/**
 * Clean up a generated title by removing incomplete trailing fragments
 */
function cleanupTrailingFragments(title) {
  if (!title) return '';

  // Remove trailing fragments after commas (max 2 words)
  // Example: "Overall traffic went down, this" → "Overall traffic went down"
  const commaFragmentPattern = /,\s+(\w+(?:\s+\w+)?)$/;
  const commaMatch = title.match(commaFragmentPattern);

  if (commaMatch) {
    const fragment = commaMatch[1];
    const wordCount = fragment.split(/\s+/).length;

    // If the fragment is only 1-2 words, remove it
    if (wordCount <= 2) {
      return title.replace(commaFragmentPattern, '').trim();
    }
  }

  // Remove trailing fragments after periods (max 2 words)
  const periodFragmentPattern = /\.\s+(\w+(?:\s+\w+)?)$/;
  const periodMatch = title.match(periodFragmentPattern);

  if (periodMatch) {
    const fragment = periodMatch[1];
    const wordCount = fragment.split(/\s+/).length;

    // If the fragment is only 1-2 words, remove it
    if (wordCount <= 2) {
      return title.replace(periodFragmentPattern, '.').trim();
    }
  }

  return title.trim();
}

/**
 * Auto-generate a concise title from note text using smart extraction
 */
function generateTitle(text) {
  if (!text) return '';

  // Remove URLs from text for title generation
  let cleanText = text.replace(/(https?:\/\/[^\s<>"']+)/g, '').trim();

  // Remove quoted sections (like prompts in quotes)
  cleanText = cleanText.replace(/"[^"]+"/g, '').trim();

  // Remove parenthetical sections (like "(seasonality)")
  cleanText = cleanText.replace(/\([^)]+\)/g, '').trim();

  // Split into sentences, but also consider colons and dashes as separators
  let workingText = cleanText.split(/[.!?]\s+/)[0] || cleanText;

  // If the first part before a colon/dash is substantial, use that
  const beforeColon = workingText.split(/[:–—-]\s*/)[0];
  if (beforeColon && beforeColon.length > 20 && beforeColon.length < workingText.length) {
    workingText = beforeColon;
  }

  // For comma-separated clauses, use the first clause only if it's complete
  const beforeComma = workingText.split(/,\s+/)[0];
  if (beforeComma && beforeComma.length > 15) {
    workingText = beforeComma;
  }

  // Pattern 1: Extract percentage/number with action and subject
  // Examples: "20.1% increase in citations" → "20.1% citation increase"
  const percentPattern = /(\d+\.?\d*%)\s+(increase|decrease|growth|decline|drop|rise|improvement|reduction)\s+(?:in|of|for)\s+([^,:\n]+)/i;
  const percentMatch = workingText.match(percentPattern);

  if (percentMatch) {
    const [, number, action, subject] = percentMatch;
    const subjectWords = subject.trim().split(/\s+/).slice(0, 3);
    const cleanSubject = subjectWords.join(' ').replace(/\b(?:the|our|from|on)\b/gi, '').trim();
    return `${number} ${cleanSubject} ${action}`.replace(/\s+/g, ' ');
  }

  // Pattern 2: "within X timeframe" achievements
  // Examples: "article got citation within 3 days" → "Citation within 3 days"
  const timeframePattern = /(?:got|received|achieved|reached)\s+(?:a\s+)?([a-z]+(?:\s+[a-z]+)?)\s+within\s+(\d+\s+(?:days?|hours?|weeks?|months?))/i;
  const timeframeMatch = workingText.match(timeframePattern);

  if (timeframeMatch) {
    const [, achievement, timeframe] = timeframeMatch;
    return `${achievement.charAt(0).toUpperCase() + achievement.slice(1)} within ${timeframe}`;
  }

  // Pattern 3: "first X" patterns
  // Examples: "seeing their first LLM citations" → "First LLM citations"
  const firstPattern = /(?:seeing|getting|received?|got)\s+(?:their|its)?\s*first\s+([a-z]+(?:\s+[a-z]+){0,3})/i;
  const firstMatch = workingText.match(firstPattern);

  if (firstMatch) {
    const [, subject] = firstMatch;
    return `First ${subject}`;
  }

  // Pattern 4: "went up/down" or "increased/decreased" patterns
  // Examples: "Overall traffic to the website went down" → "Traffic went down"
  const trendPattern = /^(?:overall\s+)?([a-z]+(?:\s+[a-z]+){0,2}?)\s+(?:to\s+the\s+[a-z]+\s+)?(went\s+(?:up|down)|increased|decreased|dropped|rose|grew|improved|declined)/i;
  const trendMatch = workingText.match(trendPattern);

  if (trendMatch) {
    const [, subject, action] = trendMatch;
    const cleanSubject = subject.trim().replace(/\b(?:the|our)\b/gi, '').trim();
    return `${cleanSubject} ${action}`.replace(/\s+/g, ' ').trim();
  }

  // Pattern 5: Number + metric pattern
  // Examples: "1,234 new users" → "1,234 new users"
  const numberMetricPattern = /\b(\d{1,3}(?:,\d{3})*|\d+)\s+(new|total|additional|active)?\s*([a-z]+(?:\s+[a-z]+)?)/i;
  const numberMatch = workingText.match(numberMetricPattern);

  if (numberMatch) {
    const [, number, modifier, metric] = numberMatch;
    return cleanupTrailingFragments(`${number} ${modifier || ''} ${metric}`.replace(/\s+/g, ' ').trim());
  }

  // Pattern 6: Action word + subject pattern
  // Examples: "Launched new feature" → "Launched new feature"
  const actionPattern = /^(launched|released|improved|fixed|updated|added|removed|completed|achieved|reached|hit)\s+([^,:.\n]+)/i;
  const actionMatch = workingText.match(actionPattern);

  if (actionMatch) {
    const [, action, subject] = actionMatch;
    const subjectWords = subject.trim().split(/\s+/).slice(0, 4);
    return cleanupTrailingFragments(`${action} ${subjectWords.join(' ')}`.trim());
  }

  // Pattern 7: Subject + reached/hit + milestone
  // Examples: "Website reached 10K users" → "10K users reached"
  const milestonePattern = /([^,:.\n]+)\s+(reached|hit|achieved|exceeded|surpassed)\s+([^,:.\n]+)/i;
  const milestoneMatch = workingText.match(milestonePattern);

  if (milestoneMatch) {
    const [, subject, action, milestone] = milestoneMatch;
    const milestoneWords = milestone.trim().split(/\s+/).slice(0, 3);
    return cleanupTrailingFragments(`${milestoneWords.join(' ')} ${action}`.trim());
  }

  // Fallback: Take key words from the beginning
  // Remove filler words but be more selective
  const words = workingText.split(/\s+/);
  const meaningfulWords = words.filter(word => {
    const lower = word.toLowerCase();
    const filler = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'from', 'with', 'by'];
    return !filler.includes(lower) && word.length > 0 && word !== ',';
  });

  let fallback = meaningfulWords.slice(0, 6).join(' ');

  // Limit to 60 characters max
  if (fallback.length > 60) {
    const truncated = fallback.substring(0, 57);
    const lastSpace = truncated.lastIndexOf(' ');
    fallback = (lastSpace > 25 ? truncated.substring(0, lastSpace) : truncated) + '...';
  }

  // If fallback is too short or starts with punctuation, use the first few words instead
  if (fallback.length < 3 || /^[,;:\-]/.test(fallback)) {
    fallback = words.slice(0, 8).join(' ');
    if (fallback.length > 60) {
      fallback = fallback.substring(0, 57) + '...';
    }
  }

  // Clean up any trailing fragments before returning
  return cleanupTrailingFragments(fallback.trim());
}

/**
 * Flush buffered notes into a single note entry
 */
function flushNoteBuffer(notes, buffer, rowNumber, section, dateStr) {
  if (buffer.length === 0) return;

  const combinedNote = buffer.join('\n');
  const autoTitle = generateTitle(combinedNote);

  notes.push({
    date: dateStr,
    title: autoTitle,
    note: combinedNote,
    section: section,
    screenshotFile: null,
    rowNumber: rowNumber // Track row position for image matching
  });
}

/**
 * Extract a readable title from a URL
 */
function extractTitleFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    if (pathParts.length > 0) {
      const lastPart = pathParts[pathParts.length - 1];
      return lastPart
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
    }
    return urlObj.hostname;
  } catch {
    return url.substring(0, 50);
  }
}

/**
 * Calculate percentage change or absolute change between two values
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @param {boolean} absoluteChange - If true, return absolute difference instead of percentage
 */
function calculateChange(current, previous, absoluteChange = false, isPercentage = false) {
  if (!previous && previous !== 0) {
    return { value: 0, direction: 'neutral', formatted: 'N/A' };
  }

  if (absoluteChange) {
    // Calculate absolute difference
    const change = current - previous;
    const direction = change > 0 ? 'up' : change < 0 ? 'down' : 'neutral';

    // For percentage metrics, show one decimal place (without % sign since values already represent percentages)
    let formatted;
    if (isPercentage) {
      formatted = `${change >= 0 ? '+' : ''}${change.toFixed(1)}`;
    } else {
      formatted = `${change >= 0 ? '+' : ''}${Math.round(change)}`;
    }

    return { value: change, direction, formatted };
  } else {
    // Calculate percentage change
    if (previous === 0) {
      return { value: 0, direction: 'neutral', formatted: 'N/A' };
    }

    const change = ((current - previous) / previous) * 100;
    const direction = change > 0 ? 'up' : change < 0 ? 'down' : 'neutral';
    const formatted = `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`;

    return { value: change, direction, formatted };
  }
}

/**
 * Get list of available months from an Excel file
 */
export function getAvailableMonths(filePath) {
  const workbook = XLSX.readFile(filePath);
  const metricsSheetName = findMetricsSheet(workbook.SheetNames);
  const sheet = workbook.Sheets[metricsSheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { defval: null, cellDates: true });

  const months = [];

  for (const row of data) {
    if (row.Date === null || row.Date === undefined) continue;
    const parsedDate = parseDateFromString(row.Date);
    if (parsedDate) {
      months.push(parsedDate.substring(0, 7)); // "YYYY-MM"
    }
  }

  return months;
}
