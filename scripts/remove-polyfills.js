// const fs = require('fs')
// const path = require('path')

// function removePolyfillsFromBuild() {
//   const chunksDir = path.join(process.cwd(), '.next', 'static', 'chunks')

//   if (!fs.existsSync(chunksDir)) {
//     console.error('Build directory not found')
//     return
//   }

//   // Find the polyfill chunk (starts with 117-)
//   const files = fs.readdirSync(chunksDir)
//   const polyfillChunk = files.find((f) => f.startsWith('117-'))

//   if (!polyfillChunk) {
//     console.log('Polyfill chunk not found')
//     return
//   }

//   const filePath = path.join(chunksDir, polyfillChunk)
//   const originalContent = fs.readFileSync(filePath, 'utf8')
//   const originalSize = Buffer.byteLength(originalContent)

//   // Find the polyfill function and replace its body with minimal code
//   let content = originalContent

//   // Look for the pattern: /***/ 1572: /***/ (function() { ... })
//   // And replace the entire polyfill block with an empty function
//   const polyfillPattern =
//     /\/\*\*\*\/ 1572:\s*\n\/\*\*\*\/ \(function\(\) \{[\s\S]*?\n\n\/\*\*\*\/ \}\)/

//   if (polyfillPattern.test(content)) {
//     // Replace with minimal valid function
//     content = content.replace(
//       polyfillPattern,
//       '/***/ 1572:\n/***/ (function() {\n\n// Polyfills removed for modern browsers\n\n/***/ })',
//     )

//     const newSize = Buffer.byteLength(content)
//     const savedKB = ((originalSize - newSize) / 1024).toFixed(1)

//     // Write the modified file
//     fs.writeFileSync(filePath, content)

//     console.log(`✅ Removed polyfills from ${polyfillChunk}`)
//     console.log(`   Original size: ${(originalSize / 1024).toFixed(1)} KB`)
//     console.log(`   New size: ${(newSize / 1024).toFixed(1)} KB`)
//     console.log(`   Saved: ${savedKB} KB`)

//     // Verify the result
//     const verifyContent = fs.readFileSync(filePath, 'utf8')
//     const hasPolyfills = verifyContent.includes('Array.prototype.at')
//     console.log(
//       `   Verification: ${hasPolyfills ? '❌ Polyfills still present' : '✅ Polyfills removed'}`,
//     )
//   } else {
//     console.log('❌ Could not find polyfill pattern in chunk')

//     // Try alternative approach - remove individual polyfills
//     let modified = false

//     // Remove each polyfill line by line
//     const lines = content.split('\n')
//     const filteredLines = lines.filter((line) => {
//       // Skip lines that define polyfills
//       if (
//         line.includes('"trimStart"in String.prototype') ||
//         line.includes('"trimEnd"in String.prototype') ||
//         line.includes('Array.prototype.flat') ||
//         line.includes('Array.prototype.at') ||
//         line.includes('Object.fromEntries') ||
//         line.includes('Object.hasOwn')
//       ) {
//         modified = true
//         return false
//       }
//       return true
//     })

//     if (modified) {
//       content = filteredLines.join('\n')
//       fs.writeFileSync(filePath, content)

//       const newSize = Buffer.byteLength(content)
//       const savedKB = ((originalSize - newSize) / 1024).toFixed(1)

//       console.log(`✅ Removed polyfills using line filter`)
//       console.log(`   Saved: ${savedKB} KB`)
//     }
//   }
// }

// // Run the removal
// removePolyfillsFromBuild()
