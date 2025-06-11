// app/lib/wordpress-api.ts - Complete file for API routes
import { fetchGraphQL } from './wordpress'

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
    }
  }
}
`

export async function getWpPostsForApi(
  first = 10,
  after: string | null = null,
  currentPage = 1,
) {
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
