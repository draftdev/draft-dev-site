import Image from 'next/image'

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
    <section className="lg:pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-8 hidden text-left text-lg font-medium text-white lg:block">
          Trusted by 100+ tech companies
        </h2>

        <div className="mx-auto mt-10 grid grid-cols-1 items-center gap-x-8 gap-y-10 rounded-lg bg-white/5 p-8 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-4 lg:mx-0 lg:grid-cols-6">
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
    </section>
  )
}
