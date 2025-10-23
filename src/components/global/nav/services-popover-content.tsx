'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { memo } from 'react'
import { Link } from '../link'

type Props = { onClose: () => void }

const services = [
  { name: 'Technical eBooks', href: '/learn/technical-ebooks' },
  { name: 'Technical Blog Content', href: '/blog-posts' },
  { name: 'Technical Content Refresh', href: '/content-refreshes' },
  { name: 'Video Tutorials', href: '/video-tutorials' },


/*   { name: 'Technical eBooks', href: '/learn/technical-ebooks' },
  { name: 'Technical Blog Content', href: '/blog-posts' },
  { name: 'Technical Content Refresh', href: '/content-refreshes' },
  { name: 'Video Tutorials', href: '/video-tutorials' },
  { name: 'Developer Tutorials', href: '/tutorials' },
  { name: 'Developer Content Strategy', href: '/dev-content-strategy' },
  { name: 'AI Content Strategy', href: '/ai-content-strategy' },
  { name: 'Paid Content Promotion', href: '/paid-content-promotion' }, */
]

/* const why = [
  { name: 'Draft.dev vs. Freelancers', href: '/draft-dev-vs-freelancers' },
  { name: 'Draft.dev vs. SEO Agencies', href: '/draft-dev-vs-seo-agency' },
  {
    name: 'Draft.dev vs. AI Gen Content',
    href: '/draft-dev-vs-ai-gen-content',
  },

  { name: 'Draft.dev Blog', href: '/learn' },
] */

const recentPosts = [
  {
    id: 1,
    title: 'What’s Working in Developer Marketing Today',
    href: '/learn/whats-working-in-developer-marketing-today',
    imageUrl: '/draft/og/whats_working_in_developer_marketing_og_draft_dev.jpg',
    description:
      'The foundation of strategic content orchestration starts with understanding where your readers are in their journey and adapting to new realities.',
  },
/*   {
    id: 2,
    title: 'How Video Marketing Improves SEO Rankings in 2025',
    href: '/learn/how-video-marketing-improves-seo',
    imageUrl: '/draft/og/video_content_og_draft_dev.jpg',
    description:
      'Discover how video marketing improves SEO rankings in 2025 with enhanced engagement, longer site visits, and increased backlinks.',
  }, */
]

export default memo(function ServicesPopoverContent({ onClose }: Props) {
  const router = useRouter()
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    onClose()
    router.push(href)
  }

  return (
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
      {/* Left: nav sections - 50% on desktop */}
      <div className="grid grid-cols-2 gap-x-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500">
            Technical Content
          </h3>
          <div className="mt-4 space-y-2">
            {services.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-1 text-sm font-semibold text-gray-700 hover:text-gray-800"
                onClick={(e) => go(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

{/*         <div>
          <h3 className="text-sm font-medium text-gray-500">Why Draft.dev?</h3>
          <div className="mt-4 space-y-2">
            {why.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-1 text-sm font-semibold text-gray-700 hover:text-gray-800"
                onClick={(e) => go(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div> */}
      </div>

      {/* Right: recent posts - 50% on desktop */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 lg:col-span-2">
        <h3 className="sr-only">Recent posts</h3>
        {recentPosts.map((post) => (
          <article key={post.id} className="relative flex flex-col gap-y-4">
            <div className="relative flex-none">
              <Image
                alt=""
                src={post.imageUrl}
                className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover"
                height={300}
                width={450}
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-gray-900/10 ring-inset" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                <Link
                  href={post.href}
                  onClick={(e) => go(e, post.href)}
                  className="block"
                >
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h4>
              <p className="mt-1 text-sm text-gray-600">{post.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
})
