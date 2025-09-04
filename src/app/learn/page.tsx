import { generateBlogSchema } from '@/app/lib/schema'
import { getSchemaPostsData, getWpPosts } from '@/app/lib/wordpress'
import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import NewsletterFull from '@/components/media/newsletter-full'
import type { Metadata } from 'next'
import LoadMorePostsClient from './load-more-posts-client'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Marketing Blog - Draft.dev',
  description:
    'Expert insights on technical content marketing, developer relations, software development tutorials, and content strategy for reaching technical audiences.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/learn',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Draft.dev Blog - Technical Content Marketing Resources',
    description:
      'Expert insights on technical content marketing, developer relations, software development tutorials, and content strategy for reaching technical audiences.',
    images: [
      {
        url: 'https://draft.dev/site/med-landscape/write_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Technical Content Marketing Blog',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Draft.dev Blog - Technical Content Marketing Resources',
    description:
      'Expert insights on technical content marketing, developer relations, and content strategy for technical audiences.',
    images: ['https://draft.dev/site/med-landscape/write_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },

  alternates: {
    canonical: 'https://draft.dev/learn',
    types: {
      'application/rss+xml': [
        {
          title: 'Draft.dev Blog',
          url: 'https://draft.dev/learn/feed.xml',
        },
      ],
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

function Header() {
  return (
    <MedHeader
      title="Technical Content Marketing Blog"
      descriptionOne="Expert insights on reaching developers, DevOps engineers, and technical decision-makers through strategic content."
      descriptionTwo="Learn proven strategies for technical content creation, developer relations, and building authority in technical communities."
    />
  )
}

export const revalidate = 3600 // Revalidate every hour with ISR
const POSTS_PER_PAGE = 10
const SCHEMA_POST_LIMIT = 10

export default async function BlogPage() {
  // Fetch initial posts for UI rendering
  const { posts: initialPosts, pageInfo } = await getWpPosts(
    POSTS_PER_PAGE,
    null,
    1,
  )

  const schemaPostsData = await getSchemaPostsData(SCHEMA_POST_LIMIT)
  const blogSchema = generateBlogSchema(schemaPostsData)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />

      <div className="overflow-hidden">
        <Header />
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
          <LoadMorePostsClient
            initialPosts={initialPosts}
            initialPageInfo={pageInfo}
          />
        </div>
        <NewsletterFull />
        <FAQ />
      </div>
    </>
  )
}
