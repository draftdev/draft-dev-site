'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface BannerProps {
  text: string
  link: string
}

let bannerStateForSession = true

const Banner: React.FC<BannerProps> = ({ text, link }) => {
  const [isVisible, setIsVisible] = useState(bannerStateForSession)

  useEffect(() => {
    bannerStateForSession = isVisible

    if (isVisible) {
      document.body.setAttribute('data-banner', 'visible')
    } else {
      document.body.removeAttribute('data-banner')
    }

    window.dispatchEvent(
      new CustomEvent('bannerVisibilityChange', {
        detail: { isVisible },
      }),
    )
  }, [isVisible])

  if (!isVisible) {
    return null
  }

  return (
    <div className="banner-container">
      <div className="flex items-center gap-x-6 bg-primary px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-white sm:text-base">
          <Link href={link} className="flex items-center">
            <strong className="font-semibold">{text} </strong>
            <span aria-hidden="true" className="ml-1">
              &rarr;
            </span>
          </Link>
        </p>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            onClick={() => setIsVisible(false)}
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
