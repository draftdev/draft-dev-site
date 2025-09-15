// src/app/technical-content-marketing-in-the-age-of-ai/layout.tsx
import type { Section } from '@/components/page-components/mega-guide/section-provider'
import SubtreeShell from '@/components/page-components/mega-guide/subtree-shell'
import glob from 'fast-glob'
import type { Metadata } from 'next'

const BASE_PATH = '/technical-content-marketing-in-the-age-of-ai'

export const metadata: Metadata = {
  title: {
    template: '%s - Technical Content Marketing in the Age of AI',
    default: 'Technical Content Marketing in the Age of AI',
  },
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await glob('**/page.@(mdx|tsx)', {
    cwd: 'src/app/technical-content-marketing-in-the-age-of-ai',
  })

  const entries = await Promise.all(
    pages.map(async (filename) => {
      const mod = await import(`./${filename}`)
      const sections: Array<Section> = mod.sections ?? []
      const route =
        `${BASE_PATH}/` + filename.replace(/(^|\/)page\.(mdx|tsx)$/, '')
      return [route.replace(/\/+$/, ''), sections] as const
    }),
  )

  const allSections = Object.fromEntries(entries) as Record<
    string,
    Array<Section>
  >

  return (
    <SubtreeShell basePath={BASE_PATH} allSections={allSections}>
      {children}
    </SubtreeShell>
  )
}
