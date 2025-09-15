// page 5
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
  title: 'Evergreen Content Strategy to Drive Consistent Traffic - Draft.dev',
  description:
    'Evergreen vs spiky content, topic discovery, clusters, AI-era SEO, and refresh cycles for predictable growth.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/technical-content/evergreen-content-strategy',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Evergreen Content Strategy to Drive Consistent Traffic - Draft.dev',
    description:
      'Evergreen vs spiky content, topic discovery, clusters, AI-era SEO, and refresh cycles for predictable growth.',
    images: [
      {
        url: '/draft/og/mega-guide/evergreen-content-strategy.jpg',
        width: 1200,
        height: 630,
        alt: 'Evergreen technical content that compounds over time.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evergreen Content Strategy to Drive Consistent Traffic - Draft.dev',
    description:
      'Evergreen vs spiky content, topic discovery, clusters, AI-era SEO, and refresh cycles for predictable growth.',
    images: ['/draft/og/mega-guide/evergreen-content-strategy.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/technical-content/evergreen-content-strategy',
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
    id: 'what-makes-content-evergreen',
    title: 'What Makes Content Evergreen',
    offsetRem: 6,
  },
  {
    id: 'evergreen-content-production',
    title: 'Evergreen Content Production',
    offsetRem: 8,
  },
  {
    id: 'maintaining-evergreen-content',
    title: 'Maintaining Evergreen Content',
    offsetRem: 8,
  },
]

const nextGuides: GuideLink[] = [
  {
    slug: '/viral-content',
    name: 'Viral Content Creation',
    description: 'Balance spikes with durable compounding assets.',
  },
  {
    slug: '/content-calendar',
    name: 'Content Calendar Creation and Management',
    description: 'Ship on time; keep a healthy buffer.',
  },
  {
    slug: '/social-media-marketing-plan-template',
    name: 'Social Media Marketing Plan and Template',
    description: 'Distribute smartly across channels.',
  },
]

const resources: ResourceLink[] = [
  {
    href: 'https://draft.dev/learn',
    name: 'Draft.dev Learn Library',
    description: 'Developer-grade examples and guides.',
  },
  {
    href: '/blog/evergreen-content-brief-template',
    name: 'Evergreen Brief Template',
    description: 'Handy template to standardize briefs.',
  },
  {
    href: 'https://draft.dev/content-refreshes',
    name: 'How to Run Content Refreshes',
    description: '90–120 day refresh rhythm.',
  },
]

export default function EvergreenContentPage() {
  return (
    <Page
      title="Creating Evergreen Content That Drives Traffic"
      lead="Invest in timeless, well-structured technical resources that compound, rank, and earn AI citations."
    >
      <hr className="my-6" />
      <span className="text-lg font-semibold text-zinc-500">
        The What, Why, and Desired Result
      </span>

      <p className="mt-3">
        <strong>Key Metric:</strong>
      </p>
      <p>Number of evergreen posts published per month.</p>

      <p className="mt-2">
        <strong>Why it Matters:</strong>
      </p>
      <p>
        Evergreen content that is optimized for search engines will drive
        consistent, focused traffic to your site. This allows you to generate
        more predictable traffic compared to spiky content.
      </p>

      <p className="mt-2">
        <strong>Final Result:</strong>
      </p>
      <p>Predictable, high-converting traffic to your site.</p>
      <hr className="my-10" />

      <Heading id="what-makes-content-evergreen">
        What Makes Content Evergreen
      </Heading>

      <h3 className="mt-6 text-zinc-600">Evergreen vs. spiky content</h3>
      <p>
        Evergreen content is designed to rank highly on search engine results
        pages (SERPs) and being mentioned in AI Overviews and AI chatbots, thus
        attracting traffic over a long period of time. This content aims to be
        timeless, useful, search engine optimized, and regularly updated as
        information changes.
      </p>
      <p>
        While spiky content (covered later) helps drive a lot of awareness in a
        short period of time, most of the traffic it generates is fleeting.
        Evergreen content doesn&apos;t typically come out of the gate with a big
        bang, but traffic to each evergreen article grows over time as your site
        builds up domain authority and you get more backlinks.
      </p>
      <p>
        <mark>
          <strong>
            Evergreen content will drive{' '}
            <strong>significantly more focused and predictable traffic</strong>{' '}
            for your business, so you should start investing in it early.
          </strong>
        </mark>{' '}
        As mentioned before, especially for evergreen content, consistency is
        key. We talk about how to stay consistent in your content production in
        our eBook{' '}
        <a
          href="https://draft.dev/content-marketing-engine"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;How to Set Up a Content Marketing Engine in the Age of AI&quot;
        </a>
        .
      </p>
      <p>
        To see the effect of spiky vs. evergreen traffic, here&apos;s a graph
        showing unique users visiting a blog. We can clearly see when articles
        were published that created traffic spikes:
      </p>
      <p>
        There were a few spikes in the given time frame, but an especially
        successful one was created mid-August, with that article reaping in over
        15,000 page views in one day, but as you can see, the traffic to this
        article quickly died off.
      </p>
      <p>
        On the other hand, here&apos;s a graph of a piece of evergreen content
        from our{' '}
        <a
          href="https://draft.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Draft.dev blog
        </a>{' '}
        blog that was created with SEO best practices in mind:
      </p>
      <p>
        Ever since the article was published, its organic traffic has grown, and
        to this day it consistently brings in around 1,000 page views (between
        600-800 unique visitors) per month.
      </p>

      <h3 className="mt-8 text-zinc-600">Traffic patterns and growth curves</h3>
      <p>
        Now imagine having 20, 50, or 100 such articles, and you can see how the
        numbers add up. A consistent traffic source to your blog is great for
        driving awareness for your business, but it also provides you with a{' '}
        <strong>predictable top of the funnel.</strong>
      </p>
      <p>
        If you had 20 blog posts bringing in 200 unique visitors per week,
        that&apos;s 16,000 unique visitors per month! These 16,000 visitors see
        your calls-to-action, and a subset will convert into deeper stages of
        the funnel.
      </p>
      <p>
        The beauty of evergreen content is that
        <strong>
          {' '}
          once these blog posts are live and consistently generating organic
          traffic, you don&apos;t need to spend much more money or time on them.
        </strong>
      </p>
      <p>
        Of course, you&apos;ll have to{' '}
        <a
          href="https://draft.dev/content-refreshes"
          target="_blank"
          rel="noopener noreferrer"
        >
          keep the articles up-to-date and refresh them
        </a>{' '}
        every now and then. You will also consider spending time building
        backlinks, attracting social media traffic, and investing in other
        promotional tactics as this will help drive more traffic to your
        evergreen content.
      </p>

      <Heading id="evergreen-content-production">
        Evergreen Content Production
      </Heading>

      <h3 className="mt-6 text-zinc-600">Topic discovery methods</h3>
      <p>
        Creating evergreen content involves multiple stages of research: from
        content discovery via internal interviews, to community research, to
        keyword research that help you recognize topics that go well together,
        to defining specific content clusters.
      </p>
      <p>
        Just like the other concepts mentioned in our books and webinars,
        content discovery is a science, not an art. To discover suitable content
        ideas, look at keyword volume, keyword difficulty, content that
        competitors or other relevant players in your space published, and more.
      </p>

      <h3 className="mt-6 text-zinc-600">Content clusters and interlinking</h3>
      <p>
        &quot;Content clusters&quot; are packages of articles that are produced
        in a specific way to help you achieve strong SERP (search engine results
        pages) placements for your most important keywords. They are composed of
        an &quot;umbrella article&quot; and multiple &quot;sub-articles.&quot;
      </p>
      <p>
        Each of these evergreen articles can link to all other articles in the
        content cluster (the &quot;sub-articles&quot;), while your main piece
        (the &quot;umbrella article&quot;) will be the overview that links
        &quot;down&quot; to all other sub-articles. These, in turn, link back to
        the umbrella article.
      </p>
      <p>
        This system of intentionally interlinking articles helps readers
        discover more of your content and move further down the funnel. It also
        helps search and AI engines understand how content on your site is
        related and can help improve topical authority and can help boost each
        individual article&apos;s rank on SERPs.
      </p>
      <p>
        Because evergreen content generally covers content higher up in the
        funnel it can often be outsourced to a third party. If you don&apos;t
        have internal content contributors available or lack the specialized
        expertise to produce specific content, working with freelance writers or
        a content agency is a good option. Draft.dev specifically specializes
        very narrowly on content for software developers, written by subject
        matter experts who are practicing software engineers in the industry.
      </p>
      <p>
        Your team may want to cover certain key pieces, but many businesses lean
        on external production for the bulk of their evergreen content.
      </p>

      <h3 className="mt-6 text-zinc-600">SEO best practices for the AI era</h3>
      <p>
        While search engine optimization is another big topic, there are a few
        basics you should pay attention to when producing and publishing
        evergreen content:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          Your post must not be too short. Very short articles (less than 500
          words) are seen as &quot;low-quality content&quot; by Google and will
          typically not be ranked highly.
        </li>
        <li>
          Your main headline and sub-headlines should be keyword optimized.
        </li>
        <li>Your focus keyword should be mentioned in the first paragraph.</li>
        <li>
          Include an image in the first third of your article (here are some
          places for{' '}
          <a
            href="https://draft.dev/learn/free-stock-images"
            target="_blank"
            rel="noopener noreferrer"
          >
            free stock photos
          </a>
          ).
        </li>
        <li>
          Use &quot;alt&quot; tags on images to help search engines understand
          them.
        </li>
        <li>
          Make sure your article is readable (paragraph structure, emphasis,
          bold, headlines, etc.).
        </li>
        <li>
          Link to helpful, external resources that are not on your domain.
        </li>
        <li>
          Utilize meta-tags that can help Google&apos;s crawler better
          understand what your page is about.
        </li>
      </ul>
      <p>
        By regularly publishing SEO-friendly content that follows EETA
        (Experience, Expertise, Authoritativeness, and Trustworthiness)
        principles, and following the above best practices, AI and search
        engines will start to see your site as a reliable source of information.
      </p>

      <Heading id="maintaining-evergreen-content">
        Maintaining Evergreen Content
      </Heading>

      <h3 className="mt-6 text-zinc-600">Content refresh cycles</h3>
      <p>
        <mark>
          <strong>
            The value of each piece of evergreen content compounds over time as
            you add more content
          </strong>
        </mark>
        , so you should be publishing it much more frequently than spiky
        content.
      </p>
      <p>
        Early on, try to publish an evergreen article every two weeks, but
        increase that cadence to once per week (or more) if you can. Remember
        though, you need to maintain a buffer of content that&apos;s ready to
        publish, have the capacity to work on more topic discovery, and have
        enough time to publish and promote each piece of content.
      </p>
      <p>
        Here is a screenshot of the Trello content calendar shown in our eBook{' '}
        <a
          href="https://draft.dev/content-marketing-engine"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;How to Set Up a Content Marketing Engine in the Age of AI&quot;
        </a>
        :
      </p>
      <p>
        In this calendar, the team is prepared to publish three to four articles
        per week. Don&apos;t expect to get to that kind of output early on - it
        takes time to build a buffer like this - but the predictability and
        peace of mind it provides are well worth it.
      </p>

      <h3 className="mt-6 text-zinc-600">Keeping evergreen content relevant</h3>
      <p>
        Over time, even your best pieces of evergreen content will start to lose
        traffic. Usually, you can fix this by updating them when information
        becomes outdated or incorrect. Doing regular content audits of your
        existing content can help you identify articles that need to be
        refreshed, content interlinking opportunities available, and new gated
        assets that could be a good fit for a specific article.
      </p>

      <h3 className="mt-6 text-zinc-600">Performance monitoring</h3>
      <p>
        Evergreen content is targeted to specific search terms, so when a
        visitor finds a piece of evergreen content, they are likely proactively
        searching for that topic. Such visitors are, therefore, more likely to
        be part of your target market than visitors drawn in from spiky posts.
      </p>
      <p>
        Take the spiky traffic example from earlier. Is it possible that the
        business got some new customers out of the mid-August spike? Sure,
        it&apos;s possible, but they probably get much higher conversion rates
        from users that use search terms specific to their product or problem
        space.
      </p>
      <p>
        With evergreen content, your call to action can be much more direct. You
        can push readers to start a free trial, schedule a sales call, or
        download an eBook. Because these users are actively searching for
        something and your article answers that query, it is much easier to
        connect the content to the actual product or service you are selling. We
        will be talking more about steering your readers through the content
        funnel and nudging them further &quot;down&quot; towards your product in
        the next section.
      </p>
      <p>
        Evergreen content also helps you manage your content funnel and content
        mix better than spiky content.
      </p>

      <Guides basePath={BASE_PATH} items={nextGuides} />
      <Resources items={resources} />
    </Page>
  )
}
