'use client'

import MiniCaseEarthly from '@/components/media/case-studies/mini-case-earthly'
import Image from 'next/image'
import Link from 'next/link'

export default function CaseStudyMain() {
  const stats = [
    { label: 'Blog visitors per workday', value: '1,500' },
    { label: 'Increase in monthly readers', value: '346%' },
    { label: 'Blog conversion rate', value: '6%' },
  ]

  const highlights = [
    {
      name: 'Challenges',
      description: [
        'Creating high-quality and valuable technical content',
        'Ramping up content production for technical blog',
        'Lacking SEO knowledge',
      ],
    },
    {
      name: 'Solution',
      description: [
        'Consistent content providing excellent results',
        'SEO and keyword research',
        'Subject matter expert writers',
        'Professional and ready-to-publish content',
        'Supportive and helpful customer support',
      ],
    },
    {
      name: 'Results',
      description: [
        '346% increase in monthly blog visitors',
        '1500 visitors per workday',
        '6% conversion rate on blog content',
        'Ranking in the top 3 for some keywords',
      ],
    },
  ]

  const relatedCaseStudies = [
    {
      name: 'Henry Poydar',
      role: 'Founder & CEO',
      imageUrl: '/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg',
      company: 'Status Hero',
    },
    {
      name: 'Rahul Patwardhan',
      role: 'Senior Director, Demand Generation',
      imageUrl:
        '/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg',
      company: 'Loft Labs',
    },
  ]

  return (
    <>
      <main>
        <div className="relative isolate bg-gradient-brand">
          <div className="relative isolate py-16 sm:py-24">
            <div className="px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center uppercase">
                <h1
                  className="subheader-light pt-16"
                  style={{ lineHeight: '1.3' }}
                >
                  How{' '}
                  <span className="bg-white pt-3">
                    <span className="header-gradient px-3">Earthly</span>
                  </span>{' '}
                  Increased Its Monthly Blog Visitors by{' '}
                  <span className="bg-white pt-3">
                    <span className="header-gradient px-3">346%</span>
                  </span>{' '}
                  and ramped up its content production with Draft.dev
                </h1>
              </div>
            </div>
            {/*
            <div className="mb-12 flex flex-col items-center justify-center gap-x-6 sm:mb-24 sm:mt-12 sm:flex-row">
              <Link
                href="#"
                className="my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-base"
              >
                Download the full case study
              </Link>
              <Link
                href="#"
                className="my-2 text-sm font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-base"
              >
                Just give me the hard facts <span aria-hidden="true">→</span>
              </Link>
            </div> */}

            {/* Stats Grid */}
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="mx-auto flex max-w-lg flex-col-reverse gap-y-3 rounded-xl bg-white/5 px-16 py-4 text-center"
                  >
                    <dt className="font-code text-lg font-bold text-gray-300">
                      {stat.label}
                    </dt>
                    <dd className="header-light text-center">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <MiniCaseEarthly />
        <div className="sm:py-22 bg-gradient-brand py-12">
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
                    <ul className="list-disc space-y-2 pl-4 pt-8">
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
            {/* <div className="flex items-center justify-center gap-x-6 sm:my-10">
              <Link
                href="#"
                className="rounded-sm px-3.5 py-2.5 font-code text-base font-semibold text-white shadow-sm ring-2 ring-white hover:bg-gray-100 hover:text-gradient-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Download the full case study
              </Link>
              <Link
                href="#"
                className="font-code text-base text-white hover:text-gray-300"
              >
                Technical writing examples <span aria-hidden="true">→</span>
              </Link>
            </div> */}
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
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-4xl"
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
                          width={800}
                          height={800}
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
