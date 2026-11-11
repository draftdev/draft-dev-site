import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const steps = [
  {
    title: 'Discovery and kickoff',
    text: "A 30-minute call to see if we're a fit. Then we interview your team and review your product, positioning, competitors and analytics.",
  },
  {
    title: 'Research and strategy',
    text: 'We study your market, audience and existing content, run SEO and AEO research, and deliver a strategy and roadmap for your feedback.',
  },
  {
    title: 'Content production',
    text: 'Blog posts, tutorials, comparison and landing pages, product guides and lead magnets. AI workflows speed up drafting, developers review every piece, and technical editors polish it. Your first pieces go live in about 3 weeks.',
  },
  {
    title: 'Promotion and reporting',
    text: 'We promote your content on Reddit, LinkedIn and X, place it in niche newsletters and publications, and report on results every month.',
  },
]

// How we work, from first call to reporting. Other pages link here with /#how-we-work
const Steps = () => {
  return (
    <section id="how-we-work" className="scroll-mt-32 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient text-balance">
            From Kickoff to Results in Weeks
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We plan, produce, publish, and promote your first pieces within
            weeks.
          </p>
        </div>

        {/* 2x2 tiles, equal height */}
        <ol className="mt-10 grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-x-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#5e5285]/10 sm:gap-x-6 sm:p-7"
            >
              <span className="bg-gradient-brand font-code flex size-12 shrink-0 items-center justify-center rounded-xl text-xl font-semibold text-white shadow-md">
                {i + 1}
              </span>
              <div>
                <h3 className="font-code text-secondary text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Examples link sits under the steps as a follow-on */}
        <p className="mt-8 text-center">
          <Link
            href="/technical-content-examples"
            className="text-secondary group inline-flex items-center gap-x-2 text-base font-semibold"
          >
            Interested in what we can create for you? Check out content examples
            for 40+ different clients here.
            <ArrowRightIcon
              aria-hidden="true"
              className="size-4 shrink-0 transition group-hover:translate-x-1"
            />
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Steps
