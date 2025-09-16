// src/components/page-components/mega-guide/Tag.tsx
import clsx from 'clsx'

const variantStyles = {
  small: '',
  medium: 'rounded px-1.5 ring-1 ring-inset',
} as const

const colorStyles = {
  emerald: {
    small: 'text-[color:var(--color-primary)]',
    medium:
      'ring-[color:var(--color-primary-40)] bg-[color:var(--color-primary-20)]/20 text-[color:var(--color-primary)]',
  },
  zinc: {
    small: 'text-gray-500',
    medium: 'ring-gray-200 bg-gray-50 text-gray-600',
  },
  amber: {
    small: 'text-amber-600',
    medium: 'ring-amber-200 bg-amber-50 text-amber-600',
  },
  sky: {
    small: 'text-sky-600',
    medium: 'ring-sky-200 bg-sky-50 text-sky-600',
  },
  rose: {
    small: 'text-rose-600',
    medium: 'ring-rose-200 bg-rose-50 text-rose-600',
  },
} as const

const valueColorMap = {
  GET: 'emerald',
  POST: 'sky',
  PUT: 'amber',
  DELETE: 'rose',
} as const

export function Tag({
  children,
  variant = 'medium',
  color = (valueColorMap as any)[children] ?? 'emerald',
}: {
  children: any
  variant?: keyof typeof variantStyles
  color?: keyof typeof colorStyles
}) {
  return (
    <span
      className={clsx(
        'font-mono text-[0.625rem]/6 font-semibold',
        variantStyles[variant],
        colorStyles[color][variant],
      )}
    >
      {children}
    </span>
  )
}
