import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Sleep helper function
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate a PDF from an HTML file using Puppeteer
 * @param {string} htmlPath - Absolute path to the HTML file
 * @param {string} outputPath - Absolute path for the output PDF file
 * @param {Object} options - PDF generation options
 * @returns {Promise<string>} - Path to the generated PDF
 */
export async function generatePDF(htmlPath, outputPath, options = {}) {
  let browser;

  try {
    // Launch Puppeteer browser
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Load the HTML file
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0', // Wait for all network requests to finish (CDN loads)
      timeout: 30000
    });

    // Wait for Chart.js charts to be fully rendered
    // The charts template sets window.__chartsReady when all charts are initialized
    await page.waitForFunction(
      () => window.__chartsReady === true,
      { timeout: 30000 }
    );

    // Add a small buffer to ensure final rendering is complete
    await sleep(500);

    // Configure PDF options
    const pdfOptions = {
      path: outputPath,
      format: options.format || 'Letter',
      printBackground: true,
      margin: {
        top: options.margin?.top || '0.5in',
        right: options.margin?.right || '0.5in',
        bottom: options.margin?.bottom || '0.5in',
        left: options.margin?.left || '0.5in'
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false
    };

    // Generate the PDF
    await page.pdf(pdfOptions);

    return outputPath;
  } catch (error) {
    throw new Error(`PDF generation failed: ${error.message}`);
  } finally {
    // Always close the browser to free resources
    if (browser) {
      await browser.close();
    }
  }
}

/**
 * Generate PDFs for multiple HTML files using a single browser instance
 * @param {Array<{htmlPath: string, outputPath: string}>} files - Array of file pairs
 * @param {Object} options - PDF generation options
 * @returns {Promise<Array<string>>} - Array of paths to generated PDFs
 */
export async function generatePDFBatch(files, options = {}) {
  let browser;
  const results = [];

  try {
    // Launch browser once for all files
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const { htmlPath, outputPath } of files) {
      const page = await browser.newPage();

      try {
        // Load the HTML file
        await page.goto(`file://${htmlPath}`, {
          waitUntil: 'networkidle0',
          timeout: 30000
        });

        // Wait for charts to be ready
        await page.waitForFunction(
          () => window.__chartsReady === true,
          { timeout: 30000 }
        );

        await page.waitForTimeout(500);

        // Configure PDF options
        const pdfOptions = {
          path: outputPath,
          format: options.format || 'Letter',
          printBackground: true,
          margin: {
            top: options.margin?.top || '0.5in',
            right: options.margin?.right || '0.5in',
            bottom: options.margin?.bottom || '0.5in',
            left: options.margin?.left || '0.5in'
          },
          preferCSSPageSize: false,
          displayHeaderFooter: false
        };

        await page.pdf(pdfOptions);
        results.push(outputPath);
      } catch (error) {
        console.error(`Failed to generate PDF for ${htmlPath}: ${error.message}`);
        results.push(null);
      } finally {
        await page.close();
      }
    }

    return results;
  } catch (error) {
    throw new Error(`PDF batch generation failed: ${error.message}`);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
