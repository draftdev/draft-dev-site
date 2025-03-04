import { clsx } from 'clsx'
import Image from 'next/image'

export function LogosFlex({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  const redpanda = '/media/logos/redpanda_logo_draft_dev.svg'
  const rewind = '/media/logos/rewind_logo_draft_dev.svg'
  const earthly = '/media/logos/earthly_logo_draft_dev.svg'
  const tailscale = '/media/logos/tailscale_logo_draft_dev.svg'
  const saucelabs = '/media/logos/saucelabs_logo_draft_dev.svg'
  const foxit = '/media/logos/foxit_logo_draft_dev.svg'
  const containiq = '/media/logos/containiq_logo_draft_dev.svg'

  return (
    <div className="text-white">
      <div className="lg:mb-5">
        <h3 className="subheader-mobile-light text-base font-semibold sm:pb-3 sm:text-left">
          Trusted by 100+ tech companies
        </h3>
      </div>
      <div className="rounded-lg px-4 py-8 sm:bg-white/5">
        <div
          className={clsx(
            className,
            'grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7',
            'items-center justify-items-center',
          )}
        >
          <Image
            alt="Red Panda logo"
            src={redpanda}
            className="lg:h-18 h-14"
            width={200}
            height={50}
            priority={true}
            loading="eager"
          />
          <Image
            alt="Tailscale logo"
            src={tailscale}
            width={200}
            height={50}
            className="lg:h-18 h-14"
            priority={true}
            loading="eager"
          />
          <Image
            alt="Earthly logo"
            src={earthly}
            width={200}
            height={50}
            className="lg:h-18 h-14"
            priority={true}
            loading="eager"
          />
          <Image
            alt="Foxit logo"
            src={foxit}
            width={200}
            height={50}
            className="lg:h-18 h-14"
            priority={true}
            loading="eager"
          />
          <Image
            alt="Rewind logo"
            src={rewind}
            width={200}
            height={50}
            className="lg:h-18 h-14"
          />
          <Image
            alt="Saucelabs logo"
            src={saucelabs}
            width={200}
            height={50}
            className="lg:h-18 h-14"
          />
          <Image
            alt="ContainIQ logo"
            src={containiq}
            width={200}
            height={50}
            className="lg:h-18 h-14"
          />
        </div>
      </div>
    </div>
  )
}
