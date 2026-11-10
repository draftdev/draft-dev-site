import HeroVideoPlayer from '@/components/global/hero-video-player'
import { LogosFlex } from '@/components/media/logos-flex'
import Link from 'next/link'

const guide = {
  badge: 'New eBook',
  title: 'How to Set Up a Content Marketing Engine in the Age of AI',
  href: '/content-marketing-engine',
}

// Homepage hero: GTM message and CTAs beside the overview video,
// with the client logos inside the hero so there's no seam below it
const Hero = () => {
  return (
    <section className="bg-gradient-brand relative isolate overflow-hidden pt-12 pb-16 sm:pt-16">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
          <div>
            <Link href={guide.href} className="group inline-flex items-center">
              <span className="text-primary ring-primary-40 mr-3 rounded-full bg-white px-3 py-1 text-sm font-semibold ring-1 ring-inset">
                {guide.badge}
              </span>
              <span className="text-sm text-white group-hover:text-gray-200">
                {guide.title} <span aria-hidden="true">→</span>
              </span>
            </Link>
            <h1 className="font-code mt-6 text-3xl leading-tight font-semibold tracking-tight text-balance text-white sm:text-5xl xl:text-[3.25rem]">
              Go-to-Market Marketing Agency for Developer Tools &amp; Platforms
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
              We plan and run go-to-market programs for developer tools:
              strategy, content, SEO &amp; GEO, distribution and paid growth.
              Our 300+ engineers check every piece, so it holds up with
              developers, search engines and AI assistants.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/call"
                className="rounded-md bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300 sm:text-lg"
              >
                Book a Discovery Call
              </Link>
              <a
                href="#casestudymain"
                className="text-base font-semibold text-white hover:text-gray-200"
              >
                What our clients say <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-4xl bg-white/10 p-2 shadow-2xl ring-1 ring-white/20">
              <div className="overflow-hidden rounded-3xl">
                <HeroVideoPlayer
                  title="Service overview"
                  poster="/videos/poster-play.jpg"
                  mp4Src="/videos/lp_video_sm_2.mp4"
                  webmSrc=""
                  tracks={[]}
                  startAt={0}
                />
              </div>
            </div>
          </div>
        </div>
        <LogosFlex className="mt-12 border-t border-white/15 pt-8 sm:mt-14" />
      </div>
    </section>
  )
}

export default Hero
