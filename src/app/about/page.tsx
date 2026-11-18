import { generateAboutPageSchemas, stringifySchemas } from '@/app/lib/schema'
import FAQ from '@/components/global/faq'
import SocialProof from '@/components/media/social-proof'
import AboutHero from '@/components/page-components/company/about-hero'
import AboutSteps from '@/components/page-components/company/about-steps'
import Team from '@/components/page-components/company/team'
import What from '@/components/page-components/company/what'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'About Us - Draft.dev',
  description:
    'Draft.dev is a go-to-market marketing agency for developer tools and AI platforms: strategy, technical content, SEO & AEO, distribution, newsletters, video and paid growth.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/about',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'About us - Draft.dev',
    description:
      'Draft.dev is a go-to-market marketing agency for developer tools and AI platforms: strategy, technical content, SEO & AEO, distribution, newsletters, video and paid growth.',
    images: [
      {
        url: 'https://draft.dev/draft/og/about_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'About Draft.dev Technical Content Marketing Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About us - Draft.dev',
    description:
      'Draft.dev is a go-to-market marketing agency for developer tools and AI platforms: strategy, technical content, SEO & AEO, distribution, newsletters, video and paid growth.',
    images: ['https://draft.dev/draft/og/about_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/about' },
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

export default function About() {
  const schemaJsonLd = stringifySchemas(generateAboutPageSchemas())

  return (
    <>
      {schemaJsonLd.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}

      <AboutHero
        title="We help Developer Tools & AI Platforms grow and win"
        descriptionOne="Draft.dev is the growth partner for developer tools and AI platforms. We run content-powered go-to-market programs across strategy, technical content, SEO & AEO, distribution, newsletters, video, Reddit & Quora and paid growth, so developers, search engines and LLMs find your product and trust it."
        descriptionTwo="Let us help you build your technical go-to-market engine."
        imageSrc="/site/med-portrait/developers_draft_dev.jpg"
        imageAlt="Technical content development"
      />

      <main className="overflow-hidden">
        <What />
        {/* <Why
          title="What Makes Draft.dev Different?"
          features={[
            {
              title: 'A Sole Focus on Technical Audiences',
              description:
                'We work exclusively with companies aiming to reach software developers, data engineers, and DevOps practitioners. Our typical clients include Developer Relations or Developer Marketing teams or companies and startups that that have achieved at least a Series A funding.',
              linkText: 'How we build trust with technical audiences',
              linkHref: '/build-trust',
            },
            {
              title: 'Technical Expertise and Marketing Excellence',
              description:
                'We specialize in producing high-quality technical content, fast. From tutorials, to ebooks, landing pages, competitor comparisons, and more. We offer additional services to help you create a comprehensive content strategy and help building out your content roadmap.',
              linkText: 'How we predictably generate demand',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Content You Can Count On',
              description:
                'We create high-quality content engines. Fast turnaround times combined with subject-matter expert reviews ensure consistent output of expert technical content. Our core team includes experienced content marketers, software engineers and editors who make sure that every piece of content comes to you ready to publish.',
              linkText: 'What our clients say about our work',
              linkHref: '/case-studies',
            },
          ]}
        /> */}
        <AboutSteps
          title="How we work with you"
          subtitle="Our process is designed for speed and alignment. Three focused stages take you from initial discovery to your first deliverables within weeks."
          steps={[
            {
              number: '1',
              title: 'Discovery call',
              description:
                'Before we start, we learn where your business is today, who your audience is and what your goals are. Then we walk you through how we plan, deliver and report, so you know exactly what to expect from day one.',
            },
            {
              number: '2',
              title: 'Kickoff call',
              description:
                'We meet your main contact and schedule interviews with your leadership team to capture vision and thought leadership ideas. We also gather brand guidelines, positioning, ICPs, competitors, and access to your CMS and analytics.',
            },
            {
              number: '3',
              title: 'Deliverables',
              description:
                'We analyze your setup, define a strategy and roadmap, and start on the deliverables in your plan. Your first deliverables usually go live within 3 weeks. After that, we deliver weekly and meet monthly to report and adjust the strategy.',
            },
          ]}
        />
        <Team />
        <SocialProof title="A growth agency with a track record" />
        <FAQ
          className="py-12 sm:py-16"
          headingClassName="subheader-mobile-gradient sm:subheader-gradient"
          masonry
        />
      </main>
    </>
  )
}
