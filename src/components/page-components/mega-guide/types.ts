// src/components/page-components/mega-guide/types.ts
export interface Section {
  id: string
  title: string
  offsetRem?: number
  tag?: string
}

export type GuideLink = {
  slug: string // relative to basePath
  name: string
  description?: string
}

export type ResourceLink = {
  href: string // absolute or relative URL
  name: string
  description?: string
}
