import {
  ArrowRightIcon,
  ChartBarIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

// The five parts of a GTM program, each linking to its service page
const services = [
  {
    title: 'Strategy',
    text: 'Research, positioning and a roadmap tied to your pipeline goals.',
    href: '/content-strategy-services',
    Icon: MapIcon,
  },
  {
    title: 'Content',
    text: 'Tutorials, blog posts, docs and videos, checked by engineers.',
    href: '/content-production',
    Icon: DocumentTextIcon,
  },
  {
    title: 'SEO & GEO',
    text: 'Rank in search and get cited by ChatGPT, Claude, Perplexity and Google AI Overviews.',
    href: '/aeo-geo-services-for-devtools',
    Icon: MagnifyingGlassIcon,
  },
  {
    title: 'Distribution',
    text: 'Reddit, influencers and a 7,000+ developer network to get your content seen.',
    href: '/content-distribution',
    Icon: MegaphoneIcon,
  },
  {
    title: 'Paid growth',
    text: 'Paid search and sponsorships in newsletters, podcasts and communities.',
    href: '/ppc-for-devtools',
    Icon: ChartBarIcon,
  },
]

const Services = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient text-balance">
            Everything Your Go-to-Market Needs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            One team for the full cycle, from first strategy to paid growth
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(({ title, text, href, Icon }) => (
            <li key={title}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-3xl bg-[#f4f1f8] p-6 ring-1 ring-[#5e5285]/10 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <span className="bg-gradient-brand flex size-11 items-center justify-center rounded-xl text-white shadow-md">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="font-code text-secondary mt-5 text-lg font-semibold">
                  {title}
                </h3>
                <p className="mt-2 grow text-base text-gray-600">{text}</p>
                <span className="text-secondary mt-5 inline-flex items-center gap-x-1.5 text-sm font-semibold">
                  Learn more
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="size-4 transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
