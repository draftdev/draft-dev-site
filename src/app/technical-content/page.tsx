import {
  Heading,
  Page,
} from '@/components/page-components/mega-guide/doc-blocks'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Marketing in the Age of AI - Draft.dev',
  description:
    'A practical, opinionated playbook for building a predictable technical content engine that still wins in an AI-first search landscape.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/technical-content',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Marketing in the Age of AI - Draft.dev',
    description:
      'A practical, opinionated playbook for building a predictable technical content engine that still wins in an AI-first search landscape.',
    images: [
      {
        url: '/draft/og/mega-guide/technical_content_og_draftdev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Marketing — Guide overview.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Marketing in the Age of AI - Draft.dev',
    description:
      'A practical, opinionated playbook for building a predictable technical content engine that still wins in an AI-first search landscape.',
    images: ['/draft/og/mega-guide/technical_content_og_draftdev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/technical-content',
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

export default function GuideOverviewPage() {
  return (
    <Page
      title="Technical Content Marketing"
      lead="This guide shows you how to build a reliable, data-driven content engine for technical audiences—optimized for both classic SEO and AI-overview ecosystems."
    >
      <p className="text-base">
        Search, discovery, and trust have changed. AI overviews and chat answers
        intercept a growing share of informational queries, while developers
        expect credible, implementation-ready resources. This guide gives you a
        pragmatic framework to plan, produce, and promote technical content that
        still drives measurable outcomes: traffic, leads, and influence in AI
        surfaces.
      </p>

      <Heading id="what-youll-learn">What you’ll learn</Heading>
      <ul className="list-disc space-y-2">
        <li>
          How to set up a lightweight, high-performance stack (Next.js +
          headless CMS) with analytics that matter.
        </li>
        <li>
          How to plan a calendar, balance evergreen vs. spiky content, and map
          pieces to funnel stages.
        </li>
        <li>
          How to create AI-friendly, developer-grade resources (clusters,
          schema, examples) without fluff.
        </li>
        <li>
          How to launch gated assets that actually convert technical audiences.
        </li>
        <li>
          How to distribute across newsletters, syndication, and social—then
          compound results via retargeting.
        </li>
      </ul>

      <Heading id="who-its-for">Who it’s for</Heading>
      <ul className="list-disc space-y-2">
        <li>
          Technical marketers and content leads at devtool, infra, data, and B2B
          SaaS companies.
        </li>
        <li>
          Founders and early GTM teams who need predictable inbound without a
          big paid budget.
        </li>
        <li>
          Developer relations teams looking to connect content, community, and
          product outcomes.
        </li>
      </ul>

      <Heading id="how-to-use-this-guide">How to use this guide</Heading>
      <ol className="list-decimal space-y-2">
        <li>
          <strong>Lay the foundation.</strong> Stand up your CMS, analytics, and
          retargeting so every post contributes signal. Start here:&nbsp;
          <Link
            className="underline"
            href="/technical-content/technical-content-marketing"
          >
            Setting Up Your Engine →
          </Link>
        </li>
        <li>
          <strong>Plan & produce.</strong> Build a calendar, publish consistent
          evergreen pieces, and layer in spiky content to refresh audiences.
        </li>
        <li>
          <strong>Distribute.</strong> Syndicate smartly, use newsletter
          sponsorships when ROI pencils out, and run social playbooks fit to
          each channel.
        </li>
        <li>
          <strong>Measure & iterate.</strong> Track traffic, engagement, AI
          citation influence, and funnel progress. Refresh top performers on a
          cadence.
        </li>
      </ol>

      <Heading id="chapters-at-a-glance">Chapters at a glance</Heading>

      {/* Foundations & Setup */}
      <section className="mt-3">
        <h3 className="font-semibold text-gray-900">Foundations &amp; Setup</h3>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              href: '/technical-content/introduction-to-content-marketing',
              title:
                'An Introduction to Technical Content Marketing in the AI Era',
            },
            {
              href: '/technical-content/technical-content-marketing',
              title: 'Setting Up Your Technical Content Marketing Engine',
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-lg border border-gray-200 p-4 transition hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-medium text-gray-900 group-hover:underline">
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Planning & Production */}
      <section className="mt-6">
        <h3 className="font-semibold text-gray-900">
          Planning &amp; Production
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              href: '/technical-content/content-calendar',
              title: 'Content Calendar Creation and Management',
            },
            {
              href: '/technical-content/content-funnel',
              title: 'Understanding the Content Funnel',
            },
            {
              href: '/technical-content/evergreen-content-strategy',
              title: 'Evergreen Content Strategy to Drive Consistent Traffic',
            },
            {
              href: '/technical-content/viral-content',
              title: 'Creating Viral Content',
            },
            {
              href: '/technical-content/gated-content',
              title: 'Gated Content That Converts',
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-lg border border-gray-200 p-4 transition hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-medium text-gray-900 group-hover:underline">
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Distribution */}
      <section className="mt-6">
        <h3 className="font-semibold text-gray-900">Distribution</h3>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              href: '/technical-content/content-syndication',
              title: 'Content Syndication and Newsletter Sponsorships',
            },
            {
              href: '/technical-content/social-media-marketing-plan-template',
              title: 'Social Media Marketing Plan and Template',
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-lg border border-gray-200 p-4 transition hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-medium text-gray-900 group-hover:underline">
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Start here */}
      <section className="mt-6">
        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900">Start here</h3>
          <p className="mt-2 text-sm text-gray-600">
            If you only have time for one thing today, set up the foundation so
            every post ladders up to measurable impact.
          </p>
          <p className="mt-3">
            <Link
              href="/technical-content/technical-content-marketing"
              className="underline"
            >
              Get started →
            </Link>
          </p>
        </div>
      </section>
    </Page>
  )
}
