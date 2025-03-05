import { clsx } from 'clsx'
import Image from 'next/image'

export function LogosDark({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  const redpanda = '/media/logos/red-panda-logo.svg'
  const sinch = '/media/logos/sinch-logo.svg'
  const amadeus = '/media/logos/amadeus-logo.svg'
  const jetbrains = '/media/logos/jetbrains-logo.svg'
  const equinix = '/media/logos/equinix-logo.svg'
  const loft = '/media/logos/loft-logo.svg'

  return (
    <div className="bg-gradient-brand py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h3 className="subheader-mobile-light pb-3 text-center text-base font-semibold sm:pb-0 sm:text-left sm:text-base">
            Trusted by 100+ tech companies
          </h3>
        </div>
        <div className="rounded-lg px-4 py-8 sm:bg-white/5">
          <div
            className={clsx(
              className,
              'grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
              'items-center justify-items-center',
            )}
          >
            <Image
              className="max-h-10 w-full object-contain"
              src={redpanda}
              alt="Redpanda"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 w-full object-contain"
              src={sinch}
              alt="Sinch"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 w-full object-contain"
              src={amadeus}
              alt="Amadeus"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 w-full object-contain"
              src={jetbrains}
              alt="JetBrains"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 w-full object-contain"
              src={equinix}
              alt="Equinix"
              width={158}
              height={48}
            />
            <Image
              className="max-h-10 w-full object-contain"
              src={loft}
              alt="Loft"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
