import ServiceHeader from '@/components/global/headers/service-header'
import { LogosDark } from '@/components/media/logos-dark'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import FAQ from '@/components/page-components/services/faq-ai'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Why Human Expertise Beats AI for Technical Content - Draft.dev',
  description:
    'AI-generated content can get flagged, penalized, and ignored by developers. Get authentic technical content from real experts who provide original insights, tested code, and genuine value.',
  keywords: 'draft.dev, freelancer, devtool content',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/draft-dev-vs-ai-gen-content',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Why Human Expertise Beats AI for Technical Content - Draft.dev',
    description:
      'AI-generated content can get flagged, penalized, and ignored by developers. Get authentic technical content from real experts who provide original insights, tested code, and genuine value.',
    images: [
      {
        url: '/draft/og/services/ai_content_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Paid Media Promotion.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Human Expertise Beats AI for Technical Content - Draft.dev',
    description:
      'AI-generated content can get flagged, penalized, and ignored by developers. Get authentic technical content from real experts who provide original insights, tested code, and genuine value.',
    images: ['/draft/og/services/ai_content_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/draft-dev-vs-ai-gen-content' },
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

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto sm:max-w-5xl lg:mx-0">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient">
                The AI Content Trap That's Hurting Technical Brands
              </h2>
              <div className="paragraph-dark py-6 text-xl">
                <p className="pb-2">
                  AI content seems like a miracle. It can create instant
                  articles for pennies. Unfortunately, for technical companies,
                  developers can spot AI-gen content immediately. It's generic,
                  lacks context, and offers no original insights.
                </p>

                <p className="pt-2">
                  The hidden costs are devastating: search rankings collapse,
                  domain authority erodes, developer trust evaporates, and
                  recovery takes months, if not years. What seemed like savings
                  becomes your most expensive mistake when you factor in lost
                  traffic, damaged reputation, and the cost of replacing all of
                  that worthless content.
                </p>
              </div>

              <h3 className="subheader-mobile-gradient sm:lead-gradient">
                Draft.dev: Real Developer Expertise Cannot Be Simulated
              </h3>
              <div className="paragraph-dark text-xl">
                <p className="">
                  Draft.dev writers bring what AI cannot: years of experience,
                  original insights from real projects, code they've actually
                  deployed, understanding of edge cases and gotchas, and an
                  authentic voice developers trust. Every piece is original,
                  valuable, and completely human.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:ml-auto">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="tutorials"
                    src="/site/med-portrait/dev_2.jpg"
                    width={400}
                    height={600}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DraftDevVsAIGenContent() {
  return (
    <>
      <ServiceHeader
        title="Why Human Expertise Beats AI for Technical Content"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="Get original technical content from real developers with genuine expertise, unique insights, and code that actually works."
      />

      <ServiceInfo />
      <LogosDark />
      <FAQ />
      <Testimonial
        quote="Anyone tasked with marketing to developers knows that they are a community that can smell B.S. from a mile away. Having a dedicated technical resource available is a great support for creating content that both matters to our users and is also useful and accurate."
        name="Em Blitstein"
        role="Senior Content Marketing Manager"
        company="Sinch Mailgun"
        imageSrc="/media/testimonials-lg/em_sinch_mailgun.jpg"
        imageAlt="Em Blitstein"
      />

      <TestimonialsGroup />
    </>
  )
}
