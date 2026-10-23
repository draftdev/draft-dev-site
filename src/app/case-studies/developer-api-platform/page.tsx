import type { Metadata } from 'next'

const description =
  'See how Draft.dev built a developer API platform a full content library in under five months, from plain explainers to working tutorials. More than half the AI citations we tracked now point at our articles.'

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
      summary="In under five months, we built a full content library, from plain explainers to working tutorials. More than half the AI citations we tracked now point at our articles."
      stats={[
        { value: '56%', label: 'Of AI citations traced to our articles' },
        { value: '50', label: 'AI citations across 13 questions in a month' },
        { value: '26', label: 'Pieces published in under 5 months' },
      ]}
      details={[
        { label: 'Client', value: 'Developer API platform' },
        { label: 'Industry', value: 'Developer tools / B2B SaaS' },
        { label: 'Timeline', value: 'March 2026 – present (ongoing)' },
      ]}
      challenge={[
        'The docs explained how to use the product, not why to choose it',
        'Developers looking for APIs found competitors first',
        'Nobody knew whether AI assistants named the platform or a rival',
      ]}
      solution={[
        'Research into the questions developers ask AI assistants',
        'A content ladder from plain explainers to working code',
        'Paid promotion so the content had readers before it ranked',
      ]}
      results={[
        'AI citations grew by 22% from the first week to the last',
        'The live library drew 1,382 readers in a single month',
        'One rewritten page returned to AI citations after going quiet',
      ]}
      afterStorySlot={
        <HowWeDidIt
          subtitle="Six workstreams, from question research to weekly tracking."
          steps={[
            {
              title: 'Question research',
              text: 'Listed the questions developers ask AI assistants and found where competitors were named instead.',
            },
            {
              title: 'Plain explainers',
              text: 'Guides on document generation, file conversion and workflow automation, each easy for AI to quote.',
            },
            {
              title: 'Quickstart tutorials',
              text: 'A tutorial behind every guide, from a blank template to working output in minutes.',
            },
            {
              title: 'Page rewrites',
              text: 'Rewrote three older pages into short, direct answers to win citations back.',
            },
            {
              title: 'AI agent content',
              text: 'Guides on connecting AI agents to the APIs, plus tutorials for three workflow tools.',
            },
            {
              title: 'Promotion and tracking',
              text: 'Three months of paid promotion in developer newsletters and communities, with weekly citation tracking.',
            },
          ]}
        />
      }
    />
  )
}
