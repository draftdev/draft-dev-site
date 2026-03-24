'use client'

import Image from 'next/image'
import { useState } from 'react'

function getYouTubeId(src: string): string | null {
  const match = src.match(/\/embed\/([^/?]+)/)
  return match ? match[1] : null
}

interface YouTubeEmbedProps {
  src: string
  allow?: string
  allowFullScreen?: boolean
}

export default function YouTubeEmbed({
  src,
  allow,
  allowFullScreen,
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false)
  const videoId = getYouTubeId(src)

  if (!videoId || playing) {
    const autoplaySrc = videoId
      ? `${src}${src.includes('?') ? '&' : '?'}autoplay=1`
      : src
    return (
      <iframe
        src={autoplaySrc}
        allow={
          allow ??
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        }
        allowFullScreen={allowFullScreen}
        frameBorder="0"
        className="h-full w-full"
      />
    )
  }

  return (
    <button
      className="relative h-full w-full cursor-pointer"
      onClick={() => setPlaying(true)}
      aria-label="Play video"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt="Video thumbnail"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 672px, 700px"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform hover:scale-110">
          <svg
            className="ml-1 h-8 w-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  )
}
