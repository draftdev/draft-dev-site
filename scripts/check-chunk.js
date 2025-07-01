// const fs = require('fs')
// const path = require('path')

// // Find and analyze the chunk
// const chunksDir = path.join(process.cwd(), '.next', 'static', 'chunks')
// const chunkFiles = fs.readdirSync(chunksDir).filter((f) => f.startsWith('117-'))

// if (chunkFiles.length > 0) {
//   const chunkPath = path.join(chunksDir, chunkFiles[0])
//   const content = fs.readFileSync(chunkPath, 'utf8')

//   // Check for polyfills
//   const polyfills = {
//     'Array.prototype.at': content.includes('Array.prototype.at'),
//     'Array.prototype.flat': content.includes('Array.prototype.flat'),
//     'Object.fromEntries': content.includes('Object.fromEntries'),
//     'String.prototype.trimEnd': content.includes('trimEnd'),
//     'core-js': content.includes('core-js'),
//     '@babel/runtime': content.includes('@babel/runtime'),
//     regenerator: content.includes('regenerator'),
//   }

//   console.log('Chunk analysis:', chunkFiles[0])
//   console.log('Size:', (fs.statSync(chunkPath).size / 1024).toFixed(1), 'KB')
//   console.log('\nPolyfills found:')
//   Object.entries(polyfills).forEach(([name, found]) => {
//     if (found) console.log('  ✓', name)
//   })

//   // Sample the first 500 chars to see what's in there
//   console.log('\nFirst 500 characters:')
//   console.log(content.substring(0, 500))
// }
