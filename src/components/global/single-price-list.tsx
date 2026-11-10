import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// Props kept so the homepage call stays the same; this block shows the process
interface SinglePricingListProps {
  title: string
  description: string
  callToActionURL: string
  priceText: string
  price: string | number
  currency: string
  includedFeatures: Array<{ text: string; leadText?: string } | string>
  disclaimerOne?: string
  disclaimerTwo?: string
  disclaimerThree?: string
}

const phases = [
  {
    step: 'Step 1',
    label: 'Research & Strategy',
    title: 'We get to know you and define a plan',
    text: 'We analyze your industry, competitors, positioning, product features, target audience, and make sure to understand your brand and tone of voice, ensuring authentic output. We conduct SEO and GEO research, assess your existing content, study your existing marketing funnel, and deliver a content strategy and roadmap for your feedback.',
  },
  {
    step: 'Step 2',
    label: 'Content Production',
    title: 'We publish your first pieces within weeks',
    text: 'We create strategically relevant content pieces for you. These include blog posts and tutorials, comparison pages, landing pages and onboarding content, technical product guides and use case deep-dives, thought leadership pieces, lead magnets and gated assets and more. To ensure fast turnaround times we use proven AI workflows to help draft your pieces. Each single piece is reviewed by real developers and edited by professional technical editors to ensure accuracy, clarity, and value for your audience. We can manage publication of your content via all major CMSs.',
  },
  {
    step: 'Step 3',
    label: 'Content Promotion',
    title: 'We help you get reach and click-throughs',
    text: 'We help promoting your content on Reddit, LinkedIn, Twitter/X, and more. We create variations you can use for third-party syndication and assist in publishing and advertising your pieces niche publications and newsletters that are read by your target audience.',
  },
]

const SinglePricingList: React.FC<SinglePricingListProps> = () => {
  return (
    <section className="bg-gradient-brand relative isolate overflow-clip py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-amber-300/15 blur-3xl"
      />
      {/* Intro on the left (sticky on desktop), steps stacked on the right,
          so steps of very different lengths still line up */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-14 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="lg:subheader-light subheader-mobile-light">
            See Our Process
          </h2>
          <p className="mt-4 text-lg text-white/90">
            We plan, produce, publish, and promote your first pieces within
            weeks.
          </p>
          <Link
            href="/technical-content-examples"
            className="group mt-8 flex items-start gap-x-3 rounded-2xl bg-white/10 p-5 ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <span className="text-base text-white">
              Interested in what we can create for you? Check out content
              examples for 40+ different clients here.
            </span>
            <ArrowRightIcon
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-amber-300 transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        <ol className="space-y-5">
          {phases.map((phase, i) => (
            <li
              key={phase.step}
              className="flex gap-x-5 rounded-3xl bg-white p-6 shadow-xl sm:gap-x-6 sm:p-8"
            >
              <span className="font-code flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-xl font-semibold text-gray-900 shadow-sm">
                {i + 1}
              </span>
              <div>
                <p className="font-code text-sm font-semibold tracking-wider text-[#5e5285]/70 uppercase">
                  {phase.step} · {phase.label}
                </p>
                <h3 className="font-code text-secondary mt-2 text-xl font-semibold">
                  {phase.title}
                </h3>
                <p className="mt-3 text-base text-gray-600">{phase.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default SinglePricingList
