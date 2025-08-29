import clsx from 'clsx'
import React from 'react'

type Props = React.ComponentPropsWithoutRef<'section'>

export function LogosFlex({ className, ...rest }: Props) {
  const logos = [
    { src: '/media/logos/red-panda-logo.svg', alt: 'Redpanda' },
    { src: '/media/logos/sinch-logo.svg', alt: 'Sinch' },
    { src: '/media/logos/amadeus-logo.svg', alt: 'Amadeus' },
    { src: '/media/logos/jetbrains-logo.svg', alt: 'JetBrains' },
    { src: '/media/logos/equinix-logo.svg', alt: 'Equinix' },
    { src: '/media/logos/loft-logo.svg', alt: 'Loft' },
  ]

  return (
    <section
      className={clsx('lg:pt-16', className)}
      aria-label="Trusted by 100+ tech companies"
      {...rest}
    >
      <div className="mx-auto px-4 sm:px-6">
        <h2 className="mb-6 hidden text-left text-sm font-medium text-white sm:text-base lg:mb-8 lg:block">
          Trusted by 100+ tech companies
        </h2>

        <div className="mx-auto mt-6 grid grid-cols-3 items-center gap-x-6 gap-y-6 rounded-lg bg-white/5 p-4 sm:mt-10 sm:grid-cols-6 sm:gap-x-8 sm:gap-y-8 sm:p-6 lg:p-8">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 w-auto object-contain sm:h-8 md:h-10"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
