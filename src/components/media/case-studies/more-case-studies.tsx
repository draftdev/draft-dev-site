import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// The three most recent case studies (Oct 2026). Clients are anonymous, so
// each card leads with its headline result instead of a client photo.
// Figures match each case study's own summary.
type RecentCase = {
  client: string
  stat: string
  statLabel: string
  summary: string
  slug: string
}

const recentCaseStudies: RecentCase[] = [
  {
    client: 'Developer API Platform',
    stat: '72%',
    statLabel: "of the site's AI citations come from our articles",
    summary: '23 new articles and 3 refreshes in seven months.',
    slug: 'developer-api-platform',
  },
  {
    client: 'GPU Cloud Platform',
    stat: '10x',
    statLabel: 'the AI traffic of its refreshed legacy pages',
    summary: '29 articles, guides and refreshes in under five months.',
    slug: 'gpu-cloud-platform',
  },
  {
    client: 'Business Banking Platform',
    stat: '8 weeks',
    statLabel: 'to the first clicks from AI assistants, on a brand new blog',
    summary: '22 new articles in under four months.',
    slug: 'business-banking-platform',
  },
]

export default function MoreCaseStudies() {
  return (
    <section className="bg-[#f4f1f8] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            More Case Studies
          </h2>
        </div>

        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {recentCaseStudies.map((study) => (
            <li key={study.slug}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white p-2 shadow-sm ring-1 ring-[#5e5285]/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Headline result on the brand gradient */}
                <div className="bg-gradient-brand relative isolate overflow-hidden rounded-2xl px-6 py-8">
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 -z-10 h-40 w-40 rounded-full bg-amber-300/20 blur-2xl"
                  />
                  <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-[#5e5285]">
                    Case study
                  </span>
                  <p className="font-code mt-5 text-5xl font-semibold text-amber-300">
                    {study.stat}
                  </p>
                  {/* Two lines tall on every card so the panels line up */}
                  <p className="mt-2 min-h-[2lh] text-base text-white/90">
                    {study.statLabel}
                  </p>
                </div>
                <div className="flex grow flex-col px-4 pt-5 pb-3">
                  <p className="font-code text-secondary text-lg font-semibold">
                    {study.client}
                  </p>
                  <p className="mt-1 grow text-base text-gray-600">
                    {study.summary}
                  </p>
                  <span className="text-secondary mt-5 flex items-center justify-between rounded-xl bg-[#f4f1f8] px-4 py-3 text-sm font-semibold transition group-hover:bg-amber-400 group-hover:text-gray-900">
                    Read the case study
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="size-4 transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center">
          <Link
            href="/case-studies"
            className="text-secondary group inline-flex items-center gap-x-2 text-base font-semibold"
          >
            View all case studies
            <ArrowRightIcon
              aria-hidden="true"
              className="size-4 transition group-hover:translate-x-1"
            />
          </Link>
        </p>
      </div>
    </section>
  )
}
