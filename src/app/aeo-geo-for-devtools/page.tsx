import ServiceHeader from '@/components/global/headers/service-header'
import FormAEOandGEO from '@/components/page-components/vendors/hubspot/form-aeo-geo'
import { CheckIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'AEO and GEO for DevTools - Draft.dev',
  description: 'Learn how to implement AEO and GEO strategies for DevTools.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/aeo-geo-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'AEO and GEO for DevTools - Draft.dev',
    description: 'Learn how to implement AEO and GEO strategies for DevTools.',
    images: [
      {
        url: '/site/med-landscape/aeo_geo_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'AEO and GEO for DevTools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEO and GEO for DevTools - Draft.dev',
    description: 'Learn how to implement AEO and GEO strategies for DevTools.',
    images: ['/site/med-landscape/aeo_geo_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/aeo-geo-for-devtools',
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
    stat: '156%',
    statLabel:
      'keywords in positions 1–3 in 2 months (9 → 23, Client C · Mobile Dev Tools)',
  },
  {
    stat: '+114%',
    statLabel:
      'keywords in positions 4–10 in 2 months (14 → 30, Client C · Mobile Dev Tools)',
  },
  {
    stat: '96%',
    statLabel: 'of dev marketing teams have tried AI tools',
  },
  {
    stat: '7%',
    statLabel: 'find AI tools "very useful" — most are still experimenting',
  },
  {
    stat: '5.4×',
    statLabel:
      'more traffic from human-written vs. AI-only content (HubSpot, 2025)',
  },
  {
    stat: '49%',
    statLabel: 'of search results now include AI Overviews (2026)',
  },
]

const insideReport = [
  'Where AI-powered search is headed and what it means for developer tool discovery',
  'Which content strategies actually improve LLM visibility (and which are a waste of time)',
  'Why 96% of dev marketing teams have tried AI but only 7% find it "very useful"',
  'What is driving the shift from traditional SEO to AEO and GEO in 2026',
  'Why original, human-written content generates 5.4× more traffic than AI-only content',
  'How developer tool companies of all sizes are winning in AI-powered search right now',
]

export default function AEOForDevTools() {
  return (
    <div className="bg-white">
      <ServiceHeader
        title="AEO and GEO for DevTools"
        description="49% of search results now include AI Overviews. This report breaks down what AEO and GEO actually mean for developer marketing, and what's working right now."
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
                      alt="AEO and GEO for DevTools Preview"
                      src="/site/med-portrait/aeo-geo-for-devtools_draftdev.jpg"
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
                Based on Draft.dev's internal data and real client results, this
                report covers the strategies and outcomes from working directly
                with DevTools companies in the age of AI-powered search.
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
              Here's what we've learned about the state of AEO and GEO for
              developer marketing in 2026.
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
              Get concrete strategies, real client results, and a clear picture
              of what it takes to stay visible as AI reshapes developer search.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <FormAEOandGEO />
          </div>
        </div>
      </section>
    </div>
  )
}
