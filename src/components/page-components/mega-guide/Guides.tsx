// src/components/page-components/mega-guide/Guides.tsx
import Link from 'next/link'
import type { GuideLink } from './types'

export function Guides({
  basePath,
  items,
  heading = 'Next Up',
}: {
  basePath: string
  items: GuideLink[]
  heading?: string
}) {
  return (
    <section>
      <h2 className="sitemap-heading text-3xl">{heading}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((g) => (
          <div
            key={g.slug}
            className="relative rounded-xl p-4 ring-1 ring-gray-200"
          >
            <h3 className="text-sm font-semibold text-gray-900">
              <Link
                href={`${basePath}${g.slug}`}
                className="text-[color:var(--color-primary)] underline hover:text-[color:var(--color-primary-80)]"
              >
                {g.name}
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
