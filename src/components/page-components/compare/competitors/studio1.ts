// Draft.dev vs Studio1: everything on /compare/studio1.
// Studio1 facts come from studio1hq.com, checked on the date in `checked`.

import type { Competitor } from '../data'
import {
  draftAiAnswer,
  draftGtmAnswer,
  draftResultsAnswer,
  draftWhoAnswer,
} from '../shared'

export const studio1: Competitor = {
  slug: 'studio1',
  name: 'Studio1',
  category: 'DevTool content and marketing agencies',
  tagline: 'A Studio1 alternative for developer tool companies',
  verdict:
    'Draft.dev adds paid ads, sponsorships and a 7,000+ developer network to developer content. Studio1 focuses on DevRel, launches and open-source growth.',
  summary: {
    draft:
      'A GTM agency for developer tools and AI platforms since 2020, trusted by 100+ companies including Docker, JetBrains and Cloudflare.',
    them: 'A DevRel and developer marketing agency for devtool, AI and open-source teams, trusted by 35+ teams.',
  },
  facts: {
    who: 'Engineers and technical writers matched to your stack',
    network: null,
    based: 'India',
    builtFor: 'Devtool, AI and open-source teams',
    content: 'Tutorials, SEO articles and guides',
    docs: 'Yes, including docs audits and DX reviews',
    video: 'Yes, product demos, tutorials and shorts',
    aeo: 'Yes, an AEO service for developer tools',
    aiTracking: null,
    paid: null,
    distribution:
      'Reddit, X, LinkedIn and developer communities, plus launch support',
    pricing: 'Not published',
    minTerm: null,
    start: null,
    revisions: null,
  },
  pickThem: [
    'You want end-to-end DevRel programs, from community to events.',
    'You are growing an open-source project and want GitHub growth support.',
    'You want launch-day support: launch content and community posts.',
    'You want docs audits and developer experience reviews.',
  ],
  pickDraft: [
    'You want paid ads and newsletter, podcast and community sponsorships alongside content.',
    'You want AI citations tracked every month across ChatGPT, Claude, Perplexity and Google AI Overviews.',
    'You want 300 to 500 developers from our 7,000+ network lined up to share each piece.',
    'You want a team that has worked with 100+ companies since 2020, at a published starting price.',
  ],
  faqs: [
    {
      question: 'How is Draft.dev different from Studio1?',
      answer:
        'Studio1 is a DevRel and developer marketing agency for devtool, AI and open-source teams, with launches, GitHub growth, docs audits and video. Draft.dev is a GTM agency that adds paid ads, sponsorships, monthly AI citation tracking and a 7,000+ developer network.',
    },
    {
      question: 'How does pricing compare?',
      answer:
        "Studio1 doesn't publish prices. Draft.dev plans start at $9,000 a month, with a 3-month minimum, then month to month.",
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
        them: 'Not published',
      },
      {
        label: 'Track record',
        draft: '100+ client companies since 2020, with 3,000+ pieces published',
        them: '35+ devtool and AI teams',
      },
      {
        label: 'Paid and sponsorships',
        draft: 'Paid ads, plus newsletter, podcast and community sponsorships',
        them: 'Not listed among its services',
      },
    ],
    reasons: [
      {
        title: 'More than DevRel and content',
        body: "Studio1 doesn't list paid ads or sponsorships. We run your whole go-to-market: content, SEO, AI search, paid ads, Reddit and newsletter, podcast and community sponsorships.",
        stat: {
          value: '211%',
          label:
            'More blog traffic for Status Hero, with 40 hours saved every week',
        },
        href: '/case-studies/status-hero',
        cta: 'Read the case study',
      },
      {
        title: 'A developer network on every piece',
        body: 'Every piece is shared on Reddit, Hacker News, DEV, Hashnode and LinkedIn, and we shortlist 300 to 500 developers from our 7,000+ network to share it.',
        stat: {
          value: '60+',
          label:
            'Placements for one product launch, shared by developers in our network',
        },
        href: '/influencer-distribution-for-devtools',
        cta: 'See influencer distribution',
      },
      {
        title: 'AI search, measured every month',
        body: "Studio1 offers AEO but doesn't describe how it tracks results. We set a baseline before work starts, then track AI citations every month across ChatGPT, Claude, Perplexity and Google AI Overviews.",
        stat: {
          value: '8 weeks',
          label:
            'For a business banking platform to get cited by AI assistants, on a brand new blog',
        },
        href: '/case-studies/business-banking-platform',
        cta: 'Read the case study',
      },
      {
        title: 'A longer track record',
        body: 'Studio1 lists 35+ teams. We have published 3,000+ pieces for 100+ companies since 2020, with 300+ engineers and subject matter experts behind them.',
        stat: {
          value: '100+',
          label:
            'Client companies since 2020, including Docker, JetBrains and Cloudflare',
        },
        href: '/technical-content-examples',
        cta: 'See work we did for clients',
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
      {
        title: 'Content that turns readers into users',
        body: 'We plan each piece around what developers search for when they are choosing a tool, so the readers we bring in are ready to try your product.',
        stat: {
          value: '6%',
          label:
            "Of Earthly's blog readers convert, with 1,500 visitors every workday",
        },
        href: '/case-studies/earthly',
        cta: 'Read the case study',
      },
    ],
    keyRows: [
      'paid',
      'aiTracking',
      'distribution',
      'network',
      'builtFor',
      'pricing',
    ],
    quotes: ['Abhishek Iyer', 'Rich Burroughs', 'Emily Blitstein'],
  },
  sources: [
    'https://www.studio1hq.com/',
    'https://www.studio1hq.com/developer-documentation-dx-audit',
    'https://www.studio1hq.com/developer-video-production',
    'https://www.studio1hq.com/developer-relations-growth-campaigns',
    'https://www.studio1hq.com/terms',
  ],
  checked: 'November 27, 2026',
}
