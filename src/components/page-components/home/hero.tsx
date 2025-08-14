import { LogosFlex } from '@/components/media/logos-flex'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-brand pt-20">
      <main className="relative isolate pb-16">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:py-16 lg:px-8">
            <div className="mx-auto w-full lg:flex lg:items-center lg:justify-between">
              <div className="relative max-w-2xl lg:shrink-0">
                <div className="mt-24 py-3 sm:mt-32 lg:mt-16">
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

                <h1 className="mb-6 py-4 text-left font-code text-5xl font-semibold leading-tight text-white sm:text-6xl">
                  The Leader in Technical Content
                </h1>

                <p className="sm:paragraph-light max-w-prose rounded-lg bg-white/5 p-4 text-base text-gray-100 sm:bg-transparent sm:p-0">
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

              {/* Optional image grid can go here */}
              <div className="mt-14 hidden justify-end gap-8 sm:-mt-44 sm:pl-20 lg:mt-0 lg:flex lg:pl-0"></div>
            </div>
          </div>
          <div className="text-center">
            <LogosFlex />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
