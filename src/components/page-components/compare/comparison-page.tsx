import FAQ from '@/components/global/faq'
import BookCall from '@/components/page-components/service-landing/book-call'
import {
  ArrowRightIcon,
  ChartBarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import ComparisonTable, { FactValue } from './comparison-table'
import {
  competitors,
  draftFacts,
  type Competitor,
  type FactKey,
  type Facts,
} from './data'

// The rows that matter most, shown as cards above the full table
const keyDifferences: {
  key: FactKey
  label: string
  Icon: typeof CheckIcon
}[] = [
  { key: 'who', label: 'Who creates the content', Icon: UserGroupIcon },
  { key: 'aiTracking', label: 'AI visibility', Icon: ChartBarIcon },
  { key: 'distribution', label: 'Distribution', Icon: MegaphoneIcon },
  { key: 'docs', label: 'Technical documentation', Icon: DocumentTextIcon },
  { key: 'start', label: 'Time to first pieces', Icon: RocketLaunchIcon },
  { key: 'pricing', label: 'Pricing', Icon: CurrencyDollarIcon },
]

// Up to three short facts for each side of the hero matchup
const quickFacts = (
  facts: Facts,
  keys: FactKey[] = ['network', 'content', 'pricing', 'start', 'based'],
) =>
  keys
    .filter((k) => facts[k])
    .slice(0, 3)
    .map((k) => facts[k] as string)

// Real Draft.dev outcomes, from the published case studies
const results = [
  {
    value: '10x',
    label: 'More AI traffic for a GPU cloud platform',
    href: '/case-studies/gpu-cloud-platform',
  },
  {
    value: '72%',
    label: "Of a developer API platform's AI citations came from our articles",
    href: '/case-studies/developer-api-platform',
  },
  {
    value: '346%',
    label: "Growth in Earthly's monthly blog visitors",
    href: '/case-studies/earthly',
  },
]

const PickList = ({
  title,
  items,
  highlight = false,
}: {
  title: string
  items: string[]
  highlight?: boolean
}) => (
  <div
    className={
      highlight
        ? 'bg-gradient-brand rounded-3xl p-8 text-white shadow-xl'
        : 'rounded-3xl bg-white p-8 ring-1 ring-gray-200'
    }
  >
    <h3
      className={`font-code text-xl font-semibold ${highlight ? 'text-white' : 'text-secondary'}`}
    >
      {title}
    </h3>
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-x-3 text-base">
          <CheckIcon
            aria-hidden="true"
            className={`mt-0.5 size-5 shrink-0 ${highlight ? 'text-amber-300' : 'text-secondary'}`}
          />
          <span className={highlight ? 'text-white/90' : 'text-gray-700'}>
            {item}
          </span>
        </li>
      ))}
    </ul>
    {highlight && (
      <a
        href="#book-a-call"
        className="mt-8 inline-block rounded-md bg-amber-400 px-5 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-amber-300"
      >
        Book a Discovery Call
      </a>
    )}
  </div>
)

const ComparisonPage = ({ competitor }: { competitor: Competitor }) => {
  const others = competitors
    .filter((c) => c.slug !== competitor.slug)
    .slice(0, 3)

  return (
    <div>
      {/* Hero: verdict, then the two companies face to face */}
      <div className="bg-gradient-brand relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -left-32 -z-10 h-[24rem] w-[24rem] rounded-full bg-white/10 blur-3xl"
        />
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-14 sm:pt-16 sm:pb-20 lg:px-8">
          <div className="text-center">
            <p className="inline-flex items-center gap-x-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase ring-1 ring-white/20">
              <span className="text-amber-300">Compare</span>
              <span aria-hidden="true" className="text-white/40">
                ·
              </span>
              {competitor.name} alternative
            </p>
            <h1 className="font-code sm:header-light mt-6 text-4xl leading-tight font-semibold text-white">
              Draft.dev <span className="text-amber-300">vs</span>{' '}
              {competitor.name}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
              {competitor.verdict}
            </p>
          </div>

          <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
            {/* VS badge between the two cards */}
            <span
              aria-hidden="true"
              className="font-code absolute top-1/2 left-1/2 z-10 hidden size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 text-xl font-bold text-gray-900 shadow-xl ring-8 ring-white/15 md:flex"
            >
              VS
            </span>
            <div className="flex flex-col rounded-3xl bg-white p-8 shadow-2xl">
              <p className="font-code text-secondary text-2xl font-semibold">
                Draft.dev
              </p>
              <p className="mt-3 text-base text-gray-700 sm:text-lg">
                {competitor.summary.draft}
              </p>
              <ul className="mt-6 space-y-2">
                {quickFacts(draftFacts, ['network', 'content', 'start']).map(
                  (fact) => (
                    <li
                      key={fact}
                      className="flex items-start gap-x-2 text-sm font-medium text-gray-800"
                    >
                      <CheckIcon
                        aria-hidden="true"
                        className="text-secondary mt-0.5 size-4 shrink-0"
                      />
                      {fact}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href="#book-a-call"
                  className="inline-block rounded-md bg-amber-400 px-5 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-amber-300"
                >
                  Book a Discovery Call
                </a>
              </div>
            </div>
            <div className="flex flex-col rounded-3xl bg-white/10 p-8 ring-1 ring-white/20">
              <p className="font-code text-2xl font-semibold text-white">
                {competitor.name}
              </p>
              <p className="mt-3 text-base text-white/90 sm:text-lg">
                {competitor.summary.them}
              </p>
              <ul className="mt-6 space-y-2">
                {quickFacts(competitor.facts).map((fact) => (
                  <li
                    key={fact}
                    className="flex items-start gap-x-2 text-sm font-medium text-white/90"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-300"
                    />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section className="bg-white pt-14 sm:pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
              Key Differences
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
              The six things buyers ask about most
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {keyDifferences.map(({ key, label, Icon }) => (
                <div
                  key={key}
                  className="flex flex-col rounded-3xl bg-gray-50 p-6 ring-1 ring-gray-200"
                >
                  <div className="flex items-center gap-x-3">
                    <span className="bg-gradient-brand flex size-10 items-center justify-center rounded-xl text-white shadow-md">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="font-code text-secondary text-lg font-semibold">
                      {label}
                    </h3>
                  </div>
                  <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#5e5285]/20">
                    <p className="text-secondary text-xs font-semibold tracking-wider uppercase">
                      Draft.dev
                    </p>
                    <p className="mt-1 text-base text-gray-900">
                      <FactValue value={draftFacts[key]} />
                    </p>
                  </div>
                  <div className="mt-3 px-4">
                    <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      {competitor.name}
                    </p>
                    <p className="mt-1 text-base text-gray-700">
                      <FactValue value={competitor.facts[key]} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable
          name={competitor.name}
          draft={draftFacts}
          them={competitor.facts}
          checked={competitor.checked}
        />

        {/* Who should pick which */}
        <section className="bg-gray-50 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
              Who Should Pick Which
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <PickList
                title={`Pick ${competitor.name} if`}
                items={competitor.pickThem}
              />
              <PickList
                title="Pick Draft.dev if"
                items={competitor.pickDraft}
                highlight
              />
            </div>
          </div>
        </section>

        {/* Results from real Draft.dev clients */}
        <section className="bg-gradient-brand py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="lg:subheader-light subheader-mobile-light text-center">
              What Our Clients Measured
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {results.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group rounded-3xl bg-white/10 p-8 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <p className="font-code text-5xl font-semibold text-white">
                    {r.value}
                  </p>
                  <p className="mt-3 text-base text-white/85">{r.label}</p>
                  <span className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-amber-300">
                    Read the case study
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="size-4 transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {others.length > 0 && (
          <section className="bg-white py-14 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
                Other Comparisons
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {others.map((c) => (
                  <CompareCard key={c.slug} competitor={c} />
                ))}
              </div>
              <p className="mt-8 text-center">
                <Link
                  href="/compare"
                  className="text-secondary font-semibold underline underline-offset-4"
                >
                  All comparisons
                </Link>
              </p>
            </div>
          </section>
        )}

        <section className="bg-white pb-6">
          <div className="mx-auto max-w-5xl px-6 text-sm text-gray-500 lg:px-8">
            <p className="font-semibold text-gray-700">Sources</p>
            <ul className="mt-2 space-y-1 break-all">
              {competitor.sources.map((s) => (
                <li key={s}>
                  <a href={s} rel="nofollow noopener" target="_blank">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <FAQ
        className="pt-14 pb-8"
        callHref="#book-a-call"
        title="Common Questions We Get Asked"
        headingClassName="subheader-mobile-gradient sm:subheader-gradient"
        masonry
        standardFaqs={false}
        pageFaqs={competitor.faqs}
      />
      <BookCall />
    </div>
  )
}

// Card used on the hub and under "Other comparisons"
export const CompareCard = ({
  competitor,
  showCategory = false,
}: {
  competitor: Competitor
  showCategory?: boolean
}) => (
  <Link
    href={`/compare/${competitor.slug}`}
    className="group flex flex-col justify-between rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-lg"
  >
    <div>
      {showCategory && (
        <p className="text-secondary mb-4 inline-flex rounded-full bg-[#5e5285]/10 px-3 py-1 text-xs font-semibold">
          {competitor.category}
        </p>
      )}
      <p className="font-code text-secondary text-sm font-semibold">
        Draft.dev <span className="text-gray-400">vs</span>
      </p>
      <p className="font-code mt-1 text-2xl font-semibold break-words text-gray-900">
        {competitor.name}
      </p>
      <p className="mt-3 text-base text-gray-600">{competitor.tagline}</p>
    </div>
    <span className="text-secondary mt-6 inline-flex items-center gap-x-2 text-sm font-semibold">
      Read the comparison
      <ArrowRightIcon
        aria-hidden="true"
        className="size-4 transition group-hover:translate-x-1"
      />
    </span>
  </Link>
)

export default ComparisonPage
