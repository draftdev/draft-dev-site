import FAQ from '@/components/global/faq'
import CaseStudyEarthly from '@/components/media/case-studies/case-study-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
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

export default function EarthlyCaseStudy() {
  return (
    <>
      <CaseStudyEarthly />
      <SocialProof />
      <TestimonialsGroup />
      <LogosDark />
      <FAQ />
    </>
  )
}
