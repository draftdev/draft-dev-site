import FAQ from '@/components/global/faq'
import CaseStudyMain from '@/components/media/case-studies/case-study-main'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Draft.dev',
  description:
    'Learn why clients like Supabase, Jetbrains, Loft Labs, Redpanda, and others choose us.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/case-studies',
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
