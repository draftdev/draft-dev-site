import FAQ from '@/components/global/faq'
import CaseStudyMain from '@/components/media/case-studies/case-study-main'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Case Studies - Draft.dev Success Stories',
  description:
    'Learn why clients like Supabase, Jetbrains, Loft Labs, Redpanda, and others choose Draft.dev for their technical content marketing needs.',
  keywords:
    'draft.dev case studies, technical content marketing results, developer relations success stories, client testimonials',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/case-studies',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Case Studies - Draft.dev Success Stories',
    description:
      'Learn why clients like Supabase, Jetbrains, Loft Labs, Redpanda, and others choose Draft.dev for their technical content marketing needs.',
    images: [
      {
        url: '/draft/og/case_studies_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Case Studies and Success Stories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies - Draft.dev Success Stories',
    description:
      'Learn why clients like Supabase, Jetbrains, Loft Labs, Redpanda, and others choose Draft.dev for their technical content marketing needs.',
    images: ['/draft/og/case_studies_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/case-studies' },
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
      <CaseStudyMain />
      <SocialProof />
      <TestimonialsGroup />
      <LogosDark />
      <FAQ />
    </>
  )
}
