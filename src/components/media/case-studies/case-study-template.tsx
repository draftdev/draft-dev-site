import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Stat = { label: string; value?: string }
type HighlightGroup = { name: string; description: string[] }
type CTA = { label: string; href: string }
type RelatedCase = {
  name: string
  role: string
  imageUrl: string
  company: string
  href?: string // optional override
}

type TitleHighlight = string

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/['’]/g, '') // drop apostrophes
    .replace(/[^a-z0-9]+/g, '-') // non-alnum -> dash
    .replace(/^-+|-+$/g, '') // trim dashes
}

function renderTitle(title: string, highlights: TitleHighlight[] = []) {
  // Wrap each highlight once, in order, using your white-bg + header-gradient style.
  let remaining = title
  const parts: React.ReactNode[] = []

  highlights.forEach((h, idx) => {
    const i = remaining.indexOf(h)
    if (i === -1) return
    const before = remaining.slice(0, i)
    const match = remaining.slice(i, i + h.length)
    remaining = remaining.slice(i + h.length)
    if (before) parts.push(before)
    parts.push(
      <span key={`hl-${idx}`} className="bg-white pt-3">
        <span className="header-gradient px-3">{match}</span>
      </span>,
    )
  })

  if (remaining) parts.push(remaining)
  return parts
}

export default function CaseStudyTemplate({
  title,
  titleHighlights = [],
  stats,
  highlights,
  miniCaseSlot,
  relatedCaseStudies,
  ctas = [], // render up to 2
  statsCols, // optional override (3 or 4)
  uppercaseTitle = true,
}: {
  title: string
  titleHighlights?: TitleHighlight[]
  stats: Stat[]
  highlights: HighlightGroup[]
  miniCaseSlot?: React.ReactNode
  relatedCaseStudies: RelatedCase[]
  ctas?: CTA[]
  statsCols?: 3 | 4
  uppercaseTitle?: boolean
}) {
  const inferredCols: 3 | 4 = statsCols ?? (stats.length >= 4 ? 4 : 3)
  const statsGridCols = inferredCols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3' // mobile stays 1 / sm:2

  return (
    <main>
      {/* Header + Title */}
      <div className="bg-gradient-brand relative isolate">
        <div className="relative isolate py-16 sm:py-24">
          <div className="px-6 lg:px-8">
            <div
              className={`mx-auto max-w-4xl text-center ${uppercaseTitle ? 'uppercase' : ''}`}
            >
              <h1
                className="subheader-light pt-16"
                style={{ lineHeight: '1.3' }}
              >
                {renderTitle(title, titleHighlights)}
              </h1>
            </div>
          </div>

          {/* Optional CTAs (top) */}
          {ctas.length > 0 && (
            <div className="mt-12 mb-12 flex flex-col items-center justify-center gap-x-6 sm:mb-24 sm:flex-row">
              {ctas[0] && (
                <Link
                  href={ctas[0].href}
                  className="focus-visible:outline-primary my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 sm:my-0 sm:text-base"
                >
                  {ctas[0].label}
                </Link>
              )}
              {ctas[1] && (
                <Link
                  href={ctas[1].href}
                  className="my-2 text-sm font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-base"
                >
                  {ctas[1].label} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          )}

          {/* Stats Grid */}
          {stats.length > 0 && (
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <dl
                className={`grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 ${statsGridCols}`}
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="mx-auto flex max-w-lg flex-col-reverse gap-y-3 rounded-xl bg-white/5 px-8 py-4 text-center"
                  >
                    <dt className="font-code text-lg font-bold text-gray-300">
                      {stat.label}
                    </dt>
                    {stat.value ? (
                      <dd className="header-light text-center">{stat.value}</dd>
                    ) : null}
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      {/* MiniCase slot */}
      {miniCaseSlot}

      {/* Highlights */}
      <div className="bg-gradient-brand py-12 sm:py-22">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="mx-auto grid justify-center justify-items-start gap-8 py-16 text-base/7 text-white sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.name} className="relative rounded-xl bg-white/5 p-10">
                <dt>
                  <span className="font-code text-xl font-semibold sm:text-3xl">
                    {h.name}
                  </span>
                </dt>
                <dd>
                  <ul className="list-disc space-y-2 pt-8 pl-4">
                    {h.description.map((item, idx) => (
                      <li key={idx} className="text-lg text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>

          {/* Optional CTAs (bottom mirror) */}
          {ctas.length > 0 && (
            <div className="flex items-center justify-center gap-x-6 sm:my-10">
              {ctas[0] && (
                <Link
                  href={ctas[0].href}
                  className="font-code hover:text-gradient-2 focus-visible:outline-primary rounded-sm px-3.5 py-2.5 text-base font-semibold text-white shadow-sm ring-2 ring-white hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {ctas[0].label}
                </Link>
              )}
              {ctas[1] && (
                <Link
                  href={ctas[1].href}
                  className="font-code text-base text-white hover:text-gray-300"
                >
                  {ctas[1].label} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* More Case Studies */}
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
          {relatedCaseStudies.map((client) => {
            const href =
              client.href ?? `/case-studies/${slugify(client.company)}`
            return (
              <li key={`${client.name}-${client.company}`}>
                <Link href={href} className="group block">
                  <div className="rounded-4xl bg-white/15 p-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="rounded-4xl p-1 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
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
            )
          })}
        </ul>
      </div>
    </main>
  )
}
