import ServiceHeader from '@/components/global/headers/service-header'
import { LogosDark } from '@/components/media/logos-dark'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import FAQ from '@/components/page-components/services/faq-freelancers'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Why Choose Draft.dev Over Freelancers - Draft.dev',
  description:
    'Skip the freelancer lottery. Get consistent, high-quality technical content from vetted experts with guaranteed delivery, unified quality standards, and scalable production.',
  keywords: 'draft.dev, freelancer, devtool content',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/draft-dev-vs-freelancers',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Why Choose Draft.dev Over Freelancers - Draft.dev',
    description:
      'Skip the freelancer lottery. Get consistent, high-quality technical content from vetted experts with guaranteed delivery, unified quality standards, and scalable production.',
    images: [
      {
        url: '/draft/og/services/freelancers_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Paid Media Promotion.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Draft.dev Over Freelancers - Draft.dev',
    description:
      'Skip the freelancer lottery. Get consistent, high-quality technical content from vetted experts with guaranteed delivery, unified quality standards, and scalable production.',
    images: ['/draft/og/services/freelancers_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/draft-dev-vs-freelancers' },
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
                The Hidden Costs of Hiring, Managing, and Working with
                Freelancers
              </h2>
              <div className="paragraph-dark py-6 text-xl">
                <p className="pb-2">
                  Finding good technical writers is hard. Managing them is even
                  harder.
                </p>

                <p className="pt-2">
                  Freelancer quality varies wildly. One freelancer delivers
                  gold, another produces AI-written trash. Your blog becomes a
                  patchwork of different voices, depths, and quality levels.
                  Your team spends more time editing than they would writing
                  from scratch.
                </p>
              </div>

              <h3 className="subheader-mobile-gradient sm:lead-gradient">
                Draft.dev: Managed Technical Content at Scale
              </h3>
              <div className="paragraph-dark text-xl">
                <p className="">
                  Draft.dev provides the benefits of freelancers (specialized
                  expertise and flexible capacity) without the chaos. Our
                  managed services includes writer vetting and matching, quality
                  control and editing, consistent voice and standards,
                  guaranteed delivery schedules, and seamless scale from 1 to
                  50+ pieces monthly.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="tutorials"
                    src="/site/med-portrait/dev_1.jpg"
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

export default function DraftDevVsFreelancers() {
  return (
    <>
      <ServiceHeader
        title="Why Choose Draft.dev Over Freelancers?"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="Stop gambling on freelancer quality. Get predictable, scalable technical content from a managed team of 300+ vetted experts."
      />

      <ServiceInfo />
      <LogosDark />
      <FAQ />
      <Testimonial
        quote="It's difficult to find an agency with enough high-quality subject matter expert writers to build up the content pipeline that Draft.dev gives you. It's a shortcut to building an in-house writing team."
        name="Adam Gordon Bell"
        role="Director of Developer Relations"
        company="Earthly"
        imageSrc="/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg"
        imageAlt="Adam Gordon Bell"
      />

      <TestimonialsGroup />
    </>
  )
}
