import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseStatusHero from '@/components/media/case-studies/med-case-status-hero'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import How from '@/components/page-components/how'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Marketing for Developer Relations',
  description:
    'Empower DevRel teams with expert technical content that builds community, drives adoption, and showcases your technical expertise.',
  keywords:
    'developer relations content, devrel content marketing, developer community content, technical community building',
  openGraph: {
    title: 'Content Marketing for Developer Relations - Draft.dev',
    description:
      'Expert technical content that builds community and drives adoption.',
    url: 'https://draft.dev/for-dev-rels',
    images: [
      {
        url: 'https://draft.dev/draft/og/devrel_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Marketing for Developer Relations Teams',
      },
    ],
  },
  twitter: {
    title: 'Content for Developer Relations - Draft.dev',
    description: 'Build community and drive adoption with expert content.',
    images: ['https://draft.dev/draft/og/devrel_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/for-dev-rels',
  },
}

export default function ForDevRels(): JSX.Element {
  return (
    <div>
      <ServiceHeader
        title="Developer Marketing that Resonates"
        description="We support Developer Relations and Developer Advocate Teams by consistently delivering content that technical audiences truly care about and respect."
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
          title="We help DevRels scale their efforts"
          subtitle="We support Developer Relations and Developer Advocate Teams by
            consistently delivering content that technical audiences truly care
            about and respect."
          subtitleBold=""
          features={[
            {
              title: 'Drive Awareness',
              description:
                'With a track record of predictably creating demand, our content strategists help implement proven frameworks that drive traffic and inbound leads. We ensure our blog posts, eBooks and video tutorials are accurate, engaging, and resonate with your technical audience.',
              linkText: 'How we drive awareness',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Capture Leads',
              description:
                'Our subject matter experts evaluate your product and help build out your content roadmap, turning readers into leads, and leads into new customers. Recurring check-ins ensure we adapt our content production plan according to the latest learnings.',
              linkText: 'How we capture leads',
              linkHref: '/capture-leads',
            },
            {
              title: 'Build Trust',
              description:
                'Everything we deliver to you is written and reviewed by practicing technical professionals and edited by professional editors. Outsource the creation of technical content to us and build respect and engagement with software developers, DevOps, data engineers, and more.',
              linkText: 'How we build trust',
              linkHref: '/build-trust',
            },
          ]}
        />

        <div className="bg-gradient-brand">
          <SocialProof />
        </div>
        <How
          title="How to get started with Draft.dev"
          subtitleBold="Here's how we help you create content that resonates with developers."
          subtitleRegular=""
          steps={[
            {
              number: '1',
              title: 'Schedule A Discovery Call',
              description:
                "During this 30-minute consultation, we'll explore your organization's vision and content needs. Together, we'll determine if our expertise aligns with your objectives and discuss next steps.",
            },
            {
              number: '2',
              title: 'Create Your Content Plan',
              description:
                "We'll craft a tailored content roadmap based on your objectives, resources, and target audience. This blueprint ensures clear expectations and measurable outcomes for our collaboration.",
            },
            {
              number: '3',
              title: 'Ready-to-publish Technical Content',
              description:
                "After finalizing your strategy, our expert team begins creating high-quality technical content delivered every 1-2 weeks. Each piece undergoes thorough testing and editing, and we'll refine any content until it meets your standards.",
            },
          ]}
          imageSrc="/site/med-portrait/code_session_draft_dev.jpg"
          imageAlt="Technical content development"
        />

        <Testimonial
          quote="In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!"
          name="Robert Gibb"
          role="Content Marketing Manager"
          company="Fabric"
          imageSrc="/media/testimonials-lg/robert_gibb_fabric_draft_dev.jpg"
          imageAlt="Robert Gibb"
        />
        <MedCaseStatusHero />
        <LogosDark />
        <TestimonialsGroup />
        <Testimonial
          quote="Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials. We’re constantly iterating to build the best educational materials for developer security and Draft.dev has been instrumental in helping us."
          name="Randall Degges"
          role="Head of Developer & Security Relations"
          company="snyk"
          imageSrc="/media/testimonials-lg/randall_degges_snyk_draft_dev.jpg"
          imageAlt="Randall Degges"
        />
      </main>
      <FAQ />
    </div>
  )
}
