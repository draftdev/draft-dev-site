import type { Data } from '@/components/global/types'
import Link from 'next/link'

interface ResourceBlockProps {
  resource: Data
}

/** Inline Calendar icon */
function CalendarIconInline({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

export const ResourceBlock = ({ resource }: ResourceBlockProps) => {
  const hasDate = !!resource.date
  const isExternal = /^https?:\/\//i.test(resource.url)

  return (
    <Link
      href={resource.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group block"
    >
      <div className="flex h-full flex-col justify-between rounded-r-lg border-l-2 bg-white/5 p-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-white transition-colors group-hover:text-gray-300">
            {resource.title}
          </h3>
          {resource.description && (
            <p className="text-sm text-gray-100">{resource.description}</p>
          )}
        </div>

        {hasDate && (
          <div className="mt-4 flex items-center space-x-2 text-xs text-gray-300">
            <CalendarIconInline />
            <time dateTime={resource.date}>
              {new Date(resource.date).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
        )}
      </div>
    </Link>
  )
}
