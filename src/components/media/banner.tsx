'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface BannerProps {
  text: string
  link: string
}

const Banner: React.FC<BannerProps> = ({ text, link }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (isVisible) {
      document.body.setAttribute('data-banner', 'visible')
    } else {
      document.body.removeAttribute('data-banner')
    }

    const event = new CustomEvent('bannerVisibilityChange', {
      detail: { isVisible },
    })
    window.dispatchEvent(event)
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="banner-container fixed left-0 right-0 top-0 z-50">
      <div className="flex items-center gap-x-6 bg-gradient-brand px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-white sm:text-base">
          <Link href={link} className="flex items-center">
            <strong className="font-semibold">{text}</strong>
          </Link>
        </p>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 rounded-full p-3 transition-colors hover:bg-white/10 focus-visible:outline-offset-[-4px]"
            onClick={handleClose}
            aria-label="Dismiss banner"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
