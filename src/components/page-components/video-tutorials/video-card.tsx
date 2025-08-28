'use client'

import Link from 'next/link'
import type { FC, ReactNode } from 'react'
import { useEffect, useState } from 'react'

interface VideoCardProps {
  title: ReactNode
  includedFeatures: string[]
  youtubeVideoId: string
  requestPricingHref: string
  requestPricingText: string
}

const VideoCard: FC<VideoCardProps> = ({
  title,
  includedFeatures,
  youtubeVideoId,
  requestPricingHref,
  requestPricingText,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    setVideoLoaded(true)
  }, [])

  return (
    <div className="bg-gradient-brand max-w-full py-10 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="">
          <div className="mx-auto text-white ring-gray-200 sm:py-6 lg:mx-0 lg:flex">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="subheader-light">{title}</h3>
              <div className="my-10 flex items-center gap-x-8">
                <h4 className="flex-none px-6 py-1 text-lg font-semibold ring-2 ring-white">
                  Check out a sample video & explore everything that is
                  included:
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="text-md mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="-mt-2 p-2 lg:mt-0 lg:flex lg:w-full lg:max-w-md lg:shrink-0 lg:flex-col lg:justify-center">
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 shadow-lg ring-1 ring-white/20 ring-inset">
                <div className="w-full overflow-hidden rounded-t-xl">
                  {videoLoaded && (
                    <iframe
                      width="100%"
                      height="250"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&rel=0&vq=hd1080&audio=1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>

                <div className="w-full">
                  <Link
                    href={requestPricingHref}
                    className="block w-full rounded-b-md bg-white px-3 py-2 text-center text-base font-semibold text-gray-800 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {requestPricingText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
