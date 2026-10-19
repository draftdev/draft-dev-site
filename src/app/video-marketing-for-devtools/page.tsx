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
  'We make technical videos that show developers how your product works. Our engineers write the scripts, and we handle everything else.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Video Marketing for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/video-marketing-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Video Marketing for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/video_tutorials_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Video Marketing by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Marketing for Developer Tools & Platforms - Draft.dev',
    description,
    images: ['/draft/og/video_tutorials_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/video-marketing-for-devtools',
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

export default function VideoMarketing() {
  return (
    <div>
      <Hero
        title="Video Marketing for Developer Tools & Platforms"
        description={description}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free Guide',
          title: 'How to Orchestrate Technical Content to Drive Business',
          href: '/orchestrate-technical-content',
          imageSrc:
            '/site/med-portrait/orchestrate-technical-content_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Video Developers Watch to the End"
          subtitle="Scripted by engineers, produced and published by us"
          features={[
            {
              title: 'Scripted by subject matter experts',
              description:
                'Our engineers use your product and find the features that are hardest to explain in writing. Then one of our 300+ engineer-writers writes the script. Every script is checked for accuracy before recording, because one wrong command in a demo loses developers fast.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Production without extra work for your team',
              description:
                'We handle screen recording, editing, voiceover, graphics and captions. Your team only reviews the script. We make quick-start guides, feature demos, integration tutorials, use case walkthroughs and short social clips.',
              linkText: 'See what we can create for you',
              linkHref: '/content-types',
            },
            {
              title: 'Publishing and reuse',
              description:
                'One recording becomes many pieces of content. We publish it to YouTube with chapters and transcripts, add it to the right pages on your site, and cut short clips for social. The transcripts also help search engines and AI tools understand your video.',
              linkText: 'See our approach to content distribution',
              linkHref: '/content-distribution',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands technical audiences"
          paragraphs={[
            'Most teams know they need video, but get stuck in two places. The engineers who could explain your product are busy building it. And general video agencies can make a polished video without understanding what it shows. Developers close those videos within seconds.',
            "That's why our scripts are written by engineers who have used tools like yours. A subject matter expert checks every script before we record, so the video shows your product the way developers really use it.",
            'Once a video is live, we turn it into short clips and social posts so it keeps reaching people. Every month, we report on watch time and which topics to film next, and use that to plan the next video.',
          ]}
          image={{
            src: '/site/med-portrait/video_tutorials_draft_dev.jpg',
            alt: 'Technical video production.',
          }}
        />
        <TestimonialCarousel
          testimonials={[
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
          title="How Earthly increased its monthly blog visitors by 346% with Draft.dev"
          summary="Earthly needed technical content but lacked SEO know-how. Our engineer-writers and keyword research grew its blog to 1,500 visitors per workday."
          stats={[
            { value: '346%', label: 'Increase in monthly blog visitors' },
            { value: '1,500', label: 'Blog visitors per workday' },
            { value: '6%', label: 'Conversion rate on blog content' },
          ]}
          href="/case-studies/earthly"
          image={{
            src: '/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg',
            alt: 'Adam Gordon Bell, Director of Developer Relations, Earthly',
          }}
        />
        <TestimonialsCarousel
          exclude={[
            'Randall Degges',
            'Dawn Parzych',
            'Robert Gibb',
            'Rich Burroughs',
            'Emily Blitstein',
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
                "It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published.",
              name: 'Rich Burroughs',
              role: 'Developer Advocate',
              company: 'Loft Labs',
              imageSrc:
                '/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg',
              facePosition: '50% 26%',
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
        pageFaqs={[
          {
            question: 'Do our engineers need to be on camera?',
            answer:
              'No. We make screen recording and voiceover videos. An engineer-writer scripts them and a subject matter expert reviews them, so your team never needs to be on camera.',
          },
          {
            question: 'How long does a video take?',
            answer:
              'Usually 3-6 weeks per video, depending on what source material you already have. After onboarding, you get a ready-to-publish video every 2 weeks.',
          },
          {
            question: 'What do we need to provide?',
            answer:
              'Product access, a kickoff call and a script review. We handle the rest: recording, editing, captions, publishing and social clips.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
