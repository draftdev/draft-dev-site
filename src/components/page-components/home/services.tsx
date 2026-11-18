import {
  ArrowRightIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MegaphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

// The parts of a GTM program, each linking to its service page.
// Order agreed with Mushfiq: Newsletters before Video, Paid growth last.
const services = [
  {
    title: 'GTM Strategy',
    text: 'Research, positioning and a roadmap tied to your pipeline goals.',
    href: '/content-strategy-services',
    Icon: MapIcon,
  },
  {
    title: 'Technical Content',
    text: 'Tutorials, blog posts, comparison pages and docs, checked by real engineers.',
    href: '/content-production',
    Icon: DocumentTextIcon,
  },
  {
    title: 'SEO & AEO',
    text: 'Rank in search and get cited in LLM answers from ChatGPT, Claude, Perplexity and Google AI Overviews.',
    href: '/aeo-geo-services-for-devtools',
    Icon: MagnifyingGlassIcon,
  },
  {
    title: 'Distribution',
    text: 'Developers in our network share your articles and launches on LinkedIn, X, dev.to and Hacker News.',
    href: '/content-distribution',
    Icon: MegaphoneIcon,
  },
  {
    title: 'Newsletters',
    text: 'A monthly or twice-monthly news roundup that keeps your brand in front of your customers.',
    href: '/newsletter-services-for-devtools',
    Icon: EnvelopeIcon,
  },
  {
    title: 'Video',
    text: 'Technical videos and short clips made from your articles, for YouTube, LinkedIn and TikTok.',
    href: '/video-marketing-for-devtools',
    Icon: VideoCameraIcon,
  },
  {
    title: 'Reddit & Quora',
    text: 'Useful answers in the threads where developers compare tools, the ones AI answers often cite.',
    href: '/reddit-marketing-for-devtools',
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Paid growth',
    text: 'Google, Reddit, ChatGPT, YouTube and LinkedIn ads, plus sponsorships in newsletters and podcasts.',
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
            Your growth partner, from strategy to scale
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
