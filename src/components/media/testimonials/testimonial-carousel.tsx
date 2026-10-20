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
  // Where the face sits in the portrait (CSS object-position), so the round
  // thumbnail can zoom in on it. Defaults suit a head-and-shoulders shot.
  facePosition?: string
  // How far the round thumbnail zooms in on the face (1 = no zoom)
  faceZoom?: number
}

const INTERVAL_MS = 7000

// Centred quote with a round face thumbnail, cycling through several quotes.
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
      className="bg-gradient-brand py-10 sm:py-12"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="grid">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              aria-hidden={i !== index}
              className={`col-start-1 row-start-1 flex flex-col items-center justify-center text-center transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <blockquote>
                <p className="sm:testimonial-light subheader-mobile-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4 text-left">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-white/40 sm:h-28 sm:w-28">
                  <Image
                    alt={t.name}
                    src={t.imageSrc}
                    fill
                    sizes="224px"
                    quality={90}
                    className="object-cover"
                    style={{
                      objectPosition: t.facePosition ?? '50% 20%',
                      transformOrigin: t.facePosition ?? '50% 20%',
                      transform: `scale(${t.faceZoom ?? 1.5})`,
                    }}
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-100">
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {count > 1 && (
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="rounded-full p-2 text-white ring-1 ring-white/40 hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-current={i === index}
                  // Large tap area around a small visual dot
                  className="flex h-10 items-center px-1"
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all ${
                      i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40'
                    }`}
                  />
                </button>
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
