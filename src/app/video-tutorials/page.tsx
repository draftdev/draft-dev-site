import ServiceHeader from '@/components/global/headers/service-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import What from '@/components/page-components/what'

import FAQ from '@/components/global/faq'
import Testimonial from '@/components/media/testimonials/testimonial'
import VideoCard from '@/components/page-components/video-tutorials/video-card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Video Tutorials',
  description:
    'Professional technical video content creation including tutorials, demos, and educational content designed to engage developer audiences.',
  keywords:
    'technical video content, developer video tutorials, technical demos, video marketing for developers',
  openGraph: {
    title: 'Technical Video Tutorials - Draft.dev',
    description:
      'Professional video content designed to engage developer audiences.',
    url: 'https://draft.dev/video-tutorials',
    images: [
      {
        url: 'https://draft.dev/draft/og/video_tutorials_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Video Tutorials and Content',
      },
    ],
  },
  twitter: {
    title: 'Technical Video Tutorials - Draft.dev',
    description: 'Engage developers with professional video content.',
    images: ['https://draft.dev/draft/og/video_tutorials_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/video-tutorials',
  },
}
export default function VideoTutorials() {
  return (
    <>
      <ServiceHeader
        title="Technical Video Tutorials by Draft.dev"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="We create high-quality video tutorials for a technical audience."
      />

      <What
        title="Why choose Draft.dev for your video tutorials?"
        subtitleBold="Stop begging your engineers to record videos."
        subtitleRegular="Let us help."
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
