import Link from 'next/link'

const BASE = '/technical-content-marketing-in-the-age-of-ai'

const guides = [
  {
    slug: '/creating-evergreen-content-that-drives-traffic',
    name: 'Evergreen Content',
    description: 'Plan clusters and publish SEO-ready, durable posts.',
  },
  {
    slug: '/creating-viral-spiky-content',
    name: 'Spiky Content',
    description: 'Engineer shareable pieces and leverage the spike.',
  },
  {
    slug: '/creating-gated-assets-that-convert',
    name: 'Gated Assets',
    description: 'High-value technical lead magnets that actually convert.',
  },
]

export function Guides() {
  return (
    <section>
      <h2 className="sitemap-heading">Next Up</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 border-t border-gray-200 pt-6 sm:grid-cols-3">
        {guides.map((g) => (
          <div key={g.slug}>
            <h3 className="text-sm font-semibold text-gray-900">{g.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{g.description}</p>
            <p className="mt-3">
              <Link
                href={`${BASE}${g.slug}`}
                className="text-[color:var(--color-primary)] underline hover:text-[color:var(--color-primary-80)]"
              >
                Read more →
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
