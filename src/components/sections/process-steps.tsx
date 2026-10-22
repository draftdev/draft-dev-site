'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import SectionEyebrow from '@/components/ui/section-eyebrow'
import { useCanvasSetup } from '@/hooks/useCanvasSetup'

// "See Our Process" stepper in the layout of dofollow.com's "How we build
// visibility for B2B SaaS" section: eyebrow, big left-aligned headline, an
// accordion step list (active step shows its description with a dark left
// rule, inactive steps are large muted titles), and a brand-colored panel
// on the right whose mockup changes with the active step. Auto-advances;
// clicking a step selects it.

const STEPS = [
  {
    title: 'Schedule a discovery call',
    tagline: 'A 30-minute introductory call',
    description:
      "We'll learn about your company and marketing strategy. If Draft.dev is a good fit for your business, we can start the onboarding process.",
  },
  {
    title: 'Research & strategy',
    tagline: 'We get to know you and define a plan',
    description:
      'We analyze your industry, competitors, positioning, product features, target audience, and make sure to understand your brand and tone of voice, ensuring authentic output. We conduct SEO and GEO research, assess your existing content, study your existing marketing funnel, and deliver a content strategy and roadmap for your feedback.',
  },
  {
    title: 'Content production',
    tagline: 'We publish your first pieces within weeks',
    description:
      'We create strategically relevant content pieces for you. These include blog posts and tutorials, comparison pages, landing pages and onboarding content, technical product guides and use case deep-dives, thought leadership pieces, lead magnets and gated assets and more. To ensure fast turnaround times we use proven AI workflows to help draft your pieces. Each single piece is reviewed by real developers and edited by professional technical editors to ensure accuracy, clarity, and value for your audience. We can manage publication of your content via all major CMSs.',
  },
  {
    title: 'Content promotion',
    tagline: 'We help you get reach and click-throughs',
    description:
      'We help promoting your content on Reddit, LinkedIn, Twitter/X, and more. We create variations you can use for third-party syndication and assist in publishing and advertising your pieces in niche publications and newsletters that are read by your target audience.',
  },
]

const CYCLE_MS = 6000

const smoothstep = (min: number, max: number, value: number) => {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)))
  return x * x * (3 - 2 * x)
}

const hash = (x: number, y: number) => {
  const h = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
  return h - Math.floor(h)
}

// Compact dithered horizontal bars with solid label pills (funnel style).
function MiniDitherBars({ items }: { items: [string, number][] }) {
  const { canvasRef, rect, isVisible, reducedMotion } = useCanvasSetup()

  useEffect(() => {
    let req: number
    let time = 0
    const start = performance.now()
    const colors = ['#544b84', '#6a6296', '#8179a8', '#9790ba']
    const draw = () => {
      req = requestAnimationFrame(draw)
      if (!isVisible.current) return
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const { width: w, height: h } = rect.current
      if (w === 0 || h === 0) return

      time += reducedMotion ? 0 : 0.02
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, w, h)

      const prog = reducedMotion ? 1 : Math.min(1, (performance.now() - start) / 900)
      const e = 1 - Math.pow(2, -10 * prog)
      const rowH = (h - (items.length - 1) * 6) / items.length
      const cell = Math.max(2, Math.round(w / 120))

      items.forEach(([label, val], i) => {
        const barW = (val / 100) * w * e
        const yTop = i * (rowH + 6)
        const color = colors[i % colors.length]

        ctx.save()
        ctx.beginPath()
        ctx.rect(0, yTop, barW, rowH)
        ctx.clip()
        ctx.globalAlpha = 0.85
        ctx.fillStyle = color
        for (let bx = 0; bx <= Math.ceil(barW); bx += cell) {
          for (let by = Math.floor(yTop); by <= Math.ceil(yTop + rowH); by += cell) {
            const jit = hash(bx, by)
            const wave = reducedMotion ? 0 : Math.sin(bx * 0.05 + time) + Math.sin(by * 0.05 + time * 0.7)
            const mod = smoothstep(-1.5, 1.5, wave)
            const sz = cell * (0.35 + 0.35 * mod) * (0.8 + 0.4 * jit)
            ctx.fillRect(bx + (cell - sz) / 2, by + (cell - sz) / 2, sz, sz)
          }
        }
        ctx.restore()

        // solid label pill so text stays readable over the dither
        const pct = Math.round(val * e)
        ctx.globalAlpha = 1
        ctx.font = '600 11px Inter, system-ui, sans-serif'
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'left'
        const text = `${label} · ${pct}%`
        const tw = ctx.measureText(text).width
        const pillW = tw + 14
        const pillH = 20
        const pillY = yTop + (rowH - pillH) / 2
        const inside = barW > pillW + 12
        const pillX = inside ? 6 : Math.min(barW + 6, w - pillW - 2)
        ctx.beginPath()
        if (typeof ctx.roundRect === 'function') ctx.roundRect(pillX, pillY, pillW, pillH, pillH / 2)
        else ctx.rect(pillX, pillY, pillW, pillH)
        ctx.fillStyle = color
        ctx.fill()
        ctx.fillStyle = '#FFFFFF'
        ctx.fillText(text, pillX + 7, pillY + pillH / 2 + 1)
      })

      ctx.restore()
    }
    req = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(req)
  }, [canvasRef, rect, isVisible, reducedMotion, items])

  return <canvas ref={canvasRef} className="h-40 w-full" />
}

function SkeletonLine({ w }: { w: string }) {
  return <div className="h-2 rounded-full bg-gray-200" style={{ width: w }} />
}

// Minimal white mockup cards, one per step, echoing dofollow's dashboard
// card inside the colored panel.
function StepVisual({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-center gap-3">
          <Image
            src="/draft/team/Mushfiq Draft.dev.png"
            alt="Mushfiq Sarker"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Discovery call
            </p>
            <p className="text-xs text-gray-500">30 min · Google Meet</p>
          </div>
          <span className="bg-primary/10 text-primary ml-auto rounded-full px-2.5 py-1 text-xs font-semibold">
            Confirmed
          </span>
        </div>
        <div className="mt-5 space-y-3">
          <div className="dither-box h-2 rounded-full" style={{ width: '82%' }} />
          <div className="dither-box h-2 rounded-full" style={{ width: '64%' }} />
          <div className="dither-box h-2 rounded-full" style={{ width: '72%' }} />
        </div>
        <div className="mt-5 grid grid-cols-5 gap-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`h-8 rounded-md ${i === 6 ? 'bg-primary' : 'dither-box'}`}
            />
          ))}
        </div>
      </div>
    )
  }
  if (step === 1) {
    return (
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
        <p className="text-sm font-semibold text-gray-900">
          Content strategy &amp; roadmap
        </p>
        <div className="mt-4">
          <MiniDitherBars
            items={[
              ['Competitor analysis', 92],
              ['SEO / GEO research', 78],
              ['Funnel assessment', 64],
              ['Tone of voice', 55],
            ]}
          />
        </div>
        <div className="mt-5 flex gap-2">
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
            Roadmap v1
          </span>
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
            Your feedback
          </span>
        </div>
      </div>
    )
  }
  if (step === 2) {
    return (
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-900">
            Kubernetes cost monitoring at scale
          </p>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            Ready
          </span>
        </div>
        <div className="mt-4 space-y-3">
          <SkeletonLine w="100%" />
          <SkeletonLine w="88%" />
          <SkeletonLine w="94%" />
          <SkeletonLine w="60%" />
        </div>
        <div className="mt-5 rounded-lg bg-gray-50 p-3 font-mono text-xs text-gray-600">
          $ kubectl get pods -n production
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Reviewed by developers · edited · publishes in 2 days
        </div>
      </div>
    )
  }
  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
      <p className="text-sm font-semibold text-gray-900">Distribution</p>
      <div className="mt-4 space-y-3">
        {[
          ['Reddit', '“How we cut K8s costs by 40%”', '/draft/logos/community/reddit.png'],
          ['LinkedIn', 'Thought leadership variation', '/draft/logos/community/linkedin.png'],
          ['Twitter/X', 'Thread + code snippets', '/draft/logos/community/x.png'],
          ['Newsletters', 'Niche syndication picks', '/draft/logos/community/substack.png'],
        ].map(([channel, note, icon]) => (
          <div key={channel} className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={icon}
              alt={channel}
              className="h-6 w-6 shrink-0 rounded-md object-contain"
            />
            <div>
              <p className="text-xs font-semibold text-gray-800">{channel}</p>
              <p className="text-xs text-gray-500">{note}</p>
            </div>
            <span className="ml-auto text-xs font-medium text-emerald-600">
              ↗
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProcessSteps() {
  const [active, setActive] = useState(0)

  // Depending on `active` restarts the timer after a manual click, so a
  // selected step gets its full read time before auto-advancing.
  useEffect(() => {
    const t = setInterval(
      () => setActive((i) => (i + 1) % STEPS.length),
      CYCLE_MS,
    )
    return () => clearInterval(t)
  }, [active])

  return (
    <section id="how-we-work" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionEyebrow>How we work</SectionEyebrow>
        <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
          See our process
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-500">
          We plan, produce, publish, and promote your first pieces within
          weeks. Interested in what we can create for you? Check out{' '}
          <Link
            href="/technical-content-examples"
            className="text-primary font-semibold underline-offset-2 hover:underline"
          >
            content examples for 40+ different clients here
          </Link>
          .
        </p>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            {STEPS.map((step, i) => {
              const isActive = i === active
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`block w-full border-l-2 py-4 pl-6 text-left transition-colors ${
                    isActive ? 'border-gray-900' : 'border-gray-200'
                  }`}
                >
                  <span
                    className={`block text-2xl font-semibold tracking-tight transition-colors sm:text-3xl ${
                      isActive ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </span>
                  {isActive && (
                    <span
                      className="mt-3 block max-w-lg"
                      style={{ animation: 'chart-fade-up 0.4s ease-out both' }}
                    >
                      <span className="block text-base font-semibold text-gray-700">
                        {step.tagline}
                      </span>
                      <span className="mt-2 block text-base leading-relaxed text-gray-500">
                        {step.description}
                      </span>
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="bg-primary flex min-h-[460px] items-center justify-center self-start rounded-3xl p-8 sm:p-12 lg:sticky lg:top-24">
            <div
              key={active}
              style={{ animation: 'chart-fade-up 0.5s ease-out both' }}
              className="flex w-full justify-center"
            >
              <StepVisual step={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
