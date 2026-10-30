import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import TestimonialCarousel from '@/components/media/testimonials/testimonial-carousel'
import TestimonialsCarousel from '@/components/media/testimonials/testimonials-carousel'
import WhatWeCreate from '@/components/page-components/content-production/what-we-create'
import BookCall from '@/components/page-components/service-landing/book-call'
import CaseStudy from '@/components/page-components/service-landing/case-study'
import Features from '@/components/page-components/service-landing/features'
import Hero from '@/components/page-components/service-landing/hero'
import Partner from '@/components/page-components/service-landing/partner'

import type { Metadata } from 'next'

const description =
  'We produce technical content that helps developers find, trust and choose your product. Our subject matter experts check every piece for accuracy, and we deliver ready-to-publish content every week.'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Content Production for Developer Tools & Platforms - Draft.dev',
  description,
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/content-production',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Content Production for Developer Tools & Platforms - Draft.dev',
    description,
    images: [
      {
        url: '/draft/og/content_production_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Production by Draft.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Production for Developer Tools & Platforms - Draft.dev',
    description,
    images: ['/draft/og/content_production_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/content-production',
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

export default function ContentProductionServices() {
  return (
    <div>
      <Hero
        title="Content Production for Developer Tools"
        description={description}
        primaryCTA={{ text: 'Book a Discovery Call', href: '#book-a-call' }}
        guide={{
          badge: 'Free eBook',
          title: 'Technical Content Marketing Playbook',
          href: '/playbook',
          imageSrc:
            '/site/med-portrait/technical-content-playbook_draftdev.jpg',
        }}
      />
      <main>
        <Features
          title="Content Built for Developers"
          subtitle="Accurate, consistent and ready to publish"
          features={[
            {
              title: 'Checked by experts',
              description:
                'Every piece starts with deep research. One of our 300+ engineers checks the accuracy, tests the code and reads it as a developer would. A technical editor then polishes it to match your brand guidelines.',
              linkText: 'See how we turn content into growth',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Right mix for every stage',
              description:
                'Tutorials and guides build awareness and trust. Comparisons and thought leadership help buyers decide. We plan the mix so your content shows up on search engines and in AI answers at every stage.',
              linkText: 'See what we can create for you',
              linkHref: '#what-we-create',
            },
            {
              title: 'Steady weekly delivery',
              description:
                'You get ready-to-publish content every week, from blog posts and landing pages to lead magnets and videos. We share progress in a roadmap and adjust what we produce based on your goals.',
              linkText: 'See some of our content examples',
              linkHref: '/technical-content-examples',
            },
          ]}
        />
        <WhatWeCreate />
        <SocialProof title="A growth agency with a track record" compact />
        <Partner
          title="A content partner that understands developers"
          paragraphs={[
            "Developers can tell when content wasn't made with them in mind. They trust content that is technically accurate, shows real code and respects their time.",
            "That's why every piece goes through our engineers before it reaches you. They check the facts, test the code and read it the way your users will.",
            'Your team stays focused on the product. You join a kickoff call and our roadmap reviews, and we handle everything else.',
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
          title="How a developer API platform won 72% of its AI citations with Draft.dev"
          summary="A developer API platform needed content developers could find and trust. In seven months, we published 23 new articles and refreshed 3, and they now bring in 9 of every 10 blog views."
          stats={[
            {
              value: '72%',
              label: "Of the site's AI citations come from our articles",
            },
            { value: '10x', label: 'Blog views in seven months' },
            { value: '17 of 22', label: "Our articles on Google's first page" },
          ]}
          href="/case-studies/developer-api-platform"
          image={{
            src: '/site/med-portrait/developers_draft_dev.jpg',
            alt: 'Developers working together at a desk',
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
            question: 'What types of content do you produce?',
            answer:
              'Blog posts and technical articles, thought leadership, comparison pages, video tutorials, ebooks and whitepapers, content refreshes and social media posts.',
          },
          {
            question: 'Who writes the content?',
            answer:
              'Every piece starts with deep research. Then one of our 300+ engineers, who are subject matter experts, checks the technical accuracy, builds and tests the code, and reads the whole piece as a developer would. A technical editor then polishes it to match your brand guidelines.',
          },
          {
            question: 'How often do you deliver?',
            answer:
              'Every week. You get ready-to-publish content on a steady schedule, planned in a roadmap we share with you.',
          },
          {
            question: 'Can you match our brand voice?',
            answer:
              'Yes. A technical editor polishes every piece to match your brand guidelines.',
          },
          {
            question: 'Can you publish to our CMS?',
            answer:
              'Yes, if you want. We can publish finished pieces straight into your CMS.',
          },
          {
            question: 'Can you update our existing content?',
            answer:
              'Yes. Our content refreshes update older articles with current versions, new code and better structure.',
          },
        ]}
      />
      <BookCall />
    </div>
  )
}
