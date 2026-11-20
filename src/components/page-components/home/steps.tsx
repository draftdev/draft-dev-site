import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// The live homepage's 4 steps, trimmed to even lengths. Keeps the content
// terms AI assistants cite the homepage for.
const steps = [
  {
    title: 'We get to know you and define a plan',
    text: 'We analyze your industry, competitors, positioning, product features and target audience, and learn your brand and tone of voice. We conduct SEO and AEO research, assess your existing content and marketing funnel, and deliver a content strategy and roadmap for your feedback.',
  },
  {
    title: 'We publish your first pieces within weeks',
    text: 'We create strategically relevant content for you: blog posts and tutorials, comparison pages, landing pages and onboarding content, technical product guides, thought leadership pieces, lead magnets and more. Proven AI workflows speed up drafting, real developers review every piece, and technical editors polish it.',
  },
  {
    title: 'We help you get reach and click-throughs',
    text: 'We help promote your content on Reddit, LinkedIn, Twitter/X, and more. We create variations you can use for third-party syndication and assist in publishing and advertising your pieces in niche publications and newsletters that are read by your target audience.',
  },
  {
    title: 'Stay Relevant & Rank Well',
    text: "It's crucial to keep your content fresh. Nobody wants a prospective customer to ask ChatGPT and get outdated information about your product. We run recurring content analysis, plus technical and SEO/AEO refreshes, so your pages stay accurate and keep ranking.",
  },
]

// How we work. 12 other pages link here with /#how-we-work, so keep the id
const Steps = () => {
  return (
    <section
      id="how-we-work"
      className="scroll-mt-32 bg-[#f4f1f8] py-12 sm:py-16"
    >
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

        {/* 2x2 tiles, all the same height; keep texts about 5 lines */}
        <ol className="mt-10 grid grid-cols-1 gap-5 md:auto-rows-fr md:grid-cols-2">
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
                <p className="mt-2 text-base text-pretty text-gray-600">
                  {step.text}
                </p>
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
