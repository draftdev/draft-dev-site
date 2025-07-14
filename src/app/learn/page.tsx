import { generateBlogSchema, generateWebSiteSchema } from '@/app/lib/schema'
import { getSchemaPostsData, getWpPosts } from '@/app/lib/wordpress'
import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import NewsletterFull from '@/components/media/newsletter-full'
import type { Metadata } from 'next'
import LoadMorePostsClient from './load-more-posts-client'

export const metadata: Metadata = {
  title: 'Technical Content Marketing Blog',
  description:
    'Expert insights on technical content marketing, developer relations, software development tutorials, and content strategy for reaching technical audiences.',
  keywords:
    'technical content marketing blog, developer relations insights, software development content, content marketing resources',
  openGraph: {
    title: 'Technical Content Marketing Blog - Draft.dev',
    description:
      'Expert insights on technical content marketing, developer relations, and content strategy for technical audiences.',
    url: 'https://draft.dev/learn',
    images: [
      {
        url: 'https://draft.dev/draft/og/learn_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Technical Content Marketing Blog',
      },
    ],
  },
  twitter: {
    title: 'Technical Content Marketing Blog - Draft.dev',
    description:
      'Expert insights on technical content marketing and developer relations.',
    images: ['https://draft.dev/draft/og/learn_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/learn',
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
const SCHEMA_POST_LIMIT = 50

export default async function BlogPage() {
  // Fetch initial posts for UI rendering
  const { posts: initialPosts, pageInfo } = await getWpPosts(
    POSTS_PER_PAGE,
    null,
    1,
  )

  const schemaPostsData = await getSchemaPostsData(SCHEMA_POST_LIMIT)

  const blogSchema = generateBlogSchema(schemaPostsData)
  const websiteSchema = generateWebSiteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />

      {/* Website Schema - overall site information */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <div className="overflow-hidden">
        <Header />
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
          {/* Only render the initial 10 posts in the UI */}
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
