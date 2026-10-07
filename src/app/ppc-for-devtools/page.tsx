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
  'We run paid search ads for technical products. We target people who are already searching for tools like yours, send them to landing pages written by vetted engineers, and track cost per signup, not just cost per click.'

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
          subtitle="We spend your budget on people who are already looking, not on interrupting engineers"
          subtitleBold=""
          features={[
            {
              title: 'Ads for people already looking',
              description:
                'After your kickoff call, our engineers use your product. We review your current ad accounts. Then we build campaigns around searches from people who are already looking: your brand name, competitor names, comparisons, and integration or migration searches. These show that someone is actively choosing a tool.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Landing pages written by engineers',
              description:
                "A paid click is wasted if the page doesn't earn a developer's trust. So one of our 300+ vetted engineer-writers writes your landing page, with real setup steps, honest comparisons and code where it helps. We also build different versions to test which one works best.",
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Retargeting your docs readers',
              description:
                'People already reading your documentation are your best audience. We show them ads that match the pages they read, and we limit how often they see them so it never gets annoying. Every month you see cost per lead, cost per signup, and which campaigns bring in real pipeline, not just clicks.',
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
            question: 'Do paid search ads really work on developers?',
            answer:
              "On the right searches, yes. Developers use ad blockers 3x more than average and ignore display ads. But buyers search for comparisons and alternatives, and engineers who get stuck in your docs respond well to retargeting. Paid ads work best when people are already looking. They don't work well for creating interest from scratch.",
          },
          {
            question: 'What budget do we need to start?',
            answer:
              "Enough to learn which of your most important searches work. That depends on your market and competition. We'll give you a number on the discovery call, based on your market, not a standard package.",
          },
          {
            question: 'Do you build the landing pages?',
            answer:
              'Yes. The same vetted engineer-writers who create your technical content write them, and we build different versions to test which one works best.',
          },
        ]}
      />
    </div>
  )
}
