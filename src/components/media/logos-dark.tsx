import { clsx } from 'clsx'
import { LogoGrid, LogoMarquee } from './logo-strip'

export function LogosDark({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('bg-gradient-brand py-16 sm:py-24', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h3 className="subheader-mobile-light pb-3 text-center text-base font-semibold sm:pb-0 sm:text-left sm:text-base">
            Trusted by 100+ tech companies
          </h3>
        </div>

        <LogoGrid className="mt-6 sm:mt-8" />
        <LogoMarquee className="mt-8" />
      </div>
    </div>
  )
}
