import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import How from '@/components/page-components/how'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Content for Marketers',
  description:
    'We help marketing teams in tech companies create authentic technical content that resonates with developers and drives business results.',
  keywords:
    'technical content for marketers, developer marketing, marketing to developers, technical marketing strategy',
  openGraph: {
    title: 'Technical Content for Marketers - Draft.dev',
    description:
      'Create authentic technical content that resonates with developers.',
    url: 'https://draft.dev/for-marketers',
    images: [
      {
        url: 'https://draft.dev/draft/og/marketers_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Marketing for Marketing Teams',
      },
    ],
  },
  twitter: {
    title: 'Technical Content for Marketers - Draft.dev',
    description: 'Authentic technical content that drives business results.',
    images: ['https://draft.dev/draft/og/marketers_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/for-marketers',
  },
}

export default function ForMarketers(): JSX.Element {
  return (
    <div>
      <ServiceHeader
        title="Technical Marketing that Converts"
        description="We specialize in content marketing for tech companies and
                  create lead generation engines based on blog posts, eBooks,
                  and video tutorials for Marketers looking to attract a
                  technical audience."
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See Our Lead Generation Package',
          href: './#lead-generation-package',
        }}
      />
      <main>
        <Why
          title="We support Marketing Teams with technical content"
          subtitle="Here's how we help you create content that resonates with developers."
          subtitleBold=""
          features={[
            {
              title: 'Drive Awareness',
              description:
                'We drive traffic with a consistent cadence of content, freeing up your marketers and developers to focus on other priorities. Benefit from a dedicated content strategist who uses proven frameworks to make sure your content program delivers the highest ROI for your business.',
              linkText: 'How we drive awareness',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Capture Leads',
              description:
                'Our teams provide you with ebooks, whitepapers, landing page copywriting, and social media posts, delivering a predictable lead generation engine that converts organic traffic automatically into high-quality MQLs and SQLs.',
              linkText: 'How we capture leads',
              linkHref: '/capture-leads',
            },
            {
              title: 'Build Trust',
              description:
                'We deliver high-quality tech content that is written and reviewed by experienced developers and edited by professional editors. Build credibility with your technical audiences through a consistent stream of quality content tailored specifically to their needs and interests.',
              linkText: 'How we build trust',
              linkHref: '/build-trust',
            },
          ]}
        />
        <div className="bg-gradient-brand">
          <SocialProof />
        </div>
        <How
          title="How to get started"
          subtitleBold="Here's how we help you create content that resonates with developers."
          subtitleRegular=""
          steps={[
            {
              number: '1',
              title: 'Schedule A Discovery Call',
              description:
                "In this 30-minute introductory call, we'll learn about your company and marketing strategy. If Draft.dev is a good fit for your business, we can start the onboarding process.",
            },
            {
              number: '2',
              title: 'Create Your Content Plan',
              description:
                "Based on your budget, goals, and marketing strategy, we'll create your customized content plan. This helps you see exactly what you'll be getting and ensures that we meet your expectations.",
            },
            {
              number: '3',
              title: 'Ready-to-publish Technical Content',
              description:
                "Once your content plan is approved and our team will get started, you'll receive tested and edited content that's ready to publish every 1-2 weeks. If our work ever falls short of your expectations, we'll work with you to revise it.",
            },
          ]}
          imageSrc="/site/med-portrait/sales_draft_dev.jpg"
          imageAlt="Technical content development"
        />
        <Testimonial
          quote="Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials. We’re constantly iterating to build the best educational materials for developer security and Draft.dev has been instrumental in helping us."
          name="Randall Degges"
          role="Head of Developer & Security Relations"
          company="snyk"
          imageSrc="/media/testimonials-lg/randall_degges_snyk_draft_dev.jpg"
          imageAlt="Randall Degges"
        />
        <MedCaseEarthly />
        <LogosDark />
        <TestimonialsGroup />
        <Testimonial
          quote="In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!"
          name="Robert Gibb"
          role="Content Marketing Manager"
          company="fabric"
          imageSrc="/media/testimonials-lg/robert_gibb_fabric_draft_dev.jpg"
          imageAlt="Robert Gibb"
        />
      </main>
      <FAQ />
    </div>
  )
}
