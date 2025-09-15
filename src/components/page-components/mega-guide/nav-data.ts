// src/components/page-components/mega-guide/nav-data.ts
import type { GuideLink } from './types'

export const BASE_PATH = '/technical-content'

export const NAV_GROUPS: Array<{ title: string; links: GuideLink[] }> = [
  {
    title: 'Foundations & Setup',
    links: [
      {
        name: 'An Introduction to Technical Content Marketing in the AI Era',
        slug: '/introduction-to-content-marketing',
      },
      {
        name: 'Setting Up Your Technical Content Marketing Engine',
        slug: '/technical-content-marketing',
      },
    ],
  },
  {
    title: 'Planning & Production',
    links: [
      {
        name: 'Content Calendar Creation and Management',
        slug: '/content-calendar',
      },
      {
        name: 'Understanding the Content Funnel',
        slug: '/content-funnel',
      },
      {
        name: 'Evergreen Content Stategy',
        slug: '/evergreen-content-strategy',
      },
      { name: 'Viral Content Creation', slug: '/viral-content' },

      {
        name: 'Gated Content That Converts',
        slug: '/gated-content-that-converts',
      },
    ],
  },
  {
    title: 'Distribution',
    links: [
      // {
      //   name: 'Newsletter Sponsorships & Syndication',
      //   slug: '/newsletter-sponsorships-and-content-syndication',
      // },
      // {
      //   name: 'Social Distribution Playbooks',
      //   slug: '/technical-content-distribution-and-promotion-across-social-channels',
      // },
    ],
  },
]

// Flattened list in display order
export const ALL_GUIDES_ORDER: GuideLink[] = NAV_GROUPS.flatMap((g) => g.links)

/**
 * Get the next N guides after a given slug (wraps around).
 * Pass current route WITHOUT the BASE_PATH prefix, e.g. '/creating-and-managing-content-calendars' or '' for the index page.
 */
export function getNextGuidesFromNav(
  currentLocalSlug: string,
  count = 3,
): GuideLink[] {
  const idx = ALL_GUIDES_ORDER.findIndex((l) => l.slug === currentLocalSlug)
  const start = idx >= 0 ? (idx + 1) % ALL_GUIDES_ORDER.length : 0
  const out: GuideLink[] = []
  for (let i = 0; i < Math.min(count, ALL_GUIDES_ORDER.length); i++) {
    out.push(ALL_GUIDES_ORDER[(start + i) % ALL_GUIDES_ORDER.length])
  }
  return out
}
