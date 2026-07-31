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
        <h2 className="mb-6 hidden text-left text-sm font-medium text-white sm:text-base lg:mb-8 lg:block">
          Trusted by 100+ tech companies
        </h2>

        <LogoGrid className="mt-6 sm:mt-10" />
        <LogoMarquee className="mt-10" />
      </div>
    </section>
  )
}
