import FAQ from '@/components/global/faq'
import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Marketing In The Age Of AI - Draft.dev',
  description:
    "Learn how to build and run a world class Technical Content Marketing Operation in the age of AI Overviews and zero-click content",
  keywords:
    'draft.dev, technical content marketing, technical content, lead generation, seo, content marketing, search engine optimization, geo, demand generation, ai seo, evergreen content, ai overviews, generative engine optimization, content syndication, retargeting ads, content distribution, content promotion, social media promotion, ai content marketing, content funnel, content promotion strategies, content marketing program, promotion schedule, promotion checklist, social media promotion template, content promotion tactics',
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/technical-content-marketing',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Marketing In The Age Of AI - Draft.dev',
    description:
      "Learn how to build and run a world class Technical Content Marketing Operation in the age of AI Overviews and zero-click content",
    images: [
      {
        url: '/draft/og/privacy_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Marketing In The Age Of AI - Draft.dev',
    description:
      "Learn how to build and run a world class Technical Content Marketing Operation in the age of AI Overviews and zero-click content",
    images: ['/draft/og/privacy_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/technical-content-marketing' },
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

export default function PrivacyPolicy() {
  return (
    <>
      <MedHeader
        title="Technical Content Marketing In The Age Of AI"
        descriptionOne="Updated 08/27/26"
        descriptionTwo="Learn how to build and run a world class Technical Content Marketing Operation in the age of AI Overviews and zero-click content."
      />
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8 prose prose-lg prose-blue">
        <p>Content marketing has proven time and time again that it can be a valuable revenue driver for businesses, regardless of industry. While many businesses know the value of content marketing, they struggle to turn content into a consistent, predictable growth channel. All too often, they start a blog, create a few posts, then lose steam. The marketing team looks back at their Analytics account a few weeks later and sees almost nothing, so they move on to other channels.
          This challenge is magnified in the AI era, where Google's AI Overviews and other AI search features now intercept up to 60% or more of search traffic through zero-click results. For technical content marketing, this impact is even greater, with informational queries seeing up to a 34.5% drop in click-through rates when AI Overviews appear. Despite these challenges, content marketing remains essential—it simply requires adaptation to this new reality.
          <br /><br />Here, we walk you through the pre-requisites and goals of building an effective content marketing engine for technical audiences: The tech stack, strategy, and a tried and trusted framework to help you reverse engineer your production and publishing plan. We also address the specific challenges of creating technical content in an era where AI systems increasingly mediate the relationship between your content and your audience.<br /><br />We then will teach you about the content funnel, different funnel stages and their purposes, and how to create a productive content mix.
          We walk through the prerequisites of building a strong content marketing engine. We will walk through what to measure, how to measure it, and why, as well as explaining how we want to attract awareness, capture traffic, and turn it into leads. It provides helpful foundational knowledge for everything you learn in this book. At the end of this eBook you'll know how to create interconnected content systems that establish authority, drive organic traffic, and generate qualified leads from technical audiences.
          Rather download the main sections of this page with additional information as PDFs? Check out our Technical Content Resources or download the documents here:<br />
          <ul>
            <li>How to Set Up a Content Marketing Engine in the Age of AI→</li>
            <li>How to Orchestrate Technical Content to Drive Business→</li>
            <li>Distributing Content on Social Media and Generating Leads from Gated Assets→</li>
          </ul>
        </p>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">Table of Contents</h2>
        <ul>
          <li> The Complete Technical Content Marketing Guide: From Lead Generation to Revenue Growth in the AI Era</li>
          <li>How to Build a Technical Content Marketing Program That Drives Results
            <ul>
              <li>The What, Why, and Desired Result</li>
              <li>What if I already have a blog set up on my domain?</li>
              <li>What about publishing on Medium, Dev.to or LinkedIn?</li>
            </ul>
          </li>
          <li>Setting Up and Using Analytics
            <ul>
              <li>The What, Why, and Desired Result</li>
            </ul>
          </li>
          <li>Collecting Leads in Your Database
            <ul>
              <li>The What, Why, and Desired Result</li>
              <li>Trade contact details for assets that provide value</li>
            </ul>
          </li>
          <li>Setting Up Retargeting Audiences
            <ul>
              <li>The What, Why, and Desired Result</li>
              <li>What about privacy?</li>
              <li>What if you don't have an advertising budget yet?</li>
            </ul>
          </li>
          <li>Creating a Content Calendar
            <ul>
              <li>The What, Why, and Desired Result</li>
              <li>Why you need a content calendar</li>
              <li>Create your calendar before you lock in topics</li>
              <li>Publish blog content at least once every two weeks</li>
              <li>An example of a content calendar in action</li>
            </ul>
          </li>
          <li>How to Orchestrate Technical Content to Drive Business</li>
          <li>Running Your Content Marketing Engine</li>
          <li>Understanding the Content Funnel
            <ul>
              <li>Top of the Content Funnel - Awareness</li>
              <li>Middle of the Content Funnel - Consideration</li>
              <li>Bottom of the Content Funnel - Decision</li>
            </ul>
          </li>
          <li>Creating Evergreen Content
            <ul>
              <li>The What, Why, and Desired Result</li>
              <li>Production of evergreen content</li>
              <li>Implementing basic Search Engine Optimization (SEO) best-practices</li>
              <li>Evergreen traffic brings readers with intent</li>
              <li>Evergreen content helps you manage your funnel</li>
              <li>Analyze your created content and your content mix</li>
            </ul>
          </li>
          <li>Creating spiky content
            <ul>
              <li>The What, Why, and Desired Result</li>
              <li>Publish one spiky post per month</li>
              <li>How to create spiky content
                <ul>
                  <li>1. Understanding your target market</li>
                  <li>2. Writing with authority</li>
                  <li>3. Writing for humans</li>
                </ul>
              </li>
              <li>Consider your values</li>
              <li>Spiky content in action</li>
              <li>Awareness generation and retargeting audiences</li>
              <li>How does retargeting drive brand awareness?</li>
              <li>Set a 90-day or shorter retargeting duration</li>
              <li>Capture users and make them aware of what you do</li>
              <li>Spiky traffic and backlinks</li>
            </ul>
          </li>
          <li>Distributing Content on Social Media and Generating Leads from Gated Assets</li>
          <li>What Gated Content is Available?</li>
          <li>Content Mix per Social Media Channel</li>
          <li>Examples you can copy
            <ul>
              <li>Twitter
                <ul>
                  <li>A simple Twitter gated assets schedule</li>
                  <li>A simple Twitter blog content schedule</li>
                </ul>
              </li>
              <li>Facebook
                <ul>
                  <li>A simple Facebook gated assets schedule</li>
                  <li>A simple Facebook company/culture content schedule</li>
                </ul>
              </li>
              <li>LinkedIn
                <ul>
                  <li>A simple LinkedIn gated assets schedule</li>
                  <li>A simple LinkedIn thought leadership schedule</li>
                  <li>LinkedIn boosted posts</li>
                </ul>
              </li>
              <li>Instagram, TikTok, YouTube Shorts</li>
            </ul>
          </li>
          <li>Newsletter Sponsorships
            <ul>
              <li>Example of a simple newsletter sponsorship strategy</li>
            </ul>
          </li>
          <li>Submitting to Hacker News and Reddit</li>
          <li>What about Content Syndication?</li>
          <li>Your Promotion Checklist
            <ul>
              <li>Basics</li>
              <li>Extras</li>
            </ul>
          </li>
          <li>Conclusion</li>
        </ul>
        
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          The Complete Technical Content Marketing Guide: From Lead Generation to Revenue Growth in the AI Era
        </h2>
        <p>
          As content marketers, we have a responsibility to the business to provide predictable output of content that drives people from awareness to consideration to purchase decision. We also have a duty to analyze and report on what we do and why we do it, and to learn and revise our actions based on these insights. Marketing in general, but <strong>content marketing specifically, is not an art; it's a science</strong>. It takes robust systems, processes, and discipline to execute.<br /><strong>Marketers who fail to succeed at content marketing usually either lack the processes, systems, and frameworks needed, or they lack the discipline to carry out those processes consistently.</strong><br />
          In today's AI-dominated landscape, our responsibility extends beyond driving website traffic. Technical B2B marketers must now optimize for "content influence" - ensuring our expertise is recognized and cited by AI systems that increasingly mediate how developers and technical professionals discover information. This requires intentional optimization for both traditional search and emerging AI discovery patterns.
          <br /><br />
          This page will walk you through the exact process that you can use to set up a predictable, consistent content engine that provides you with insights and data to <strong>prove its effectiveness to business leadership.</strong>
          <br /><br />
          A <strong>“content marketing engine”</strong> is a repeatable system for creating, publishing, and promoting content designed to reach and convert your target customers.
          Each piece of content is aimed at a specific stage of the marketing funnel (awareness, consideration, decision) and should lead to predictable and measurable results for your business. The desired results are typically traffic generation and new leads added to your database.
          <br /><br />
          In the AI era, we must expand these results to include AI Overview appearances, brand citation rates, and technical authority metrics that measure how frequently your content is referenced by AI systems. What's changed is not the fundamental value of content marketing, but how we must adapt our approach for an environment where AI systems like Google's AI Overviews now mediate information discovery and consumption.
          Here, we'll focus on written content in the form of blog posts as the primary medium for your content engine. While you don't have to limit your content engine to written content, writing is often the best place to start. <strong>Blog posts can be easily repurposed</strong> into downloadable PDFs, conversations for a podcast, or talks for a conference.
          Technical content particularly benefits from this approach, as code examples, technical documentation, and implementation guides <strong>can be strategically structured to maintain value in both AI-summarized and full-length formats.</strong>
          We know this strategy works because we've used it for years, implementing it for companies of all sizes. Whether you're a one-person marketing team with less than $1 million in annual revenue or part of a multi-million-dollar software company, follow along with this eBook to create a repeatable, scalable, and predictable content marketing engine!
          <br /><br />
          In the following sections, we'll show you how to set up a predictable and scalable content marketing framework - step by step.
          First, we'll cover setting up core pre-requisites like your content management system and analytics tracking. Next, we'll show you how to turn anonymous traffic into known leads that you store in your database and increase brand awareness using retargeting.
          Finally, we'll show you how to set up and use a content calendar to ensure that your content engine is consistent and predictable.
        </p>

        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">Setting up a Content Management System</h2>
        <h3>The What, Why, And Desired Result</h3>
        <p>
          <strong>Key Metric:</strong>
          Content pieces published per month.<br />
          <strong>Why it Matters:</strong>
          You need to reliably publish content in order to attract new people to your site.<br />
          <strong>Final Result:</strong>
          Team members can easily create, preview, and publish content on your site.
        </p>
        <hr />
        <h3>Set up your blog using a static site generator and a headless CMS</h3>
        <p>
          Using a <a href="https://jamstack.org/generators/">static site generator</a> and <a href="https://jamstack.org/headless-cms/">headless CMS</a> for your blog will eliminate most of your speed and security problems. They make it easy to publish new content, add code snippets (like retargeting and analytics), update your stylesheets, and customize everything about your site. For technical content marketing in the AI era, these systems offer additional advantages: they allow more granular control over content structure, metadata, and schema markup, all critical factors in how AI systems process your content. Implementing proper heading hierarchies, structured data for code samples, and clear technical documentation patterns improves how AI systems parse and cite your expertise.<br />
          Of course, you can choose to use different solutions (<a href="https://wordpress.org/">WordPress</a>, for example) to set up your Content Engine. These solutions work fine, but we typically recommend <a href="https://docs.netlify.com/frameworks/next-js/overview/">Next.js and Netlify</a>. This setup can be hosted for free using <a href="https://www.netlify.com/">Netlify</a> or <a href="https://pages.github.com/">GitHub Pages</a>, and the ongoing maintenance is much lower than server-side solutions like WordPress.<br />
          These solutions also come with a lot of “ready-to-use” features that make performance optimization and tracking capabilities very easy to set up. Having these in place will ensure that your site adheres to Google's <a href="https://web.dev/vitals/">Web Vitals</a> and will lead to better search engine rankings in the long run. Additionally, this architecture makes it easier to implement AI-readable content structures, including explicit answer sections, FAQ schema, and table-based information that AI systems can effectively extract and cite.
        </p>
        <h3>What if I already have a blog set up on my domain?</h3>
        <p>
          Don't reinvent the wheel. If your CMS works for you and it performs well, there's no need to spend a month migrating to a static site. Website migrations can be very delicate, so consult with your engineering team or an external specialist before you start this process.<br />
          If, on the other hand, your CMS is restricting the amount of content you can produce or its poor performance is hurting your ability to rank well in search engines, you should move off it as soon as possible. In the AI era, <strong>technical content needs particular attention</strong> to structure and machine readability. If your current CMS limits your ability to implement structured data, create properly nested heading hierarchies, or control the semantics of your HTML, consider prioritizing migration. These technical elements significantly impact how AI systems process and cite your content - potentially affecting 60% of your potential audience who now consume content through AI interfaces.<br />
          One decision you will face then is whether you'd like your blog to be located on a subdirectory (/blog) or on a subdomain (blog.yourdomain.com). There are different viable approaches, depending on the role your blog plays for your business. But, if you'd like to implement the systems taught throughout our Draft.dev resources, our <strong>clear recommendation</strong> is to have your blog located in a subdirectory on your top-level-domain. The reason being that, over time, your published blog content will receive backlinks from external sources and we'd rather have them benefit our top-level-domain than a subdomain.<br />
          Search Engines “see” subdomains as separate entities. So, if we'd receive a lot of backlinks to our subdomain, we'd then have to generate a lot of backlinks to our top-level-domain <strong>from our blog subdomain</strong>. Which means we'd have to link to our “main website” as often as possible from our own blog. Which, depending on the type of content we have published, can make sense in a lot of cases, but won't make sense 100% of the time and might be perceived as very pushy. <br />
          This subdirectory approach becomes even more important in the AI era where domain authority and topical authority influence how AI systems evaluate the credibility of your content. By keeping technical content on your main domain, you consolidate authority signals that help both traditional SEO and AI citation metrics.
        </p>
        <h3>What about publishing on Medium, Dev.to or LinkedIn?</h3>
        <p>
          Publishing your blog posts exclusively to a third-party platform like Medium, Dev.to, or LinkedIn is tempting because it’s easy, and they offer a built-in distribution network. In the age of AI Overviews and zero-click content consumption it’s also a good approach to establish a multi-platform presence as to not having to solely rely on your website for brand awareness.<br />
          <strong>That said, especially at the beginning of your content marketing journey it is not a good idea as they won’t help your primary top-level-domain’s ranking in search engines.</strong> Links on these platforms are usually <a href="https://developers.google.com/search/docs/advanced/guidelines/qualify-outbound-links">“no-follow links,”</a> so they won’t pass much value to other resources or landing pages you reference from them. Once you have your content engine running, you can use publishing on these platforms as opportunities to syndicate optimized versions with canonical links back to your site. For technical content marketing, platforms like Dev.to should be viewed as citation opportunities rather than traffic drivers – places where your expertise can be recognized by AI systems and developer communities alike.<br />
          If you already have content on these platforms, I recommend migrating it to your new blog and updating existing platform content with <strong>canonical links pointing to your domain version</strong> and to restructure it to serve as a "preview" that drives users to the complete resource on your site. We will talk much more in detail about content syndication on platforms like Dev.to or Medium later on this page.
        </p>
         <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">Setting up and Using Analytics</h2>
        <h3>The What, Why, And Desired Result</h3>
        <p>
          <strong>Key Metric:</strong>
          Unique visitors per month, average time on page, citations in AI overviews<br />
          <strong>Why it Matters:</strong>
          Analytics give you insights into your audience and tell you how many unique readers your blog posts get, how long those readers are on your site, and where they are based.<br />
          <strong>Final Result:</strong>
          Your team can track traffic and user engagement driven by your content marketing efforts. This will help you make meaningful decisions about future content production.
        </p>
        <hr />
        <h3>Set up Google Analytics</h3>
        <p>
          By far, the most common option for site analytics is <a href="https://analytics.google.com/analytics/web/">Google Analytics</a>. It’s not necessarily the easiest to use, but it’s powerful, free, and widely documented. If you’re using Next.js, <a href="https://dev.to/rajeshkumaryadavdotcom/how-to-implement-google-analytics-4-ga4-in-a-nextjs-project-dm7">here is a follow-along tutorial</a> to set it up. If not, here is the detailed <a href="https://support.google.com/analytics/topic/14088998?hl=en&ref_topic=14090456&sjid=8415351136047686406-US">Google Analytics documentation</a>.<br />
          Alternatively, you can set up your Google Analytics script using the <a href="https://support.google.com/tagmanager/answer/14842164">Google TAG Manager</a> (GTM). GTM allows for automatic asynchronous loading of scripts, which is helpful for optimizing page load speed metrics like the <a href="https://web.dev/lcp/">largest contentful paint</a>, but it’s more complicated to set up. You can <a href="https://marketingplatform.google.com/about/tag-manager/features/">see a list of TAG manager features here</a> to decide if it’s worth the investment when you’re getting started.<br />
          While Google Analytics remains essential, it's now insufficient for measuring technical content performance in the AI era. Consider complementing it with tools that track AI Overview appearances (for example <a href="https://ahrefs.com/">ahrefs</a>), brand mentions in search features, and crawler traffic from AI systems. If you want to get very granular, you can also add custom Google Tag Manager events to track when users engage with more advanced technical elements like code examples, API documentation, or interactive tools – behaviors that signal higher intent in technical audiences.<br />
          We also recommend setting up Google Search Console to get insights into organic search impression trends. 
        </p>
        <h3>
          Track unique visitors
        </h3>
        <p>
          Over time, you obviously want the number of unique visitors to your site to rise. When you publish and promote a new piece of content, you’ll likely see a spike in traffic from social media and newsletters, but “organic” search engine traffic from specific keyword searches will drive much more traffic in the long term. In Google Analytics, you will want to keep track of the “Active Users” metric to get an overview of how many unique visitors were visiting your site. <br />

          TODO: IMPLEMENT Google_Analytics_Dashboard_Active_Users pic
          <br />
          In the AI era, you can focus on segmenting your traffic analysis to distinguish between different types of visitors. Particularly for technical content, track developer-specific metrics like code sample usage, documentation page depth, API interaction, GitHub referrals, and repeat visitor patterns. These signals help identify high-intent technical visitors despite lower overall traffic volumes.<br />

          If you’re looking for how to set up specifically tracking traffic from AI sources in Google Analytics you can <a href="https://ahrefs.com/blog/track-analyze-ai-traffic/">check out this tutorial by ahrefs</a>.
          It’s hard to set realistic goals for the “unique visitors” metric when you’re just starting out because it depends on so many factors (<a href="https://help.ahrefs.com/en/articles/1409408-what-is-domain-rating-dr">domain rating</a>, existing audience, brand strength, promotional process, industry size, and content saturation). But, as you start your content engine and consistently publish new, search-engine-optimized content, <strong>you should start seeing organic traffic gains within the first six to nine months</strong>. AI citation influence can begin much sooner (2-3 months) with properly structured content. Technical marketers should set expectations accordingly, anticipating slower direct traffic growth (due to AI Overviews intercepting informational queries) offset by increasing citation appearances.<br />
          Look for week-over-week growth in both metrics – traditional traffic and AI citation appearances – to measure comprehensive content performance.<br />
          In a separate asset published on Draft.dev called <a href="https://draft.dev/content-marketing-engine">“How to Set Up a Content Marketing Engine in the Age of AI”</a>, we'll discuss exactly what kind of content you should be creating and offer some tips for optimizing it, but for now, it’s important to get comfortable with Google Analytics so you can analyze your results over time.

          TODO: IMPLEMENT Content Engine eBook banner here
        </p>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">Collecting Leads in Your Database</h2>
        <h3>The What, Why, And Desired Result</h3>
        <p>
          <strong>Key Metric:</strong>
          New leads in your database per month.<br />
          <strong>Why it Matters:</strong>
          Turn anonymous traffic into “known names” in your database.<br />
          <strong>Final Result:</strong>
          Users can opt-in to your database by entering their information in a form, and you can start building a relationship by contacting them regularly via email.
        </p>
        <hr />
        <p>
          Attracting visitors to your content is obviously the first step, but these visitors will be anonymous unless you find a way to capture their contact information. Businesses rarely make money from anonymous traffic, so you need leads (“known names”) that you can create revenue from.<br />
          In the age of AI search, this becomes even more critical. When up to 60% of searches never reach your website, you must make the most of the traffic that does arrive. For technical audiences, this means creating higher-value conversion opportunities that are worth the extra click beyond what AI systems have already provided.
          One of the core responsibilities of content marketing is to turn “anonymous traffic” into “known names” in your database. Pageviews are nice, but you’ll want to care about <strong>unique humans</strong> that you can start building a relationship with. That means we need their email address and name.<br />
          For technical audiences, keep the value-to-friction ratio in mind. Technical professionals have high standards for content quality and are resistant to generic lead magnets. Create high quality lead magnets and developer-specific resources like code libraries, debugging tools, interactive sandboxes, configuration generators, or performance analyzers that deliver immediate utility beyond what AI systems can provide.<br />
          Identifying anonymous users will allow you to build a relationship with the people in your database by sending helpful, value-first emails to them on a recurring basis. As you build relationships with the humans in your database, you can reconnect with them frequently to make them aware of your products and move them through the buyer’s journey.
          But first, you need a way to collect these leads and attach a name and email address to each of them.
        </p>
        <h3>Set up a CRM like HubSpot or Mailchimp</h3>
        <p>
          Both <a href="https://mailchimp.com/">Mailchimp</a> and <a href="https://kit.com/">Kit</a> are good solutions for most small marketing teams just getting started. They are easy to set up, highly trusted, and cheap to get going with. Most importantly, they have all the features you’ll need to start building your Content Engine.<br />
          When marketing to technical audiences, consider additional capabilities that better serve developer-specific needs. Look for CRMs that support tagging by programming languages, technical specialties, or specific tech stack components. Technical audiences respond better to precisely targeted, relevant communications than to generic marketing messages.
          Of course, these are not the only viable solutions. We recommend Mailchimp or Kit when you are just getting started, but <strong>suggest HubSpot once you have more contacts to manage and the budget and team to support it</strong>. You can use a different service, but, for the upcoming examples, we'll walk through Mailchimp.
        </p>

        TODO: Implement Mailchimp_Dashboard pic Here
        <p className="text-sm italic">Mailchimp is a powerful, cost-effective service to start growing your lead database.</p>
        <h3>Create a newsletter signup form and welcome email</h3>

TODO: CONTINUE FROM HERE.



        <p className="paragraph-dark my-5 max-w-5xl">
          We keep your information safely and securely for as long as necessary
          or according to your instructions, and we review the data we hold at
          least once every two years.
        </p>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          When and How We Share Your Personal Information with Others
        </h2>
        <p className="paragraph-dark my-5 max-w-5xl">
          Portable CTO, LLC may share your personal information to deliver
          content and services from our sites, affiliated companies and third
          parties that might interest you; including sponsored content and
          events, for business operations, and to comply with valid legal
          processes.
        </p>

        <ul
          className="paragraph-dark my-5 max-w-5xl list-disc pl-5"
          role="list"
        >
          <li className="py-2">
            We may share your information with advertisers, partners, and
            sponsors when you give permission and agree to our terms and privacy
            policy by registering for content or services offered by Portable
            CTO, LLC and our sponsors.
          </li>
          <li className="py-2">
            We need to provide your information to other companies in order to
            deliver the services you want from us, such as having an email list
            sent out and managing your email preferences, or to process your
            event order. In these cases, the information is used only for the
            specific service you wanted from us.
          </li>
        </ul>

        <p className="paragraph-dark my-5 max-w-5xl">
          We may also aggregate information and disclose it to advertisers and
          other third parties for marketing, promotional, and other purposes. In
          these cases, we do NOT disclose any personally identifiable
          information as part of this. Use of your contact data by others is
          governed by the terms and conditions of their Privacy Policy.
        </p>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">Transfers</h2>
        <p className="paragraph-dark my-5 max-w-5xl">
          We may buy or sell a company or property. If we sell a business, we
          may transfer some or all of your information as a part of the sale so
          that you will continue to receive the service being provided to you or
          for other business purposes.
        </p>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          Your Rights Over Your Personal Information
        </h2>

        <ul
          className="paragraph-dark my-5 max-w-5xl list-disc pl-5"
          role="list"
        >
          <li className="py-2">
            You have the right to opt out of our direct marketing at any point.
            You can unsubscribe from our emails by following the unsubscribe
            link at the bottom of each email, or by contacting us directly.
          </li>
          <li className="py-2">
            You can request access to the personal information we hold on you,
            at any time, and we will provide that information within one month
            of receiving your request.
          </li>
          <li className="py-2">
            You can also request your information to be deleted, and we will
            respond within one month of receiving your request.
          </li>
        </ul>

        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          Policy Changes, Questions & Comments
        </h2>
        <p className="paragraph-dark mt-5 max-w-5xl">
          We'll post changes to this policy on this page. Requests for more
          information and questions about this policy should be emailed to us at
          info@portablecto.com.
        </p>
      </div>
      <LogosDark />
      <FAQ />
    </>
  )
}
