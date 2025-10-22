import { generateOrganizationSchema } from '@/app/lib/schema'
import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Team from '@/components/page-components/company/team'
import What from '@/components/page-components/company/what'
import How from '@/components/page-components/how'
import Why from '@/components/page-components/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'About Us - Draft.dev',
  description:
    'At Draft.dev, we build growth engines that compound and resonate with developers, search engines and LLMs. Our work has generated hundreds of thousands of leads for our clients.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/about',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'About us - Draft.dev',
    description:
      'At Draft.dev, we build growth engines that compound and resonate with developers, search engines and LLMs. Our work has generated hundreds of thousands of leads for our clients.',
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
      'At Draft.dev, we build growth engines that compound and resonate with developers, search engines and LLMs. Our work has generated hundreds of thousands of leads for our clients.',
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
  // Generate schemas appropriate for About page
  const organizationSchema = generateOrganizationSchema()

  // You could also create a custom AboutPage schema
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://draft.dev/about#webpage',
    url: 'https://draft.dev/about',
    name: 'About Draft.dev',
    description:
      'Learn about Draft.dev, a technical content marketing agency run by subject matter experts.',
    isPartOf: {
      '@id': 'https://draft.dev/#website',
    },
    about: {
      '@id': 'https://draft.dev/#organization',
    },
    mainEntity: {
      '@id': 'https://draft.dev/#organization',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />

      <MedHeader
        title="We help Developer Tools & Platforms grow and win"
        descriptionOne="At Draft.dev, we build growth engines that compound and resonate with developers, search engines and LLMs. Our work has generated hundreds of thousands of leads for our clients."
        descriptionTwo="Let us help you building your technical content growth engine."
      />

      <main className="overflow-hidden">
        <What />
        <Team />
        <Why
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
        />
        <SocialProof />
        <How
          title="How Draft.dev Works with Clients"
          subtitleBold=""
          subtitleRegular="At Draft.dev, we prioritize understanding your needs and ensuring a successful partnership. Below is a structured overview of our client engagement process, which outlines each step clearly and provides actionable outcomes."
          steps={[
            {
              number: '1',
              title: 'Discovery Call',
              description:
                "Before we begin working with a new client, we want to make sure we're a good fit for you. In our 30-minute discovery session, we'll ask you where your business is at, what your content goals are, and the type of content you're looking to produce.",
            },
            {
              number: '2',
              title: 'Statement of Work and Timeline',
              description:
                "We almost always have a backlog of new clients waiting to start, so once you're ready to reserve a spot in our production calendar, we'll send over an estimated timeline and statement of work. This allows us to ensure we have enough writers and editors ready to help maintain our rigorous quality standards, and that both parties are on the same page as far as the scope of work is concerned.",
            },
            {
              number: '3',
              title: 'Topic Strategy and Intake',
              description:
                "During the topic strategy phase, we'll define your content goals, requirements, and the preferences of all stakeholders on your team. Your team will be able to provide examples of articles you like and any desired topic ideas you have in mind. All relevant information about your brand and content strategy is helpful to our Technical Content Specialists and can be incorporated into your content plan.",
            },
          ]}
          imageSrc="/site/med-portrait/developers_draft_dev.jpg"
          imageAlt="Technical content development"
        />
        <LogosDark />
        <FAQ />
      </main>
    </>
  )
}
