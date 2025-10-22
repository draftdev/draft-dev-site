import { LogosFlex } from '@/components/media/logos-flex'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import heroImg from '/public/site/med-portrait/hero.webp'

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-brand">
      <main className="relative isolate py-10">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-2 sm:py-8 lg:px-8">
            <div className="mx-auto w-full lg:flex lg:items-center lg:justify-between lg:gap-12">
              {/* Left: copy */}
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
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </div>

                <h1 className="font-code mb-4 py-2 text-left text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  Content-Powered Growth Engines for Developer Tools & Platforms
                </h1>

                <p className="mt-3 max-w-[60ch] text-base text-gray-100 sm:text-lg">
                  We build technical content systems that compound and resonate with developers, search engines and LLMs. Proven AI workflows and 300+ subject matter experts ensure fast turnaround times and high quality.
                </p>

                <div className="mt-16 mb-6 flex flex-col items-start gap-y-4 pl-3 sm:mb-0 sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-0 lg:pl-0">
                  <Link
                    href="/call"
                    className="focus-visible:outline-primary mb-8 inline-block rounded-sm px-3.5 py-2.5 font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 sm:mb-0 sm:text-base"
                  >
                    Book a Discovery Call
                  </Link>
                  <Link
                    href="#casestudymain"
                    className="inline-block font-semibold text-white hover:text-gray-200 sm:text-base"
                  >
                    What our clients say <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* Right: hero image */}
              <div className="mt-10 hidden justify-center lg:flex lg:justify-start">
                <div className="inline-block shrink-0">
                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="relative aspect-[2/3] w-[256px] overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10 sm:w-[320px] lg:w-[400px]">
                        <Image
                          alt="Technical content development"
                          src={heroImg}
                          fill
                          className="rounded-xl object-cover"
                          sizes="(max-width: 1023px) 0px, 400px"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <LogosFlex />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
