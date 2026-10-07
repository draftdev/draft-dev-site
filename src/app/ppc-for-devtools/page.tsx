import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header-content-strategy'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Partner from '@/components/page-components/ppc-services/partner'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

const description =
  'We run paid search for technical products. Campaigns built around high-intent searches, landing pages written by vetted engineer-writers, and reporting that tracks cost per signup, not cost per click.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'PPC for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/ppc-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'PPC for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/capture_leads_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'PPC by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPC for Developer Tools & Platforms - Draft.dev',
    description,
    images: ['/draft/og/capture_leads_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/ppc-for-devtools',
  },
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

export default function PPCServices() {
  return (
    <div>
      <ServiceHeader
        title="PPC for Developer Tools & Platforms"
        description={description}
        leadMagnet={{
          badge: 'Free eBook',
          text: 'How to Set Up a Content Marketing Engine in the Age of AI',
          href: '/content-marketing-engine',
        }}
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See how we turn content into pipeline',
          href: '/capture-leads',
        }}
      />
      <main>
        <div className="bg-gradient-brand">
          <SocialProof showHeading={false} />
        </div>
        <Why
          title="Paid Search That Reaches Buyers, Not Ad Blockers"
          subtitle="Budget spent where intent is already high, not on interrupting engineers"
          subtitleBold=""
          features={[
            {
              title: 'Campaigns built around intent',
              description:
                'After your kickoff call, our engineers use your product. We audit your existing ad accounts, then build campaigns around the searches where buyers are already looking: your brand name, competitor names, category and comparison terms, and the integration and migration searches that signal an active evaluation.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Landing pages written by engineers',
              description:
                'A paid click is wasted on a page a developer does not trust. One of our 300+ vetted engineer-writers writes your landing page, with real configuration, honest comparisons and code where it helps, and we build variations to test against each other. The same subject matter experts who write your technical content write the page the ad points to.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Retargeting and reporting',
              description:
                'Your highest-intent audience is the people already reading your documentation. We group them by the pages they visited and match the ad to what they were trying to do, with frequency caps so it never becomes noise. Monthly reporting covers cost per lead, cost per signup, and which campaigns produce pipeline, not just clicks.',
              linkText: 'See our approach to content distribution',
              linkHref: '/content-distribution',
            },
          ]}
        />
        <div className="bg-gradient-brand">
          <SocialProof />
        </div>
        <Partner />
        <Testimonial
          quote="Having previously worked with draft.dev, I reached out to them within weeks of starting to help us accelerate our content creation. Our first pieces were published within weeks and ranked within the first month. What impressed me the most was that as traffic grew, I was expecting a slight drop in conversion rates from visitors to signups, surprisingly it stayed consistent at 10-15%. Helping us not only hit our goals but exceed them."
          name="Dawn Parzych"
          role="Head of Marketing"
          company="Shorebird"
          imageSrc="/media/testimonials-lg/dawn_parzych_shorebird_draft_dev.jpeg"
          imageAlt="Dawn Parzych"
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
      <FAQ
        pageFaqs={[
          {
            question: 'Does paid search actually work on developers?',
            answer:
              'On the right searches, yes. Developers use ad blockers at 3x the average rate and ignore display ads. But the people approving the purchase search for comparisons and alternatives, and engineers who hit a wall in your docs respond well to retargeting. Paid captures demand that already exists. It is a poor way to create it.',
          },
          {
            question: 'What budget do we need to start?',
            answer:
              'Enough to gather signal on your highest-intent searches, which varies by category and competition. We will give you a number on the discovery call based on your market, not a standard package.',
          },
          {
            question: 'Do you build the landing pages?',
            answer:
              'Yes. They are written by the same vetted engineer-writers who create your technical content, with variations built to test against each other.',
          },
        ]}
      />
    </div>
  )
}
