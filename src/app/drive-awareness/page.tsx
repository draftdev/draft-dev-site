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
  title: 'Custom Content Marketing that Drives Awareness',
  description:
    'We establish Inbound Lead Generation Engines for our clients by consistently creating content that technical audiences truly care about and respect.',
  keywords:
    'drive awareness, technical content marketing, developer marketing, inbound lead generation, content strategy',
  openGraph: {
    title: 'Custom Content Marketing that Drives Awareness - Draft.dev',
    description:
      'Establish Inbound Lead Generation Engines with content technical audiences care about.',
    url: 'https://draft.dev/drive-awareness',
    images: [
      {
        url: 'https://draft.dev/draft/og/awareness_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Drive Awareness with Technical Content Marketing',
      },
    ],
  },
  twitter: {
    title: 'Drive Awareness with Technical Content - Draft.dev',
    description:
      'Create content that technical audiences truly care about and respect.',
    images: ['https://draft.dev/draft/og/awareness_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/drive-awareness',
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
      <Testimonial
        quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
        name="Rich Burroughs"
        role="Developer Advocate"
        company="Loft Labs"
        imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
        imageAlt="Rich Burroughs"
      />
      <FAQ />
    </>
  )
}
