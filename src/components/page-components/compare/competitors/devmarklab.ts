// Draft.dev vs DevMarkLab: everything on /compare/devmarklab.
// DevMarkLab facts come from devmarklab.com, checked on the date in `checked`.

import type { Competitor } from '../data'
import {
  draftAiAnswer,
  draftGtmAnswer,
  draftResultsAnswer,
  draftWhoAnswer,
} from '../shared'

export const devmarklab: Competitor = {
  slug: 'devmarklab',
  name: 'DevMarkLab',
  category: 'DevTool content and marketing agencies',
  tagline: 'A DevMarkLab alternative for developer tool companies',
  verdict:
    'Draft.dev pairs organic growth with paid ads and sponsorships, backed by 100+ clients since 2020. DevMarkLab is a founder-led organic agency in Jaipur.',
  summary: {
    draft:
      'A GTM agency for developer tools and AI platforms since 2020, trusted by 100+ companies including Docker, JetBrains and Cloudflare.',
    them: 'A founder-led developer marketing agency in Jaipur, India, focused on organic growth: SEO, content, Reddit and social, with no paid ads.',
  },
  facts: {
    who: 'Writers who have built or shipped products like yours',
    network: 'A founder-led team (size not stated)',
    based: 'Jaipur, India',
    builtFor: 'Dev-first SaaS companies',
    content: 'Weekly sprints of posts, docs, tutorials and social content',
    docs: 'Yes, docs and tutorials, listed under content',
    video: null,
    aeo: 'Yes, AI search as part of its SEO service',
    aiTracking: null,
    paid: "None; it says developers don't click ads",
    distribution: 'Reddit (50+ subreddits), X, LinkedIn and Hacker News',
    pricing: 'Not published; engagements start with a growth audit',
    minTerm: null,
    start: 'Audit in week 1, plan in week 2, publishing from week 3',
    revisions: null,
  },
  pickThem: [
    'You want organic growth only, with no paid ads.',
    'You want Reddit marketing across 50+ developer subreddits.',
    'You want a growth audit before committing.',
    'You want the founder hands-on in your account.',
  ],
  pickDraft: [
    'You want paid ads and newsletter, podcast and community sponsorships alongside organic growth.',
    'You want a team with 100+ clients and 3,000+ pieces published since 2020.',
    'You want AI citations tracked every month across ChatGPT, Claude, Perplexity and Google AI Overviews.',
    'You want video tutorials and a full video marketing service alongside your content.',
  ],
  faqs: [
    {
      question: 'How is Draft.dev different from DevMarkLab?',
      answer:
        'DevMarkLab is a founder-led agency in Jaipur focused on organic growth: SEO, content, Reddit and social, with no paid ads. Draft.dev has worked with 100+ companies since 2020 and runs paid ads, sponsorships and a 7,000+ developer network alongside SEO and AI search.',
    },
    {
      question: 'How does pricing compare?',
      answer:
        "DevMarkLab doesn't publish prices; engagements start with a growth audit. Draft.dev plans start at $9,000 a month, with a 3-month minimum, then month to month.",
    },
    draftGtmAnswer,
    draftResultsAnswer,
    draftAiAnswer,
    {
      question: 'Does Draft.dev create technical documentation?',
      answer:
        'Yes. We create documentation, API reference docs, product guides and tested code samples, each reviewed by a subject matter expert, and keep them up to date as your product changes.',
    },
    draftWhoAnswer,
  ],
  pitch: {
    heroRows: [
      {
        label: 'Price',
        draft: 'From $9,000 a month for strategy, content and distribution',
        them: 'Not published; starts with a growth audit',
      },
      {
        label: 'Paid channels',
        draft: 'Paid ads, plus newsletter, podcast and community sponsorships',
        them: "None; it says developers don't click ads",
      },
      {
        label: 'Track record',
        draft: '100+ client companies since 2020, with 3,000+ pieces published',
        them: 'Two client results published on its site',
      },
    ],
    reasons: [
      {
        title: 'Paid and organic together',
        body: 'DevMarkLab runs organic growth only. We run SEO, AI search and Reddit too, and add paid ads and newsletter, podcast and community sponsorships when they pay off.',
        stat: {
          value: '211%',
          label:
            'More blog traffic for Status Hero, with 40 hours saved every week',
        },
        href: '/case-studies/status-hero',
        cta: 'Read the case study',
      },
      {
        title: '100+ clients since 2020',
        body: 'We have published 3,000+ pieces for 100+ tech companies since 2020, including Docker, JetBrains and Cloudflare.',
        stat: {
          value: '3,000+',
          label: 'Pieces published for 100+ client companies since 2020',
        },
        href: '/technical-content-examples',
        cta: 'See work we did for clients',
      },
      {
        title: 'AI search, measured every month',
        body: 'DevMarkLab includes AI search in its SEO service. We also set a baseline before work starts, then track AI citations every month across ChatGPT, Claude, Perplexity and Google AI Overviews.',
        stat: {
          value: '8 weeks',
          label:
            'For a business banking platform to get cited by AI assistants, on a brand new blog',
        },
        href: '/case-studies/business-banking-platform',
        cta: 'Read the case study',
      },
      {
        title: 'A developer network on every piece',
        body: 'On top of Reddit, Hacker News, DEV, Hashnode and LinkedIn, we shortlist 300 to 500 developers from our 7,000+ network to share each piece.',
        stat: {
          value: '60+',
          label:
            'Placements for one product launch, shared by developers in our network',
        },
        href: '/influencer-distribution-for-devtools',
        cta: 'See influencer distribution',
      },
      {
        title: 'Video as well as written content',
        body: "DevMarkLab doesn't list video. We make video tutorials and run a full video marketing service alongside your articles and docs.",
        quote: {
          text: 'Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials.',
          by: 'Randall Degges, Snyk',
        },
        href: '/video-marketing-for-devtools',
        cta: 'See video marketing',
      },
      {
        title: 'Growth you can track',
        body: 'We hold monthly analytics check-ins on traffic, rankings and AI citations, and adjust the roadmap based on what moved.',
        stat: {
          value: '10x',
          label: 'More blog views in seven months for a developer API platform',
        },
        href: '/case-studies/developer-api-platform',
        cta: 'Read the case study',
      },
    ],
    keyRows: [
      'paid',
      'network',
      'video',
      'aiTracking',
      'distribution',
      'pricing',
    ],
    quotes: ['Ravi Dehar', 'Jenny Medeiros', 'Nicholas DeWald'],
  },
  sources: [
    'https://devmarklab.com/',
    'https://devmarklab.com/services/',
    'https://devmarklab.com/about/',
    'https://devmarklab.com/services/content-for-devtools/',
  ],
  checked: 'November 27, 2026',
}
