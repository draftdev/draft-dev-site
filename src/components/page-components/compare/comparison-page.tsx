import FAQ from '@/components/global/faq'
import { LogoGrid, LogoMarquee } from '@/components/media/logo-strip'
import { testimonials } from '@/components/media/testimonials/testimonials-group'
import BookCall from '@/components/page-components/service-landing/book-call'
import {
  AcademicCapIcon,
  ArrowDownIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  CheckIcon,
  CubeIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  NewspaperIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import ComparisonTable, { FactValue } from './comparison-table'
import {
  competitors,
  draftFacts,
  type Competitor,
  type FactKey,
  type Facts,
  type HeroRow,
} from './data'

// Label and icon for each row that can be shown as a card above the table
const cardMeta: Partial<
  Record<FactKey, { label: string; Icon: typeof CheckIcon }>
> = {
  network: { label: 'Expert network', Icon: AcademicCapIcon },
  who: { label: 'Who creates the content', Icon: UserGroupIcon },
  builtFor: { label: 'Built for', Icon: CubeIcon },
  content: { label: 'Content delivery', Icon: NewspaperIcon },
  paid: { label: 'Marketing channels', Icon: ArrowTrendingUpIcon },
  aiTracking: { label: 'AI visibility', Icon: ChartBarIcon },
  distribution: { label: 'Distribution', Icon: MegaphoneIcon },
  docs: { label: 'Technical documentation', Icon: DocumentTextIcon },
  start: { label: 'Time to first pieces', Icon: RocketLaunchIcon },
  pricing: { label: 'Pricing', Icon: CurrencyDollarIcon },
  revisions: { label: 'Revisions', Icon: ArrowPathIcon },
}

// The rows that matter most, shown as cards above the full table
const defaultKeyRows: FactKey[] = [
  'who',
  'aiTracking',
  'distribution',
  'docs',
  'start',
  'pricing',
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

// Real Draft.dev outcomes, from the published case studies; named clients first
const results = [
  {
    value: '346%',
    label: "Growth in Earthly's monthly blog visitors",
    href: '/case-studies/earthly',
  },
  {
    value: '4x',
    label:
      "Growth in Loft Labs' blog traffic in one year, with one article passing 70,000 visitors",
    href: '/case-studies/loft-labs',
  },
  {
    value: '72%',
    label: "Of a developer API platform's AI citations come from our articles",
    href: '/case-studies/developer-api-platform',
  },
]

// The VS badge that sits between the two hero cards
const VsBadge = () => (
  <span
    aria-hidden="true"
    className="font-code absolute top-1/2 left-1/2 z-10 hidden size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 text-xl font-bold text-gray-900 shadow-xl ring-8 ring-white/15 md:flex"
  >
    VS
  </span>
)

// Hero cards with the same labelled rows on both sides. A subgrid lines up the
// name, summary, each row and the buttons across the two cards.
// Named client quotes from the shared testimonials, picked by person's name.
// A subgrid keeps the quotes and the names level across each row.
const ClientQuotes = ({ names }: { names: string[] }) => {
  const picked = names
    .map((n) => testimonials.find((t) => t.author.name === n))
    .filter((t) => t !== undefined)
  if (picked.length === 0) return null

  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-lg text-gray-600">
          Named clients, in their own words
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {picked.map((t) => (
            <figure
              key={t.author.name}
              className="row-span-2 grid grid-rows-subgrid gap-y-0 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#5e5285]/10"
            >
              <blockquote className="text-base text-gray-700">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-3 border-t border-gray-200 pt-5">
                <Image
                  src={t.author.imageUrl}
                  alt={t.author.name}
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-secondary font-semibold">
                    {t.author.name}
                  </p>
                  <p className="text-sm text-gray-600">{t.author.company}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

const MirroredCards = ({
  competitor,
  rows,
}: {
  competitor: Competitor
  rows: HeroRow[]
}) => {
  // Name, summary, one track per row, then the buttons
  const span = rows.length + 3
  const cardRows = { gridRow: `span ${span} / span ${span}` }
  const host = new URL(competitor.sources[0]).hostname.replace(/^www\./, '')

  return (
    <>
      <div className="relative mt-12 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
        <VsBadge />
        <div
          style={cardRows}
          className="grid grid-rows-subgrid gap-y-0 rounded-3xl bg-white p-7 shadow-2xl"
        >
          <p className="font-code text-secondary text-2xl font-semibold">
            Draft.dev
          </p>
          <p className="mt-3 text-base text-gray-700 sm:text-lg">
            {competitor.summary.draft}
          </p>
          {rows.map((r) => (
            <div key={r.label} className="mt-5 border-t border-gray-200 pt-4">
              <p className="text-secondary text-xs font-semibold tracking-wider uppercase">
                {r.label}
              </p>
              <p className="mt-1 text-base font-medium text-gray-900">
                {r.draft}
              </p>
            </div>
          ))}
          <div className="flex flex-wrap items-start gap-3 pt-8">
            <a
              href="#book-a-call"
              className="inline-block rounded-md bg-amber-400 px-5 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-amber-300"
            >
              Book a Discovery Call
            </a>
            <a
              href="#side-by-side"
              className="text-secondary inline-flex items-center gap-x-2 rounded-md px-5 py-3 text-base font-semibold ring-1 ring-[#5e5285]/30 transition hover:bg-[#f4f1f8]"
            >
              See the full comparison
              <ArrowDownIcon aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
        <div
          style={cardRows}
          className="grid grid-rows-subgrid gap-y-0 rounded-3xl bg-white/10 p-7 ring-1 ring-white/20"
        >
          <p className="font-code text-2xl font-semibold text-white">
            {competitor.name}
          </p>
          <p className="mt-3 text-base text-white/90 sm:text-lg">
            {competitor.summary.them}
          </p>
          {rows.map((r) => (
            <div key={r.label} className="mt-5 border-t border-white/20 pt-4">
              <p className="text-xs font-semibold tracking-wider text-amber-300 uppercase">
                {r.label}
              </p>
              <p className="mt-1 text-base font-medium text-white">{r.them}</p>
            </div>
          ))}
          {/* Keeps the button track so both cards end level */}
          <div />
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-white/70">
        {competitor.name} facts from {host}, checked {competitor.checked}.
      </p>
      {/* The same client logo strip the service pages use */}
      <div className="mt-12">
        <p className="text-center text-base font-medium text-white/80">
          <span className="font-bold text-amber-300">Draft.dev</span> is trusted
          by 100+ tech companies
        </p>
        <LogoMarquee className="mt-6" />
        <LogoGrid className="mt-6" />
      </div>
    </>
  )
}

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
        ? 'bg-gradient-brand rounded-3xl p-7 text-white shadow-xl'
        : 'rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#5e5285]/10'
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
  // Suggest DevTool specialists first
  const devtoolFirst = (c: Competitor) =>
    c.category === 'DevTool content and marketing agencies' ? 0 : 1
  const others = competitors
    .filter((c) => c.slug !== competitor.slug)
    .sort((a, b) => devtoolFirst(a) - devtoolFirst(b))
    .slice(0, 3)
  const { pitch } = competitor

  // Real Draft.dev results, shown right after the reasons when the page has a pitch
  const resultsSection = (
    <section className="bg-gradient-brand relative isolate overflow-hidden py-12 sm:py-14">
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 -z-10 h-80 w-80 rounded-full bg-amber-300/15 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="lg:subheader-light subheader-mobile-light text-center">
          What Our Clients Measured
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-lg text-white/80">
          Numbers from our published case studies
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {results.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              // Subgrid: number, label and link line up across the row
              className="group row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl bg-white/10 p-7 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <p className="font-code text-5xl font-semibold text-amber-300">
                {r.value}
              </p>
              <p className="mt-3 text-base text-white/90">{r.label}</p>
              <span className="mt-5 inline-flex items-center gap-x-2 self-end text-sm font-semibold text-white">
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
  )

  // Links to a few other comparisons, DevTool specialists first
  const othersSection = others.length > 0 && (
    <section className="bg-[#f4f1f8] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
          Other Comparisons
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-lg text-gray-600">
          See how Draft.dev compares with other agencies
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {others.map((c) => (
            <CompareCard key={c.slug} competitor={c} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/compare"
            className="text-secondary inline-flex items-center gap-x-2 font-semibold"
          >
            All comparisons
            <ArrowRightIcon aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )

  const pickThem = (
    <PickList
      title={`Pick ${competitor.name} if`}
      items={competitor.pickThem}
    />
  )
  const pickDraft = (
    <PickList
      title="Pick Draft.dev if"
      items={competitor.pickDraft}
      highlight
    />
  )

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

          {pitch?.heroRows ? (
            <MirroredCards competitor={competitor} rows={pitch.heroRows} />
          ) : (
            <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
              {/* VS badge between the two cards */}
              <span
                aria-hidden="true"
                className="font-code absolute top-1/2 left-1/2 z-10 hidden size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 text-xl font-bold text-gray-900 shadow-xl ring-8 ring-white/15 md:flex"
              >
                VS
              </span>
              <div className="flex flex-col rounded-3xl bg-white p-7 shadow-2xl">
                <p className="font-code text-secondary text-2xl font-semibold">
                  Draft.dev
                </p>
                <p className="mt-3 text-base text-gray-700 sm:text-lg">
                  {competitor.summary.draft}
                </p>
                <ul className="mt-6 space-y-2">
                  {(
                    pitch?.heroPoints ??
                    quickFacts(draftFacts, ['network', 'content', 'start'])
                  ).map((fact) => (
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
                  ))}
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
              <div className="flex flex-col rounded-3xl bg-white/10 p-7 ring-1 ring-white/20">
                <p className="font-code text-2xl font-semibold text-white">
                  {competitor.name}
                </p>
                <p className="mt-3 text-base text-white/90 sm:text-lg">
                  {competitor.summary.them}
                </p>
                <ul className="mt-6 space-y-2">
                  {quickFacts(
                    competitor.facts,
                    // Pitch pages skip the content row, which repeats the pricing row
                    pitch ? ['network', 'pricing', 'builtFor'] : undefined,
                  ).map((fact) => (
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
          )}
        </div>
      </div>

      <main>
        {pitch && (
          <>
            {/* Why buyers choose Draft.dev, each reason backed by a fact */}
            <section className="py-12 sm:py-14">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
                  Why DevTool Teams Choose Draft.dev
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-center text-lg text-gray-600">
                  Six reasons, each backed by a client result
                </p>
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {pitch.reasons.map((reason) => (
                    <div
                      key={reason.title}
                      // Subgrid: title, body, stat and link line up across each row
                      className="row-span-4 grid grid-rows-subgrid gap-y-0 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#5e5285]/10"
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-gray-900 shadow-sm">
                          <CheckIcon aria-hidden="true" className="size-5" />
                        </span>
                        <h3 className="font-code text-secondary text-xl font-semibold">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="mt-4 mb-5 text-base text-gray-700">
                        {reason.body}
                      </p>
                      {reason.stat ? (
                        <div className="bg-gradient-brand rounded-2xl p-4 text-white shadow-md">
                          <p className="font-code text-3xl font-semibold text-amber-300">
                            {reason.stat.value}
                          </p>
                          <p className="mt-1 text-sm text-white/90">
                            {reason.stat.label}
                          </p>
                        </div>
                      ) : reason.quote ? (
                        <figure className="bg-gradient-brand rounded-2xl p-4 text-white shadow-md">
                          <blockquote className="text-base text-white">
                            &ldquo;{reason.quote.text}&rdquo;
                          </blockquote>
                          <figcaption className="mt-2 text-sm font-semibold text-amber-300">
                            {reason.quote.by}
                          </figcaption>
                        </figure>
                      ) : (
                        <div />
                      )}
                      {reason.href ? (
                        <Link
                          href={reason.href}
                          className="text-secondary inline-flex items-center gap-x-2 pt-4 text-sm font-semibold"
                        >
                          {reason.cta ?? 'Learn more'}
                          <ArrowRightIcon
                            aria-hidden="true"
                            className="size-4"
                          />
                        </Link>
                      ) : (
                        <span />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {resultsSection}
            {pitch.quotes && <ClientQuotes names={pitch.quotes} />}
          </>
        )}

        {/* Key differences on a soft lavender band */}
        <section className="bg-[#f4f1f8] py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
              Key Differences
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-lg text-gray-600">
              {pitch
                ? `Where Draft.dev and ${competitor.name} differ`
                : 'The six things buyers ask about most'}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {(pitch?.keyRows ?? defaultKeyRows).map((key) => {
                const meta = cardMeta[key]
                if (!meta) return null
                const { label, Icon } = meta
                return (
                  <div
                    key={key}
                    // Subgrid: heading, Draft.dev box and competitor line up across the row
                    className="row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#5e5285]/10 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-center gap-x-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-amber-400 text-gray-900 shadow-sm">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <h3 className="font-code text-secondary text-lg font-semibold">
                        {label}
                      </h3>
                    </div>
                    <div className="bg-gradient-brand mt-4 rounded-2xl p-4 text-white shadow-md">
                      <p className="text-xs font-semibold tracking-wider text-amber-300 uppercase">
                        Draft.dev
                      </p>
                      <p className="mt-1 text-base">
                        <FactValue value={draftFacts[key]} />
                      </p>
                    </div>
                    <div className="mt-3 px-1">
                      <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                        {competitor.name}
                      </p>
                      <p className="mt-1 text-base text-gray-700">
                        <FactValue value={competitor.facts[key]} />
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <ComparisonTable
          name={competitor.name}
          draft={draftFacts}
          them={competitor.facts}
          checked={competitor.checked}
          sources={competitor.sources}
        />

        {/* Who should pick which */}
        <section className="bg-[#f4f1f8] py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="subheader-mobile-gradient sm:subheader-gradient text-center">
              Who Should Pick Which
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-lg text-gray-600">
              A quick fit check before you book a call
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {pitch ? (
                <>
                  {pickDraft}
                  {pickThem}
                </>
              ) : (
                <>
                  {pickThem}
                  {pickDraft}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Results from real Draft.dev clients, already shown above with a pitch */}
        {!pitch && resultsSection}

        {!pitch && othersSection}
      </main>

      <FAQ
        className="py-12 sm:py-14"
        centered
        callHref="#book-a-call"
        title="Common Questions We Get Asked"
        headingClassName="subheader-mobile-gradient sm:subheader-gradient"
        masonry
        standardFaqs={false}
        pageFaqs={competitor.faqs}
      />
      {/* With a pitch, other comparisons wait until after the FAQ */}
      {pitch && othersSection}
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
    className="group flex flex-col justify-between rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#5e5285]/10 transition hover:-translate-y-0.5 hover:shadow-lg"
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
