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
                  Creating Developer Content That Spreads Organically
                </h3>
                <div className="relative">
                  <div className="flex items-center space-x-2 text-xl text-gray-500">
                    <CalendarIcon className="8-4 my-2 h-8" />
                    <p>19 Mar 2025</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xl text-gray-500">
                    <ClockIcon className="8-4 my-2 h-8" />
                    <p>11:00AM PST (Vancouver)</p>
                  </div>{' '}
                </div>
              </div>

              <dl className="mt-6 max-w-xl space-y-8 text-lg text-gray-700 lg:max-w-none">
                <div className="relative">
                  <dd className="my-4">
                    Developers engage with content in different ways—some
                    discover solutions through search engines, while others find
                    valuable insights on community-driven platforms like Reddit
                    and Hacker News. Understanding these distinct approaches is
                    key to creating technical content that spreads organically.
                  </dd>
                  <dd className="my-4">
                    In this webinar, Adam Gordon Bell (Pulumi) and Richard
                    Rodger (Voxgig) will break down what makes developer content
                    gain traction. They’ll analyze successful real-world
                    examples, explore the differences between search
                    engine-driven and community-driven content, and share
                    practical strategies to help your content reach the right
                    audience.
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                <Link
                  href="https://us02web.zoom.us/webinar/register/WN_EZDD9GN4TlSuZl5kBIJo5w#/registration
"
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
