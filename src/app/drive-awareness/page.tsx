import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseLoft from '@/components/media/case-studies/med-case-loft'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Why from '@/components/page-components/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'We establish Inbound Lead Generation Engines for our clients by consistently creating content that technical audiences truly care about and respect.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DriveAwareness() {
  return (
    <>
      <ServiceHeader
        title="Custom Content Marketing that Drives Traffic"
        description="We specialize in creating technical content that gets reach and drives business."
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
        title="Turn Technical Content into Growth"
        subtitle="With a track record of predictably creating demand, our content strategists help implement proven frameworks that drive traffic and inbound leads from technical audiences."
        subtitleBold=""
        features={[
          {
            title: 'Strategic Content in Every Format',
            description:
              'We drive awareness by providing blog posts, eBooks and video tutorials at a consistent cadence, freeing up your marketers and developers to focus on other priorities. We also suggest promotional strategies that place the content in front of your target audience.',
            linkText: 'See what content types we create for you',
            linkHref: '/content-types',
          },
          {
            title: 'For Marketers and DevRels',
            description:
              'Whether you are a Marketer that needs help with technical content or a DevRel that needs support on the strategic side, we create content that puts your product in a good light, helping drive developer engagement with your business and product.',
            linkText: 'How we build trust with technical audiences',
            linkHref: '/build-trust',
          },
          {
            title: 'Technical Content Marketing',
            description:
              'We help tech companies create successful content programs that drive awareness and leads. Our seasoned team of content strategists use proven frameworks to make sure your content delivers the highest ROI for your business.',
            linkText: 'How we predictably generate demand',
            linkHref: '/capture-leads',
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
