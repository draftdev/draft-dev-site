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
  pricing: 'From $9K a month',
  minTerm: '3 months, then month to month',
  start: 'First pieces in about 3 weeks',
  revisions: 'Unlimited',
}

export type Competitor = {
  slug: string
  name: string
  // Section on the hub page
  category: 'DevTool content and marketing agencies' | 'Other agencies'
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
    category: 'DevTool content and marketing agencies',
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
          'Literally.dev publishes $4,990 a month for its 90-day Sprint, with a 3-month minimum. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
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
          'Hackmamba publishes content retainers from $5,000 a month, which include 4 technical blog posts. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
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
          'EveryDeveloper publishes a retainer from $5,000 a month. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
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
    category: 'DevTool content and marketing agencies',
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
          'Ritza does not publish pricing on its site. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
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
    slug: 'ercule',
    name: 'ércule',
    category: 'DevTool content and marketing agencies',
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
          'ércule does not publish agency pricing. Its analytics app starts at $59 a month. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
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
    slug: 'catchy',
    name: 'Catchy',
    category: 'DevTool content and marketing agencies',
    tagline: 'A Catchy alternative for devtool companies',
    verdict:
      'Pick Catchy for large developer marketing programs with events, video and paid media. Pick Draft.dev for technical content checked by 300+ engineers, plus AEO with monthly AI citation tracking.',
    summary: {
      draft: draftSummary,
      them: 'Catchy is a developer marketing agency with offices in the UK and the US, working with startups through Fortune 500 brands. It covers go-to-market, demand generation, developer experience, content, video and events.',
    },
    facts: {
      who: null,
      network: null,
      based: 'UK and US offices',
      builtFor: 'Startups to Fortune 500 brands marketing to developers',
      content: null,
      docs: 'Yes',
      video: 'Yes',
      aeo: null,
      aiTracking: null,
      paid: 'Paid media planning and campaign management',
      distribution:
        'Influencer programs, events, social and community programs',
      pricing: 'Not published',
      minTerm: null,
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want developer events and in-person activations.',
      'You want video production alongside your content.',
      'You want developer experience work, such as developer portals.',
      'You are a large enterprise with a global developer program.',
    ],
    pickDraft: [
      'You want AEO with a baseline and monthly AI citation tracking.',
      'You want every piece checked by an engineer.',
      'You want SEO and Reddit distribution as well as paid channels.',
      'You want first pieces about 3 weeks after kickoff.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Catchy?',
        answer:
          'Catchy runs broad developer marketing programs, including events and video. Draft.dev focuses on technical content checked by 300+ engineers, plus SEO, AEO with monthly AI citation tracking, paid search, sponsorships and distribution.',
      },
      {
        question: 'How much does Catchy cost?',
        answer:
          'Catchy does not publish pricing on its site. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://www.catchyagency.com/',
      'https://www.catchyagency.com/about',
      'https://www.catchyagency.com/developer-experience',
      'https://www.catchyagency.com/content-and-creative',
      'https://www.catchyagency.com/demand-generation',
    ],
    checked,
  },
  {
    slug: 'wizard-on-demand',
    name: 'Wizard on Demand',
    category: 'DevTool content and marketing agencies',
    tagline: 'A Wizard on Demand alternative for devtool companies',
    verdict:
      'Both focus on devtools and run content plus paid media. Pick Wizard on Demand for a small team in Europe that also makes ad creative. Pick Draft.dev for 300+ engineers checking every piece and AEO with monthly AI citation tracking.',
    summary: {
      draft: draftSummary,
      them: 'Wizard on Demand is a technical content marketing agency for devtools and infrastructure companies, based in Tallinn, Estonia. Its team of 17 covers technical content, SEO and GEO, paid media and ad creative.',
    },
    facts: {
      who: 'Writers with a technical background',
      network: 'A team of 17',
      based: 'Tallinn, Estonia; team mostly in Europe',
      builtFor: 'Devtools and enterprise infrastructure companies',
      content: null,
      docs: null,
      video: null,
      aeo: 'Yes, SEO and GEO',
      aiTracking: null,
      paid: 'Paid search and paid social, including Reddit and LinkedIn ads',
      distribution: 'SEO, organic social and paid media',
      pricing: 'Not published; quote on request',
      minTerm: null,
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want a small, devtools-focused team.',
      'You want ad creative and paid social run alongside your content.',
      'You want a team mostly based in Europe.',
    ],
    pickDraft: [
      'You want 300+ engineers and subject matter experts checking every piece.',
      'You want AEO with a baseline and monthly AI citation tracking.',
      'You want newsletter, podcast and community sponsorships plus a 7,000+ developer network.',
      'You need technical documentation.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Wizard on Demand?',
        answer:
          'Both focus on developer tools. Wizard on Demand is a team of 17 that adds ad creative. Draft.dev has 300+ engineers and subject matter experts checking every piece, plus AEO tracking, sponsorships and a 7,000+ developer network.',
      },
      {
        question: 'How much does Wizard on Demand cost?',
        answer:
          'Wizard on Demand does not publish pricing; it gives a quote after a meeting. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      {
        question: 'Does Draft.dev create technical documentation?',
        answer: draftDocsAnswer,
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://www.wizardondemand.com/',
      'https://www.wizardondemand.com/services',
      'https://www.wizardondemand.com/meeting/tech-marketing-agency',
      'https://www.wizardondemand.com/services/technical-content-marketing-and-technical-writing',
      'https://www.wizardondemand.com/services/paid-media-services-for-devtools-companies-and-startups',
      'https://www.wizardondemand.com/technical-writing-agency',
    ],
    checked,
  },
  {
    slug: 'argot',
    name: 'Argot',
    category: 'DevTool content and marketing agencies',
    tagline: 'An Argot alternative for devtool companies',
    verdict:
      'Pick Argot for a small team of developer-writers who run every line of code. Pick Draft.dev when you also need SEO, AEO, paid channels, sponsorships and distribution.',
    summary: {
      draft: draftSummary,
      them: 'Argot is a technical content marketing agency for developer tools and AI products. Its developer-writers build with your product before writing, and it offers writing, editing and strategy.',
    },
    facts: {
      who: 'Developers who write, building with your product first',
      network: 'Smaller than Draft.dev, it says (no number given)',
      based: null,
      builtFor: 'Developer tools and AI companies',
      content: null,
      docs: null,
      video: null,
      aeo: null,
      aiTracking: null,
      paid: null,
      distribution: null,
      pricing: 'Not published; scoped to your budget',
      minTerm: null,
      start: null,
      revisions: 'Revised until the content is right',
    },
    pickThem: [
      'You want a small team of developer-writers.',
      'You want every code sample run before you see the draft.',
      'You want editing for drafts your team or AI wrote.',
    ],
    pickDraft: [
      'You want SEO, AEO and monthly AI citation tracking alongside your content.',
      'You want paid search, sponsorships and a 7,000+ developer network.',
      'You need technical documentation or video.',
      'You want ready-to-publish content every week.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Argot?',
        answer:
          'Argot is a smaller team focused on writing, editing and strategy. Draft.dev is a DevTool content and marketing agency: content checked by 300+ engineers, plus SEO, AEO, paid search, sponsorships and distribution.',
      },
      {
        question: 'How much does Argot cost?',
        answer:
          'Argot does not publish pricing; it scopes each engagement to your budget. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      {
        question: 'Does Draft.dev create technical documentation?',
        answer: draftDocsAnswer,
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://argot.dev/',
      'https://argot.dev/work-with-us',
      'https://argot.dev/work-for-us',
      'https://argot.dev/best-developer-content-agencies',
    ],
    checked,
  },
  {
    slug: 'infrasity',
    name: 'Infrasity',
    category: 'DevTool content and marketing agencies',
    tagline: 'An Infrasity alternative for devtool companies',
    verdict:
      'Both cover devtool content, docs, video and AEO. Pick Infrasity for an early-stage startup focus and Reddit programs. Pick Draft.dev for 300+ engineers checking every piece, unlimited revisions and sponsorships.',
    summary: {
      draft: draftSummary,
      them: 'Infrasity is a developer marketing and technical content agency for DevTool startups, with a team of 15+ in New Delhi. It covers technical content, documentation, video, AEO and Reddit marketing.',
    },
    facts: {
      who: 'In-house engineers',
      network: '15+ team members',
      based: 'New Delhi, India',
      builtFor: 'DevTool startups',
      content: '4 long-form technical blogs a month on the starter plan',
      docs: 'Yes, including API and SDK docs',
      video: 'Yes',
      aeo: 'Yes',
      aiTracking:
        'A baseline, then citations and share of voice across ChatGPT, Claude, Perplexity, Gemini and AI Overviews',
      paid: 'Reddit ad campaigns, when suitable',
      distribution: 'Reddit marketing',
      pricing: 'Not published',
      minTerm: null,
      start: null,
      revisions: 'Up to 2 revisions per post',
    },
    pickThem: [
      'You are an early-stage DevTool startup.',
      'You want Reddit marketing, including ad campaigns.',
      'You want an in-house team working from one office.',
    ],
    pickDraft: [
      'You want unlimited revisions.',
      'You want 300+ engineers and subject matter experts checking every piece.',
      'You want paid search plus newsletter, podcast and community sponsorships.',
      'You want your content shared by a 7,000+ developer network.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Infrasity?',
        answer:
          'Both cover devtool content, docs, video and AEO. Infrasity has an in-house team of 15+ focused on startups. Draft.dev has 300+ engineers and subject matter experts, unlimited revisions, paid search, sponsorships and a 7,000+ developer network.',
      },
      {
        question: 'How much does Infrasity cost?',
        answer:
          'Infrasity does not publish prices; its plans list deliverables only. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://www.infrasity.com/faq',
      'https://www.infrasity.com/careers',
      'https://www.infrasity.com/pricing',
      'https://www.infrasity.com/services/ai-geo-optimization-agency',
      'https://www.infrasity.com/services/technical-writing-services',
      'https://www.infrasity.com/services/tech-video-production',
      'https://www.infrasity.com/services/reddit-marketing-agency',
    ],
    checked,
  },
  {
    slug: 'dev-spotlight',
    name: 'Dev Spotlight',
    category: 'DevTool content and marketing agencies',
    tagline: 'A Dev Spotlight alternative for devtool companies',
    verdict:
      'Pick Dev Spotlight for long-form technical content for large enterprises, with a happiness guarantee. Pick Draft.dev when you also need SEO, AEO, paid channels, sponsorships and distribution.',
    summary: {
      draft: draftSummary,
      them: 'Dev Spotlight is a technical content agency for enterprise companies, writing for developers, engineers and IT leaders. It creates blogs, tutorials, whitepapers, eBooks and case studies.',
    },
    facts: {
      who: null,
      network: null,
      based: 'Avon, Indiana (mailing address)',
      builtFor: 'Enterprise companies reaching developers and IT leaders',
      content: 'From a single piece to hundreds',
      docs: null,
      video: null,
      aeo: null,
      aiTracking: null,
      paid: null,
      distribution: null,
      pricing: 'Not published; quote on request',
      minTerm: null,
      start: null,
      revisions: null,
    },
    pickThem: [
      'You are a large enterprise that needs whitepapers, eBooks and long-form technical content.',
      'You need content on AI, DevOps, cloud, data or APIs at scale.',
      'You want a 100% happiness guarantee.',
    ],
    pickDraft: [
      'You want SEO, AEO and monthly AI citation tracking alongside your content.',
      'You want paid search, sponsorships and a 7,000+ developer network.',
      'You need technical documentation or video.',
      'You want unlimited revisions.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Dev Spotlight?',
        answer:
          'Dev Spotlight focuses on technical content for large enterprises. Draft.dev is a DevTool content and marketing agency: content checked by 300+ engineers, plus SEO, AEO, paid search, sponsorships and distribution.',
      },
      {
        question: 'How much does Dev Spotlight cost?',
        answer:
          'Dev Spotlight does not publish pricing; it quotes each project. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      {
        question: 'Does Draft.dev create technical documentation?',
        answer: draftDocsAnswer,
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://www.devspotlight.com/',
      'https://www.devspotlight.com/get-a-quote',
    ],
    checked,
  },
]
