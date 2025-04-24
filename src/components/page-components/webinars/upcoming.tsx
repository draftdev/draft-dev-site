import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const UpcomingWebinars = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                Upcoming Webinars
              </h2>

              <div className="">
                <h3 className="lead-dark py-4 font-semibold">
                  Balancing Open-Source and Product Advocacy
                </h3>
                <div className="relative">
                  <div className="flex items-center space-x-2 text-xl text-gray-500">
                    <CalendarIcon className="8-4 my-2 h-8" />
                    <p>13 May 2025</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xl text-gray-500">
                    <ClockIcon className="8-4 my-2 h-8" />
                    <p>1:00pm CT</p>
                  </div>{' '}
                </div>
              </div>

              <dl className="mt-6 max-w-xl space-y-8 text-lg text-gray-700 lg:max-w-none">
                <div className="relative">
                  <dd className="my-4">
                    Devtool companies often walk a fine line between supporting
                    open-source communities and advocating for their commercial
                    products. This intersection presents unique challenges and
                    opportunities for DevRel teams working to build authentic
                    relationships with technical audiences.
                  </dd>
                  <dd className="my-4">
                    In this webinar, Dewan Ishtiaque Ahmed (Principal Developer
                    Advocate at Harness) and Matt McClintock (Head of Content at
                    Revelo) will explore effective strategies for maintaining
                    credibility while serving both open-source and commercial
                    interests. They'll share practical insights on creating
                    value-driven content, building genuine community engagement,
                    and measuring impact across these sometimes competing
                    domains.
                  </dd>
                  <dd>
                    Join us to learn how leading organizations successfully
                    navigate this balance, avoid common pitfalls, and create
                    DevRel programs that resonate with developers while driving
                    business goals.
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                <Link
                  href="https://us02web.zoom.us/webinar/register/WN_N_9XBjrtQL2d8v8dOrTLXA?_gl=1*paueeh*_gcl_aw*R0NMLjE3NDQyMjgyMjcuQ2p3S0NBand0ZGlfQmhBQ0Vpd0E5N3k4QkwydU5qbmZraWJYVS0yMEhPcldSS3UyUVItdGV5bl8zblZ0aHpqQ3g5Q0h0bXZjRXl4RkJCb0N6UHNRQXZEX0J3RQ..*_gcl_au*MTQ4ODMxOTgyMi4xNzQ0MjI4MjI1*_ga*MTUwNTY4ODgyMi4xNzM0NTQ4NTQz*_ga_L8TBF28DDX*MTc0NTUyODg5NC45Ni4xLjE3NDU1Mjg5MDYuMC4wLjA.#/registration"
                  className="my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm ring-2 ring-gray-500 hover:bg-gradient-brand hover:text-white hover:ring-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:my-0 sm:text-base"
                >
                  Register Now
                </Link>
                <Link
                  href="#past-webinars"
                  className="my-2 text-base font-semibold text-gray-600 hover:text-gray-700 sm:my-0 sm:text-base"
                >
                  Watch past webinars <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="webinars"
                    src="/site/med-portrait/webinar_draft_dev.jpg"
                    width={400}
                    height={600}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
