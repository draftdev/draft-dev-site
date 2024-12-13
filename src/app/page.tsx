import BodyDetail from '@/components/body-detail'
import BodyDetailImage from '@/components/body-detail-image'
import BodyDetailList from '@/components/body-detail-list'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import CTA from '@/components/cta'
import { Gradient } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import Testimonials from '@/components/testimonials-group'
import type { Metadata } from 'next'
import type { FC } from 'react'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

const features1 = [
  {
    name: 'Expert Writers',
    description1:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    description2:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    href: '/learn-more',
  },
  {
    name: 'Consistent Content',
    description1:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    description2:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    href: '/content',
  },
  {
    name: 'Reliable Delivery',
    description1:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    description2:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    href: '/delivery',
  },
]

const features2 = [
  {
    name: 'Schedule A Discovery Call',
    description:
      "In this 30-minute introductory call, we'll learn about your company and marketing strategy. If Draft.dev is a good fit for your business, we can start the onboarding process.",
    href: '/learn-more',
  },
  {
    name: 'Create Your Content Plan',
    description:
      "Based on your budget, goals, and marketing strategy, we'll create your customized content plan. This helps you see exactly what you'll be getting and ensures that we meet your expectations.",
    href: '/content',
  },
  {
    name: 'Ready-to-publish Technical Content',
    description:
      "Once your content plan is approved and our team will get started, you'll receive tested and edited content that's ready to publish every 1-2 weeks. If our work ever falls short of your expectations, we'll work with you to revise it.",
    href: '/delivery',
  },
]

const includedFeatures = [
  'Private forum access',
  'SEO Keyword and topic ideation',
  'Screenshots, diagrams, and code samples',
  'Technical reviews',
  'Professional editing',
  'Social media collateral',
]

const addonFeatures = [
  'Technical ebooks',
  'Executive ghostwriting',
  'Video tutorials',
]

interface HeroProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText: string
  secondaryButtonHref: string
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}) => {
  return (
    <div className="relative">
      <Gradient>
        <Container className="relative">
          <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
            <h1 className="font-display text-white lg:leading-1 text-balance text-5xl/[0.9] font-medium tracking-tight md:text-7xl/[0.8]">
              {title}
            </h1>
            <p className="text-white mt-8 max-w-lg text-xl/7 font-medium sm:text-2xl/8">
              {subtitle}
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button
                variant="primary"
                href={primaryButtonHref}
                className="font-semibold"
              >
                {primaryButtonText}
              </Button>
              <Button variant="outline" href={secondaryButtonHref}>
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </Container>
      </Gradient>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero
        title="A Content Creation Agency for Technical Writing"
        subtitle="We help Marketers and DevRels attract a technical audience."
        primaryButtonText="See our Content Marketing Services"
        primaryButtonHref="#"
        secondaryButtonText="Technical Writing Examples"
        secondaryButtonHref="/pricing"
      />

      <main>
        <BodyDetail
          title="Why Choose Us?"
          subtitleTop="We bring industry experts right to your blog."
          subtitleBottom="Let us handle the complexity of technical content creation."
          features={features1}
          learnMoreText="Discover More"
        />
        <Gradient className="py-20">
          <Container>
            <LogoCloud />
          </Container>
        </Gradient>
        <BodyDetailImage
          title="How It Works"
          paragraph="You're just one call away from getting started."
          features={features2}
          mainImage={{
            src: 'https://tailwindui.com/plus/img/component-images/project-app-screenshot.png',
            alt: 'Product screenshot',
          }}
        />

        <BodyDetailList
          title="Ongoing Technical Content"
          subtitle="Build a steady stream of technical content that scales with your business."
          includedFeatures={includedFeatures}
          addonTitle="Add-on Services"
          addonFeatures={addonFeatures}
          requestPricingHref="#"
          requestPricingText="Request Pricing"
        />
      </main>
      <Testimonials />
      <CTA />
    </div>
  )
}
