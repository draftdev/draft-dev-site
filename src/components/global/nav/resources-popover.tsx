'use client'

import { memo } from 'react'
import ResourcesPopoverContent from './resources-popover-content'

function ChevronDownIcon({
  className = 'h-4 w-4 ml-1',
}: {
  className?: string
}) {
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
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

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

export default memo(function ResourcesPopover({
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
        id="resources-button"
        className="flex cursor-pointer items-center px-1 pt-1 text-sm font-medium whitespace-nowrap text-gray-700 md:px-2 md:text-base lg:px-3 lg:text-base xl:px-4 xl:text-lg"
        onClick={onToggle}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        Resources
        <ChevronDownIcon />
      </button>

      {open && (
        <>
          <div
            id="resources-popover"
            role="dialog"
            aria-modal="true"
            className="fixed top-30 left-1/2 z-50 w-[90vw] max-w-4xl -translate-x-1/2 overflow-y-auto rounded-xl bg-white shadow-lg ring-1 ring-black/5 sm:w-[85vw]"
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
            <div className="max-h-[calc(100vh-10rem)] overflow-y-auto p-4 sm:p-5 lg:p-6">
              <ResourcesPopoverContent onClose={onClose} />
            </div>
          </div>
        </>
      )}
    </div>
  )
})
