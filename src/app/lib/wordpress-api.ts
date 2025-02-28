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
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
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
      featuredImage: post.featuredImage,
      author: post.author?.node
        ? {
            node: post.author.node,
          }
        : undefined,
      originalAuthor: post.originalAuthor || null,
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
