import { CheckIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Every case study, used for the "More Case Studies" cards at the bottom
const caseStudies = [
  {
    slug: 'gpu-cloud-platform',
    company: 'GPU cloud platform',
    stat: '10x',
    label: 'AI traffic vs. refreshed legacy pages',
  },
  {
    slug: 'earthly',
    company: 'Earthly',
    stat: '346%',
    label: 'More monthly blog visitors',
  },
  {
    slug: 'loft-labs',
    company: 'Loft Labs',
    stat: '4x',
    label: 'Blog traffic growth in one year',
  },
  {
    slug: 'status-hero',
    company: 'Status Hero',
    stat: '211%',
    label: 'More blog visitors',
  },
  {
    slug: 'sinch-mailgun',
    company: 'Sinch Mailgun',
    stat: '20–45%',
    label: 'Click-through rate on developer content',
  },
]

type Stat = { value: string; label: string }
type CTA = { label: string; href: string }

export type CaseStudyProps = {
  slug: string
  company: string
  title: string
  summary: string
  stats: Stat[]
  challenge: string[]
  solution: string[]
  results: string[]
  quote?: { text: string; name: string; role: string; imageSrc: string }
  // Optional snapshot row, e.g. client type, industry, timeline
  details?: { label: string; value: string }[]
  ctas?: CTA[]
  // Optional extra section after the story, e.g. a detailed process
  afterStorySlot?: React.ReactNode
}

const primaryCta =
  'rounded-md bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:text-lg'

function StoryCard({
  step,
  title,
  items,
  highlight = false,
}: {
  step: string
  title: string
  items: string[]
  highlight?: boolean
}) {
  return (
    <div
      className={`flex flex-col rounded-3xl p-8 ${
        highlight
          ? 'bg-gradient-brand text-white shadow-xl'
          : 'bg-gray-50 ring-1 ring-gray-200'
      }`}
    >
      <p
        className={`font-code text-sm font-semibold tracking-widest uppercase ${
          highlight ? 'text-amber-300' : 'text-gradient-3'
        }`}
      >
        {step}
      </p>
      <h3
        className={`font-code mt-2 text-2xl font-semibold ${
          highlight ? 'text-white' : 'text-secondary'
        }`}
      >
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-x-3">
            <CheckIcon
              aria-hidden="true"
              className={`mt-1 h-5 w-5 shrink-0 ${
                highlight ? 'text-amber-300' : 'text-primary'
              }`}
            />
            <span
              className={`text-lg ${highlight ? 'text-white' : 'text-gray-600'}`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CaseStudyTemplate({
  slug,
  company,
  title,
  summary,
  stats,
  challenge,
  solution,
  results,
  quote,
  details,
  ctas = [{ label: 'Book a Discovery Call', href: '/call' }],
  afterStorySlot,
}: CaseStudyProps) {
  const others = caseStudies.filter((c) => c.slug !== slug).slice(0, 3)

  return (
    <main>
      {/* Hero: story on the left, results on the right */}
      <div className="bg-gradient-brand">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <div>
              <p className="font-code text-sm font-semibold tracking-widest text-amber-300 uppercase">
                Case Study · {company}
              </p>
              <h1 className="font-code mt-4 text-3xl leading-tight font-semibold text-white sm:text-4xl xl:text-[2.75rem]">
                {title}
              </h1>
              <p className="mt-6 text-lg text-gray-100">{summary}</p>
              {ctas.length > 0 && (
                <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                  {ctas[0] && (
                    <Link href={ctas[0].href} className={primaryCta}>
                      {ctas[0].label}
                    </Link>
                  )}
                  {ctas[1] && (
                    <Link
                      href={ctas[1].href}
                      className="py-2 text-base font-semibold text-white hover:text-gray-200 sm:text-lg"
                    >
                      {ctas[1].label} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              )}
            </div>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse justify-end gap-y-1 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15"
                >
                  <dt className="text-sm text-gray-200">{stat.label}</dt>
                  <dd className="font-code text-4xl font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Optional client snapshot */}
      {details && details.length > 0 && (
        <div className="border-b border-gray-200 bg-white">
          <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3 lg:px-8">
            {details.map((d) => (
              <div key={d.label}>
                <dt className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                  {d.label}
                </dt>
                <dd className="mt-1 text-lg text-gray-900">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* The story in three steps */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
            At a Glance
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <StoryCard step="01" title="The challenge" items={challenge} />
            <StoryCard step="02" title="What we did" items={solution} />
            <StoryCard
              step="03"
              title="The results"
              items={results}
              highlight
            />
          </div>
        </div>
      </section>

      {/* Client quote */}
      {quote && (
        <section className="bg-gray-50 py-14 sm:py-20">
          <figure className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-6 sm:grid-cols-[auto_1fr] sm:gap-12 lg:px-8">
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full shadow-lg ring-4 ring-white sm:h-36 sm:w-36">
              <Image
                src={quote.imageSrc}
                alt={quote.name}
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <blockquote className="font-code text-xl leading-relaxed font-semibold text-gray-800 sm:text-2xl">
                <span aria-hidden="true" className="text-gradient-3">
                  “
                </span>
                {quote.text}
                <span aria-hidden="true" className="text-gradient-3">
                  ”
                </span>
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-lg font-semibold text-gray-900">
                  {quote.name}
                </p>
                <p className="text-base text-gray-600">{quote.role}</p>
              </figcaption>
            </div>
          </figure>
        </section>
      )}

      {afterStorySlot}

      {/* More case studies: headline numbers instead of portraits */}
      <section
        id="more-case-studies"
        className="mx-auto max-w-7xl scroll-mt-32 px-6 pt-14 pb-24 sm:pt-20 lg:px-8"
      >
        <h2 className="subheader-mobile-gradient sm:subheader-gradient">
          More Case Studies
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {others.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/case-studies/${c.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="font-code text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {c.company}
                </p>
                <p className="font-code text-gradient-3 mt-4 text-5xl font-semibold">
                  {c.stat}
                </p>
                <p className="mt-2 flex-auto text-lg text-gray-600">
                  {c.label}
                </p>
                <p className="text-secondary mt-6 text-base font-semibold group-hover:text-gray-900">
                  Read the case study <span aria-hidden="true">→</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
