import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Loft Labs Case Study - Draft.dev',
  description:
    "Discover how Loft Labs leveraged Draft.dev's technical content expertise to drive awareness and build authority in the developer community.",
  keywords:
    'loft labs case study, draft.dev client success, kubernetes content marketing, developer relations success',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/case-studies/loft-labs',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Loft Labs Case Study - Draft.dev',
    description:
      "Discover how Loft Labs leveraged Draft.dev's technical content expertise to drive awareness and build authority in the developer community.",
    images: [
      {
        url: '/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Loft Labs Case Study - Draft.dev Success Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loft Labs Case Study - Draft.dev',
    description:
      "Discover how Loft Labs leveraged Draft.dev's technical content expertise to drive awareness and build authority in the developer community.",
    images: ['/draft/og/main_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/case-studies/loft-labs' },
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

import MiniCaseLoft from '@/components/media/case-studies/mini-case-loft'
import CaseStudyPage from '../../../components/media/case-studies/case-study-template'

export default function CaseStudyLoftLabs() {
  const stats = [
    { label: 'Growth in blog traffic in one year', value: '4x' },
    { label: 'Visitors for an article since publishing', value: '70,000+' },
    { label: 'Ranking in search results', value: '#1' },
  ]

  const highlights = [
    {
      name: 'Challenges',
      description: [
        'Lack of internal resources for content creation',
        'Need for Kubernetes expertise in content',
        'Desire to increase top-of-funnel traffic and SEO rankings',
      ],
    },
    {
      name: 'Solution',
      description: [
        'Consistent, high-quality content with Draft.dev',
        'Ample network of writers with Kubernetes experience',
        'Collaborative content creation process',
        'Professionally edited and ready-to-publish content',
        'Helpful customer support',
      ],
    },
    {
      name: 'Results',
      description: [
        'Over 4x traffic growth in one year',
        '70,000+ visitors for a top article since publishing',
        'Top #1-4 Google search rankings for target keywords',
        'Content attracting the target audience that converts',
      ],
    },
  ]

  const relatedCaseStudies = [
    {
      name: 'Henry Poydar',
      role: 'Founder & CEO',
      imageUrl: '/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg',
      company: 'Status Hero',
    },
    {
      name: 'Adam Gordon Bell',
      role: 'Director of Developer Relations',
      imageUrl: '/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg',
      company: 'Earthly',
    },
    {
      name: 'Em Blitstein',
      role: 'Senior Content Marketing Manager',
      imageUrl: '/media/testimonials-lg/em_sinch_mailgun.jpg',
      company: 'Sinch Mailgun',
    },
  ]

  return (
    <CaseStudyPage
      title={
        'How Loft Labs scaled its Kubernetes blog by 4x and achieved top SEO rankings with Draft.dev'
      }
      titleHighlights={['Loft Labs', '4x']}
      stats={stats}
      highlights={highlights}
      miniCaseSlot={<MiniCaseLoft />}
      relatedCaseStudies={relatedCaseStudies}
      statsCols={3}
    />
  )
}
