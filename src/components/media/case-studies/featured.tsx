'use client'

import Image from 'next/image'
import Link from 'next/link'

type CaseLink = {
  name: string
  role: string
  imageUrl: string
  company: string
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

const moreCaseStudies: CaseLink[] = [
  {
    name: 'Henry Poydar',
    role: 'Founder & CEO',
    imageUrl: '/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg',
    company: 'Status Hero',
    slug: 'status-hero',
  },
  {
    name: 'Rahul Patwardhan',
    role: 'Senior Director, Demand Generation',
    imageUrl: '/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg',
    company: 'Loft Labs',
    slug: 'loft-labs',
  },
  {
    name: 'Adam Gordon Bell',
    role: 'Director of Developer Relations',
    imageUrl: '/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg',
    company: 'Earthly',
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
                  className="my-2 rounded bg-gradient-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-gradient-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-base"
                >
                  Read this case study
                </Link>
                <Link
                  href="/#how-we-work"
                  className="my-2 text-sm font-semibold text-gray-600 hover:text-gray-700 sm:my-0 sm:text-base"
                >
                  See how we work <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Image (smaller than before) */}
          <div className="w-full lg:flex lg:max-w-lg lg:flex-auto lg:items-center lg:justify-center">
            <div className="hidden lg:block lg:w-[400px]">
              <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Em Blitstein"
                    height={600}
                    width={500}
                    priority
                    src="/media/testimonials-lg/em_sinch_mailgun.jpg"
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Case Studies */}
      <div className="mt-24 bg-gradient-brand py-16">
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
            className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3 lg:mx-0"
          >
            {moreCaseStudies.map((client) => (
              <li key={client.slug}>
                <Link
                  href={`/case-studies/${client.slug}`}
                  className="group block"
                >
                  <div className="rounded-4xl bg-white/5 p-1 shadow-sm ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="rounded-4xl p-1 shadow-md shadow-black/20">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-white/10">
                        <Image
                          src={client.imageUrl}
                          alt={`${client.name}'s case study for ${client.company}`}
                          width={800}
                          height={800}
                          className="aspect-[14/13] w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-8 text-gray-100 group-hover:text-white">
                    <p className="case-study-small font-semibold">
                      {client.name}
                    </p>
                    <p className="case-study-small">
                      {client.role}, {client.company}
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
