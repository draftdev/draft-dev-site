import Image from 'next/image'
import Link from 'next/link'

import { GlassButton } from '@/components/ui/glass-button'
import SectionEyebrow from '@/components/ui/section-eyebrow'

// Final conversion section blending gushwork.ai's "Let Gushwork run your
// marketing team in the background" split (big headline + CTA left, card
// right, dark full-bleed band) with dofollow.com's "Build authority across
// Google and AI search" white counterweight card. All copy and pricing
// content is the site's existing SinglePricing material, restructured.

const FEATURES = [
  {
    lead: 'Strategic Content Creation:',
    text: 'Full-funnel technical content, including landing pages, tutorials and demo apps, code samples, and social collateral.',
  },
  {
    lead: 'Comprehensive Campaign Strategy:',
    text: 'Analysis of your product and features, your existing content, competitor research, and measurable goals.',
  },
  {
    lead: 'Lead Collection System:',
    text: 'Downloadable assets with landing page copy optimized for MQL/SQL conversion.',
  },
  {
    lead: 'Performance Optimization:',
    text: 'Monthly analytics reviews tracking cost per lead and content effectiveness.',
  },
]

const DISCLAIMERS = [
  'Three month minimum',
  'Delivery starts after initial planning period',
  'Draft.dev recommends supporting the content with promotional campaigns to drive traffic',
]

export default function GrowthCta() {
  return (
    <section className="relative overflow-hidden bg-[#141126]">
      {/* The hero ray pattern fanning in from the left, kept faint. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute opacity-50"
        style={{
          left: 0,
          top: 'calc(50% + 2641px)',
          width: 5283,
          height: 1123,
          transformOrigin: '0 0',
          transform: 'rotate(-90deg)',
          backgroundImage: "url('/draft/pattern-bg.svg')",
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[45%]"
        style={{
          background:
            'linear-gradient(to right, #141126 0%, #141126 18%, rgba(20, 17, 38, 0) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <SectionEyebrow dark>Pricing</SectionEyebrow>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Let&rsquo;s talk about your growth engine
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Get started with our expert-vetted, compounding growth engine
              approved by real engineers. A Draft.dev subscription provides you
              with a Developer Content Strategy, Content Creation &amp; Review,
              Lead Magnets, Content Refreshes, and ongoing Analysis and
              Reporting.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <GlassButton href="/call" contentClassName="flex items-center gap-3">
                <Image
                  src="/draft/team/Mushfiq Draft.dev.png"
                  alt="Mushfiq Sarker"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover"
                />
                <span>Book a Discovery Call</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </GlassButton>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm font-medium text-white/60">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-white/80"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.3 7.6l-5 6a1 1 0 01-1.5.1l-2.5-2.5a1 1 0 011.4-1.4l1.7 1.7 4.3-5.2a1 1 0 111.6 1.3z" />
              </svg>
              Trusted by 100+ tech companies · 3,000+ content pieces published
            </p>
          </div>

          {/* White counterweight card carrying the existing pricing content */}
          <div className="rounded-3xl bg-white p-7 sm:p-9">
            <h3 className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray-500 uppercase">
              <span
                className="h-1.5 w-1.5 rounded-full bg-gray-800"
                aria-hidden="true"
              />
              Drive presence across
            </h3>
            <div className="mt-4 flex items-center gap-4">
              {[
                { src: '/draft/logos/google-color.svg', alt: 'Google' },
                { src: '/draft/logos/openai.svg', alt: 'ChatGPT', invert: true },
                { src: '/draft/logos/claude-color.svg', alt: 'Claude' },
                { src: '/draft/logos/gemini-color.svg', alt: 'Google Gemini' },
                { src: '/draft/logos/grok.svg', alt: 'Grok', invert: true },
              ].map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.alt}
                  className={`h-8 w-8 object-contain ${logo.invert ? 'opacity-70 brightness-0' : ''}`}
                />
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-500">
              A comprehensive 3-step framework designed to drive awareness,
              uncover existing demand, and deliver clear ROI through strategic
              technical content.
            </p>

            <div className="my-6 h-px bg-gray-200" />

            <ul className="space-y-4">
              {FEATURES.map((f) => (
                <li key={f.lead} className="flex gap-3 text-sm text-gray-600">
                  <svg
                    viewBox="0 0 24 24"
                    className="text-primary mt-0.5 h-4 w-4 shrink-0"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.3 7.6l-5 6a1 1 0 01-1.5.1l-2.5-2.5a1 1 0 011.4-1.4l1.7 1.7 4.3-5.2a1 1 0 111.6 1.3z" />
                  </svg>
                  <span>
                    <span className="font-semibold text-gray-900">{f.lead}</span>{' '}
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/call"
              className="bg-primary hover:bg-primary-80 mt-7 block rounded-full px-6 py-3 text-center text-base font-semibold text-white transition"
            >
              Get started
            </Link>

            <ul className="mt-6 space-y-1.5 text-xs text-gray-400">
              {DISCLAIMERS.map((d) => (
                <li key={d} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
