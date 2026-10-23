import {
  ChartBarIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'

import BookCall from '@/components/page-components/service-landing/book-call'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Every case study, used for the "More Case Studies" cards at the bottom
const caseStudies = [
  {
    slug: 'gpu-cloud-platform',
    company: 'GPU cloud platform',
    stat: '10x',
    label: 'More AI traffic than its older pages',
  },
  {
    slug: 'developer-api-platform',
    company: 'Developer API platform',
    stat: '56%',
    label: 'Of AI citations traced to our articles',
  },
  {
    slug: 'business-banking-platform',
    company: 'Business banking platform',
    stat: '8 weeks',
    label: 'To first AI citations on a new blog',
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
  // Optional visual for the right side of the hero; stat cards otherwise
  heroVisual?: React.ReactNode
  // Larger, bolder numbers in the hero card
  heavyStats?: boolean
  // Optional extra section after the story, e.g. a detailed process
  afterStorySlot?: React.ReactNode
}

const primaryCta =
  'rounded-md bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:text-lg'

function StoryCard({
  step,
  title,
  items,
  Icon,
  highlight = false,
}: {
  step: string
  title: string
  items: string[]
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  highlight?: boolean
}) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-3xl p-8 ${
        highlight
          ? 'bg-gradient-brand text-white shadow-xl'
          : 'bg-white shadow-md ring-1 ring-gray-200'
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            highlight ? 'bg-white/15' : 'bg-gradient-brand'
          }`}
        >
          <Icon
            aria-hidden="true"
            className={`h-6 w-6 ${highlight ? 'text-amber-300' : 'text-white'}`}
          />
        </span>
        <span
          className={`font-code text-4xl font-semibold ${
            highlight ? 'text-white/20' : 'text-gray-200'
          }`}
        >
          {step}
        </span>
      </div>
      <h3
        className={`font-code mt-6 text-2xl font-semibold ${
          highlight ? 'text-white' : 'text-secondary'
        }`}
      >
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
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
  // Jumps to the booking section (Calendly and contact form) at the bottom
  ctas = [{ label: 'Book a Discovery Call', href: '#book-a-call' }],
  heroVisual,
  heavyStats = false,
  afterStorySlot,
}: CaseStudyProps) {
  const others = caseStudies.filter((c) => c.slug !== slug).slice(0, 3)

  return (
    <main>
      {/* Hero: story on the left, results on the right */}
      <div className="bg-gradient-brand relative isolate overflow-hidden">
        {/* Soft glow for depth */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl"
        />
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-x-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase ring-1 ring-white/20">
                <span className="text-amber-300">Case Study</span>
                <span aria-hidden="true" className="text-white/40">
                  ·
                </span>
                {company}
              </p>
              <h1 className="font-code sm:header-light mt-6 text-3xl leading-tight font-semibold text-white">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-gray-100 sm:text-xl">
                {summary}
              </p>
              {ctas.length > 0 && (
                <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                  {ctas[0] &&
                    (ctas[0].href.startsWith('#') ? (
                      // Plain anchor: jumps to the booking section on this page
                      <a href={ctas[0].href} className={primaryCta}>
                        {ctas[0].label}
                      </a>
                    ) : (
                      <Link href={ctas[0].href} className={primaryCta}>
                        {ctas[0].label}
                      </Link>
                    ))}
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
            {heroVisual ?? (
              // Same card as the approved GPU case study: one row per result
              <dl className="divide-y divide-white/15 rounded-3xl bg-white/10 px-6 shadow-2xl ring-1 ring-white/20 sm:px-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={clsx(
                      'flex flex-col-reverse justify-end gap-y-1',
                      heavyStats ? 'py-6' : 'py-5',
                    )}
                  >
                    <dt
                      className={clsx(
                        heavyStats
                          ? 'text-lg font-medium text-white'
                          : 'text-base text-gray-200',
                      )}
                    >
                      {stat.label}
                    </dt>
                    <dd
                      className={clsx(
                        'font-code text-white',
                        heavyStats
                          ? 'text-5xl font-bold sm:text-6xl'
                          : 'text-4xl font-semibold',
                      )}
                    >
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>

      {/* Optional client snapshot */}
      {details && details.length > 0 && (
        <div className="border-b border-gray-200 bg-white">
          <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3 lg:px-8">
            {details.map((d) => (
              <div key={d.label} className="border-l-4 border-amber-400 pl-4">
                <dt className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                  {d.label}
                </dt>
                <dd className="mt-1 text-lg font-medium text-gray-900">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* The story in three steps */}
      <section className="bg-gray-50 pt-12 pb-10 sm:pt-16 sm:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
            The Story in Three Parts
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <StoryCard
              step="01"
              title="The challenge"
              items={challenge}
              Icon={PuzzlePieceIcon}
            />
            <StoryCard
              step="02"
              title="What we did"
              items={solution}
              Icon={WrenchScrewdriverIcon}
            />
            <StoryCard
              step="03"
              title="The results"
              items={results}
              Icon={ChartBarIcon}
              highlight
            />
          </div>
        </div>
      </section>

      {/* Client quote */}
      {quote && (
        <section className="bg-white pt-10 pb-12 sm:pt-12 sm:pb-14">
          <figure className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-6 sm:grid-cols-[auto_1fr] sm:gap-12 lg:px-8">
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full shadow-lg ring-4 ring-amber-300 sm:h-36 sm:w-36">
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
        className="mx-auto max-w-7xl scroll-mt-32 px-6 pt-10 pb-14 sm:pt-12 sm:pb-16 lg:px-8"
      >
        <h2 className="subheader-mobile-gradient sm:subheader-gradient">
          More Case Studies
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {others.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/case-studies/${c.slug}`}
                className="group bg-gradient-brand flex h-full flex-col rounded-3xl p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-semibold tracking-widest text-amber-300 uppercase">
                  {c.company}
                </p>
                <p className="font-code mt-4 text-5xl font-semibold text-white">
                  {c.stat}
                </p>
                <p className="mt-2 flex-auto text-lg text-gray-100">
                  {c.label}
                </p>
                <p className="mt-6 text-base font-semibold text-white group-hover:text-amber-300">
                  Read the case study <span aria-hidden="true">→</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <BookCall />
    </main>
  )
}
