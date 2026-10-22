import Link from 'next/link'

import SectionEyebrow from '@/components/ui/section-eyebrow'
import { DitherFunnelChart } from '@/components/ui/dither-funnel'
import { RevenueLineChart } from '@/components/ui/dither-revenue'
import { DitherStackedChart } from '@/components/ui/dither-stacked'

// Alternating text/visual feature rows, following the dofollow.com section
// structure: eyebrow label, bold headline, muted paragraphs on one side; a
// light rounded chart card on the other. Rows alternate sides.

function FeatureRow({
  eyebrow,
  title,
  paragraphs,
  linkText,
  linkHref,
  visual,
  reverse = false,
}: {
  eyebrow: string
  title: string
  paragraphs: string[]
  linkText?: string
  linkHref?: string
  visual: React.ReactNode
  reverse?: boolean
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className={reverse ? 'lg:order-2' : ''}>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-3xl">
          {title}
        </h3>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="mt-6 text-lg leading-relaxed text-gray-500">
            {p}
          </p>
        ))}
        {linkText && linkHref && (
          <Link
            href={linkHref}
            className="mt-6 inline-flex items-center gap-1 text-base font-semibold text-primary hover:text-primary-80"
          >
            {linkText} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>{visual}</div>
    </div>
  )
}

export default function FeatureRows() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-24 px-4 sm:space-y-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow center>What we do</SectionEyebrow>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
            Turn developer content into a reliable growth driver
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            For teams launching, introducing new products, or scaling existing
            content engines
          </p>
        </div>

        <FeatureRow
          reverse
          eyebrow="From zero to growth"
          title="You build product, we build your developer audience"
          paragraphs={[
            'No content team yet? No problem. We bring the strategy, production, and distribution across many content types: Blog posts, videos, social collateral, comparison pages, lead magnets, and more. Let us drive your first wave of developer signups.',
          ]}
          linkText="See our process"
          linkHref="/#how-we-work"
          visual={
            <div className="rounded-2xl bg-gray-50 p-6 sm:p-8">
              <RevenueLineChart theme="light" />
            </div>
          }
        />

        <FeatureRow
          eyebrow="New product releases"
          title="Content strategies for new product releases"
          paragraphs={[
            'Introducing a new product or feature means educating a market that does not know it exists yet. We help you build awareness fast with a coordinated content strategy across blogs, video, social, comparison and feature pages, and lead magnets. All backed by competitive analysis and SEO/GEO insights.',
          ]}
          linkText="See how we drive awareness"
          linkHref="/drive-awareness"
          visual={
            <div className="rounded-2xl bg-gray-50 p-6 sm:p-8">
              <DitherFunnelChart theme="light" />
            </div>
          }
        />

        <FeatureRow
          reverse
          eyebrow="Scale"
          title="Scale output without scaling headcount"
          paragraphs={[
            'More channels, more content. We integrate seamlessly with your existing team to expand content production across channels: on-site articles, guest posts, video content, newsletter campaigns, social distribution, and more. We analyze, refresh, and report on your content performance.',
          ]}
          linkText="See some of our technical content examples"
          linkHref="/technical-content-examples"
          visual={<DitherStackedChart theme="light" />}
        />
      </div>
    </section>
  )
}
