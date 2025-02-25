import ServiceHeader from '@/components/global/headers/service-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import What from '@/components/page-components/what'

import VideoCard from '@/components/page-components/video-tutorials/video-card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Learn more about how we can help you create tech-video-tutorials designed to reach software developers, and see some examples.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function VideoTutorials() {
  return (
    <>
      <ServiceHeader
        title="Video Tutorials by Draft.dev"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'Video Tutorial Examples',
          href: '#examples',
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
    </>
  )
}
