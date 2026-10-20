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

import CaseStudyPage from '../../../components/media/case-studies/case-study-template'

import HowWeHelpedGpuCloud from '@/components/media/case-studies/how-we-helped-gpu-cloud'
import MiniCaseGpuCloud from '@/components/media/case-studies/mini-case-gpu-cloud'

export default function CaseStudyGpuCloudPlatform() {
  const stats = [
    { value: '10x', label: 'AI traffic vs. refreshed legacy pages' },
    { value: '3 of 3', label: 'Major LLMs citing a single article' },
    {
      value: '29',
      label: 'Pieces published in under 5 months',
    },
  ]

  const highlights = [
    {
      name: 'Challenges',
      description: [
        'Developers compare four or five providers before signing up',
        'Strong older pages had gone stale and earned few AI citations',
        'Competitors owned the comparison and alternatives searches',
      ],
    },
    {
      name: 'Solution',
      description: [
        'A roadmap mapped to every stage of the funnel',
        'Guides, tutorials and comparisons reviewed by engineers',
        'Every piece structured so LLMs can quote it',
      ],
    },
    {
      name: 'Results',
      description: [
        'Live content library grew 40% in a single month',
        'One new comparison article drove 34.2% of all organic traffic',
        'New content beat older pages that had more authority',
      ],
    },
  ]

  const relatedCaseStudies = [
    {
      name: 'Em Blitstein',
      role: 'Senior Content Marketing Manager',
      imageUrl: '/media/testimonials-lg/em_sinch_mailgun.jpg',
      company: 'Sinch Mailgun',
    },
    {
      name: 'Rahul Patwardhan',
      role: 'Senior Director, Demand Generation',
      imageUrl:
        '/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg',
      company: 'Loft Labs',
    },
    {
      name: 'Adam Gordon Bell',
      role: 'Director of Developer Relations',
      imageUrl: '/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg',
      company: 'Earthly',
    },
  ]

  const ctas = [
    { label: 'Book a Discovery Call', href: '/call' },
    { label: 'See how we work', href: '/#how-we-work' },
  ]

  return (
    <CaseStudyPage
      title={
        "How a GPU Cloud Platform's New Content Earned 10x the AI Traffic of Its Legacy Pages"
      }
      heroLayout="split"
      summary="We helped a GPU cloud platform publish 29 articles, guides and refreshes in under five months. Its new content was cited by all three major LLMs and beat refreshed legacy pages."
      titleHighlights={['GPU Cloud Platform', '10x']}
      stats={stats}
      highlights={highlights}
      miniCaseSlot={<MiniCaseGpuCloud />}
      afterHighlightsSlot={<HowWeHelpedGpuCloud />}
      relatedCaseStudies={relatedCaseStudies}
      ctas={ctas}
      statsCols={3}
    />
  )
}
