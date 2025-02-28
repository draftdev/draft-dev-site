import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseLoft from '@/components/media/case-studies/med-case-loft'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Why from '@/components/page-components/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inbound Lead Generation and Technical Copy Writing - Draft.dev',
  description:
    'Consistently convert organic traffic into high-quality MQLs and SQLs with our proven lead qualification system and our expert guidance.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function BuildTrust() {
  return (
    <>
      <ServiceHeader
        title="Inbound Lead Generation and Technical Copy Writing"
        description="We have implemented lead generation engines at tech companies driving 100s of millions in recurring revenue, predictably driving traffic and leads."
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See Our Lead Generation Package',
          href: './#lead-generation-package',
        }}
      />
      <Why
        title="Consistently turn organic traffic into MQLs and SQLs"
        subtitle="Maximize your lead generation ROI with the help of a dedicated content strategist and our analytical data-driven approach."
        subtitleBold=""
        features={[
          {
            title: 'Predictable Leads',
            description:
              'We help you establish and maintain a predictable lead generation engine based on ebooks, whitepapers, landing page copywriting and social media posts, that automatically works for you in the background.',
            linkText: 'See how we help Marketing Teams',
            linkHref: '/for-marketers',
          },
          {
            title: 'Lead Qualification',
            description:
              'With our proven lead qualification system and our expert guidance you will consistently convert organic traffic into high-quality Marketing Qualified Leads and Sales Qualified Leads your Sales organization can close.',
            linkText: 'Learn more about our Lead Generation Package',
            linkHref: './#lead-generation-package',
          },
          {
            title: 'Recurring check-ins',
            description:
              'Maximize your lead generation ROI with our analytical data-driven approach. Recurring check-ins with your our team ensures we adapt our content production plan according to the latest learnings.',
            linkText: 'Learn more about our team',
            linkHref: '/about',
          },
        ]}
      />
      <SocialProof />
      <MedCaseLoft />
      <LogosDark />
      <TestimonialsGroup />
    </>
  )
}
