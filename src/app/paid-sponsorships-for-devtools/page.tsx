import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header-content-strategy'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Partner from '@/components/page-components/paid-sponsorships/partner'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

const description =
  'We place your product in the newsletters, podcasts and communities developers actually read. Our engineers write the sponsor copy, and we set up tracking before anything goes live.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Paid Sponsorships for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/paid-sponsorships-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Paid Sponsorships for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/distributing_content_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Paid Sponsorships by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paid Sponsorships for Developer Tools & Platforms - Draft.dev',
    description,
    images: ['/draft/og/distributing_content_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/paid-sponsorships-for-devtools',
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

export default function PaidSponsorships() {
  return (
    <div>
      <ServiceHeader
        title="Paid Sponsorships for Developer Tools & Platforms"
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
          title="Sponsorships in Publications Developers Actually Read"
          subtitle="The right placements, sponsor copy written by engineers, and tracking set up before launch"
          subtitleBold=""
          features={[
            {
              title: 'Picking the right placements',
              description:
                "After your kickoff call, our engineers use your product. Then we pick the newsletters, podcasts and communities whose readers match your buyers. We work with publishers like CooperPress, TLDR and Changelog, as well as smaller technical newsletters in your space. We've tested dozens of platforms and only recommend the ones with proven results. We also handle booking and negotiation.",
              linkText: 'See a list of the best tech newsletters',
              linkHref: '/learn/the-ultimate-list-of-developer-newsletters',
            },
            {
              title: 'Sponsor copy written by subject matter experts',
              description:
                'Most sponsorships fail because of the copy, not the placement. Publishers send a template, someone fills it in, and it reads like an ad. Developers notice and skip it. Instead, one of our 300+ vetted engineer-writers writes your copy so it fits the publication and is worth reading to the end.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Tracking set up before launch',
              description:
                "If you can't tell what a sponsorship brought in, you're paying for a guess. Every placement gets its own landing page and tracked links. We also watch searches for your brand name and signups around each placement. Monthly reports show the cost per signup for each placement, so you know which ones to renew and which to drop.",
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
            question: 'What do sponsorships cost?',
            answer:
              "It depends on the publication, the format and the audience size. A small specialist newsletter can cost a few hundred dollars, and the biggest developer publications can cost several thousand. We pick placements that fit your budget, negotiate the booking, and tell you when a placement isn't worth its price.",
          },
          {
            question: 'How do you choose which publications to use?',
            answer:
              "We look at who the audience really is, not just how big it is. We've tested dozens of platforms, so we only recommend the ones with proven results for developer-focused companies. We keep the list short on purpose.",
          },
          {
            question: 'Can we test before committing?',
            answer:
              "Yes. Most clients start with two or three placements, see what each one brings in, then renew the ones that worked. That's why we set up tracking before the first placement goes live.",
          },
        ]}
      />
    </div>
  )
}
