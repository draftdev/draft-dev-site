// Draft.dev vs Wizard on Demand: everything on /compare/wizard-on-demand.
// Wizard on Demand facts come from wizardondemand.com, checked on the date
// in `checked`.

import type { Competitor } from '../data'
import {
  draftAiAnswer,
  draftGtmAnswer,
  draftResultsAnswer,
  draftWhoAnswer,
} from '../shared'

export const wizardOnDemand: Competitor = {
  slug: 'wizard-on-demand',
  name: 'Wizard on Demand',
  category: 'DevTool content and marketing agencies',
  tagline: 'A Wizard on Demand alternative for developer tool companies',
  verdict:
    'Draft.dev brings 300+ engineers and monthly AI citation tracking. Wizard on Demand is a team of 17 in Estonia that adds paid media and ad creative.',
  summary: {
    draft:
      'A GTM agency for developer tools and AI platforms since 2020, trusted by 100+ companies including Docker, JetBrains and Cloudflare.',
    them: 'A technical content and advertising agency for devtools and infrastructure companies, based mostly in Europe.',
  },
  facts: {
    who: 'Writers with a technical background, plus editors and designers; they learn the product through interviews and demos',
    network: 'A team of 17, all in-house',
    based:
      'Tallinn, Estonia; most of the team in Europe, some in the US and Canada',
    builtFor: 'Devtools and enterprise infrastructure companies',
    content:
      'Articles, blog posts, ebooks and pages, plus information architecture',
    docs: null,
    video: null,
    aeo: 'Yes, SEO and GEO',
    aiTracking: null,
    paid: 'Paid search and paid social, including Reddit and LinkedIn ads, with its own ad creative',
    distribution: 'SEO and GEO, organic social and paid media',
    pricing: 'Not published; quote after a meeting',
    minTerm: null,
    start: null,
    revisions: null,
  },
  pickThem: [
    'You want content and advertising from one team, including ad copy, creative and media buying.',
    'You want an in-house team of 17, mostly in Europe, covering European and North American time zones.',
    'You want help with information architecture and analytics setup.',
    "You promote an open-source project: they grew traffic to deepset's Haystack by 800%.",
  ],
  pickDraft: [
    'You want a network of 300+ engineers that can scale with your plan.',
    'You want AI citations tracked every month across ChatGPT, Claude, Perplexity and Google AI Overviews.',
    'You want newsletter, podcast and community sponsorships, plus 300 to 500 developers from our network sharing each piece.',
    'You need documentation or video alongside your marketing.',
  ],
  faqs: [
    {
      question: 'How is Draft.dev different from Wizard on Demand?',
      answer:
        'Wizard on Demand is a team of 17 that combines technical content with paid advertising, including its own ad creative. Draft.dev is a GTM agency with a network of 300+ engineers, AI citations tracked every month, sponsorships and a 7,000+ developer network.',
    },
    {
      question: 'How does pricing compare?',
      answer:
        "Wizard on Demand doesn't publish prices; it quotes after a meeting. Draft.dev plans start at $9,000 a month, with a 3-month minimum, then month to month.",
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
        them: 'Not published; quote after a meeting',
      },
      {
        label: 'Team',
        draft: 'A network of 300+ engineers and subject matter experts',
        them: 'A team of 17, all in-house',
      },
      {
        label: 'AI search',
        draft: 'AEO and GEO, with AI citations tracked every month',
        them: 'GEO offered; AI visibility tracking not described',
      },
    ],
    reasons: [
      {
        title: 'Capacity that grows with you',
        body: 'Our network of 300+ engineers and subject matter experts lets us add capacity as your plan grows, from a few pieces a month to a full program.',
        stat: {
          value: '3,000+',
          label: 'Pieces published for 100+ client companies since 2020',
        },
        href: '/technical-content-examples',
        cta: 'See work we did for clients',
      },
      {
        title: 'AI search, measured every month',
        body: "Wizard on Demand offers GEO but doesn't describe how it tracks AI visibility. We set a baseline before work starts, then track AI citations every month across ChatGPT, Claude, Perplexity and Google AI Overviews.",
        stat: {
          value: '8 weeks',
          label:
            'For a business banking platform to get cited by AI assistants, on a brand new blog',
        },
        href: '/case-studies/business-banking-platform',
        cta: 'Read the case study',
      },
      {
        title: 'Sponsorships and a developer network',
        body: 'Beyond paid ads, we run newsletter, podcast and community sponsorships, and shortlist 300 to 500 developers from our 7,000+ network to share each piece.',
        stat: {
          value: '60+',
          label:
            'Placements for one product launch, shared by developers in our network',
        },
        href: '/influencer-distribution-for-devtools',
        cta: 'See influencer distribution',
      },
      {
        title: 'Docs and video too',
        body: "Wizard on Demand doesn't list documentation or video. We create docs, including API reference docs kept up to date, and run a full video marketing service.",
        quote: {
          text: 'Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials.',
          by: 'Randall Degges, Snyk',
        },
        href: '/technical-documentation-for-devtools',
        cta: 'See documentation services',
      },
      {
        title: 'Engineers check every piece',
        body: 'Wizard on Demand hires writers with a technical background. At Draft.dev, an engineer checks every piece and tests the code before a technical editor polishes it.',
        stat: {
          value: '17',
          label:
            "Articles we wrote for a developer API platform now rank on Google's first page",
        },
        href: '/case-studies/developer-api-platform',
        cta: 'Read the case study',
      },
      {
        title: 'Growth you can track',
        body: 'We hold monthly analytics check-ins on traffic, rankings and AI citations, and adjust the roadmap based on what moved.',
        stat: {
          value: '211%',
          label:
            'More blog traffic for Status Hero, with 40 hours saved every week',
        },
        href: '/case-studies/status-hero',
        cta: 'Read the case study',
      },
    ],
    keyRows: [
      'aiTracking',
      'network',
      'distribution',
      'docs',
      'video',
      'pricing',
    ],
    quotes: ['Nicholas DeWald', 'Jenny Medeiros', 'Rich Burroughs'],
  },
  sources: [
    'https://www.wizardondemand.com/',
    'https://www.wizardondemand.com/meeting/tech-marketing-agency',
    'https://www.wizardondemand.com/services/technical-content-marketing-and-technical-writing',
    'https://www.wizardondemand.com/services/paid-media-services-for-devtools-companies-and-startups',
  ],
  checked: 'November 26, 2026',
}
