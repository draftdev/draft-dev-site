const fs = require('fs')
require('dotenv').config()

// Function to fetch posts from WordPress with pagination
const fetchPosts = async () => {
  try {
    const allPosts = []
    let hasNextPage = true
    let endCursor = null

    const username = process.env.WORDPRESS_API_USERNAME || 'Draft.dev'
    const password =
      process.env.WORDPRESS_API_PASSWORD || 'zPRCUEi3yuKXCax3aABQ'
    const auth = Buffer.from(`${username}:${password}`).toString('base64')

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

      if (process.env.WORDPRESS_PRIVACY_PASSWORD) {
        headers['X-WP-Privacy'] = process.env.WORDPRESS_PRIVACY_PASSWORD
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables: { after: endCursor } }),
      })

      if (!response.ok) break
      const data = await response.json()
      if (data.errors || !data.data?.posts) break

      const posts = data.data.posts.nodes
      const pageInfo = data.data.posts.pageInfo

      allPosts.push(
        ...posts.map((post) => ({
          url: `https://draft.dev/learn/${post.slug}`,
          lastmod: post.modified
            ? `${post.modified}Z`
            : new Date().toISOString(),
        })),
      )

      hasNextPage = pageInfo.hasNextPage
      endCursor = pageInfo.endCursor

      if (hasNextPage) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
    }

    return allPosts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Function to generate the sitemap XML
const generateSitemap = async () => {
  const blogPosts = await fetchPosts()
  const postCount = blogPosts.length

  let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xmlString +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n'

  blogPosts.forEach((post) => {
    xmlString += '  <url>\n'
    xmlString += `    <loc>${post.url}</loc>\n`
    xmlString += `    <lastmod>${post.lastmod}</lastmod>\n`
    xmlString += '    <priority>0.8</priority>\n'
    xmlString += '  </url>\n'
  })

  xmlString += '</urlset>'

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public')
  }

  fs.writeFileSync('public/blog_sitemap.xml', xmlString)

  console.log(
    `✅ Blog sitemap written with ${postCount} posts to public/blog_sitemap.xml`,
  )
}

// Run it
generateSitemap().catch((error) => {
  console.error('❌ Failed to generate sitemap:', error)
  process.exit(1)
})
