import { LogoGrid, LogoMarquee } from '@/components/media/logo-strip'
import Image from 'next/image'

interface AboutHeroProps {
  title: string
  descriptionOne: string
  descriptionTwo: string
  imageSrc: string
  imageAlt: string
}

// About page hero: copy beside a framed photo, with the client logo strip
// inside the hero (as on the service pages) so there is no seam below it
const AboutHero = ({
  title,
  descriptionOne,
  descriptionTwo,
  imageSrc,
  imageAlt,
}: AboutHeroProps) => {
  return (
    <section className="bg-gradient-brand relative isolate overflow-hidden pt-12 pb-12 sm:pt-16">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          <div>
            <h1 className="font-code sm:header-light text-3xl leading-tight font-semibold text-white">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
              {descriptionOne}
            </p>
            <p className="mt-6 inline-flex items-center gap-x-3 text-lg font-semibold text-white">
              <span
                aria-hidden="true"
                className="h-0.5 w-8 rounded-full bg-amber-400"
              />
              {descriptionTwo}
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-4xl bg-white/10 p-2 shadow-2xl ring-1 ring-white/20">
              <Image
                alt={imageAlt}
                src={imageSrc}
                width={720}
                height={900}
                priority
                className="aspect-[4/5] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 sm:mt-14">
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

export default AboutHero
