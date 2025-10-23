import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

type Props = React.ComponentPropsWithoutRef<'section'>

export function LogosFlex({ className, ...rest }: Props) {
  const logos = [
    { src: '/media/logos/docker-logo.svg', alt: 'Docker' },
    { src: '/media/logos/jetbrains-logo.svg', alt: 'JetBrains' },
    { src: '/media/logos/sinch-logo.svg', alt: 'Sinch' },
    { src: '/media/logos/red-panda-logo.svg', alt: 'Redpanda' },
    { src: '/media/logos/amadeus-logo.svg', alt: 'Amadeus' },
    { src: '/media/logos/loft-logo.svg', alt: 'Loft' },
    { src: '/media/logos/brightdata-logo.png', alt: 'brightdata' },
    { src: '/media/logos/descope-logo.png', alt: 'descope' },
  ]

  return (
    <section
      className={clsx('lg:pt-2', className)}
      aria-label="Trusted by 100+ tech companies"
      {...rest}
    >
      <div className="mx-auto">
        <h2 className="mb-6 hidden text-left text-sm font-medium text-white sm:text-base lg:mb-8 lg:block">
          Trusted by 100+ tech companies
        </h2>

        <div className="mx-auto mt-6 grid grid-cols-1 items-center gap-x-6 gap-y-6 rounded-lg bg-white/5 p-4 sm:mt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:p-6 md:grid-cols-3 lg:grid-cols-8 lg:p-8">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                height={100}
                width={100}
                className="h-6 w-auto object-contain sm:h-8 md:h-10"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
