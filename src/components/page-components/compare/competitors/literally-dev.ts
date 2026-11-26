// Draft.dev vs Literally.dev: everything on /compare/literally-dev.
// Literally.dev facts come from literally.dev, checked on the date in `checked`.

import type { Competitor } from '../data'
import {
  draftAiAnswer,
  draftGtmAnswer,
  draftResultsAnswer,
  draftWhoAnswer,
} from '../shared'

export const literallyDev: Competitor = {
  slug: 'literally-dev',
  name: 'Literally.dev',
  category: 'DevTool content and marketing agencies',
  tagline: 'A Literally.dev alternative for developer tool companies',
  verdict:
    'Strategy, content and distribution from $9,000 a month, run as an ongoing program. Literally.dev sells a 90-day AI-visibility sprint for $4,990 a month.',
  summary: {
    draft:
      'A GTM agency for developer tools and AI platforms since 2020, trusted by 100+ companies including Docker, JetBrains and Cloudflare.',
    them: 'An AI-visibility and content agency in Oslo, Norway, run by a core team of four with a vetted expert network.',
  },
  facts: {
    who: 'Hand-vetted engineers matched to each piece, edited in-house',
    network: 'The top 2.7% of a hand-vetted expert network (size not stated)',
    based: 'Oslo, Norway',
    builtFor:
      'Technical teams in the US and Europe: developer tools, AI, infrastructure and observability',
    content:
      '10 articles a month in the 90-day sprint; ongoing, project and on-demand content also offered',
    docs: 'Yes: developer, API and user docs, kept current as the product changes',
    video: 'Yes: explainer videos, product demos and animations',
    aeo: 'Yes, a 90-day AI Recommendation Sprint, plus an $8,990 team training program',
    aiTracking:
      'A baseline on 25 to 50 buyer queries, a live dashboard and a re-measure at day 85',
    paid: null,
    distribution:
      'A guaranteed monthly feature in a tech publication with 4M+ readers and in a major newsletter, plus a client cross-promotion network',
    pricing: '$4,990 a month for the sprint',
    minTerm:
      '3 months, then a monthly subscription; 10% off for a 6-month term, 15% off for 12',
    guarantee:
      "If the numbers don't move by day 90, they keep working for free until they do",
    start: 'Onboarding in 5 days or less',
    revisions: 'Two rounds, then a full rewrite or a new writer',
  },
  pickThem: [
    "You want a fixed-price, 90-day AI-visibility sprint with a guarantee: they keep working for free if the numbers don't move.",
    'You want a guaranteed monthly feature in a tech publication with 4M+ readers.',
    'You want to train your own team, with a four-week AI-visibility program for $8,990.',
    'You want to start within 5 days.',
  ],
  pickDraft: [
    'You want one team to plan and run your go-to-market: content, SEO, AI search, paid ads, Reddit and sponsorships.',
    'You want one program that grows over time, from strategy to paid channels, rather than a 90-day AI-visibility sprint.',
    'You want a team that has published 3,000+ pieces for 100+ companies.',
    'You want unlimited revisions, and 300 to 500 developers from our network lined up to share each piece.',
  ],
  faqs: [
    {
      question: 'How is Draft.dev different from Literally.dev?',
      answer:
        "Literally.dev's main offer is a 90-day AI-visibility sprint: 10 articles a month, a monthly publication and newsletter feature, and a live dashboard, for $4,990 a month. Draft.dev is a GTM agency that runs your go-to-market as an ongoing program, from technical content to SEO, AI search, paid ads, Reddit and sponsorships.",
    },
    {
      question: 'How does pricing compare?',
      answer:
        "Literally.dev's sprint costs $4,990 a month with a 3-month minimum, with 10% off for 6 months and 15% off for 12. Its team training program is a one-off $8,990. Draft.dev plans start at $9,000 a month, with a 3-month minimum, then month to month.",
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
        them: '$4,990 a month for a 90-day sprint of 10 articles a month',
      },
      {
        label: 'Track record',
        draft: '100+ client companies since 2020, with 3,000+ pieces published',
        them: '15 client companies on its site; takes 2 new clients a month',
      },
      {
        label: 'Team',
        draft: 'A network of 300+ engineers and subject matter experts',
        them: 'A core team of 4, plus a vetted network (size not stated)',
      },
    ],
    reasons: [
      {
        title: 'More than an AI-visibility sprint',
        body: "Literally.dev's main offer is a 90-day AI-visibility sprint. We run your whole go-to-market on top of the content: SEO, AI search, paid ads, Reddit, sponsorships and newsletters.",
        stat: {
          value: '211%',
          label:
            'More blog traffic for Status Hero, with 40 hours saved every week',
        },
        href: '/case-studies/status-hero',
        cta: 'Read the case study',
      },
      {
        title: 'AI citations in as little as 8 weeks',
        body: "Literally.dev says AI search results typically take about 90 days. Results vary by client, but a business banking platform we work with was cited within 8 weeks, and our articles earn 72% of a developer API platform's AI citations.",
        stat: {
          value: '8 weeks',
          label:
            'For a business banking platform to get cited by AI assistants, on a brand new blog',
        },
        href: '/case-studies/business-banking-platform',
        cta: 'Read the case study',
      },
      {
        title: 'An ongoing program, not a sprint',
        body: "Literally.dev's main offer is a 90-day sprint. Ours is an ongoing program: 3 months to set your strategy and build momentum, then month to month, so results can keep compounding.",
        stat: {
          value: '10x',
          label: 'More blog views in seven months for a developer API platform',
        },
        href: '/case-studies/developer-api-platform',
        cta: 'Read the case study',
      },
      {
        title: 'A team that can scale with you',
        body: 'Literally.dev runs on a core team of four and takes two new clients a month. Our network of 300+ engineers and subject matter experts lets us add capacity as your plan grows.',
        stat: {
          value: '3,000+',
          label: 'Pieces published for 100+ client companies since 2020',
        },
        href: '/technical-content-examples',
        cta: 'See work we did for clients',
      },
      {
        title: 'Our own developer network',
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
        title: 'Unlimited revisions',
        body: 'Every piece gets unlimited revisions until it is right. Literally.dev offers two rounds, then a full rewrite or a new writer.',
        quote: {
          text: 'The attention to technical detail from start to finish has been a huge addition to our content.',
          by: 'Tony Chan, CloudForecast',
        },
        href: '/case-studies',
        cta: 'See more client results',
      },
    ],
    keyRows: [
      'paid',
      'distribution',
      'aiTracking',
      'who',
      'builtFor',
      'revisions',
    ],
    quotes: ['Dawn Parzych', 'Nicholas DeWald', 'Rich Burroughs'],
  },
  sources: [
    'https://www.literally.dev/',
    'https://www.literally.dev/about',
    'https://www.literally.dev/aeo-services',
    'https://www.literally.dev/technical-content',
    'https://www.literally.dev/technical-documentation',
  ],
  checked: 'November 26, 2026',
}
