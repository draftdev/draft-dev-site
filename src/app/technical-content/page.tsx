import {
  Heading,
  Page,
} from '@/components/page-components/mega-guide/doc-blocks'
import { Guides } from '@/components/page-components/mega-guide/Guides'
import { Resources } from '@/components/page-components/mega-guide/Resources'
import type { Section } from '@/components/page-components/mega-guide/section-provider'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technical Content Marketing in the Age of AI',
  description:
    'A practical, opinionated playbook for building a predictable technical content engine that still wins in an AI-first search landscape.',
}

export const sections: Array<Section> = [
  { id: 'what-youll-learn', title: "What you'll learn", offsetRem: 6 },
  { id: 'who-its-for', title: "Who it's for", offsetRem: 8 },
  { id: 'how-to-use-this-guide', title: 'How to use this guide', offsetRem: 8 },
  { id: 'chapters-at-a-glance', title: 'Chapters at a glance', offsetRem: 8 },
]

export default function GuideOverviewPage() {
  return (
    <Page
      title="Technical Content Marketing in the Age of AI"
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
            href="/technical-content-marketing-in-the-age-of-ai/setting-up-your-technical-content-marketing-engine"
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
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900">Foundations & Setup</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              <Link
                className="underline"
                href="/technical-content-marketing-in-the-age-of-ai/setting-up-your-technical-content-marketing-engine"
              >
                Setting Up Your Technical Content Marketing Engine
              </Link>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900">Planning & Production</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              <Link
                className="underline"
                href="/technical-content-marketing-in-the-age-of-ai/creating-and-managing-content-calendars"
              >
                Creating & Managing Content Calendars
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                href="/technical-content-marketing-in-the-age-of-ai/creating-evergreen-content-that-drives-traffic"
              >
                Creating Evergreen Content That Drives Traffic
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                href="/technical-content-marketing-in-the-age-of-ai/creating-viral-spiky-content"
              >
                Creating Viral Spiky Content
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                href="/technical-content-marketing-in-the-age-of-ai/orchestrating-technical-content-through-the-funnel"
              >
                Orchestrating Technical Content Through the Funnel
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                href="/technical-content-marketing-in-the-age-of-ai/creating-gated-assets-that-convert"
              >
                Creating Gated Assets That Convert
              </Link>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900">Distribution</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              <Link
                className="underline"
                href="/technical-content-marketing-in-the-age-of-ai/newsletter-sponsorships-and-content-syndication"
              >
                Newsletter Sponsorships & Content Syndication
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                href="/technical-content-marketing-in-the-age-of-ai/technical-content-distribution-and-promotion-across-social-channels"
              >
                Social Distribution & Promotion Playbooks
              </Link>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900">Start here</h3>
          <p className="mt-2 text-sm text-gray-600">
            If you only have time for one thing today, set up the foundation so
            every post ladders up to measurable impact.
          </p>
          <p className="mt-3">
            <Link
              href="/technical-content-marketing-in-the-age-of-ai/setting-up-your-technical-content-marketing-engine"
              className="underline"
            >
              Get started →
            </Link>
          </p>
        </div>
      </div>

      <Guides />
      <Resources />
    </Page>
  )
}
