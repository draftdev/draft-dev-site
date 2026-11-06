// Internal links shown above the footer, from the "Internal Linking Mapping" sheet.
// Keyed by page path. Up to 4 links per page, in sheet order. Never link a page to itself.
// Names follow the sheet; the few that wrap to 3 lines on phones are shortened.
export type RelatedLink = { name: string; href: string }

export type RelatedEntry = {
  kind: 'services' | 'caseStudies'
  links: RelatedLink[]
}

export const relatedLinks: Record<string, RelatedEntry> = {
  '/content-strategy-services': {
    kind: 'services',
    links: [
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
      {
        name: 'Content Distribution',
        href: 'https://draft.dev/content-distribution',
      },
      {
        name: 'Content Refreshes',
        href: 'https://draft.dev/content-refreshes',
      },
      {
        name: 'Content Audit',
        href: 'https://draft.dev/content-audit-for-devtools',
      },
    ],
  },
  '/content-production': {
    kind: 'services',
    links: [
      {
        name: 'Content Strategy',
        href: 'https://draft.dev/content-strategy-services',
      },
      { name: 'Technical Blog Content', href: 'https://draft.dev/blog-posts' },
      { name: 'Developer Tutorials', href: 'https://draft.dev/tutorials' },
      {
        name: 'Technical Documentation',
        href: 'https://draft.dev/technical-documentation-for-devtools',
      },
    ],
  },
  '/content-distribution': {
    kind: 'services',
    links: [
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
      {
        name: 'Influencer Distribution',
        href: 'https://draft.dev/influencer-distribution-for-devtools',
      },
      {
        name: 'Reddit Marketing',
        href: 'https://draft.dev/reddit-marketing-for-devtools',
      },
      {
        name: 'Paid Content Promotion',
        href: 'https://draft.dev/paid-content-promotion',
      },
    ],
  },
  '/seo-services-for-devtools': {
    kind: 'services',
    links: [
      {
        name: 'GEO Services',
        href: 'https://draft.dev/aeo-geo-services-for-devtools',
      },
      {
        name: 'Content Strategy',
        href: 'https://draft.dev/content-strategy-services',
      },
      {
        name: 'Content Refreshes',
        href: 'https://draft.dev/content-refreshes',
      },
      {
        name: 'Content Audit',
        href: 'https://draft.dev/content-audit-for-devtools',
      },
    ],
  },
  '/aeo-geo-services-for-devtools': {
    kind: 'services',
    links: [
      {
        name: 'Search Engine Optimization',
        href: 'https://draft.dev/seo-services-for-devtools',
      },
      {
        name: 'AI Content Strategy',
        href: 'https://draft.dev/ai-content-strategy',
      },
      {
        name: 'Reddit Marketing',
        href: 'https://draft.dev/reddit-marketing-for-devtools',
      },
      {
        name: 'Content Refreshes',
        href: 'https://draft.dev/content-refreshes',
      },
    ],
  },
  '/video-marketing-for-devtools': {
    kind: 'services',
    links: [
      {
        name: 'Video Tutorials',
        href: 'https://draft.dev/video-tutorials',
      },
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
      {
        name: 'Influencer Distribution',
        href: 'https://draft.dev/influencer-distribution-for-devtools',
      },
      {
        name: 'Paid Sponsorships',
        href: 'https://draft.dev/paid-sponsorships-for-devtools',
      },
    ],
  },
  '/ppc-for-devtools': {
    kind: 'services',
    links: [
      {
        name: 'Search Engine Optimization',
        href: 'https://draft.dev/seo-services-for-devtools',
      },
      {
        name: 'Paid Sponsorships',
        href: 'https://draft.dev/paid-sponsorships-for-devtools',
      },
      {
        name: 'Inbound Lead Generation',
        href: 'https://draft.dev/capture-leads',
      },
      {
        name: 'Demand Generation',
        href: 'https://draft.dev/demand-generation-for-devtools',
      },
    ],
  },
  '/reddit-marketing-for-devtools': {
    kind: 'services',
    links: [
      {
        name: 'Content Distribution',
        href: 'https://draft.dev/content-distribution',
      },
      {
        name: 'GEO Services',
        href: 'https://draft.dev/aeo-geo-services-for-devtools',
      },
      {
        name: 'Influencer Distribution',
        href: 'https://draft.dev/influencer-distribution-for-devtools',
      },
      {
        name: 'DevRel Marketing',
        href: 'https://draft.dev/for-dev-rels',
      },
    ],
  },
  '/influencer-distribution-for-devtools': {
    kind: 'services',
    links: [
      {
        name: 'Content Distribution',
        href: 'https://draft.dev/content-distribution',
      },
      {
        name: 'Video Marketing',
        href: 'https://draft.dev/video-marketing-for-devtools',
      },
      {
        name: 'Reddit Marketing',
        href: 'https://draft.dev/reddit-marketing-for-devtools',
      },
      {
        name: 'Paid Sponsorships',
        href: 'https://draft.dev/paid-sponsorships-for-devtools',
      },
    ],
  },
  '/paid-sponsorships-for-devtools': {
    kind: 'services',
    links: [
      {
        name: 'Content Distribution',
        href: 'https://draft.dev/content-distribution',
      },
      {
        name: 'Influencer Distribution',
        href: 'https://draft.dev/influencer-distribution-for-devtools',
      },
      {
        name: 'Pay-Per-Click Advertising',
        href: 'https://draft.dev/ppc-for-devtools',
      },
      {
        name: 'Demand Generation',
        href: 'https://draft.dev/demand-generation-for-devtools',
      },
    ],
  },
  '/ai-content-strategy': {
    kind: 'services',
    links: [
      {
        name: 'GEO Services',
        href: 'https://draft.dev/aeo-geo-services-for-devtools',
      },
      {
        name: 'Search Engine Optimization',
        href: 'https://draft.dev/seo-services-for-devtools',
      },
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
      {
        name: 'Content Refreshes',
        href: 'https://draft.dev/content-refreshes',
      },
    ],
  },
  '/blog-posts': {
    kind: 'services',
    links: [
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
      {
        name: 'Search Engine Optimization',
        href: 'https://draft.dev/seo-services-for-devtools',
      },
      { name: 'Developer Tutorials', href: 'https://draft.dev/tutorials' },
      {
        name: 'Technical Writers',
        href: 'https://draft.dev/build-trust',
      },
    ],
  },
  '/build-trust': {
    kind: 'services',
    links: [
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
      { name: 'Technical Blog Content', href: 'https://draft.dev/blog-posts' },
      {
        name: 'Technical Content Types',
        href: 'https://draft.dev/content-types',
      },
      {
        name: 'Technical Editing',
        href: 'https://draft.dev/technical-editing-services',
      },
    ],
  },
  '/capture-leads': {
    kind: 'services',
    links: [
      {
        name: 'Content for Marketers',
        href: 'https://draft.dev/for-marketers',
      },
      {
        name: 'Pay-Per-Click Advertising',
        href: 'https://draft.dev/ppc-for-devtools',
      },
      {
        name: 'Content Distribution',
        href: 'https://draft.dev/content-distribution',
      },
      {
        name: 'Demand Generation',
        href: 'https://draft.dev/demand-generation-for-devtools',
      },
    ],
  },
  '/content-refreshes': {
    kind: 'services',
    links: [
      {
        name: 'Search Engine Optimization',
        href: 'https://draft.dev/seo-services-for-devtools',
      },
      {
        name: 'Content Strategy',
        href: 'https://draft.dev/content-strategy-services',
      },
      { name: 'Technical Blog Content', href: 'https://draft.dev/blog-posts' },
      {
        name: 'Content Audit',
        href: 'https://draft.dev/content-audit-for-devtools',
      },
    ],
  },
  '/content-types': {
    kind: 'services',
    links: [
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
      { name: 'Technical Blog Content', href: 'https://draft.dev/blog-posts' },
      { name: 'Developer Tutorials', href: 'https://draft.dev/tutorials' },
      {
        name: 'Video Tutorials',
        href: 'https://draft.dev/video-tutorials',
      },
    ],
  },
  '/dev-content-strategy': {
    kind: 'services',
    links: [
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
      {
        name: 'Content Distribution',
        href: 'https://draft.dev/content-distribution',
      },
      {
        name: 'DevRel Marketing',
        href: 'https://draft.dev/for-dev-rels',
      },
      { name: 'Developer Tutorials', href: 'https://draft.dev/tutorials' },
    ],
  },
  '/drive-awareness': {
    kind: 'services',
    links: [
      {
        name: 'Content Distribution',
        href: 'https://draft.dev/content-distribution',
      },
      {
        name: 'Search Engine Optimization',
        href: 'https://draft.dev/seo-services-for-devtools',
      },
      {
        name: 'Inbound Lead Generation',
        href: 'https://draft.dev/capture-leads',
      },
      {
        name: 'Content for Marketers',
        href: 'https://draft.dev/for-marketers',
      },
    ],
  },
  '/for-dev-rels': {
    kind: 'services',
    links: [
      {
        name: 'Dev Content Strategy',
        href: 'https://draft.dev/dev-content-strategy',
      },
      { name: 'Developer Tutorials', href: 'https://draft.dev/tutorials' },
      {
        name: 'Reddit Marketing',
        href: 'https://draft.dev/reddit-marketing-for-devtools',
      },
      {
        name: 'Technical Documentation',
        href: 'https://draft.dev/technical-documentation-for-devtools',
      },
    ],
  },
  '/for-marketers': {
    kind: 'services',
    links: [
      {
        name: 'Content Strategy',
        href: 'https://draft.dev/content-strategy-services',
      },
      {
        name: 'Content Marketing',
        href: 'https://draft.dev/drive-awareness',
      },
      {
        name: 'Inbound Lead Generation',
        href: 'https://draft.dev/capture-leads',
      },
      {
        name: 'Technical Writers',
        href: 'https://draft.dev/build-trust',
      },
    ],
  },
  '/paid-content-promotion': {
    kind: 'services',
    links: [
      {
        name: 'Content Distribution',
        href: 'https://draft.dev/content-distribution',
      },
      {
        name: 'Pay-Per-Click Advertising',
        href: 'https://draft.dev/ppc-for-devtools',
      },
      {
        name: 'Influencer Distribution',
        href: 'https://draft.dev/influencer-distribution-for-devtools',
      },
      {
        name: 'Reddit Marketing',
        href: 'https://draft.dev/reddit-marketing-for-devtools',
      },
    ],
  },
  '/tutorials': {
    kind: 'services',
    links: [
      { name: 'Technical Blog Content', href: 'https://draft.dev/blog-posts' },
      {
        name: 'Video Tutorials',
        href: 'https://draft.dev/video-tutorials',
      },
      {
        name: 'DevRel Marketing',
        href: 'https://draft.dev/for-dev-rels',
      },
      {
        name: 'Technical Documentation',
        href: 'https://draft.dev/technical-documentation-for-devtools',
      },
    ],
  },
  '/video-tutorials': {
    kind: 'services',
    links: [
      {
        name: 'Video Marketing',
        href: 'https://draft.dev/video-marketing-for-devtools',
      },
      { name: 'Developer Tutorials', href: 'https://draft.dev/tutorials' },
      {
        name: 'Technical Content Types',
        href: 'https://draft.dev/content-types',
      },
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
    ],
  },
  '/demand-generation-for-devtools': {
    kind: 'services',
    links: [
      {
        name: 'Pay-Per-Click Advertising',
        href: 'https://draft.dev/ppc-for-devtools',
      },
      {
        name: 'Paid Sponsorships',
        href: 'https://draft.dev/paid-sponsorships-for-devtools',
      },
      {
        name: 'Inbound Lead Generation',
        href: 'https://draft.dev/capture-leads',
      },
      {
        name: 'Content Distribution',
        href: 'https://draft.dev/content-distribution',
      },
    ],
  },
  '/technical-documentation-for-devtools': {
    kind: 'services',
    links: [
      {
        name: 'Technical Editing',
        href: 'https://draft.dev/technical-editing-services',
      },
      { name: 'Developer Tutorials', href: 'https://draft.dev/tutorials' },
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
      {
        name: 'DevRel Marketing',
        href: 'https://draft.dev/for-dev-rels',
      },
    ],
  },
  '/content-audit-for-devtools': {
    kind: 'services',
    links: [
      {
        name: 'Content Refreshes',
        href: 'https://draft.dev/content-refreshes',
      },
      {
        name: 'Search Engine Optimization',
        href: 'https://draft.dev/seo-services-for-devtools',
      },
      {
        name: 'Content Strategy',
        href: 'https://draft.dev/content-strategy-services',
      },
      {
        name: 'GEO Services',
        href: 'https://draft.dev/aeo-geo-services-for-devtools',
      },
    ],
  },
  '/technical-editing-services': {
    kind: 'services',
    links: [
      {
        name: 'Technical Documentation',
        href: 'https://draft.dev/technical-documentation-for-devtools',
      },
      {
        name: 'Technical Writers',
        href: 'https://draft.dev/build-trust',
      },
      {
        name: 'Content Production',
        href: 'https://draft.dev/content-production',
      },
      {
        name: 'Content Refreshes',
        href: 'https://draft.dev/content-refreshes',
      },
    ],
  },
  '/case-studies/gpu-cloud-platform': {
    kind: 'caseStudies',
    links: [
      {
        name: 'Developer API Platform',
        href: 'https://draft.dev/case-studies/developer-api-platform',
      },
      {
        name: 'Business Banking',
        href: 'https://draft.dev/case-studies/business-banking-platform',
      },
      { name: 'Loft Labs', href: 'https://draft.dev/case-studies/loft-labs' },
    ],
  },
  '/case-studies/developer-api-platform': {
    kind: 'caseStudies',
    links: [
      {
        name: 'GPU Cloud Platform',
        href: 'https://draft.dev/case-studies/gpu-cloud-platform',
      },
      {
        name: 'Business Banking',
        href: 'https://draft.dev/case-studies/business-banking-platform',
      },
      { name: 'Earthly', href: 'https://draft.dev/case-studies/earthly' },
    ],
  },
  '/case-studies/business-banking-platform': {
    kind: 'caseStudies',
    links: [
      {
        name: 'GPU Cloud Platform',
        href: 'https://draft.dev/case-studies/gpu-cloud-platform',
      },
      {
        name: 'Developer API Platform',
        href: 'https://draft.dev/case-studies/developer-api-platform',
      },
      {
        name: 'Sinch Mailgun',
        href: 'https://draft.dev/case-studies/sinch-mailgun',
      },
    ],
  },
  '/case-studies/earthly': {
    kind: 'caseStudies',
    links: [
      { name: 'Loft Labs', href: 'https://draft.dev/case-studies/loft-labs' },
      {
        name: 'Status Hero',
        href: 'https://draft.dev/case-studies/status-hero',
      },
      {
        name: 'GPU Cloud Platform',
        href: 'https://draft.dev/case-studies/gpu-cloud-platform',
      },
    ],
  },
  '/case-studies/loft-labs': {
    kind: 'caseStudies',
    links: [
      { name: 'Earthly', href: 'https://draft.dev/case-studies/earthly' },
      {
        name: 'Sinch Mailgun',
        href: 'https://draft.dev/case-studies/sinch-mailgun',
      },
      {
        name: 'Business Banking',
        href: 'https://draft.dev/case-studies/business-banking-platform',
      },
    ],
  },
  '/case-studies/sinch-mailgun': {
    kind: 'caseStudies',
    links: [
      {
        name: 'Status Hero',
        href: 'https://draft.dev/case-studies/status-hero',
      },
      { name: 'Earthly', href: 'https://draft.dev/case-studies/earthly' },
      {
        name: 'Developer API Platform',
        href: 'https://draft.dev/case-studies/developer-api-platform',
      },
    ],
  },
  '/case-studies/status-hero': {
    kind: 'caseStudies',
    links: [
      { name: 'Earthly', href: 'https://draft.dev/case-studies/earthly' },
      { name: 'Loft Labs', href: 'https://draft.dev/case-studies/loft-labs' },
      {
        name: 'Business Banking',
        href: 'https://draft.dev/case-studies/business-banking-platform',
      },
    ],
  },
}
