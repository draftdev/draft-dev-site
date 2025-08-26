import ServiceHeader from '@/components/global/headers/service-header'
import { LogosDark } from '@/components/media/logos-dark'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import FAQ from '@/components/page-components/services/faq-gen-ai'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'AI Content Strategy - Draft.dev',
  description:
    'Optimize your content for AI search and LLM visibility. We help developer tools appear in AI-generated answers, summaries, and recommendations where developers are increasingly searching.',
  keywords: 'technical content refresh, content SEO, ai content refresh',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/ai-content-strategy',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'AI Content Strategy - Draft.dev',
    description:
      'Optimize your content for AI search and LLM visibility. We help developer tools appear in AI-generated answers, summaries, and recommendations where developers are increasingly searching.',
    images: [
      {
        url: '/draft/og/services/ai_content_strategies_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Content Strategy.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Content Strategy - Draft.dev',
    description:
      'Optimize your content for AI search and LLM visibility. We help developer tools appear in AI-generated answers, summaries, and recommendations where developers are increasingly searching.',
    images: ['/draft/og/services/ai_content_strategies_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/ai-content-strategy' },
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
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto sm:max-w-5xl lg:mx-0">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient">
                The Search Landscape Has Fundamentally Changed
              </h2>
              <div className="paragraph-dark py-6 text-xl">
                <p className="pb-2">
                  AI content optimization isn't about gaming algorithms; it's
                  about structured, authoritative content that LLMs can
                  understand, extract, and cite. When AI tools recommend
                  solutions, your brand needs to be part of that conversation.
                </p>

                <p className="pt-2">
                  <Link
                    href="https://www.jetbrains.com/lp/devecosystem-2024/#ai"
                    className="font-medium text-primary underline"
                  >
                    JetBrains research shows
                  </Link>{' '}
                  69% of developers have tried using ChatGPT for development
                  activities, and 49% use it regularly.
                </p>
              </div>

              <h3 className="subheader-mobile-gradient sm:lead-gradient mt-8">
                Beyond SEO: Generative Engine Optimization (GEO)
              </h3>
              <div className="paragraph-dark text-xl">
                <p className="">
                  We optimize your content for both traditional search and AI
                  extraction. This includes semantic structuring for LLM
                  comprehension, answer-focused formatting, authoritative
                  sourcing and citations, and strategic placement in AI training
                  datasets. Your content becomes a trusted source that AI
                  systems reference.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="tutorials"
                    src="/site/med-portrait/content_strategy.jpg"
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

export default function AIContentStrategy() {
  return (
    <>
      <ServiceHeader
        title="AI Content Strategy for Technical Brands"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="Optimize your content for AI search and LLM visibility. We help developer tools appear in AI-generated answers, summaries, and recommendations where developers are increasingly searching."
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

      {/* <FAQ /> */}
    </>
  )
}
