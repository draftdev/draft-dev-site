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
  const [isDesktop, setIsDesktop] = useState(false)

  // Check if viewport is desktop size
  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)

    return () => {
      window.removeEventListener('resize', checkViewport)
    }
  }, [])

  // Update CSS variable and fire custom event
  useEffect(() => {
    const updateBannerHeight = () => {
      const banner = document.querySelector('.banner-container')
      if (banner && isVisible && isDesktop) {
        const height = banner.getBoundingClientRect().height
        document.documentElement.style.setProperty(
          '--banner-height',
          `${height}px`,
        )
      } else {
        document.documentElement.style.setProperty('--banner-height', '0px')
      }
    }

    updateBannerHeight()
    window.addEventListener('resize', updateBannerHeight)

    if (isVisible && isDesktop) {
      document.body.setAttribute('data-banner', 'visible')
    } else {
      document.body.removeAttribute('data-banner')
    }

    const event = new CustomEvent('bannerVisibilityChange', {
      detail: { isVisible: isVisible && isDesktop },
    })
    window.dispatchEvent(event)

    return () => {
      window.removeEventListener('resize', updateBannerHeight)
    }
  }, [isVisible, isDesktop])

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsVisible(false)
  }

  // Don't render at all if mobile or dismissed
  if (!isVisible || !isDesktop) {
    return null
  }

  return (
    <div className="banner-container fixed left-0 right-0 top-0 z-50">
      <div className="relative flex items-center justify-center bg-gradient-brand px-6 py-2.5 sm:px-3.5">
        <Link
          href={link}
          className="text-sm font-semibold leading-6 text-white sm:text-base"
        >
          {text}
        </Link>
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 hover:bg-gray-500/10 sm:right-6"
          onClick={handleClose}
          aria-label="Dismiss banner"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default Banner
