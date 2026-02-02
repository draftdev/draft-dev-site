import { generateAboutPageSchemas, stringifySchemas } from '@/app/lib/schema'
import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import Team from '@/components/page-components/company/team'
import What from '@/components/page-components/company/what'
import How from '@/components/page-components/how'
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

      <MedHeader
        title="We help Developer Tools & Platforms grow and win"
        descriptionOne="At Draft.dev, we build growth engines that compound and resonate with developers, search engines and LLMs. Our work has generated hundreds of thousands of leads for our clients."
        descriptionTwo="Let us help you build your technical content growth engine."
      />

      <main className="overflow-hidden">
        <What />
        <LogosDark />
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
        <How
          title="How we work with you"
          subtitleBold=""
          subtitleRegular="Our process is designed for speed and alignment. Three focused stages take you from initial discovery to published content within weeks."
          steps={[
            {
              number: '1',
              title: 'Discovery call',
              description:
                "Before we begin working with a new client, we want to make sure we're a good fit for you. In our 30-minute discovery session, we'll ask you where your business is at, what your content goals are, and walk you through our content strategy, production, and promotion processes.",
            },
            {
              number: '2',
              title: 'Kickoff call',
              description:
                'We have a call with your primary contact and try to schedule 1-on-1 interviews with someone on your leadership team to extract vision and thought leadership content ideas. We also talk through nice-to-have information like product description, brand guidelines, positioning, ICPs, competitors and ideally get access to your CMS and analytics, if feasible.',
            },
            {
              number: '3',
              title: 'Content strategy, production, and output within 3 weeks',
              description:
                'Based on the information from the kickoff call we analyze your existing setup, define strategy and a roadmap, and start content production. You will usually have your first content pieces published within 3 weeks. We then execute on a cadence of weekly (content delivery) and monthly (reporting and strategy call) tasks to stay aligned with your current business goals and needs.',
            },
          ]}
          imageSrc="/site/med-portrait/developers_draft_dev.jpg"
          imageAlt="Technical content development"
        />
        <Team />
        <SocialProof />
        <FAQ />
      </main>
    </>
  )
}
