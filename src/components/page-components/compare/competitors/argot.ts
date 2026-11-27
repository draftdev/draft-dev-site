// Draft.dev vs Argot: everything on /compare/argot.
// Argot facts come from argot.dev, checked on the date in `checked`. Argot's
// own comparison page says its services are writing, editing and strategy,
// and points buyers who need video, paid or distribution to other agencies.

import type { Competitor } from '../data'
import {
  draftAiAnswer,
  draftGtmAnswer,
  draftResultsAnswer,
  draftWhoAnswer,
} from '../shared'

export const argot: Competitor = {
  slug: 'argot',
  name: 'Argot',
  category: 'DevTool content and marketing agencies',
  tagline: 'An Argot alternative for developer tool companies',
  verdict:
    'Draft.dev runs SEO, AI search, paid ads, video and distribution around its content. Argot writes and edits developer content, and points buyers elsewhere for the rest.',
  summary: {
    draft:
      'A GTM agency for developer tools and AI platforms since 2020, trusted by 100+ companies including Docker, JetBrains and Cloudflare.',
    them: 'A technical content agency for developer tools and AI products that writes, edits and plans tutorials, explainers and opinion pieces.',
  },
  facts: {
    who: 'Developer-writers who build with your product first and run every line of code',
    network: 'A smaller team than Draft.dev, it says (no number given)',
    based: null,
    builtFor:
      'Developer tools and AI companies, including Clerk, Deno, Neon and Retool',
    content:
      'Opinion, explainers, tutorials and how-to guides, written for developers and their coding agents',
    docs: null,
    video: 'Not offered; it points buyers to other agencies for video',
    aeo: 'Yes, SEO, AEO and GEO as part of its strategy service',
    aiTracking: null,
    paid: 'Not offered; it points buyers to other agencies for paid campaigns',
    distribution:
      'Not offered; it points buyers to other agencies for community distribution',
    pricing: 'Not published; scoped to your budget',
    minTerm: null,
    start: null,
    revisions: 'Revised until the content is right',
  },
  pickThem: [
    'You want developer-written opinion pieces, explainers and tutorials, with every line of code run.',
    'You want editing for drafts your team or AI wrote.',
    'You only need writing, editing and content strategy.',
    'You want writers who have worked with teams like Clerk, Deno, Neon and Retool.',
  ],
  pickDraft: [
    'You want video, paid campaigns and community distribution from the team that writes your content.',
    'You want AI citations tracked every month across ChatGPT, Claude, Perplexity and Google AI Overviews.',
    'You want a network of 300+ engineers that can scale with your plan.',
    'You want a published starting price.',
  ],
  faqs: [
    {
      question: 'How is Draft.dev different from Argot?',
      answer:
        'Argot writes, edits and plans developer content, and says buyers who also need video, paid campaigns or community distribution should look at other agencies, Draft.dev among them. Draft.dev covers the content and runs those channels too, from SEO and AI search to paid ads and sponsorships.',
    },
    {
      question: 'How does pricing compare?',
      answer:
        "Argot doesn't publish prices; each engagement is scoped to your budget. Draft.dev plans start at $9,000 a month, with a 3-month minimum, then month to month.",
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
        them: 'Not published; scoped to your budget',
      },
      {
        label: 'Services',
        draft:
          'Strategy, content, SEO, AI search, paid ads, video and distribution',
        them: 'Writing, editing and strategy',
      },
      {
        label: 'Team',
        draft: 'A network of 300+ engineers and subject matter experts',
        them: 'A smaller team than Draft.dev, it says',
      },
    ],
    reasons: [
      {
        title: 'More than writing and editing',
        body: 'Argot says its services are writing, editing and strategy, and points buyers to other agencies for video, paid campaigns and community distribution. We run all three.',
        stat: {
          value: '211%',
          label:
            'More blog traffic for Status Hero, with 40 hours saved every week',
        },
        href: '/case-studies/status-hero',
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
        title: 'AI search, measured every month',
        body: 'Argot plans content for SEO, AEO and GEO. We also set a baseline before work starts, then track AI citations every month across ChatGPT, Claude, Perplexity and Google AI Overviews.',
        stat: {
          value: '8 weeks',
          label:
            'For a business banking platform to get cited by AI assistants, on a brand new blog',
        },
        href: '/case-studies/business-banking-platform',
        cta: 'Read the case study',
      },
      {
        title: 'Capacity that grows with you',
        body: 'Argot says it is a smaller team than Draft.dev. Our network of 300+ engineers and subject matter experts lets us add capacity as your plan grows.',
        stat: {
          value: '3,000+',
          label: 'Pieces published for 100+ client companies since 2020',
        },
        href: '/technical-content-examples',
        cta: 'See work we did for clients',
      },
      {
        title: 'Docs and video too',
        body: "Argot doesn't list documentation and points buyers elsewhere for video. We create docs, including API reference docs, and run a full video marketing service.",
        quote: {
          text: 'Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials.',
          by: 'Randall Degges, Snyk',
        },
        href: '/technical-documentation-for-devtools',
        cta: 'See documentation services',
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
    keyRows: ['paid', 'distribution', 'video', 'docs', 'aiTracking', 'pricing'],
    quotes: ['Jenny Medeiros', 'Emily Blitstein', 'Nicholas DeWald'],
  },
  sources: [
    'https://argot.dev/',
    'https://argot.dev/best-developer-content-agencies',
    'https://argot.dev/work-with-us',
  ],
  checked: 'November 27, 2026',
}
