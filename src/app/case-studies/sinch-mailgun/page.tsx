import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Sinch Mailgun Case Study - Draft.dev',
  description:
    "Discover how Sinch Mailgun revived its developer-first content strategy and achieved 20-45% CTR with Draft.dev's expert technical content services.",
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/case-studies/sinch-mailgun',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Sinch Mailgun Case Study - Draft.dev',
    description:
      "Discover how Sinch Mailgun revived its developer-first content strategy and achieved 20-45% CTR with Draft.dev's expert technical content services.",
    images: [
      {
        url: '/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Sinch Mailgun Case Study - Draft.dev Success Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sinch Mailgun Case Study - Draft.dev',
    description:
      "Discover how Sinch Mailgun revived its developer-first content strategy and achieved 20-45% CTR with Draft.dev's expert technical content services.",
    images: ['/draft/og/main_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/case-studies/sinch-mailgun' },
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

import MiniCaseMailgun from '@/components/media/case-studies/mini-case-mailgun'

export default function CaseStudySinchMailgun() {
  const stats = [
    { label: 'Achieved 20-45% CTR rates with Draft.dev' },
    { label: 'Quality developer content' },
    { label: 'Weeks of internal time saved' },
    { label: 'Expanded content initiatives' },
  ]

  const highlights = [
    {
      name: 'Challenges',
      description: [
        'Internal developer resources without bandwidth',
        'Time and resource-intensive content needs',
        'Technical product is difficult for non-developer writers',
        'Need for high volume and quality',
      ],
    },
    {
      name: 'Solution',
      description: [
        'Subject matter expert writers',
        'Professional and seamless processes',
        'Strategic suggestions and feedback',
        'Testing and tutorial content creation',
      ],
    },
    {
      name: 'Results',
      description: [
        '20-45% CTR for developer content',
        'Expanded internal programming',
        'More time to create thought leadership content',
        'Content used by support teams',
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
      name: 'Adam Gordon Bell',
      role: 'Director of Developer Relations',
      imageUrl: '/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg',
      company: 'Earthly',
    },
    {
      name: 'Henry Poydar',
      role: 'Founder & CEO',
      imageUrl: '/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg',
      company: 'Status Hero',
    },
  ]

  const ctas = [
    {
      label: 'Download the full case study',
      href: '/files/sinch_mailgun_case_study_draft_dev.pdf',
    },
    { label: 'See how we work', href: '/#how-we-work' },
  ]

  return (
    <CaseStudyPage
      title={
        'How Sinch Mailgun REVIVED ITS DEVELOPER-FIRST CONTENT STRATEGY AND ACHIEVED 20-45% CTR with Draft.dev'
      }
      titleHighlights={['Sinch Mailgun', '20-45%']}
      stats={stats}
      highlights={highlights}
      miniCaseSlot={<MiniCaseMailgun />}
      relatedCaseStudies={relatedCaseStudies}
      ctas={ctas}
      statsCols={4}
    />
  )
}
