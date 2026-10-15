import Image from 'next/image'
import Link from 'next/link'

const CaseStudy = () => {
  return (
    <section className="relative isolate my-12 sm:my-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl gap-x-12 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative w-full lg:max-w-xl lg:shrink-0">
            <p className="font-code text-gradient-3 text-base font-semibold tracking-wide uppercase">
              Case Study
            </p>
            <h2 className="subheader-case-study text-gradient-3 mt-3 mb-6 pb-4 font-semibold">
              How a GPU cloud platform's new content earned 10x the AI traffic
              of its legacy pages
            </h2>

            <div className="relative max-w-xl py-8 pl-8">
              <div className="absolute top-0 left-0 h-full w-1 bg-gray-300" />
              <p className="font-code text-2xl font-semibold text-gray-600 sm:text-3xl">
                Original content outperformed refreshed legacy pages that
                started with more authority. One article was cited by all three
                major AI assistants in a single month.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-6 sm:mt-12 sm:flex-row sm:items-center">
              <Link
                href="/case-studies/gpu-cloud-platform"
                className="bg-gradient-brand rounded-md px-6 py-3.5 text-base font-semibold text-white shadow-md hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-lg"
              >
                Read the full case study
              </Link>
              <Link
                href="/case-studies"
                className="text-base font-semibold text-gray-600 hover:text-gray-800 sm:text-lg"
              >
                View other case studies <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="m-auto hidden lg:block lg:w-[400px]">
            <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Engineer working on code across two screens"
                  height={500}
                  width={500}
                  src="/site/med-portrait/code_session_draft_dev.jpg"
                  className="aspect-2/3 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
