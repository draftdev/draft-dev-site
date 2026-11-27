// Draft.dev vs Infrasity: everything on /compare/infrasity.
// Infrasity facts come from infrasity.com, checked on the date in `checked`.
// AI answer shares come from Scrunch: topic "developer content agency",
// prompts that don't name Draft.dev, Oct 26 to Nov 24, 2026
// (Draft.dev 679 of 1,063 answers, Infrasity 446 of 1,063).

import type { Competitor } from '../data'
import {
  draftAiAnswer,
  draftGtmAnswer,
  draftResultsAnswer,
  draftWhoAnswer,
} from '../shared'

export const infrasity: Competitor = {
  slug: 'infrasity',
  name: 'Infrasity',
  category: 'DevTool content and marketing agencies',
  tagline: 'An Infrasity alternative for developer tool companies',
  verdict:
    'Draft.dev has worked with 100+ companies since 2020 and is named in more AI answers. Infrasity, founded in 2024, has 30+ startup clients.',
  summary: {
    draft:
      'A GTM agency for developer tools and AI platforms since 2020, trusted by 100+ companies including Docker, JetBrains and Cloudflare.',
    them: 'A developer marketing and technical content agency for devtool and AI startups, with an in-office team of 15+ in New Delhi.',
  },
  facts: {
    who: 'An engineering-led in-house team',
    network: '15+ team members, in the office in New Delhi',
    based: 'New Delhi, India',
    builtFor: 'DevTool, infrastructure and AI startups',
    content:
      '4 long-form blogs a month on the Starter plan; 6 to 8 blogs and 2 videos a month on the Scale plan',
    docs: 'Yes, including onboarding docs and SDK examples',
    video: 'Yes, 2 video walkthroughs a month on the Scale plan',
    aeo: 'Yes, AEO and GEO services',
    aiTracking:
      'A baseline, then citations and share of voice across ChatGPT, Claude, Perplexity, Gemini and AI Overviews',
    paid: 'Reddit ad campaigns, when suitable',
    distribution: 'Reddit marketing',
    pricing: 'Not published',
    minTerm: 'No upfront commitment, it says',
    start: '7 to 10 day turnaround per post',
    revisions: 'Up to 2 revisions per post',
  },
  pickThem: [
    'You are an early-stage devtool, infrastructure or AI startup and want a fixed plan of 4 to 8 blogs a month.',
    'You want video walkthroughs, docs and SDK examples in one plan.',
    'You want Reddit marketing, including ad campaigns when suitable.',
    'You want no upfront commitment.',
  ],
  pickDraft: [
    'You want a team with 100+ clients since 2020 that is named in more AI answers.',
    'You want unlimited revisions, not 2 per post.',
    'You want newsletter, podcast and community sponsorships, plus 300 to 500 developers from our network sharing each piece.',
    'You want a network of 300+ engineers that can scale with your plan.',
  ],
  faqs: [
    {
      question: 'How is Draft.dev different from Infrasity?',
      answer:
        'Infrasity is an in-office team of 15+ in New Delhi, founded in 2024, focused on early-stage devtool and AI startups, with plans of 4 to 8 blogs a month. Draft.dev has worked with 100+ companies since 2020, runs sponsorships and a 7,000+ developer network, and gives every piece unlimited revisions.',
    },
    {
      question: 'How does pricing compare?',
      answer:
        "Infrasity doesn't publish prices and says there's no upfront commitment. Draft.dev plans start at $9,000 a month, with a 3-month minimum, then month to month.",
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
        them: '30+ startups since early 2024',
      },
      {
        label: 'Named in AI answers',
        draft: '63.9% of AI answers on developer content agencies (Scrunch)',
        them: '42.0% of the same answers (Scrunch)',
      },
    ],
    reasons: [
      {
        title: 'Named more often in AI answers',
        body: 'When buyers ask AI assistants which agency to hire for developer content, Draft.dev comes up about 1.5 times as often as Infrasity.',
        stat: {
          value: '63.9%',
          label:
            'Of AI answers on developer content agencies name Draft.dev, vs 42.0% for Infrasity (Oct 26 to Nov 24, 2026)',
        },
        href: '/aeo-geo-services-for-devtools',
        cta: 'How we track AI visibility',
      },
      {
        title: 'Six years of client results',
        body: 'Infrasity began in early 2024 and has worked with 30+ startups. We have published 3,000+ pieces for 100+ companies since 2020.',
        stat: {
          value: '100+',
          label:
            'Client companies since 2020, including Docker, JetBrains and Cloudflare',
        },
        href: '/technical-content-examples',
        cta: 'See work we did for clients',
      },
      {
        title: 'Capacity that grows with you',
        body: 'Infrasity is an in-office team of 15+. Our network of 300+ engineers and subject matter experts lets us add capacity as your plan grows.',
        quote: {
          text: 'Their capacity to deliver high-quality, specialized articles allows us to consistently engage our audience with valuable material.',
          by: 'Nicholas DeWald, Prove',
        },
        href: '/content-production',
        cta: 'See content production',
      },
      {
        title: 'Sponsorships and a developer network',
        body: 'Infrasity runs Reddit marketing. We also run newsletter, podcast and community sponsorships, and shortlist 300 to 500 developers from our 7,000+ network to share each piece.',
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
        body: "Infrasity's plans include up to 2 revisions per post. Every Draft.dev piece gets unlimited revisions until it is right.",
        quote: {
          text: 'The attention to technical detail from start to finish has been a huge addition to our content.',
          by: 'Tony Chan, CloudForecast',
        },
        href: '/case-studies',
        cta: 'See more client results',
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
      'network',
      'revisions',
      'paid',
      'distribution',
      'builtFor',
      'pricing',
    ],
    quotes: ['Dawn Parzych', 'Randall Degges', 'Ravi Dehar'],
  },
  sources: [
    'https://www.infrasity.com/',
    'https://www.infrasity.com/pricing',
    'https://www.infrasity.com/careers',
    'https://www.infrasity.com/services/ai-geo-optimization-agency',
    'https://www.infrasity.com/services/reddit-marketing-agency',
  ],
  checked: 'November 27, 2026',
}
