import Link from 'next/link'

import SectionEyebrow from '@/components/ui/section-eyebrow'

// Lead-magnet section for the "Content Marketing Engine" eBook: a light
// rounded banner card with copy + checklist on the left and a CSS-built
// book mockup (brand gradient cover, page block, slight tilt that
// straightens on hover) on the right. Sits between the testimonials and
// the pricing CTA to catch visitors who aren't ready to book a call yet.

const TAKEAWAYS = [
  'A step-by-step framework for a predictable, consistent content engine',
  'How AI is changing search, and how to stay visible in LLM answers',
  'The metrics that prove content ROI to business leadership',
]

function BookMockup() {
  return (
    <div className="flex justify-center lg:justify-end lg:pr-8">
      <Link
        href="/content-marketing-engine"
        aria-label="Get the free eBook: How to Set Up a Content Marketing Engine in the Age of AI"
        className="group relative block"
      >
        {/* Soft ground shadow */}
        <div
          aria-hidden="true"
          className="absolute -bottom-6 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-[100%] bg-gray-900/15 blur-xl transition group-hover:bg-gray-900/20"
        />
        {/* Page block peeking out behind the cover */}
        <div
          aria-hidden="true"
          className="absolute inset-y-2 -right-2.5 w-3 rounded-r-md bg-white shadow-[inset_-2px_0_3px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:translate-x-0.5"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-1 -right-1.5 w-3 rounded-r-md bg-gray-100"
        />
        {/* Cover */}
        <div
          className="relative flex aspect-[3/4] w-64 flex-col justify-between overflow-hidden rounded-l-md rounded-r-xl p-7 shadow-2xl transition-transform duration-300 will-change-transform [transform:rotate(-4deg)] group-hover:[transform:rotate(0deg)_translateY(-4px)] sm:w-72"
          style={{
            background: 'linear-gradient(140deg, #6a6296 0%, #544b84 45%, #3d3663 100%)',
          }}
        >
          {/* Ray pattern, faded so the type stays readable */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: "url('/draft/pattern-bg.svg')",
              backgroundSize: '380%',
              backgroundPosition: 'top center',
            }}
          />
          {/* Spine highlight */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/30 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-2 w-px bg-white/20"
          />

          <div className="relative flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Draft.dev</span>
            <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-white/90 uppercase backdrop-blur-sm">
              eBook
            </span>
          </div>

          <div className="relative">
            <p className="font-code text-xl leading-snug font-semibold text-white">
              How to Set Up a Content Marketing Engine in the Age of AI
            </p>
            <p className="mt-4 text-sm text-white/70">
              A practical playbook for developer-focused teams
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function EbookCta() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 rounded-3xl bg-gray-50 px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-16">
          <div>
            <SectionEyebrow>Free ebook</SectionEyebrow>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
              Set up a content marketing engine in the age of AI
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-500">
              The exact process we use to build predictable, compounding
              content engines for tech companies — with the insights and data
              to prove effectiveness to leadership.
            </p>

            <ul className="mt-8 space-y-3">
              {TAKEAWAYS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="text-primary mt-1 h-5 w-5 shrink-0"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.3 7.6l-5 6a1 1 0 01-1.5.1l-2.5-2.5a1 1 0 011.4-1.4l1.7 1.7 4.3-5.2a1 1 0 111.6 1.3z" />
                  </svg>
                  <span className="text-base text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/content-marketing-engine"
                className="bg-primary hover:bg-primary-80 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white transition"
              >
                Get the free eBook <span aria-hidden="true">→</span>
              </Link>
              <p className="text-sm text-gray-500">
                Downloaded by marketers at 100+ tech companies
              </p>
            </div>
          </div>

          <BookMockup />
        </div>
      </div>
    </section>
  )
}
