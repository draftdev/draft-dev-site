// Team members who have an author page at /team/<slug>. A blog post is linked
// to an author page when its byline (WordPress "original_author" field, else
// the WordPress user's display name) matches the name or one of the aliases.
// Matching ignores case, spaces and punctuation, so "Sthita Pragyan Mohanty"
// and "sthitapragyan mohanty" both match.

export interface AuthorProfile {
  slug: string
  name: string
  aliases: string[]
  linkedin?: string
}

export const DEFAULT_AUTHOR_NAME = 'Draft.dev Team'

export const AUTHOR_PROFILES: AuthorProfile[] = [
  {
    slug: 'sthitapragyan-mohanty',
    name: 'Sthitapragyan Mohanty',
    aliases: ['Sthitapragyan'],
    linkedin: 'https://www.linkedin.com/in/sthitapragyan-mohanty-1278b5a6/',
  },
]

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z]/g, '')
}

export function getAuthorProfile(
  name: string | null | undefined,
): AuthorProfile | undefined {
  if (!name) return undefined
  const key = normalizeName(name)
  if (!key) return undefined
  return AUTHOR_PROFILES.find((profile) =>
    [profile.name, ...profile.aliases].some((n) => normalizeName(n) === key),
  )
}

export function getAuthorProfileBySlug(slug: string): AuthorProfile {
  const profile = AUTHOR_PROFILES.find((p) => p.slug === slug)
  if (!profile) throw new Error(`No author profile for slug "${slug}"`)
  return profile
}

export function getAuthorPagePath(profile: AuthorProfile): string {
  return `/team/${profile.slug}`
}

export function getAuthorPageUrl(profile: AuthorProfile): string {
  return `https://draft.dev/team/${profile.slug}`
}

export function getPostAuthorName(post: {
  originalAuthor?: string | null
  author?: { node?: { name: string } }
}): string {
  return post.originalAuthor || post.author?.node?.name || DEFAULT_AUTHOR_NAME
}
