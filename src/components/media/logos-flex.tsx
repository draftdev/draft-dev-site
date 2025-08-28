// components/media/logos-flex.tsx
import React from 'react'

export function LogosFlex({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  const redpanda = '/media/logos/red-panda-logo.svg'
  const sinch = '/media/logos/sinch-logo.svg'
  const amadeus = '/media/logos/amadeus-logo.svg'
  const jetbrains = '/media/logos/jetbrains-logo.svg'
  const equinix = '/media/logos/equinix-logo.svg'
  const loft = '/media/logos/loft-logo.svg'

  return (
    <section className={`lg:py-10 ${className ?? ''}`}>
      <div className="mx-auto">
        <h2 className="mb-8 text-left text-lg font-medium text-white">
          Trusted by 100+ tech companies
        </h2>

        <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 rounded-lg bg-white/5 p-8 sm:grid-cols-6">
          <img
            src={redpanda}
            alt="Redpanda"
            width={158}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-6 w-auto object-contain sm:h-8 md:h-10"
          />
          <img
            src={sinch}
            alt="Sinch"
            width={158}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-6 w-auto object-contain sm:h-8 md:h-10"
          />
          <img
            src={amadeus}
            alt="Amadeus"
            width={158}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-6 w-auto object-contain sm:h-8 md:h-10"
          />
          <img
            src={jetbrains}
            alt="JetBrains"
            width={158}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-6 w-auto object-contain sm:h-8 md:h-10"
          />
          <img
            src={equinix}
            alt="Equinix"
            width={158}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-6 w-auto object-contain sm:h-8 md:h-10"
          />
          <img
            src={loft}
            alt="Loft"
            width={158}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-6 w-auto object-contain sm:h-8 md:h-10"
          />
        </div>
      </div>
    </section>
  )
}
