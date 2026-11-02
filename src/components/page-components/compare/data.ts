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
  docs: 'Yes, including API reference docs, kept up to date as your product changes',
  video: 'Yes',
  aeo: 'Yes',
  aiTracking:
    'A baseline before work starts, then monthly AI citation tracking and a report across ChatGPT, Claude, Perplexity and Google AI Overviews',
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

// Shared Draft.dev copy, reused across comparison pages
const draftSummary =
  'Draft.dev is a DevTool content and marketing agency. Our 300+ engineers and subject matter experts check every piece, and we run SEO, AEO, paid search, sponsorships and distribution alongside the content.'
const draftDocsAnswer =
  'Yes. We create documentation, API reference docs, product guides and tested code samples, each reviewed by a subject matter expert, and keep them up to date as your product changes.'

// Shared answers about Draft.dev, reused across comparison FAQs
const draftAiAnswer = {
  question: 'Does Draft.dev measure AI visibility?',
  answer:
    'Yes. We run a baseline before work starts, then track AI citations every month across ChatGPT, Claude, Perplexity and Google AI Overviews and send you a report.',
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
        'Draft.dev is a DevTool content and marketing agency. Our 300+ engineers and subject matter experts check every piece, and we run SEO, AEO, paid search, sponsorships and distribution alongside the content.',
      them: 'Literally.dev is a smaller AEO and content agency based in Norway. Its main offer is a 90-day AI Recommendation Sprint: 10 articles a month for $4,990 a month, with a 3-month minimum.',
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
      'You want a live AEO dashboard and a re-measure at day 85.',
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
          'Yes. We create documentation, API reference docs, product guides and tested code samples, each reviewed by a subject matter expert, and keep them up to date as your product changes.',
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
        'Draft.dev is a DevTool content and marketing agency. Our 300+ engineers and subject matter experts check every piece, and we run SEO, AEO, paid search, sponsorships and distribution alongside the content.',
      them: 'Hackmamba is a US-based developer marketing agency founded in 2021. It covers content, documentation, SEO and GEO, DevRel, paid and influencer marketing, with published starting prices.',
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
        'Draft.dev is a DevTool content and marketing agency. Our 300+ engineers and subject matter experts check every piece, and we run SEO, AEO, paid search, sponsorships and distribution alongside the content.',
      them: 'EveryDeveloper is a solo advisory practice run by Adam DuVander. Its retainer includes a monthly AI recommendation report, one strategy deliverable a month and unlimited calls. It does not create the content itself.',
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
          'EveryDeveloper is a solo advisory practice that advises your team. Draft.dev is a DevTool content and marketing agency that does the work: content checked by 300+ engineers, plus SEO, AEO, paid search, sponsorships and distribution.',
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
        'Draft.dev is a DevTool content and marketing agency. Our 300+ engineers and subject matter experts check every piece, and we run SEO, AEO, paid search, sponsorships and distribution alongside the content.',
      them: 'Ritza is a technical GTM agency of engineers and ex-engineers. It covers documentation, tutorials, SEO content and solutions engineering, and offers a satisfaction guarantee.',
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
          'Yes. We create documentation, API reference docs, product guides and tested code samples, each reviewed by a subject matter expert, and keep them up to date as your product changes.',
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
  {
    slug: 'animalz',
    name: 'Animalz',
    category: 'AEO agencies',
    tagline: 'An Animalz alternative for devtool companies',
    verdict:
      'Pick Animalz for brand and thought-leadership content from a large, long-running team. Pick Draft.dev for developer content checked by 300+ engineers, plus paid and community distribution.',
    summary: {
      draft: draftSummary,
      them: 'Animalz is a content marketing and SEO agency for B2B SaaS, founded in New York in 2015 and now remote. It offers content production, SEO and AEO, research reports and content operations.',
    },
    facts: {
      who: 'Writers, strategists and editors, with an AI-assisted process',
      network: 'About 130 writers, strategists and editors',
      based: 'Remote; founded in New York City',
      builtFor: 'B2B SaaS and tech companies',
      content: null,
      docs: null,
      video: 'Video snippets and podcasts',
      aeo: 'Yes, a dedicated AEO service',
      aiTracking:
        'AI visibility, brand mentions and revenue impact across Google AI Overviews, ChatGPT, Perplexity and Gemini',
      paid: null,
      distribution: 'Citation outreach, Reddit engagement and LinkedIn outreach',
      pricing: 'Not published (research reports average $25k)',
      minTerm: null,
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want brand and thought-leadership content for a B2B SaaS company.',
      'You want survey-driven research reports.',
      'You want help running AI content workflows in AirOps.',
      'You want a large team with a long case-study track record.',
    ],
    pickDraft: [
      'You sell to developers and want every piece checked by an engineer.',
      'You want paid search, sponsorships and a 7,000+ developer network alongside your content.',
      'You need technical documentation.',
      'You want first pieces about 3 weeks after kickoff.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Animalz?',
        answer:
          'Animalz serves B2B SaaS broadly, with a focus on brand and thought leadership. Draft.dev focuses on developer tools: every piece is checked by an engineer, and we also run paid search, sponsorships and developer distribution.',
      },
      {
        question: 'How much does Animalz cost?',
        answer:
          'Animalz does not publish general pricing. Its site says research reports average $25k. Draft.dev shares pricing on a discovery call.',
      },
      draftAiAnswer,
      {
        question: 'Does Draft.dev create technical documentation?',
        answer: draftDocsAnswer,
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://www.animalz.co/',
      'https://www.animalz.co/about',
      'https://www.animalz.co/services',
      'https://www.animalz.co/services/answer-engine-optimization',
      'https://www.animalz.co/services/whitepapers',
      'https://www.animalz.co/agency-buyer-guides/b2b-saas-content-marketing-agencies',
    ],
    checked,
  },
  {
    slug: 'discovered-labs',
    name: 'Discovered Labs',
    category: 'AEO agencies',
    tagline: 'A Discovered Labs alternative for devtool companies',
    verdict:
      'Pick Discovered Labs for a published-price SEO and AEO retainer on month-to-month terms. Pick Draft.dev for developer content checked by 300+ engineers, plus paid channels and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'Discovered Labs is an organic search agency for B2B SaaS that combines SEO and AEO. It publishes its prices, works month to month and tracks AI visibility with its own tool.',
    },
    facts: {
      who: 'An in-house editorial team, with AI used in research and drafting',
      network: null,
      based: null,
      builtFor: 'Series A+ B2B SaaS companies',
      content: 'Up to 20 pieces a month on the entry plan',
      docs: null,
      video: null,
      aeo: 'Yes, the core service',
      aiTracking:
        'Own AI Visibility Tracker across ChatGPT, Claude, Perplexity, Google AI Overviews and Gemini, reported monthly',
      paid: null,
      distribution: 'Digital PR, link building and Reddit mentions',
      pricing: 'From €6,995 a month on a 6-month commitment (published)',
      minTerm: "Month to month, with 30 days' notice",
      start: 'Content publishing by day 10',
      revisions: null,
    },
    pickThem: [
      'You want published prices before the first call.',
      'You want month-to-month terms.',
      'You want content publishing within 10 days.',
      'You want AI visibility tracked with the agency’s own tool.',
    ],
    pickDraft: [
      'You sell to developers and want every piece checked by an engineer.',
      'You want paid search, sponsorships and a 7,000+ developer network alongside your content.',
      'You need technical documentation or video.',
      'You want unlimited revisions.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Discovered Labs?',
        answer:
          'Discovered Labs focuses on SEO and AEO for B2B SaaS. Draft.dev focuses on developer tools: every piece is checked by an engineer, and we also run paid search, sponsorships, documentation and developer distribution.',
      },
      {
        question: 'How much does Discovered Labs cost?',
        answer:
          'Discovered Labs publishes plans from €6,995 a month on a 6-month commitment, or month to month at a higher rate. Draft.dev shares pricing on a discovery call.',
      },
      draftAiAnswer,
      {
        question: 'How fast can each one start?',
        answer:
          'Discovered Labs says content starts publishing by day 10. Draft.dev delivers first pieces about 3 weeks after kickoff.',
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://discoveredlabs.com/',
      'https://discoveredlabs.com/llms.txt',
      'https://discoveredlabs.com/pricing',
      'https://discoveredlabs.com/methodology',
      'https://discoveredlabs.com/technology/ai-visibility-tracker',
    ],
    checked,
  },
  {
    slug: 'ercule',
    name: 'ércule',
    category: 'AEO agencies',
    tagline: 'An ércule alternative for devtool companies',
    verdict:
      'Pick ércule for SEO and GEO tied closely to analytics and content engineering. Pick Draft.dev for developer content checked by 300+ engineers, plus paid channels and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'ércule is an organic growth agency for B2B and developer-focused companies. It ties SEO and GEO, content production, content engineering and analytics together, and also sells an analytics app.',
    },
    facts: {
      who: 'Its writers, with LLM-assisted research and first drafts',
      network: null,
      based: null,
      builtFor: 'B2B and developer-focused companies',
      content: 'Weekly search-optimized outlines',
      docs: 'Yes',
      video: null,
      aeo: 'Yes, an SEO and GEO service',
      aiTracking:
        'Starts with an LLM coverage report; covers Google, ChatGPT, Perplexity and Gemini',
      paid: null,
      distribution: 'LinkedIn, Reddit and email',
      pricing: 'Agency pricing not published (analytics app from $59 a month)',
      minTerm: null,
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want SEO and GEO tied to analytics and content engineering.',
      'You want help with product marketing, such as positioning and launches.',
      'You want a self-serve analytics app for your content.',
    ],
    pickDraft: [
      'You want ready-to-publish content every week, checked by 300+ engineers and subject matter experts.',
      'You want paid search, sponsorships and a 7,000+ developer network alongside your content.',
      'You want monthly AI citation tracking with a report.',
      'You want first pieces about 3 weeks after kickoff.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from ércule?',
        answer:
          'ércule focuses on SEO, GEO and the analytics behind them. Draft.dev is a DevTool content and marketing agency: content checked by 300+ engineers, plus paid search, sponsorships and developer distribution.',
      },
      {
        question: 'How much does ércule cost?',
        answer:
          'ércule does not publish agency pricing. Its analytics app starts at $59 a month. Draft.dev shares pricing on a discovery call.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://www.ercule.com/',
      'https://www.ercule.com/services/seo-and-geo',
      'https://www.ercule.com/services/content-production',
      'https://www.ercule.com/services/content-engineering',
      'https://www.ercule.com/services/content-systems',
      'https://www.ercule.com/pricing',
    ],
    checked,
  },
  {
    slug: 'first-page-sage',
    name: 'First Page Sage',
    category: 'AEO agencies',
    tagline: 'A First Page Sage alternative for devtool companies',
    verdict:
      'Pick First Page Sage for long-running SEO and GEO programs with in-house writers and month-to-month terms. Pick Draft.dev for developer content checked by 300+ engineers, plus sponsorships and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'First Page Sage is a US SEO and GEO agency with in-house writers and a fully remote team. It works month to month and delivers 6–7 pieces of content a month.',
    },
    facts: {
      who: 'In-house writers, briefed by your team each week',
      network: null,
      based: 'Fully remote across the US',
      builtFor: 'Mostly midsized B2B companies, with B2B SaaS the largest group',
      content: '6–7 pieces a month',
      docs: null,
      video: null,
      aeo: 'Yes, a GEO service launched in 2023',
      aiTracking:
        'A baseline at kickoff, then tracked prompts across the major AI platforms',
      paid: 'Paid search management',
      distribution: 'Outside PR placements and an AI Authority Exchange',
      pricing:
        'No pricing page; its own research gives $6,000–$12,000 a month',
      minTerm: 'Month to month',
      start: 'Strategy in month one, content from month two',
      revisions: null,
    },
    pickThem: [
      'You want in-house writers rather than a network.',
      'You want month-to-month terms.',
      'You want long-running SEO and GEO with paid search in one program.',
      'You are a midsized B2B company.',
    ],
    pickDraft: [
      'You want ready-to-publish content every week, with first pieces about 3 weeks after kickoff.',
      'You want 300+ engineers and subject matter experts checking accuracy and testing code.',
      'You want sponsorships, Reddit and a 7,000+ developer network alongside your content.',
      'You need technical documentation.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from First Page Sage?',
        answer:
          'First Page Sage runs SEO and GEO programs for B2B companies broadly. Draft.dev focuses on developer tools: every piece is checked by an engineer, and we also run sponsorships, documentation and developer distribution.',
      },
      {
        question: 'How much does First Page Sage cost?',
        answer:
          'First Page Sage has no pricing page. Its own pricing research gives a range of $6,000 to $12,000 a month. Draft.dev shares pricing on a discovery call.',
      },
      draftAiAnswer,
      {
        question: 'How fast can each one start?',
        answer:
          'First Page Sage spends month one on strategy and technical SEO, with content from month two. Draft.dev delivers first pieces about 3 weeks after kickoff.',
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://firstpagesage.com/seo-services/',
      'https://firstpagesage.com/company/',
      'https://firstpagesage.com/our-culture/',
      'https://firstpagesage.com/b2b-saas-seo-geo-agency/',
      'https://firstpagesage.com/software-development-seo-company/',
      'https://firstpagesage.com/generative-engine-optimization/',
      'https://firstpagesage.com/seo-blog/geo-aeo-pricing-statistics/',
    ],
    checked,
  },
  {
    slug: 'graphite',
    name: 'Graphite',
    category: 'AEO agencies',
    tagline: 'A Graphite alternative for devtool companies',
    verdict:
      'Pick Graphite for research-led SEO and AEO at scale for large brands. Pick Draft.dev for developer content checked by 300+ engineers, with first pieces in about 3 weeks.',
    summary: {
      draft: draftSummary,
      them: 'Graphite is a research-driven growth agency with 120+ team members across 15+ countries and an office in San Francisco. It focuses on SEO and AEO for category-leading brands.',
    },
    facts: {
      who: 'Writers who specialize in your category, or planning only',
      network: '120+ team members',
      based: 'San Francisco, with a team in 15+ countries',
      builtFor: 'Category-leading brands',
      content: null,
      docs: null,
      video: null,
      aeo: 'Yes, a full-service AEO team',
      aiTracking:
        'Share of voice across ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews',
      paid: null,
      distribution:
        'Offsite placements in publications and communities, plus Reddit',
      pricing: 'Not published',
      minTerm: 'Twelve months minimum for SEO',
      start: null,
      revisions: null,
    },
    pickThem: [
      'You are a large brand and want research-led SEO and AEO.',
      'You want an in-house research team running statistical tests.',
      'You want programmatic SEO or help recovering from an AI content penalty.',
    ],
    pickDraft: [
      'You sell to developers and want every piece checked by an engineer.',
      'You want paid search, sponsorships and a 7,000+ developer network alongside your content.',
      'You need technical documentation or video.',
      'You want first pieces about 3 weeks after kickoff.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Graphite?',
        answer:
          'Graphite runs research-led SEO and AEO for large brands across industries. Draft.dev focuses on developer tools: every piece is checked by an engineer, and we also run paid search, sponsorships and developer distribution.',
      },
      {
        question: 'How much does Graphite cost?',
        answer:
          'Graphite does not publish pricing, and its SEO work has a twelve-month minimum. Draft.dev shares pricing on a discovery call.',
      },
      draftAiAnswer,
      {
        question: 'Does Draft.dev create technical documentation?',
        answer: draftDocsAnswer,
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://graphite.io/',
      'https://graphite.io/aeo',
      'https://graphite.io/seo',
      'https://graphite.io/careers',
      'https://graphite.io/privacy-policy',
    ],
    checked,
  },
]
