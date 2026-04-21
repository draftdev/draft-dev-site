import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

/**
 * Parse a CSV file and return the data as an array of objects
 * @param {string} filePath - Path to the CSV file
 * @returns {Promise<Array<Object>>} Parsed CSV data
 */
export async function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  return new Promise((resolve, reject) => {
    Papa.parse(content, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          console.warn('CSV parsing warnings:', results.errors);
        }
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}

/**
 * Parse metrics CSV file for a specific month
 * @param {string} clientDir - Path to client directory
 * @param {string} month - Month in YYYY-MM format
 * @returns {Promise<Array<Object>>} Parsed metrics data
 */
export async function parseMetrics(clientDir, month) {
  const metricsFile = path.join(clientDir, 'data', `${month}-metrics.csv`);

  if (!fs.existsSync(metricsFile)) {
    throw new Error(`Metrics file not found: ${metricsFile}`);
  }

  const data = await parseCSV(metricsFile);

  // Process and validate metrics data
  return data.map(row => ({
    date: row.date,
    metricName: row.metric_name,
    value: parseFloat(row.value) || 0,
    previousValue: parseFloat(row.previous_value) || 0,
    category: row.category || 'general',
    change: calculateChange(row.value, row.previous_value)
  }));
}

/**
 * Parse notes CSV file
 * @param {string} clientDir - Path to client directory
 * @returns {Promise<Array<Object>>} Parsed notes data
 */
export async function parseNotes(clientDir) {
  const notesFile = path.join(clientDir, 'data', 'notes.csv');

  if (!fs.existsSync(notesFile)) {
    return []; // Notes are optional
  }

  const data = await parseCSV(notesFile);

  return data.map(row => ({
    date: row.date,
    screenshotFile: row.screenshot_file || null,
    title: row.title || '',
    note: row.note || '',
    section: row.section || 'general'
  }));
}

/**
 * Calculate percentage change between two values
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {Object} Change object with value and direction
 */
function calculateChange(current, previous) {
  if (!previous || previous === 0) {
    return { value: 0, direction: 'neutral', formatted: 'N/A' };
  }

  const change = ((current - previous) / previous) * 100;
  const direction = change > 0 ? 'up' : change < 0 ? 'down' : 'neutral';
  const formatted = `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`;

  return { value: change, direction, formatted };
}

/**
 * Group metrics by category
 * @param {Array<Object>} metrics - Array of metric objects
 * @returns {Object} Metrics grouped by category
 */
export function groupMetricsByCategory(metrics) {
  return metrics.reduce((acc, metric) => {
    const category = metric.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(metric);
    return acc;
  }, {});
}

/**
 * Format date for chart labels (YYYY-MM-DD to "Mon YYYY")
 */
function formatDateLabel(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00'); // Add time to avoid timezone issues
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * Get metrics for chart data (grouped by date for time series)
 * @param {Array<Object>} metrics - Array of metric objects
 * @param {string} metricName - Name of metric to extract
 * @returns {Object} Chart data with labels, values, and current month index
 */
export function getChartData(metrics, metricName) {
  const filtered = metrics.filter(m => m.metricName === metricName);

  // Sort by date
  filtered.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Find the index of the current month (if marked)
  const currentMonthIndex = filtered.findIndex(m => m.isCurrentMonth === true);

  return {
    labels: filtered.map(m => formatDateLabel(m.date)),
    values: filtered.map(m => m.value),
    previousValues: filtered.map(m => m.previousValue),
    currentMonthIndex: currentMonthIndex >= 0 ? currentMonthIndex : null
  };
}
