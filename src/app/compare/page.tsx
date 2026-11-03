import FAQ from '@/components/global/faq'
import { CompareCard } from '@/components/page-components/compare/comparison-page'
import {
  competitors,
  type Competitor,
} from '@/components/page-components/compare/data'
import BookCall from '@/components/page-components/service-landing/book-call'
import {
  ArrowRightIcon,
  ChartBarIcon,
  CodeBracketIcon,
  MegaphoneIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import Link from 'next/link'

const description =
  'See how Draft.dev compares to other DevTool content and marketing agencies. Facts come from each company’s own site, with the date we checked.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Compare DevTool Content and Marketing Agencies - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/compare',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Compare DevTool Content and Marketing Agencies - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Compare Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare DevTool Content and Marketing Agencies - Draft.dev',
    description,
    images: ['/draft/og/main_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/compare' },
  robots: { index: true, follow: true },
}

// What to check before choosing any agency, including us
const guide = [
  {
    title: 'Who checks the technical details',
    text: 'Developers spot mistakes fast. Ask who tests the code and checks the facts before anything is published.',
    Icon: CodeBracketIcon,
  },
  {
    title: 'How AI visibility is measured',
    text: 'Ask which AI tools they track, how often they measure, and what they report back to you.',
    Icon: ChartBarIcon,
  },
  {
    title: 'What happens after publishing',
    text: 'Content on your blog is only the start. Ask which channels they run to get it in front of developers.',
    Icon: MegaphoneIcon,
  },
  {
    title: 'How fast you can start',
    text: 'Ask when the first pieces arrive and what your team needs to do before then.',
    Icon: RocketLaunchIcon,
  },
]

const heroStats = [
  { value: '300+', label: 'Engineers and subject matter experts' },
  { value: '100+', label: 'Tech companies served' },
  { value: '7,000+', label: 'Developers in our distribution network' },
]

// Our existing comparisons by type of provider
const byApproach = [
  { title: 'Draft.dev vs Freelancers', href: '/draft-dev-vs-freelancers' },
  { title: 'Draft.dev vs SEO Agencies', href: '/draft-dev-vs-seo-agency' },
  {
    title: 'Draft.dev vs AI Generated Content',
    href: '/draft-dev-vs-ai-gen-content',
  },
]

const isDevtool = (c: Competitor) =>
  c.category === 'DevTool content and marketing agencies'

export default function Compare() {
  // Direct competitors first; general agencies in a smaller section below
  const devtool = competitors.filter(isDevtool)
  const others = competitors.filter((c) => !isDevtool(c))

  return (
    <div>
      <div className="bg-gradient-brand relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16 lg:px-8">
          <div>
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-amber-300 uppercase ring-1 ring-white/20">
              Compare
            </p>
            <h1 className="font-code sm:header-light mt-6 max-w-4xl text-4xl leading-tight font-semibold text-white">
              How Draft.dev Compares
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
              Our DevTool content and marketing services, compared side by side
              with the agencies developer tool companies weigh us against. Every
              fact comes from each company&apos;s own site, with the date we
              checked.
            </p>
          </div>
          {/* The facts every comparison starts from */}
          <dl className="divide-y divide-white/15 rounded-3xl bg-white/10 px-6 shadow-2xl ring-1 ring-white/20 sm:px-8">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse justify-end gap-y-1 py-5"
              >
                <dt className="text-base text-gray-200">{stat.label}</dt>
                <dd className="font-code text-4xl font-semibold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <main>
        {/* Direct competitors */}
        <section className="bg-[#f4f1f8] py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
              DevTool Content &amp; Marketing Agencies
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
              The agencies that specialize in developer tools, like we do
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {devtool.map((c) => (
                <CompareCard key={c.slug} competitor={c} />
              ))}
            </div>
          </div>
        </section>

        {/* Buyer's guide */}
        <section className="bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
              What to Check Before You Choose
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
              Four questions to ask any agency, including us
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {guide.map(({ title, text, Icon }) => (
                <div
                  key={title}
                  className="rounded-3xl bg-[#f4f1f8] p-7 ring-1 ring-[#5e5285]/10"
                >
                  <span className="bg-gradient-brand flex size-11 items-center justify-center rounded-xl text-white shadow-md">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="font-code text-secondary mt-5 text-lg font-semibold">
                    {title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General agencies buyers also look at, when there are any */}
        {others.length > 0 && (
          <section className="bg-[#f4f1f8] py-12 sm:py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
                Other Agencies Buyers Compare Us With
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
                General B2B content, SEO and growth agencies
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {others.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/compare/${c.slug}`}
                    className="group flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-[#5e5285]/10 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span>
                      <span className="font-code text-secondary block text-xs font-semibold">
                        Draft.dev vs
                      </span>
                      <span className="font-code text-lg font-semibold text-gray-900">
                        {c.name}
                      </span>
                    </span>
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="text-secondary size-5 shrink-0 transition group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Comparisons by type of provider */}
        <section className="bg-gradient-brand py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="lg:subheader-light subheader-mobile-light text-center">
              Compare by Approach
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {byApproach.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between rounded-3xl bg-white/10 p-7 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <span className="font-code text-lg font-semibold text-white">
                    {item.title}
                  </span>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="size-5 text-amber-300 transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FAQ
        className="pt-14 pb-8"
        callHref="#book-a-call"
        title="Common Questions We Get Asked"
        headingClassName="subheader-mobile-gradient sm:subheader-gradient"
        masonry
        standardFaqs={false}
        pageFaqs={[
          {
            question: 'How do I choose a DevTool content and marketing agency?',
            answer:
              'Check who reviews the technical details, how AI visibility is measured, which channels the agency runs beyond your blog, and how fast it can start. The comparisons on this page cover each of these, company by company.',
          },
          {
            question: 'Where do the facts on these pages come from?',
            answer:
              "From each company's own website, with the date we checked. If a company doesn't say something, the table shows a dash instead of a guess.",
          },
          {
            question: 'Is Draft.dev only a content agency?',
            answer:
              'No. We started with technical content and now run DevTool marketing too: SEO, AEO, paid search, sponsorships, Reddit, influencer distribution and demand generation.',
          },
          {
            question: 'Does Draft.dev measure AI visibility?',
            answer:
              'Yes. We run a baseline before work starts, then track AI citations every month across ChatGPT, Claude, Perplexity and Google AI Overviews and send you a report.',
          },
          {
            question: 'How much does Draft.dev cost?',
            answer:
              'Plans start at $9K a month. Contracts run for 3 months, then month to month.',
          },
          {
            question: 'How fast can we start?',
            answer: 'First pieces arrive about 3 weeks after kickoff.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
