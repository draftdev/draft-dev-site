// Internal links shown above the footer, from the "Internal Linking Mapping" sheet.
// Keyed by page path. Up to 4 links per page, in sheet order. Never link a page to itself.
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
}
