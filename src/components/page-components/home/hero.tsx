import { LogosFlex } from '@/components/media/logos-flex'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero: React.FC = () => {
  const imageSrc = '/site/med-portrait/hero.webp'
  const imageAlt = 'Technical content development'

  return (
    <div className="bg-gradient-brand">
      <main className="relative isolate pb-16 sm:pb-0">
        <div className="overflow-hidden">
          <div className="sm-px:0 mx-auto max-w-7xl px-10 py-6 sm:py-16">
            <div className="mx-auto w-full lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="relative max-w-2xl lg:shrink-0">
                <div className="py-3 lg:mt-16">
                  <Link
                    href="/resources"
                    className="text-primary ring-primary-40 mr-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold ring-1 ring-inset"
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

                <h1 className="font-code mb-0 py-4 text-left text-3xl font-semibold text-white sm:mb-4 sm:text-6xl sm:leading-16">
                  The Leader in Technical Content
                </h1>

                <p className="max-w-[60ch] text-base text-gray-100 sm:text-lg">
                  We help Developer Marketing, Product, and Developer Relations
                  teams drive business value through authentic, technical
                  content.
                </p>

                <div className="my-6 flex flex-col items-center gap-y-4 sm:my-8 sm:mb-0 sm:flex-row sm:items-center sm:justify-start sm:gap-x-6 sm:gap-y-0 lg:pl-0">
                  <Link
                    href="/call"
                    className="focus-visible:outline-primary inline-block rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base"
                  >
                    Book a Discovery Call
                  </Link>
                  <Link
                    href="#how-we-work"
                    className="inline-block text-sm font-semibold text-white hover:text-gray-200 sm:text-base"
                  >
                    How We Work <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="mt-10 flex justify-center lg:mt-0 lg:justify-start">
                <div className="inline-block shrink-0">
                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                        {/* Responsive wrapper controls the visual width */}
                        <div className="relative aspect-[2/3] w-[60vw] max-w-[320px] sm:max-w-[360px] lg:w-[400px]">
                          <Image
                            alt={imageAlt}
                            src={imageSrc}
                            fill
                            className="rounded-xl object-cover"
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 640px) min(60vw, 320px),
           (max-width: 1024px) 360px,
           400px"
                            quality={60}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 text-center">
              <LogosFlex className="mx-auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
