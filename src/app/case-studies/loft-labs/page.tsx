import FAQ from '@/components/global/faq'
import CaseStudyLoftLabs from '@/components/media/case-studies/case-study-loft'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
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

export default function LoftCaseStudy() {
  return (
    <>
      <CaseStudyLoftLabs />
      <SocialProof />
      <TestimonialsGroup />
      <LogosDark />
      <FAQ />
    </>
  )
}
