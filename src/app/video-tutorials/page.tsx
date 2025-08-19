import ServiceHeader from '@/components/global/headers/service-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import What from '@/components/page-components/what'

import FAQ from '@/components/global/faq'
import Testimonial from '@/components/media/testimonials/testimonial'
import VideoCard from '@/components/page-components/video-tutorials/video-card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Video Tutorials - Draft.dev',
  description:
    'Transform complex technical features into engaging video tutorials. We create product-focused videos that drive developer adoption, reduce support tickets, and accelerate sales cycles.',
  keywords:
    'technical video content, developer video tutorials, technical demos, video marketing for developers',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/video-tutorials',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Video Tutorials - Draft.dev',
    description:
      'Transform complex technical features into engaging video tutorials. We create product-focused videos that drive developer adoption, reduce support tickets, and accelerate sales cycles.',
    images: [
      {
        url: '/draft/og/video_tutorials_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Video Tutorials and Content',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Video Tutorials - Draft.dev',
    description:
      'PTransform complex technical features into engaging video tutorials. We create product-focused videos that drive developer adoption, reduce support tickets, and accelerate sales cycles.',
    images: ['/draft/og/video_tutorials_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/video-tutorials' },
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

export default function VideoTutorials() {
  return (
    <>
      <ServiceHeader
        title="Video Product Tutorials by Draft.dev"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="Our product-focused videos bridge the gap between features and value, showing developers exactly how your solution solves their problems. Each video is crafted to reduce friction, answer objections, and accelerate time-to-value."
      />

      <What
        title="Quality Video Tutorials for a Technical Audience"
        subtitleBold="Turn your product's technical features into compelling video content"
        subtitleRegular="that drives developer adoption and reduces friction in the buyer's journey."
        features={[
          {
            title: 'Subject Matter Experts',
            description:
              'Unlike other content marketing agencies, we specialize in technical content aimed at professionals in the software industry. We accomplish this by partnering with professional software developers and subject matter experts around the world to cover a wide variety of topics and technologies.',
          },
          {
            title: 'Consistent Quality and Style',
            description:
              "If you've worked with freelancers before, you know the quality can vary. Our video producers and technical specialists ensure that every video is technically accurate, meets our quality standards, and has a consistent style.",
          },
          {
            title: 'Content You Can Count On',
            description:
              "Never worry about whether you'll have a new video ready for your channel again. When you work with Draft.dev, you'll get ready-to-publish video tutorials every 2 weeks after the initial onboarding period.",
          },
        ]}
        imageSrc="/site/med-portrait/video_tutorials_draft_dev.jpg"
        imageAlt="Technical content development"
      />
      <VideoCard
        title="Technical Videos Done Right"
        includedFeatures={[
          'Engaging video walkthroughs for practical guidance',
          'Flexible length of up to 30 minutes',
          'Comprehensive descriptions with links to all resources',
          'Video graphics and captions tailored to your needs',
          'Custom post-production work and editing',
          'Social media micro-clips for maximum reach',
        ]}
        youtubeVideoId="ovdGxS183W0"
        requestPricingHref="/call"
        requestPricingText="Request Pricing"
      />
      <TestimonialsGroup />
      <Testimonial
        quote="Anyone tasked with marketing to developers knows that they are a community that can smell B.S. from a mile away. Having a dedicated technical resource available is a great support for creating content that both matters to our users and is also useful and accurate."
        name="Em Blitstein"
        role="Senior Content Marketing Manager"
        company="Sinch Mailgun"
        imageSrc="/media/testimonials-lg/em_sinch_mailgun.jpg"
        imageAlt="Em Blitstein"
      />
      <FAQ />
    </>
  )
}
