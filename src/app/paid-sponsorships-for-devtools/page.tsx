import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import TestimonialCarousel from '@/components/media/testimonials/testimonial-carousel'
import TestimonialsCarousel from '@/components/media/testimonials/testimonials-carousel'
import BookCall from '@/components/page-components/service-landing/book-call'
import CaseStudy from '@/components/page-components/service-landing/case-study'
import Features from '@/components/page-components/service-landing/features'
import Hero from '@/components/page-components/service-landing/hero'
import Partner from '@/components/page-components/service-landing/partner'

import type { Metadata } from 'next'

const description =
  'We place your product in the newsletters, podcasts and communities developers actually read. Our technical experts review every sponsor message, and we set up tracking before anything goes live.'

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
      <Hero
        title="Paid Sponsorships for Developer Tools & Platforms"
        description={description}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free Report',
          title: 'Developer Marketing Survey 2026',
          href: '/2026-developer-marketing-survey',
          imageSrc:
            '/site/med-portrait/developer-marketing-survey_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Sponsorships in Publications Developers Actually Read"
          subtitle="The right placements, expert-reviewed copy and tracking from day one"
          features={[
            {
              title: 'Placements that fit',
              description:
                'We shortlist newsletters, podcasts and communities whose readers match your buyers, from CooperPress, TLDR and Changelog to smaller niche newsletters. Then we handle the booking and negotiation.',
              linkText: 'See a list of the best tech newsletters',
              linkHref: '/learn/the-ultimate-list-of-developer-newsletters',
            },
            {
              title: 'Copy worth reading',
              description:
                "Most sponsorships fail on the copy, not the placement. Instead of filling in the publisher's template, we create sponsor copy that fits each publication, and a subject matter expert reviews it for accuracy.",
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Tracking from day one',
              description:
                'Every placement gets its own landing page and tracked links, set up before it goes live. Every month, you see cost per signup by placement, so you know which ones to renew and which to drop.',
              linkText: 'See our approach to content distribution',
              linkHref: '/content-distribution',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands technical audiences"
          paragraphs={[
            "Developers ignore banner ads and tune out marketing. But they choose to read newsletters, podcasts and community publications, and they read the sponsor slot because they trust the publication. That's why the copy matters as much as the placement.",
            "We've built relationships with 50+ developer newsletters, 200+ niche sites and dozens of community platforms, so we know which channels bring quality traffic. Before we create any sponsor copy, we study your product, competitors and audience.",
            'We book the placements, submit the copy and report every month on what each one brought in. You see which publications drive pipeline, not just clicks, and we move budget to what works.',
          ]}
        />
        <TestimonialCarousel
          testimonials={[
            {
              quote:
                'Content is one of the biggest and best channels you can invest in. And if you want to quickly scale without compromising the quality and expertise, Draft.dev is the way to go.',
              name: 'Rahul Patwardhan',
              role: 'Senior Director, Demand Generation',
              company: 'Loft Labs',
              imageSrc:
                '/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg',
              facePosition: '50% 20%',
              faceZoom: 1,
            },
            {
              quote:
                "It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published.",
              name: 'Rich Burroughs',
              role: 'Developer Advocate',
              company: 'Loft Labs',
              imageSrc:
                '/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg',
              facePosition: '50% 26%',
              faceZoom: 1,
            },
            {
              quote:
                'They have helped us double our audience, attract more trial users, and increase our trial conversion rate.',
              name: 'Henry Poydar',
              role: 'Founder & CEO',
              company: 'Status Hero',
              imageSrc:
                '/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg',
              facePosition: '50% 30%',
              faceZoom: 1,
            },
          ]}
        />
        <CaseStudy
          title="How Earthly increased its monthly blog visitors by 346% with Draft.dev"
          summary="Earthly needed technical content that reached developers. Our keyword research and technical content grew its blog to 1,500 visitors per workday, with a 6% conversion rate."
          stats={[
            { value: '346%', label: 'Increase in monthly blog visitors' },
            { value: '1,500', label: 'Blog visitors per workday' },
            { value: '6%', label: 'Conversion rate on blog content' },
          ]}
          href="/case-studies/earthly"
          image={{
            src: '/site/med-portrait/laptop_draft_dev.jpg',
            alt: 'Developer working on a laptop',
          }}
        />
        <TestimonialsCarousel
          exclude={[
            'Dawn Parzych',
            'Emily Blitstein',
            'Robert Gibb',
            'Rich Burroughs',
            'Randall Degges',
          ]}
        />
        <TestimonialCarousel
          testimonials={[
            {
              quote:
                'Anyone tasked with marketing to developers knows that they are a community that can smell B.S. from a mile away. Having a dedicated technical resource available is a great support for creating content that both matters to our users and is also useful and accurate.',
              name: 'Em Blitstein',
              role: 'Senior Content Marketing Manager',
              company: 'Sinch Mailgun',
              imageSrc: '/media/testimonials-lg/em_sinch_mailgun.jpg',
              facePosition: '50% 36%',
              faceZoom: 1,
            },
            {
              quote:
                'In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!',
              name: 'Robert Gibb',
              role: 'Content Marketing Manager',
              company: 'Fabric',
              imageSrc:
                '/media/testimonials-lg/robert_gibb_fabric_draft_dev.jpg',
              facePosition: '50% 30%',
              faceZoom: 1,
            },
            {
              quote:
                'Having previously worked with draft.dev, I reached out to them within weeks of starting to help us accelerate our content creation. Our first pieces were published within weeks and ranked within the first month.',
              name: 'Dawn Parzych',
              role: 'Head of Marketing',
              company: 'Shorebird',
              imageSrc:
                '/media/testimonials-lg/dawn_parzych_shorebird_draft_dev.jpeg',
              facePosition: '50% 20%',
              faceZoom: 1,
            },
          ]}
        />
      </main>
      <FAQ
        className="pt-14 pb-8"
        callHref="#book-a-call"
        title="Common Questions We Get Asked"
        headingClassName="subheader-mobile-gradient sm:subheader-gradient"
        masonry
        standardFaqs={false}
        pageFaqs={[
          {
            question: 'What do sponsorships cost?',
            answer:
              "It depends on the publication, format and audience size. A small specialist newsletter can cost a few hundred dollars, and the biggest developer publications several thousand. We pick placements that fit your budget and tell you when one isn't worth its price.",
          },
          {
            question: 'Which channels do you work with?',
            answer:
              '50+ developer newsletters like TLDR, Pointer and Changelog, plus podcasts, community platforms and niche sites. We keep testing new channels and only recommend those that bring results.',
          },
          {
            question: 'How do you choose which publications to use?',
            answer:
              'We look at who the audience really is, not just how big it is. We keep the list short on purpose.',
          },
          {
            question: 'Who creates the sponsor copy?',
            answer:
              'We create it for each publication, and one of our subject matter experts reviews it, so it is accurate and reads like the publication, not an ad.',
          },
          {
            question: 'Can we test before committing?',
            answer:
              "Yes. Most clients start with two or three placements, see what each one brings in, then renew the ones that worked. That's why we set up tracking before the first placement goes live.",
          },
          {
            question: 'How do you track results?',
            answer:
              'Every placement gets its own landing page and tracked links. We also watch branded search and signups around each send, and report cost per signup by placement.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
