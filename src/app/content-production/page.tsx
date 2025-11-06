import ContentProductionList from '@/components/global/content-production-list'
import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header-content-production'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import What from '@/components/page-components/content-production/what'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Production - Draft.dev',
  description:
    'Get technical content that drives results. Our engineer-writers deliver tutorials, guides, and thought leadership that reach developers at every stage. 3000+ pieces published.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/content-production',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Production - Draft.dev',
    description:
      'Get technical content that drives results. Our engineer-writers deliver tutorials, guides, and thought leadership that reach developers at every stage. 3000+ pieces published.',
    images: [
      {
        url: '/draft/og/content_production_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Content Marketing for Marketing Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Production - Draft.dev',
    description:
      'Get technical content that drives results. Our engineer-writers deliver tutorials, guides, and thought leadership that reach developers at every stage. 3000+ pieces published.',
    images: ['/draft/og/content_production_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/content-production' },
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
        title="Content Production for Developer Tools & Platforms"
        description="We build technical content growth engines driving results. Based on SEO and AEO research, tailored to your needs and designed to reach developers at every stage of their journey."
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See what types of content we produce',
          href: '#what-we-create',
        }}
      />
      <main>
        <Why
          title="A Complete Technical Content Solution"
          subtitle="We produce everything you need to reach, engage, and convert developer audiences"
          subtitleBold=""
          features={[
            {
              title: 'High quality technical content, delivered fast',
              description:
                'Proven AI workflows and our teams of writers, video producers, and subject matter experts ensure that every piece is technically accurate, meets quality standards, and has a consistent style. Combined, these pieces make up a content growth engine that compounds. We share progress in roadmap documents and adjust content output based on your goals.',
              linkText: 'How we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'The right content mix for every stage',
              description:
                'Effective developer marketing strategies combine multiple content types to address different stages of the developer journey. Tutorials and guides build awareness and trust, while comparisons and persuasive pieces drive consideration and decisions. We create the optimal mix of content to engage your audience at every stage and get you visibilty on search engines and LLMs.',
              linkText: 'See what we can create for you',
              linkHref: '#what-we-create',
            },
            {
              title: 'Content you can count on',
              description:
                "Never worry about whether you'll have new content ready again. Marketing to developers can be tricky, but one of the best ways to build trust with them is to consistently provide value across many different channels. When you work with us, you get ready-to-publish content delivered every week. From landing pages, to blog posts, to lead magnets, to videos, to pieces we can syndicate.",
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
          ]}
        />
        <div className="bg-gradient-brand">
          <ContentProductionList />
          <SocialProof />
        </div>
        <What />
        <Testimonial
          quote="Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials. We’re constantly iterating to build the best educational materials for developer security and Draft.dev has been instrumental in helping us."
          name="Randall Degges"
          role="Head of Developer & Security Relations"
          company="snyk"
          imageSrc="/media/testimonials-lg/randall_degges_snyk_draft_dev.jpg"
          imageAlt="Randall Degges"
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
