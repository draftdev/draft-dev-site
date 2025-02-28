// app/learn/page.tsx
import { getWpPosts } from '@/app/lib/wordpress'
import { MedHeader } from '@/components/global/headers/med-header'
import type { Metadata } from 'next'
import LoadMorePostsClient from './load-more-posts-client'

export const metadata: Metadata = {
  title: 'Blog - Technical Content Marketing Resources - Draft.dev',
  description:
    'The Draft.dev Blog publishes information around Content Marketing Best Practices, Software Development topics, and more.',
  openGraph: {
    title: 'Draft.dev Blog - Technical Content Marketing Resources',
    description:
      'The Draft.dev Blog publishes information around Content Marketing Best Practices, Software Development topics, and more.',
    type: 'website',
    images: [
      {
        url: '/site/med-landscape/write_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Blog',
      },
    ],
  },
  alternates: {
    canonical: 'https://draft.dev/learn',
    types: {
      'application/rss+xml': [
        {
          title: 'Draft.dev Blog',
          url: '/learn/feed.xml',
        },
      ],
    },
  },
  robots: {
    index: false,
    follow: false,
  },
}

function Header() {
  return (
    <MedHeader title="Draft.dev blog" descriptionOne="" descriptionTwo="" />
  )
}

export const dynamic = 'force-dynamic'
export const revalidate = 0
const POSTS_PER_PAGE = 10

export default async function BlogPage() {
  // Server-render the first 10 posts
  const { posts, pageInfo } = await getWpPosts(POSTS_PER_PAGE, null, 1)

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <LoadMorePostsClient initialPosts={posts} initialPageInfo={pageInfo} />
      </div>
    </div>
  )
}
