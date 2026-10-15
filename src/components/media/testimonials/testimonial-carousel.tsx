'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export interface CarouselTestimonial {
  quote: string
  name: string
  role: string
  company: string
  imageSrc: string
}

const INTERVAL_MS = 7000

// Same look as the single Testimonial block, cycling through several quotes.
// Autoplay pauses on hover or keyboard focus and is off for reduced motion.
export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: CarouselTestimonial[]
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = testimonials.length

  useEffect(() => {
    if (paused || count < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, count])

  const go = (i: number) => setIndex((i + count) % count)

  return (
    <section
      className="bg-gradient-brand py-16"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-8 lg:max-w-7xl">
        <div className="grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              aria-hidden={i !== index}
              className={`col-start-1 row-start-1 grid grid-cols-1 items-center transition-opacity duration-700 lg:grid-cols-[384px_1fr] ${
                i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <div className="hidden lg:block">
                <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                  <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                    <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                      <Image
                        alt={t.name}
                        src={t.imageSrc}
                        width={400}
                        height={600}
                        className="aspect-2/3 w-full rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex lg:pl-20">
                <figure className="mx-auto flex max-w-full flex-col gap-4 max-lg:text-center">
                  <blockquote>
                    <p className="sm:testimonial-light subheader-mobile-light relative text-left">
                      "{t.quote}"
                    </p>
                  </blockquote>
                  <figcaption>
                    <p className="font-medium text-white">{t.name}</p>
                    <p className="text-gray-100">
                      {t.role}, {t.company}
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          ))}
        </div>

        {count > 1 && (
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-end">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="rounded-full p-2 text-white ring-1 ring-white/40 hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex gap-x-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-current={i === index}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="rounded-full p-2 text-white ring-1 ring-white/40 hover:bg-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
