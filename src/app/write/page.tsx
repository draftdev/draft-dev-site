import { MedHeader } from '@/components/global/headers/med-header'
import { LogosDark } from '@/components/media/logos-dark'
import AirtableEmbed from '@/components/page-components/vendors/air-table'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Write for Draft.dev - Join Our Technical Writing Network',
  description:
    "Join our network of 300+ technical experts and get paid to write about cutting-edge technologies. We're looking for experienced developers and technical professionals.",
  keywords:
    'technical writing jobs, freelance developer writing, write for draft.dev, technical content creation, technical writer opportunities',
  openGraph: {
    title: 'Write for Draft.dev - Join Our Technical Writing Network',
    description:
      'Join our network of 300+ technical experts and get paid to write about cutting-edge technologies.',
    url: 'https://draft.dev/write',
    images: [
      {
        url: 'https://draft.dev/draft/og/write_og_draft_dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Write for Draft.dev - Technical Writing Opportunities',
      },
    ],
  },
  twitter: {
    title: 'Write for Draft.dev - Join Our Technical Writing Network',
    description:
      'Join our network of 300+ technical experts and get paid to write about cutting-edge technologies.',
    images: ['https://draft.dev/draft/og/write_og_draft_dev.jpg'],
  },
  alternates: {
    canonical: 'https://draft.dev/write',
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
    </div>
  )
}
