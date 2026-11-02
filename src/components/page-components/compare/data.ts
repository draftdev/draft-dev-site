// Facts for the /compare pages. Draft.dev facts are confirmed by the team;
// competitor facts come only from each vendor's own site, with the date checked.
// A null value means the vendor does not say, and renders as a dash.

export type FactKey =
  | 'who'
  | 'network'
  | 'based'
  | 'builtFor'
  | 'content'
  | 'docs'
  | 'video'
  | 'aeo'
  | 'aiTracking'
  | 'paid'
  | 'distribution'
  | 'pricing'
  | 'minTerm'
  | 'start'
  | 'revisions'

export type Facts = Record<FactKey, string | null>

export const rowGroups: {
  title: string
  rows: { key: FactKey; label: string }[]
}[] = [
  {
    title: 'Team',
    rows: [
      { key: 'who', label: 'Who creates the content' },
      { key: 'network', label: 'Expert network' },
      { key: 'based', label: 'Where the team is based' },
      { key: 'builtFor', label: 'Built for' },
    ],
  },
  {
    title: 'Content',
    rows: [
      { key: 'content', label: 'Content delivery' },
      { key: 'docs', label: 'Technical documentation' },
      { key: 'video', label: 'Video' },
    ],
  },
  {
    title: 'AI visibility',
    rows: [
      { key: 'aeo', label: 'AEO and GEO service' },
      { key: 'aiTracking', label: 'How AI visibility is measured' },
    ],
  },
  {
    title: 'Marketing and distribution',
    rows: [
      { key: 'paid', label: 'Paid channels' },
      { key: 'distribution', label: 'Distribution' },
    ],
  },
  {
    title: 'Working together',
    rows: [
      { key: 'pricing', label: 'Pricing' },
      { key: 'minTerm', label: 'Minimum term' },
      { key: 'start', label: 'Time to first pieces' },
      { key: 'revisions', label: 'Revisions' },
    ],
  },
]

export const draftFacts: Facts = {
  who: 'Researched in-house, checked by an engineer, polished by a technical editor',
  network: '300+ engineers and subject matter experts',
  based: 'Chicago, IL and Naperville, IL',
  builtFor: 'Developer tools and technical companies',
  content: 'Ready-to-publish content every week',
  docs: 'Yes',
  video: 'Yes',
  aeo: 'Yes',
  aiTracking:
    'Monthly AI citation tracking across ChatGPT, Claude, Perplexity and Google AI Overviews',
  paid: 'Paid search, plus newsletter, podcast and community sponsorships',
  distribution: '7,000+ developer network, Reddit and developer communities',
  pricing: 'Shared on a discovery call',
  minTerm: 'Discussed on a discovery call',
  start: 'First pieces in about 3 weeks',
  revisions: 'Unlimited',
}

export type Competitor = {
  slug: string
  name: string
  // Section on the hub page
  category:
    | 'Technical content agencies'
    | 'DevTool content and marketing agencies'
    | 'AEO agencies'
  // One line for the hub card
  tagline: string
  // One-sentence verdict under the H1
  verdict: string
  // Short, fair summary of each side
  summary: { draft: string; them: string }
  facts: Facts
  // Who should pick which
  pickThem: string[]
  pickDraft: string[]
  faqs: { question: string; answer: string }[]
  sources: string[]
  checked: string
}

const checked = 'November 2, 2026'

// Shared answers about Draft.dev, reused across comparison FAQs
const draftAiAnswer = {
  question: 'Does Draft.dev measure AI visibility?',
  answer:
    'Yes. We track AI citations every month across ChatGPT, Claude, Perplexity and Google AI Overviews.',
}
const draftWhoAnswer = {
  question: 'Who checks the content at Draft.dev?',
  answer:
    'Every piece starts with deep research. One of our 300+ engineers checks the technical accuracy and tests the code, then a technical editor polishes it to your brand guidelines.',
}

export const competitors: Competitor[] = [
  {
    slug: 'literally-dev',
    name: 'Literally.dev',
    category: 'AEO agencies',
    tagline: 'A Literally.dev alternative for devtool companies',
    verdict:
      'Pick Literally.dev for a fixed-price, 90-day AEO sprint. Pick Draft.dev for a full content and marketing team, with 300+ engineers checking the work.',
    summary: {
      draft:
        'A DevTool content and marketing agency. Our 300+ engineers and subject matter experts check every piece, and we run SEO, AEO, paid search, sponsorships and distribution alongside the content.',
      them: 'A smaller AEO and content agency based in Norway. Its main offer is a 90-day AI Recommendation Sprint: 10 articles a month for $4,990 a month, with a 3-month minimum.',
    },
    facts: {
      who: 'Hand-vetted engineers, edited in-house',
      network: null,
      based: 'Oslo, Norway',
      builtFor: 'Technical teams in the US and Europe',
      content: '10 articles a month in the 90-day Sprint',
      docs: 'Yes',
      video: 'Yes',
      aeo: 'Yes, a 90-day AI Recommendation Sprint',
      aiTracking:
        'Own pipeline: a baseline on 25–50 buyer queries, a live dashboard and a re-measure at day 85',
      paid: null,
      distribution:
        'A guaranteed monthly feature in a tech publication and a tech newsletter',
      pricing: '$4,990 a month for the Sprint (published)',
      minTerm: '3 months',
      start: 'Onboarding in 5 days or less',
      revisions: 'A full rewrite or a new writer after two rounds of revisions',
    },
    pickThem: [
      'You want a published, fixed monthly price for an AEO sprint.',
      'You want an AI visibility baseline before work starts and a re-measure at day 85.',
      'You want a guaranteed monthly feature in a tech publication and newsletter.',
      'You want to start within 5 days.',
    ],
    pickDraft: [
      'You need more than AEO: SEO, paid search, sponsorships, Reddit and distribution from one team.',
      'You want 300+ engineers and subject matter experts checking your content.',
      'You want ready-to-publish content every week, with monthly AI citation tracking.',
      'You want unlimited revisions.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Literally.dev?',
        answer:
          'Literally.dev focuses on a 90-day AEO sprint. Draft.dev is a DevTool content and marketing agency: we produce content checked by 300+ engineers and also run SEO, AEO, paid search, sponsorships and distribution.',
      },
      {
        question: 'How much does Literally.dev cost?',
        answer:
          'Literally.dev publishes $4,990 a month for its 90-day Sprint, with a 3-month minimum. Draft.dev shares pricing on a discovery call.',
      },
      draftAiAnswer,
      {
        question: 'Does Draft.dev create technical documentation?',
        answer:
          'Yes. We create documentation, product guides and tested code samples, each reviewed by a subject matter expert.',
      },
      {
        question: 'How fast can each one start?',
        answer:
          'Literally.dev says onboarding takes 5 days at most. Draft.dev delivers first pieces about 3 weeks after kickoff.',
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://www.literally.dev/',
      'https://www.literally.dev/aeo-services',
      'https://www.literally.dev/technical-content',
      'https://www.literally.dev/technical-documentation',
      'https://www.literally.dev/about',
    ],
    checked,
  },
  {
    slug: 'hackmamba',
    name: 'Hackmamba',
    category: 'DevTool content and marketing agencies',
    tagline: 'A Hackmamba alternative for devtool companies',
    verdict:
      'Both run developer marketing beyond content. Pick Hackmamba for published starting prices and DevRel programs. Pick Draft.dev for weekly content checked by 300+ engineers and a 7,000+ developer distribution network.',
    summary: {
      draft:
        'A DevTool content and marketing agency. Our 300+ engineers and subject matter experts check every piece, and we run SEO, AEO, paid search, sponsorships and distribution alongside the content.',
      them: 'A US-based developer marketing agency founded in 2021. It covers content, documentation, SEO and GEO, DevRel, paid and influencer marketing, with published starting prices.',
    },
    facts: {
      who: 'Developers with hands-on experience in the domain',
      network: '3,000+ technical writers',
      based: 'United States',
      builtFor: 'Developer tool companies, mostly Seed to Series C',
      content: '4 technical blog posts a month in the minimum content retainer',
      docs: 'Yes',
      video: 'Yes',
      aeo: 'Yes, GEO and AEO optimization',
      aiTracking:
        'AI citation frequency across Google, Perplexity, ChatGPT and Gemini',
      paid: 'Performance marketing and influencer marketing',
      distribution:
        'Reddit, Hacker News, DEV, Hashnode, LinkedIn, Discord and newsletters, included',
      pricing: 'Content retainers from $5,000 a month (published)',
      minTerm:
        'A paid trial month, then month to month or a longer statement of work',
      start: 'About 2–3 weeks to onboard a writer',
      revisions: null,
    },
    pickThem: [
      'You want published starting prices before the first call.',
      'You need DevRel, hackathons or workshops alongside content.',
      'You want a paid trial month before committing.',
      'You are a Seed to Series C developer tool company.',
    ],
    pickDraft: [
      'You want ready-to-publish content every week, not a set number of posts per retainer.',
      'You want 300+ engineers and subject matter experts checking accuracy and testing code.',
      'You want your content shared by a network of 7,000+ working developers.',
      'You want unlimited revisions.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Hackmamba?',
        answer:
          'Both run developer marketing beyond content. Hackmamba adds DevRel programs and publishes starting prices. Draft.dev delivers content every week, checked by 300+ engineers, and shares it through a network of 7,000+ developers.',
      },
      {
        question: 'How much does Hackmamba cost?',
        answer:
          'Hackmamba publishes content retainers from $5,000 a month, which include 4 technical blog posts. Draft.dev shares pricing on a discovery call.',
      },
      draftAiAnswer,
      {
        question: 'How fast can each one start?',
        answer:
          'Hackmamba says onboarding a writer takes about 2–3 weeks. Draft.dev delivers first pieces about 3 weeks after kickoff.',
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://hackmamba.io/',
      'https://hackmamba.io/pricing',
      'https://hackmamba.io/services/technical-content-marketing-agency',
      'https://hackmamba.io/services/technical-writing-agency',
    ],
    checked,
  },
  {
    slug: 'everydeveloper',
    name: 'EveryDeveloper',
    category: 'DevTool content and marketing agencies',
    tagline: 'An EveryDeveloper alternative for devtool companies',
    verdict:
      'EveryDeveloper is a one-person advisory practice. Pick it for senior strategy advice. Pick Draft.dev when you need a team to create the content and run the marketing.',
    summary: {
      draft:
        'A DevTool content and marketing agency. Our 300+ engineers and subject matter experts check every piece, and we run SEO, AEO, paid search, sponsorships and distribution alongside the content.',
      them: 'A solo advisory practice run by Adam DuVander. Its retainer includes a monthly AI recommendation report, one strategy deliverable a month and unlimited calls. It does not create the content itself.',
    },
    facts: {
      who: 'Advisory only; Adam DuVander introduces you to writers he trusts',
      network: 'Solo consultancy',
      based: 'Portland, Oregon',
      builtFor: 'Marketing and product leaders at dev tool companies',
      content: 'One strategy deliverable a month, such as a content brief',
      docs: null,
      video: null,
      aeo: 'Yes, a monthly report on how AI recommends tools in your category',
      aiTracking:
        'Monthly questions to Gemini, ChatGPT and Claude, tracked on LLM Rank',
      paid: null,
      distribution: null,
      pricing: 'From $5,000 a month (published)',
      minTerm: "No minimum; 30 days' notice to cancel",
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want senior advice from one experienced developer marketer.',
      'Your team will create the content and needs direction.',
      'You want a monthly report on how AI recommends tools in your category.',
      "You want to cancel with 30 days' notice.",
    ],
    pickDraft: [
      'You need a team to create the content, not just advise on it.',
      'You want 300+ engineers and subject matter experts checking accuracy and testing code.',
      'You need SEO, paid search, sponsorships and distribution run for you.',
      'You want ready-to-publish content every week.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from EveryDeveloper?',
        answer:
          'EveryDeveloper is a solo advisory practice that tells your team what to do. Draft.dev is a DevTool content and marketing agency that does the work: content checked by 300+ engineers, plus SEO, AEO, paid search, sponsorships and distribution.',
      },
      {
        question: 'How much does EveryDeveloper cost?',
        answer:
          'EveryDeveloper publishes a retainer from $5,000 a month. Draft.dev shares pricing on a discovery call.',
      },
      draftAiAnswer,
      {
        question: 'Does EveryDeveloper write content?',
        answer:
          'Its site says it advises and introduces you to writers it trusts. Draft.dev creates the content for you.',
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://everydeveloper.com/',
      'https://everydeveloper.com/services/',
      'https://everydeveloper.com/about/',
      'https://everydeveloper.com/privacy/',
      'https://everydeveloper.com/llms.txt',
    ],
    checked,
  },
  {
    slug: 'ritza',
    name: 'Ritza',
    category: 'Technical content agencies',
    tagline: 'A Ritza alternative for devtool companies',
    verdict:
      'Pick Ritza for documentation and engineering-heavy work like demos and proofs of concept. Pick Draft.dev for content plus SEO, AEO and distribution, with monthly AI citation tracking.',
    summary: {
      draft:
        'A DevTool content and marketing agency. Our 300+ engineers and subject matter experts check every piece, and we run SEO, AEO, paid search, sponsorships and distribution alongside the content.',
      them: 'A technical GTM agency of engineers and ex-engineers. It covers documentation, tutorials, SEO content and solutions engineering, and offers a satisfaction guarantee.',
    },
    facts: {
      who: 'Engineers and ex-engineers',
      network: null,
      based: 'Legally in the Netherlands; most of the team in South Africa',
      builtFor: 'Technical platforms and developer-focused companies',
      content: null,
      docs: 'Yes',
      video: null,
      aeo: null,
      aiTracking: null,
      paid: null,
      distribution: null,
      pricing: 'Not published; contact by email',
      minTerm: null,
      start: null,
      revisions: null,
    },
    pickThem: [
      'You need documentation, migration guides or solutions engineering, such as demos and proofs of concept.',
      'You want a satisfaction guarantee with invoices sent after the work is done.',
      'You want early product feedback and user testing from engineers.',
    ],
    pickDraft: [
      'You want SEO, AEO and distribution alongside your content.',
      'You want monthly AI citation tracking across ChatGPT, Claude, Perplexity and Google AI Overviews.',
      'You want ready-to-publish content every week, checked by 300+ engineers and subject matter experts.',
      'You want first pieces about 3 weeks after kickoff.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Ritza?',
        answer:
          'Ritza focuses on documentation, tutorials and solutions engineering. Draft.dev is a DevTool content and marketing agency: content checked by 300+ engineers, plus SEO, AEO, paid search, sponsorships and distribution.',
      },
      {
        question: 'How much does Ritza cost?',
        answer:
          'Ritza does not publish pricing on its site. Draft.dev shares pricing on a discovery call.',
      },
      draftAiAnswer,
      {
        question: 'Does Draft.dev create technical documentation?',
        answer:
          'Yes. We create documentation, product guides and tested code samples, each reviewed by a subject matter expert.',
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://ritza.co/',
      'https://ritza.co/100-guarantee.html',
      'https://ritza.co/handbook/roles/general-application/',
    ],
    checked,
  },
]
