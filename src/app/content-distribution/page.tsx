import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header-content-distribution'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import What from '@/components/page-components/content-distribution/what'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Distribution - Draft.dev',
  description:
    'We turn your technical content into an awareness and lead generation machine through strategic promotion, syndication, and targeted placements in developer newsletters, communities, and highly relevant channels.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/content-distribution',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Distribution - Draft.dev',
    description:
      'We turn your technical content into an awareness and lead generation machine through strategic promotion, syndication, and targeted placements in developer newsletters, communities, and highly relevant channels.',
    images: [
      {
        url: '/draft/og/content_distribution_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Marketing for Marketing Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Distribution - Draft.dev',
    description:
      'We turn your technical content into an awareness and lead generation machine through strategic promotion, syndication, and targeted placements in developer newsletters, communities, and highly relevant channels.',
    images: ['/draft/og/content_distribution_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/content-distribution' },
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

export default function ForMarketers() {
  return (
    <div>
      <ServiceHeader
        title="Content Distribution for Developer Tools & Platforms"
        description="We turn your technical content into an awareness and lead generation machine through strategic promotion, syndication, and targeted placements in developer newsletters, communities, and highly relevant channels."
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'Learn about our content promotion strategy',
          href: '/learn/orchestrate-content-promotion-waves',
        }}
      />
      <main>
        <Why
          title="Content Promotion That Gains Reach & Drives Qualified Traffic"
          subtitle="We've built relationships with developer newsletters, niche sites, and dozens of community platforms to help you get your content in front of the right audiences."
          subtitleBold=""
          features={[
            {
              title: 'Organic Social Promotion',
              description:
                'We create LinkedIn posts, tweets, and social media content variations that resonate with technical audiences. We help you build reach on Reddit, LinkedIn, Twitter/X, and other platforms where developers actively engage. Our approach focuses on authenticity and value, avoiding the marketing speak that developers immediately tune out.',
              linkText: 'See our Content Promotion Checklist',
              linkHref: '/learn/promotion',
            },
            {
              title: 'Content Syndication on Third-Party Platforms',
              description:
                'We republish variations of your existing content on platforms like Dev.to, HackerNoon, Hashnode, DZone, and Medium to reach new audiences. Content syndication allows you to tap into established developer communities of millions while building your reputation across the technical ecosystem.',
              linkText: 'Learn more about content syndication',
              linkHref: '/learn/syndicating-developer-content',
            },
            {
              title: 'Sponsorships in Tech Publications',
              description:
                'We leverage partnerships with developer newsletters and niche publications that your target audience actually reads. From CooperPress, to TLDR and Changelog to specialized technical newsletters, we place your content where developers actively seek information. We handle sponsorship booking, content optimization, and campaign management for maximum impact.',
              linkText: 'See a list of the best tech newsletters',
              linkHref: '/learn/the-ultimate-list-of-developer-newsletters',
            },
          ]}
        />
        <div className="bg-gradient-brand">
          <SocialProof />
        </div>
        <What />
        <Testimonial
          quote="Draft.dev has helped us create high-quality content that resonates with our audience on a regular basis. They have helped us double our audience, attract more trial users, and increase our trial conversion rate."
          name="Henry Poydar"
          role="Founder & CEO"
          company="Status Hero"
          imageSrc="/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg"
          imageAlt="Henry Poydar"
        />
        <MedCaseEarthly />
        <LogosDark />
        <TestimonialsGroup />
        <Testimonial
          quote="Anyone tasked with marketing to developers knows that they are a community that can smell B.S. from a mile away. Having a dedicated technical resource available is a great support for creating content that both matters to our users and is also useful and accurate."
          name="Em Blitstein"
          role="Senior Content Marketing Manager"
          company="Sinch Mailgun"
          imageSrc="/media/testimonials-lg/em_sinch_mailgun.jpg"
          imageAlt="Em Blitstein"
        />
      </main>
      <FAQ />
    </div>
  )
}
