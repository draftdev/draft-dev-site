'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { memo } from 'react'
import { Link } from '../link'

type Props = { onClose: () => void }

const resources = [
  { name: 'Blog', href: '/learn' },
  { name: 'Guides and Templates', href: '/resources' },
  { name: 'Newsletter', href: '/newsletter' },
]

/* const whoWeHelp = [
  { name: 'For Marketers', href: '/for-marketers' },
  { name: 'For DevRels', href: '/for-dev-rels' },
] */

const recentPosts = [
  {
    id: 1,
    title: 'How to Set Up a Content Marketing Engine in the Age of AI',
    href: '/content-marketing-engine',
    imageUrl: '/site/med-landscape/content_marketing_engine_og_draft_dev.jpg',
    description:
      'This eBook will walk you through the exact process that you can use to set up a predictable, consistent content engine.',
  },
  /*   {
    id: 2,
    title: 'Building and Scaling Developer Marketing',
    href: '/developer-marketing',
    imageUrl: '/site/med-landscape/developer_marketing_og_draft_dev.jpg',
    description:
      'This guide offers strategies and insights for effectively reaching and converting developer audiences through authentic, value-driven approaches.',
  }, */
]

export default memo(function ResourcesPopoverContent({ onClose }: Props) {
  const router = useRouter()
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    onClose()
    router.push(href)
  }

  return (
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
      {/* Left: nav sections - stacks on mobile, 1/3 on desktop */}
      <div className="grid grid-cols-1 gap-x-6 lg:col-span-1">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Resources</h3>
          <div className="mt-4 space-y-2">
            {resources.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-semibold text-gray-700 hover:text-gray-800"
                onClick={(e) => go(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* <div>
          <h3 className="text-sm font-medium text-gray-500">Who We Help</h3>
          <div className="mt-4 space-y-2">
            {whoWeHelp.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-semibold text-gray-700 hover:text-gray-800"
                onClick={(e) => go(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div> */}
      </div>

      {/* Right: recent posts - stacks on mobile, 2/3 on desktop */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 lg:col-span-2">
        <h3 className="sr-only">Recent posts</h3>
        {recentPosts.map((post) => (
          <article key={post.id} className="relative flex flex-col gap-y-4">
            <div className="relative flex-none">
              <Image
                alt=""
                src={post.imageUrl}
                className="aspect-2/1 w-full rounded-lg bg-gray-100 object-cover"
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
