import ServiceHeader from '@/components/global/headers/service-header'
import { LogosDark } from '@/components/media/logos-dark'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import FAQ from '@/components/page-components/services/faq-seo'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Why Technical Brands Choose Draft.dev Over SEO Agencies - Draft.dev',
  description:
    'Most content marketing agencies fail with developer audiences. Draft.dev delivers technical content from actual developers who understand your product, speak your language, and earn developer trust.',
  keywords: 'draft.dev, freelancer, devtool content',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/draft-dev-vs-seo-agency',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title:
      'Why Technical Brands Choose Draft.dev Over SEO Agencies - Draft.dev',
    description:
      'Most content marketing agencies fail with developer audiences. Draft.dev delivers technical content from actual developers who understand your product, speak your language, and earn developer trust.',
    images: [
      {
        url: '/draft/og/services/seo_agencies_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Paid Media Promotion.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Why Technical Brands Choose Draft.dev Over SEO Agencies - Draft.dev',
    description:
      'Most content marketing agencies fail with developer audiences. Draft.dev delivers technical content from actual developers who understand your product, speak your language, and earn developer trust.',
    images: ['/draft/og/services/seo_agencies_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/draft-dev-vs-seo-agency' },
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
                Why SEO Agencies Fail With Developer Content
              </h2>
              <div className="paragraph-dark py-6 text-xl">
                <p className="pb-2">
                  Generic content agencies treat technical content like any
                  other B2B vertical: stuff it full of the right keywords, churn
                  out 500-word posts, and hope for rankings. But developers have
                  the industry's best BS detectors. They spot shallow content
                  immediately, mock it publicly, and blacklist brands that
                  publish it.
                </p>

                <p className="pt-2">
                  Technical accuracy isn't optional: it's table stakes. One
                  wrong code example, outdated best practice, or fundamental
                  misunderstanding destroys your credibility instantly. Generic
                  agencies using "technical" writers who took a coding bootcamp
                  simply can't deliver the depth developers demand.
                </p>
              </div>

              <h3 className="subheader-mobile-gradient sm:lead-gradient">
                Draft.dev: Real Technical Expertise, Not Just Keywords
              </h3>
              <div className="paragraph-dark text-xl">
                <p className="">
                  Draft.dev writers aren't content marketers who learned some
                  technical terms. They're practicing developers, DevRel
                  professionals, and technical architects who write. They
                  understand your product deeply, write code that actually
                  works, explain complex concepts clearly, and earn genuine
                  developer respect.
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
                    src="/site/med-portrait/dev_3.jpg"
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

export default function DraftDevVsSEOAgency() {
  return (
    <>
      <ServiceHeader
        title="Why Technical Brands Choose Draft.dev Over SEO Agencies"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="Stop publishing content that makes developers cringe. Work with writers who actually understand your technology and can earn your developer's respect.
"
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
