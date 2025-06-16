import { cache } from 'react'

export interface Post {
  id: string
  slug: string
  title: string
  categories: { id: string; name: string }[]
  content: string
  date: string
  modified?: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText?: string
    }
  }
  excerpt: string
  author?: {
    node: {
      name: string
      avatar?: {
        url: string
      }
    }
  }
  originalAuthor?: string | null
  customFields?: {
    faqQuestions?: Array<{
      question: string
      answer: string
    }>
    targetKeywords?: string[]
    authorCredentials?: string
    readingTime?: number
    expertSources?: string[]
    videoUrl?: string
    authorLinkedIn?: string
    authorTwitter?: string
    relatedTopics?: string[]
  }
  seo?: {
    metaDesc?: string
    focuskw?: string
    opengraphDescription?: string
    twitterDescription?: string
  }
}

export interface PageInfo {
  hasNextPage: boolean
  endCursor: string | null
  currentPage: number
}

export interface PostsResponse {
  posts: Post[]
  pageInfo: PageInfo
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WORDPRESS_API_URL: string
      WORDPRESS_API_USERNAME: string
      WORDPRESS_API_PASSWORD: string
      WORDPRESS_PRIVACY_PASSWORD: string
    }
  }
}

const ALL_POSTS_QUERY = `
query AllPosts($first: Int, $after: String) {
  posts(first: $first, after: $after, where: { status: PUBLISH }) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      slug
      title
      categories {
        nodes {
          id
          name
        }
      }
      excerpt(format: RENDERED)
      date
      modified
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      originalAuthor: metaValue(key: "original_author")
      # Yoast SEO fields
      seoTitle: metaValue(key: "_yoast_wpseo_title")
      seoDesc: metaValue(key: "_yoast_wpseo_metadesc")
      seoKeyword: metaValue(key: "_yoast_wpseo_focuskw")
      ogDesc: metaValue(key: "_yoast_wpseo_opengraph-description")
      twitterDesc: metaValue(key: "_yoast_wpseo_twitter-description")
      # Enhanced custom fields for AI optimization
      targetKeywords: metaValue(key: "target_keywords")
      authorCredentials: metaValue(key: "author_credentials")
      readingTime: metaValue(key: "reading_time")
      expertSources: metaValue(key: "expert_sources")
      videoUrl: metaValue(key: "video_url")
      authorLinkedIn: metaValue(key: "author_linkedin")
      authorTwitter: metaValue(key: "author_twitter")
      relatedTopics: metaValue(key: "related_topics")
      faqData: metaValue(key: "faq_questions")
    }
  }
}
`

const POST_BY_SLUG_QUERY = `
query PostBySlug($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
    slug
    title
    categories {
      nodes {
        id
        name
      }
    }
    content
    excerpt(format: RENDERED)
    date
    modified
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
    originalAuthor: metaValue(key: "original_author")
    # Yoast SEO fields
    seoTitle: metaValue(key: "_yoast_wpseo_title")
    seoDesc: metaValue(key: "_yoast_wpseo_metadesc")
    seoKeyword: metaValue(key: "_yoast_wpseo_focuskw")
    ogDesc: metaValue(key: "_yoast_wpseo_opengraph-description")
    twitterDesc: metaValue(key: "_yoast_wpseo_twitter-description")
    # Enhanced custom fields for AI optimization
    targetKeywords: metaValue(key: "target_keywords")
    authorCredentials: metaValue(key: "author_credentials")
    readingTime: metaValue(key: "reading_time")
    expertSources: metaValue(key: "expert_sources")
    videoUrl: metaValue(key: "video_url")
    authorLinkedIn: metaValue(key: "author_linkedin")
    authorTwitter: metaValue(key: "author_twitter")
    relatedTopics: metaValue(key: "related_topics")
    faqData: metaValue(key: "faq_questions")
  }
}
`

// Lightweight query for schema posts only
const SCHEMA_POSTS_QUERY = `
query SchemaPostsQuery($first: Int, $after: String) {
  posts(first: $first, after: $after, where: { status: PUBLISH }) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      slug
      title
      date
      excerpt(format: RENDERED)
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
      # Only SEO fields needed for schema
      seoDesc: metaValue(key: "_yoast_wpseo_metadesc")
      seoKeyword: metaValue(key: "_yoast_wpseo_focuskw")
      targetKeywords: metaValue(key: "target_keywords")
      # Minimal author info
      author {
        node {
          name
        }
      }
      originalAuthor: metaValue(key: "original_author")
    }
  }
}
`

function getAuthHeader() {
  const auth = Buffer.from(
    `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`,
  ).toString('base64')
  return `Basic ${auth}`
}

export async function fetchGraphQL(query: string, variables = {}) {
  const baseUrl = process.env.WORDPRESS_API_URL
  if (!baseUrl) {
    throw new Error('WORDPRESS_API_URL is not defined')
  }

  try {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: getAuthHeader(),
    })

    if (process.env.WORDPRESS_PRIVACY_PASSWORD) {
      headers.append('X-WP-Privacy', process.env.WORDPRESS_PRIVACY_PASSWORD)
    }

    const response = await fetch(baseUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      next: {
        revalidate: 3600, // Revalidate every hour
        tags: ['posts'],
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const text = await response.text()
    const json = JSON.parse(text)

    if (json.errors) {
      throw new Error(json.errors[0].message)
    }

    return json.data
  } catch (error) {
    console.error('WordPress API Error:', error)
    throw error
  }
}

// Helper function to parse custom fields
function parseCustomFields(rawPost: any) {
  const customFields: any = {}

  // Parse target keywords (comma-separated string to array)
  if (rawPost.targetKeywords) {
    customFields.targetKeywords = rawPost.targetKeywords
      .split(',')
      .map((k: string) => k.trim())
      .filter((k: string) => k.length > 0)
  }

  // Parse FAQ data (JSON string)
  if (rawPost.faqData) {
    try {
      customFields.faqQuestions = JSON.parse(rawPost.faqData)
    } catch (e) {
      console.warn('Failed to parse FAQ data:', e)
    }
  }

  // Parse related topics
  if (rawPost.relatedTopics) {
    customFields.relatedTopics = rawPost.relatedTopics
      .split(',')
      .map((t: string) => t.trim())
      .filter((t: string) => t.length > 0)
  }

  // Parse expert sources
  if (rawPost.expertSources) {
    customFields.expertSources = rawPost.expertSources
      .split(',')
      .map((s: string) => s.trim())
      .filter((s: string) => s.length > 0)
  }

  // Simple field mappings
  if (rawPost.authorCredentials)
    customFields.authorCredentials = rawPost.authorCredentials
  if (rawPost.readingTime) {
    const parsedTime = parseInt(rawPost.readingTime, 10)
    if (!isNaN(parsedTime)) {
      customFields.readingTime = parsedTime
    }
  }
  if (rawPost.videoUrl) customFields.videoUrl = rawPost.videoUrl
  if (rawPost.authorLinkedIn)
    customFields.authorLinkedIn = rawPost.authorLinkedIn
  if (rawPost.authorTwitter) customFields.authorTwitter = rawPost.authorTwitter

  return Object.keys(customFields).length > 0 ? customFields : undefined
}

export const getWpPosts = cache(
  async (
    first = 10,
    after: string | null = null,
    currentPage = 1,
  ): Promise<PostsResponse> => {
    try {
      const data = await fetchGraphQL(ALL_POSTS_QUERY, { first, after })
      if (!data?.posts?.nodes || !data.posts.pageInfo) {
        return {
          posts: [],
          pageInfo: {
            hasNextPage: false,
            endCursor: null,
            currentPage,
          },
        }
      }

      return {
        posts: data.posts.nodes.map((post: any) => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          categories: post.categories?.nodes || [],
          excerpt: post.excerpt,
          date: post.date,
          modified: post.modified,
          featuredImage: post.featuredImage
            ? {
                node: {
                  sourceUrl: post.featuredImage.node.sourceUrl,
                  altText: post.featuredImage.node.altText,
                },
              }
            : undefined,
          author: post.author?.node
            ? {
                node: post.author.node,
              }
            : undefined,
          originalAuthor: post.originalAuthor || null,
          seo: {
            metaDesc: post.seoDesc,
            focuskw: post.seoKeyword,
            opengraphDescription: post.ogDesc,
            twitterDescription: post.twitterDesc,
          },
          customFields: parseCustomFields(post),
        })),
        pageInfo: {
          hasNextPage: data.posts.pageInfo.hasNextPage,
          endCursor: data.posts.pageInfo.endCursor,
          currentPage,
        },
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      return {
        posts: [],
        pageInfo: {
          hasNextPage: false,
          endCursor: null,
          currentPage,
        },
      }
    }
  },
)

export const getWpPost = cache(async (slug: string) => {
  if (!slug) {
    return null
  }

  try {
    const data = await fetchGraphQL(POST_BY_SLUG_QUERY, { slug })

    if (!data?.post) {
      return null
    }

    const post = data.post

    return {
      ...post,
      categories: post.categories?.nodes || [],
      featuredImage: post.featuredImage
        ? {
            node: {
              sourceUrl: post.featuredImage.node.sourceUrl,
              altText: post.featuredImage.node.altText,
            },
          }
        : undefined,
      author: post.author?.node
        ? {
            node: post.author.node,
          }
        : undefined,
      originalAuthor: post.originalAuthor || null,
      seo: {
        metaDesc: post.seoDesc,
        focuskw: post.seoKeyword,
        opengraphDescription: post.ogDesc,
        twitterDescription: post.twitterDesc,
      },
      customFields: parseCustomFields(post),
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
})

// Lightweight function to fetch posts for schema only
export const getSchemaPostsData = cache(
  async (limit: number = 200): Promise<Post[]> => {
    const allPosts: any[] = []
    let hasNextPage = true
    let endCursor = null

    while (hasNextPage && allPosts.length < limit) {
      try {
        const data = await fetchGraphQL(SCHEMA_POSTS_QUERY, {
          first: Math.min(50, limit - allPosts.length),
          after: endCursor,
        })

        if (!data?.posts?.nodes) break

        const formattedPosts = data.posts.nodes.map((post: any) => ({
          slug: post.slug,
          title: post.title,
          date: post.date,
          excerpt: post.excerpt || '',
          seoDesc: post.seoDesc,
          seoKeyword: post.seoKeyword,
          featuredImage: post.featuredImage
            ? {
                node: {
                  sourceUrl: post.featuredImage.node.sourceUrl,
                },
              }
            : undefined,
          categories: post.categories?.nodes || [],
          author: post.author?.node
            ? {
                node: {
                  name: post.author.node.name,
                },
              }
            : undefined,
          originalAuthor: post.originalAuthor || null,
          customFields: post.targetKeywords
            ? {
                targetKeywords: post.targetKeywords
                  .split(',')
                  .map((k: string) => k.trim())
                  .filter((k: string) => k.length > 0),
              }
            : undefined,
        }))

        allPosts.push(...formattedPosts)
        hasNextPage = data.posts.pageInfo.hasNextPage
        endCursor = data.posts.pageInfo.endCursor
      } catch (error) {
        console.error('Error fetching schema posts:', error)
        break
      }
    }

    return allPosts.slice(0, limit) // Ensure we don't exceed the limit
  },
)
