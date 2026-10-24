import type { Metadata } from 'next'

const description =
  'See how Draft.dev published 22 new articles for a business banking platform in under four months. Two were getting clicks from AI assistants within eight weeks, on a brand new blog.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Business Banking Platform Case Study - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/case-studies/business-banking-platform',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Business Banking Platform Case Study - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Business Banking Platform Case Study - Draft.dev Success Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Banking Platform Case Study - Draft.dev',
    description,
    images: ['/draft/og/main_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/case-studies/business-banking-platform',
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

export default function CaseStudyBusinessBankingPlatform() {
  return (
    <CaseStudyTemplate
      slug="business-banking-platform"
      company="Business banking platform"
      title="How a Business Banking Platform Got AI Citations in 8 Weeks"
      summary="We published 22 new articles in under four months. Two were getting clicks from AI assistants within eight weeks, on a brand new blog."
      stats={[
        {
          value: '8 weeks',
          label: 'To AI citations, with zero domain history',
        },
        { value: '2', label: 'Major AI assistants now naming the platform' },
        { value: '26', label: 'Pieces building a brand new category' },
      ]}
      details={[
        { label: 'Client', value: 'AI-native business banking platform' },
        { label: 'Industry', value: 'Fintech / B2B SaaS' },
        { label: 'Timeline', value: 'April 2026 – present (ongoing)' },
      ]}
      challenge={[
        'The blog was new, with no history behind it',
        'Almost nobody searched for the product category',
        'AI assistants left the platform out of their answers',
      ]}
      solution={[
        'Guides for the questions founders already ask',
        'Opinion pieces that make the case for the category',
        'Tutorials, comparisons and AI citation tracking',
      ]}
      results={[
        'Two major AI assistants sent clicks within eight weeks',
        'The blog drew 103 active users in a single month',
        'The comparison page started converting the month it went live',
      ]}
      afterStorySlot={
        <HowWeDidIt
          subtitle="Two tracks at once: the case for the category, and answers to what founders search today."
          steps={[
            {
              title: 'Category research',
              text: 'Mapped the questions founders ask and built a roadmap through August 2026.',
            },
            {
              title: 'Opinion pieces',
              text: 'Made the case that AI agents will open every business bank account.',
            },
            {
              title: 'Tutorials and safety',
              text: 'An account-opening tutorial, 2 safety guides and a video walkthrough.',
            },
            {
              title: 'Founder guides',
              text: 'Guides on LLC accounts, bookkeeping, payables, spend and treasury.',
            },
            {
              title: 'Comparisons and roundups',
              text: 'A head-to-head comparison, 2 roundups and an AI agent setup guide.',
            },
            {
              title: 'Syndication and tracking',
              text: 'Sharing top guides with outside publications and tracking AI citations.',
            },
          ]}
        />
      }
    />
  )
}
