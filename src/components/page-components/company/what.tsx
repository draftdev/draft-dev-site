import { BoltIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const What = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      {/* Long heading runs full width above the two columns */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="subheader-mobile-gradient sm:subheader-gradient max-w-5xl text-balance">
          GTM technical marketing for developer tools: strategy, content, SEO
          &amp; GEO, distribution and paid growth
        </h2>
      </div>
      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20 lg:px-8">
        <div>
          <div className="space-y-5 text-lg text-gray-600">
            <p>
              Draft.dev is a go-to-market technical marketing agency for
              developer tools and platforms. Founded in 2020 by former CTO Karl
              Hughes, we combine strategic marketing with hands-on technical
              knowledge.
            </p>
            <p>
              Our network of 300+ seasoned engineers keeps every piece
              technically accurate for developers, search engines and answer
              engines. Experienced marketers tie each piece to your goals, and
              we put it in front of the right people through SEO &amp; GEO,
              distribution and paid growth.
            </p>
          </div>

          {/* The lifecycle promise, as a highlighted callout */}
          <div className="mt-8 flex gap-x-4 rounded-2xl bg-[#f4f1f8] p-6 ring-1 ring-[#5e5285]/10">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-gray-900 shadow-sm">
              <BoltIcon aria-hidden="true" className="size-6" />
            </span>
            <p className="text-lg text-gray-600">
              <strong className="font-code text-secondary mb-1.5 block text-lg font-semibold">
                From strategy, to production, to distribution within weeks.
              </strong>
              We run the full go-to-market cycle, from strategy to paid growth.
              Proven AI workflows and hundreds of subject matter experts keep
              turnaround fast and quality high.
            </p>
          </div>
        </div>

        {/* Photo with a soft brand glow behind it */}
        <div className="relative hidden lg:block">
          <div
            aria-hidden="true"
            className="bg-gradient-brand absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] opacity-90"
          />
          <div className="rounded-4xl bg-white p-2 shadow-2xl">
            <Image
              alt="Software developers coding."
              src="/site/med-portrait/coding_draft_dev.jpg"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default What
