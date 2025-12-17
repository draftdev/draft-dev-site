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
  modified?: string
  author?: {
    node: {
      name: string
    }
  }
  originalAuthor?: string | null
  // Yoast SEO fields - these should be at root level
  seoTitle?: string
  seoDesc?: string
  seoKeyword?: string
  ogDesc?: string
  twitterDesc?: string
  customFields?: {
    faqQuestions?: Array<{
      question: string
      answer: string
    }>
    readingTime?: number
    videoUrl?: string
    authorLinkedIn?: string
    authorTwitter?: string
  }
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
  const [isLoading, setIsLoading] = useState(false)

  async function handleLoadMore() {
    if (!pageInfo.hasNextPage || !pageInfo.endCursor || isLoading) {
      return
    }

    setIsError(false)
    setIsLoading(true)

    try {
      const res = await fetch('/api/wordpress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
        body: JSON.stringify({
          after: pageInfo.endCursor,
          first: 10,
          currentPage: pageInfo.currentPage + 1,
        }),
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
        setPosts((prevPosts) => {
          const existingIds = new Set(prevPosts.map((p) => p.id))
          const newPosts = data.posts.filter(
            (p: Post) => !existingIds.has(p.id),
          )

          return [...prevPosts, ...newPosts]
        })
        setPageInfo(data.pageInfo)
      })
    } catch (error) {
      console.error('Error loading more posts:', error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="space-y-12">
        {posts.map((post, index) => {
          const imageUrl = getImageUrl(
            post.featuredImage?.node.sourceUrl,
            post.id,
          )
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
                    width={390}
                    height={205}
                    priority={index < 3}
                    quality={75}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 390px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
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
                  <div
                    className="mt-4 line-clamp-3 max-w-2xl text-base text-gray-600 [&_p]:inline [&_p]:m-0"
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
            disabled={isLoading || isPending}
            className="bg-gradient-brand hover:bg-gradient-1 rounded-md px-4 py-2 text-lg text-white disabled:opacity-50"
          >
            {isLoading || isPending ? 'Loading...' : 'Load More'}
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
