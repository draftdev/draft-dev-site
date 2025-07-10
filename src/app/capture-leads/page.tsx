import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseLoft from '@/components/media/case-studies/med-case-loft'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Why from '@/components/page-components/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inbound Lead Generation and Technical Copy Writing',
  description:
    "Discover how Draft.dev's strategic technical content helps tech companies capture qualified leads from developers and technical decision makers.",
  keywords:
    'capture leads developers, technical lead generation, developer marketing leads, technical content conversion',
  openGraph: {
    title: 'Inbound Lead Generation and Technical Copy Writing - Draft.dev',
    description:
      'Capture qualified leads from developers with strategic technical content.',
    url: 'https://draft.dev/capture-leads',
    images: [
      {
        url: 'https://draft.dev/draft/og/capture_leads_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Capture Leads with Technical Content Marketing',
      },
    ],
  },
  twitter: {
    title: 'Capture Developer Leads - Draft.dev',
    description: 'Strategic technical content that captures qualified leads.',
    images: ['https://draft.dev/draft/og/capture_leads_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/capture-leads',
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
      <Testimonial
        quote="Draft.dev has helped us create high-quality content that resonates with our audience on a regular basis. They have helped us double our audience, attract more trial users, and increase our trial conversion rate."
        name="Henry Poydar"
        role="Founder & CEO"
        company="Status Hero"
        imageSrc="/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg"
        imageAlt="Henry Poydar"
      />
      <FAQ />
    </>
  )
}
