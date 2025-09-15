// src/components/page-components/mega-guide/resources.tsx
import Link from 'next/link'

const BASE = '/technical-content-marketing-in-the-age-of-ai'

const resources = [
  {
    slug: '/contacts',
    name: 'Relevant resource 1',
    description: 'Contact model: create, retrieve, update, delete, list.',
  },
  {
    slug: '/conversations',
    name: 'Relevant resource 2',
    description: 'Conversation model and endpoints.',
  },
  {
    slug: '/messages',
    name: 'Relevant resource 3',
    description: 'Message model and endpoints.',
  },
]

export function Resources() {
  return (
    <section>
      <h2 className="sitemap-heading">Resources</h2>
      <div className="mt-4 mb-16 grid grid-cols-1 gap-6 border-t border-gray-200 pt-6 sm:grid-cols-3">
        {resources.map((r) => (
          <div
            key={r.slug}
            className="relative rounded-xl p-4 ring-1 ring-gray-200"
          >
            <h3 className="text-sm font-semibold text-gray-900">
              <Link
                href={`${BASE}${r.slug}`}
                className="no-underline hover:underline"
              >
                {r.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-600">{r.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
