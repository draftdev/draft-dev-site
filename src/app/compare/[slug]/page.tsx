import ComparisonPage from '@/components/page-components/compare/comparison-page'
import { competitors } from '@/components/page-components/compare/data'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = competitors.find((x) => x.slug === slug)
  if (!c) return {}
  const title = `Draft.dev vs ${c.name}: DevTool Agencies Compared - Draft.dev`
  const url = `https://draft.dev/compare/${c.slug}`
  return {
    metadataBase: new URL('https://draft.dev'),
    title,
    description: c.verdict,
    openGraph: {
      type: 'website',
      url,
      siteName: 'Draft.dev',
      locale: 'en_US',
      title,
      description: c.verdict,
      images: [
        {
          url: '/draft/og/main_og_draft_dev.jpg',
          width: 1200,
          height: 630,
          alt: `Draft.dev vs ${c.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: c.verdict,
      images: ['/draft/og/main_og_draft_dev.jpg'],
      creator: '@draftdev',
      site: '@draftdev',
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  }
}

export default async function CompareCompetitor({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const competitor = competitors.find((c) => c.slug === slug)
  if (!competitor) notFound()
  return <ComparisonPage competitor={competitor} />
}
