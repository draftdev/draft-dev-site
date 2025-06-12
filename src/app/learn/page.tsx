// app/learn/page.tsx - Fixed blog listing Open Graph
import { generateBlogSchema, generateWebSiteSchema } from '@/app/lib/schema'
import { getWpPosts } from '@/app/lib/wordpress'
import { MedHeader } from '@/components/global/headers/med-header'
import NewsletterFull from '@/components/media/newsletter-full'
import LoadMorePostsClient from './load-more-posts-client'

function Header() {
  return (
    <MedHeader
      title="Technical Content Marketing Blog"
      descriptionOne="Expert insights on reaching developers, DevOps engineers, and technical decision-makers through strategic content."
      descriptionTwo="Learn proven strategies for technical content creation, developer relations, and building authority in technical communities."
    />
  )
}

export const dynamic = 'force-dynamic'
export const revalidate = 0
const POSTS_PER_PAGE = 10

export default async function BlogPage() {
  const { posts, pageInfo } = await getWpPosts(POSTS_PER_PAGE, null, 1)

  // Keep your existing schemas
  const blogSchema = generateBlogSchema(posts)
  const websiteSchema = generateWebSiteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <div className="overflow-hidden">
        <Header />
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
          <LoadMorePostsClient
            initialPosts={posts}
            initialPageInfo={pageInfo}
          />
        </div>
        <NewsletterFull />
      </div>
    </>
  )
}
