import FAQ from '@/components/global/faq'
import CaseStudySinchMailgun from '@/components/media/case-studies/case-study-mailgun'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Sinch Mailgun Case Study - Draft.dev',
  description:
    "Discover how Sinch Mailgun revived its developer-first content strategy and achieved 20-45% CTR with Draft.dev's expert technical content services.",
  keywords:
    'sinch mailgun case study, draft.dev client success, developer relations success',
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

export default function CaseStudy() {
  return (
    <>
      <CaseStudySinchMailgun />
      <SocialProof />
      <TestimonialsGroup />
      <LogosDark />
      <FAQ />
    </>
  )
}
