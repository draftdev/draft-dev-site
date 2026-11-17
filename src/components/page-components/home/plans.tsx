import { CheckIcon } from '@heroicons/react/24/outline'

// Core plans and add-on services, from the Nov 2026 pricing deck.
// Plan prices are shown; add-ons are named without prices.
const plans = [
  {
    name: 'Foundation',
    price: '$9,000',
    tagline: 'Get discovered',
    featured: true,
    items: [
      'SEO & AEO strategy and roadmap',
      '6 technical articles',
      '18 social posts',
      '6 author shares',
      'Monthly strategy call',
      'Monthly Growth Report (SEO + AEO)',
      'Shared Slack channel',
      'Revisions until approved',
    ],
  },
  {
    name: 'Growth',
    price: '$15,000',
    tagline: 'Own your category',
    featured: false,
    items: [
      'SEO & AEO strategy and roadmap',
      '12 technical articles',
      '1 technical video',
      '36 social posts',
      '12 author shares',
      '1 developer network distribution',
      'Biweekly strategy call',
      'Monthly Growth Report (SEO + AEO)',
      'Shared Slack channel',
      'Revisions until approved',
    ],
  },
  {
    name: 'Scale',
    price: '$24,000',
    tagline: 'Lead every channel',
    featured: false,
    items: [
      'SEO & AEO strategy and roadmap',
      '20 technical articles',
      '2 technical videos',
      '60 social posts',
      '20 author shares',
      '2 developer network distributions',
      'Biweekly strategy call',
      'Monthly Growth Report (SEO + AEO)',
      'Shared Slack channel',
      'VIP priority turnaround',
      'Revisions until approved',
    ],
  },
]

const Plans = () => {
  return (
    <section id="pricing" className="scroll-mt-32 bg-[#f4f1f8] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient text-balance">
            Plans and Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Go-to-market programs powered by technical content, built to drive
            awareness and generate qualified leads. Every plan includes SEO
            &amp; AEO strategy, with each deliverable checked by subject matter
            experts.
          </p>
        </div>

        {/* Core plans */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${
                plan.featured
                  ? 'bg-gradient-brand text-white shadow-xl'
                  : 'bg-white shadow-sm ring-1 ring-[#5e5285]/10'
              }`}
            >
              {plan.featured && (
                <p className="absolute -top-3 left-7 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm">
                  Most clients start here
                </p>
              )}
              <h3
                className={`font-code text-sm font-semibold tracking-widest uppercase ${
                  plan.featured ? 'text-amber-300' : 'text-secondary'
                }`}
              >
                {plan.name}
              </h3>
              <p className="font-code mt-4 flex items-baseline gap-x-1 font-semibold">
                <span
                  className={`text-4xl ${plan.featured ? 'text-white' : 'text-gray-900'}`}
                >
                  {plan.price}
                </span>
                <span
                  className={plan.featured ? 'text-white/80' : 'text-gray-500'}
                >
                  /month
                </span>
              </p>
              <p
                className={`mt-1 text-base ${plan.featured ? 'text-white/90' : 'text-gray-600'}`}
              >
                {plan.tagline}
              </p>
              <ul
                className={`mt-6 grow space-y-2.5 text-base ${plan.featured ? 'text-white' : 'text-gray-700'}`}
              >
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={`mt-0.5 size-5 shrink-0 ${plan.featured ? 'text-amber-300' : 'text-secondary'}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#book-a-call"
                className={`mt-8 rounded-md px-6 py-3 text-center text-base font-semibold transition ${
                  plan.featured
                    ? 'bg-amber-400 text-gray-900 shadow-lg shadow-black/20 hover:bg-amber-300'
                    : 'bg-gradient-brand text-white hover:opacity-90'
                }`}
              >
                Book a Discovery Call
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          <span className="font-semibold text-gray-800">Terms:</span> 3-month
          initial term, then month to month. Custom programs available.
        </p>
      </div>
    </section>
  )
}

export default Plans
