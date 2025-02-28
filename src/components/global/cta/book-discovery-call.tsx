import Image from 'next/image'
import Link from 'next/link'

export const BookDiscoveryCall = () => {
  return (
    <div
      data-navbar-color="dark"
      className="relative isolate bg-gradient-brand py-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16 py-16 lg:flex-row lg:items-center lg:py-20 xl:gap-x-20">
          <div className="flex-none px-8 sm:px-0 lg:max-w-sm">
            <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Book a discovery call"
                  width={500}
                  height={500}
                  src="/site/med-landscape/cta_draft_dev.jpg"
                  className="h-96 w-full object-cover lg:aspect-square lg:h-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex-auto">
            <h2 className="subheader-mobile-light lg:subheader-light">
              Schedule A Discovery Call
            </h2>
            <p className="mt-4 text-base text-white lg:text-lg">
              We write technical marketing content designed to reach software
              developers, DevOps practitioners, data engineers, and engineering
              managers. If your SaaS business is ready to invest in technical
              content this year, Draft.dev might be a great fit.
            </p>

            <div className="mt-6 flex flex-col items-center gap-x-6 sm:mt-16 sm:flex-row">
              <Link
                href="/call"
                className="my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-base"
              >
                Schedule a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
