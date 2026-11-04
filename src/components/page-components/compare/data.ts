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
  // Top section, devtool specialists in the lower section, then general agencies
  category:
    | 'DevTool content and marketing agencies'
    | 'More DevTool agencies'
    | 'Other agencies'
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
      start: '10 to 14 days per piece, from brief to live',
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
          'Hackmamba says its standard turnaround is 10 to 14 days from brief to live. Draft.dev delivers first pieces about 3 weeks after kickoff.',
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
    category: 'Other agencies',
    tagline: 'An EveryDeveloper alternative for devtool companies',
    verdict:
      'EveryDeveloper is a one-person advisory practice. Pick it for senior strategy advice. Pick Draft.dev when you need a team to create the content and run the marketing.',
    summary: {
      draft:
        'Draft.dev is a DevTool content and marketing agency. Our 300+ engineers and subject matter experts check every piece, and we run SEO, AEO, paid search, sponsorships and distribution alongside the content.',
      them: 'EveryDeveloper is a solo advisory practice run by Adam DuVander. Its retainer includes a monthly AI recommendation report, one strategy deliverable a month and unlimited calls for one person on your team. For writing, it introduces you to writers it trusts.',
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
      minTerm: "Either side can cancel with 30 days' notice",
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
    category: 'More DevTool agencies',
    tagline: 'An ércule alternative for devtool companies',
    verdict:
      'Pick ércule for SEO and GEO tied closely to analytics and content engineering. Pick Draft.dev for developer content checked by 300+ engineers, plus paid channels and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'ércule is an organic growth agency for B2B and developer-focused companies. It ties SEO and GEO, content production, content engineering and analytics together, and also sells an analytics app.',
    },
    facts: {
      who: null,
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
      pricing:
        'Agency pricing not published (analytics app has a free plan; Pro is $59 a month)',
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
          'ércule ties SEO and GEO, content production, content engineering and analytics together. Draft.dev is a DevTool content and marketing agency: content checked by 300+ engineers, plus paid search, sponsorships and developer distribution.',
      },
      {
        question: 'How much does ércule cost?',
        answer:
          'ércule does not publish agency pricing. Its analytics app has a free plan, and Pro costs $59 a month. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://www.ercule.com/',
      'https://www.ercule.com/services/seo-and-geo',
      'https://www.ercule.com/services/content-production',
      'https://www.ercule.com/services/content-strategy',
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
    category: 'More DevTool agencies',
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
      based: 'Avon, Indiana',
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
  {
    slug: 'animalz',
    name: 'Animalz',
    category: 'Other agencies',
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
      distribution:
        'Citation outreach, Reddit engagement and LinkedIn outreach',
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
          'Animalz does not publish general pricing. Its site says research reports average $25k. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
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
    category: 'Other agencies',
    tagline: 'A Discovered Labs alternative for devtool companies',
    verdict:
      'Pick Discovered Labs for a published-price SEO and AEO retainer on month-to-month terms. Pick Draft.dev for developer content checked by 300+ engineers, plus paid channels and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'Discovered Labs is an organic search agency for B2B SaaS that combines SEO and AEO. It publishes its prices, works month to month and tracks AI visibility with its own tool.',
    },
    facts: {
      who: 'A dedicated team of SEOs, editors and AI/ML engineers, using AI to speed up research and production',
      network: null,
      based: null,
      builtFor: 'Series A+ B2B SaaS companies',
      content:
        'Up to 20 content units a month on the entry plan (about 20 articles)',
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
          'Discovered Labs publishes plans from €6,995 a month on a 6-month commitment, or month to month at a higher rate. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
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
    slug: 'first-page-sage',
    name: 'First Page Sage',
    category: 'Other agencies',
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
      builtFor: 'Mostly midsized companies, with B2B SaaS the largest group',
      content: '6–7 pieces a month',
      docs: null,
      video: null,
      aeo: 'Yes, a GEO service launched in 2023',
      aiTracking:
        'A first-month audit, then AI visibility tracking alongside SEO',
      paid: 'Paid search management',
      distribution: 'Outside PR placements and an AI Authority Exchange',
      pricing:
        'No pricing page; its own pricing report lists $6,000–$12,000 a month',
      minTerm: 'Month to month',
      start: 'Strategy in month one, content from month two',
      revisions: null,
    },
    pickThem: [
      'You want in-house writers rather than a network.',
      'You want month-to-month terms.',
      'You want long-running SEO and GEO with paid search in one program.',
      'You are a midsized company.',
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
          'First Page Sage runs SEO and GEO programs for companies across many industries. Draft.dev focuses on developer tools: every piece is checked by an engineer, and we also run sponsorships, documentation and developer distribution.',
      },
      {
        question: 'How much does First Page Sage cost?',
        answer:
          'First Page Sage has no pricing page. Its own pricing report lists $6,000 to $12,000 a month. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
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
    name: 'Graphite Growth',
    category: 'Other agencies',
    tagline: 'A Graphite alternative for devtool companies',
    verdict:
      'Pick Graphite for research-led SEO and AEO at scale for large brands. Pick Draft.dev for developer content checked by 300+ engineers, with first pieces in about 3 weeks.',
    summary: {
      draft: draftSummary,
      them: 'Graphite is a research-driven growth agency with 120+ team members across 15+ countries and an office in San Francisco. It focuses on SEO and AEO for category-leading brands. This page compares Draft.dev with Graphite Growth, the SEO and AEO agency at graphite.io. It is not about the Graphite code review tool.',
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
        'Citation tracking across ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews',
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
          'Graphite does not publish pricing, and its SEO work has a twelve-month minimum. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
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
  {
    slug: 'nogood',
    name: 'NoGood',
    category: 'Other agencies',
    tagline: 'A NoGood alternative for devtool companies',
    verdict:
      'Pick NoGood for full-funnel growth marketing, from paid social to AEO, with a large premium team. Pick Draft.dev for developer content checked by 300+ engineers and a 7,000+ developer distribution network.',
    summary: {
      draft: draftSummary,
      them: 'NoGood is a growth marketing agency headquartered in New York. It runs paid, organic and AEO programs for B2B, SaaS and eCommerce brands, on monthly retainers that average above $20,000 a month.',
    },
    facts: {
      who: 'Its team of content creators, writers and content marketing specialists',
      network:
        'A team of growth leads, creatives, creators and data scientists',
      based: 'New York, with offices in Miami and Dubai',
      builtFor: 'Startups, scaleups and Fortune 100 brands',
      content: null,
      docs: null,
      video: 'Yes',
      aeo: 'Yes, a dedicated AEO service',
      aiTracking:
        'Visibility and citations across ChatGPT, Google AI Overviews, AI Mode, Gemini, Perplexity, Claude and Copilot, with Goodie AI',
      paid: 'Paid search and paid social',
      distribution: null,
      pricing: 'Average retainer above $20,000 a month (published)',
      minTerm: 'Monthly retainers',
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want paid social, paid search and AEO from one large team.',
      'You are a consumer or eCommerce brand as well as B2B.',
      'You want creator and TikTok programs.',
      'Your budget fits an average retainer above $20,000 a month.',
    ],
    pickDraft: [
      'You sell to developers and want every piece checked by an engineer.',
      'You want newsletter, podcast and community sponsorships plus a 7,000+ developer network.',
      'You need technical documentation.',
      'You want first pieces about 3 weeks after kickoff.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from NoGood?',
        answer:
          'NoGood runs full-funnel growth marketing for B2B, SaaS and eCommerce brands. Draft.dev focuses on developer tools: every piece is checked by an engineer, and we run sponsorships, documentation and developer distribution.',
      },
      {
        question: 'How much does NoGood cost?',
        answer:
          'NoGood says its average retainer is above $20,000 a month. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      {
        question: 'Does Draft.dev create technical documentation?',
        answer: draftDocsAnswer,
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://nogood.io/',
      'https://nogood.io/llms.txt',
      'https://nogood.io/about-us/',
      'https://nogood.io/content-marketing-services/',
      'https://nogood.io/answer-engine-optimization-service/',
    ],
    checked,
  },
  {
    slug: 'omniscient-digital',
    name: 'Omniscient Digital',
    category: 'Other agencies',
    tagline: 'An Omniscient Digital alternative for devtool companies',
    verdict:
      'Pick Omniscient Digital for SEO and AEO programs focused on pipeline, with digital PR and link building. Pick Draft.dev for developer content checked by 300+ engineers, plus paid channels and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'Omniscient Digital is an organic growth agency for B2B brands, with a remote team of 30+ people across 10 countries. It focuses on SEO, AEO, content and digital PR, and does not run paid media.',
    },
    facts: {
      who: null,
      network: '30+ people across 10 countries',
      based: 'United States, with a remote team',
      builtFor: 'B2B SaaS and tech companies, from startups to enterprise',
      content:
        "Scoped to each program; they say they aren't a content volume shop",
      docs: null,
      video: null,
      aeo: 'Yes, a dedicated AEO service',
      aiTracking:
        'A visibility baseline, then tracking of share of voice, recommendations and citation sources',
      paid: "No; they say they don't run paid media",
      distribution: 'Digital PR and link building',
      pricing: 'Full-service from $120,000 a year (published)',
      minTerm: null,
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want SEO and AEO tied closely to pipeline reporting.',
      'You want digital PR and link building in the same program.',
      'You are a mid-market or enterprise B2B company with a budget of $120,000+ a year.',
    ],
    pickDraft: [
      'You want paid search, sponsorships and a 7,000+ developer network alongside your content.',
      'You want every piece checked by an engineer.',
      'You need technical documentation or video.',
      'You want ready-to-publish content every week.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Omniscient Digital?',
        answer:
          'Omniscient Digital focuses on organic growth and does not run paid media. Draft.dev is a DevTool content and marketing agency: content checked by 300+ engineers, plus SEO, AEO, paid search, sponsorships and developer distribution.',
      },
      {
        question: 'How much does Omniscient Digital cost?',
        answer:
          'Omniscient Digital says full-service engagements typically start at $120,000 a year. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      {
        question: 'Does Draft.dev create technical documentation?',
        answer: draftDocsAnswer,
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://beomniscient.com/',
      'https://beomniscient.com/about/',
      'https://beomniscient.com/why-us/',
      'https://beomniscient.com/ai-info/',
      'https://beomniscient.com/services/answer-engine-optimization/',
      'https://beomniscient.com/services/faqs/',
    ],
    checked,
  },
  {
    slug: 'optimist',
    name: 'Optimist',
    category: 'Other agencies',
    tagline: 'An Optimist alternative for devtool companies',
    verdict:
      'Pick Optimist for founder-led SEO and AEO consulting on month-to-month terms. Pick Draft.dev when you want a team to create the content and run distribution for you.',
    summary: {
      draft: draftSummary,
      them: 'Optimist is a founder-led SEO and AEO consultancy for B2B tech and SaaS, based in Des Moines, Iowa. It works month to month with published entry prices, and draws on a network of freelance writers, editors and designers.',
    },
    facts: {
      who: 'Founder-led strategy; a freelance network, or your own team writes from its briefs',
      network: 'A network of freelance writers, editors and designers',
      based: 'Des Moines, Iowa',
      builtFor: 'B2B tech and SaaS, Series A to IPO',
      content: 'Up to 8 projects a month on the $5,000 plan',
      docs: null,
      video: null,
      aeo: 'Yes, central to the offer',
      aiTracking:
        'Buyer prompts benchmarked across ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews',
      paid: null,
      distribution: null,
      pricing:
        'Consulting from $3,000 a month; roadmap from $2,500 (published)',
      minTerm: "Month to month, with 30 days' notice",
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want to work directly with the founder.',
      'Your own team will write and needs strategy and briefs.',
      'You want month-to-month terms and to keep everything if you cancel.',
      'You want published entry prices.',
    ],
    pickDraft: [
      'You want a team to write and publish the content for you, checked by 300+ engineers.',
      'You want paid search, sponsorships and a 7,000+ developer network.',
      'You need technical documentation or video.',
      'You want ready-to-publish content every week.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Optimist?',
        answer:
          'Optimist is a founder-led consultancy, and on some plans your team writes from its briefs. Draft.dev is a DevTool content and marketing agency that creates the content for you and runs SEO, AEO, paid search, sponsorships and distribution.',
      },
      {
        question: 'How much does Optimist cost?',
        answer:
          'Optimist publishes consulting from $3,000 a month and a roadmap project from $2,500. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://www.yesoptimist.com/about/',
      'https://www.yesoptimist.com/full-service-seo/',
      'https://www.yesoptimist.com/seo-consulting/',
      'https://www.yesoptimist.com/terms-of-service/',
    ],
    checked,
  },
  {
    slug: 'campfire-labs',
    name: 'Campfire Labs',
    category: 'Other agencies',
    tagline: 'A Campfire Labs alternative for devtool companies',
    verdict:
      'Pick Campfire Labs for research reports and earned media for B2B SaaS, at published prices. Pick Draft.dev for developer content checked by 300+ engineers, plus paid channels and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'Campfire Labs is a B2B content agency with 12 full-time employees. It offers content strategy, content creation, market research reports and earned media, with published retainer prices.',
    },
    facts: {
      who: 'Senior strategists, ex-journalists and writers',
      network: '12 full-time employees',
      based: 'Distributed team; founder in Boulder, Colorado',
      builtFor: 'B2B software companies',
      content: '2, 4 or 6 pieces a month, by plan',
      docs: null,
      video: null,
      aeo: 'Yes, SEO and AEO strategy',
      aiTracking: 'AI-citation and visibility tracking on the top plan',
      paid: null,
      distribution: 'Earned media placements, depending on plan',
      pricing: 'Retainers from $5k to $15k a month (published)',
      minTerm: 'Three months',
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want original research reports.',
      'You want earned media and byline placements.',
      'You want published retainer prices.',
      'You are a B2B SaaS company outside developer tools.',
    ],
    pickDraft: [
      'You sell to developers and want every piece checked by an engineer.',
      'You want paid search, sponsorships and a 7,000+ developer network.',
      'You need technical documentation or video.',
      'You want ready-to-publish content every week.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Campfire Labs?',
        answer:
          'Campfire Labs serves B2B SaaS broadly, with research reports and earned media. Draft.dev focuses on developer tools: every piece is checked by an engineer, and we also run paid search, sponsorships and developer distribution.',
      },
      {
        question: 'How much does Campfire Labs cost?',
        answer:
          'Campfire Labs publishes retainers from $5k to $15k a month, with a three-month minimum. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://www.campfirelabs.co/',
      'https://www.campfirelabs.co/services',
      'https://www.campfirelabs.co/company',
    ],
    checked,
  },
  {
    slug: 'devtools-academy',
    name: 'DevTools Academy',
    category: 'More DevTool agencies',
    tagline: 'A DevTools Academy alternative for devtool companies',
    verdict:
      'Pick DevTools Academy to reach developers through a large network of technical creators. Pick Draft.dev for technical content checked by 300+ engineers, plus SEO, AEO and paid channels.',
    summary: {
      draft: draftSummary,
      them: 'DevTools Academy is a creator-led GTM agency for DevTools, developer platform and AI companies. It runs programs with a network of 1,000+ technical creators across YouTube, X, LinkedIn, Reddit and newsletters.',
    },
    facts: {
      who: 'Independent technical creators from its network',
      network: '1,000+ technical creators',
      based: 'Houston, Texas',
      builtFor:
        'DevTools, developer platform and AI companies, usually Seed to Series D',
      content: null,
      docs: null,
      video: 'Yes, creator videos',
      aeo: null,
      aiTracking: null,
      paid: 'Paid creator programs, with zero margin on creator payments',
      distribution:
        'Creators on YouTube, X, LinkedIn, Reddit, Hacker News and newsletters',
      pricing:
        'Fee not published; most clients budget $100K a month all-in, including creators',
      minTerm: 'At least a quarter',
      start:
        'Creator shortlist in 4–5 working days; first creator content in week 1–2',
      revisions: null,
    },
    pickThem: [
      'You want to reach developers through technical creators and influencers.',
      'You want creator payments passed through with zero margin.',
      'You want a creator strategy within a week of signing.',
    ],
    pickDraft: [
      'You want technical content, docs and tutorials checked by 300+ engineers.',
      'You want SEO, AEO and monthly AI citation tracking.',
      'You want paid search and newsletter sponsorships.',
      'You want unlimited revisions.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from DevTools Academy?',
        answer:
          'DevTools Academy reaches developers through technical creators. Draft.dev creates the content itself, checked by 300+ engineers, and runs SEO, AEO, paid search, sponsorships and distribution through a 7,000+ developer network.',
      },
      {
        question: 'How much does DevTools Academy cost?',
        answer:
          'DevTools Academy does not publish its own fee. It says most clients budget $100K a month all-in, split between its retainer and the creator budget. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://www.devtoolsacademy.com/',
      'https://www.devtoolsacademy.com/services',
      'https://www.devtoolsacademy.com/terms-of-service',
    ],
    checked,
  },
  {
    slug: 'studio1',
    name: 'Studio1',
    category: 'DevTool content and marketing agencies',
    tagline: 'A Studio1 alternative for devtool companies',
    verdict:
      'Both cover devtool content, docs, video and developer growth. Pick Studio1 for hands-on DevRel and open-source launches. Pick Draft.dev for 300+ engineers checking every piece, AEO with monthly AI citation tracking, and paid channels.',
    summary: {
      draft: draftSummary,
      them: 'Studio1 is a technical content and developer growth partner for devtool, SaaS, AI and open-source teams, incorporated in India. It covers technical content, documentation and DX audits, video and DevRel campaigns.',
    },
    facts: {
      who: 'Engineers and technical writers matched to your stack',
      network: null,
      based: 'India',
      builtFor: 'Devtool, SaaS, AI and open-source teams',
      content: '300+ tutorials and guides published to date',
      docs: 'Yes, including docs audits and DX audits',
      video: 'Yes',
      aeo: null,
      aiTracking: null,
      paid: null,
      distribution: 'Reddit, YouTube, newsletters and developer communities',
      pricing: 'Not published',
      minTerm: null,
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want hands-on DevRel and open-source launch support.',
      'You want docs audits and developer experience audits.',
      'You want developer video production alongside content.',
    ],
    pickDraft: [
      'You want AEO with a baseline and monthly AI citation tracking.',
      'You want 300+ engineers and subject matter experts checking every piece.',
      'You want paid search plus newsletter, podcast and community sponsorships.',
      'You want ready-to-publish content every week.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Studio1?',
        answer:
          'Both cover devtool content, docs, video and developer growth. Studio1 leans into DevRel and open-source launches. Draft.dev adds 300+ engineers checking every piece, AEO with monthly AI citation tracking, paid search and sponsorships.',
      },
      {
        question: 'How much does Studio1 cost?',
        answer:
          'Studio1 does not publish a price list. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://www.studio1hq.com/',
      'https://www.studio1hq.com/terms',
      'https://www.studio1hq.com/technical-content-marketing',
      'https://www.studio1hq.com/developer-documentation-dx-audit',
      'https://www.studio1hq.com/developer-video-production',
      'https://www.studio1hq.com/developer-relations-growth-campaigns',
    ],
    checked,
  },
  {
    slug: 'devmarklab',
    name: 'DevMarkLab',
    category: 'DevTool content and marketing agencies',
    tagline: 'A DevMarkLab alternative for devtool companies',
    verdict:
      'Pick DevMarkLab for organic growth through SEO, Reddit and developer social from a small team. Pick Draft.dev for 300+ engineers checking every piece, plus paid search, sponsorships and monthly AI citation tracking.',
    summary: {
      draft: draftSummary,
      them: 'DevMarkLab is a developer marketing agency for devtools, run by an 8-person team in Jaipur, India. It focuses on organic growth: SEO, content, Reddit and social media, with no paid ads.',
    },
    facts: {
      who: 'Writers who have built or shipped products like yours',
      network: '8-person team',
      based: 'Jaipur, India',
      builtFor: 'Dev-first SaaS companies, mostly past product-market fit',
      content: 'Weekly content sprints',
      docs: 'Yes, docs and tutorials, listed under content',
      video: null,
      aeo: 'Yes, AI search as part of its SEO service',
      aiTracking: null,
      paid: "None; they say 'No paid ad shortcuts'",
      distribution: 'Reddit (50+ subreddits), X, LinkedIn and Hacker News',
      pricing: 'Not published; most engagements start with a paid audit',
      minTerm: null,
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want organic growth only, with no paid ads.',
      'You want Reddit marketing across many developer subreddits.',
      'You want a paid audit before committing.',
    ],
    pickDraft: [
      'You want 300+ engineers and subject matter experts checking every piece.',
      'You want paid search plus newsletter, podcast and community sponsorships.',
      'You need video, or API reference docs kept up to date.',
      'You want AEO with a baseline and monthly AI citation tracking.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from DevMarkLab?',
        answer:
          'DevMarkLab focuses on organic growth through SEO, content, Reddit and social, with no paid ads. Draft.dev adds 300+ engineers checking every piece, paid search, sponsorships and monthly AI citation tracking.',
      },
      {
        question: 'How much does DevMarkLab cost?',
        answer:
          'DevMarkLab quotes after an audit rather than publishing a price, and most engagements start with a paid audit. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      {
        question: 'Does Draft.dev create technical documentation?',
        answer: draftDocsAnswer,
      },
      draftWhoAnswer,
    ],
    sources: [
      'https://devmarklab.com/',
      'https://devmarklab.com/services/',
      'https://devmarklab.com/services/content-for-devtools/',
      'https://devmarklab.com/terms/',
    ],
    checked,
  },
  {
    slug: 'manicule',
    name: 'Manicule',
    category: 'More DevTool agencies',
    tagline: 'A Manicule alternative for devtool companies',
    verdict:
      'Pick Manicule for AI-search visibility work backed by its own tracking app. Pick Draft.dev for a full content and marketing team with 300+ engineers, paid channels and sponsorships.',
    summary: {
      draft: draftSummary,
      them: 'Manicule helps developer tools get found in AI search and used by AI agents. Its team writes docs and technical content, and it also sells a self-serve AI visibility tracking app.',
    },
    facts: {
      who: null,
      network: null,
      based: null,
      builtFor: 'Developer tools',
      content: null,
      docs: 'Yes, rebuilt and checked against your live API',
      video: null,
      aeo: 'Yes, the core service',
      aiTracking:
        'Its own app checks ChatGPT, Gemini and AI Overviews every day',
      paid: null,
      distribution: 'X, LinkedIn and Reddit',
      pricing: 'Agency pricing not published; tracking app sold separately',
      minTerm: null,
      start: 'Docs rebuilt in 14 days',
      revisions: null,
    },
    pickThem: [
      'You want AI-search visibility as the main goal.',
      'You want a self-serve app to track how AI assistants mention you.',
      'You want your docs rebuilt and tested against your live API.',
    ],
    pickDraft: [
      'You want a full content and marketing team, checked by 300+ engineers.',
      'You want paid search plus newsletter, podcast and community sponsorships.',
      'You want your content shared by a 7,000+ developer network.',
      'You want ready-to-publish content every week.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Manicule?',
        answer:
          'Manicule focuses on AI-search visibility and sells its own tracking app. Draft.dev is a DevTool content and marketing agency: content checked by 300+ engineers, plus SEO, AEO, paid search, sponsorships and distribution.',
      },
      {
        question: 'How much does Manicule cost?',
        answer:
          'Manicule does not publish agency pricing and sells its tracking app separately. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://manicule.com/',
      'https://manicule.com/services',
      'https://manicule.com/agent-visibility',
      'https://manicule.com/case-studies/devrel',
    ],
    checked,
  },
  {
    slug: 'codecontent',
    name: 'CodeContent',
    category: 'More DevTool agencies',
    tagline: 'A CodeContent alternative for devtool companies',
    verdict:
      'Pick CodeContent for tutorials written by software engineers at published prices. Pick Draft.dev when you also need SEO, AEO, paid channels, sponsorships and distribution.',
    summary: {
      draft: draftSummary,
      them: 'CodeContent is a small technical content agency that pairs engineer-writers with devtools companies. It publishes its prices and starts every engagement with a paid pilot article.',
    },
    facts: {
      who: 'Software engineers who run the code before writing',
      network: null,
      based: null,
      builtFor: 'Devtools and developer-first companies',
      content: '4 technical blogs a month on the starter plan',
      docs: null,
      video: null,
      aeo: null,
      aiTracking: null,
      paid: null,
      distribution: null,
      pricing: 'From $1,250 a month (published)',
      minTerm: null,
      start: 'A paid pilot article first',
      revisions: 'One review round',
    },
    pickThem: [
      'You want lower, published prices for technical blogs and tutorials.',
      'You want a paid pilot article before committing.',
      'You mainly need tutorials written by software engineers.',
    ],
    pickDraft: [
      'You want SEO, AEO and monthly AI citation tracking alongside your content.',
      'You want paid search, sponsorships and a 7,000+ developer network.',
      'You need technical documentation or video.',
      'You want unlimited revisions.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from CodeContent?',
        answer:
          'CodeContent focuses on tutorials and technical blogs from a small team of engineers. Draft.dev is a DevTool content and marketing agency: content checked by 300+ engineers, plus SEO, AEO, paid search, sponsorships and distribution.',
      },
      {
        question: 'How much does CodeContent cost?',
        answer:
          'CodeContent publishes plans from $1,250 a month. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://codecontent.net/',
      'https://codecontent.net/about',
      'https://codecontent.net/services',
      'https://codecontent.net/pricing',
      'https://codecontent.net/work',
    ],
    checked,
  },
  {
    slug: 'content-turbine',
    name: 'Content Turbine',
    category: 'More DevTool agencies',
    tagline: 'A Content Turbine alternative for devtool companies',
    verdict:
      'Pick Content Turbine for technical content and AEO from an expert-sourced network. Pick Draft.dev for 300+ engineers checking every piece, plus paid channels, sponsorships and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'Content Turbine is a technical content agency for B2B software and developer-tool companies. It creates expert-sourced content, docs and sample apps, and optimizes for search and AI answer engines.',
    },
    facts: {
      who: 'Expert-sourced and human-reviewed',
      network: '300+ technical content experts',
      based: null,
      builtFor: 'Technical B2B and developer-tool companies',
      content: null,
      docs: 'Yes: quickstarts, tutorials, API docs and sample apps',
      video: null,
      aeo: 'Yes',
      aiTracking: 'Covers Google AI Overviews, ChatGPT, Perplexity and Claude',
      paid: null,
      distribution: null,
      pricing: 'Not published; sold as packages',
      minTerm: null,
      start: 'First pieces within weeks, they say',
      revisions: null,
    },
    pickThem: [
      'You want technical content and AEO from an expert-sourced network.',
      'You want quickstarts, API docs and sample apps written by engineers.',
      'You want to start with a free discovery call.',
    ],
    pickDraft: [
      'You want paid search plus newsletter, podcast and community sponsorships.',
      'You want your content shared by a 7,000+ developer network.',
      'You want a baseline and monthly AI citation report.',
      'You want unlimited revisions.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Content Turbine?',
        answer:
          'Content Turbine focuses on technical content and AEO. Draft.dev is a DevTool content and marketing agency: content checked by 300+ engineers, plus SEO, AEO, paid search, sponsorships and distribution.',
      },
      {
        question: 'How much does Content Turbine cost?',
        answer:
          'Content Turbine does not publish prices; it sells packages. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: ['https://www.contentturbine.com/llms.txt'],
    checked,
  },
  {
    slug: 'growthx',
    name: 'GrowthX',
    category: 'Other agencies',
    tagline: 'A GrowthX alternative for devtool companies',
    verdict:
      'Pick GrowthX for an AI content platform with services on top. Pick Draft.dev for developer content checked by 300+ engineers, plus paid channels and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'GrowthX sells an AI growth platform plus professional services: strategy, editorial and content production. It says it treats services like software, with AI workflows refined by experts. It has 100+ customers and a fully remote team.',
    },
    facts: {
      who: 'AI workflows, refined by its experts',
      network: null,
      based: 'Fully remote team',
      builtFor: null,
      content: null,
      docs: null,
      video: null,
      aeo: 'Yes, SEO and AI visibility in one platform',
      aiTracking: 'AI visibility and reporting in its own platform',
      paid: null,
      distribution: null,
      pricing: 'Not published',
      minTerm: 'Set in each order form',
      start: null,
      revisions: null,
    },
    pickThem: [
      'You want an AI content platform your team can use, with services on top.',
      'You want SEO, AI visibility, content workflows and reporting in one platform.',
    ],
    pickDraft: [
      'You sell to developers and want every piece checked by an engineer.',
      'You want paid search, sponsorships and a 7,000+ developer network.',
      'You need technical documentation or video.',
      'You want unlimited revisions.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from GrowthX?',
        answer:
          'GrowthX sells an AI growth platform plus professional services. Draft.dev focuses on developer tools: every piece is checked by an engineer, and we also run paid search, sponsorships and developer distribution.',
      },
      {
        question: 'How much does GrowthX cost?',
        answer:
          'GrowthX does not publish pricing, and terms are set in each order form. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://growthx.ai/',
      'https://growthx.ai/about',
      'https://growthx.ai/book-demo',
      'https://growthx.ai/legal/master-service-agreement',
    ],
    checked: 'November 4, 2026',
  },
  {
    slug: 'grow-and-convert',
    name: 'Grow and Convert',
    category: 'Other agencies',
    tagline: 'A Grow and Convert alternative for devtool companies',
    verdict:
      'Pick Grow and Convert for a few deep, interview-based articles a month for B2B SaaS. Pick Draft.dev for developer content checked by 300+ engineers, plus sponsorships and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'Grow and Convert is a content marketing, SEO and GEO agency for B2B SaaS, with a remote team of around 20 writers and strategists across the US and Europe. It builds articles from interviews with your experts, and prices start at $10,000 a month.',
    },
    facts: {
      who: 'Its own trained writers, from interviews with your experts',
      network: 'Around 20 writers and strategists',
      based: 'Remote, across the US and Europe',
      builtFor: 'B2B SaaS, from startups to public companies',
      content: '3–5 articles a month',
      docs: null,
      video: null,
      aeo: 'Yes, SEO and GEO, plus AI citation outreach',
      aiTracking:
        'Its own tool, Traqer.ai, across ChatGPT, Perplexity and Google AI Overviews',
      paid: 'Paid search',
      distribution: 'Link building and AI citation outreach',
      pricing: 'From $10,000 a month (published)',
      minTerm: null,
      start: 'Strategy in 4–6 weeks; each article then takes 3–4 weeks',
      revisions: null,
    },
    pickThem: [
      'You want 3–5 deep, interview-based articles a month.',
      'You want to work directly with strategists.',
      'You want AI visibility tracking included.',
    ],
    pickDraft: [
      'You sell to developers and want every piece checked by an engineer.',
      'You want newsletter, podcast and community sponsorships and a 7,000+ developer network.',
      'You need technical documentation or video.',
      'You want first pieces about 3 weeks after kickoff.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Grow and Convert?',
        answer:
          'Grow and Convert writes a few interview-based articles a month for B2B SaaS. Draft.dev focuses on developer tools: every piece is checked by an engineer, and we also run sponsorships, documentation and developer distribution.',
      },
      {
        question: 'How much does Grow and Convert cost?',
        answer:
          'Grow and Convert publishes a starting price of $10,000 a month. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://www.growandconvert.com/about/',
      'https://www.growandconvert.com/seo-geo-service/',
      'https://www.growandconvert.com/b2b-saas-geo-agency/',
      'https://www.growandconvert.com/services/saas-content-writing/',
      'https://www.growandconvert.com/services/seo-content-strategy/',
      'https://www.growandconvert.com/services/ai-seo/',
      'https://www.growandconvert.com/paid-search-service-agency/',
    ],
    checked: 'November 4, 2026',
  },
  {
    slug: 'codeless',
    name: 'Codeless',
    category: 'Other agencies',
    tagline: 'A Codeless alternative for devtool companies',
    verdict:
      'Pick Codeless for a high-volume content operation that your team takes over later. Pick Draft.dev for developer content checked by 300+ engineers, plus sponsorships and developer distribution.',
    summary: {
      draft: draftSummary,
      them: 'Codeless builds content and growth systems for growth-stage and enterprise SaaS companies, runs them, then hands them to your team. It says it has served 200+ brands over 10+ years and is based in Koloa, Hawaii.',
    },
    facts: {
      who: 'Its team of strategists, editors and writer managers',
      network: null,
      based: 'Koloa, Hawaii',
      builtFor: 'SaaS companies with $10M–$500M+ ARR',
      content: '20–30 pilot pieces, then 50–100+ a month',
      docs: null,
      video: 'Yes, video scripts',
      aeo: 'Yes, LLM citations as part of SEO',
      aiTracking: null,
      paid: 'Yes, paid campaigns and paid promotion',
      distribution: 'Email, social, paid promotion and partnerships',
      pricing: '$1,000 diagnostic; retainer not published',
      minTerm: null,
      start: 'Diagnostic in weeks 1–4, pilot content in months 2–4',
      revisions: null,
    },
    pickThem: [
      'You want a content system built, run, then handed to your team.',
      "You're a SaaS company with $10M–$500M+ ARR.",
      'You need 50–100+ pieces a month.',
    ],
    pickDraft: [
      'You sell to developers and want every piece checked by an engineer.',
      'You want newsletter, podcast and community sponsorships and a 7,000+ developer network.',
      'You need technical documentation.',
      'You want first pieces about 3 weeks after kickoff.',
    ],
    faqs: [
      {
        question: 'How is Draft.dev different from Codeless?',
        answer:
          'Codeless builds high-volume content systems for SaaS companies and hands them to your team. Draft.dev focuses on developer tools: every piece is checked by an engineer, and we also run sponsorships, documentation and developer distribution.',
      },
      {
        question: 'How much does Codeless cost?',
        answer:
          'Codeless publishes a $1,000 diagnostic but not its retainer pricing. Draft.dev starts at $9K a month, with a 3-month minimum, then month to month.',
      },
      draftAiAnswer,
      draftWhoAnswer,
    ],
    sources: [
      'https://codeless.io/',
      'https://codeless.io/about',
      'https://codeless.io/services',
      'https://codeless.io/methodology',
    ],
    checked: 'November 4, 2026',
  },
]
