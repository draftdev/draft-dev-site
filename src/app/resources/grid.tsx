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
    title: 'How to Set Up a Content Marketing Engine in the Age of AI',
    href: '/content-marketing-engine',
    description:
      'This eBook will walk you through the exact process that you can use to set up a predictable, consistent content engine that provides you with insights and data to prove its effectiveness to business leadership.',
    imageUrl: '/site/med-landscape/content_marketing_engine_og_draft_dev.jpg',
  },
  {
    id: 2,
    title: 'How to Orchestrate Technical Content to Drive Business',
    href: '/orchestrate-technical-content',
    description:
      'Learn how to build strategic content clusters around pillar content, nudge your readers down the funnel, and transform your expertise into valuable gated assets that convert visitors into leads.',
    imageUrl: '/site/med-landscape/orchestrate_thumb_draft_dev.jpg',
  },

  {
    id: 3,
    title:
      'Distributing Content on Social Media and Generating Leads from Gated Assets',
    href: '/distributing-content-on-social-media',
    description:
      'This document will walk through a simple framework on how to utilize potentially existing downloadable assets and orchestrate some simple social media playbooks.',
    imageUrl: '/draft/og/distributing_content_og_draft_dev.jpg',
  },
  {
    id: 4,
    title: 'The Trello Content Calendar Template',
    href: '/trello-content-calendar-template',
    description:
      'Build a powerful Trello content calendar with automated workflows. Free template includes a 10-stage Kanban system and pre-built checklists.',
    imageUrl: '/site/med-landscape/trello_guide_og_draft_dev.jpg',
  },

  {
    id: 5,
    title: 'The Asana Content Calendar Template',
    href: '/asana-content-calendar-template',
    description:
      'Complete Asana content calendar setup guide with downloadable template. Includes workflow stages, automation tips, and team collaboration features.',
    imageUrl: '/site/med-landscape/asana_guide_og_draft_dev.jpg',
  },
  {
    id: 6,
    title: 'The Airtable Content Calendar Template',
    href: '/airtable-content-calendar-template',
    description:
      'Build a comprehensive Airtable content calendar with database power. Free template includes pipeline tracking, task management, and team views.',
    imageUrl: '/site/med-landscape/airtable_guide_og_draft_dev.jpg',
  },
  {
    id: 7,
    title: 'Building and Scaling Developer Marketing',
    href: '/developer-marketing',
    description:
      'This guide offers strategies and insights for effectively reaching and converting developer audiences through authentic, value-driven approaches.',
    imageUrl: '/site/med-landscape/developer_marketing_og_draft_dev.jpg',
  },
  {
    id: 8,
    title: 'How to run your own Keyword Audit and Creating Topic Clusters',
    href: '/keyword-audit-topic-clusters',
    description:
      'In this free PDF guide, we will walk you through how to conduct your own SEO keyword research and the process of generating topic clusters. Learn how to find keywords people are searching for and how to plan and map topic clusters.',
    imageUrl: '/site/med-landscape/keyword-audit-topic-clusters-draft-dev.jpg',
  },
  {
    id: 9,
    title: "The Technical Content Manager's Playbook",
    href: '/playbook',
    description:
      'This free Technical Content Manager Playbook is a collection of resources you can use to manage a top-tier technical blog. Among other things, it includes a template for creating technical content briefs, a multi-author publishing calendar, and a technical blogging style guide.',
    imageUrl: '/site/med-landscape/playbook_og_draft_dev.jpg',
  },
  {
    id: 10,
    title: 'The Content Engine Checklist',
    href: '/content-engine-checklist',
    description:
      'In this free PDF checklist, we give you an overview on key aspects to consider when building a content engine and when starting and running the engine. We talk about the Tech Setup, Marketing Automation and Advertisement, and Content Types and Content Promotion.',
    imageUrl: '/site/med-landscape/content-engine-checklist-draft-dev.jpg',
  },
  {
    id: 11,
    title: "50 Winning Ideas For Your Company's Blog",
    href: '/ideas',
    description:
      'Kickstart your content marketing efforts with this in-depth guide.',
    imageUrl: '/site/med-landscape/ideas_og_draft_dev.jpg',
  },
  {
    id: 12,
    title: 'The Big Blog Promotion Checklist',
    href: '/big-blog-promotion-checklist',
    description:
      'While there are plenty of general promotional checklists for bloggers, not many are specifically built with a software engineering audience in mind.',
    imageUrl: '/site/med-landscape/blog_promotion_checklist_draft_dev.jpg',
  },
  {
    id: 13,
    title: '8 Essential B2B Demand Generation Tactics',
    href: '/8-essential-demand-generation-tactics',
    description:
      'This guide breaks down 8 demand generation tactics that actually work for B2B SaaS and AI companies.',
    imageUrl: '/site/med-landscape/8_essential_tactics_og_draft_dev.jpg',
  },

  // More resources...
]

export default function ResourceGrid() {
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
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
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
