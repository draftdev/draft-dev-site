import {
  ArrowPathIcon,
  ArrowRightIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  PlayCircleIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

// The content formats we produce, one card each
const formats = [
  {
    title: 'Blog Posts & Technical Articles',
    text: 'Deep dives, product guides and use cases with code samples that show developers how your product fits their workflow.',
    Icon: DocumentTextIcon,
  },
  {
    title: 'Thought Leadership',
    text: 'Pieces that make your case to technical decision-makers and show your team understands their problems.',
    Icon: LightBulbIcon,
  },
  {
    title: 'Comparison Pages',
    text: 'Well-researched comparisons of two or three options that help technical buyers make an informed choice.',
    Icon: ScaleIcon,
  },
  {
    title: 'Video Tutorials',
    text: 'Product videos that show developers how your product solves their problems and answer objections along the way.',
    Icon: PlayCircleIcon,
  },
  {
    title: 'Ebooks & Whitepapers',
    text: 'Lead magnets that turn anonymous readers into leads you can nurture.',
    Icon: BookOpenIcon,
  },
  {
    title: 'Content Refreshes',
    text: 'Updates to older articles with current versions, new code and better structure, to win back rankings and AI visibility.',
    Icon: ArrowPathIcon,
  },
  {
    title: 'Social Media Posts',
    text: 'Threads, code snippets and tips taken from your long-form pieces to reach developers where they spend time.',
    Icon: ChatBubbleLeftRightIcon,
  },
]

const WhatWeCreate = () => {
  return (
    <section
      id="what-we-create"
      className="bg-gradient-brand scroll-mt-32 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="lg:subheader-light subheader-mobile-light">
            What We Create
          </h2>
          <p className="mt-4 text-lg text-gray-100">
            Every format developers rely on, from tutorials to lead magnets
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map(({ title, text, Icon }) => (
            <li
              key={title}
              className="flex flex-col rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-gray-900 shadow-md">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="font-code mt-5 text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-base text-white/80">{text}</p>
            </li>
          ))}
          {/* Last card links to real examples, so the grid fills evenly */}
          <li className="flex">
            <Link
              href="/technical-content-examples"
              className="group flex w-full flex-col justify-between rounded-2xl bg-white p-6 shadow-xl transition hover:-translate-y-0.5"
            >
              <span className="font-code text-secondary text-lg font-semibold">
                See content examples for 40+ clients
              </span>
              <span className="text-secondary mt-6 inline-flex items-center gap-x-2 text-base font-semibold">
                View examples
                <ArrowRightIcon
                  aria-hidden="true"
                  className="size-5 transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default WhatWeCreate
