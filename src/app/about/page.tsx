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
  title: 'About us', // Will become "About us - Draft.dev" with template
  description:
    'Draft.dev is a technical content marketing agency run by subject matter experts. Learn more about our mission to help tech companies create authentic technical content.',
  keywords:
    'about draft.dev, technical content marketing team, developer relations experts, content marketing agency team, karl hughes',
  openGraph: {
    title: 'About us - Draft.dev',
    description:
      'Draft.dev is a technical content marketing agency run by subject matter experts. Learn more about our mission to help tech companies create authentic technical content.',
    url: 'https://draft.dev/about',
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
    title: 'About us - Draft.dev',
    description:
      'Draft.dev is a technical content marketing agency run by subject matter experts.',
    images: ['https://draft.dev/draft/og/about_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/about',
  },
}

export default function About() {
  return (
    <>
      <MedHeader
        title="About Draft.dev"
        descriptionOne="Draft.dev is a technical content marketing agency focused on
          creating in-depth, technical content for companies in tech. We work
          with subject matter experts from around the world."
        descriptionTwo="Let us create technical tutorials, video tutorials, blog posts, and e-books for you."
      />

      <main className="overflow-hidden">
        <What />
        <Team />
        <Why
          title="What makes Draft.dev different?"
          features={[
            {
              title: 'A sole focus on technical audiences',
              description:
                'We work exclusively with companies that are trying to reach software developers, data engineers, and DevOps practitioners. Typically, our clients are Developer Relations or Developer Marketing teams at companies with 50+ employees or at least Series A funding.',
              linkText: 'How we build trust with technical audiences',
              linkHref: '/build-trust',
            },
            {
              title: 'Technical expertise and Marketing excellence',
              description:
                'We specialize in producing technical content (mostly tutorials and blog posts), but we can also help you create a content plan, come up with suitable topics, or execute on one-time content projects like ebooks.',
              linkText: 'How we predictably generate demand',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Content You Can Count On',
              description:
                'We create high-quality, technically-deep content. Subject-matter experts are assigned to each article, so every piece is detailed and authoritative. Our core team includes experienced engineers and editors who make sure that every piece of content comes to you ready to publish.',
              linkText: 'What our clients say about our work',
              linkHref: '/case-studies',
            },
          ]}
        />
        <SocialProof />
        <How
          title="How Draft.dev works with clients"
          subtitleBold=""
          subtitleRegular=""
          steps={[
            {
              number: '1',
              title: 'Discovery Call',
              description:
                'Before we begin working with a new client, we want to make sure we’re a good fit for you. In our 30-minute discovery session, we’ll ask you where your business is at, what your content goals are, and the type of content you’re looking to produce.',
            },
            {
              number: '2',
              title: 'Statement of Work and Timeline',
              description:
                ' We almost always have a backlog of new clients waiting to start, so once you’re ready to reserve a spot in our production calendar, we’ll send over an estimated timeline and statement of work. This allows us to ensure we have enough writers and editors ready to help maintain our rigorous quality standards, and that both parties are on the same page as far as the scope of work is concerned.',
            },
            {
              number: '3',
              title: 'Topic Strategy and Intake',
              description:
                'During the topic strategy phase, we’ll define your content goals, requirements, and the preferences of all stakeholders on your team. Your team will be able to provide examples of articles you like and any desired topic ideas you have in mind. All relevant information about your brand and content strategy is helpful to our Technical Content Specialists and can be incorporated into your content plan.',
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
