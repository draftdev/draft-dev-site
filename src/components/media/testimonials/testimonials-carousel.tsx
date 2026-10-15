'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { testimonials } from './testimonials-group'

const INTERVAL_MS = 6000

// Carousel version of TestimonialsGroup: the same cards, one per view on
// mobile, two on tablet and three on desktop, paging automatically.
export default function TestimonialsCarousel({
  title = '100+ Growing Clients',
  subtitle = 'What our clients are saying',
  exclude = [],
}: {
  title?: string
  subtitle?: string
  // Names already shown elsewhere on the page
  exclude?: string[]
}) {
  const items = testimonials.filter((t) => !exclude.includes(t.author.name))
  const trackRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(1)
  const [paused, setPaused] = useState(false)

  const measure = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setPages(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)))
    setPage(Math.round(el.scrollLeft / el.clientWidth))
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  const goTo = useCallback((p: number) => {
    const el = trackRef.current
    if (!el) return
    const total = Math.max(1, Math.round(el.scrollWidth / el.clientWidth))
    const next = (p + total) % total
    el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (paused || pages < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => goTo(page + 1), INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, pages, page, goTo])

  return (
    <section
      className="bg-white py-16 lg:py-24"
      id="testimonials"
      aria-roledescription="carousel"
      aria-label={title}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="subheader-mobile-gradient lg:subheader-gradient">
            {title}
          </h2>
          <p className="lg:lead-dark text-lg">{subtitle}</p>
        </div>

        <div
          ref={trackRef}
          onScroll={measure}
          className="mt-10 flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] sm:-mx-4 lg:mt-14 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((t) => (
            <div
              key={t.author.name}
              className="flex w-full shrink-0 snap-start pt-2 sm:w-1/2 sm:px-4 lg:w-1/3"
            >
              <div className="bg-gradient-brand/15 flex w-full rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                <div className="flex w-full rounded-4xl p-2 shadow-md shadow-black/5">
                  <figure className="flex w-full flex-col justify-between overflow-hidden rounded-3xl bg-gray-50 p-8 text-base shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                    <blockquote className="text-gray-900">
                      <p>{`"${t.body}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <Image
                        alt={`${t.author.name}'s profile`}
                        src={t.author.imageUrl}
                        width={100}
                        height={100}
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {t.author.name}
                        </div>
                        <div className="text-gray-600">{`@${t.author.company}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>

        {pages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              className="text-primary ring-primary-40 rounded-full p-2 ring-1 hover:bg-gray-50"
              aria-label="Previous testimonials"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex gap-x-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show testimonials page ${i + 1}`}
                  aria-current={i === page}
                  className={`h-2.5 rounded-full transition-all ${
                    i === page ? 'bg-primary w-8' : 'bg-primary-20 w-2.5'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              className="text-primary ring-primary-40 rounded-full p-2 ring-1 hover:bg-gray-50"
              aria-label="Next testimonials"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
