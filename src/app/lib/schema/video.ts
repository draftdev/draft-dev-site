import { cache } from 'react'
import { DEFAULT_IMAGE_URL, PUBLISHER_REF } from './constants'
import { stripHtmlTags } from './utils'

export function generateVideoSchema(
  videoUrl: string,
  title: string,
  description: string,
  uploadDate?: string,
  duration?: string,
  thumbnailUrl?: string,
) {
  function getVideoId(url: string): string | null {
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(youtubeRegex)
    return match ? match[1] : null
  }

  function getVimeoId(url: string): string | null {
    const vimeoRegex =
      /vimeo\.com\/(?:channels\/|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/
    const match = url.match(vimeoRegex)
    return match ? match[3] : null
  }

  const videoId = getVideoId(videoUrl)
  const vimeoId = getVimeoId(videoUrl)

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: stripHtmlTags(description),
    uploadDate: uploadDate || new Date().toISOString(),
    publisher: PUBLISHER_REF,
    inLanguage: 'en-US',
  }

  if (videoId) {
    schema.embedUrl = `https://www.youtube.com/embed/${videoId}`
    schema.contentUrl = `https://www.youtube.com/watch?v=${videoId}`
    schema.url = videoUrl

    schema.thumbnailUrl = [
      `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    ]

    schema.thumbnail = {
      '@type': 'ImageObject',
      url: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      width: 480,
      height: 360,
    }
  } else if (vimeoId) {
    schema.embedUrl = `https://player.vimeo.com/video/${vimeoId}`
    schema.contentUrl = `https://vimeo.com/${vimeoId}`
    schema.url = videoUrl

    schema.thumbnailUrl = thumbnailUrl || `https://vumbnail.com/${vimeoId}.jpg`

    if (thumbnailUrl) {
      schema.thumbnail = {
        '@type': 'ImageObject',
        url: thumbnailUrl,
        width: 640,
        height: 360,
      }
    }
  } else {
    schema.contentUrl = videoUrl
    schema.url = videoUrl
    schema.thumbnailUrl = thumbnailUrl || DEFAULT_IMAGE_URL

    if (thumbnailUrl) {
      schema.thumbnail = {
        '@type': 'ImageObject',
        url: thumbnailUrl,
      }
    }
  }

  if (duration) {
    if (duration.startsWith('PT')) {
      schema.duration = duration
    } else {
      const totalSeconds = parseInt(duration)
      const minutes = Math.floor(totalSeconds / 60)
      const seconds = totalSeconds % 60
      schema.duration = `PT${minutes}M${seconds}S`
    }
  }

  return schema
}

export function getYouTubeThumbnail(
  videoUrl: string,
  quality: 'maxres' | 'hq' | 'mq' | 'sd' = 'hq',
): string | null {
  const videoId = videoUrl.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
  )?.[1]

  if (!videoId) return null

  const qualityMap = {
    maxres: 'maxresdefault.jpg',
    hq: 'hqdefault.jpg',
    mq: 'mqdefault.jpg',
    sd: 'sddefault.jpg',
  }

  return `https://i.ytimg.com/vi/${videoId}/${qualityMap[quality]}`
}

export async function validateYouTubeThumbnail(
  videoId: string,
): Promise<string> {
  const thumbnailQualities = [
    'maxresdefault.jpg',
    'hqdefault.jpg',
    'mqdefault.jpg',
    'sddefault.jpg',
  ]

  for (const quality of thumbnailQualities) {
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/${quality}`

    try {
      const response = await fetch(thumbnailUrl, { method: 'HEAD' })
      if (response.ok) {
        return thumbnailUrl
      }
    } catch (error) {
      console.warn(`Failed to validate thumbnail: ${thumbnailUrl}`)
    }
  }

  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}

// Cache the video schema generation for repeated calls
export const generateCachedVideoSchema = cache(generateVideoSchema)

// Additional video-related utilities
export function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com|youtu\.be)/.test(url)
}

export function isVimeoUrl(url: string): boolean {
  return /vimeo\.com/.test(url)
}

export function extractVideoId(url: string): {
  platform: 'youtube' | 'vimeo' | 'unknown'
  id: string | null
} {
  const youtubeRegex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const vimeoRegex =
    /vimeo\.com\/(?:channels\/|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/

  const youtubeMatch = url.match(youtubeRegex)
  if (youtubeMatch) {
    return { platform: 'youtube', id: youtubeMatch[1] }
  }

  const vimeoMatch = url.match(vimeoRegex)
  if (vimeoMatch) {
    return { platform: 'vimeo', id: vimeoMatch[3] }
  }

  return { platform: 'unknown', id: null }
}
