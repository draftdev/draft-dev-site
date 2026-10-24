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
  'We get your content shared across developer communities at scale. Our network of 7,000+ working developers posts it on LinkedIn, X, Dev.to, Hacker News and more.'

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
        title={'Influencer Distribution\nfor Developer Tools'}
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
          title="Grassroots Reach Through Real Developers"
          subtitle="Everyday developers sharing your content where their peers already are"
          features={[
            {
              title: 'Everyday developers',
              description:
                'Our network is 7,000+ working developers with day jobs and side projects. Their peers pay attention to what they share, so every post reaches real developers.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Shared at mass scale',
              description:
                'For each launch or piece of content, we shortlist 300 to 500 developers whose interests match it. They post, repost, comment on and republish it across LinkedIn, X, Dev.to, Hashnode, Medium and more.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Every share on record',
              description:
                'We collect and check every live link, then send you the full list. You see exactly where your content was shared, across every platform.',
              linkText: 'See our approach to content distribution',
              linkHref: '/content-distribution',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands technical audiences"
          paragraphs={[
            'A launch only works if developers see it. Ads get ignored, and a single post from one influencer reaches one audience, once.',
            'Our Influencer Distribution Network spreads your content through many real developers at the same time. Each share reaches a different group of peers, so your content shows up across many communities at once. We also republish it on developer platforms like Dev.to, Hashnode and Coder Legion, which AI tools cite heavily.',
            'Once the shares are live, we collect and check every link. You get the full list, so you can see exactly where your content appeared.',
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
            question: 'Who is in the network?',
            answer:
              '7,000+ working developers with day jobs and side projects, who share content with their own peers.',
          },
          {
            question: 'Why share through everyday developers?',
            answer:
              'Developers trust what their peers share. Many real developers sharing at once puts your content in front of more communities than any single post can.',
          },
          {
            question: 'Which platforms do they share on?',
            answer:
              'LinkedIn, X, Hacker News, Dev.to, Medium, Hashnode, Coder Legion and more, depending on the content.',
          },
          {
            question: 'What kind of content can be shared?',
            answer:
              'Product launches, blog posts, tutorials and guides. Developers post, repost, comment on and republish it.',
          },
          {
            question: 'How many developers share each piece?',
            answer:
              "We shortlist 300 to 500 developers from our network of 7,000+, based on what's being shared. We expect at least 25 of them to share it, and we push for more. For one product launch, that meant 60+ placements in total.",
          },
          {
            question: 'How do you report results?',
            answer:
              'You get a list of every live link, checked by our team, so you can see exactly where your content was shared.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
