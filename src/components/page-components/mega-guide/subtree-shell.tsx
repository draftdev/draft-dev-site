// src/components/page-components/mega-guide/subtree-shell.tsx
'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './Navigation'
import { SectionProvider, type Section } from './section-provider'

export default function SubtreeShell({
  children,
  allSections,
  basePath,
}: {
  children: React.ReactNode
  allSections: Record<string, Array<Section>>
  basePath: string
}) {
  const pathname = (usePathname() || '').replace(/\/+$/, '')

  return (
    <SectionProvider sections={allSections[pathname] ?? []}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clear your global navbar height */}
        <div className="pt-[var(--nav-height,72px)]" />

        {/* Two-column layout: sticky left nav / flowing main content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* LEFT: sticky, scrollable within viewport; no overlap with footer */}
          <aside
            className="relative hidden lg:block"
            aria-label="Guide navigation"
          >
            <div className="sticky top-[calc(var(--nav-height,72px)+12px)] max-h-[calc(100dvh-var(--nav-height,72px)-24px)] overflow-y-auto pr-2">
              <Navigation basePath={basePath} />
            </div>
          </aside>

          {/* RIGHT: main content */}
          <main className="min-w-0 pb-24">{children}</main>
        </div>
      </div>
    </SectionProvider>
  )
}
