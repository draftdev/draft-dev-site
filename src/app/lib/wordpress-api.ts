import { fetchGraphQL } from './wordpress'

type ApiPostNode = {
  id: string
  slug: string
  title: string
  excerpt?: string | null
  date?: string
  categories?: { nodes?: Array<{ id: string; name: string }> }
  featuredImage?: { node?: { sourceUrl?: string | null; altText?: string | null } }
}

type ApiPostsQueryData = {
  posts?: {
    nodes?: ApiPostNode[]
    pageInfo?: { hasNextPage: boolean; endCursor: string | null }
  }
}

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
      excerpt(format: RENDERED)
      date
      categories {
        nodes {
          id
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
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
    const data = await fetchGraphQL<ApiPostsQueryData>(ALL_POSTS_QUERY_API, {
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

    const formattedPosts = data.posts.nodes.map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      categories: post.categories?.nodes || [],
      excerpt: post.excerpt || '',
      date: post.date || '',
      featuredImage: post.featuredImage?.node?.sourceUrl
        ? {
            node: {
              sourceUrl: post.featuredImage.node.sourceUrl,
              altText: post.featuredImage.node.altText || undefined,
            },
          }
        : undefined,
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
