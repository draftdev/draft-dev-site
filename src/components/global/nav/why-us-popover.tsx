'use client'

import { memo } from 'react'
import WhyUsPopoverContent from './why-us-popover-content'

function CloseIconInline({ className = 'h-5 w-5' }: { className?: string }) {
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
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  )
}

export default memo(function WhyUsPopover({
  open,
  onToggle,
  onClose,
}: {
  open: boolean
  onToggle: () => void
  onClose: () => void
}) {
  return (
    <div className="relative">
      <button
        id="why-us-button"
        className="flex items-center px-1 pt-1 text-sm font-medium whitespace-nowrap text-gray-700 hover:bg-gray-100/80 md:px-2 md:text-base lg:px-3 lg:text-base xl:px-4 xl:text-lg"
        onClick={onToggle}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        Why Us?
      </button>

      {open && (
        <div
          id="why-us-popover"
          role="dialog"
          aria-modal="true"
          className="fixed inset-x-0 z-50 mx-auto max-h-[calc(100vh-5rem)] w-[95vw] max-w-4xl overflow-y-auto rounded-xl bg-white shadow-lg ring-1 ring-black/5 lg:w-[85vw]"
        >
          <div className="absolute top-4 right-5">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              onClick={onClose}
              aria-label="Close menu"
            >
              <CloseIconInline />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="p-6 lg:p-5">
            <WhyUsPopoverContent onClose={onClose} />
          </div>
        </div>
      )}
    </div>
  )
})
