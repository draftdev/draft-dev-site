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
  'We combine engineer-reviewed content, SEO and AEO, paid search, newsletter sponsorships and distribution into one program, with cost per signup on paid channels.'

const heroDescription =
  'We run one demand generation program for your developer tool, from technical content to search, paid ads, sponsorships and distribution. Our 300+ subject matter experts check every piece. We track the signups each channel brings in.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title:
    'B2B Demand Generation Agency with Engineer-Reviewed Content - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/demand-generation-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title:
      'B2B Demand Generation Agency with Engineer-Reviewed Content - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/capture_leads_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'B2B Demand Generation by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'B2B Demand Generation Agency with Engineer-Reviewed Content - Draft.dev',
    description,
    images: ['/draft/og/capture_leads_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/demand-generation-for-devtools',
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

export default function DemandGenerationServices() {
  return (
    <div>
      <Hero
        title={'B2B Demand Generation\nfor Developer Tools'}
        description={heroDescription}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free eBook',
          title: '8 Essential B2B Demand Generation Tactics',
          href: '/8-essential-demand-generation-tactics',
          imageSrc: '/site/med-portrait/demand-generation-tactics_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Demand Generation in One Program"
          subtitle="Every channel working toward the same pipeline"
          features={[
            {
              title: 'Content that earns trust',
              description:
                'We start with tutorials, comparisons and guides developers want to read, each checked by one of our engineers. We optimize them for SEO and AEO so they show up in Google and in AI answers.',
              linkText: 'See our SEO services',
              linkHref: '/seo-services-for-devtools',
            },
            {
              title: 'Paid channels that convert',
              description:
                'We run paid search for buyers already comparing tools and place your product in the newsletters, podcasts and communities developers read. Every paid channel is tracked to cost per signup.',
              linkText: 'See our paid search service',
              linkHref: '/ppc-for-devtools',
            },
            {
              title: 'Distribution at scale',
              description:
                'Our network of 7,000+ working developers shares your content across LinkedIn, X, Dev.to and more. We also leave helpful, unlinked brand mentions in Reddit threads where developers ask for advice.',
              linkText: 'See our distribution network',
              linkHref: '/influencer-distribution-for-devtools',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands developers"
          paragraphs={[
            "Most demand generation programs are built for buyers who respond to cold emails and gated ebooks. Developers don't. They research on their own, trust their peers and tune out anything that reads like a sales pitch.",
            'So we start with content that helps them, then use search, paid ads, sponsorships and community distribution to put it in front of the right people at the right time.',
            'Every month, we report traffic, signups and cost per signup by channel, and move budget to what works.',
          ]}
        />
        <TestimonialCarousel
          testimonials={[
            {
              quote:
                'What impressed me the most was that as traffic grew, I was expecting a slight drop in conversion rates from visitors to signups, surprisingly it stayed consistent at 10-15%. Helping us not only hit our goals but exceed them.',
              name: 'Dawn Parzych',
              role: 'Head of Marketing',
              company: 'Shorebird',
              imageSrc:
                '/media/testimonials-lg/dawn_parzych_shorebird_draft_dev.jpeg',
              facePosition: '50% 20%',
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
        <CaseStudy
          title="How Status Hero grew blog traffic by 211% and increased its trial conversion rate with Draft.dev"
          summary="Status Hero wanted more trial users. Our content plan, keyword research and industry-insider expertise grew its traffic, its trial users and its trial conversion rate, and saved the team 40 hours a week."
          stats={[
            { value: '211%', label: 'Increase in blog visitors' },
            { value: '50x', label: 'Growth in Medium audience' },
            { value: '40', label: 'Hours saved per week' },
          ]}
          href="/case-studies/status-hero"
          image={{
            src: '/site/med-portrait/product_draft_dev.jpg',
            alt: 'Developer at a desk reviewing work on a tablet',
          }}
        />
        <TestimonialsCarousel
          exclude={[
            'Dawn Parzych',
            'Robert Gibb',
            'Rich Burroughs',
            'Randall Degges',
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
            question: "What's included in a demand generation program?",
            answer:
              'Technical content, SEO and AEO, paid search, newsletter and podcast sponsorships, and distribution through Reddit and our developer network.',
          },
          {
            question:
              'How is this different from a typical demand generation agency?',
            answer:
              'Most agencies are built for general B2B buyers. We work with developer tools and technical companies, and every piece is checked by an engineer, so it holds up with technical readers.',
          },
          {
            question: 'What budget do we need?',
            answer:
              "It depends on your channels and market. We'll give you a number on the discovery call.",
          },
          {
            question: 'How do you measure results?',
            answer:
              'Every month, you see traffic, signups and cost per signup for each paid channel. Then we move budget to what works.',
          },
          {
            question: 'Who writes the content?',
            answer:
              'Every piece starts with deep research. Then one of our 300+ engineers, who are subject matter experts, checks the technical accuracy, builds and tests the code, and reads the whole piece as a developer would. A technical editor then polishes it to match your brand guidelines.',
          },
          {
            question: 'Do we need every channel?',
            answer: 'No. We plan the mix around your goals and budget.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
