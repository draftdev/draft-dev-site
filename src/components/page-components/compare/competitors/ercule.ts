// Draft.dev vs ércule: everything on /compare/ercule.
// ércule facts come from ercule.com, checked on the date in `checked`.

import type { Competitor } from '../data'
import {
  draftAiAnswer,
  draftGtmAnswer,
  draftResultsAnswer,
  draftWhoAnswer,
} from '../shared'

export const ercule: Competitor = {
  slug: 'ercule',
  name: 'ércule',
  category: 'More DevTool agencies',
  tagline: 'An ércule alternative for developer tool companies',
  verdict:
    'Draft.dev adds engineer-checked content, paid ads and a 7,000+ developer network to search. ércule focuses on organic SEO and GEO tied to analytics.',
  summary: {
    draft:
      'A GTM agency for developer tools and AI platforms since 2020, trusted by 100+ companies including Docker, JetBrains and Cloudflare.',
    them: 'An organic growth agency that embeds with marketing teams, tying SEO and GEO, content production, content engineering and analytics together.',
  },
  facts: {
    who: null,
    network: null,
    based: null,
    builtFor: 'B2B and developer-focused companies',
    content: 'Weekly search-optimized outlines',
    docs: 'Yes',
    video: null,
    aeo: 'Yes, SEO and GEO, starting with an LLM coverage report',
    aiTracking:
      'Starts with an LLM coverage report; covers Google, ChatGPT, Perplexity and Gemini',
    paid: null,
    distribution: 'LinkedIn, Reddit and email',
    pricing: 'Agency pricing not published; its analytics app has a free plan',
    minTerm: null,
    start: null,
    revisions: null,
  },
  pickThem: [
    'You want SEO and GEO tied closely to analytics and content engineering.',
    'You want help proving content ROI, connecting what you publish to pipeline.',
    'You want a self-serve analytics app, with a free plan.',
    'You want help with product marketing, such as positioning.',
  ],
  pickDraft: [
    'You want every piece checked by an engineer who tests the code.',
    'You want paid ads and newsletter, podcast and community sponsorships alongside organic growth.',
    'You want 300 to 500 developers from our 7,000+ network lined up to share each piece.',
    'You want an agency built for developer tools and AI platforms, at a published starting price.',
  ],
  faqs: [
    {
      question: 'How is Draft.dev different from ércule?',
      answer:
        'ércule is an organic growth agency that embeds with marketing teams and ties SEO and GEO, content production, content engineering and analytics together. Draft.dev is built for developer audiences: an engineer checks every piece, and we run paid ads, sponsorships and a 7,000+ developer network alongside SEO and AI search.',
    },
    {
      question: 'How does pricing compare?',
      answer:
        "ércule doesn't publish agency pricing; its analytics app has a free plan. Draft.dev plans start at $9,000 a month, with a 3-month minimum, then month to month.",
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
        them: 'Agency pricing not published',
      },
      {
        label: 'Who checks the content',
        draft: 'An engineer checks every piece and tests the code',
        them: 'Not stated on its site',
      },
      {
        label: 'Paid and sponsorships',
        draft: 'Paid ads, plus newsletter, podcast and community sponsorships',
        them: 'Not listed among its services',
      },
    ],
    reasons: [
      {
        title: 'Engineers check every piece',
        body: "ércule doesn't say who writes or checks its content. At Draft.dev, an engineer checks every piece and tests the code before a technical editor polishes it.",
        stat: {
          value: '17',
          label:
            "Articles we wrote for a developer API platform now rank on Google's first page",
        },
        href: '/case-studies/developer-api-platform',
        cta: 'Read the case study',
      },
      {
        title: 'More than organic growth',
        body: 'ércule focuses on organic growth. We run your whole go-to-market: SEO and AI search, plus paid ads and newsletter, podcast and community sponsorships.',
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
        title: 'Built for developer audiences',
        body: 'ércule serves B2B companies as well as developer-focused ones. We specialize in developer tools and AI platforms, and have published 3,000+ pieces for 100+ of them since 2020.',
        stat: {
          value: '100+',
          label:
            'Client companies since 2020, including Docker, JetBrains and Cloudflare',
        },
        href: '/technical-content-examples',
        cta: 'See work we did for clients',
      },
      {
        title: 'AI citations in as little as 8 weeks',
        body: 'We plan content for AI answers from the first piece, then track citations every month across ChatGPT, Claude, Perplexity and Google AI Overviews.',
        stat: {
          value: '8 weeks',
          label:
            'For a business banking platform to get cited by AI assistants, on a brand new blog',
        },
        href: '/case-studies/business-banking-platform',
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
    keyRows: ['who', 'paid', 'distribution', 'builtFor', 'network', 'pricing'],
    quotes: ['Abhishek Iyer', 'Dawn Parzych', 'Rich Burroughs'],
  },
  sources: [
    'https://www.ercule.com/',
    'https://www.ercule.com/services/seo-and-geo',
    'https://www.ercule.com/services/content-production',
    'https://www.ercule.com/services/content-strategy',
    'https://www.ercule.com/services/content-engineering',
    'https://www.ercule.com/pricing',
  ],
  checked: 'November 27, 2026',
}
