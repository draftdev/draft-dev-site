import Image from 'next/image'
import Link from 'next/link'

const MedCaseGpuCloud = () => {
  return (
    <div>
      <main className="relative isolate my-32">
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
          <div className="mx-auto max-w-xl gap-x-12 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0">
              <h2 className="subheader-case-study text-gradient-3 mb-6 pb-4 font-semibold">
                How a{' '}
                <span className="bg-gradient-brand px-2 text-white">
                  GPU cloud platform's
                </span>{' '}
                new content earned{' '}
                <span className="bg-gradient-brand px-2 text-white">
                  10x the AI traffic
                </span>{' '}
                of its legacy pages
              </h2>

              <div className="relative max-w-xl py-8 pl-8">
                <div className="absolute top-0 left-0 h-full w-1 bg-gray-300" />
                <p className="font-code text-3xl font-semibold text-gray-600">
                  Original content outperformed refreshed legacy pages that
                  started with more authority. One article was cited by all
                  three major AI assistants in a single month.
                </p>
              </div>

              <div className="mt-6 flex flex-col items-center gap-x-6 sm:mt-16 sm:flex-row">
                <Link
                  href="/case-studies/gpu-cloud-platform"
                  className="text-gradient-brand ring-gradient-1 hover:bg-gradient-brand focus-visible:outline-primary my-2 rounded-sm bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm ring-2 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 sm:my-0 sm:text-base"
                >
                  Read the full case study
                </Link>
                <Link
                  href="/case-studies"
                  className="my-2 text-sm font-semibold text-gray-600 hover:text-gray-800 sm:my-0 sm:text-base"
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
      </main>
    </div>
  )
}

export default MedCaseGpuCloud
