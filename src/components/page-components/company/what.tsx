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
              Draft.dev is a go-to-market marketing agency for developer tools
              and platforms, founded in 2020 by former CTO Karl Hughes.
            </p>
            <p>
              Our 300+ engineers check every piece for technical accuracy. Our
              marketers make sure it serves your goals and reaches the right
              people.
            </p>
            <p>
              We cover strategy, content, SEO &amp; GEO, distribution and paid
              growth, and we move from strategy to distribution within weeks.
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
              alt="Engineers reviewing code together on a large screen"
              src="/site/med-portrait/dev_2.jpg"
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
