import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Earthly Case Study - Draft.dev Success Stories',
  description:
    'Learn how Earthly increased its monthly blog visitors by 346% and ramped up its content production with Draft.dev',
  keywords: 'draft.dev case studies, earthly case study',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/case-studies/earthly',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Earthly Case Study - Draft.dev Success Stories',
    description:
      'Learn how Earthly increased its monthly blog visitors by 346% and ramped up its content production with Draft.dev',
    images: [
      {
        url: '/draft/og/case_studies_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Case Study for Earthly',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earthly Case Study - Draft.dev Success Stories',
    description:
      'Learn how Earthly increased its monthly blog visitors by 346% and ramped up its content production with Draft.dev',
    images: ['/draft/og/case_studies_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/case-studies/earthly' },
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

import MiniCaseEarthly from '@/components/media/case-studies/mini-case-earthly'
import CaseStudyPage from '../../../components/media/case-studies/case-study-template'

export default function CaseStudyEarthly() {
  const stats = [
    { label: 'Blog visitors per workday', value: '1,500' },
    { label: 'Increase in monthly readers', value: '346%' },
    { label: 'Blog conversion rate', value: '6%' },
  ]

  const highlights = [
    {
      name: 'Challenges',
      description: [
        'Creating high-quality and valuable technical content',
        'Ramping up content production for technical blog',
        'Lacking SEO knowledge',
      ],
    },
    {
      name: 'Solution',
      description: [
        'Consistent content providing excellent results',
        'SEO and keyword research',
        'Subject matter expert writers',
        'Professional and ready-to-publish content',
        'Supportive and helpful customer support',
      ],
    },
    {
      name: 'Results',
      description: [
        '346% increase in monthly blog visitors',
        '1500 visitors per workday',
        '6% conversion rate on blog content',
        'Ranking in the top 3 for some keywords',
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
  ]

  return (
    <CaseStudyPage
      title={
        'How Earthly Increased Its Monthly Blog Visitors by 346% and ramped up its content production with Draft.dev'
      }
      titleHighlights={['Earthly', '346%']}
      stats={stats}
      highlights={highlights}
      miniCaseSlot={<MiniCaseEarthly />}
      relatedCaseStudies={relatedCaseStudies}
      // no CTAs shown in your original
      statsCols={3}
    />
  )
}
