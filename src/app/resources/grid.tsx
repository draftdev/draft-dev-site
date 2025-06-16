import Image from 'next/image'
import Link from 'next/link'

interface Category {
  title: string
  href: string
}

interface Post {
  id: number
  title: string
  href: string
  description: string
  imageUrl: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'How to Orchestrate Technical Content to Drive Business',
    href: '/orchestrate-technical-content',
    description:
      'Learn how to build strategic content clusters around pillar content, nudge your readers down the funnel, and transform your expertise into valuable gated assets that convert visitors into leads.',
    imageUrl: '/site/med-landscape/orchestrate_thumb_draft_dev.jpg',
  },
  {
    id: 2,
    title: 'How to Set Up a Content Marketing Engine in the Age of AI',
    href: '/content-marketing-engine',
    description:
      'This eBook will walk you through the exact process that you can use to set up a predictable, consistent content engine that provides you with insights and data to prove its effectiveness to business leadership.',
    imageUrl: '/site/med-landscape/content_marketing_engine_og_draft_dev.jpg',
  },
  {
    id: 3,
    title: 'Building and Scaling Developer Marketing',
    href: '/developer-marketing',
    description:
      'This guide offers strategies and insights for effectively reaching and converting developer audiences through authentic, value-driven approaches.',
    imageUrl: '/site/med-landscape/developer_marketing_og_draft_dev.jpg',
  },

  {
    id: 4,
    title: "50 Winning Ideas For Your Company's Blog",
    href: '/ideas',
    description:
      'Kickstart your content marketing efforts with this in-depth guide.',
    imageUrl: '/site/med-landscape/ideas_og_draft_dev.jpg',
  },

  {
    id: 5,
    title: "The Technical Content Manager's Playbook",
    href: '/playbook',
    description:
      'This free Technical Content Manager Playbook is a collection of resources you can use to manage a top-tier technical blog. Among other things, it includes a template for creating technical content briefs, a multi-author publishing calendar, and a technical blogging style guide.',
    imageUrl: '/site/med-landscape/playbook_og_draft_dev.jpg',
  },
  // More resources...
]

export default function ResourceGrid(): JSX.Element {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="subheader-gradient sm:text-5xl">All Resources</h1>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Link href={post.href} key={post.id}>
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Image
                    alt={post.title}
                    src={post.imageUrl}
                    width={400}
                    height={210}
                    className="sm:aspect-2/1 lg:aspect-3/2 aspect-video w-full rounded-2xl bg-gray-100 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {post.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
