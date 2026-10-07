import FAQ from '@/components/global/faq'
import ServiceHeader from '@/components/global/headers/service-header-content-strategy'
import MedCaseEarthly from '@/components/media/case-studies/med-case-earthly'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Partner from '@/components/page-components/video-marketing/partner'
import Why from '@/components/page-components/why'

import type { Metadata } from 'next'

const description =
  'We create technical videos that show developers exactly how your product solves their problems. Our vetted engineer-writers write the scripts, we handle all the production, and we publish your videos so people keep finding them long after launch.'

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
      <ServiceHeader
        title="Video Marketing for Developer Tools & Platforms"
        description={description}
        leadMagnet={{
          badge: 'Free Guide',
          text: 'How to Orchestrate Technical Content to Drive Business',
          href: '/orchestrate-technical-content',
        }}
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See some of the videos we have produced',
          href: '/video-tutorials',
        }}
      />
      <main>
        <div className="bg-gradient-brand">
          <SocialProof showHeading={false} />
        </div>
        <Why
          title="Video Developers Watch to the End"
          subtitle="Scripted by engineers, fully produced by us, and published so people keep finding them"
          subtitleBold=""
          features={[
            {
              title: 'Scripted by subject matter experts',
              description:
                'After your kickoff call, our engineers use your product. We find the features that are hardest to explain in writing and pick the right video format. Then one of our 300+ vetted engineer-writers writes the script. Every script is checked for technical accuracy before recording, because one wrong command in a demo loses developers right away.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Production without extra work for your team',
              description:
                'We handle screen recording, editing, voiceover, video graphics and captions. Your team only joins a kickoff call, reviews the script and gives occasional feedback. We produce quick-start guides, feature demos, integration tutorials, use case walkthroughs and short clips for social media.',
              linkText: 'See what we can create for you',
              linkHref: '/content-types',
            },
            {
              title: 'Publishing and reuse',
              description:
                'One recording becomes many pieces of content. We publish to YouTube with titles, descriptions, chapters and transcripts. We add the video to the pages on your site where it answers a visitor’s question. And we cut short clips and social posts your team can use for months. Search engines and AI tools read the text around a video, not the video itself, so every video comes with a transcript and metadata.',
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
      <FAQ
        pageFaqs={[
          {
            question: 'Do our engineers need to be on camera?',
            answer:
              'No. We create screen recording and voiceover videos, scripted by a vetted engineer-writer and reviewed by a subject matter expert. Your team never needs to step in front of a camera.',
          },
          {
            question: 'How long does a video take?',
            answer:
              'Our standard timeline is 3-6 weeks per video, depending on what source material is already available. After the initial onboarding period, you get ready-to-publish videos every 2 weeks.',
          },
          {
            question: 'What do we need to provide?',
            answer:
              'Product access, a kickoff call, and a script review. We handle the rest, including recording, editing, captions, publishing and short clips for social media.',
          },
        ]}
      />
    </div>
  )
}
