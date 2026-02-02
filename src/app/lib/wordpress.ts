import { parseJsonField } from './parse-json'
import type { Post as SchemaPost } from './schema/constants'

export interface Post {
  id: string
  slug: string
  title: string
  categories: { id: string; name: string }[]
  content?: string
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
    }
  }
  originalAuthor?: string | null
  customFields?: {
    authorCredentials: any
    faqQuestions?: Array<{
      question: string
      answer: string
    }>
    targetKeywords?: string[]
    authorBio?: string
    readingTime?: number
    videoUrl?: string
    authorLinkedIn?: string
    authorTwitter?: string
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

type CustomFields = NonNullable<Post['customFields']>
type FaqQuestions = NonNullable<CustomFields['faqQuestions']>

type GraphQLResponse<T> = {
  data?: T
  errors?: Array<{ message: string }>
}

type RawPostNode = {
  id: string
  slug: string
  title: string
  categories?: { nodes?: Array<{ id: string; name: string }> }
  content?: string
  excerpt?: string | null
  date?: string
  modified?: string | null
  featuredImage?: {
    node?: { sourceUrl?: string | null; altText?: string | null }
  }
  author?: { node?: { name: string } }
  originalAuthor?: string | null
  seoTitle?: string | null
  seoDesc?: string | null
  seoKeyword?: string | null
  ogDesc?: string | null
  twitterDesc?: string | null
  targetKeywords?: string | null
  authorBio?: string | null
  readingTime?: string | null
  videoUrl?: string | null
  authorLinkedIn?: string | null
  authorTwitter?: string | null
  faqData?: string | null
}

type SchemaPostNode = {
  id: string
  slug: string
  title: string
  date?: string
  excerpt?: string | null
  featuredImage?: { node?: { sourceUrl?: string | null } }
  categories?: { nodes?: Array<{ id: string; name: string }> }
  seoDesc?: string | null
  seoKeyword?: string | null
  targetKeywords?: string | null
  author?: { node?: { name: string } }
  originalAuthor?: string | null
}

type PostsQueryData = {
  posts?: {
    nodes?: RawPostNode[]
    pageInfo?: { hasNextPage: boolean; endCursor: string | null }
  }
}

type PostBySlugData = {
  post?: RawPostNode | null
}

type SchemaPostsQueryData = {
  posts?: {
    nodes?: SchemaPostNode[]
    pageInfo?: { hasNextPage: boolean; endCursor: string | null }
  }
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
      authorBio: metaValue(key: "author_bio")
      readingTime: metaValue(key: "reading_time")
      videoUrl: metaValue(key: "video_url")
      authorLinkedIn: metaValue(key: "author_linkedin")
      authorTwitter: metaValue(key: "author_twitter")
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
    authorBio: metaValue(key: "author_bio")
    readingTime: metaValue(key: "reading_time")
    videoUrl: metaValue(key: "video_url")
    authorLinkedIn: metaValue(key: "author_linkedin")
    authorTwitter: metaValue(key: "author_twitter")
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
      id
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
          id
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

export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
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
    const json = JSON.parse(text) as GraphQLResponse<T>

    if (json.errors?.length) {
      throw new Error(json.errors[0].message)
    }

    return json.data as T
  } catch (error) {
    console.error('WordPress API Error:', error)
    throw error
  }
}

// Helper function to parse custom fields
function parseCustomFields(rawPost: RawPostNode): CustomFields | undefined {
  const customFields: CustomFields = {
    authorCredentials: undefined,
  }

  // Parse target keywords (comma-separated string to array)
  if (typeof rawPost.targetKeywords === 'string') {
    customFields.targetKeywords = rawPost.targetKeywords
      .split(',')
      .map((k: string) => k.trim())
      .filter((k: string) => k.length > 0)
  }

  if (typeof rawPost.faqData === 'string') {
    const faqQuestions = parseJsonField<FaqQuestions>(rawPost.faqData, {
      fallback: [],
      expect: 'array',
      fieldName: 'faqData',
      slug: rawPost.slug,
    })
    if (faqQuestions.length > 0) {
      customFields.faqQuestions = faqQuestions
    }
  }

  // Simple field mappings
  if (typeof rawPost.authorBio === 'string') {
    customFields.authorBio = rawPost.authorBio
  }
  if (typeof rawPost.readingTime === 'string') {
    const parsedTime = parseInt(rawPost.readingTime, 10)
    if (!isNaN(parsedTime)) {
      customFields.readingTime = parsedTime
    }
  }
  if (typeof rawPost.videoUrl === 'string') {
    customFields.videoUrl = rawPost.videoUrl
  }
  if (typeof rawPost.authorLinkedIn === 'string')
    customFields.authorLinkedIn = rawPost.authorLinkedIn
  if (typeof rawPost.authorTwitter === 'string') {
    customFields.authorTwitter = rawPost.authorTwitter
  }

  return Object.keys(customFields).length > 0 ? customFields : undefined
}

export async function getWpPosts(
  first = 10,
  after: string | null = null,
  currentPage = 1,
): Promise<PostsResponse> {
  try {
    const data = await fetchGraphQL<PostsQueryData>(ALL_POSTS_QUERY, {
      first,
      after,
    })
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
      posts: data.posts.nodes.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        categories: post.categories?.nodes || [],
        excerpt: post.excerpt || '',
        date: post.date || '',
        modified: post.modified || undefined,
        featuredImage: post.featuredImage?.node?.sourceUrl
          ? {
              node: {
                sourceUrl: post.featuredImage.node.sourceUrl,
                altText: post.featuredImage.node.altText || undefined,
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
          metaDesc: post.seoDesc || undefined,
          focuskw: post.seoKeyword || undefined,
          opengraphDescription: post.ogDesc || undefined,
          twitterDescription: post.twitterDesc || undefined,
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
}

export async function getWpPost(slug: string): Promise<Post | null> {
  if (!slug) {
    return null
  }

  try {
    const data = await fetchGraphQL<PostBySlugData>(POST_BY_SLUG_QUERY, {
      slug,
    })

    if (!data?.post) {
      return null
    }

    const post = data.post

    return {
      ...post,
      categories: post.categories?.nodes || [],
      date: post.date || '',
      modified: post.modified || undefined,
      excerpt: post.excerpt || '',
      featuredImage: post.featuredImage
        ? {
            node: {
              sourceUrl: post.featuredImage.node.sourceUrl,
              altText: post.featuredImage.node.altText || undefined,
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
        metaDesc: post.seoDesc || undefined,
        focuskw: post.seoKeyword || undefined,
        opengraphDescription: post.ogDesc || undefined,
        twitterDescription: post.twitterDesc || undefined,
      },
      customFields: parseCustomFields(post),
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Lightweight function to fetch posts for schema only
export async function getSchemaPostsData(
  limit: number = 200,
): Promise<SchemaPost[]> {
  const allPosts: SchemaPost[] = []
  let hasNextPage = true
  let endCursor: string | null = null

  while (hasNextPage && allPosts.length < limit) {
    try {
      const data = await fetchGraphQL<SchemaPostsQueryData>(
        SCHEMA_POSTS_QUERY,
        {
          first: Math.min(50, limit - allPosts.length),
          after: endCursor,
        },
      )

      if (!data?.posts?.nodes) break

      const formattedPosts: SchemaPost[] = data.posts.nodes.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        date: post.date || '',
        excerpt: post.excerpt || '',
        seoDesc: post.seoDesc || undefined,
        seoKeyword: post.seoKeyword || undefined,
        featuredImage: post.featuredImage?.node?.sourceUrl
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
}
