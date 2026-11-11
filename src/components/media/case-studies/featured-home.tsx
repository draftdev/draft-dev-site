import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const featured = {
  dek: 'When internal engineering bandwidth was tight, Draft.dev delivered SME-written tutorials, testing content, and editorial QA—fueling engagement while saving weeks of internal time.',
  href: '/case-studies/sinch-mailgun',
}

// Featured case study; the hero's "What our clients say" link jumps here
export default function CaseStudiesFeature() {
  return (
    <section
      id="casestudymain"
      className="scroll-mt-32 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 lg:px-8">
        <div>
          <p className="inline-flex items-center gap-x-2 rounded-full bg-[#f4f1f8] px-3 py-1 text-sm font-semibold ring-1 ring-[#5e5285]/15">
            <span className="text-secondary">Case Study</span>
            <span aria-hidden="true" className="text-gray-300">
              |
            </span>
            <span className="text-gray-700">Sinch Mailgun</span>
          </p>
          <h2 className="subheader-mobile-gradient sm:subheader-gradient mt-4 text-balance">
            How Sinch Mailgun Revived Its Developer-First Content Strategy and
            Achieved <span className="whitespace-nowrap">20–45% CTR</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            {featured.dek}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href={featured.href}
              className="bg-gradient-brand rounded-md px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Read this case study
            </Link>
            <Link
              href="/#how-we-work"
              className="text-secondary group inline-flex items-center gap-x-1.5 text-base font-semibold"
            >
              See how we publish within weeks
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Photo with a brand offset card behind it */}
        <div className="relative hidden lg:block">
          <div
            aria-hidden="true"
            className="bg-gradient-brand absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-4xl"
          />
          <div className="overflow-hidden rounded-4xl shadow-xl ring-1 ring-black/5">
            <Image
              alt="Em Blitstein"
              height={600}
              width={500}
              src="/media/testimonials-lg/em_sinch_mailgun.jpg"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          {/* The headline result, pulled out as a badge */}
          <div className="absolute -bottom-5 -left-6 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-[#5e5285]/10">
            <p className="font-code text-secondary text-3xl font-semibold">
              20–45%
            </p>
            <p className="text-sm font-medium text-gray-600">
              Click-through rate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
