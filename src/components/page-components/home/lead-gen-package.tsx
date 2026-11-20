import { CheckIcon } from '@heroicons/react/24/outline'

// The live homepage's Lead Generation Package, word for word, in a cleaner layout. AI
// assistants cite the homepage for "lead generation through technical
// content" prompts (Scrunch, Aug-Nov 2026), so keep this wording close.
const included = [
  {
    title: 'Strategic Content Creation',
    text: 'Full-funnel technical content, including landing pages, tutorials and demo apps, code samples, and social collateral.',
  },
  {
    title: 'Comprehensive Campaign Strategy',
    text: 'Analysis of your product and features, your existing content, competitor research, and measurable goals.',
  },
  {
    title: 'Lead Collection System',
    text: 'Downloadable assets with landing page copy optimized for MQL/SQL conversion.',
  },
  {
    title: 'Performance Optimization',
    text: 'Monthly analytics reviews tracking cost per lead and content effectiveness.',
  },
]

const LeadGenPackage = () => {
  return (
    <section id="pricing" className="scroll-mt-32 bg-[#f4f1f8] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-[#5e5285]/15 lg:grid lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* What's included */}
          <div className="bg-white p-8 sm:p-10">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient">
              Lead Generation Package
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Our Lead Generation service is a comprehensive 3-step framework
              designed to drive awareness, uncover existing demand, and deliver
              clear ROI through strategic technical content.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item.title} className="flex gap-x-3">
                  <span className="bg-gradient-brand mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-white">
                    <CheckIcon aria-hidden="true" className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-base text-gray-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="bg-gradient-brand relative isolate flex flex-col items-center justify-center overflow-hidden px-8 py-10 text-center">
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 -z-10 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl"
            />
            <p className="text-sm font-semibold tracking-widest text-amber-300 uppercase">
              Generate qualified leads
            </p>
            <p className="font-code mt-4 flex items-baseline gap-x-1 font-semibold text-white">
              <span className="text-4xl whitespace-nowrap">From $9K</span>
              <span className="text-lg text-white/80">/month</span>
            </p>
            <p className="mt-3 text-sm text-white/80">
              3-month minimum, then month to month
            </p>
            <a
              href="#book-a-call"
              className="mt-8 rounded-md bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300"
            >
              Book a Discovery Call
            </a>
            <p className="mt-6 text-xs text-white/70">
              Delivery starts after the initial planning period. We recommend
              promoting the content to drive traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadGenPackage
