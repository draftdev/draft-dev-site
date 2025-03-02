'use client'

import parse, { type DOMNode } from 'html-react-parser'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface BlogContentRendererProps {
  content: string
}

export default function BlogContentRenderer({
  content,
}: BlogContentRendererProps) {
  const [isClient, setIsClient] = useState(false)

  // Only render complex content on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Transform <img> tags in the post content to next/image
  const transform = (domNode: DOMNode) => {
    if (domNode.type === 'tag' && domNode.name === 'img' && domNode.attribs) {
      const { src, alt, width, height } = domNode.attribs
      if (!src) return undefined

      // Process the image URL to ensure CDN usage if needed
      let imageUrl = src
      if (src.includes('candid-cookie.flywheelsites.com')) {
        // Use a unique cache key to prevent caching issues
        const timestamp = Date.now()
        const uniqueId = Math.random().toString(36).substring(2, 10)
        imageUrl = `/api/image?url=${encodeURIComponent(
          src.trim(),
        )}&_v=${timestamp}-${uniqueId}`
      }

      return (
        <div className="my-4">
          <Image
            src={imageUrl}
            alt={alt || 'Blog image'}
            width={Number(width) || 768}
            height={Number(height) || 432}
            className="mx-auto rounded-lg object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )
    }

    // Handle iframes for videos and embeds
    if (
      domNode.type === 'tag' &&
      domNode.name === 'iframe' &&
      domNode.attribs
    ) {
      const { src, width, height } = domNode.attribs
      if (!src) return undefined

      return (
        <div className="my-4 aspect-video w-full">
          <iframe
            src={src}
            width={width || '100%'}
            height={height || '100%'}
            className="aspect-video rounded-lg"
            allowFullScreen
            loading="lazy"
          />
        </div>
      )
    }

    return undefined
  }

  // If we're on the server, render a simple loading placeholder
  if (!isClient) {
    return (
      <div className="h-64 w-full animate-pulse rounded-md bg-gray-100"></div>
    )
  }

  // On the client, render the full content with transformations
  return (
    <div className="blog-content">{parse(content, { replace: transform })}</div>
  )
}
