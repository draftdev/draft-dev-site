'use client'

import Image from 'next/image'
import Link from 'next/link'
import MiniCaseMailgun from './mini-case-mailgun'

export default function CaseStudySinchMailgun() {
  const stats = [
    { label: 'Achieved 20-45% CTR rates with Draft.dev' },
    { label: 'Quality developer content' },
    { label: 'Weeks of internal time saved' },
    { label: 'Expanded content initiatives' },
  ]

  const highlights = [
    {
      name: 'Challenges',
      description: [
        'Internal developer resources without bandwidth',
        'Time and resource-intensive content needs',
        'Technical product is difficult for non-developer writers',
        'Need for high volume and quality',
      ],
    },
    {
      name: 'Solution',
      description: [
        'Subject matter expert writers',
        'Professional and seamless processes',
        'Strategic suggestions and feedback',
        'Testing and tutorial content creation',
      ],
    },
    {
      name: 'Results',
      description: [
        '20-45% CTR for developer content',
        'Expanded internal programming',
        'More time to create thought leadership content',
        'Content used by support teams',
      ],
    },
  ]

  const relatedCaseStudies = [
    {
      name: 'Rahul Patwardhan',
      role: 'Senior Director, Demand Generation',
      imageUrl:
        '/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg',
      company: 'Loft Labs',
    },
    {
      name: 'Adam Gordon Bell',
      role: 'Director of Developer Relations',
      imageUrl: '/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg',
      company: 'Earthly',
    },
    {
      name: 'Henry Poydar',
      role: 'Founder & CEO',
      imageUrl: '/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg',
      company: 'Status Hero',
    },
  ]

  return (
    <>
      <main>
        <div className="bg-gradient-brand relative isolate">
          <div className="relative isolate py-16 sm:py-24">
            <div className="px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center uppercase">
                <h1
                  className="subheader-light pt-16 text-2xl sm:text-6xl"
                  style={{ lineHeight: '1.3' }}
                >
                  How{' '}
                  <span className="pt-3 sm:inline-block sm:rounded sm:bg-white sm:px-3 sm:py-1">
                    <span className="sm:from-secondary sm:to-primary text-white sm:bg-gradient-to-br sm:bg-clip-text sm:text-transparent">
                      Sinch Mailgun
                    </span>
                  </span>{' '}
                  REVIVED ITS DEVELOPER-FIRST CONTENT STRATEGY AND ACHIEVED{' '}
                  <span className="pt-3 sm:inline-block sm:rounded sm:bg-white sm:px-3 sm:py-1">
                    <span className="sm:from-secondary sm:to-primary text-white sm:bg-gradient-to-br sm:bg-clip-text sm:text-transparent">
                      20–45%
                    </span>
                  </span>{' '}
                  CTR with Draft.dev
                </h1>
              </div>
            </div>

            <div className="mb-12 flex flex-col items-center justify-center gap-x-6 sm:mt-12 sm:mb-24 sm:flex-row">
              <Link
                href="/files/sinch_mailgun_case_study_draft_dev.pdf"
                className="focus-visible:outline-primary my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:my-0 sm:text-base"
              >
                Download the full case study
              </Link>
              <Link
                href="/#how-we-work"
                className="my-2 text-sm font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-base"
              >
                See how we work <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="mx-auto mt-12 max-w-2xl lg:max-w-5xl">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="mx-auto flex max-w-lg flex-col-reverse gap-y-3 rounded-xl bg-white/5 px-8 py-4 text-center"
                  >
                    <dt className="font-code text-base font-bold text-gray-300 sm:text-lg">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <MiniCaseMailgun />
        <div className="bg-gradient-brand py-12 sm:py-22">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="mx-auto grid justify-center justify-items-start gap-8 py-16 text-base/7 text-white sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight.name}
                  className="relative rounded-xl bg-white/5 p-10"
                >
                  <dt>
                    <span className="font-code text-xl font-semibold sm:text-3xl">
                      {highlight.name}
                    </span>
                  </dt>
                  <dd>
                    <ul className="list-disc space-y-2 pt-8 pl-4">
                      {highlight.description.map((item, index) => (
                        <li key={index} className="text-lg text-white">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex items-center justify-center gap-x-6 sm:my-10">
              <Link
                href="/files/sinch_mailgun_case_study_draft_dev.pdf"
                className="font-code hover:text-gradient-2 focus-visible:outline-primary rounded-sm px-3.5 py-2.5 text-base font-semibold text-white shadow-sm ring-2 ring-white hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Download the full case study
              </Link>
              <Link
                href="/#how-we-work"
                className="font-code text-base text-white hover:text-gray-300"
              >
                See how we work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mx-auto my-24 max-w-7xl scroll-mt-32 px-6 lg:px-8"
          id="more-case-studies"
        >
          <div className="mx-auto">
            <h2 className="subheader-gradient">More Case Studies</h2>
            <p className="lead-dark">
              Hear from real clients to learn how they have succeeded with
              Draft.dev.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3 lg:mx-0"
          >
            {relatedCaseStudies.map((client) => (
              <li key={client.name}>
                <Link
                  href={`/case-studies/${client.company.toLowerCase().replace(' ', '-')}`}
                  className="group block"
                >
                  <div className="rounded-4xl bg-white/15 p-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="rounded-4xl p-1 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          src={client.imageUrl}
                          alt={`${client.name}'s case study for ${client.company}`}
                          width={500}
                          height={600}
                          className="aspect-[14/13] w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-8 text-gray-600 group-hover:text-gray-900">
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
      </main>
    </>
  )
}
