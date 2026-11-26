// Draft.dev vs Ritza: everything on /compare/ritza.
// Ritza facts come from ritza.co, checked on the date in `checked`.

import type { Competitor } from '../data'
import {
  draftAiAnswer,
  draftGtmAnswer,
  draftResultsAnswer,
  draftWhoAnswer,
} from '../shared'

export const ritza: Competitor = {
  slug: 'ritza',
  name: 'Ritza',
  category: 'DevTool content and marketing agencies',
  tagline: 'A Ritza alternative for developer tool companies',
  verdict:
    "Strategy, content and distribution from $9,000 a month. Ritza focuses on developer docs and education, and doesn't list AI search or publish prices.",
  summary: {
    draft:
      'A GTM agency for developer tools and AI platforms since 2020, trusted by 100+ companies including Docker, JetBrains and Cloudflare.',
    them: 'An engineer-led agency focused on developer documentation and education, legally based in the Netherlands with most of its team in South Africa.',
  },
  facts: {
    who: 'Engineers and ex-engineers; every piece is written, technically reviewed, edited and designed',
    network: null,
    based:
      'Legally in the Netherlands; most of the team in Cape Town and Johannesburg, South Africa',
    builtFor: 'Technical platforms and developer-focused companies',
    content:
      'Docs, onboarding guides, tutorials, competitor comparisons, benchmarks and migration guides',
    docs: 'Yes, its core service, including onboarding and migration guides',
    video: 'Yes, its handbook describes a video production process',
    aeo: null,
    aiTracking: null,
    paid: null,
    distribution: null,
    pricing: 'Not published; quote on request',
    minTerm: 'Starts with a paid trial, then a monthly content subscription',
    start: null,
    revisions: 'Revisions until you are satisfied',
    guarantee:
      '100% satisfaction guarantee: invoiced after the work, and no charge if they cannot meet your expectations',
  },
  pickThem: [
    'Documentation is your main need: docs, onboarding guides or migration guides.',
    'You want solutions engineering, such as technical demos and proofs of concept.',
    'You want user testing and early product feedback from engineers.',
    'You want a satisfaction guarantee: invoices after the work, and no charge if they cannot meet your expectations.',
  ],
  pickDraft: [
    'You want one team for strategy, content, SEO, AI search, paid ads, Reddit and sponsorships.',
    'You want AI citations tracked every month across ChatGPT, Claude, Perplexity and Google AI Overviews.',
    'You want every piece shared on developer channels and by 300 to 500 developers from our network.',
    'You want a published starting price and a team that has published 3,000+ pieces for 100+ companies.',
  ],
  faqs: [
    {
      question: 'How is Draft.dev different from Ritza?',
      answer:
        'Ritza focuses on developer documentation and education: docs, onboarding and migration guides, tutorials, comparisons, SEO and solutions engineering. Draft.dev is a GTM agency that runs your go-to-market, from technical content and docs to SEO, AI search, paid ads, Reddit and sponsorships, with distribution included.',
    },
    {
      question: 'How does pricing compare?',
      answer:
        "Ritza doesn't publish prices. It starts with a paid trial, then a monthly content subscription, and invoices after the work is done. Draft.dev plans start at $9,000 a month, with a 3-month minimum, then month to month.",
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
        them: 'Not published; quote on request',
      },
      {
        label: 'Track record',
        draft: '100+ client companies since 2020, with 3,000+ pieces published',
        them: '9 client companies named on its site',
      },
      {
        label: 'AI search',
        draft: 'AEO and GEO, with AI citations tracked every month',
        them: 'Not listed among its services',
      },
    ],
    reasons: [
      {
        title: 'More than documentation',
        body: 'We create docs and tutorials too, and run your whole go-to-market on top of them: SEO, AI search, paid ads, Reddit, sponsorships and newsletters.',
        stat: {
          value: '211%',
          label:
            'More blog traffic for Status Hero, with 40 hours saved every week',
        },
        href: '/case-studies/status-hero',
        cta: 'Read the case study',
      },
      {
        title: 'AI search, measured every month',
        body: "Ritza doesn't list AI search among its services. We set a baseline before work starts, then track AI citations every month across ChatGPT, Claude, Perplexity and Google AI Overviews.",
        stat: {
          value: '8 weeks',
          label:
            'For a business banking platform to get cited by AI assistants, on a brand new blog',
        },
        href: '/case-studies/business-banking-platform',
        cta: 'Read the case study',
      },
      {
        title: 'Distribution built in',
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
        title: 'A team that can scale with you',
        body: 'Our network of 300+ engineers and subject matter experts lets us add capacity as your plan grows, from a few pieces a month to a full program.',
        stat: {
          value: '3,000+',
          label: 'Pieces published for 100+ client companies since 2020',
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
      'aiTracking',
      'paid',
      'distribution',
      'content',
      'video',
      'pricing',
    ],
    quotes: ['Randall Degges', 'Jenny Medeiros', 'Emily Blitstein'],
  },
  sources: [
    'https://ritza.co/',
    'https://ritza.co/100-guarantee.html',
    'https://ritza.co/handbook/',
    'https://ritza.co/handbook/roles/general-application/',
  ],
  checked: 'November 26, 2026',
}
