import { LogosFlex } from '@/components/media/logos-flex'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
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
                  <span className="mr-3 rounded-full bg-white px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary-40">
                    <Link href="/resources" className="">
                      New eBook
                    </Link>
                  </span>
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
                <h1 className="mb-6 py-4 text-left font-code text-3xl font-semibold leading-tight text-white sm:text-6xl">
                  We are a Content Creation Agency for Technical Companies
                </h1>

                <p className="sm:paragraph-light rounded-lg bg-white/5 p-5 text-lg text-gray-100 sm:bg-transparent sm:p-0">
                  Draft.dev helps Marketing and Developer Relations teams in
                  tech businesses build trust, drive awareness, and capture
                  leads.
                </p>
                <div className="mb-6 mt-16 flex flex-col items-start gap-y-4 pl-3 sm:mb-0 sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-0 lg:pl-0">
                  <Link
                    href="/call"
                    className="mb-8 inline-block rounded-sm px-3.5 py-2.5 font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mb-0 sm:text-base"
                  >
                    Book a Discovery Call
                  </Link>
                  <Link
                    href="#lead-generation-package"
                    className="inline-block font-semibold text-white hover:text-gray-200 sm:text-base"
                  >
                    See Our Lead Generation Package{' '}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="mt-14 hidden justify-end gap-8 sm:-mt-44 sm:pl-20 lg:mt-0 lg:flex lg:pl-0">
                <div className="mr-auto w-44 flex-none space-y-6 pt-16 sm:mr-0">
                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          alt="writing code"
                          height={600}
                          width={400}
                          src="/site/small-portrait/coding_draft_dev.jpg"
                          className="aspect-[2/3] w-full rounded-xl object-cover"
                          priority={true}
                          sizes="(max-width: 768px) 0px, (max-width: 1024px) 176px, 176px"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          alt="reviewing developer content"
                          height={600}
                          width={400}
                          src="/site/small-portrait/sales_draft_dev.jpg"
                          className="aspect-[2/3] w-full rounded-xl object-cover"
                          sizes="(max-width: 768px) 0px, (max-width: 1024px) 176px, 176px"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-44 flex-none space-y-6 pt-32 sm:pt-0">
                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          alt="writing developer content"
                          height={600}
                          width={400}
                          src="/site/small-portrait/laptop_draft_dev.jpg"
                          className="aspect-[2/3] w-full rounded-xl object-cover"
                          sizes="(max-width: 768px) 0px, (max-width: 1024px) 176px, 176px"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          alt="writing code on GitHub"
                          height={600}
                          width={400}
                          src="/site/small-portrait/commit_draft_dev.jpg"
                          className="aspect-[2/3] w-full rounded-xl object-cover"
                          sizes="(max-width: 768px) 0px, (max-width: 1024px) 176px, 176px"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
