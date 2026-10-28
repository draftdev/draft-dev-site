'use client'

import Image from 'next/image'
import Link from 'next/link'

type CaseLink = {
  company: string
  title: string
  stat: string
  statLabel: string
  slug: string
}

const featured = {
  title:
    'How Sinch Mailgun Revived Its Developer-First Content Strategy and Achieved 20–45% CTR with Draft.dev',
  dek: 'When internal engineering bandwidth was tight, Draft.dev delivered SME-written tutorials, testing content, and editorial QA—fueling engagement while saving weeks of internal time.',
  image: {
    src: '/media/testimonials-lg/em_sinch_mailgun.jpg',
    alt: 'Sinch Mailgun case study hero image',
    width: 1344,
    height: 1104,
  },
  href: '/case-studies/sinch-mailgun',
  secondaryHref: '/#how-we-work',
}

// Cards lead with each case study's headline result.
const moreCaseStudies: CaseLink[] = [
  {
    company: 'GPU cloud platform',
    title: 'How a GPU Cloud Platform Got 10x More AI Traffic',
    stat: '10x',
    statLabel: 'AI traffic vs. refreshed legacy pages',
    slug: 'gpu-cloud-platform',
  },
  {
    company: 'Developer API platform',
    title: 'How a Developer API Platform Won 72% of Its AI Citations',
    stat: '72%',
    statLabel: "Of the site's AI citations come from our articles",
    slug: 'developer-api-platform',
  },
  {
    company: 'Business banking platform',
    title: 'How a Business Banking Platform Got AI Citations in 8 Weeks',
    stat: '8 weeks',
    statLabel: 'To AI citations, with zero domain history',
    slug: 'business-banking-platform',
  },
  {
    company: 'Status Hero',
    title: 'How Status Hero Grew Blog Traffic by 211%',
    stat: '211%',
    statLabel: 'Increase in blog traffic',
    slug: 'status-hero',
  },
  {
    company: 'Loft Labs',
    title: 'How Loft Labs Scaled Its Kubernetes Blog by 4x',
    stat: '4x',
    statLabel: 'Growth in blog traffic in one year',
    slug: 'loft-labs',
  },
  {
    company: 'Earthly',
    title: 'How Earthly Grew Monthly Blog Visitors by 346%',
    stat: '346%',
    statLabel: 'Increase in monthly readers',
    slug: 'earthly',
  },
]

export default function CaseStudiesFeature() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto my-10 flex max-w-2xl flex-col items-center justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center">
          {/* LEFT: Title + Dek with Draft.dev text styles */}
          <div className="w-full lg:flex lg:max-w-xl lg:flex-auto lg:flex-col lg:justify-center">
            <div>
              <h2 className="subheader-gradient sm:text-5xl">
                How Sinch Mailgun Revived Its Developer-First Content Strategy
                and Achieved 20–45% CTR with Draft.dev
              </h2>

              <p className="mt-6 text-xl/8 text-gray-600">{featured.dek}</p>

              <div className="mt-12 flex flex-col items-center gap-x-6 sm:flex-row">
                <Link
                  href="/case-studies/sinch-mailgun"
                  className="bg-gradient-1 hover:bg-gradient-2 focus-visible:outline-primary my-2 rounded px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white focus-visible:outline-2 focus-visible:outline-offset-2 sm:my-0 sm:text-base"
                >
                  Read this case study
                </Link>
                <Link
                  href="/#how-we-work"
                  className="my-2 text-sm font-semibold text-gray-600 hover:text-gray-700 sm:my-0 sm:text-base"
                >
                  See how we publish within weeks{' '}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Image (smaller than before) */}
          <div className="w-full lg:flex lg:max-w-lg lg:flex-auto lg:items-center lg:justify-center">
            <div className="hidden lg:block lg:w-[400px]">
              <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Em Blitstein"
                    height={600}
                    width={500}
                    priority
                    src="/media/testimonials-lg/em_sinch_mailgun.jpg"
                    className="aspect-2/3 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Case Studies */}
      <div className="bg-gradient-brand mt-24 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="lg:subheader-light subheader-mobile-light">
              More Case Studies
            </h3>
            <p className="mt-4 text-lg text-gray-100 lg:leading-8">
              Hear from real clients to learn how they've succeeded with
              Draft.dev.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mx-0"
          >
            {moreCaseStudies.map((study) => (
              <li key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-white/10 p-8 shadow-sm ring-1 ring-white/20 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <p className="font-code text-5xl font-semibold text-white">
                    {study.stat}
                  </p>
                  <p className="mt-3 text-sm text-gray-100">
                    {study.statLabel}
                  </p>
                  <div className="mt-8 flex flex-1 flex-col border-t border-white/20 pt-6 text-gray-100 group-hover:text-white">
                    <p className="case-study-small font-semibold">
                      {study.title}
                    </p>
                    <p className="case-study-small">{study.company}</p>
                    <p className="mt-auto pt-6 text-sm font-semibold text-white">
                      Read the case study <span aria-hidden="true">→</span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
