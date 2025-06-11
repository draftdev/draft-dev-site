// app/lib/wordpress.ts - Updated queries to include alt text
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
      altText?: string // Added alt text
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
  // Enhanced fields for AI optimization
  customFields?: {
    faqQuestions?: Array<{
      question: string
      answer: string
    }>
    targetKeywords?: string[]
    authorCredentials?: string
    readingTime?: number
    expertSources?: string[]
  }
  seo?: {
    metaDesc?: string
    focuskw?: string
    opengraphDescription?: string
    twitterDescription?: string
  }
}

// Updated query to include alt text
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
  }
}
`

// Rest of your WordPress functions remain the same...
// Just make sure they handle the new altText field properly

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
          seo: post.seo || undefined,
          customFields: post.customFields || undefined,
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
      seo: post.seo || undefined,
      customFields: post.customFields || undefined,
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
})
