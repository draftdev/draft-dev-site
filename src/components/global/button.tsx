import { Button as HeadlessButton } from '@headlessui/react'
import { clsx } from 'clsx'
import * as React from 'react'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)]',
    'rounded-sm border border-transparent bg-gray-100 shadow-md',
    'text-base font-medium whitespace-nowrap',
    'data-[disabled]:bg-gray-300 data-[disabled]:opacity-40 data-[hover]:bg-gray-300',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)]',
    'rounded-sm border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'text-base font-medium whitespace-nowrap',
    'data-[disabled]:bg-white/15 data-[disabled]:opacity-40 data-[hover]:bg-white/20',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(theme(spacing.[1.5])-1px)]',
    'border-transparent',
    'text-md font-medium whitespace-nowrap',
    'data-[disabled]:bg-transparent data-[disabled]:opacity-40 data-[hover]:text-gray-400',
  ),
}

const toneClasses = {
  light: 'text-white',
  dark: 'text-gray-600',
}

// Separate the common props
type CommonButtonProps = {
  variant?: keyof typeof variants
  colorMode?: 'light' | 'dark'
  className?: string
}

// Define the props for Headless Button
type HeadlessButtonProps = CommonButtonProps &
  Omit<React.ComponentPropsWithoutRef<typeof HeadlessButton>, 'as'> & {
    href?: undefined
  }

type LinkButtonProps = CommonButtonProps &
  React.ComponentPropsWithoutRef<typeof Link>

type ButtonProps = HeadlessButtonProps | LinkButtonProps

export function Button({
  variant = 'primary',
  colorMode = 'dark',
  className,
  ...props
}: ButtonProps) {
  const combinedClassName = clsx(
    variants[variant],
    toneClasses[colorMode],
    className,
  )

  if (typeof (props as LinkButtonProps).href === 'undefined') {
    const buttonProps = props as HeadlessButtonProps
    return <HeadlessButton {...buttonProps} className={combinedClassName} />
  }

  const linkProps = props as LinkButtonProps
  return <Link {...linkProps} className={combinedClassName} />
}
