import ServiceHeader from '@/components/global/headers/service-header'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import What from '@/components/page-components/what'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Refreshes - Draft.dev',
  description:
    'Revitalize aging content with data-driven, technical refreshes. We help you identify, update, and optimize existing technical content to recapture lost traffic, improve conversions, and maintain credibility.',
  keywords: 'technical content refresh, content SEO, ai content refresh',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/content-refreshes',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Refreshes - Draft.dev',
    description:
      'Revitalize aging content with data-driven, technical refreshes. We help you identify, update, and optimize existing technical content to recapture lost traffic, improve conversions, and maintain credibility.',
    images: [
      {
        url: '/draft/og/services/content_refresh_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Refreshes.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Refreshes - Draft.dev',
    description:
      'Revitalize aging content with data-driven, technical refreshes. We help you identify, update, and optimize existing technical content to recapture lost traffic, improve conversions, and maintain credibility.',
    images: ['/draft/og/services/content_refresh_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/content-refreshes' },
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

export default function ContentRefreshes() {
  return (
    <>
      <ServiceHeader
        title="Technical Content Refreshes by Draft.dev"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="Bring your aging technical content up-to-date to drive search and LLM traffic, fast! Let us help you analyze, update, and optimize your existing technical content for maximum ROI."
      />

      <What
        title="Why Refresh Your Technical Content?"
        subtitleBold="By updating existing articles that already have backlinks and domain authority"
        subtitleRegular="you can recapture lost rankings in weeks instead of months."
        features={[
          {
            title: 'Deprecation',
            description:
              'Your best-performing content from 2-3 years ago is likely underperforming today. Version numbers change, search algorithms evolve, competitors publish newer content, and technical details become outdated. Content decay is real.',
          },
          {
            title: 'Content Decay',
            description:
              'Content decay affects nearly 60% of blog posts within 12-24 months of publication, with most experiencing gradual ranking and traffic decline without updates.',
          },
          {
            title: 'Performance',
            description:
              'Content refresh strategies consistently outperform new content creation. Case studies demonstrate traffic increases of 200-500% for refreshed content while requiring 60-80% less investment than new content creation.',
          },
        ]}
        imageSrc="/site/med-portrait/content_refresh.jpg"
        imageAlt="Technical content refresh"
      />
      <Testimonial
        quote="Draft.dev has helped us create high-quality content that resonates with our audience on a regular basis. They have helped us double our audience, attract more trial users, and increase our trial conversion rate."
        name="Henry Poydar"
        role="Founder & CEO"
        company="Status Hero"
        imageSrc="/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg"
        imageAlt="Henry Poydar"
      />

      <TestimonialsGroup />

      {/* <FAQ /> */}
    </>
  )
}
