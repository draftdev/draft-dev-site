import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseStatusHero from '@/components/media/case-studies/med-case-status-hero'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Why from '@/components/page-components/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Build Trust with Technical Audiences - Draft.dev',
  description:
    'Learn how Draft.dev helps tech companies build trust with developers through authentic, expert-driven technical content that resonates with technical audiences.',
  keywords:
    'build trust with developers, technical content credibility, developer relations trust, authentic technical content',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/build-trust',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Build Trust with Technical Audiences - Draft.dev',
    description:
      'Learn how Draft.dev helps tech companies build trust with developers through authentic, expert-driven technical content that resonates with technical audiences.',
    images: [
      {
        url: '/draft/og/build_trust_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Build Trust with Technical Audiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Trust with Technical Audiences - Draft.dev',
    description:
      'Learn how Draft.dev helps tech companies build trust with developers through authentic, expert-driven technical content that resonates with technical audiences.',
    images: ['/draft/og/build_trust_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/build-trust' },
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

export default function BuildTrust() {
  return (
    <>
      <ServiceHeader
        title="Our Technical Content Writers are Practicing Professionals"
        description="From articles about your industry, to product tutorials, to B2B Thought Leadership pieces - our writing and editing teams of professional developers have you covered."
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
        title="Written by Developers, for Developers"
        subtitle="Build credibility and trust with your technical audiences through a consistent stream of high-quality content, tailored specifically to their needs and interests."
        subtitleBold=""
        features={[
          {
            title: 'Technical Writing that Convinces',
            description:
              'Everything we produce is written by subject matter experts, technically reviewed and professionally edited by our in-house team, delivered to you in a ready-to-publish format along with social posts and SEO meta descriptions.',
            linkText: 'See how we help Marketing Teams',
            linkHref: '/for-marketers',
          },
          {
            title: 'Thought Leadership Content',
            description:
              'We provide you with written and video material that allows for a consistent output of high-quality content. The topics we work on are defined by experienced developers and are guaranteed to resonate with your readers',
            linkText: 'See how we help Developer Relations Teams',
            linkHref: '/for-dev-rels',
          },
          {
            title: 'Build Respect with Your Technical Audience',
            description:
              'Our internal subject matter experts evaluate your product and will take care of writing, reviewing, and editing content pieces, be it blog posts, ebooks, or white papers about your industry or your product specifically.',
            linkText: 'Learn more about our team and writers',
            linkHref: '/about',
          },
        ]}
      />
      <SocialProof />
      <MedCaseStatusHero />
      <LogosDark />
      <TestimonialsGroup />
      <FAQ />
    </>
  )
}
