// Draft.dev vs Catchy: everything on /compare/catchy.
// Catchy facts come from catchyagency.com, checked on the date in `checked`.
// AI answer shares come from Scrunch: topic "developer content agency",
// prompts that don't name Draft.dev, Oct 26 to Nov 24, 2026
// (Draft.dev 679 of 1,063 answers, Catchy 66 of 1,063).

import type { Competitor } from '../data'
import {
  draftAiAnswer,
  draftGtmAnswer,
  draftResultsAnswer,
  draftWhoAnswer,
} from '../shared'

export const catchy: Competitor = {
  slug: 'catchy',
  name: 'Catchy',
  category: 'DevTool content and marketing agencies',
  tagline: 'A Catchy alternative for developer tool companies',
  verdict:
    'Draft.dev is named in AI answers about 10 times as often as Catchy, with engineers checking every piece. Catchy runs broad developer programs.',
  summary: {
    draft:
      'A GTM agency for developer tools and AI platforms since 2020, trusted by 100+ companies including Docker, JetBrains and Cloudflare.',
    them: 'A developer marketing agency with offices in the UK and the US, running developer programs from events and community to developer portals.',
  },
  facts: {
    who: null,
    network: null,
    based:
      'Offices in the UK and the US (Seattle), with teams across Europe and the US',
    builtFor:
      'Startups to Fortune 500 brands, including Meta, Atlassian, Google, AWS and Qualcomm',
    content:
      'Blog posts, technical articles and tutorials, plus video, social media and events',
    docs: 'Yes, documentation and developer portals',
    video: 'Yes, demos, explainers and tutorials',
    aeo: null,
    aiTracking: null,
    paid: 'Paid media planning and developer influencer programs',
    distribution:
      'Influencer programs, social media, events and community programs',
    pricing: 'Not published',
    minTerm: null,
    start: null,
    revisions: null,
  },
  pickThem: [
    'You want developer events, in-person activations and community programs.',
    'You run a large global developer program, like Catchy does for Meta, Google and AWS.',
    'Developer experience is the priority: documentation and developer portals.',
    'You want its research tools, such as social listening and an AI developer panel.',
  ],
  pickDraft: [
    'You want AI search with a baseline and AI citations tracked every month.',
    'You want every piece checked by an engineer who tests the code, then polished by a technical editor.',
    'You want every piece shared on developer channels and by 300 to 500 developers from our network.',
    'You want a published starting price, then month to month after 3 months.',
  ],
  faqs: [
    {
      question: 'How is Draft.dev different from Catchy?',
      answer:
        'Catchy runs large developer marketing programs for brands such as Meta, Atlassian and AWS, from go-to-market strategy to events, video, community and developer portals. Draft.dev is a GTM agency built on engineer-checked technical content, with SEO, AI search, paid ads, Reddit and sponsorships, and AI citations tracked every month.',
    },
    {
      question: 'How does pricing compare?',
      answer:
        "Catchy doesn't publish prices. Draft.dev plans start at $9,000 a month, with a 3-month minimum, then month to month.",
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
        label: 'AI search',
        draft: 'AEO and GEO, with AI citations tracked every month',
        them: 'Not listed among its services',
      },
      {
        label: 'Named in AI answers',
        draft: '63.9% of AI answers on developer content agencies (Scrunch)',
        them: '6.2% of the same answers (Scrunch)',
      },
    ],
    reasons: [
      {
        title: 'Named 10x as often in AI answers',
        body: 'When buyers ask AI assistants which agency to hire for developer content, Draft.dev comes up about 10 times as often as Catchy.',
        stat: {
          value: '63.9%',
          label:
            'Of AI answers on developer content agencies name Draft.dev, vs 6.2% for Catchy (Oct 26 to Nov 24, 2026)',
        },
        href: '/aeo-geo-services-for-devtools',
        cta: 'How we track AI visibility',
      },
      {
        title: 'AI search, measured every month',
        body: "Catchy doesn't list AI search among its services. We set a baseline before work starts, then track AI citations every month across ChatGPT, Claude, Perplexity and Google AI Overviews.",
        stat: {
          value: '8 weeks',
          label:
            'For a business banking platform to get cited by AI assistants, on a brand new blog',
        },
        href: '/case-studies/business-banking-platform',
        cta: 'Read the case study',
      },
      {
        title: 'Engineers check every piece',
        body: "Catchy doesn't say who writes its technical content. At Draft.dev, one of our 300+ engineers checks every piece and tests the code, then a technical editor polishes it.",
        stat: {
          value: '17',
          label:
            "Articles we wrote for a developer API platform now rank on Google's first page",
        },
        href: '/case-studies/developer-api-platform',
        cta: 'Read the case study',
      },
      {
        title: 'Distribution on every piece',
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
    keyRows: ['aiTracking', 'who', 'distribution', 'paid', 'pricing', 'start'],
    quotes: ['Abhishek Iyer', 'Dawn Parzych', 'Ravi Dehar'],
  },
  sources: [
    'https://www.catchyagency.com/',
    'https://www.catchyagency.com/about',
    'https://www.catchyagency.com/content-and-creative',
    'https://www.catchyagency.com/demand-generation',
    'https://www.catchyagency.com/developer-experience',
  ],
  checked: 'November 26, 2026',
}
