import FAQ from '@/components/global/faq'
import CaseStudyLoftLabs from '@/components/media/case-studies/case-study-loft'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Draft.dev Success Stories',
  description:
    'Learn why clients like Supabase, Jetbrains, Loft Labs, Redpanda, and others choose Draft.dev for their technical content marketing needs.',
  keywords:
    'draft.dev case studies, technical content marketing results, developer relations success stories, client testimonials',
  openGraph: {
    title: 'Case Studies - Draft.dev Success Stories',
    description:
      'Learn why clients like Supabase, Jetbrains, Loft Labs, Redpanda, and others choose Draft.dev for their technical content marketing needs.',
    url: 'https://draft.dev/case-studies',
    images: [
      {
        url: 'https://draft.dev/draft/og/case_studies_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Case Studies and Success Stories',
      },
    ],
  },
  twitter: {
    title: 'Case Studies - Draft.dev Success Stories',
    description:
      'Learn why top tech companies choose Draft.dev for their technical content marketing.',
    images: ['https://draft.dev/draft/og/case_studies_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/case-studies',
  },
}

export default function CaseStudy() {
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
