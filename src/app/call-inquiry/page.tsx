import FAQ from '@/components/global/faq'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/call-inquiry/service-info'

// export const metadata: Metadata = {
//   metadataBase: new URL('https://draft.dev'),
//   title: 'Inquiry - Draft.dev',
//   description:
//     'Learn how Draft.dev can help you create content that resonates with developers.',
//   authors: [{ name: 'Draft.dev Team', url: 'https://draft.dev/about' }],
//   openGraph: {
//     type: 'website',
//     url: 'https://draft.dev/call-inquiry',
//     siteName: 'Draft.dev',
//     locale: 'en_US',
//     title: 'Inquiry - Draft.dev',
//     description:
//       'Learn how Draft.dev can help you create content that resonates with developers.',
//     images: [
//       {
//         url: '/draft/og/call_og_draft_dev.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Connect with Draft.dev',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Inquiry - Draft.dev',
//     description:
//       'Learn how Draft.dev can help you create content that resonates with developers.',
//     images: ['/draft/og/call_og_draft_dev.jpg'],
//     creator: '@draftdev',
//     site: '@draftdev',
//   },
//   alternates: { canonical: 'https://draft.dev/call-inquiry' },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// }

export default function CallInquiry() {
  return (
    <>
      <ServiceInfo />
      <SocialProof />
      <TestimonialsGroup />
      <LogosDark />
      <FAQ />
    </>
  )
}
