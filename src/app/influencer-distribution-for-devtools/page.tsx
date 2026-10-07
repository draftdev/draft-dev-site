import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header-content-strategy'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Partner from '@/components/page-components/influencer-distribution/partner'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

const description =
  "We get your technical content in front of developers through creators they already trust. We pick creators based on what they've built, not follower count. Our engineers write the briefs, and we track what each partnership actually brings in."

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title:
    'Influencer Distribution for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/influencer-distribution-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title:
      'Influencer Distribution for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/distributing_content_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Influencer Distribution by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Influencer Distribution for Developer Tools & Platforms - Draft.dev',
    description,
    images: ['/draft/og/distributing_content_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/influencer-distribution-for-devtools',
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

export default function InfluencerDistribution() {
  return (
    <div>
      <ServiceHeader
        title="Influencer Distribution for Developer Tools & Platforms"
        description={description}
        leadMagnet={{
          badge: 'Free Guide',
          text: 'Distributing Content on Social Media and Generating Leads from Gated Assets',
          href: '/distributing-content-on-social-media',
        }}
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See our full approach to content distribution',
          href: '/content-distribution',
        }}
      />
      <main>
        <div className="bg-gradient-brand">
          <SocialProof showHeading={false} />
        </div>
        <Why
          title="Reach Developers Through Creators They Already Trust"
          subtitle="We pick creators for technical credibility, not follower count, and measure results by signups, not views"
          subtitleBold=""
          features={[
            {
              title: 'Picking the right creators',
              description:
                "After your kickoff call, our engineers use your product. Then we list creators whose audience matches your buyers. We check what each one has actually built, how they respond when corrected in comments, how much sponsored content they already do, and whether their audience really engages. A creator with 1,000 engaged developers can be worth more than a big tech channel with 100,000 passive viewers.",
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Briefs written by subject matter experts',
              description:
                "Developers can tell when a creator is reading marketing copy, which is why good creators refuse scripts. Instead, one of our 300+ vetted engineer-writers writes a brief: what your product does, what's hard about the problem it solves, and what not to claim. The creator explains it in their own words. We handle the negotiation, sponsorship disclosure and scheduling.",
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Tracking what each partnership brings in',
              description:
                "Views are easy to count but don't tell you much. Every partnership gets its own landing page and tracked links. We also watch searches for your brand name and signups around each post. Monthly reports show the cost per signup for each creator, so your next budget goes to what worked.",
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
          quote="Draft.dev has helped us create high-quality content that resonates with our audience on a regular basis. They have helped us double our audience, attract more trial users, and increase our trial conversion rate."
          name="Henry Poydar"
          role="Founder & CEO"
          company="Status Hero"
          imageSrc="/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg"
          imageAlt="Henry Poydar"
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
            question: 'How do you choose creators?',
            answer:
              "First, we look for creators whose audience matches your buyers. Then we check their technical credibility: what they've actually built, how they respond when corrected, how much sponsored content they already do, and whether their audience really engages. Follower count is the last thing we look at.",
          },
          {
            question: 'Do we approve creators before anything goes live?',
            answer:
              "Yes. You approve the list of creators and the brief before we contact anyone. Where the creator's agreement allows it, you also see the content before it goes live.",
          },
          {
            question:
              'How do you track results if someone watches a video and signs up later?',
            answer:
              'Every partnership gets its own landing page and tracked links. We also watch searches for your brand name and signups in the days around each post. We report the cost per signup for each creator, and we tell you clearly when a number is an estimate rather than an exact count.',
          },
        ]}
      />
    </div>
  )
}
