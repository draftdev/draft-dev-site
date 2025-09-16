// src/components/page-components/mega-guide/Resources.tsx
import Link from 'next/link'
import type { ResourceLink } from './types'

export function Resources({
  items,
  heading = 'Related Resources',
}: {
  items: ResourceLink[]
  heading?: string
}) {
  return (
    <section>
      <h2 className="sitemap-heading text-3xl">{heading}</h2>
      <div className="mt-4 mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((r) => (
          <div
            key={r.href}
            className="relative rounded-xl p-4 ring-1 ring-gray-200"
          >
            <h3 className="text-sm font-semibold text-gray-900">
              <Link href={r.href} className="no-underline hover:underline">
                {r.name}
              </Link>
            </h3>
            {r.description && (
              <p className="mt-1 text-sm text-gray-600">{r.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
