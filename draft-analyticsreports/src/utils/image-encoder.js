import fs from 'fs';
import path from 'path';

/**
 * Encode an image file to base64 data URI
 * @param {string} imagePath - Path to the image file
 * @returns {string} Base64 data URI
 */
export function encodeImageToBase64(imagePath) {
  if (!fs.existsSync(imagePath)) {
    throw new Error(`Image file not found: ${imagePath}`);
  }

  const imageBuffer = fs.readFileSync(imagePath);
  const base64 = imageBuffer.toString('base64');
  const mimeType = getMimeType(imagePath);

  return `data:${mimeType};base64,${base64}`;
}

/**
 * Get MIME type from file extension
 * @param {string} filePath - Path to the file
 * @returns {string} MIME type
 */
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  const mimeTypes = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml'
  };

  return mimeTypes[ext] || 'image/png';
}

/**
 * Load and encode all screenshots for a client
 * @param {string} clientDir - Path to client directory
 * @param {Array<Object>} notes - Notes with screenshot references
 * @returns {Object} Map of filename to base64 data URI
 */
export function loadScreenshots(clientDir, notes) {
  const screenshotsDir = path.join(clientDir, 'screenshots');
  const screenshots = {};

  if (!fs.existsSync(screenshotsDir)) {
    return screenshots;
  }

  // Get unique screenshot files from notes (excluding embedded Excel images)
  const screenshotFiles = new Set(
    notes
      .filter(note => note.screenshotFile && !note.embeddedImage)
      .map(note => note.screenshotFile)
  );

  // Encode each referenced screenshot
  for (const filename of screenshotFiles) {
    const imagePath = path.join(screenshotsDir, filename);
    try {
      screenshots[filename] = encodeImageToBase64(imagePath);
    } catch (error) {
      console.warn(`Warning: Could not load screenshot ${filename}: ${error.message}`);
    }
  }

  return screenshots;
}

/**
 * Load all images from a directory
 * @param {string} dirPath - Path to directory
 * @returns {Array<Object>} Array of image objects with name and data URI
 */
export function loadAllImages(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const validExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
  const files = fs.readdirSync(dirPath);

  return files
    .filter(file => validExtensions.includes(path.extname(file).toLowerCase()))
    .map(file => ({
      filename: file,
      name: path.basename(file, path.extname(file)),
      dataUri: encodeImageToBase64(path.join(dirPath, file))
    }));
}
