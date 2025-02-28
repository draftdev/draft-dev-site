import CaseStudyMain from '@/components/media/case-studies/case-study-main'
import { LogosDark } from '@/components/media/logos-dark'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Draft.dev',
  description:
    'Learn why clients like SupaBase, Earthly, Loft Labs, RedPanda, and others choose us.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CaseStudy() {
  return (
    <>
      <CaseStudyMain />
      <LogosDark />
      <TestimonialsGroup />
    </>
  )
}
