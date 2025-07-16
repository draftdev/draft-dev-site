import CaseStudyStatusHero from '@/components/media/case-studies/case-study-status-hero'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Status Hero Case Study - Draft.dev',
  description:
    "Learn how Status Hero achieved remarkable results with Draft.dev's technical content marketing services and expert-driven content strategy.",
  keywords:
    'status hero case study, draft.dev success story, technical content marketing results, developer marketing case study',
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

export default function StatusHeroCaseStudy() {
  return (
    <>
      <CaseStudyStatusHero />
      <SocialProof />
      <LogosDark />
      <TestimonialsGroup />
      <LogosDark />
    </>
  )
}
