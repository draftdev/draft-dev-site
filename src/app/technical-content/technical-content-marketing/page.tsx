import {
  Heading,
  Page,
} from '@/components/page-components/mega-guide/doc-blocks'
import { Guides } from '@/components/page-components/mega-guide/Guides'
import { Resources } from '@/components/page-components/mega-guide/Resources'
import type { Section } from '@/components/page-components/mega-guide/section-provider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Setting Up Your Technical Content Marketing Engine',
  description:
    'CMS decisions, architecture, third-party platforms, analytics and AI metrics, lead collection, and retargeting.',
}

export const sections: Array<Section> = [
  {
    id: 'content-management-system-setup',
    title: 'Content Management System Setup',
    offsetRem: 6,
  },
  {
    id: 'setting-up-analytics-and-tracking-implementation',
    title: 'Setting up Analytics and Tracking Implementation',
    offsetRem: 8,
  },
  {
    id: 'setting-up-lead-collection-systems',
    title: 'Setting up Lead Collection Systems',
    offsetRem: 8,
  },
  {
    id: 'setting-up-retargeting-infrastructure',
    title: 'Setting up Retargeting Infrastructure',
    offsetRem: 8,
  },
]

export default function SetupEnginePage() {
  return (
    <Page
      title="Setting Up Your Technical Content Marketing Engine"
      lead="Launch a fast, structured, analytics-ready content stack that serves both humans and AI systems."
    >
      <Heading id="content-management-system-setup">
        Content Management System Setup
      </Heading>

      <hr className="my-6" />
      <span className="text-lg font-semibold text-zinc-500">
        The What, Why, and Desired Result
      </span>

      <p className="mt-3">
        <strong>Key Metric:</strong>
      </p>
      <p>Content pieces published per month.</p>

      <p className="mt-2">
        <strong>Why it Matters:</strong>
      </p>
      <p>
        You need to reliably publish content in order to attract new people to
        your site.
      </p>

      <p className="mt-2">
        <strong>Final Result:</strong>
      </p>
      <p>
        Team members can easily create, preview, and publish content on your
        site.
      </p>
      <hr className="my-10" />

      <h3 className="mt-6 text-zinc-600">
        Choosing between static site generators and traditional CMS
      </h3>
      <p>Set up your blog using a static site generator and a headless CMS</p>
      <p>
        Using a{' '}
        <a
          href="https://jamstack.org/generators/"
          target="_blank"
          rel="noopener noreferrer"
        >
          static site generator
        </a>{' '}
        and{' '}
        <a
          href="https://jamstack.org/headless-cms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          headless CMS
        </a>{' '}
        for your blog will eliminate most of your speed and security problems.
        They make it easy to publish new content, add code snippets (like
        retargeting and analytics), update your stylesheets, and customize
        everything about your site. For technical content marketing in the AI
        era, these systems offer additional advantages: they allow more granular
        control over content structure, metadata, and schema markup – all
        critical factors in how AI systems process your content. Implementing
        proper heading hierarchies, structured data for code samples, and clear
        technical documentation patterns improves how AI systems parse and cite
        your expertise.
      </p>
      <p>
        Of course, you can choose to use different solutions (
        <a
          href="https://wordpress.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WordPress
        </a>
        , for example) to set up your Content Engine. These solutions work fine,
        but we typically recommend{' '}
        <a
          href="https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js and Netlify
        </a>
        . This setup can be hosted for free using Netlify or{' '}
        <a
          href="https://docs.github.com/en/pages"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Pages
        </a>
        , and the ongoing maintenance is much lower than server-side solutions
        like WordPress.
      </p>
      <p>
        These solutions also come with a lot of &quot;ready-to-use&quot;
        features that make performance optimization and tracking capabilities
        very easy to set up. Having these in place will ensure that your site
        adheres to Google&apos;s{' '}
        <a
          href="https://web.dev/vitals/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Vitals
        </a>{' '}
        and will lead to better search engine rankings in the long run.
        Additionally, this architecture makes it easier to implement AI-readable
        content structures, including explicit answer sections, FAQ schema, and
        table-based information that AI systems can effectively extract and
        cite.
      </p>

      <h3 className="mt-6 text-zinc-600">
        Blog architecture (subdomain vs. subdirectory)
      </h3>
      <p>
        <strong>What if I already have a blog set up on my domain?</strong>
      </p>
      <p>
        Don&apos;t reinvent the wheel. If your CMS works for you and it performs
        well, there&apos;s no need to spend a month migrating to a static site.
        Website migrations can be very delicate, so consult with your
        engineering team or an external specialist before you start this
        process.
      </p>
      <p>
        If, on the other hand, your CMS is restricting the amount of content you
        can produce or its poor performance is hurting your ability to rank well
        in search engines, you should move off it as soon as possible. In the AI
        era, <strong>technical content needs particular attention</strong> to
        structure and machine readability. If your current CMS limits your
        ability to implement structured data, create properly nested heading
        hierarchies, or control the semantics of your HTML, consider
        prioritizing migration. These technical elements significantly impact
        how AI systems process and cite your content, potentially affecting 60%
        of your potential audience who now consume content through AI
        interfaces.
      </p>
      <p>
        One decision you will face then is whether you&apos;d like your blog to
        be located on a subdirectory (/blog) or on a subdomain
        (blog.yourdomain.com). There are different viable approaches, depending
        on the role your blog plays for your business. But, if you&apos;d like
        to implement the systems taught throughout our Draft.dev resources, our{' '}
        <strong>clear recommendation</strong> is to have your blog located in a
        subdirectory on your top-level-domain. The reason being that, over time,
        your published blog content will receive backlinks from external sources
        and we&apos;d rather have them benefit our top-level-domain than a
        subdomain.
      </p>
      <p>
        Search Engines &quot;see&quot; subdomains as separate entities. So, if
        we&apos;d receive a lot of backlinks to our subdomain, we&apos;d then
        have to generate a lot of backlinks to our top-level-domain{' '}
        <strong>from our blog subdomain</strong>. Which means we&apos;d have to
        link to our &quot;main website&quot; as often as possible from our own
        blog. Which, depending on the type of content we have published, can
        make sense in a lot of cases, but won&apos;t make sense 100% of the time
        and might be perceived as very pushy.
      </p>
      <p>
        This subdirectory approach becomes even more important in the AI era
        where domain authority and topical authority influence how AI systems
        evaluate the credibility of your content. By keeping technical content
        on your main domain, you consolidate authority signals that help both
        traditional SEO and AI citation metrics.
      </p>

      <h3 className="mt-6 text-zinc-600">
        Publishing on third-party platforms
      </h3>
      <p>
        <strong>What about publishing on Medium, Dev.to or LinkedIn?</strong>
      </p>
      <p>
        Publishing your blog posts exclusively to a third-party platform like
        Medium, Dev.to, or LinkedIn is tempting because it&apos;s easy, and they
        offer a built-in distribution network. In the age of AI Overviews and
        zero-click content consumption it&apos;s also a good approach to
        establish a multi-platform presence as to not having to solely rely on
        your website for brand awareness.
      </p>
      <p>
        <strong>
          That said, especially at the beginning of your content marketing
          journey it is not a good idea as they won&apos;t help your primary
          top-level-domain&apos;s ranking in search engines.
        </strong>{' '}
        Links on these platforms are usually &quot;
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          no-follow links
        </a>
        ,&quot; so they won&apos;t pass much value to other resources or landing
        pages you reference from them. Once you have your content engine
        running, you can use publishing on these platforms as opportunities to
        syndicate optimized versions with canonical links back to your site.
      </p>
      <p>
        If you already have content on these platforms, we recommend migrating
        it to your new blog and updating existing platform content with{' '}
        <strong>canonical links pointing to your domain version</strong> and to
        restructure it to serve as a &quot;preview&quot; that drives users to
        the complete resource on your site.
      </p>

      <Heading id="setting-up-analytics-and-tracking-implementation">
        Setting up Analytics and Tracking Implementation
      </Heading>

      <hr className="my-6" />
      <span className="text-lg font-semibold text-zinc-500">
        The What, Why, and Desired Result
      </span>

      <p className="mt-3">
        <strong>Key Metric:</strong>
      </p>
      <p>
        Unique visitors per month, average time on page, citations in AI
        overviews.
      </p>

      <p className="mt-2">
        <strong>Why it Matters:</strong>
      </p>
      <p>
        Analytics give you insights into your audience and tell you how many
        unique readers your blog posts get, how long those readers are on your
        site, and where they are based.
      </p>

      <p className="mt-2">
        <strong>Final Result:</strong>
      </p>
      <p>
        Your team can track traffic and user engagement driven by your content
        marketing efforts. This will help you make meaningful decisions about
        future content production.
      </p>
      <hr className="my-10" />

      <h3 className="mt-6 text-zinc-600">Google Analytics</h3>
      <p>
        By far, the most common option for site analytics is{' '}
        <a
          href="https://analytics.google.com/analytics/web/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Analytics
        </a>
        . It&apos;s not necessarily the easiest to use, but it&apos;s powerful,
        free, and widely documented. If you&apos;re using Next.js,{' '}
        <a
          href="https://dev.to/rajeshkumaryadavdotcom/how-to-implement-google-analytics-4-ga4-in-a-nextjs-project-dm7"
          target="_blank"
          rel="noopener noreferrer"
        >
          here is a follow-along tutorial
        </a>{' '}
        to set it up. If not, here is the detailed{' '}
        <a
          href="https://support.google.com/analytics/topic/14088998?hl=en&ref_topic=14090456&sjid=8415351136047686406-US"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Analytics documentation
        </a>
        .
      </p>
      <p>
        Alternatively, you can set up your Google Analytics script using the{' '}
        <a
          href="https://support.google.com/tagmanager/answer/14842164"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google TAG Manager
        </a>{' '}
        (GTM). GTM allows for automatic asynchronous loading of scripts, which
        is helpful for optimizing page load speed metrics, but it&apos;s more
        complicated to set up. You can{' '}
        <a
          href="https://marketingplatform.google.com/about/tag-manager/features/"
          target="_blank"
          rel="noopener noreferrer"
        >
          see a list of TAG manager features here
        </a>{' '}
        to decide if it&apos;s worth the investment when you&apos;re getting
        started.
      </p>
      <p>
        While Google Analytics remains essential, it&apos;s now insufficient for
        measuring technical content performance in the AI era. Consider
        complementing it with tools that track AI Overview appearances (for
        example{' '}
        <a href="https://ahrefs.com/" target="_blank" rel="noopener noreferrer">
          ahrefs
        </a>
        ), brand mentions in search features, and crawler traffic from AI
        systems. If you want to get very granular, you can also add custom
        Google Tag Manager events to track when users engage with more advanced
        technical elements like code examples, API documentation, or interactive
        tools, behaviors that signal higher intent in technical audiences.
      </p>
      <p>
        We also recommend setting up{' '}
        <a
          href="https://search.google.com/search-console/about?hl=us"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Search Console
        </a>{' '}
        to get insights into organic search impression trends.
      </p>

      <h3 className="mt-6 text-zinc-600">
        Tracking unique visitors in the AI era
      </h3>
      <p>
        Over time, you obviously want the number of unique visitors to your site
        to rise. When you publish and promote a new piece of content,
        you&apos;ll likely see a spike in traffic from social media and
        newsletters, but &quot;organic&quot; search engine traffic from specific
        keyword searches will drive much more traffic in the long term. In
        Google Analytics, you will want to keep track of the &quot;Active
        Users&quot; metric to get an overview of how many unique visitors were
        visiting your site.
      </p>
      <p>
        In the AI era, you can focus on segmenting your traffic analysis to
        distinguish between different types of visitors. Particularly for
        technical content, track developer-specific metrics like code sample
        usage, documentation page depth, API interaction, GitHub referrals, and
        repeat visitor patterns. These signals help identify high-intent
        technical visitors despite lower overall traffic volumes.
      </p>
      <p>
        If you&apos;re looking for how to set up specifically tracking traffic
        from AI sources in Google Analytics you can check out this{' '}
        <a
          href="https://ahrefs.com/blog/track-analyze-ai-traffic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          tutorial by ahrefs
        </a>
        .
      </p>
      <p>
        It&apos;s hard to set realistic goals for the &quot;unique
        visitors&quot; metric when you&apos;re just starting out because it
        depends on so many factors (
        <a
          href="https://help.ahrefs.com/en/articles/1409408-what-is-domain-rating-dr"
          target="_blank"
          rel="noopener noreferrer"
        >
          domain rating
        </a>
        , existing audience, brand strength, promotional process, industry size,
        and content saturation). But, as you start your content engine and
        consistently publish new, search-engine-optimized content,{' '}
        <strong>
          you should start seeing organic traffic gains within the first six to
          nine months
        </strong>
        . AI citation influence can begin much sooner (2-3 months) with properly
        structured content. Technical marketers should set expectations
        accordingly, anticipating slower direct traffic growth (due to AI
        Overviews intercepting informational queries) offset by increasing
        citation appearances.
      </p>
      <p>
        Look for week-over-week growth in both metrics – traditional traffic and
        AI citation appearances – to measure comprehensive content performance.
      </p>
      <p>
        In a separate asset published on Draft.dev called &quot;How to Set Up a
        Content Marketing Engine in the Age of AI&quot;, we&apos;ll discuss
        exactly what kind of content you should be creating and offer some tips
        for optimizing it, but for now, it&apos;s important to get comfortable
        with Google Analytics so you can analyze your results over time.
      </p>

      <h3 className="mt-6 text-zinc-600">AI-specific metrics to monitor</h3>
      <p>
        In the AI era, we must expand these results to include AI Overview
        appearances, brand citation rates, and technical authority metrics that
        measure how frequently your content is referenced by AI systems.
        What&apos;s changed is not the fundamental value of content marketing,
        but how we must adapt our approach for an environment where AI systems
        like Google&apos;s AI Overviews now mediate information discovery and
        consumption.
      </p>

      <Heading id="setting-up-lead-collection-systems">
        Setting up Lead Collection Systems
      </Heading>

      <hr className="my-6" />
      <span className="text-lg font-semibold text-zinc-500">
        The What, Why, and Desired Result
      </span>

      <p className="mt-3">
        <strong>Key Metric:</strong>
      </p>
      <p>New leads in your database per month.</p>

      <p className="mt-2">
        <strong>Why it Matters:</strong>
      </p>
      <p>
        Turn anonymous traffic into &quot;known names&quot; in your database.
      </p>

      <p className="mt-2">
        <strong>Final Result:</strong>
      </p>
      <p>
        Users can opt-in to your database by entering their information in a
        form, and you can start building a relationship by contacting them
        regularly via email.
      </p>
      <hr className="my-10" />

      <h3 className="mt-6 text-zinc-600">
        CRM selection (HubSpot, Mailchimp, Kit)
      </h3>
      <p>
        Attracting visitors to your content is obviously the first step, but
        these visitors will be anonymous unless you find a way to capture their
        contact information. Businesses rarely make money from anonymous
        traffic, so you need leads (&quot;known names&quot;) that you can create
        revenue from.
      </p>
      <p>
        In the age of AI search, this becomes even more critical. When up to 60%
        of searches never reach your website, you must make the most of the
        traffic that does arrive. For technical audiences, this means creating
        higher-value conversion opportunities that are worth the extra click
        beyond what AI systems have already provided.
      </p>
      <p>
        One of the core responsibilities of content marketing is to turn
        &quot;anonymous traffic&quot; into &quot;known names&quot; in your
        database. Pageviews are nice, but you&apos;ll want to care about{' '}
        <strong>unique humans</strong> that you can start building a
        relationship with. That means we need their email address and name.
      </p>
      <p>
        Both{' '}
        <a
          href="https://mailchimp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mailchimp
        </a>{' '}
        and{' '}
        <a href="https://kit.com/" target="_blank" rel="noopener noreferrer">
          Kit
        </a>{' '}
        are good solutions for most small marketing teams just getting started.
        They are easy to set up, highly trusted, and cheap to get going with.
        Most importantly, they have all the features you&apos;ll need to start
        building your Content Engine.
      </p>
      <i>
        Mailchimp is a powerful, cost-effective service to start growing your
        lead database.
      </i>
      <p>
        When marketing to technical audiences, consider additional capabilities
        that better serve developer-specific needs. Look for CRMs that support
        tagging by programming languages, technical specialties, or specific
        tech stack components. Technical audiences respond better to precisely
        targeted, relevant communications than to generic marketing messages.
      </p>
      <p>
        Of course, these are not the only viable solutions. We recommend
        Mailchimp or Kit when you are just getting started, but{' '}
        <strong>
          suggest HubSpot once you have more contacts to manage and the budget
          and team to support it.
        </strong>{' '}
        You can use a different service, but, for the upcoming examples,
        we&apos;ll walk through Mailchimp.
      </p>

      <h3 className="mt-6 text-zinc-600">
        Creating newsletter signup forms and welcome emails
      </h3>
      <p>
        As a first step, we encourage you to create a{' '}
        <a
          href="https://mailchimp.com/help/add-a-signup-form-to-your-website/"
          target="_blank"
          rel="noopener noreferrer"
        >
          signup form
        </a>{' '}
        and a{' '}
        <a
          href="https://mailchimp.com/help/create-an-automated-welcome-email/"
          target="_blank"
          rel="noopener noreferrer"
        >
          welcome email
        </a>
        . If you have some HTML and CSS skills, you can customize the email
        signup form. If not, just use Mailchimp&apos;s{' '}
        <a
          href="https://mailchimp.com/help/how-the-form-builder-works/"
          target="_blank"
          rel="noopener noreferrer"
        >
          form builder
        </a>{' '}
        to create a signup form at the bottom of each blog post you publish. Use
        a{' '}
        <a
          href="mailchimp.com/help/about-double-opt-in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          double opt-in
        </a>{' '}
        process to ensure high-quality leads.
      </p>
      <p>
        For technical content marketing, implement contextual signup forms based
        on content topic. Developers reading Python content should see
        Python-specific offers, while those viewing cloud architecture content
        should receive cloud-focused incentives. These contextual offers can
        achieve 30-40% higher conversion rates than generic newsletter signups
        among technical audiences.
      </p>
      <p>
        Finally, you could consider adding a{' '}
        <a
          href="https://mailchimp.com/help/add-a-pop-up-signup-form-to-your-website/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pop-up signup form
        </a>
        . But be aware that this is very aggressive and intrusive. If you have a
        technical audience it is very likely this will hurt your brand.{' '}
        <strong>
          Your content&apos;s primary goal should be building trust. Pop-ups
          might hurt your reputation more than they help in the long run.
        </strong>
      </p>
      <p>
        This caution is especially important for technical audiences, who have
        even lower tolerance for interruptive marketing tactics. Instead,
        implement &quot;value-trigger&quot; conversion points – offering
        extended code examples, downloadable configurations, or interactive
        tools at natural breakpoints in technical content. These contextual
        offers convert 3-5x better than pop-ups with technical audiences while
        preserving trust.
      </p>

      <h3 className="mt-6 text-zinc-600">
        Trading high value assets for contact details
      </h3>
      <p>
        Once your content engine is up and running, you should create a gated
        content asset to attract more signups to your email list. Such an asset
        is typically a downloadable piece of content with more depth than a
        typical blog post placed behind a signup form.
      </p>
      <p>
        In the AI era, your gated content must deliver substantially more value
        than what AI systems already provide for free.
        <strong>
          {' '}
          For technical audiences, focus on creating assets with high
          implementation value
        </strong>
        : detailed architectural patterns, production-ready code libraries,
        benchmarking tools, security checklists, or interactive learning
        environments that solve specific developer problems.
      </p>
      <p>
        If you don&apos;t have such a piece yet, you can start by inviting
        readers to &quot;join our weekly newsletter,&quot; &quot;get updates
        about new posts,&quot; or &quot;sign up for a free trial.&quot; Put this
        call to action (CTA) at the bottom of each blog post.
      </p>
      <p>
        For technical audiences specifically, create CTAs that speak to
        developer value propositions: &quot;Get the complete code
        repository,&quot; &quot;Access advanced implementation guides,&quot; or
        &quot;Join our developer community.&quot;{' '}
        <strong>Avoid marketing language that sounds too promotional</strong>,
        as it tends to alienate technical professionals.
      </p>
      <p>
        If you are interested in learning more about creating high-quality
        digital assets that provide value to your readers, check out our other{' '}
        <a
          href="https://draft.dev/resources"
          target="_blank"
          rel="noopener noreferrer"
        >
          resources
        </a>{' '}
        about creating blog posts and gated assets based on keyword research and
        content clusters
      </p>

      <Heading id="setting-up-retargeting-infrastructure">
        Setting up Retargeting Infrastructure
      </Heading>

      <hr className="my-6" />
      <span className="text-lg font-semibold text-zinc-500">
        The What, Why, and Desired Result
      </span>

      <p className="mt-3">
        <strong>Key Metric:</strong>
      </p>
      <p>Retargeting audience size.</p>

      <p className="mt-2">
        <strong>Why it Matters:</strong>
      </p>
      <p>
        Retargeting helps increase brand awareness by serving ad impressions to
        previous blog visitors, and it increases repeat visits to your site.
      </p>

      <p className="mt-2">
        <strong>Final Result:</strong>
      </p>
      <p>
        Advertising impressions to visitors that have previously engaged with
        your content.
      </p>
      <hr className="my-10" />

      <h3 className="mt-6 text-zinc-600">How does retargeting for ads work?</h3>
      <p>
        After you install a retargeting code snippet, new visitors are marked
        with a cookie whenever they read one of your blog posts. This cookie
        stays in the user&apos;s browser for a certain amount of time, during
        which you can use retargeting to put advertisements in front of those
        visitors. Retargeting advertisements can appear on social media sites
        and any websites that are part of the Google Advertising Network.
      </p>
      <p>
        Depending on your target audience, install the{' '}
        <a
          href="https://www.facebook.com/business/tools/meta-pixel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meta
        </a>
        ,{' '}
        <a
          href="https://support.google.com/google-ads/answer/2476688?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
        ,{' '}
        <a
          href="https://business.x.com/en/advertising"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter/X
        </a>
        , or{' '}
        <a
          href="https://business.linkedin.com/marketing-solutions/ad-targeting/retargeting"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        retargeting scripts on your blog. This code usually goes in the same
        place as your Google Analytics code does, but there&apos;s very good
        documentation for implementing these snippets on each platform&apos;s
        documentation page. If you opt to use Google Tag Manager, you can load
        your snippets from Tag Manager directly.
      </p>

      <h3 className="mt-6 text-zinc-600">
        Privacy considerations (GDPR, CCPA)
      </h3>
      <p>
        According to GDPR regulations in Europe and the CCPA act in California,
        users must give consent to these retargeting cookies. We recommend
        cookie consent solutions like{' '}
        <a
          href="https://cookie-script.com/consent-mode-v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookie Script
        </a>{' '}
        or{' '}
        <a
          href="https://www.iubenda.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iubenda
        </a>{' '}
        for this. You can find a list of &quot;Content Mode Partners&quot; on
        Google&apos;s{' '}
        <a
          href="https://cmppartnerprogram.withgoogle.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CMP Partner Program page
        </a>
        .
      </p>
      <p>
        If you are not sure about the rules in your locale, be sure to check
        with a lawyer or experienced professional first.
      </p>

      <h3 className="mt-6 text-zinc-600">Building audiences without budget</h3>
      <p>
        Even if you don&apos;t run ads right away, it&apos;s very powerful to
        have these tracking scripts in place ahead of time. That way, whenever
        you do decide to start advertising, you can turn it on and immediately
        start sending ad impressions to your cookied visitors, driving traffic
        to your landing page of choice.
      </p>
      <i>
        Dedicated retargeting audiences, based on which pages your visitors have
        visited, are very powerful.
      </i>

      <Guides />
      <Resources />
    </Page>
  )
}
