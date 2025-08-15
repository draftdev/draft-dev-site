import { ChevronRightIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
const LogosFlexLazy = dynamic(
  () => import('@/components/media/logos-flex').then((mod) => mod.LogosFlex),
  {
    ssr: false,
    loading: () => null,
  },
)

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-brand">
      <main className="relative isolate pb-16">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:py-16 lg:px-8">
            <div className="mx-auto w-full lg:flex lg:items-center lg:justify-between">
              <div className="relative max-w-2xl lg:shrink-0">
                <div className="py-3 lg:mt-16">
                  <Link
                    href="/resources"
                    className="mr-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary-40"
                  >
                    New eBook
                  </Link>

                  <Link
                    href="/content-marketing-engine"
                    className="inline-flex"
                  >
                    <span className="inline-flex items-center text-sm text-white">
                      How to Set Up a Content Marketing Engine in the Age of AI
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="size-5 text-gray-400"
                      />
                    </span>
                  </Link>
                </div>

                <h1 className="mb-4 py-2 text-left font-code text-5xl font-semibold leading-tight text-white sm:text-6xl">
                  The Leader in Technical Content
                </h1>

                <p className="mt-3 max-w-[60ch] text-base text-gray-100 sm:text-lg">
                  We help Developer Marketing, Product, and Developer Relations
                  teams drive business value through authentic, technical
                  content.
                </p>

                <div className="mb-6 mt-16 flex flex-col items-start gap-y-4 pl-3 sm:mb-0 sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-0 lg:pl-0">
                  <Link
                    href="/call"
                    className="mb-8 inline-block rounded-sm px-3.5 py-2.5 font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mb-0 sm:text-base"
                  >
                    Book a Discovery Call
                  </Link>
                  <Link
                    href="#how-we-work"
                    className="inline-block font-semibold text-white hover:text-gray-200 sm:text-base"
                  >
                    How We Work <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <LogosFlexLazy />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
