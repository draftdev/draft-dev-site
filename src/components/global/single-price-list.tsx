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
    <section className="bg-gradient-brand relative isolate overflow-hidden py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-amber-300/15 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="lg:subheader-light subheader-mobile-light">
            See Our Process
          </h2>
          <p className="mt-4 text-lg text-white/90">
            We plan, produce, publish, and promote your first pieces within
            weeks.
          </p>
          <Link
            href="/technical-content-examples"
            className="group mt-4 inline-flex items-center gap-x-1.5 text-base font-semibold text-amber-300 hover:text-amber-200"
          >
            Interested in what we can create for you? Check out content examples
            for 40+ different clients here.
            <ArrowRightIcon
              aria-hidden="true"
              className="size-4 shrink-0 transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {phases.map((phase) => (
            <li
              key={phase.step}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-xl"
            >
              <p className="font-code text-sm font-semibold tracking-wider text-amber-600 uppercase">
                {phase.step} · {phase.label}
              </p>
              <h3 className="font-code text-secondary mt-3 text-xl font-semibold">
                {phase.title}
              </h3>
              <p className="mt-3 text-base text-gray-600">{phase.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default SinglePricingList
