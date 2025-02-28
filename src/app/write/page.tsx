import { MedHeader } from '@/components/global/headers/med-header'
import AirtableEmbed from '@/components/page-components/vendors/air-table'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Write for Draft.dev',
  description:
    'If you are a software developer and you want to build your personal brand while getting paid to write about interesting technical topics give us your details and we will get in touch.',
  robots: {
    index: true,
    follow: true,
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
    </div>
  )
}
