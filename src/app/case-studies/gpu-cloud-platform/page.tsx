import type { Metadata } from 'next'

const description =
  'See how Draft.dev helped a GPU cloud platform publish 29 articles, guides and refreshes in under five months, earning citations from all three major LLMs and 10x the AI traffic of its refreshed legacy pages.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'GPU Cloud Platform Case Study - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/case-studies/gpu-cloud-platform',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'GPU Cloud Platform Case Study - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'GPU Cloud Platform Case Study - Draft.dev Success Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPU Cloud Platform Case Study - Draft.dev',
    description,
    images: ['/draft/og/main_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/case-studies/gpu-cloud-platform',
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
import HowWeHelpedGpuCloud from '@/components/media/case-studies/how-we-helped-gpu-cloud'

export default function CaseStudyGpuCloudPlatform() {
  return (
    <CaseStudyTemplate
      slug="gpu-cloud-platform"
      company="GPU cloud platform"
      title="How a GPU Cloud Platform's New Content Earned 10x the AI Traffic of Its Legacy Pages"
      summary="29 pieces in under five months. The new content was cited by all three major LLMs and outperformed older, stronger pages."
      stats={[
        { value: '10x', label: 'AI traffic vs. refreshed legacy pages' },
        { value: '3 of 3', label: 'Major LLMs citing a single article' },
        { value: '29', label: 'Pieces published in under 5 months' },
      ]}
      details={[
        { label: 'Client', value: 'GPU cloud infrastructure platform (AI/ML)' },
        { label: 'Industry', value: 'AI infrastructure / GPU cloud' },
        { label: 'Timeline', value: 'February 2026 – present (ongoing)' },
      ]}
      challenge={[
        'Buyers compare four or five providers',
        'Older pages had gone stale',
        'Competitors owned comparison searches',
      ]}
      solution={[
        'A roadmap for every funnel stage',
        'Guides and comparisons reviewed by engineers',
        'Content structured for LLMs to quote',
      ]}
      results={[
        'Content library grew 40% in one month',
        'One comparison drove 34.2% of organic traffic',
        'New pages beat older, stronger ones',
      ]}
      ctas={[
        { label: 'Book a Discovery Call', href: '/call' },
        { label: 'See how we work', href: '/#how-we-work' },
      ]}
      afterStorySlot={<HowWeHelpedGpuCloud />}
    />
  )
}
