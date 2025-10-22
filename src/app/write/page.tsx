import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import AirtableEmbed from '@/components/page-components/vendors/air-table'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://draft.dev'),
  title: 'Write for Draft.dev - Join Our Technical Writing Network',
  description:
    "Join our network of 300+ technical experts and get paid to write about cutting-edge technologies. We're looking for experienced developers and technical professionals.",
  authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
  openGraph: {
    type: 'website',
    url: 'https://draft.dev/write',
    siteName: 'Draft.dev',
    locale: 'en_US',
    title: 'Write for Draft.dev - Join Our Technical Writing Network',
    description:
      "Join our network of 300+ technical experts and get paid to write about cutting-edge technologies. We're looking for experienced developers and technical professionals.",
    images: [
      {
        url: '/draft/og/write_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Write for Draft.dev - Technical Writing Opportunities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Write for Draft.dev - Join Our Technical Writing Network',
    description:
      "Join our network of 300+ technical experts and get paid to write about cutting-edge technologies. We're looking for experienced developers and technical professionals.",
    images: ['/draft/og/write_og_draft_dev.jpg'],
    creator: '@draftdev',
    site: '@draftdev',
  },
  alternates: { canonical: 'https://draft.dev/write' },
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

export default function Write() {
  return (
    <div>
      <MedHeader
        title="Write for Draft.dev"
        descriptionOne="If you're a software developer and you want to build your personal brand while getting paid to write about interesting technical topics, you've come to the right place. "
        descriptionTwo="We create content that will be read by a wide range of readers around the world. As such, we're committed to supporting diversity in our writers and encourage everyone at all experience levels to apply."
      />
      <main className="block">
        <AirtableEmbed />
      </main>
      <LogosDark />
      <TestimonialsGroup />
    </div>
  )
}
