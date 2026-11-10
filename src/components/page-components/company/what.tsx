import Image from 'next/image'

// What the GTM work covers, shown as chips under the heading
const services = [
  'Strategy',
  'Content',
  'SEO & GEO',
  'Distribution',
  'Paid growth',
]

const What = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16 lg:px-8">
        <div>
          <h2 className="subheader-mobile-gradient sm:subheader-gradient text-balance">
            GTM technical marketing for developer tools
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {services.map((service) => (
              <li
                key={service}
                className="text-secondary rounded-full bg-[#f4f1f8] px-3.5 py-1 text-sm font-semibold ring-1 ring-[#5e5285]/15"
              >
                {service}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-5 text-lg text-gray-600">
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
            <p>
              From strategy, to production, to distribution within weeks. We run
              the full go-to-market cycle, from strategy to paid growth. Proven
              AI workflows and hundreds of subject matter experts keep
              turnaround fast and quality high.
            </p>
          </div>
        </div>

        {/* Photo fills the column, so its top and bottom line up with the copy */}
        <div className="relative hidden lg:block">
          <div
            aria-hidden="true"
            className="bg-gradient-brand absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-4xl"
          />
          <div className="relative h-full overflow-hidden rounded-4xl shadow-xl ring-1 ring-black/5">
            <Image
              alt="Software developers coding."
              src="/site/med-portrait/coding_draft_dev.jpg"
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default What
