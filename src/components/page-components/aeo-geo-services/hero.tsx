import { LogosFlex } from '@/components/media/logos-flex'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  description: string
  primaryCTA: { text: string; href: string }
  secondaryCTA: { text: string; href: string }
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
  secondaryCTA,
  guide,
}: HeroProps) => {
  return (
    <section className="bg-gradient-brand pt-12 pb-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <div>
            <span className="text-primary ring-primary-40 mr-3 rounded-full bg-white px-3 py-1 text-sm font-semibold ring-1 ring-inset">
              <Link href={guide.href}>{guide.badge}</Link>
            </span>
            <Link href={guide.href} className="inline-flex">
              <span className="text-sm text-white">{guide.title}</span>
            </Link>
            <h1 className="sm:header-light font-code mt-6 pb-4 text-3xl font-semibold text-white">
              {title}
            </h1>
            <p className="sm:paragraph-light text-base text-gray-100">
              {description}
            </p>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Link
                href={primaryCTA.href}
                className="rounded-md bg-amber-400 px-6 py-3.5 text-base font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:text-lg"
              >
                {primaryCTA.text}
              </Link>
              <Link
                href={secondaryCTA.href}
                className="text-base font-semibold text-white hover:text-gray-200"
              >
                {secondaryCTA.text} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <Link
            href={guide.href}
            className="group mx-auto block w-full max-w-sm rounded-4xl bg-white/10 p-3 ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <div className="overflow-hidden rounded-3xl bg-white">
              <Image
                src={guide.imageSrc}
                alt={`${guide.title} preview`}
                width={680}
                height={680}
                priority
                className="w-full transition group-hover:scale-[1.02]"
              />
            </div>
            <div className="px-3 pt-4 pb-2">
              <p className="text-sm font-semibold tracking-wide text-amber-300 uppercase">
                {guide.badge}
              </p>
              <p className="font-code mt-1 text-lg font-semibold text-white">
                {guide.title}
              </p>
              <p className="mt-2 text-sm font-semibold text-white group-hover:text-gray-200">
                Download the guide <span aria-hidden="true">→</span>
              </p>
            </div>
          </Link>
        </div>

        <LogosFlex className="mt-16" />
      </div>
    </section>
  )
}

export default Hero
