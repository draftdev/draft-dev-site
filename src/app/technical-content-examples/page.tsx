import FAQ from '@/components/global/faq'
import { LogosDark } from '@/components/media/logos-dark'
import type { Metadata } from 'next'
import ExampleArticlesList from '@/components/global/example-articles'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Technical Content Examples - Draft.dev',
  description:
    "See technical content like tutorials, guides, comparisons, persuasions pieces, and more that we have created for clients like Docker, JetBrains, Sinch, and others.",
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/technical-content-examples',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Technical Content Examples - Draft.dev',
    description:
      "See technical content like tutorials, guides, comparisons, persuasions pieces, and more that we have created for clients like Docker, JetBrains, Sinch, and others.",
    images: [
      {
        url: '/draft/og/main_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Draft.dev Technical Content Examples',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Content Examples - Draft.dev',
    description:
      "See technical content like tutorials, guides, comparisons, persuasions pieces, and more that we have created for clients like Docker, JetBrains, Sinch, and others.",
    images: ['/draft/og/main_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/technical-content-examples' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function TechnicalContentExamples() {
  return (
    <>
      <ExampleArticlesList />
      <LogosDark />
      <FAQ />
    </>
  )
}
