import CaseStudyLoftLabs from '@/components/media/case-studies/case-study-loft'
import { LogosDark } from '@/components/media/logos-dark'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Loft Labs Case Study - Draft.dev',
  description:
    'Learn how Loft Labs scaled its Kubernetes blog by 4x and achieved top SEO rankings with Draft.dev',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/case-studies/loft-labs',
  },
}

export default function CaseStudy() {
  return (
    <>
      <CaseStudyLoftLabs />
      <LogosDark />
      <TestimonialsGroup />
    </>
  )
}
