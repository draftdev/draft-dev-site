'use client'

import { getImageAlt, getImageUrl } from '@/app/lib/image-utils'
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
      altText?: string
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
  seoTitle?: string
  seoDesc?: string
  seoKeyword?: string
  ogDesc?: string
  twitterDesc?: string
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

export default function LoadMorePostsClient({
  initialPosts,
  initialPageInfo,
}: LoadMorePostsClientProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [pageInfo, setPageInfo] = useState<PageInfo>(initialPageInfo)
  const [isPending, startTransition] = useTransition()
  const [isError, setIsError] = useState(false)

  async function handleLoadMore() {
    if (!pageInfo.hasNextPage || !pageInfo.endCursor) {
      return
    }

    setIsError(false)

    try {
      const requestBody = {
        after: pageInfo.endCursor,
        first: 10,
        currentPage: pageInfo.currentPage + 1,
      }

      const res = await fetch('/api/wordpress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
        cache: 'no-store',
        next: { revalidate: 0 },
      })

      if (!res.ok) {
        setIsError(true)
        throw new Error(`Failed to fetch more posts: ${res.status}`)
      }

      const data = await res.json()

      if (
        !data ||
        !data.posts ||
        !Array.isArray(data.posts) ||
        !data.pageInfo
      ) {
        throw new Error('Invalid response from API')
      }

      startTransition(() => {
        setPosts((prev) => [...prev, ...data.posts])
        setPageInfo(data.pageInfo)
      })
    } catch (error) {
      console.error('Error loading more posts:', error)
      setIsError(true)
    }
  }

  return (
    <div>
      <div className="space-y-12">
        {posts.map((post, index) => {
          // Always use proxy to hide WordPress domain
          const imageUrl = getImageUrl(post.featuredImage?.node.sourceUrl)
          const imageAlt = getImageAlt(post)

          return (
            <article
              key={post.id}
              className="flex flex-col gap-8 sm:flex-row sm:items-start"
            >
              <div className="relative w-full sm:w-1/4">
                <Link href={`/learn/${post.slug}`}>
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover"
                    width={400}
                    height={225}
                    priority={index < 3}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    // Disable optimization for proxy URLs to avoid double-processing
                    unoptimized={imageUrl.includes('/api/image-proxy')}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </Link>
              </div>

              <div className="w-full sm:w-3/4">
                <div className="group relative">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 sm:text-2xl">
                    <Link href={`/learn/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p
                    className="mt-4 line-clamp-3 max-w-2xl text-base text-gray-600"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {pageInfo.hasNextPage && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={isPending}
            className="rounded-md bg-gradient-brand px-4 py-2 text-lg text-white hover:bg-gradient-1"
          >
            {isPending ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}

      {isError && (
        <div className="mt-4 text-center text-red-600">
          Failed to load more posts. Please try again.
        </div>
      )}
    </div>
  )
}
