const fs = require('fs')
const xml = require('xmlbuilder')
require('dotenv').config()

// Function to fetch posts from WordPress with pagination
const fetchPosts = async () => {
  try {
    const allPosts = []
    let hasNextPage = true
    let endCursor = null

    // Get credentials from environment variables
    const username = process.env.WORDPRESS_API_USERNAME || 'Draft.dev'
    const password =
      process.env.WORDPRESS_API_PASSWORD || 'zPRCUEi3yuKXCax3aABQ'

    // Create basic auth header
    const auth = Buffer.from(`${username}:${password}`).toString('base64')

    // Continue fetching while there are more pages
    while (hasNextPage) {
      const query = `
        query FetchPosts($after: String) {
          posts(first: 100, after: $after, where: { status: PUBLISH }) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              slug
              modified
            }
          }
        }
      `

      const apiUrl = 'https://candid-cookie.flywheelsites.com/graphql'

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      }

      // Add privacy password if available
      if (process.env.WORDPRESS_PRIVACY_PASSWORD) {
        headers['X-WP-Privacy'] = process.env.WORDPRESS_PRIVACY_PASSWORD
      }

      console.log(
        `Fetching batch of posts ${endCursor ? 'after cursor: ' + endCursor : '(first batch)'}`,
      )

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          query,
          variables: { after: endCursor },
        }),
      })

      if (!response.ok) {
        console.error(`API Error: ${response.status} ${response.statusText}`)
        const errorText = await response.text()
        console.error(`Error details: ${errorText}`)
        break // Stop but keep any posts we've already fetched
      }

      const data = await response.json()

      if (data.errors) {
        console.error('GraphQL Errors:', data.errors)
        break // Stop but keep any posts we've already fetched
      }

      // Check if data structure is as expected
      if (!data.data || !data.data.posts) {
        console.error('Unexpected data structure:', data)
        break
      }

      const posts = data.data.posts.nodes
      const pageInfo = data.data.posts.pageInfo

      console.log(`Retrieved ${posts.length} posts in this batch`)

      // Map and add posts to our collection
      allPosts.push(
        ...posts.map((post) => ({
          url: `https://draft.dev/learn/${post.slug}`,
          lastmod: post.modified
            ? `${post.modified}Z`
            : new Date().toISOString(),
        })),
      )

      // Update pagination variables
      hasNextPage = pageInfo.hasNextPage
      endCursor = pageInfo.endCursor

      // Add a small delay to avoid overwhelming the API
      if (hasNextPage) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
    }

    console.log(`Total posts fetched: ${allPosts.length}`)
    return allPosts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Function to generate the sitemap XML directly without xmlbuilder
// This avoids any potential limitations in the library
const generateSitemap = async () => {
  // Get dynamic blog posts
  const blogPosts = await fetchPosts()
  const postCount = blogPosts.length

  console.log(`Building sitemap with ${postCount} posts...`)

  // Start the XML string
  let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xmlString +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n'

  // Add all blog posts to sitemap
  if (blogPosts.length > 0) {
    blogPosts.forEach((post, index) => {
      if (index > 0 && index % 50 === 0) {
        console.log(`Processed ${index}/${postCount} posts...`)
      }

      xmlString += '  <url>\n'
      xmlString += `    <loc>${post.url}</loc>\n`
      xmlString += `    <lastmod>${post.lastmod}</lastmod>\n`
      xmlString += '    <priority>0.8</priority>\n'
      xmlString += '  </url>\n'
    })
  } else {
    console.warn(
      'Warning: No blog posts found! Check your API connection and credentials.',
    )
  }

  // Close the XML string
  xmlString += '</urlset>'

  // Verify the sitemap contains all expected entries
  const urlCount = (xmlString.match(/<url>/g) || []).length
  console.log(
    `Sitemap contains ${urlCount} URLs (expected ${blogPosts.length})`,
  )

  if (urlCount !== blogPosts.length) {
    console.error('ERROR: Sitemap does not contain all posts!')
  }

  // Create directory if it doesn't exist
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public')
  }

  // Write sitemap file
  fs.writeFileSync('public/blog_sitemap.xml', xmlString)
  console.log(
    `Blog sitemap written to public/blog_sitemap.xml (${xmlString.length} bytes)`,
  )

  // Double-check the written file
  const writtenContent = fs.readFileSync('public/blog_sitemap.xml', 'utf8')
  const writtenUrlCount = (writtenContent.match(/<url>/g) || []).length
  console.log(`Verification: Written file contains ${writtenUrlCount} URLs`)

  // Log the first few URLs to verify content
  console.log('\nFirst few URLs in the sitemap:')
  blogPosts.slice(0, 5).forEach((post) => {
    console.log(`- ${post.url} (Last modified: ${post.lastmod})`)
  })

  console.log('\nBlog sitemap generation completed successfully!')
}

// Alternative version using manual file writing in chunks
const generateSitemapStreamWriter = async () => {
  // Get dynamic blog posts
  const blogPosts = await fetchPosts()

  // Create directory if it doesn't exist
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public')
  }

  // Create write stream
  const writeStream = fs.createWriteStream('public/blog_sitemap.xml')

  // Write XML header
  writeStream.write('<?xml version="1.0" encoding="UTF-8"?>\n')
  writeStream.write(
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n',
  )

  // Write homepage
  writeStream.write('  <url>\n')
  writeStream.write('    <loc>https://draft.dev/learn</loc>\n')
  writeStream.write(`    <lastmod>${new Date().toISOString()}</lastmod>\n`)
  writeStream.write('    <priority>0.9</priority>\n')
  writeStream.write('  </url>\n')

  // Write each post
  let count = 0
  for (const post of blogPosts) {
    writeStream.write('  <url>\n')
    writeStream.write(`    <loc>${post.url}</loc>\n`)
    writeStream.write(`    <lastmod>${post.lastmod}</lastmod>\n`)
    writeStream.write('    <priority>0.8</priority>\n')
    writeStream.write('  </url>\n')

    count++
    if (count % 50 === 0) {
      console.log(`Written ${count}/${blogPosts.length} posts to sitemap...`)
    }
  }

  // Close XML
  writeStream.write('</urlset>')
  writeStream.end()

  console.log(
    `Sitemap created with ${blogPosts.length + 1} URLs (${blogPosts.length} posts + homepage)`,
  )

  // Verify file was written correctly
  await new Promise((resolve) => writeStream.on('finish', resolve))

  const stats = fs.statSync('public/blog_sitemap.xml')
  console.log(`Sitemap file size: ${stats.size} bytes`)

  const writtenContent = fs.readFileSync('public/blog_sitemap.xml', 'utf8')
  const writtenUrlCount = (writtenContent.match(/<url>/g) || []).length
  console.log(`Verification: Written file contains ${writtenUrlCount} URLs`)
}

// Execute the sitemap generation function
// Choose one of the implementations:
const mainFunction = async () => {
  // Option 1: Standard implementation
  await generateSitemap()

  console.log('Sitemap generation process complete!')
}

mainFunction().catch((error) => {
  console.error('Failed to generate sitemap:', error)
  process.exit(1)
})
