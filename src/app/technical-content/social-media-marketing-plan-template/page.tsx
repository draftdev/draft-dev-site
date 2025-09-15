// page 7
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
  title: 'Social Media Marketing Plan and Template',
  description:
    'Platform-specific strategies for Twitter/X, LinkedIn, Facebook, and visual platforms to promote technical content effectively.',
}

export const sections: Array<Section> = [
  {
    id: 'platform-specific-content-promotion-strategies',
    title: 'Platform-Specific Content Promotion Strategies',
    offsetRem: 6,
  },
  {
    id: 'content-mix-by-channel',
    title: 'Content Mix by Channel',
    offsetRem: 8,
  },
  { id: 'visual-platforms', title: 'Visual Platforms', offsetRem: 8 },
]

const nextGuides: GuideLink[] = [
  {
    slug: '/content-calendar',
    name: 'Content Calendar Creation and Management',
    description: 'Schedule campaigns with your publishing rhythm.',
  },
  {
    slug: '/viral-content',
    name: 'Viral Content Creation',
    description: 'Design spikes; prep distribution.',
  },
  {
    slug: '/evergreen-content-strategy',
    name: 'Evergreen Content Strategy to drive consistent traffic',
    description: 'Anchor social with durable resources.',
  },
]

const resources: ResourceLink[] = [
  {
    href: '/blog/social-snippet-templates',
    name: 'Social Post Snippet Templates',
    description: 'Copy/paste formats that perform.',
  },
  {
    href: '/blog/utm-builder',
    name: 'UTM Builder Spreadsheet',
    description: 'Track channel attribution cleanly.',
  },
  {
    href: 'https://buffer.com/library/social-media-calendar/',
    name: 'Social Calendar Tactics',
    description: 'Useful patterns and cadence tips.',
  },
]

export default function SocialDistributionPage() {
  return (
    <Page
      title="Technical Content Distribution and Promotion Across Social Channels"
      lead="Playbooks for promoting technical content on X/Twitter, LinkedIn, Facebook—and how to approach Instagram/TikTok/Shorts."
    >
      <p>
        As one of Marketing&apos;s main goals is to attract new people to our
        products and gather their contact information, social media promotions
        play a big part in our efforts to achieve this.
      </p>
      <p>
        Even if we don&apos;t have a vast amount of blog posts or downloadable
        assets readily available at our disposal this guide can be very helpful
        as it walks through how to use what we have to our best abilities.
      </p>
      <p>
        We will walk through a simple framework on how to utilize potentially
        existing downloadable assets and orchestrate some simple social media
        playbooks. For the sake of keeping this document precise, we will mainly
        focus on organic social media traffic (only briefly going over paid ads
        traffic like &quot;boosting&quot; posts).
      </p>

      <Heading id="platform-specific-content-promotion-strategies">
        Platform-Specific Content Promotion Strategies
      </Heading>

      <p>
        Let&apos;s assume we consider Twitter, Facebook, and LinkedIn as our
        main social media channels. Different Personas are consuming these
        social media platforms in different ways. For example, it&apos;s fair to
        assume that a software developer trying to figure out how to get into
        the world of Kubernetes will be browsing for information much more on
        Twitter (following peers and relevant people in the space and trying to
        read articles they wrote) as opposed to browsing Facebook. On the other
        hand, a C-Level Upper Management Persona might consume information on
        LinkedIn but is not looking for &quot;What is Helm&quot; content, but is
        looking for ROI and Workflow Automation. In short: You&apos;ll want
        different content assets for different personas for different social
        media channels.
      </p>
      <p>
        Following are a few examples that we have implemented with clients that
        have seen good results. Keep in mind, your company and its audience is
        unique. Trial and error is the name of the game. Especially when we talk
        about frequency and amount of posts. One company might have an audience
        that gets very annoyed with 3 tweets per day, another company has an
        audience that is very much ok with 20 tweets per day (because eg. they
        are more globally active and have reach on all continents and timezones
        as opposed to the aforementioned company).
      </p>
      <p>
        Our examples assume a somewhat mature content repository. Start by
        tracking what times your audience is most active and adjust accordingly.
      </p>

      <h3 className="mt-6 text-zinc-600">
        Twitter/X Promotion Schedule Example
      </h3>

      <p>
        Let&apos;s assume we can send 21 tweets per week without starting to
        annoy people.
      </p>
      <p>
        In order not to only send people to gated assets, our social media
        content mix on Twitter could be:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>9 tweets per week about gated content assets</li>
        <li>
          12 tweets per week about our company&apos;s Top-Funnel and Mid-Funnel
          blog content
          <ul className="ml-6 list-disc space-y-1">
            <li>
              In these blog posts, of course, you should link to assets and
              product pages that are further down the funnel, closer to your
              product
            </li>
          </ul>
        </li>
      </ul>

      <h4 className="mt-4 font-semibold">
        A simple Twitter gated assets schedule
      </h4>
      <p>9 Tweets per week for gated assets could be split up into:</p>
      <ul className="ml-6 list-disc space-y-2">
        <li>3 tweets for 3 different assets per week</li>
        <li>
          Tuesday, Wednesday, Friday, Sunday
          <ul className="ml-6 list-disc space-y-1">
            <li>
              Tuesday
              <ul className="ml-6 list-disc space-y-1">
                <li>Asset 1: tweet 9am PST,</li>
                <li>Asset 1: tweet 2:40pm PST</li>
              </ul>
            </li>
            <li>
              Wednesday
              <ul className="ml-6 list-disc space-y-1">
                <li>Asset 2: tweet at 9:20am PST</li>
                <li>Asset 1: tweet at 12:10 pm PST</li>
                <li>Asset 3: Tweet at 3pm PST</li>
              </ul>
            </li>
            <li>
              Friday
              <ul className="ml-6 list-disc space-y-1">
                <li>Asset 3: Tweet at 9am PST</li>
                <li>Asset 2: Tweet at 2pm PST</li>
              </ul>
            </li>
            <li>
              Sunday
              <ul className="ml-6 list-disc space-y-1">
                <li>Asset 3: Tweet at 10:20am PST</li>
                <li>Asset 2: Tweet at 3pm PST</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h4 className="mt-4 font-semibold">
        A simple Twitter blog content schedule
      </h4>
      <p>
        The other 12 tweets can be used to filling up the spaces around our
        gated asset promotions, for example:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          Monday
          <ul className="ml-6 list-disc space-y-1">
            <li>3 tweets</li>
          </ul>
        </li>
        <li>
          Tuesday
          <ul className="ml-6 list-disc space-y-1">
            <li>1 tweet</li>
          </ul>
        </li>
        <li>
          Thursday
          <ul className="ml-6 list-disc space-y-1">
            <li>3 tweets</li>
          </ul>
        </li>
        <li>
          Friday
          <ul className="ml-6 list-disc space-y-1">
            <li>1 tweet</li>
          </ul>
        </li>
        <li>
          Saturday
          <ul className="ml-6 list-disc space-y-1">
            <li>3 tweets</li>
          </ul>
        </li>
        <li>
          Sunday
          <ul className="ml-6 list-disc space-y-1">
            <li>1 tweets</li>
          </ul>
        </li>
      </ul>

      <h3 className="mt-8 text-zinc-600">
        LinkedIn Promotion Schedule Example
      </h3>
      <p>On LinkedIn, you could post 1 or 2 MOFU/BOFU assets per week.</p>
      <p>
        For LinkedIn, boosted posts can make a lot of sense, especially for
        posts that highlight ebooks or upcoming webinars. The targeting
        capabilities are very precise. We recommend targeting by persona,
        location, company size, and even specific companies. This precision
        makes LinkedIn ads particularly cost-effective for B2B gated assets
        because it&apos;s likely you&apos;re reaching exactly the
        decision-makers you want.
      </p>
      <p>
        <strong>LinkedIn boosting strategy:</strong> You can start with as
        little as $10 for a boosted post. Target companies similar to your
        existing customers, and focus on job titles that match your personas.
        The cost per lead on LinkedIn tends to be higher than other platforms,
        but the lead quality is usually significantly better.
      </p>

      <h4 className="mt-4 font-semibold">
        A simple LinkedIn gated assets schedule
      </h4>
      <p>2 posts per week for MOFU/BOFU assets:</p>
      <ul className="ml-6 list-disc space-y-2">
        <li>Asset focus: 2 different bottom-funnel assets per week</li>
        <li>
          Wednesday and Friday posting days
          <ul className="ml-6 list-disc space-y-1">
            <li>
              Wednesday
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Asset 1: post at 8:30am PST (morning professional browsing)
                </li>
              </ul>
            </li>
            <li>
              Friday
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Asset 2: post at 11:00am PST (late morning, planning for next
                  week)
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h4 className="mt-4 font-semibold">
        A simple LinkedIn thought leadership schedule
      </h4>
      <p>
        2-3 additional posts per week for company announcements and executive
        content:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          Tuesday
          <ul className="ml-6 list-disc space-y-1">
            <li>
              1 post: Industry insights or executive thought piece at 9:00am PST
            </li>
          </ul>
        </li>
        <li>
          Thursday
          <ul className="ml-6 list-disc space-y-1">
            <li>
              1 post: Company announcement, milestone, or team update at 10:30am
              PST
            </li>
          </ul>
        </li>
        <li>
          Sunday (optional)
          <ul className="ml-6 list-disc space-y-1">
            <li>
              1 post: Weekly industry roundup or forward-looking content at
              7:00pm PST (Sunday evening planning time)
            </li>
          </ul>
        </li>
      </ul>

      <h4 className="mt-4 font-semibold">LinkedIn boosted posts</h4>
      <ul className="ml-6 list-disc space-y-2">
        <li>You can boost the Wednesday gated asset post with some budget</li>
        <li>
          You can boost major company announcements (funding, product launches)
          with higher budget
        </li>
        <li>Ideally, run boosts for multiple days</li>
      </ul>

      <h3 className="mt-8 text-zinc-600">
        Facebook Promotion Schedule Examples
      </h3>
      <p>
        On Facebook, you should have a lower frequency than on Twitter. Posting
        2 things per day on your wall will be annoying. You might rather want to
        go for 3 to 5 posts per week.
      </p>

      <h4 className="mt-4 font-semibold">
        A simple Facebook gated assets schedule
      </h4>
      <p>2 posts per week for gated assets:</p>
      <ul className="ml-6 list-disc space-y-2">
        <li>Asset rotation: 2 different assets per week</li>
        <li>
          Tuesday, Friday
          <ul className="ml-6 list-disc space-y-1">
            <li>
              Tuesday: Asset 1 - post at 1:00pm PST (lunch break browsing time)
            </li>
            <li>
              Friday: Asset 2 - post at 3:30pm PST (end-of-week, people checking
              social before weekend)
            </li>
          </ul>
        </li>
      </ul>

      <h4 className="mt-4 font-semibold">
        A simple Facebook company/culture content schedule
      </h4>
      <p>2 to 3 additional posts per week focusing on the human side:</p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          Monday
          <ul className="ml-6 list-disc space-y-1">
            <li>
              1 post: Team spotlight or behind-the-scenes content at 10:00am PST
            </li>
          </ul>
        </li>
        <li>
          Wednesday
          <ul className="ml-6 list-disc space-y-1">
            <li>
              1 post: Company culture or employee achievement at 2:00pm PST
            </li>
          </ul>
        </li>
        <li>
          Thursday
          <ul className="ml-6 list-disc space-y-1">
            <li>1 post: Industry commentary or opinion piece at 11:30am PST</li>
          </ul>
        </li>
        <li>
          Saturday
          <ul className="ml-6 list-disc space-y-1">
            <li>
              1 post: Lighter content, company news, or community engagement at
              12:00pm PST
            </li>
          </ul>
        </li>
      </ul>

      <p>
        Remember, Facebook works best when you&apos;re showing the human side of
        your company. People connect with people, not logos. Share
        behind-the-scenes content, employee spotlights, and company culture
        alongside your gated assets.
      </p>

      <Heading id="content-mix-by-channel">Content Mix by Channel</Heading>

      <p>
        <strong>
          <mark>
            The goal is to schedule a consistent rhythm of blog posts and gated
            assets promotions on our main social media channels.
          </mark>
        </strong>{' '}
        Of course, we should not just have 100% social media messages that send
        people to gated assets. That won&apos;t be great for our brand and might
        annoy people. This is where the content mix for each social media
        channel comes into play. Should you not have enough internal articles
        and assets to execute on the playbooks mentioned below, think about what
        would create most value with your audience. Are there other great blogs
        in your industry that do a good job and are not direct competitors? If
        so, feel free to send your audience their way.{' '}
        <strong>
          In the end, it&apos;s about creating value for your audience
        </strong>
        . If you don&apos;t have enough content from your own production at this
        time, fill up the social media schedule with other helpful articles and
        assets.
      </p>
      <p>
        <strong>Pro tip:</strong> When cataloging your assets, note which stage
        of the funnel they serve.
      </p>

      <h3 className="mt-6 text-zinc-600">
        Gated vs. Ungated Content Ratios for Technical Content Promotion
      </h3>
      <p>The examples below assume a somewhat mature content repository.</p>
      <p>
        A thing that usually works well is to have specific content strategies
        per channel. Take this as an example:
      </p>
      <p>
        <strong>Twitter</strong> → News outlet (we tweet about our blog posts,
        important things that are happening in our industry, etc.)
      </p>
      <p>
        <strong>Facebook</strong> → The people behind the company. Eg. we show a
        picture of your employees and give a short bio about them, link to
        articles written by your own team, link to opinion pieces, post-mortems,
        etc.
      </p>
      <p>
        <strong>LinkedIn</strong> → A mix of the above, including announcements
        from the company and the exec team (think funding announcement, core
        values, etc.) and some very bottom-of-the-funnel assets (very much about
        your own product).
      </p>
      <p>
        <strong>Key insight:</strong> Don&apos;t just think about what you want
        to say, think about what your audience wants to consume on each
        platform. Twitter users scroll fast and want quick insights. LinkedIn
        users are more likely to be in &quot;professional mode&quot; and want to
        consume your content differently.
      </p>

      <Heading id="visual-platforms">Visual Platforms</Heading>

      <h3 className="mt-6 text-zinc-600">
        Instagram, TikTok, and YouTube Shorts Strategies
      </h3>
      <p>
        The tonality here probably has to be much different from the
        aforementioned platforms. You&apos;re trying to excite and engage people
        in a very short time frame - we&apos;re talking seconds, not minutes.
      </p>
      <p>
        Think visual storytelling. Instead of &quot;Download our Kubernetes
        checklist&quot; try showing a quick behind-the-scenes video of your team
        discussing why the checklist matters, with a call-to-action in your bio
        or stories. Use Instagram Stories polls, questions, and swipe-ups (if
        you have 10k+ followers) to drive engagement before pushing people to
        your gated assets.
      </p>
      <p>
        It can work well to take complex topics and break them down into
        digestible, entertaining content. Think &quot;POV: You&apos;re a CISO
        trying to explain zero-trust to your CEO&quot; or quick explainer videos
        with trending audio. The key is educating while entertaining.
      </p>
      <p>
        <strong>Important note:</strong> These platforms work better for
        top-of-funnel awareness than direct lead generation. Use them to build
        brand recognition and drive traffic to your other channels where you can
        promote gated assets more directly.
      </p>

      <h3 className="mt-6 text-zinc-600">YouTube Shorts Optimization</h3>
      <p>
        Similar to Instagram and TikTok, YouTube Shorts require a different
        approach. Focus on creating quick, value-packed content that
        demonstrates expertise without being overly promotional.
      </p>

      <h3 className="mt-6 text-zinc-600">
        Visual Storytelling for Technical Content
      </h3>
      <p>
        Technical content can be challenging to present visually, but it&apos;s
        not impossible. Consider:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>Code snippets with visual highlights</li>
        <li>Architecture diagrams animated step-by-step</li>
        <li>Before/after performance metrics</li>
        <li>Quick demos of tools or features</li>
        <li>Team members explaining concepts in simple terms</li>
      </ul>
      <p>
        Remember that visual platforms prioritize entertainment and engagement
        over direct conversion. Use them to build brand awareness and trust,
        then guide interested viewers to your other channels for deeper
        engagement.
      </p>

      <Guides basePath={BASE_PATH} items={nextGuides} />
      <Resources items={resources} />
    </Page>
  )
}
