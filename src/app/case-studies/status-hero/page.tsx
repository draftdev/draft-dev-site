import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Status Hero Case Study - Draft.dev',
  description:
    "Learn how Status Hero achieved remarkable results with Draft.dev's technical content marketing services and expert-driven content strategy.",
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/case-studies/status-hero',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Status Hero Case Study - Draft.dev',
    description:
      "Learn how Status Hero achieved remarkable results with Draft.dev's technical content marketing services and expert-driven content strategy.",
    images: [
      {
        url: '/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Status Hero Case Study - Draft.dev Success Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Status Hero Case Study - Draft.dev',
    description:
      "Learn how Status Hero achieved remarkable results with Draft.dev's technical content marketing services and expert-driven content strategy.",
    images: ['/draft/og/main_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/case-studies/status-hero' },
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

import MiniCaseStatusHero from '@/components/media/case-studies/mini-case-status-hero'

export default function CaseStudyStatusHero() {
  const stats = [
    { label: 'Increase in blog traffic', value: '211%' },
    { label: 'Growth in Medium audience', value: '50x' },
    { label: 'Hours saved per week', value: '40' },
  ]

  const highlights = [
    {
      name: 'Challenges',
      description: [
        'Increasing trial users and conversion rate',
        'Creating valuable content for a technical audience',
        'Improving presence in Google search results',
        'Building a regular content pipeline',
      ],
    },
    {
      name: 'Solution',
      description: [
        'Content strategy and planning',
        'Keyword research',
        'Industry-insider writers',
        'Collaborative editing process',
      ],
    },
    {
      name: 'Results',
      description: [
        '211% increase in blog visitors',
        '50x growth in Medium audience',
        '40 hours saved per week',
        'High SEO rankings',
        'Growth in trial users and conversion rate',
        'Consistent content pipeline',
      ],
    },
  ]

  const relatedCaseStudies = [
    {
      name: 'Rahul Patwardhan',
      role: 'Senior Director, Demand Generation',
      imageUrl:
        '/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg',
      company: 'Loft Labs',
    },
    {
      name: 'Em Blitstein',
      role: 'Senior Content Marketing Manager',
      imageUrl: '/media/testimonials-lg/em_sinch_mailgun.jpg',
      company: 'Sinch Mailgun',
    },
    {
      name: 'Adam Gordon Bell',
      role: 'Director of Developer Relations',
      imageUrl: '/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg',
      company: 'Earthly',
    },
  ]

  return (
    <CaseStudyPage
      title={
        'How Status Hero grew blog traffic by 211% and increased its trial conversion rate with Draft.dev'
      }
      titleHighlights={['Status Hero', '211%']}
      stats={stats}
      highlights={highlights}
      miniCaseSlot={<MiniCaseStatusHero />}
      relatedCaseStudies={relatedCaseStudies}
      statsCols={3}
    />
  )
}
