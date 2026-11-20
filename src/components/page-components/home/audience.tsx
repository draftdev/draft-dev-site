import {
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

// Titles and content terms follow the live homepage, which AI assistants cite
// for "developer content agency" and "lead generation through technical
// content" prompts (Scrunch, Aug-Nov 2026). Keep these terms when editing.
const stages = [
  {
    title: 'From zero to growth',
    text: 'No content team yet? We bring the strategy, production and distribution across blog posts, tutorials, videos, comparison pages and lead magnets, and drive your first developer signups and qualified leads.',
    linkText: 'See our process',
    href: '/#how-we-work',
    Icon: RocketLaunchIcon,
  },
  {
    title: 'Content strategies for new product releases',
    text: 'A new product means teaching a market it exists. We build awareness fast with a content strategy across blogs, video, social, comparison and feature pages, backed by competitive analysis and SEO & AEO insights.',
    linkText: 'See how we drive awareness',
    href: '/drive-awareness',
    Icon: ArrowTrendingUpIcon,
  },
  {
    title: 'Scale output without scaling headcount',
    text: 'We work alongside your team to expand content production across on-site articles, guest posts, technical ebooks, video, newsletter campaigns and social. Then we analyze, refresh and report on performance.',
    linkText: 'See some of our technical content examples',
    href: '/technical-content-examples',
    Icon: UserGroupIcon,
  },
]

const Audience = () => {
  return (
    <section className="bg-[#f4f1f8] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient text-balance">
            Turn Developer Content into a Reliable Growth Driver
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            For teams launching, introducing new products, or scaling existing
            content engines
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stages.map(({ title, text, linkText, href, Icon }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#5e5285]/10"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-amber-400 text-gray-900 shadow-sm">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="font-code text-secondary mt-5 text-xl font-semibold">
                {title}
              </h3>
              <p className="mt-3 grow text-base text-gray-600">{text}</p>
              <Link
                href={href}
                className="text-secondary group mt-4 inline-flex items-center gap-x-1.5 py-2 text-sm font-semibold"
              >
                {linkText}
                <ArrowRightIcon
                  aria-hidden="true"
                  className="size-4 transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Audience
