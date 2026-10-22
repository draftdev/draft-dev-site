'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Animated "audience" cursor that tours the hero's AI-platform tiles,
// clicking each one and surfacing the kind of question developers ask
// there — same device as gushwork.ai's "Your Buyer" cursor, rebuilt with
// our brand tiles. Runs only on lg+ (the tiles are hidden below that) and
// stays static when the visitor prefers reduced motion.

interface TourStop {
  src: string
  alt: string
  question: string
  // Positioning classes for the outer anchor (matches the old IconTile spots).
  position: string
  // Resting tilt of the tile itself, in degrees.
  baseTilt: number
  // Extra tilt applied while the cursor "holds" the tile after clicking.
  hoverTilt: number
  // Tiles sitting directly under the hero stats row show their bubble
  // below instead, so it never collides with the stat labels.
  bubbleBelow?: boolean
  // White-filled logos (drawn for the dark hero) are forced to black so
  // they stay visible on the white query bubble.
  bubbleIconDark?: boolean
}

// Google reads like a search query; the LLM tiles read like prompts typed
// into that assistant, each bubble led by the platform's own logo.
const STOPS: TourStop[] = [
  {
    src: '/draft/logos/google-color.svg',
    alt: 'Google',
    question: 'best CI/CD tools 2026',
    position: 'top-[52%] left-[10%]',
    baseTilt: -6,
    hoverTilt: 3,
  },
  {
    src: '/draft/logos/openai.svg',
    alt: 'ChatGPT',
    question: 'which vector DB should I use in 2026?',
    position: 'top-[74%] left-[24%]',
    baseTilt: 3,
    hoverTilt: -3,
    bubbleBelow: true,
    bubbleIconDark: true,
  },
  {
    src: '/draft/logos/claude-color.svg',
    alt: 'Claude',
    question: 'compare the top auth providers for my app',
    position: 'top-[86%] left-1/2 -translate-x-1/2',
    baseTilt: 2,
    hoverTilt: -3,
  },
  {
    src: '/draft/logos/gemini-color.svg',
    alt: 'Google Gemini',
    question: 'recommend k8s monitoring tools for 2026',
    position: 'top-[74%] right-[24%]',
    baseTilt: -3,
    hoverTilt: 3,
    bubbleBelow: true,
  },
  {
    src: '/draft/logos/grok.svg',
    alt: 'Grok',
    question: "what's the best API gateway right now?",
    position: 'top-[52%] right-[10%]',
    baseTilt: 6,
    hoverTilt: -3,
    bubbleIconDark: true,
  },
]

const TRAVEL_MS = 1100
const PRESS_MS = 180
const DWELL_MS = 2000

type Phase = 'travel' | 'press' | 'hover'

export default function HeroLogoTour() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const tileRefs = useRef<(HTMLDivElement | null)[]>([])
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [snap, setSnap] = useState(true)
  const [active, setActive] = useState(-1)
  const [phase, setPhase] = useState<Phase>('travel')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let timer: ReturnType<typeof setTimeout>
    let raf: number

    const step = (i: number) => {
      const wrap = wrapRef.current
      const tile = tileRefs.current[i]
      if (!wrap || !tile) return
      // Below lg the tiles are display:none; idle until the viewport grows.
      if (tile.offsetWidth === 0) {
        setActive(-1)
        timer = setTimeout(() => step(i), 1000)
        return
      }
      const wr = wrap.getBoundingClientRect()
      const tr = tile.getBoundingClientRect()
      // Land the cursor tip a touch right/below the logo's center, like a
      // real click.
      setPos({
        x: tr.left - wr.left + tr.width * 0.58,
        y: tr.top - wr.top + tr.height * 0.62,
      })
      setActive(-1)
      setPhase('travel')
      timer = setTimeout(() => {
        setActive(i)
        setPhase('press')
        timer = setTimeout(() => {
          setPhase('hover')
          timer = setTimeout(() => step((i + 1) % STOPS.length), DWELL_MS)
        }, PRESS_MS)
      }, TRAVEL_MS)
    }

    // Snap (no transition) to a start point mid-hero, then begin gliding.
    const wrap = wrapRef.current
    if (wrap) {
      const wr = wrap.getBoundingClientRect()
      setPos({ x: wr.width * 0.5, y: wr.height * 0.45 })
    }
    raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => {
        setSnap(false)
        step(0)
      })
    })

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {STOPS.map((stop, i) => {
        const isActive = i === active
        const pressed = isActive && phase === 'press'
        const held = isActive && phase === 'hover'
        return (
          <div key={stop.alt} className={`absolute ${stop.position}`}>
            <div
              ref={(el) => {
                tileRefs.current[i] = el
              }}
              className="flex h-20 w-20 items-center justify-center rounded-[13px]"
              // Same structure as dofollow's baked-in tile PNG (flat vertical
              // gradient, no border/shadow/blur), re-tinted to the #544b84
              // hero hue; press/hold states layer on top of the resting tilt.
              style={{
                background:
                  'linear-gradient(to bottom, rgba(163, 156, 212, 0.2), rgba(30, 26, 58, 0.1))',
                transform: pressed
                  ? `rotate(${stop.baseTilt}deg) scale(0.92)`
                  : held
                    ? `rotate(${stop.baseTilt + stop.hoverTilt}deg) scale(1.06)`
                    : `rotate(${stop.baseTilt}deg)`,
                boxShadow: held
                  ? '0 16px 32px -12px rgba(20, 15, 45, 0.55)'
                  : 'none',
                transition:
                  'transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 350ms',
              }}
            >
              <Image
                src={stop.src}
                alt={stop.alt}
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </div>

            {/* The question this audience asks on that platform, popping in
                above the tile once the cursor clicks it. */}
            <div
              className={`absolute left-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white py-1.5 pr-3.5 pl-2.5 text-xs font-medium text-primary shadow-lg ${
                stop.bubbleBelow ? '-bottom-11' : '-top-11'
              }`}
              style={{
                transform: `translateX(-50%) ${held ? 'translateY(0) scale(1)' : `translateY(${stop.bubbleBelow ? '-8px' : '8px'}) scale(0.8)`}`,
                opacity: held ? 1 : 0,
                transition:
                  'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 250ms',
              }}
            >
              <Image
                src={stop.src}
                alt=""
                width={16}
                height={16}
                className={`h-4 w-4 shrink-0 ${stop.bubbleIconDark ? 'brightness-0' : ''}`}
              />
              {stop.question}
            </div>
          </div>
        )
      })}

      {/* The touring cursor: arrow tip sits at the translate point, with the
          audience label pinned to its bottom-right like gushwork's buyer tag. */}
      <div
        className="absolute top-0 left-0 z-10"
        style={{
          transform: pos ? `translate(${pos.x}px, ${pos.y}px)` : undefined,
          opacity: pos && !snap ? 1 : 0,
          transition: snap
            ? 'opacity 400ms'
            : `transform ${TRAVEL_MS}ms cubic-bezier(0.45, 0.05, 0.25, 1), opacity 400ms`,
          willChange: 'transform',
        }}
      >
        {/* Arrow while traveling, hand once it lands on a tile — the two
            crossfade in place, and both squeeze on the click press. */}
        <div
          className="relative h-6 w-6"
          style={{
            transform: phase === 'press' ? 'scale(0.85)' : 'scale(1)',
            transition: 'transform 150ms',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="absolute inset-0 h-6 w-6"
            style={{
              opacity: active === -1 ? 1 : 0,
              transition: 'opacity 150ms',
            }}
            aria-hidden="true"
          >
            <path
              d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L6.35 2.85a.5.5 0 0 0-.85.36Z"
              fill="#fff"
              stroke="#1e1a3a"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className="absolute inset-0 h-6 w-6"
            style={{
              opacity: active === -1 ? 0 : 1,
              transition: 'opacity 150ms',
              // Keep the pointing fingertip on the same hotspot the arrow
              // tip lands on (the wrapper's top-left translate point).
              transform: 'translate(-8px, -2px)',
            }}
            aria-hidden="true"
          >
            {/* Pointing-hand cursor: index finger up, three curled fingers. */}
            <path
              d="M9.2 2.6c-.9 0-1.6.72-1.6 1.6v8.03l-1.53-1.27c-.75-.62-1.85-.55-2.5.17-.62.68-.6 1.72.05 2.37l4.6 4.66c.85.86 2 1.34 3.2 1.34h2.83c2.47 0 4.45-2 4.45-4.46v-3.79c0-.83-.67-1.5-1.5-1.5-.28 0-.55.08-.77.22-.15-.7-.76-1.22-1.5-1.22-.36 0-.7.13-.96.34-.22-.6-.8-1.04-1.47-1.04-.31 0-.6.1-.85.25V4.2c0-.88-.72-1.6-1.6-1.6Z"
              fill="#fff"
              stroke="#1e1a3a"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="absolute top-5 left-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium whitespace-nowrap text-white shadow-md">
          Your Audience
        </span>
      </div>
    </div>
  )
}
