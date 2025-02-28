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

function proxyWordPressImage(src: string | undefined): string {
  if (!src) {
    return '/site/med-landscape/write_draft_dev.jpg'
  }

  if (src.includes('candid-cookie.flywheelsites.com')) {
    return `/api/image?url=${encodeURIComponent(src)}`
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

  async function handleLoadMore() {
    if (!pageInfo.hasNextPage || !pageInfo.endCursor) return

    try {
      const res = await fetch('/lib/wordpress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ after: pageInfo.endCursor }),
      })
      if (!res.ok) throw new Error('Failed to fetch more posts')

      const data = await res.json()

      startTransition(() => {
        setPosts((prev) => [...prev, ...data.posts])
        setPageInfo(data.pageInfo)
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div className="space-y-12">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col gap-8 sm:flex-row sm:items-start"
          >
            <div className="relative w-full sm:w-1/5">
              {post.featuredImage ? (
                <Image
                  src={proxyWordPressImage(post.featuredImage.node.sourceUrl)}
                  alt={post.title}
                  className="w-full rounded-2xl bg-gray-100 object-cover"
                  width={600}
                  height={400}
                />
              ) : (
                <Image
                  src="/site/med-landscape/write_draft_dev.jpg"
                  alt="Default image"
                  className="w-full rounded-2xl bg-gray-100 object-cover"
                  width={600}
                  height={400}
                />
              )}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
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

      {/* If there's another page, show "Load More" */}
      {pageInfo.hasNextPage && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={isPending}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            {isPending ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  )
}
