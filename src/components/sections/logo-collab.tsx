'use client'

import Image from 'next/image'
import { useState } from 'react'

// "Companies we collaborate with" grid below the hero: segment tabs on top,
// then a bordered checkerboard grid of client logos. The logo assets are
// white-filled (drawn for dark backgrounds), so cells render them dark via
// a brightness filter for a monochrome grid on white.

type Segment = 'enterprise' | 'midsize' | 'smb'

interface CollabLogo {
  src: string
  alt: string
  size?: string
}

const SEGMENTS: { key: Segment; label: string }[] = [
  { key: 'enterprise', label: 'Large Enterprise' },
  { key: 'midsize', label: 'Mid-Size' },
  { key: 'smb', label: 'SMB' },
]

const LOGOS: Record<Segment, CollabLogo[]> = {
  enterprise: [
    { src: '/media/logos/hp-logo.svg', alt: 'HP', size: 'h-10' },
    { src: '/media/logos/qualcomm-logo.svg', alt: 'Qualcomm', size: 'h-6' },
    { src: '/media/logos/cloudflare-logo.svg', alt: 'Cloudflare', size: 'h-9' },
    { src: '/media/logos/amadeus-logo.svg', alt: 'Amadeus' },
    { src: '/media/logos/auth0-okta-logo.svg', alt: 'Auth0 by Okta', size: 'h-9' },
    { src: '/media/logos/sinch-logo.svg', alt: 'Sinch', size: 'h-9' },
    { src: '/media/logos/wordpress-logo.svg', alt: 'WordPress VIP', size: 'h-9' },
    { src: '/media/logos/docker-logo.svg', alt: 'Docker', size: 'h-10' },
  ],
  midsize: [
    { src: '/media/logos/jetbrains-logo.svg', alt: 'JetBrains' },
    { src: '/media/logos/supabase-logo.svg', alt: 'Supabase', size: 'h-7' },
    { src: '/media/logos/red-panda-logo.svg', alt: 'Redpanda', size: 'h-7' },
    { src: '/media/logos/brightdata-logo.png', alt: 'Bright Data' },
    { src: '/media/logos/foxit-logo.svg', alt: 'Foxit', size: 'h-7' },
    {
      src: '/media/logos/name.com.svg',
      alt: 'Name.com',
      size: 'h-6',
    },
  ],
  smb: [
    { src: '/media/logos/loft-logo.svg', alt: 'Loft', size: 'h-10' },
    { src: '/media/logos/descope-logo.png', alt: 'Descope' },
    { src: '/media/logos/graphite.com.svg', alt: 'Graphite', size: 'h-7' },
    { src: '/media/logos/control-plane-logo.svg', alt: 'Control Plane', size: 'h-9' },
  ],
}

const COLS = 4

export default function LogoCollab() {
  const [segment, setSegment] = useState<Segment>('enterprise')
  const logos = LOGOS[segment]
  const rows = Math.ceil(logos.length / COLS)

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl text-gray-500 sm:text-3xl">
          Trusted by{' '}
          <span className="font-semibold text-gray-800">100+ tech companies</span>{' '}
          of all sizes.
        </h2>

        <div className="mt-8 flex justify-center">
          <div className="flex gap-10 border-b border-gray-200 px-6">
            {SEGMENTS.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setSegment(s.key)}
                className={`relative pb-3 text-base font-medium transition ${
                  segment === s.key
                    ? 'text-gray-900'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {s.label}
                {segment === s.key && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 border-y border-gray-200 sm:grid-cols-4">
          {logos.map((logo, i) => {
            const row = Math.floor(i / COLS)
            const col = i % COLS
            const checker = (row + col) % 2 === 0
            const lastRow = row === rows - 1
            const lastCol = col === COLS - 1
            return (
              <div
                key={`${segment}-${logo.alt}`}
                className={`relative flex h-32 items-center justify-center border-gray-200 ${
                  checker ? 'bg-gray-50' : 'bg-white'
                } ${lastCol ? '' : 'sm:border-r'} ${lastRow ? '' : 'border-b'}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={48}
                  className={`w-auto object-contain opacity-70 brightness-0 ${logo.size ?? 'h-8'}`}
                />
                {!lastRow && !lastCol && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-[7px] -bottom-[11px] z-10 hidden text-sm text-gray-400 select-none sm:block"
                  >
                    +
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
