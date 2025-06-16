import { fetchGraphQL } from './wordpress'

const ALL_POSTS_QUERY_API = `
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
          id
          title
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
      relatedTopics: metaValue(key: "related_topics")
      faqData: metaValue(key: "faq_questions")
    }
  }
}
`

// Helper function to parse custom fields (duplicate from wordpress.ts for API use)
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

export async function getWpPostsForApi(
  first = 10,
  after: string | null = null,
  currentPage = 1,
) {
  try {
    const data = await fetchGraphQL(ALL_POSTS_QUERY_API, { first, after })

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

    const formattedPosts = data.posts.nodes.map((post: any) => ({
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
              id: post.featuredImage.node.id,
              title: post.featuredImage.node.title,
            },
          }
        : undefined,
      author: post.author?.node
        ? {
            node: post.author.node,
          }
        : undefined,
      originalAuthor: post.originalAuthor || null,
      // Yoast SEO fields
      seoTitle: post.seoTitle || null,
      seoDesc: post.seoDesc || null,
      seoKeyword: post.seoKeyword || null,
      ogDesc: post.ogDesc || null,
      twitterDesc: post.twitterDesc || null,
      customFields: parseCustomFields(post),
    }))

    return {
      posts: formattedPosts,
      pageInfo: {
        hasNextPage: data.posts.pageInfo.hasNextPage,
        endCursor: data.posts.pageInfo.endCursor,
        currentPage,
      },
    }
  } catch (error) {
    console.error('Error fetching posts in API:', error)
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
