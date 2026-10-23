import type { Metadata } from 'next'

const description =
  'See how Draft.dev published 26 pieces for a developer API platform in under five months. More than half of the AI citations we tracked now point to them.'

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
      title="How a Developer API Platform Won 56% of Its AI Citations"
      summary="In under five months, we published 26 pieces. More than half of the AI citations we tracked now point to them."
      stats={[
        {
          value: '56%',
          label: 'Of tracked AI citations point to our articles',
        },
        {
          value: '50',
          label: 'AI citations in one month, across 13 questions',
        },
        { value: '26', label: 'Pieces published in under 5 months' },
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
        'AI citations grew by 22% from the first week to the last',
        'The articles drew 1,382 readers in a single month',
        'One rewritten page won back its AI citations',
      ]}
      afterStorySlot={
        <HowWeDidIt
          subtitle="Six workstreams, from question research to weekly tracking."
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
              text: 'Turned 3 older pages into short, direct answers.',
            },
            {
              title: 'AI agent content',
              text: 'Guides on connecting AI agents to the APIs, plus tutorials for 3 workflow tools.',
            },
            {
              title: 'Promotion and tracking',
              text: '3 months of paid promotion, with weekly AI citation tracking.',
            },
          ]}
        />
      }
    />
  )
}
