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
  'We run paid search ads that reach developers who are already looking for a tool like yours. Our engineers review the landing pages, and we track the signups each ad brings in.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'PPC for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/ppc-for-devtools',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'PPC for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/capture_leads_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'PPC by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPC for Developer Tools & Platforms - Draft.dev',
    description,
    images: ['/draft/og/capture_leads_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/ppc-for-devtools',
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

export default function PPCServices() {
  return (
    <div>
      <Hero
        title={'PPC for Developer Tools\n& Platforms'}
        description={description}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free eBook',
          title: 'Content Marketing in the Age of AI',
          href: '/content-marketing-engine',
          imageSrc: '/site/med-portrait/content-marketing-engine_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Paid Search That Reaches Buyers"
          subtitle="Your budget goes to people already looking"
          features={[
            {
              title: 'Ads for active buyers',
              description:
                'We review your current ad accounts, then build campaigns around searches that show someone is choosing a tool: your brand, competitors, comparisons and migrations. Your budget goes to people already looking.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Pages developers trust',
              description:
                "Each ad leads to a landing page with real setup steps, honest comparisons and code, because a click is wasted if the page doesn't earn trust. Our technical experts review every page, and we test versions to see what works.",
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
            {
              title: 'Retargeting docs readers',
              description:
                'People reading your docs are your best audience, so we show them ads that match what they read. Every month, you see cost per lead, cost per signup and pipeline, and we move budget to what works.',
              linkText: 'See our approach to content distribution',
              linkHref: '/content-distribution',
            },
          ]}
        />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A growth partner that understands technical audiences"
          paragraphs={[
            'Most teams have tried paid ads with developers and been let down. Developers block ads and tune out marketing. But some people are worth reaching: buyers comparing tools, and engineers stuck in your docs. They are already looking, and that is when paid ads work.',
            'Reaching them is only half the job. The page they land on has to earn their trust, so an engineer reviews every landing page for accuracy.',
            'Once campaigns are live, we test your pages and watch the numbers. Every month, we report cost per lead and cost per signup, and move budget to the searches that bring in pipeline.',
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
            question: 'Do paid search ads work on developers?',
            answer:
              'On the right searches, yes. Developers block most ads, but buyers search for comparisons, and engineers stuck in your docs respond to retargeting. Paid ads work best when people are already looking.',
          },
          {
            question: 'Which searches do you target?',
            answer:
              'Searches that show someone is choosing a tool: your brand, competitors, comparisons and migrations.',
          },
          {
            question: 'Can you work with our existing ad accounts?',
            answer:
              'Yes. We review your current ad accounts before we build new campaigns.',
          },
          {
            question: 'How do you report results?',
            answer:
              'Every month, you see cost per lead, cost per signup and which campaigns bring in pipeline. Then we move budget to the searches that work.',
          },
          {
            question: 'What budget do we need to start?',
            answer:
              "Enough to learn which searches work for you, and that depends on your market. We'll give you a number on the discovery call.",
          },
          {
            question: 'Do you build the landing pages?',
            answer:
              'Yes. A subject matter expert verifies every landing page, and we test different versions to see which works best.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
