import Image from 'next/image'
import Link from 'next/link'

import SectionEyebrow from '@/components/ui/section-eyebrow'

// "Results from real SaaS teams" following dofollow.com's case-study
// section: brand-colored background with the dashed-ray pattern, big
// centered white heading, and white result cards. Each card: client logo +
// arrow link, stat chips (one large dark chip, smaller light/dark chips),
// and — per our twist — the founder quote with photo at the bottom.

interface Stat {
  value: string
  label: string
  tone: 'dark' | 'light'
  wide?: boolean
}

interface CaseEntry {
  company: string
  logo?: string
  href: string
  stats: Stat[]
  quote: string
  name: string
  role: string
  img: string
}

const CASES: CaseEntry[] = [
  {
    company: 'Loft Labs',
    logo: '/media/logos/loft-logo.svg',
    href: '/case-studies/loft-labs',
    stats: [
      { value: '4x', label: 'Growth in blog traffic in one year', tone: 'dark', wide: true },
      { value: '70,000+', label: 'Visitors for a single article', tone: 'light' },
      { value: '#1', label: 'Ranking in search results', tone: 'dark' },
    ],
    quote:
      'Content is one of the biggest and best channels you can invest in. And if you want to quickly scale without compromising the quality and expertise, Draft.dev is the way to go.',
    name: 'Rahul Patwardhan',
    role: 'Senior Director, Demand Generation',
    img: '/media/testimonials-lg/rahul_patwardhan_loft_labs_draft_dev.jpg',
  },
  {
    company: 'Status Hero',
    href: '/case-studies/status-hero',
    stats: [
      { value: '211%', label: 'Increase in blog traffic', tone: 'dark', wide: true },
      { value: '50x', label: 'Growth in Medium audience', tone: 'light' },
      { value: '40', label: 'Hours saved per week', tone: 'dark' },
    ],
    quote:
      'Draft.dev has helped us create high-quality content that resonates with our audience on a regular basis. They have helped us double our audience, attract more trial users, and increase our trial conversion rate.',
    name: 'Henry Poydar',
    role: 'Founder & CEO',
    img: '/media/testimonials-lg/henry_poydar_steady_draft_dev.jpg',
  },
  {
    company: 'Earthly',
    href: '/case-studies/earthly',
    stats: [
      { value: '346%', label: 'Increase in monthly readers', tone: 'dark', wide: true },
      { value: '1,500', label: 'Blog visitors per workday', tone: 'light' },
      { value: '6%', label: 'Blog conversion rate', tone: 'dark' },
    ],
    quote:
      "It's difficult to find an agency with enough high-quality subject matter expert writers to build up the content pipeline that Draft.dev gives you. It's a shortcut to building an in-house writing team.",
    name: 'Adam Gordon Bell',
    role: 'Director of Developer Relations',
    img: '/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg',
  },
  {
    company: 'Sinch Mailgun',
    logo: '/media/logos/sinch-logo.svg',
    href: '/case-studies/sinch-mailgun',
    stats: [
      { value: '20–45%', label: 'CTR on developer content', tone: 'dark', wide: true },
      { value: 'Weeks', label: 'Of internal time saved', tone: 'light' },
      { value: 'SME', label: 'Written & reviewed content', tone: 'dark' },
    ],
    quote:
      "I was thoroughly impressed by the smooth onboarding and ability to adapt to our product suite. Draft.dev's attention to detail and dedication to aligning content with our brand have significantly impacted our developer-focused content strategy.",
    name: 'Emily Blitstein',
    role: 'Sr. Content Marketing Manager',
    img: '/media/testimonials-lg/em_sinch_mailgun.jpg',
  },
]

function StatChip({ stat }: { stat: Stat }) {
  const dark = stat.tone === 'dark'
  return (
    <div
      className={`rounded-2xl p-5 ${stat.wide ? 'col-span-2' : ''} ${
        dark ? 'bg-[#141126] text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {stat.value}
      </p>
      <p
        className={`mt-1.5 text-sm ${dark ? 'text-white/70' : 'text-gray-500'}`}
      >
        {stat.label}
      </p>
    </div>
  )
}

function CaseCard({ entry }: { entry: CaseEntry }) {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-7 sm:p-8">
      <div className="flex items-center justify-between">
        {entry.logo ? (
          <Image
            src={entry.logo}
            alt={entry.company}
            width={140}
            height={40}
            className="h-9 w-auto object-contain brightness-0"
          />
        ) : (
          <p className="text-2xl font-semibold tracking-tight text-gray-900">
            {entry.company}
          </p>
        )}
        <Link
          href={entry.href}
          aria-label={`Read the ${entry.company} case study`}
          className="text-gray-900 transition hover:translate-x-0.5 hover:-translate-y-0.5"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {entry.stats.map((stat) => (
          <StatChip key={stat.label} stat={stat} />
        ))}
      </div>

      <figure className="mt-8 border-t border-gray-100 pt-6">
        <blockquote className="text-base leading-relaxed text-gray-600">
          &ldquo;{entry.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-5 flex items-center gap-3">
          <Image
            src={entry.img}
            alt={entry.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">{entry.name}</p>
            <p className="text-sm text-gray-500">
              {entry.role} · {entry.company}
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default function CaseResults() {
  return (
    <section className="relative overflow-hidden bg-[#544b84]">
      {/* The hero's ray pattern rotated 90°: like the reference section, the
          dashes fan out from the LEFT edge (vertical center) rather than the
          top. The oversized div is rotated around its top-left corner and
          offset so the vanishing point lands at left-center. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
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
      {/* Fade the convergence at the left edge into the background. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[45%]"
        style={{
          background:
            'linear-gradient(to right, #544b84 0%, #544b84 18%, rgba(84, 75, 132, 0) 100%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionEyebrow dark center>
          Case studies
        </SectionEyebrow>
        <h2 className="mx-auto mt-6 max-w-3xl text-center text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
          AI has changed how businesses grow
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/75">
          Here are results from real teams that adapted early with Draft.dev.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {CASES.map((entry) => (
            <CaseCard key={entry.company} entry={entry} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            View all case studies <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
