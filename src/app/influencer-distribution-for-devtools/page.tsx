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
  'We get your technical content in front of developers through creators they already trust. Our subject matter experts shape every brief, and we track the signups each partnership brings in.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Influencer Distribution for Developer Tools & Platforms - Draft.dev',
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
      <Hero
        title="Influencer Distribution for Developer Tools & Platforms"
        description={description}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free Checklist',
          title: 'The Big Blog Promotion Checklist',
          href: '/big-blog-promotion-checklist',
          imageSrc: '/site/med-portrait/blog-promotion-checklist_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Reach Developers Through Creators They Already Trust"
          subtitle="Creators picked for technical credibility, measured by signups"
          features={[
            {
              title: 'Creators buyers trust',
              description:
                'We look for creators whose audience matches your buyers, then check what they have built, how they handle corrections and whether their audience engages. A smaller, engaged developer audience beats a big, passive one.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Briefs, not scripts',
              description:
                'Good creators refuse scripts, so we give them a brief. Our subject matter experts cover what your product does, what is hard about the problem and what not to claim. We handle negotiation, disclosure and scheduling.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Tracking real returns',
              description:
                'Every partnership gets its own landing page and tracked links, and we watch branded search and signups around each post. Every month, you see cost per signup by creator, so budget goes where it worked.',
              linkText: 'See our approach to content distribution',
              linkHref: '/content-distribution',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands technical audiences"
          paragraphs={[
            "Many teams have content that deserves an audience but can't find one. Developers ignore banner ads and tune out marketing. But they will watch a long video from a creator they trust and take that creator's advice seriously.",
            "Some influencer platforms sell reach by the thousand. We don't. Through our Influencer Distribution Network of developer micro-influencers, we pick creators for technical credibility and only recommend those whose audience matches your buyers.",
            'We handle outreach, negotiation, briefs and scheduling. Every month, we show you which creators are driving pipeline, not just views, and update the list based on real results.',
          ]}
        />
        <TestimonialCarousel
          testimonials={[
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
        <CaseStudy
          title="How Status Hero grew blog traffic by 211% and increased its trial conversion rate with Draft.dev"
          summary="Status Hero wanted more trial users. Our content plan, keyword research and industry-insider expertise grew its traffic and its Medium audience, and saved the team 40 hours a week."
          stats={[
            { value: '211%', label: 'Increase in blog visitors' },
            { value: '50x', label: 'Growth in Medium audience' },
            { value: '40', label: 'Hours saved per week' },
          ]}
          href="/case-studies/status-hero"
          image={{
            src: '/site/med-portrait/dev_2.jpg',
            alt: 'Engineer presenting code to a developer audience',
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
                'Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials.',
              name: 'Randall Degges',
              role: 'Head of Developer & Security Relations',
              company: 'snyk',
              imageSrc:
                '/media/testimonials-lg/randall_degges_snyk_draft_dev.jpg',
              facePosition: '50% 0%',
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
            question: 'How do you choose creators?',
            answer:
              "We start with creators whose audience matches your buyers. Then we check their technical credibility: what they've built, how they respond when corrected, how much sponsored content they already do, and whether their audience engages. Follower count comes last.",
          },
          {
            question: 'What is the Influencer Distribution Network?',
            answer:
              'Our network of developer micro-influencers who share technical content with their audiences. We match your content to the creators whose audience fits your buyers.',
          },
          {
            question: 'Who prepares the creator brief?',
            answer:
              'Our subject matter experts. Each brief covers what your product does, what is hard about the problem it solves, and what not to claim.',
          },
          {
            question: 'Do creators read a script?',
            answer:
              'No. Good creators refuse scripts, and developers can tell when someone reads marketing copy. Creators get a brief and explain your product in their own voice.',
          },
          {
            question: 'Do you handle contracts and disclosure?',
            answer:
              'Yes. We handle outreach, negotiation, sponsorship disclosure and scheduling, so your team does not have to.',
          },
          {
            question: 'How do you track results if someone signs up later?',
            answer:
              'Every partnership gets its own landing page and tracked links. We also watch branded search and signups in the days around each post, and we tell you when a number is an estimate rather than an exact count.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
