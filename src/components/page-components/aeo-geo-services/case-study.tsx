import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { value: '10x', label: 'AI traffic vs. refreshed legacy pages' },
  { value: '3 of 3', label: 'Major AI assistants citing one article' },
  { value: '29', label: 'Pieces published in under 5 months' },
]

const CaseStudy = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-gradient-brand overflow-hidden rounded-4xl shadow-xl lg:grid lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="p-8 sm:p-12">
            <p className="font-code text-sm font-semibold tracking-widest text-amber-300 uppercase">
              Case Study
            </p>
            <h2 className="font-code mt-4 text-2xl leading-tight font-semibold text-white sm:text-4xl">
              How a GPU cloud platform&apos;s new content earned 10x the AI
              traffic of its legacy pages
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-gray-100">
              Original content outperformed refreshed legacy pages that started
              with more authority. One article was cited by all three major AI
              assistants in a single month.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col-reverse justify-end gap-y-1 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15"
                >
                  <dt className="text-sm text-gray-200">{stat.label}</dt>
                  <dd className="font-code text-3xl font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Link
                href="/case-studies/gpu-cloud-platform"
                className="rounded-md bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:text-lg"
              >
                Read the full case study
              </Link>
              <Link
                href="/case-studies"
                className="text-base font-semibold text-white hover:text-gray-200 sm:text-lg"
              >
                View other case studies <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              alt="Engineer working on code across two screens"
              src="/site/med-portrait/code_session_draft_dev.jpg"
              fill
              sizes="360px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
