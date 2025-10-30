import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import What from '@/components/page-components/content-strategy-services/what'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Content Strategy Services - Draft.dev',
  description:
    'From industry analysis, competitor research, SEO/GEO opportunities, brand assessment & marketing funnel review. Get your custom developer marketing strategy.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/dev-content-strategy',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Content Strategy Services - Draft.dev',
    description:
      'From industry analysis, competitor research, SEO/GEO opportunities, brand assessment & marketing funnel review. Get your custom developer marketing strategy.',
    images: [
      {
        url: '/draft/og/content_strategy_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Content Strategies by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Strategy Services - Draft.dev',
    description:
      'From industry analysis, competitor research, SEO/GEO opportunities, brand assessment & marketing funnel review. Get your custom developer marketing strategy.',
    images: ['/draft/og/content_strategy_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/dev-content-strategy' },
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
        title="Content Strategy Services for Developer Tools & Platforms"
        description="We combine deep technical expertise with product research and proven SEO and AI optimization methodologies to create content strategies that put your solution in front of the right developers at the right time."
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See how we publish within weeks',
          href: './#how-we-work',
        }}
      />
      <main>
        <Why
          title="A Developer Marketing Strategy That Works"
          subtitle="Built on experience and comprehensive analysis, not guesswork"
          subtitleBold=""
          features={[
            {
              title: 'From analysis to actionable strategy',
              description:
                'After your kickoff call, our engineers use your product, we analyze your competitors, audit your site for gaps and opportunities, conduct SEO/AEO visibility research, create a road map and execute on the exact pieces that developers, search engines, and LLMs use when seeking and presenting solutions.',
              linkText: 'How we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'A breadth of content types and pieces',
              description:
                'We provide you with thought leadership pieces, technical deep dives, comparison pages, ebooks, whitepapers, content refreshes, and social media posts, and align content production with your product releases, ensuring new features get the technical content they deserve.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Measuring what matters',
              description:
                "Vanity metrics don't pay the bills. We track what actually moves the needle. Our monthly strategy reviews go beyond spreadsheet reports. We provide actionable insights about what's resonating with your audience and adjust the roadmap based on real performance data.",
              linkText: 'See how we helped clients like you',
              linkHref: '/build-trust',
            },
          ]}
        />
        <div className="bg-gradient-brand">
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
