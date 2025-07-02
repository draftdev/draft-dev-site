import { Container } from '@/components/global/container'
import FAQ from '@/components/global/faq'
import NewsletterFull from '@/components/media/newsletter-full'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank you for your interest - Draft.dev',
  description: 'Thank you for your interest in our material - Draft.dev',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/thank-you',
  },
}

export default function ThankYou() {
  return (
    <>
      <Container>
        <div className="my-16 bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-base leading-7">
            <h1 className="header-gradient mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thank you for your interest!
            </h1>
            <div className="mx-auto my-6 max-w-2xl text-center">
              <p>
                We just sent an email with the resource to the address you have
                provided us with, please check your inbox. We appreciate your
                interest in our material!
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
