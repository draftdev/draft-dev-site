// scripts/generate-sitemap.js
const fs = require('fs')
const xml = require('xmlbuilder')
require('dotenv').config() // Load environment variables

// Function to fetch posts using fetch
const fetchPosts = async () => {
  try {
    // Add authentication for WordPress
    const auth = Buffer.from(
      `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`,
    ).toString('base64')

    const query = `
      query {
        posts(first: 1000, where: { status: PUBLISH }) {
          nodes {
            slug
            modified
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    `

    const response = await fetch(
      process.env.WORDPRESS_API_URL ||
        'https://candid-cookie.flywheelsites.com/graphql',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${auth}`,
          ...(process.env.WORDPRESS_PRIVACY_PASSWORD
            ? { 'X-WP-Privacy': process.env.WORDPRESS_PRIVACY_PASSWORD }
            : {}),
        },
        body: JSON.stringify({ query }),
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    if (data && data.data && data.data.posts) {
      return data.data.posts.nodes.map((post) => ({
        url: `https://draft.dev/learn/${post.slug}`,
        lastMod: post.modified ? `${post.modified}Z` : new Date().toISOString(),
        // Get unique categories for the category sitemap
        categories:
          post.categories?.nodes?.map((cat) =>
            cat.name.toLowerCase().replace(/\s+/g, '-'),
          ) || [],
      }))
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
  }

  return []
}

// Function to generate the main sitemap XML
const generateSitemap = async () => {
  const posts = await fetchPosts()

  // Extract unique categories
  const categories = [...new Set(posts.flatMap((post) => post.categories))]

  // Generate post sitemap
  const postUrlset = xml.create('urlset', {
    version: '1.0',
    encoding: 'UTF-8',
  })
  postUrlset.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')

  // Add main pages
  const mainPages = [
    { url: 'https://draft.dev', priority: '1.0' },
    { url: 'https://draft.dev/learn', priority: '0.9' },
    // Add more main pages as needed
  ]

  // Add main pages to sitemap
  mainPages.forEach((page) => {
    const url = postUrlset.ele('url')
    url.ele('loc', {}, page.url)
    url.ele('lastmod', {}, new Date().toISOString())
    url.ele('priority', {}, page.priority)
  })

  // Add dynamic posts
  posts.forEach((post) => {
    const url = postUrlset.ele('url')
    url.ele('loc', {}, post.url)
    url.ele('lastmod', {}, post.lastMod)
    url.ele('priority', {}, '0.8')
  })

  // Generate category sitemap
  const categoryUrlset = xml.create('urlset', {
    version: '1.0',
    encoding: 'UTF-8',
  })
  categoryUrlset.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')

  // Add category pages
  categories.forEach((category) => {
    if (category) {
      const url = categoryUrlset.ele('url')
      url.ele('loc', {}, `https://draft.dev/categories/${category}`)
      url.ele('lastmod', {}, new Date().toISOString())
      url.ele('priority', {}, '0.7')
    }
  })

  // Generate sitemap index
  const sitemapIndex = xml.create('sitemapindex', {
    version: '1.0',
    encoding: 'UTF-8',
  })
  sitemapIndex.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')

  // Add sitemap references
  const postSitemapEntry = sitemapIndex.ele('sitemap')
  postSitemapEntry.ele('loc', {}, 'https://draft.dev/sitemap_posts.xml')
  postSitemapEntry.ele('lastmod', {}, new Date().toISOString())

  const categorySitemapEntry = sitemapIndex.ele('sitemap')
  categorySitemapEntry.ele(
    'loc',
    {},
    'https://draft.dev/sitemap_categories.xml',
  )
  categorySitemapEntry.ele('lastmod', {}, new Date().toISOString())

  // Generate XML strings
  const postXmlString = postUrlset.end({ pretty: true })
  const categoryXmlString = categoryUrlset.end({ pretty: true })
  const sitemapIndexXmlString = sitemapIndex.end({ pretty: true })

  // Create directory if it doesn't exist
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public')
  }

  // Write files
  fs.writeFileSync('public/sitemap_posts.xml', postXmlString)
  fs.writeFileSync('public/sitemap_categories.xml', categoryXmlString)
  fs.writeFileSync('public/sitemap.xml', sitemapIndexXmlString)

  console.log('Sitemaps generated successfully!')
}

// Execute the function to generate the sitemap
generateSitemap().catch(console.error)
