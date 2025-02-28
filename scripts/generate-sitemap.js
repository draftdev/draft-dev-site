// scripts/generate-sitemap.js
const fs = require('fs')
const xml = require('xmlbuilder')
require('dotenv').config() // Load environment variables

// Function to fetch posts from WordPress
const fetchPosts = async () => {
  try {
    // Get credentials from environment variables
    const username = process.env.WORDPRESS_API_USERNAME || 'Draft.dev'
    const password =
      process.env.WORDPRESS_API_PASSWORD || 'zPRCUEi3yuKXCax3aABQ'

    // Create basic auth header
    const auth = Buffer.from(`${username}:${password}`).toString('base64')

    const query = `
      query {
        posts(first: 1000, where: { status: PUBLISH }) {
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

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      console.error(`API Error: ${response.status}`)
      return [] // Return empty array on error
    }

    const data = await response.json()

    if (data && data.data && data.data.posts) {
      return data.data.posts.nodes.map((post) => ({
        url: `https://draft.dev/learn/${post.slug}`,
        lastmod: post.modified ? `${post.modified}Z` : new Date().toISOString(),
      }))
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
  }

  return []
}

// Function to generate the sitemap XML
const generateSitemap = async () => {
  // Get dynamic blog posts
  const blogPosts = await fetchPosts()

  // Create the sitemap
  const urlset = xml.create('urlset', {
    version: '1.0',
    encoding: 'UTF-8',
  })

  urlset.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
  urlset.att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
  urlset.att(
    'xsi:schemaLocation',
    'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
  )

  // Add the blog index page
  const blogIndex = urlset.ele('url')
  blogIndex.ele('loc', {}, 'https://draft.dev/learn')
  blogIndex.ele('lastmod', {}, new Date().toISOString())
  blogIndex.ele('priority', {}, '0.9')

  // Add all blog posts to sitemap
  if (blogPosts.length > 0) {
    blogPosts.forEach((post) => {
      const url = urlset.ele('url')
      url.ele('loc', {}, post.url)
      url.ele('lastmod', {}, post.lastmod)
      url.ele('priority', {}, '0.8')
    })
  } else {
    console.log('Warning: No blog posts found')
  }

  // Generate XML string
  const xmlString = urlset.end({ pretty: true })

  // Create directory if it doesn't exist
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public')
  }

  // Write sitemap file
  fs.writeFileSync('public/blog_sitemap.xml', xmlString)
  console.log('Blog sitemap written to public/blog_sitemap.xml')

  console.log('Blog sitemap generation completed successfully!')
}

// Execute the function to generate the sitemap
generateSitemap().catch((error) => {
  console.error('Failed to generate sitemap:', error)
  process.exit(1)
})
