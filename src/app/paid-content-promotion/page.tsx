import ServiceHeader from '@/components/global/headers/service-header'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Paid Media Promotion - Draft.dev',
  description:
    'Amplify your technical content through strategic paid promotion. We place your content in developer newsletters, niche communities, and targeted channels that drive qualified traffic and leads.',
  keywords: 'technical content promotion, paid promotion, devtools promotion',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/paid-content-promotion',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Paid Media Promotion - Draft.dev',
    description:
      'Amplify your technical content through strategic paid promotion. We place your content in developer newsletters, niche communities, and targeted channels that drive qualified traffic and leads.',
    images: [
      {
        url: '/draft/og/services/developer_promotion_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Paid Media Promotion.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paid Media Promotion - Draft.dev',
    description:
      'Amplify your technical content through strategic paid promotion. We place your content in developer newsletters, niche communities, and targeted channels that drive qualified traffic and leads.',
    images: ['/draft/og/services/developer_promotion_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/paid-content-promotion' },
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
                Reach Developers Where They Actually Are
              </h2>
              <div className="paragraph-dark py-6 text-xl">
                <p className="pb-2">
                  <span className="font-semibold">
                    Traditional paid ads often fail with developers.
                  </span>{' '}
                  Ad blockers, banner blindness, and general skepticism make
                  standard PPC campaigns ineffective.{' '}
                  <span className="font-semibold">
                    Developers engage with content they trust:
                  </span>{' '}
                  curated newsletters, community recommendations, and niche
                  publications they actively choose to read.
                </p>

                <p className="pt-2">
                  We've built relationships with 50+ developer newsletters, 200+
                  niche sites, and dozens of community platforms. We know which
                  channels deliver quality traffic, which content formats
                  resonate, and how to turn awareness into qualified pipeline.
                </p>
              </div>

              <h3 className="subheader-mobile-gradient sm:lead-gradient mt-8">
                Content Promotion That Drives Real Business Impact
              </h3>
              <div className="paragraph-dark text-xl">
                <p className="">
                  <span className="font-semibold">
                    Every campaign is engineered for conversion.
                  </span>{' '}
                  Draft.dev matches your content to the right audience, optimize
                  placements for engagement, track attribution through the
                  entire funnel, and continuously refines this implementation
                  based on performance data. The result: content promotion that
                  delivers measurable ROI, not just vanity metrics.
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
                    src="/site/med-portrait/tutorials_draft_dev.jpg"
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

export default function PaidContentPromotion() {
  return (
    <>
      <ServiceHeader
        title="Paid Media Promotion for Technical Companies"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See which content types we support',
          href: '/content-types',
        }}
        description="Transform your best content into a lead generation machine through strategic placement in developer newsletters, communities, and high-intent channels."
      />

      <ServiceInfo />
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
