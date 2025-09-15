// page 4
import {
  Heading,
  Page,
} from '@/components/page-components/mega-guide/doc-blocks'
import { Guides } from '@/components/page-components/mega-guide/Guides'
import { BASE_PATH } from '@/components/page-components/mega-guide/nav-data'
import { Resources } from '@/components/page-components/mega-guide/Resources'
import type {
  GuideLink,
  ResourceLink,
  Section,
} from '@/components/page-components/mega-guide/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Understanding the Content Funnel - Draft.dev',
  description:
    'Map TOFU/MOFU/BOFU, build the right mix, and intentionally move readers toward product outcomes.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/technical-content/content-funnel',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Understanding the Content Funnel - Draft.dev',
    description:
      'Map TOFU/MOFU/BOFU, build the right mix, and intentionally move readers toward product outcomes.',
    images: [
      {
        url: '/draft/og/mega-guide/content-funnel.jpg',
        width: 1200,
        height: 630,
        alt: 'Understand and orchestrate the content funnel.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding the Content Funnel - Draft.dev',
    description:
      'Map TOFU/MOFU/BOFU, build the right mix, and intentionally move readers toward product outcomes.',
    images: ['/draft/og/mega-guide/content-funnel.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/technical-content/content-funnel',
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

export const sections: Array<Section> = [
  {
    id: 'orchestrating-content-through-the-funnel',
    title: 'Orchestrating Content Through the Funnel',
    offsetRem: 6,
  },
  { id: 'content-mix-strategy', title: 'Content Mix Strategy', offsetRem: 8 },
  {
    id: 'analyzing-your-content-and-content-mix',
    title: 'Analyzing your content and content mix',
    offsetRem: 8,
  },
  { id: 'intent-mapping', title: 'Intent mapping', offsetRem: 8 },
]

const nextGuides: GuideLink[] = [
  {
    slug: '/evergreen-content-strategy',
    name: 'Evergreen Content Strategy to drive consistent traffic',
    description: 'Durable traffic that compounds.',
  },
  {
    slug: '/viral-content',
    name: 'Viral Content Creation',
    description: 'Shareable spikes and how to harness them.',
  },
  {
    slug: '/social-media-marketing-plan-template',
    name: 'Social Media Marketing Plan and Template',
    description: 'Channel-specific playbooks and schedules.',
  },
]

const resources: ResourceLink[] = [
  {
    href: '/blog/how-to-map-content-to-funnel-stages',
    name: 'Mapping Content to Funnel Stages',
    description: 'A practical worksheet.',
  },
  {
    href: '/blog/internal-linking-for-funnel-movement',
    name: 'Internal Linking to Nudge Intent',
    description: 'Patterns that actually get clicks.',
  },
  {
    href: 'https://draft.dev/case-studies',
    name: 'Draft.dev Case Studies',
    description: 'What a full-funnel program looks like in practice.',
  },
]
export default function OrchestratingThroughFunnelPage() {
  return (
    <Page
      title="Understanding the Content Funnel"
      lead="Design a cohesive content journey that builds credibility with developers and moves them toward product adoption."
    >
      <p>
        Technical audiences demand content that demonstrates genuine expertise
        and addresses their specific challenges. Yet many companies struggle to
        create cohesive content strategies that both rank well and build
        credibility with developers and technical decision-makers. Being aware
        of your content mix and understanding where each piece fits in the
        funnel helps significantly when attempting to orchestrate user behavior
        and engineer for a journey from the top of the funnel to the bottom of
        the funnel, towards a product signup or a conversation with your Sales
        team.
      </p>

      <Heading id="orchestrating-content-through-the-funnel">
        Orchestrating Content Through the Funnel
      </Heading>

      <p>
        The content funnel is a concept that can be used to understand the
        readiness and intent of a reader. It consists of multiple stages.
      </p>

      <h3 className="mt-6">Top of funnel (Awareness)</h3>
      <p>
        High up, in the <strong>top of the funnel (TOFU)</strong> we have
        readers that are &quot;far away&quot; from your product (in terms of
        intent). They have yet to become aware of your actual product, they
        might not even know yet that they are facing a problem that they&apos;d
        want to resolve. This stage is called the <strong>Awareness</strong>{' '}
        stage.
      </p>

      <h3 className="mt-6">Middle of funnel (Consideration)</h3>
      <p>
        In the <strong>middle of the funnel (MOFU)</strong> your readers have
        started to understand the fundamentals around your space and product.
        They are realizing that they might have an inefficiency or a challenge
        within their business that should be resolved and that there are good
        ways to actually do that. They start considering the different ways,
        among those is your product/service. This stage is called the{' '}
        <strong>Consideration</strong> stage.
      </p>

      <h3 className="mt-6">Bottom of funnel (Decision)</h3>
      <p>
        In the <strong>bottom of the funnel (BOFU)</strong> readers realize that
        your product/service is the best solution to the challenges they are
        facing and they start to understand how to implement and use your
        product. This stage is called the <strong>Decision</strong> stage.
      </p>
      <p>
        The logical next step after leaving the bottom of the content funnel is
        to either get in touch with your team about a demo/discovery call, or to
        give your product a try, which means the readers are then turning into
        users of your product starting their journey in the{' '}
        <strong>product funnel</strong>.
      </p>
      <p>
        <strong>In short:</strong> Early on when running your content engine,
        you will probably want to raise awareness about your product offering.
        The best way to raise awareness is to produce high quality content,
        based on keyword research, for the top of the content funnel. This
        content will attract a wide array of people that don&apos;t have high
        intent. Yet.
      </p>
      <p>
        <strong>
          Yes, this still works in the age of AI Overviews and zero-click
          content
        </strong>
        . Certainly, a significant amount of traffic that previously would have
        gone to your website is now <strong>not</strong> arriving there due to
        AI Overviews on search engine results pages, or the search happening
        directly within an AI chatbot (or Google&apos;s &quot;AI Mode&quot;).
        That being said,{' '}
        <mark>
          <strong>
            if you conduct your keyword research well and you adhere to on-page
            SEO best practices, the explained approach will still drive
            consistent traffic to your website.
          </strong>
        </mark>
      </p>
      <p>
        At the beginning, it&apos;s about reeling in as many people as possible
        into your net. How to nudge them further down the funnel and how to
        monetize them is a challenge you will tackle later.
      </p>
      <p>
        <strong>First things first:</strong> People need to become aware of your
        product offering. Over time, you will want to build content pieces that
        nudge people downwards the content funnel towards the product funnel.
        But, at the beginning you&apos;ll want to have a predictable production
        of awareness-level content to drive consistent traffic from search
        engines to your blog.
      </p>
      <p>
        In the following sections, we&apos;ll offer an overview of content
        funnel stages and the types of content, how and why you should utilize
        them, and how you can produce enough of each type of content to
        predictably generate new leads that drive your business forward.
      </p>

      <Heading id="content-mix-strategy">Content Mix Strategy</Heading>

      <h3 className="mt-6 text-zinc-600">Balancing funnel stages</h3>
      <p>
        When starting with content creation, you might focus on producing{' '}
        <strong>awareness-level evergreen content</strong> that brings people
        into the <strong>top of your content funnel</strong> (more on evergreen
        content vs. spiky content in the upcoming sections). Let&apos;s assume
        you are working for a business in the data warehouse space. Your
        awareness-level articles will likely be high-level overviews and
        definitions of key industry terms like:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          &quot;What are the different types and benefits of data
          integrations&quot;
        </li>
      </ul>
      <p>
        In the era of AI, searchers will likely consume too basic top-funnel
        search queries directly in the AI overview or within the chatbot
        results. So try to find a good mix of &quot;generally interesting&quot;
        topics for your audience that are not too basic that a simple AI
        overview delivers all the information the reader needs.
      </p>
      <p>
        For example, instead of <i>&quot;What are system integrations?&quot;</i>{' '}
        we pick the above{' '}
        <i>
          &quot;What are the different types and benefits of data
          integrations&quot;
        </i>
        . This is not as vague, and also written exactly like a search query in
        an AI chatbot might be written. In this article, you could write about
        ETL (Extract, Transform, Load), Reverse ETL, ELT (Extract, Load,
        Transform), streaming, application integration, and more, covering many
        important keywords.
      </p>
      <p>
        Next, you might focus on{' '}
        <strong>consideration-level evergreen content</strong>. This type of
        content represents the <strong>middle of your content funnel</strong>{' '}
        and can be described as content that makes your readers realize they
        actually might have a problem they were not aware of that warrants
        solving. This could be content like:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          &quot;How data warehouses help you run your business more
          efficiently&quot;
        </li>
        <li>
          &quot;How connecting information from different data sources helps you
          understand your users better&quot;
        </li>
      </ul>
      <p>
        Last, you could focus on longer-tail keywords by writing{' '}
        <strong>decision-level evergreen content</strong>. These pieces will
        help guide customers who are already aware of the problem and have
        decided they&apos;d like to resolve it, so they represent the{' '}
        <strong>bottom of your content funnel</strong>. Examples might include:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          &quot;How to integrate Salesforce with &lt;our product&gt;&quot;
        </li>
        <li>
          &quot;Setting up your first data pipeline using &lt;our
          product&gt;&quot;
        </li>
      </ul>
      <p>
        When looking at these three stages, you might realize that generating a
        significant volume of traffic is harder the deeper you are into the
        content funnel. Getting lots of readers for awareness pieces is easier
        because the content covered is more &quot;generic&quot; - the topics
        relate to a multitude of audiences - but the more specific our content
        gets, the fewer people are searching for it.
      </p>
      <p>
        This is why having a good content mix is key. You should regularly
        monitor the performance of your content (especially traffic and time on
        page) in its respective funnel stages by running content audits to
        identify &quot;gaps&quot; in your funnel. This also means you need to be
        able to define where each piece you publish falls in the content funnel.
      </p>
      <p>
        <strong>
          What we have been seeing with more early stage{' '}
          <a
            href="https://draft.dev/case-studies"
            target="_blank"
            rel="noopener noreferrer"
          >
            clients of Draft.dev
          </a>
        </strong>
        : Early on, the founding team - working on the technical product itself
        - creates a few product tutorials, which end up being bottom funnel
        content. They do this because they need to write product documentation.
        Out of this product documentation they create product tutorials.
      </p>
      <p>
        Once they have some of these bottom funnel articles live, they approach
        Draft.dev to flesh out the rest of the funnel. We set up content plans,
        conduct research, and present them with suggested articles fitting to
        their current needs in the content funnel. This way, we slowly start
        orchestrating a journey that leads readers from top funnel pieces
        towards the bottom funnel product tutorials the founding team created.
      </p>

      <Heading id="analyzing-your-content-and-content-mix">
        Analyzing your content and content mix
      </Heading>

      <p>
        Let&apos;s revisit the example of the data warehouse company mentioned
        earlier. After auditing your published content and seeing where it fits
        in the buyer&apos;s journey, you might realize that you are lacking
        content aimed at the consideration phase (the middle of the funnel).
      </p>
      <p>
        You brainstorm a few ideas that fit into that stage, run keyword
        research, define headlines for a few articles, and start producing and
        optimizing these pieces for your target keywords. This leads you to
        create middle-of-funnel content like:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          &quot;Why your traditional data warehouse is not good enough
          anymore&quot;
        </li>
        <li>&quot;Why Reverse ETL is taking over&quot;</li>
      </ul>
      <p>
        You publish these pieces, and now you have a way to move customers
        through the <i>consideration</i> phase of the funnel.
      </p>

      <Heading id="intent-mapping">Intent mapping</Heading>

      <p>
        This process works, even with completely anonymous visitors, because you
        know that a reader has &quot;dropped into your funnel&quot; at a
        specific stage with a specific intent in mind. They entered a search
        term into their search engine of choice and ended up on one of your blog
        posts. You know which stage of the funnel that blog post is in, you have
        other relevant content pieces that you link to from it (ideally pushing
        the reader further down the funnel), and you can use those pieces to
        teach users about your product and eventually help them convert into a
        paying user.
      </p>
      <p>
        As mentioned earlier,{' '}
        <mark>
          <strong>creating a content engine is a science, not an art</strong>
        </mark>
        . Each piece of content you create should be aimed at a specific stage
        in the funnel. You have the power to orchestrate the journey your
        readers take and meet them with links to other content pieces and the
        best calls to action (CTAs).
      </p>
      <p>
        Creating evergreen content helps you maintain consistent output,
        establish your authority around a set of specific keywords, and gives
        you a collection of articles that can be transformed into your first
        gated asset. This process of content audit, keyword research, strategic
        content creation, internal backlinks, and intentional CTAs allows you to
        create a predictable content engine for your business.
      </p>

      <Guides basePath={BASE_PATH} items={nextGuides} />
      <Resources items={resources} />
    </Page>
  )
}
