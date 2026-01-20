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

export default function MoreCaseStudies() {
  return (
    <div className="bg-white">
      {/* More Case Studies */}
      <div className="bg-gradient-brand py-24">
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
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-white/10">
                        <Image
                          src={client.imageUrl}
                          alt={`${client.name}'s case study for ${client.company}`}
                          width={800}
                          height={800}
                          className="aspect-14/13 w-full object-cover"
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
