import {
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const stages = [
  {
    title: 'From zero to growth',
    text: 'No marketing team yet? We bring the strategy, content and distribution, and drive your first wave of developer signups. You build the product, we build the audience.',
    linkText: 'See our process',
    href: '/#how-we-work',
    Icon: RocketLaunchIcon,
  },
  {
    title: 'New product launches',
    text: 'A new product means teaching a market it exists. We plan the launch across content, SEO & AEO, distribution and paid channels, backed by competitor research.',
    linkText: 'See how we drive awareness',
    href: '/drive-awareness',
    Icon: ArrowTrendingUpIcon,
  },
  {
    title: 'Scale without new hires',
    text: "We work alongside your team to add channels and output: articles, guest posts, video, newsletters and social. Then we refresh what's live and report on what works.",
    linkText: 'See some of our technical content examples',
    href: '/technical-content-examples',
    Icon: UserGroupIcon,
  },
]

const Audience = () => {
  return (
    <section className="bg-[#f4f1f8] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient text-balance">
            Built for Developer Tool Teams at Every Stage
          </h2>
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
                className="text-secondary group mt-6 inline-flex items-center gap-x-1.5 text-sm font-semibold"
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
