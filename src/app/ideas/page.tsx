import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/fifty-ideas.tsx/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "50 Winning Ideas For Your Startup's Blog - Draft.dev",
  description:
    "Kickstart your startup's content marketing efforts. Enter your email to get it now!",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/ideas',
  },
}

export default function Ideas() {
  return (
    <>
      <ServiceInfo />
      <SocialProof />
      <TestimonialsGroup />
      <LogosDark />
    </>
  )
}
