'use client'

import Link from 'next/link'
import React, { useState } from 'react'

interface BannerProps {
  text: string
  link: string
}

/** Inline Close (X) icon */
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

const Banner: React.FC<BannerProps> = ({ text, link }) => {
  const [open, setOpen] = useState(true)
  if (!open) return null

  const isExternal = /^https?:\/\//i.test(link)

  return (
    <div className="banner-container w-full">
      <div className="bg-gradient-brand relative flex items-center justify-center px-6 py-2.5 sm:px-3.5">
        <Link
          href={link}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-sm leading-6 font-semibold text-white sm:text-base"
        >
          {text}
        </Link>

        <button
          type="button"
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1.5 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:right-6"
          onClick={() => setOpen(false)}
          aria-label="Dismiss banner"
        >
          <span className="sr-only">Dismiss</span>
          <CloseIconInline />
        </button>
      </div>
    </div>
  )
}

export default Banner
