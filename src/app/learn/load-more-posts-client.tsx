'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useTransition } from 'react'

interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  featuredImage?: {
    node: {
      sourceUrl: string
    }
  }
  categories?: { id: string; name: string }[]
  date?: string
  author?: {
    node: {
      name: string
      avatar?: {
        url: string
      }
    }
  }
  originalAuthor?: string | null
}

interface PageInfo {
  hasNextPage: boolean
  endCursor: string | null
  currentPage: number
}

interface LoadMorePostsClientProps {
  initialPosts: Post[]
  initialPageInfo: PageInfo
}
function proxyWordPressImage(src: string | undefined, postId: string): string {
  if (!src) {
    return '/site/med-landscape/write_draft_dev.jpg'
  }

  if (src.includes('candid-cookie.flywheelsites.com')) {
    return `/api/image?url=${encodeURIComponent(src)}&postId=${postId}`
  }

  return src
}

export default function LoadMorePostsClient({
  initialPosts,
  initialPageInfo,
}: LoadMorePostsClientProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [pageInfo, setPageInfo] = useState<PageInfo>(initialPageInfo)
  const [isPending, startTransition] = useTransition()
  const [isError, setIsError] = useState(false)
  const [debug, setDebug] = useState<string>('')

  // No need for empty effect

  async function handleLoadMore() {
    if (!pageInfo.hasNextPage || !pageInfo.endCursor) {
      return
    }

    setIsError(false)
    setDebug('')

    try {
      const requestBody = {
        after: pageInfo.endCursor,
        first: 10,
        currentPage: pageInfo.currentPage + 1,
      }

      setDebug(
        (prev) =>
          prev + `Fetching request with cursor: ${pageInfo.endCursor}\n`,
      )

      const res = await fetch('/api/wordpress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
        // Ensure we're not using cached responses
        cache: 'no-store',
        next: { revalidate: 0 },
      })

      setDebug((prev) => prev + `Response status: ${res.status}\n`)

      if (!res.ok) {
        const errorText = await res.text()
        // Set error state instead of console logging
        setIsError(true)
        setDebug((prev) => prev + `Error: ${errorText}\n`)
        throw new Error(
          `Failed to fetch more posts: ${res.status} - ${errorText}`,
        )
      }

      const data = await res.json()

      setDebug((prev) => prev + `Received posts: ${data.posts?.length || 0}\n`)

      // Detailed validation
      if (!data) {
        throw new Error('No data received from API')
      }

      if (!data.posts) {
        throw new Error('No posts field in API response')
      }

      if (!Array.isArray(data.posts)) {
        throw new Error(`Posts is not an array: ${typeof data.posts}`)
      }

      if (!data.pageInfo) {
        throw new Error('No pageInfo in API response')
      }

      startTransition(() => {
        setPosts((prev) => [...prev, ...data.posts])
        setPageInfo(data.pageInfo)
      })
    } catch (error) {
      // Error is handled through state
      setIsError(true)
      setDebug(
        (prev) =>
          prev +
          `Error: ${error instanceof Error ? error.message : String(error)}\n`,
      )
    }
  }

  return (
    <div>
      <div className="space-y-12">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className="flex flex-col gap-8 sm:flex-row sm:items-start"
          >
            <div className="relative w-full sm:w-1/5">
              <Link href={`/learn/${post.slug}`}>
                {post.featuredImage ? (
                  <Image
                    src={proxyWordPressImage(
                      post.featuredImage.node.sourceUrl,
                      post.id,
                    )}
                    alt={post.title}
                    className="aspect-[3/2] w-full rounded-2xl bg-gray-100 object-cover"
                    width={600}
                    height={400}
                    priority={index < 3}
                    loading={index < 3 ? undefined : 'lazy'}
                  />
                ) : (
                  <Image
                    src="/site/med-landscape/write_draft_dev.jpg"
                    alt="Default image"
                    className="aspect-[3/2] w-full rounded-2xl bg-gray-100 object-cover"
                    width={600}
                    height={400}
                    priority={index < 3}
                    loading={index < 3 ? undefined : 'lazy'}
                  />
                )}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </Link>
            </div>

            <div className="w-full sm:w-2/3">
              <div className="group relative">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 sm:text-2xl">
                  <Link href={`/learn/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p
                  className="mt-4 line-clamp-3 text-base text-gray-600"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      {pageInfo.hasNextPage && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={isPending}
            className="rounded-md bg-gradient-brand px-4 py-2 text-white hover:bg-gradient-1"
          >
            {isPending ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}

      {isError && (
        <div className="mt-4 text-center text-red-600">
          Failed to load more posts. Please try again.
          {debug && (
            <pre className="mt-2 rounded bg-gray-100 p-2 text-left text-xs">
              {debug}
            </pre>
          )}
        </div>
      )}
    </div>
  )
}
