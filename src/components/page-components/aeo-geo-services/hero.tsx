import { LogoGrid, LogoMarquee } from '@/components/media/logo-strip'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  description: string
  primaryCTA: { text: string; href: string }
  guide: { badge: string; title: string; href: string; imageSrc: string }
}

// AEO & GEO page hero. Unlike the shared service header, the free guide sits
// beside the copy, the primary CTA uses a bright accent so it stands out on
// the brand gradient, and the client logo strip lives inside the hero (as on
// the homepage) so there is no seam between the hero and the next section.
const Hero = ({
  title,
  description,
  primaryCTA,
  guide,
}: HeroProps) => {
  return (
    <section className="bg-gradient-brand pt-12 pb-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-16">
          <div>
            <span className="text-primary ring-primary-40 mr-3 rounded-full bg-white px-3 py-1 text-sm font-semibold ring-1 ring-inset">
              <Link href={guide.href}>{guide.badge}</Link>
            </span>
            <Link href={guide.href} className="inline-flex">
              <span className="text-sm text-white">{guide.title}</span>
            </Link>
            {/* Sized so the title sits on two lines on desktop */}
            <h1 className="font-code sm:header-light mt-6 mb-2 pb-4 text-3xl leading-tight font-semibold text-white">
              {/* Break after "for" on desktop so the two lines read naturally */}
              {title.includes(' for ') ? (
                <>
                  {title.slice(0, title.indexOf(' for ') + 4)}
                  <br className="hidden lg:block" />{' '}
                  {title.slice(title.indexOf(' for ') + 5)}
                </>
              ) : (
                title
              )}
            </h1>
            <p className="sm:paragraph-light text-base text-gray-100">
              {description}
            </p>
            <div className="mt-10">
              {/* Plain anchor: jumps to the booking section on this page */}
              <a
                href={primaryCTA.href}
                className="inline-block rounded-md bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:text-lg"
              >
                {primaryCTA.text}
              </a>
            </div>
          </div>

          <Link
            href={guide.href}
            // Compact row with a thumbnail on mobile, full cover card on desktop
            className="group flex w-full items-center gap-4 rounded-3xl bg-white/10 p-3 ring-1 ring-white/20 transition hover:bg-white/15 lg:mx-auto lg:block lg:max-w-sm lg:rounded-4xl"
          >
            <div className="w-24 shrink-0 overflow-hidden rounded-2xl bg-white sm:w-28 lg:w-auto lg:rounded-3xl">
              <Image
                src={guide.imageSrc}
                alt={`${guide.title} preview`}
                width={680}
                height={680}
                priority
                className="w-full transition group-hover:scale-[1.02]"
              />
            </div>
            <div className="min-w-0 lg:px-3 lg:pt-4 lg:pb-2">
              <p className="text-sm font-semibold tracking-wide text-amber-300 uppercase">
                {guide.badge}
              </p>
              <p className="font-code mt-1 text-base font-semibold text-white lg:text-lg">
                {guide.title}
              </p>
              <p className="mt-2 text-sm font-semibold text-white group-hover:text-gray-200">
                Download the guide <span aria-hidden="true">→</span>
              </p>
            </div>
          </Link>
        </div>

        {/* Same logos as the homepage strip, with a plain-text label that also
            shows on mobile */}
        <div className="mt-8 sm:mt-10">
          <p className="text-sm font-medium text-white sm:text-base">
            Trusted by 100+ tech companies
          </p>
          <LogoGrid className="mt-4" />
          <LogoMarquee className="mt-4" />
        </div>
      </div>
    </section>
  )
}

export default Hero
