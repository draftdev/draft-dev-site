import clsx from 'clsx'
import React from 'react'
import { LogoGrid, LogoMarquee } from './logo-strip'

type Props = React.ComponentPropsWithoutRef<'section'>

export function LogosFlex({ className, ...rest }: Props) {
  return (
    <section
      className={clsx('lg:pt-2', className)}
      aria-label="Trusted by 100+ tech companies"
      {...rest}
    >
      <div className="mx-auto">
        {/* Small centred caption instead of a divider line */}
        <p className="font-code text-center text-xs font-semibold tracking-[0.2em] text-white/70 uppercase sm:text-sm">
          Trusted by 100+ tech companies
        </p>

        <LogoGrid className="mt-5 sm:mt-6" />
        <LogoMarquee className="mt-5" />
      </div>
    </section>
  )
}
