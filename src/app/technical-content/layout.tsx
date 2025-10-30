// src/app/technical-content/layout.tsx
import SubtreeShell from '@/components/page-components/mega-guide/subtree-shell'
import type { Section } from '@/components/page-components/mega-guide/types'
import glob from 'fast-glob'
import type { Metadata } from 'next'

const BASE_PATH = '/technical-content'

export const metadata: Metadata = {
  title: 'Technical Content Marketing in the Age of AI',
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await glob('**/page.@(mdx|tsx)', {
    cwd: 'src/app/technical-content',
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
