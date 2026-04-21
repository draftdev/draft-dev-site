import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import { parseMetrics, parseNotes, groupMetricsByCategory, getChartData } from './parsers/csv-parser.js';
import { parseExcel, getAvailableMonths } from './parsers/excel-parser.js';
import { loadScreenshots, encodeImageToBase64 } from './utils/image-encoder.js';
import { ChartRenderer } from './charts/chart-renderer.js';
import { generatePDF } from './pdf-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Load client configuration
 * @param {string} clientDir - Path to client directory
 * @returns {Object} Client configuration
 */
export function loadClientConfig(clientDir) {
  const configPath = path.join(clientDir, 'config.json');

  if (!fs.existsSync(configPath)) {
    throw new Error(`Client config not found: ${configPath}`);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

  // Set defaults
  return {
    name: config.name || 'Unnamed Client',
    brandColor: config.brandColor || '#3B82F6',
    sections: config.sections || ['metrics', 'charts', 'screenshots'],
    charts: config.charts || [],
    ...config
  };
}

/**
 * Load Tailwind CSS for embedding
 * @returns {string} Tailwind CSS content
 */
function loadTailwindCSS() {
  const cssPath = path.join(__dirname, '..', 'styles', 'output.css');

  if (fs.existsSync(cssPath)) {
    return fs.readFileSync(cssPath, 'utf-8');
  }

  // Return minimal fallback CSS if Tailwind hasn't been built
  console.warn('Warning: Tailwind CSS not found. Using fallback styles.');
  return getFallbackCSS();
}

/**
 * Get fallback CSS when Tailwind isn't available
 * @returns {string} Fallback CSS
 */
function getFallbackCSS() {
  return `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; background: #f9fafb; }
    .min-h-screen { min-height: 100vh; }
    .max-w-7xl { max-width: 80rem; margin: 0 auto; }
    .max-w-full { max-width: 100%; }
    .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
    .px-8 { padding-left: 2rem; padding-right: 2rem; }
    .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
    .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
    .mt-1 { margin-top: 0.25rem; }
    .mt-2 { margin-top: 0.5rem; }
    .mt-3 { margin-top: 0.75rem; }
    .mt-4 { margin-top: 1rem; }
    .mt-12 { margin-top: 3rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .ml-1 { margin-left: 0.25rem; }
    .ml-2 { margin-left: 0.5rem; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .p-4 { padding: 1rem; }
    .p-5 { padding: 1.25rem; }
    .p-6 { padding: 1.5rem; }
    .text-xs { font-size: 0.75rem; }
    .text-sm { font-size: 0.875rem; }
    .text-lg { font-size: 1.125rem; }
    .text-2xl { font-size: 1.5rem; }
    .text-3xl { font-size: 1.875rem; }
    .font-medium { font-weight: 500; }
    .font-semibold { font-weight: 600; }
    .font-bold { font-weight: 700; }
    .text-gray-400 { color: #9ca3af; }
    .text-gray-500 { color: #6b7280; }
    .text-gray-600 { color: #4b5563; }
    .text-gray-700 { color: #374151; }
    .text-gray-900 { color: #111827; }
    .text-green-600 { color: #059669; }
    .text-red-600 { color: #dc2626; }
    .text-emerald-600 { color: #059669; }
    .text-rose-600 { color: #e11d48; }
    .text-right { text-align: right; }
    .bg-white { background-color: #fff; }
    .bg-gray-50 { background-color: #f9fafb; }
    .bg-gray-100 { background-color: #f3f4f6; }
    .border { border-width: 1px; }
    .border-b { border-bottom-width: 1px; }
    .border-t { border-top-width: 1px; }
    .border-gray-200 { border-color: #e5e7eb; }
    .rounded { border-radius: 0.25rem; }
    .rounded-lg { border-radius: 0.5rem; }
    .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
    .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
    .hover\\:shadow-md:hover { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
    .transition-shadow { transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
    .duration-200 { transition-duration: 200ms; }
    .leading-tight { line-height: 1.25; }
    .overflow-hidden { overflow: hidden; }
    .relative { position: relative; }
    .absolute { position: absolute; }
    .inline-block { display: inline-block; }
    .z-1000 { z-index: 1000; }
    .flex { display: flex; }
    .grid { display: grid; }
    .items-center { align-items: center; }
    .items-start { align-items: flex-start; }
    .items-baseline { align-items: baseline; }
    .flex-wrap { flex-wrap: wrap; }
    .justify-between { justify-content: space-between; }
    .justify-center { justify-content: center; }
    .align-items-start { align-items: flex-start; }
    .space-y-6 > * + * { margin-top: 1.5rem; }
    .gap-2 { gap: 0.5rem; }
    .gap-3 { gap: 0.75rem; }
    .gap-4 { gap: 1rem; }
    .gap-6 { gap: 1.5rem; }
    .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
    .capitalize { text-transform: capitalize; }
    .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .max-w-full { max-width: 100%; }
    .h-auto { height: auto; }
    .w-3 { width: 0.75rem; }
    .h-3 { height: 0.75rem; }
    .w-4 { width: 1rem; }
    .h-4 { height: 1rem; }
    .inline { display: inline; }
    @media (min-width: 768px) {
      .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (min-width: 1024px) {
      .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }
    @media (min-width: 1280px) {
      .xl\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    }
  `;
}

/**
 * Generate chart configurations for the report
 * @param {Array} metrics - Parsed metrics data
 * @param {Object} chartConfig - Chart configuration from client config
 * @param {Object} options - Renderer options
 * @returns {Array} Array of chart objects with configurations
 */
function generateCharts(metrics, chartConfig, options) {
  const renderer = new ChartRenderer({
    brandColor: options.brandColor
  });

  const charts = [];

  for (const config of chartConfig) {
    const chartData = getChartData(metrics, config.metric);

    if (chartData.values.length === 0) {
      console.warn(`  Warning: No data found for metric: ${config.metric}`);
      continue;
    }

    const data = {
      labels: chartData.labels,
      values: chartData.values,
      previousValues: config.showPrevious ? chartData.previousValues : null,
      currentLabel: config.currentLabel || 'Current Period',
      previousLabel: config.previousLabel || 'Previous Period',
      currentMonthIndex: chartData.currentMonthIndex
    };

    let chartConfiguration;
    switch (config.type) {
      case 'line':
        chartConfiguration = renderer.createLineChart(data, config.title || config.metric);
        break;
      case 'bar':
        chartConfiguration = renderer.createBarChart(data, config.title || config.metric);
        break;
      case 'comparison':
        chartConfiguration = renderer.createComparisonChart(data, config.title || config.metric);
        break;
      default:
        chartConfiguration = renderer.createLineChart(data, config.title || config.metric);
    }

    charts.push({
      id: `chart-${charts.length}`,
      title: config.title || config.metric,
      config: chartConfiguration,
      description: config.description,
      size: config.size || 'medium' // Default to medium if not specified
    });
  }

  return charts;
}

/**
 * Load main logo from root directory
 * @returns {string|null} Base64 data URI or null
 */
function loadMainLogo() {
  const logoPath = path.join(__dirname, '..', '20250129_draftlogo_main_filled.svg');
  if (fs.existsSync(logoPath)) {
    try {
      return encodeImageToBase64(logoPath);
    } catch (error) {
      console.warn(`Warning: Could not load main logo: ${error.message}`);
    }
  }
  return null;
}

/**
 * Find and load client logo from client directory
 * @param {string} clientDir - Path to client directory
 * @returns {string|null} Base64 data URI or null
 */
function loadClientLogo(clientDir) {
  const validExtensions = ['.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif'];

  for (const ext of validExtensions) {
    const logoPath = path.join(clientDir, `client_logo${ext}`);
    if (fs.existsSync(logoPath)) {
      try {
        return encodeImageToBase64(logoPath);
      } catch (error) {
        console.warn(`Warning: Could not load client logo: ${error.message}`);
      }
    }
  }
  return null;
}

/**
 * Find Excel file in client data directory
 * @param {string} clientDir - Path to client directory
 * @param {Object} config - Client configuration
 * @returns {string|null} Path to Excel file or null
 */
function findExcelFile(clientDir, config) {
  // Check if config specifies an Excel file
  if (config.excelFile) {
    const excelPath = path.join(clientDir, 'data', config.excelFile);
    if (fs.existsSync(excelPath)) {
      return excelPath;
    }
  }

  // Look for any Excel file in the data directory
  const dataDir = path.join(clientDir, 'data');
  if (fs.existsSync(dataDir)) {
    const files = fs.readdirSync(dataDir);
    const excelFile = files.find(f => f.endsWith('.xlsx') || f.endsWith('.xls'));
    if (excelFile) {
      return path.join(dataDir, excelFile);
    }
  }

  return null;
}

/**
 * Find previous reports for a client
 * @param {string} outputDir - Path to output directory
 * @param {string} clientName - Name of the client
 * @param {string} currentMonth - Current month in YYYY-MM format
 * @returns {Array} Array of previous report objects with month and filename
 */
function findPreviousReports(outputDir, clientName, currentMonth) {
  const clientOutputDir = path.join(outputDir, clientName);

  if (!fs.existsSync(clientOutputDir)) {
    return [];
  }

  const files = fs.readdirSync(clientOutputDir);
  const reportFiles = files.filter(f => f.endsWith('-report.html'));

  const reports = reportFiles
    .map(filename => {
      const match = filename.match(/^(\d{4}-\d{2})-report\.html$/);
      if (match) {
        const month = match[1];
        // Only include reports before the current month
        if (month < currentMonth) {
          return {
            month: month,
            filename: filename,
            formattedMonth: formatMonth(month)
          };
        }
      }
      return null;
    })
    .filter(r => r !== null)
    .sort((a, b) => b.month.localeCompare(a.month)); // Sort descending (newest first)

  return reports;
}

/**
 * Generate a report for a client
 * @param {string} clientName - Name of the client folder
 * @param {string} month - Month in YYYY-MM format
 * @param {Object} options - Additional options (format: 'html'|'pdf'|'both')
 * @returns {Promise<{html: string, pdf: string|null}>} Paths to generated reports
 */
export async function generateReport(clientName, month, options = {}) {
  const clientsDir = options.clientsDir || path.join(__dirname, '..', 'clients');
  const outputDir = options.outputDir || path.join(__dirname, '..', 'output');
  const clientDir = path.join(clientsDir, clientName);

  // Validate client exists
  if (!fs.existsSync(clientDir)) {
    throw new Error(`Client not found: ${clientName}`);
  }

  console.log(`Generating report for ${clientName} - ${month}...`);

  // Load configuration
  const config = loadClientConfig(clientDir);
  console.log(`  Loaded config for: ${config.name}`);

  // Check for Excel file
  const excelFile = findExcelFile(clientDir, config);
  let metrics, notes, excelImages = {};

  if (excelFile) {
    // Use Excel parser
    console.log(`  Using Excel file: ${path.basename(excelFile)}`);
    const excelData = await parseExcel(excelFile, month, {
      metricsSheet: config.metricsSheet,
      reviewSheet: config.reviewSheet,
      metricMappings: config.metricMappings
    });
    metrics = excelData.metrics;
    notes = excelData.notes;
    excelImages = excelData.images || {};

    // Add inline note from metrics sheet if present
    if (metrics._inlineNote) {
      notes.unshift({
        date: `${month}-01`,
        title: 'Monthly Summary',
        note: metrics._inlineNote,
        section: 'highlights',
        screenshotFile: null
      });
      delete metrics._inlineNote;
    }
  } else {
    // Fall back to CSV parser
    metrics = await parseMetrics(clientDir, month);
    notes = await parseNotes(clientDir);
  }

  console.log(`  Parsed ${metrics.length} metrics`);
  console.log(`  Parsed ${notes.length} notes`);

  // Separate current month metrics from all historical metrics
  // For Excel: metrics include ALL historical data with isCurrentMonth flag
  // For CSV: metrics only include current month data
  const currentMonthMetrics = metrics.filter(m => m.isCurrentMonth === true || !('isCurrentMonth' in m));
  const allMetrics = metrics; // Keep all historical data for charts

  console.log(`  Current month metrics: ${currentMonthMetrics.length}`);

  // Filter notes for the specified month
  const monthNotes = notes.filter(note => {
    if (!note.date) return true; // Include notes without dates
    return note.date.startsWith(month);
  });

  // Load screenshots from files
  const screenshots = loadScreenshots(clientDir, monthNotes);

  // Add embedded images from Excel to screenshots
  for (const note of monthNotes) {
    if (note.embeddedImage && note.screenshotFile) {
      screenshots[note.screenshotFile] = note.embeddedImage;
    }
  }

  console.log(`  Loaded ${Object.keys(screenshots).length} screenshots`);

  // Generate chart configurations using ALL historical metrics
  const charts = generateCharts(allMetrics, config.charts || [], {
    brandColor: config.brandColor
  });
  console.log(`  Generated ${charts.length} charts`);

  // Group current month metrics by category for Key Metrics display
  const metricsByCategory = groupMetricsByCategory(currentMonthMetrics);

  // Load template
  const templatePath = path.join(__dirname, 'templates', 'report.ejs');
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Load Tailwind CSS
  const tailwindCSS = loadTailwindCSS();

  // Load logos
  const mainLogo = loadMainLogo();
  const clientLogo = loadClientLogo(clientDir);
  console.log(`  Loaded logos: main=${!!mainLogo}, client=${!!clientLogo}`);

  // Find previous reports
  const previousReports = findPreviousReports(outputDir, clientName, month);

  // Prepare template data
  const templateData = {
    clientName: config.name,
    brandColor: config.brandColor,
    reportMonth: formatMonth(month),
    generatedDate: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    sections: config.sections,
    metricsByCategory,
    charts,
    notes: monthNotes,
    screenshots,
    tailwindCSS,
    mainLogo,
    clientLogo,
    previousReports
  };

  // Render template
  const html = ejs.render(template, templateData, {
    filename: templatePath // Required for includes
  });

  // Write output
  const clientOutputDir = path.join(outputDir, clientName);
  if (!fs.existsSync(clientOutputDir)) {
    fs.mkdirSync(clientOutputDir, { recursive: true });
  }

  const htmlPath = path.join(clientOutputDir, `${month}-report.html`);
  fs.writeFileSync(htmlPath, html);

  console.log(`  HTML report saved to: ${htmlPath}`);

  // Generate PDF if requested
  const format = options.format || 'html';
  let pdfPath = null;

  if (format === 'pdf' || format === 'both') {
    try {
      pdfPath = path.join(clientOutputDir, `${month}-report.pdf`);
      console.log(`  Generating PDF...`);
      await generatePDF(htmlPath, pdfPath);
      console.log(`  PDF report saved to: ${pdfPath}`);
    } catch (error) {
      console.error(`  Warning: PDF generation failed: ${error.message}`);
    }
  }

  // Return paths based on format
  return {
    html: htmlPath,
    pdf: pdfPath
  };
}

/**
 * Format month string for display
 * @param {string} month - Month in YYYY-MM format
 * @returns {string} Formatted month string
 */
function formatMonth(month) {
  const [year, monthNum] = month.split('-');
  const date = new Date(year, parseInt(monthNum) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

/**
 * List all clients
 * @param {string} clientsDir - Path to clients directory
 * @returns {Array<string>} List of client names
 */
export function listClients(clientsDir) {
  if (!fs.existsSync(clientsDir)) {
    return [];
  }

  return fs.readdirSync(clientsDir)
    .filter(name => {
      const clientPath = path.join(clientsDir, name);
      const configPath = path.join(clientPath, 'config.json');
      return fs.statSync(clientPath).isDirectory() &&
             name !== '_template' &&
             fs.existsSync(configPath);
    });
}

/**
 * Create a new client from template
 * @param {string} clientName - Name for the new client
 * @param {string} clientsDir - Path to clients directory
 * @returns {string} Path to new client directory
 */
export function createClient(clientName, clientsDir) {
  // Sanitize client name for folder
  const folderName = clientName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const templateDir = path.join(clientsDir, '_template');
  const newClientDir = path.join(clientsDir, folderName);

  if (fs.existsSync(newClientDir)) {
    throw new Error(`Client already exists: ${folderName}`);
  }

  // Create directory structure
  fs.mkdirSync(newClientDir, { recursive: true });
  fs.mkdirSync(path.join(newClientDir, 'data'), { recursive: true });
  fs.mkdirSync(path.join(newClientDir, 'screenshots'), { recursive: true });

  // Copy template config if it exists, otherwise create new one
  const templateConfig = path.join(templateDir, 'config.json');
  const newConfig = path.join(newClientDir, 'config.json');

  let config;
  if (fs.existsSync(templateConfig)) {
    config = JSON.parse(fs.readFileSync(templateConfig, 'utf-8'));
    config.name = clientName;
  } else {
    config = {
      name: clientName,
      brandColor: '#3B82F6',
      excelFile: `${clientName}_ Monthly Analytics Report.xlsx`,
      sections: ['metrics', 'charts', 'screenshots'],
      charts: [
        {
          metric: 'Monthly Users',
          type: 'line',
          title: 'Monthly Website Users',
          showPrevious: false,
          description: 'Total monthly users on the website',
          size: 'large'
        },
        {
          metric: 'Domain Rating',
          type: 'line',
          title: 'Domain Rating',
          showPrevious: false,
          description: 'SEO domain authority rating',
          size: 'small'
        },
        {
          metric: 'Backlinks',
          type: 'line',
          title: 'Backlinks',
          showPrevious: false,
          description: 'Total number of backlinks',
          size: 'small'
        },
        {
          metric: 'SEO Keywords (Position 1-3)',
          type: 'line',
          title: 'SEO Keywords (Position 1-3)',
          showPrevious: false,
          description: 'Keywords ranking in top 3 positions',
          size: 'small'
        },
        {
          metric: 'SEO Keywords (Position 4-10)',
          type: 'line',
          title: 'SEO Keywords (Position 4-10)',
          showPrevious: false,
          description: 'Keywords ranking in positions 4-10',
          size: 'small'
        },
        {
          metric: 'LLM Response Presence',
          type: 'line',
          title: 'LLM Response Presence',
          showPrevious: false,
          description: 'Percentage of LLM responses that include the website',
          size: 'medium'
        },
        {
          metric: 'Citations of Website',
          type: 'bar',
          title: 'Website Citations in LLMs',
          description: 'Number of citations from the website appearing in LLM outputs',
          size: 'medium'
        }
      ]
    };
  }

  fs.writeFileSync(newConfig, JSON.stringify(config, null, 2));

  // Create sample notes.csv
  const notesPath = path.join(newClientDir, 'data', 'notes.csv');
  fs.writeFileSync(notesPath, 'date,screenshot_file,title,note,section\n');

  console.log(`Created new client: ${clientName}`);
  console.log(`  Location: ${newClientDir}`);
  console.log(`  Next steps:`);
  console.log(`    1. Add metrics CSV to: ${path.join(newClientDir, 'data')}`);
  console.log(`    2. Add screenshots to: ${path.join(newClientDir, 'screenshots')}`);
  console.log(`    3. Update config.json as needed`);

  return newClientDir;
}

export default { generateReport, listClients, createClient, loadClientConfig };
