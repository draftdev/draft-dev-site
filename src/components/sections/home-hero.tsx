import Image from 'next/image'

import FloatingCTA from '@/components/sections/floating-cta'
import HeroLogoTour from '@/components/sections/hero-logo-tour'
import { GlassButton } from '@/components/ui/glass-button'

// Shared between the hero CTA and its floating bottom clone, mirroring the
// avatar + label + arrow structure of gushwork.ai's booking pill.
function DiscoveryCallContent() {
  return (
    <>
      <Image
        src="/draft/team/Mushfiq Draft.dev.png"
        alt="Mushfiq Sarker"
        width={36}
        height={36}
        className="h-9 w-9 rounded-full object-cover"
      />
      <span>Book a Discovery Call</span>
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </>
  )
}

// Gushwork-style proof point under the hero CTA: filled check badge + stat.
function HeroStat({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0 text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path
          d="M8.5 12.5l2.3 2.3 4.7-5"
          fill="none"
          stroke="#544b84"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-sm font-medium whitespace-nowrap text-white/90">
        {label}
      </span>
    </div>
  )
}

const HomeHero: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#544b84]"
      // Same treatment as the reference site: one oversized SVG of dashed
      // rays, centered and pinned to the section top at its natural size.
      style={{
        backgroundImage: "url('/draft/pattern-bg.svg')",
        backgroundPosition: '50% 0',
        backgroundRepeat: 'no-repeat',
        // The SVG's rays fade out ~650px down at natural size (1123px tall);
        // scale it up uniformly so the visible dot band reaches the hero's
        // bottom edge now that the section is taller.
        backgroundSize: 'auto 1350px',
      }}
    >
      {/* The rays all share one dash phase, so near the vanishing point they
          align into concentric arcs. Fade the top of the pattern into the
          background so that region stays clean, like the reference site. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[55%]"
        style={{
          background:
            'linear-gradient(to bottom, #544b84 0%, #544b84 30%, rgba(84, 75, 132, 0) 100%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-40 lg:px-8 lg:pb-56">
        <HeroLogoTour />

        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Content-powered growth marketing for developer tools &amp;
            platforms
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            We build technical content engines that compound and resonate with
            developers, search engines and LLMs. Proven AI workflows and 300+
            subject matter experts ensure fast turnaround times and high
            quality.
          </p>

          <div id="hero-cta" className="mt-10 flex items-center justify-center">
            <GlassButton
              href="/call"
              size="lg"
              contentClassName="flex items-center gap-3"
            >
              <DiscoveryCallContent />
            </GlassButton>
          </div>

          {/* Four checkpoints need more than the max-w-3xl text column, so
              the row bleeds out with negative margins on larger screens. */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:-mx-16 sm:flex-row sm:flex-wrap sm:gap-6 lg:-mx-28">
            <HeroStat label="Custom Strategy (Google + AI)" />
            <HeroStat label="300+ Technical SMEs" />
            <HeroStat label="3,000+ Content Pieces Published" />
            <HeroStat label="100% Technical Audience" />
          </div>

          <FloatingCTA watchId="hero-cta">
            <GlassButton
              href="/call"
              contentClassName="flex items-center gap-3"
            >
              <DiscoveryCallContent />
            </GlassButton>
          </FloatingCTA>
        </div>

      </div>
    </section>
  )
}

export default HomeHero
