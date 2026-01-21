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
import FormDeveloperMarketingSurvey2026 from '@/components/page-components/vendors/hubspot/form-developer-marketing-survey-2026'
import Image from 'next/image'

const stats = [
  {
    id: 1,
    value: '62%',
    label: 'Increasing budgets',
    description: 'of teams are increasing dev marketing budgets for 2026',
  },
  {
    id: 2,
    value: '73%',
    label: 'Investing in events',
    description: 'are investing more in community and events this year',
  },
  {
    id: 3,
    value: '96%',
    label: 'Have tried AI',
    description: 'of dev marketers have experimented with generative AI',
  },
  {
    id: 4,
    value: '64%',
    label: 'Events deliver ROI',
    description: 'say community and events deliver their highest ROI',
  },
]

const findings = [
  {
    title: 'Events and Community Lead ROI',
    description:
      'Community and events are easier to measure than other channels. When you have a booth at a conference, you can scan badges, track conversations, and run drip campaigns with clear attribution.',
    stat: '64%',
    statLabel: 'cite as highest ROI',
  },
  {
    title: 'Content Marketing Still Works, but the Bar Is Higher',
    description:
      'Nearly half of respondents cited content as a top ROI channel, but it was harder to win in 2025 than in previous years due to higher competition, longer time to see results, and the emergence of zero-click AI summaries.',
    stat: '51%',
    statLabel: 'increasing investment',
  },
  {
    title: 'Video Is the Big Experiment',
    description:
      'Video ranks number one for experimentation but last for proven ROI. Teams are still trying to crack the format-distribution-measurement problem. Short-form gets views but low intent; long-form builds trust but reaches smaller audiences.',
    stat: '59%',
    statLabel: 'actively experimenting',
  },
  {
    title: 'AI Accelerates, Does Not Replace',
    description:
      '85% use AI for ideation and first drafts, confirming AI is replacing blank-page work, not strategy. Only 7% call it "very useful" and heavily rely on it daily. Most still require humans in the loop.',
    stat: '84%',
    statLabel: 'use for drafting only',
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
      {/* Hero Section */}
      <section className="bg-gradient-brand relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 lg:items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Developer Marketing Survey 2026
              </h1>

              <p className="mt-4 text-lg text-gray-100">
                We surveyed developer marketing and DevRel leaders across the
                industry to find out what is actually working in 2026. Inside,
                you will discover where budgets are headed, which channels
                deliver real ROI, and why the gap between AI hype and AI
                usefulness keeps growing.
              </p>

              {/* Key stats row */}
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <p className="text-primary-700 text-3xl font-bold">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:pl-8">
              <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Download the free report
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Get instant access to the full survey results and analysis.
                </p>
                <div className="mt-6">
                  <FormDeveloperMarketingSurvey2026 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Report Preview Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl bg-white/15 p-2 shadow-lg ring-1 ring-black/5">
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    alt="2026 Developer Marketing Survey Preview"
                    src="/site/med-portrait/2026_developer_marketing_survey_lp_draftdev.jpg"
                    width={500}
                    height={650}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-mono text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What's inside the report
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                This report is based on interviews with developer marketing and
                DevRel leaders from companies ranging from early-stage startups
                to enterprises with 1,000+ employees.
              </p>
              <ul className="mt-8 space-y-4">
                {insideReport.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-primary-100 text-primary-700 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Key Findings
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here is a preview of what developer marketing leaders told us
              about what is working in 2026.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {findings.map((finding, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-primary-700 text-4xl font-bold">
                    {finding.stat}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {finding.statLabel}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {finding.title}
                </h3>
                <p className="mt-3 grow text-gray-600">{finding.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <p className="text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="text-primary-100 mt-2 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get the full report
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Download the complete Developer Marketing Survey 2026 to see all
              the data, analysis, and actionable insights for your team.
            </p>
          </div>

          <div className="mx-auto mt-12">
            <FormDeveloperMarketingSurvey2026 />
          </div>
        </div>
      </section>

      {/* About Draft.dev */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About Draft.dev
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              We build technical content engines that compound and resonate with
              developers, search engines, and LLMs. Our proven AI workflows and
              300+ subject matter experts ensure fast turnaround times and high
              quality content for developer tools companies.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/call"
                className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 rounded-lg px-6 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Book a Discovery Call
              </a>
              <a
                href="/case-studies"
                className="hover:text-primary-300 text-base font-semibold text-white"
              >
                Read our case studies <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
