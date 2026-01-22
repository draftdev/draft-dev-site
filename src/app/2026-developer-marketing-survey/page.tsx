import ServiceHeader from '@/components/global/headers/service-header'
import FormDeveloperMarketingSurvey2026 from '@/components/page-components/vendors/hubspot/form-developer-marketing-survey-2026'
import { CheckIcon } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: '2026 Developer Marketing Survey - Draft.dev',
  description:
    'Survey of dev marketing leaders reveals 2026 budget trends, top-performing channels, AI adoption gaps, and why content creation is now the most outsourced function.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/2026-developer-marketing-survey',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: '2026 Developer Marketing Survey - Draft.dev',
    description:
      'Survey of dev marketing leaders reveals 2026 budget trends, top-performing channels, AI adoption gaps, and why content creation is now the most outsourced function.',
    images: [
      {
        url: '/site/med-landscape/2026_developer_marketing_survey_og_draftdev.jpg',
        width: 1200,
        height: 630,
        alt: '2026 Developer Marketing Survey Download',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 Developer Marketing Survey - Draft.dev',
    description:
      'Survey of dev marketing leaders reveals 2026 budget trends, top-performing channels, AI adoption gaps, and why content creation is now the most outsourced function.',
    images: [
      '/site/med-landscape/2026_developer_marketing_survey_og_draftdev.jpg',
    ],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/2026-developer-marketing-survey',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const findings = [
  {
    stat: '62%',
    statLabel: 'of teams are increasing dev marketing budgets for 2026',
  },

  {
    stat: '73%',
    statLabel: 'are investing more in community and events this year',
  },
  {
    stat: '51%',
    statLabel: 'are increasing investment in content marketing and SEO',
  },
  {
    stat: '64%',
    statLabel: 'say community and events deliver their highest ROI',
  },
  {
    stat: '85%',
    statLabel: 'use AI primarily for content ideation and drafting',
  },

  {
    stat: '42%',
    statLabel: 'of teams are using vendors to outsource content creation',
  },
]

const insideReport = [
  'Where budgets are headed and how priorities shift as companies scale',
  'Which channels actually deliver ROI (and which are overhyped)',
  'Why 96% of teams have tried AI but only 7% find it "very useful"',
  'What is driving experimentation with video despite weak returns',
  'Why content creation has become the most commonly outsourced function',
  'Investment patterns by company size: startup vs. mid-market vs. enterprise',
]

export default function DeveloperMarketingSurvey2026() {
  return (
    <div className="bg-white">
      <ServiceHeader
        title="Developer Marketing Survey 2026"
        description="We surveyed developer marketing and DevRel leaders across the
              industry to find out what's actually working in 2026."
        primaryCTA={{
          text: 'Download Full Report',
          href: '#download-report',
        }}
        secondaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
      />

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                  <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                    <Image
                      alt="2026 Developer Marketing Survey Preview"
                      src="/site/med-portrait/2026_developer_marketing_survey_lp_draftdev.jpg"
                      width={500}
                      height={650}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient">
                What's Inside
              </h2>
              <p className="sm:paragraph-dark mt-4 text-base text-gray-600">
                This report is based on interviews conducted by Draft.dev with
                developer marketing and DevRel leaders from companies ranging
                from early-stage startups to enterprises with 1,000+ employees.
              </p>
              <ul className="mt-8 space-y-4 text-base text-gray-600 sm:text-lg">
                {insideReport.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckIcon
                      className="text-primary h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-brand py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="subheader-light text-2xl sm:text-5xl">
              Key Findings
            </h2>
            <p className="paragraph-light mt-4 text-lg sm:text-2xl">
              Here's what developer marketing leaders told us is working in
              2026.
            </p>
          </div>

          <dl className="my-6 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3">
            {findings.map((stat) => (
              <div
                key={stat.statLabel}
                className="flex flex-col bg-white/5 p-8"
              >
                <dt className="text-base leading-6 text-gray-100">
                  {stat.statLabel}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="download-report"
        className="scroll-mt-32 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient">
              Get the full report
            </h2>
            <p className="sm:paragraph-dark mt-4 text-base text-gray-600">
              Download the 2026 Developer Marketing Survey to see all the data,
              analysis, and actionable insights for your team.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <FormDeveloperMarketingSurvey2026 />
          </div>
        </div>
      </section>
    </div>
  )
}
