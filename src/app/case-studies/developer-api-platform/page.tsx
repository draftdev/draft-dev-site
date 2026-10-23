import type { Metadata } from 'next'

const description =
  'See how Draft.dev published 23 new articles and refreshed 3 for a developer API platform in seven months. Our articles now earn 72% of the AI citations to the site and bring in 9 of every 10 blog views.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Developer API Platform Case Study - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/case-studies/developer-api-platform',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Developer API Platform Case Study - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer API Platform Case Study - Draft.dev Success Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer API Platform Case Study - Draft.dev',
    description,
    images: ['/draft/og/main_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/case-studies/developer-api-platform',
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

import CaseStudyTemplate from '@/components/media/case-studies/case-study-template-v2'
import HowWeDidIt from '@/components/media/case-studies/how-we-did-it'

export default function CaseStudyDeveloperApiPlatform() {
  return (
    <CaseStudyTemplate
      slug="developer-api-platform"
      company="Developer API platform"
      title="How a Developer API Platform Won 72% of Its AI Citations"
      summary="In seven months, we published 23 new articles and refreshed 3 older ones. Our articles now earn 72% of the AI citations to the site and bring in 9 of every 10 blog views."
      stats={[
        {
          value: '72%',
          label: "Of the site's AI citations come from our articles",
        },
        {
          value: '10x',
          label: 'Blog views in seven months, from 138 to 1,418',
        },
        { value: '17 of 22', label: "Our articles on Google's first page" },
      ]}
      details={[
        { label: 'Client', value: 'Developer API platform' },
        { label: 'Industry', value: 'Developer tools / B2B SaaS' },
        { label: 'Timeline', value: 'March 2026 – present (ongoing)' },
      ]}
      challenge={[
        'The docs explained how to use the product, not why to pick it',
        'Competitors showed up first when developers searched',
        'No one tracked what AI assistants said about the brand',
      ]}
      solution={[
        'Research into what developers ask AI assistants',
        'Simple guides first, then working tutorials',
        'Paid promotion to bring in early readers',
      ]}
      results={[
        'The share of AI answers citing the brand rose 3.5x, from 1.5% to 5.2%',
        'Unpaid views of our articles grew 4x, from 122 to 508 a month',
        "Our articles earn 91% of the blog's Google impressions",
      ]}
      afterStorySlot={
        <HowWeDidIt
          subtitle="Six workstreams, from question research to AI citation tracking."
          steps={[
            {
              title: 'Question research',
              text: 'Listed what developers ask AI assistants and where competitors were named.',
            },
            {
              title: 'Plain explainers',
              text: 'Simple guides on document generation, file conversion and automation.',
            },
            {
              title: 'Quickstart tutorials',
              text: 'A tutorial for each guide, from a blank template to working output.',
            },
            {
              title: 'Page rewrites',
              text: 'Refreshed 3 older articles into short, direct answers.',
            },
            {
              title: 'AI agent content',
              text: 'Guides on connecting AI agents to the APIs, plus tutorials for 3 workflow tools.',
            },
            {
              title: 'Promotion and tracking',
              text: 'Paid newsletter placements since May, with AI citation tracking across ChatGPT, Claude, Perplexity and Google AI Overviews.',
            },
          ]}
        />
      }
    />
  )
}
