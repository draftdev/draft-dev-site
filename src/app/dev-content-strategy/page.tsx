import ServiceHeader from '@/components/global/headers/service-header'
import { LogosDark } from '@/components/media/logos-dark'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import FAQ from '@/components/page-components/services/faq-dev-content-strategy'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Developer Content Strategy - Draft.dev',
  description:
    'Unite DevRel, marketing, and product teams with a cohesive content strategy. We help you build a developer content program that drives both community engagement and business results.',
  keywords: 'technical content refresh, content SEO, ai content refresh',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/dev-content-strategy',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Developer Content Strategy - Draft.dev',
    description:
      'Unite DevRel, marketing, and product teams with a cohesive content strategy. We help you build a developer content program that drives both community engagement and business results.',
    images: [
      {
        url: '/draft/og/services/developer_content_strategies_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Content Strategy.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Content Strategy - Draft.dev',
    description:
      'Unite DevRel, marketing, and product teams with a cohesive content strategy. We help you build a developer content program that drives both community engagement and business results.',
    images: [
      '/draft/og/services/developer_content_strategies_og_draft_dev.jpg',
    ],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/dev-content-strategy' },
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
                Bridge the Gap Between Community and Commerce
              </h2>
              <div className="paragraph-dark py-6 text-xl">
                <p className="pb-2">
                  Most developer content programs fail because teams work in
                  isolation. DevRel focuses on community trust, marketing chases
                  leads, and product publishes sporadically. The result?
                  Duplicated efforts, inconsistent messaging, and content that
                  serves no one well.
                </p>

                <p className="pt-2">
                  A unified developer content strategy aligns all teams around
                  shared goals: building authentic relationships while driving
                  product adoption. We help you create frameworks that balance
                  community value with business metrics, ensuring every piece of
                  content serves both your developers and your bottom line.
                </p>
              </div>

              <h3 className="subheader-mobile-gradient sm:lead-gradient mt-8">
                Strategy That Scales With Your Developer Program
              </h3>
              <div className="paragraph-dark text-xl">
                <p className="">
                  From startup to enterprise, Draft.dev designs content
                  strategies that grow with you. Our frameworks include
                  editorial calendars aligned to product launches, contribution
                  guidelines for community content, measurement systems that
                  track both engagement and revenue, and governance models that
                  maintain quality at scale.
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

export default function DevContentStrategy() {
  return (
    <>
      <ServiceHeader
        title="Developer Content Strategy by Draft.dev"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="Unite DevRel, marketing, and product teams with a cohesive content strategy. We help you build a developer content program that drives both community engagement and business results."
      />

      <ServiceInfo />
      <LogosDark />
      <FAQ />

      <Testimonial
        quote="Content is one of the biggest and best channels you can invest in. And if you want to quickly scale without compromising the quality and expertise, Draft.dev is the way to go."
        name="Rahul Patwardhan"
        role="Senior Director, Demand Generation"
        company="Loft Labs"
        imageSrc="/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg"
        imageAlt="Rahul Patwardhan"
      />

      <TestimonialsGroup />

      {/* <FAQ /> */}
    </>
  )
}
