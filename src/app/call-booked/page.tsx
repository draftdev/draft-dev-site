import { Container } from '@/components/global/container'
import FAQ from '@/components/global/faq'
import NewsletterFull from '@/components/media/newsletter-full'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank you for booking a call with us - Draft.dev',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/call-booked',
  },
}

export default function CallBooked() {
  return (
    <>
      <Container>
        <div className="my-16 bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-base leading-7">
            <h1 className="header-gradient mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thank you for booking a call with us!
            </h1>
            <div className="mx-auto my-6 max-w-2xl text-center">
              <p>
                We look forward to speaking with you. If you are interested in
                some of our resources, feel free to{' '}
                <Link href="/learn" className="font-bold text-primary">
                  browse through our blog
                </Link>{' '}
                or watch our{' '}
                <Link href="/webinars" className="font-bold text-primary">
                  free webinars!
                </Link>{' '}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <NewsletterFull />
      <FAQ />
    </>
  )
}
