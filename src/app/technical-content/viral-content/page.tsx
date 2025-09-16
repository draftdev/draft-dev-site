// page 6
import {
  Heading,
  Page,
} from '@/components/page-components/mega-guide/doc-blocks'
import { Guides } from '@/components/page-components/mega-guide/Guides'
import { BASE_PATH } from '@/components/page-components/mega-guide/nav-data'
import type { GuideLink } from '@/components/page-components/mega-guide/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Viral Content Creation - Draft.dev',
  description:
    'What spiky content is, how to create it responsibly, and how to leverage spikes for retargeting, backlinks, and brand lift.',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/technical-content/viral-content',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Viral Content Creation - Draft.dev',
    description:
      'What spiky content is, how to create it responsibly, and how to leverage spikes for retargeting, backlinks, and brand lift.',
    images: [
      {
        url: '/draft/og/mega-guide/viral_content_og_draftdev.jpg',
        width: 1200,
        height: 630,
        alt: 'Create spiky, viral content and harness traffic spikes.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viral Content Creation - Draft.dev',
    description:
      'What spiky content is, how to create it responsibly, and how to leverage spikes for retargeting, backlinks, and brand lift.',
    images: ['/draft/og/mega-guide/viral_content_og_draftdev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: {
    canonical: 'https://draft.dev/technical-content/viral-content',
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

const nextGuides: GuideLink[] = [
  {
    slug: '/social-media-marketing-plan-template',
    name: 'Social Media Marketing Plan and Template',
    description: 'Amplify reach without being spammy.',
  },
  {
    slug: '/evergreen-content-strategy',
    name: 'Evergreen Content Strategy to drive consistent traffic',
    description: 'Turn spikes into sustained growth.',
  },
  {
    slug: '/content-funnel',
    name: 'Understanding the Content Funnel',
    description: 'Place spikes in a larger journey.',
  },
]

// const resources: ResourceLink[] = [
//   {
//     href: '/blog/promo-checklist-for-spiky-posts',
//     name: 'Spiky Post Promo Checklist',
//     description: 'Everything to do in the first 48 hours.',
//   },
//   {
//     href: 'https://news.ycombinator.com/newest',
//     name: 'Where to Submit: HN',
//     description: 'If it fits the community—share wisely.',
//   },
//   {
//     href: 'https://ahrefs.com/blog/',
//     name: 'Backlink Prospecting Tactics',
//     description: 'Earn links, don’t beg for them.',
//   },
// ]

export default function SpikyContentPage() {
  return (
    <Page
      title="Creating Viral Spiky Content"
      lead="Engineer shareable, timely pieces—and turn short-lived spikes into lasting value via retargeting and links."
    >
      <hr className="my-6" />
      <span className="text-lg font-semibold text-zinc-500">
        The What, Why, and Desired Result
      </span>
      <p className="mt-3">
        <strong>Key Metric:</strong>
      </p>
      <p>
        Number of spiky posts published per quarter, spikes created per quarter.
      </p>
      <p className="mt-2">
        <strong>Why it Matters:</strong>
      </p>
      <p>
        Spiky content will drive a high number of new unique visitors to your
        site in a very short time frame. Use these traffic spikes to serve
        retargeting ad impressions to visitors.
      </p>
      <p className="mt-2">
        <strong>Final Result:</strong>
      </p>
      <p>
        Higher brand awareness, a refilled retargeting audience, and new organic
        backlinks.
      </p>
      <hr className="my-10" />

      <Heading id="understanding-spiky-content">
        Understanding Spiky Content
      </Heading>

      <h3 className="mt-6 text-zinc-600">What is spiky content?</h3>
      <p>
        “Spiky” content is designed to be widely shared or go “viral.” The goal
        is that a certain percentage of spiky posts will be picked up on
        Twitter/X, LinkedIn, Reddit, Facebook Groups, Hacker News, Lobste.rs,
        industry newsletters, or whatever channel is most appropriate for your
        audience.
      </p>
      <p>
        We call these channels <i>multiplicators</i>.{' '}
        <strong>
          Multiplicators are channels that you can tap into to get your content
          in front of a much larger audience
        </strong>
        . These channels consistently work on increasing their audience reach as
        it is part of their business model.
      </p>
      <p>
        Let&apos;s take an industry newsletter as an example. Most newsletter
        businesses rely on selling sponsorship slots or ads within their
        newsletters to advertisers who are looking to reach a very targeted
        audience. The more subscribers the newsletter has, the greater the reach
        for potential advertisers and the more expensive the sponsorship slot.
      </p>
      <p>
        As you might imagine, it&apos;s in the newsletter curator&apos;s best
        interest to increase their subscriber count (audience size), so most do
        this by consistently serving high-quality content to their subscribers.
      </p>
      <p>
        Of course, you can buy sponsorship slots in a newsletter (for example,
        you can link to gated assets to obtain a &quot;direct route&quot; to
        turning someone into a &quot;known name&quot; in your database), but you
        can also try getting some of your blog posts{' '}
        <strong>organically placed</strong> in their newsletter. Assuming your
        content is relevant, interesting, and well-written, the newsletter
        curator might include it organically.
      </p>
      <p>
        When this happens, you might get a huge boost in traffic for a short
        period of time after the newsletter shares your piece. This traffic
        spike is the goal of your spiky content.
      </p>

      <h3 className="mt-8 text-zinc-600">Publish one spiky post per month</h3>
      <p>
        A good goal is to publish one new spiky piece of content per month.
        Trying to get something to &quot;go viral&quot; is very hard, so you
        might assume that one in three will actually &quot;take off.&quot;
        We&apos;ll show you how these numbers work out later in this section.
      </p>
      <p>
        Below is an example of what these &quot;spikes&quot; will look like in
        your Google Analytics account.
      </p>
      <p>
        In this example, our client published blog posts that created some
        smaller spikes in November, January, March, and May, before publishing
        an article that created a significant spike in August. This big spike
        brought in over 15,000 page views in one day alone!
      </p>

      <h3 className="mt-8 text-zinc-600">Risk vs. reward</h3>
      <p>
        You&apos;ll see the most sustainable, long-term value from your
        evergreen content, but by augmenting it with spikes that help build
        brand awareness and fill up your retargeting audiences, you&apos;ll
        create a healthy, scalable, predictable content engine.
      </p>

      <Heading id="creating-spiky-content">Creating Spiky Content</Heading>

      <h3 className="mt-6 text-zinc-600">Understanding your target market</h3>
      <p>
        Not every post you create will go viral, but some things have a higher
        chance than others.{' '}
        <strong>
          Timely, polarizing, opinionated, and personal content tends to improve
          your chances
        </strong>
        . Most big brands avoid weighing in on controversial topics, so if
        you&apos;re willing to swim upstream, you have the opportunity to stand
        out by making your stance known.
      </p>
      <p>There are three key factors in producing successful spiky content:</p>
      <p>
        First, it is an advantage to know what people in your target market are
        talking about and what resonates with them. This makes it hard to
        outsource this kind of content or hire a general content writer to
        produce it. Specialized agencies (like{' '}
        <a href="https://draft.dev">Draft.dev</a> for technical content) or
        ghostwriters might be able to help though.
      </p>

      <h3 className="mt-6 text-zinc-600">Writing with authority</h3>
      <p>
        Second, it helps when this content comes from someone with authority and
        an existing network. This is why founders, executives, and influencers
        (minor celebrities in their sphere) usually have the best chance at
        producing spiky content.
      </p>

      <h3 className="mt-6 text-zinc-600">Controversial vs. valuable content</h3>
      <p>
        Finally, it&apos;s important to remember that these are posts created
        for humans. Don&apos;t worry too much about search engine optimization
        (SEO) or keywords for this content, but instead, focus on writing them
        with distribution and &quot;shareability&quot; in mind. Then, invest
        time sharing and promoting the post across the right channels.
      </p>
      <p>
        Of course, you have to make sure that your content aligns with your core
        values. For example, you might avoid writing about a direct
        competitor&apos;s recent outage while touting your 99.99%+ uptime
        guarantee, as that kind of controversy goes against your values. Some
        businesses may feel this kind of direct attack is okay, but others
        won&apos;t.
      </p>
      <p>
        Jeff Hunter, the co-founder of AnyList, wrote an article in 2020 titled,{' '}
        <a href="https://blog.anylist.com/2020/06/sign-in-with-apple/">
          Why AnyList Won&apos;t Be Supporting Sign In with Apple
        </a>
        .
      </p>
      <p>
        The post was timely - people were talking about{' '}
        <a href="https://www.theverge.com/2020/6/22/21298552/apple-hey-email-app-approval-rules-basecamp-launch">
          Apple&apos;s feud with Hey.com
        </a>{' '}
        at the time - and intentionally controversial. It hit the front page of
        Hacker News (a website popular with startup founders and tech
        journalists) with{' '}
        <a href="https://news.ycombinator.com/item?id=23681982">
          over 1000 upvotes
        </a>{' '}
        and netted their domain hundreds of new backlinks, according to
        ahrefs.com. Being featured on the Hacker News front page usually drives
        tens of thousands of visitors.
      </p>

      <Heading id="leveraging-traffic-spikes">
        Leveraging Traffic Spikes
      </Heading>

      <h3 className="mt-6 text-zinc-600">Retargeting audience building</h3>
      <p>
        Capturing big traffic spikes in retargeting audiences is an incredibly
        valuable tool to increase brand awareness. As described in{' '}
        <a href="https://draft.dev/content-marketing-engine">
          &quot;How to Set Up a Content Marketing Engine in the Age of AI&quot;
        </a>
        , retargeting lets you serve ads to your visitors as they browse other
        websites within a specified timeframe.
      </p>
      <p>
        By consistently creating traffic spikes every quarter, you&apos;ll have
        a new pool of users to serve retargeting ads to. This tactic allows you
        to reach these readers for weeks with ad impressions,{' '}
        <strong>
          making your single piece of content worth much more than the few
          minutes they spend on-site reading it
        </strong>
        .
      </p>
      <p>
        Say a reader in your target audience is subscribed to a specific
        newsletter (your multiplicator), and they see an interesting article
        featured in the newsletter. They click on it and end up on your blog. If
        they&apos;ve visited your blog before and read other interesting posts,
        they might think, &quot;Ahh, that&apos;s another good article from
        &lt;Your Company&gt;.&quot;
      </p>
      <p>
        They don&apos;t necessarily even know what your company does yet, but
        they occasionally read your articles. This is where retargeting ads
        start to shine.
      </p>
      <p>
        You can create a simple graphic that shows your logo, company name, and
        tagline to serve as a retargeting ad to your audience. When readers
        visit other websites, they will see your company&apos;s logo and start
        to recognize it. They also see the tagline, which makes them aware of
        what your company actually does. Instead of just consuming your content
        and then leaving, they can decide whether your service is something they
        need or want to learn more about.
      </p>
      <p>
        <strong>
          <mark>
            The great thing about retargeting ads is that you don&apos;t pay for
            impressions (just clicks), so retargeting allows you to build brand
            awareness without necessarily spending a lot of money.
          </mark>
        </strong>
      </p>

      <h3 className="mt-6 text-zinc-600">Retargeting time window</h3>
      <p>
        On Google Ads, you can choose to retarget users for up to 540 days. We
        recommend going for 90 days at the beginning. You might think even 90
        days is aggressive, but when you&apos;re trying to establish awareness
        in the early days, a long retargeting window is okay.
      </p>
      <p>
        Mature brands can shorten their retargeting duration as they have
        already created base awareness and might have the means to publish spiky
        blog posts more frequently. They might also focus their retargeting ads
        on different goals like lead creation by advertising a gated asset.
      </p>
      <p>
        Your goal is to generate a new spiky article before the 90-day
        retargeting window from the previous article expires. Of course, you
        can&apos;t assume that every one of your spiky blog posts will get
        picked up by a multiplicator (like an industry newsletter), but if 1 in
        3 does, you would need to publish one spiky blog post per month (3x30 =
        90 days).
      </p>
      <p>
        If you set up an email signup form, you&apos;re also likely to get a lot
        of email signups during traffic spikes. Even if these users aren&apos;t
        your ideal customers, you can use a{' '}
        <a href="https://mailchimp.com/marketing-glossary/drip-campaign/">
          drip campaign
        </a>{' '}
        or regular email newsletter to make them aware of what you do and
        qualify them.
      </p>
      <p>
        Before publishing a spiky blog post, make sure to{' '}
        <strong>think about the ideal calls to action on the article</strong>.
        These readers might know what you do, and they might not be interested
        in it yet, so asking them to immediately sign up or &quot;talk to
        sales&quot; is probably not the best choice.
      </p>
      <p>
        You could create special offers or calls to action on each spiky post to
        improve your signup rate, but it is much easier to offer a gated asset
        that gets readers onto your email list.
      </p>
      <p>
        This call to action should appeal to the{' '}
        <strong>&quot;most common denominator&quot;</strong> for your audience,
        so the downloadable asset should be an awareness (top of the funnel) or
        consideration (middle of the funnel) piece of content.
      </p>

      <h3 className="mt-6 text-zinc-600">Backlink generation</h3>
      <p>
        Finally, spiky posts will attract backlinks. Other blogs and newsletters
        look to social media to source content, so you&apos;ll see a residual
        traffic increase for days or weeks after your initial spike.
      </p>
      <p>
        External backlinks to your spiky content from quality sources (i.e.,
        domains with high domain rating) will help raise your domain rating.
        This allows your other blog posts and product landing pages to rank
        higher (assuming they&apos;re all served on the same domain and not a
        subdomain or an entirely different domain).
      </p>

      <h3 className="mt-6 text-zinc-600">Brand awareness amplification</h3>
      <p>
        You&apos;ll see the most sustainable, long-term value from your
        evergreen content, but by augmenting it with spikes that help build
        brand awareness and fill up your retargeting audiences, you&apos;ll
        create a healthy, scalable, predictable content engine.
      </p>

      <Guides basePath={BASE_PATH} items={nextGuides} />
      {/* <Resources items={resources} /> */}
    </Page>
  )
}
