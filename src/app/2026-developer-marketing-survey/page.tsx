// import FAQ from '@/components/global/faq'
// import SocialProof from '@/components/media/social-proof'
// import Testimonial from '@/components/media/testimonials/testimonial'
// import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
// import ServiceInfo from '@/components/page-components/developer-marketing-survey-2026/service-info'

// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   metadataBase: new URL('https://draft.dev'),
//   title: '2026 Developer Marketing Survey - Draft.dev',
//   description:
//     'Survey of dev marketing leaders reveals 2026 budget trends, top-performing channels, AI adoption gaps, and why content creation is now the most outsourced function.',
//   authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
//   openGraph: {
//     type: 'website',
//     url: 'https://draft.dev/2026-developer-marketing-survey',
//     siteName: 'Draft.dev',
//     locale: 'en_US',
//     title: '2026 Developer Marketing Survey - Draft.dev',
//     description:
//       'Survey of dev marketing leaders reveals 2026 budget trends, top-performing channels, AI adoption gaps, and why content creation is now the most outsourced function.',
//     images: [
//       {
//         url: '/site/med-landscape/2026_developer_marketing_survey_og_draftdev.jpg',
//         width: 1200,
//         height: 630,
//         alt: '2026 Developer Marketing Survey Download',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: '2026 Developer Marketing Survey - Draft.dev',
//     description:
//       'Survey of dev marketing leaders reveals 2026 budget trends, top-performing channels, AI adoption gaps, and why content creation is now the most outsourced function.',
//     images: [
//       '/site/med-landscape/2026_developer_marketing_survey_og_draftdev.jpg',
//     ],
//     creator: '@draftdev',
//     site: '@draftdev',
//   },
//   alternates: {
//     canonical: 'https://draft.dev/2026-developer-marketing-survey',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// }

// export default function DeveloperMarketingSurvey() {
//   return (
//     <>
//       <ServiceInfo />
//       <SocialProof />
//       <TestimonialsGroup />
//       <Testimonial
//         quote="Anyone tasked with marketing to developers knows that they are a community that can smell B.S. from a mile away. Having a dedicated technical resource available is a great support for creating content that both matters to our users and is also useful and accurate."
//         name="Em Blitstein"
//         role="Senior Content Marketing Manager"
//         company="Sinch Mailgun"
//         imageSrc="/media/testimonials-lg/em_sinch_mailgun.jpg"
//         imageAlt="Em Blitstein"
//       />
//       <FAQ />
//     </>
//   )
// }
import ServiceHeader from '@/components/global/headers/service-header'
import { LogosDark } from '@/components/media/logos-dark'
import FormDeveloperMarketingSurvey2026 from '@/components/page-components/vendors/hubspot/form-developer-marketing-survey-2026'
import { CheckIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const findings = [
  {
    title: 'Increasing dev marketing budgets for 2026',
    description:
      'Smaller companies are betting on content to earn attention, and larger companies invest in community, advocacy, and product experience to compound it.',
    stat: '62%',
    statLabel: 'of teams are increasing dev marketing budgets for 2026',
  },
  {
    title: 'Increasing investment in content marketing and SEO',
    description:
      'Content remains a top ROI channel, but it was harder to win in 2025 than in previous years due to the emergence of zero-click AI summaries.',
    stat: '51%',
    statLabel: 'are increasing investment in content marketing and SEO',
  },
  {
    title: 'Investing more in community and events',
    description:
      'Community and events are easier to measure than other channels. When you have a booth at a conference, you can scan badges, track conversations, and run drip campaigns with clear attribution.',
    stat: '73%',
    statLabel: 'are investing more in community and events this year',
  },
  {
    title: 'Use AI primarily for content ideation and drafting',
    description:
      'AI is replacing blank-page work, not strategy. Only 7% call it "very useful" and heavily rely on it daily. Most still require humans in the loop.',
    stat: '85%',
    statLabel: 'Have tried AI for content creation',
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

      {/* What's Inside Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Report Preview Image */}
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

            {/* Content */}
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

      {/* Key Findings Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient">
              Key Findings
            </h2>
            <p className="sm:paragraph-dark mt-4 text-base text-gray-600">
              Here is what developer marketing leaders told us is working in
              2026.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {findings.map((finding, index) => (
              <div
                key={index}
                className="flex flex-col rounded-4xl bg-gray-50 p-8 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-gradient-brand text-gradient font-code text-3xl font-semibold sm:text-4xl">
                    {finding.stat}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {finding.statLabel}
                  </span>
                </div>
                <h3 className="font-code mt-4 text-xl font-semibold text-gray-900">
                  {finding.title}
                </h3>
                <p className="mt-3 grow text-base text-gray-600">
                  {finding.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <LogosDark />

      {/* Final CTA Section */}
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
