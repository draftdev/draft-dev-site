// app/api/image/route.ts
import { type ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers'
import { NextRequest, NextResponse } from 'next/server'

// Cache duration in seconds (7 days)
const CACHE_DURATION = 60 * 60 * 24 * 7

// Helper to get client cache headers
function getCacheControlHeaders() {
  return {
    'Cache-Control': `public, max-age=${CACHE_DURATION}, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${CACHE_DURATION / 2}`,
  }
}

// Extract image format from url or headers
function getImageFormat(url: string, headers: ReadonlyHeaders): string {
  // Check URL for extension
  if (url.match(/\.jpg$|\.jpeg$/i)) return 'image/jpeg'
  if (url.match(/\.png$/i)) return 'image/png'
  if (url.match(/\.webp$/i)) return 'image/webp'
  if (url.match(/\.gif$/i)) return 'image/gif'
  if (url.match(/\.avif$/i)) return 'image/avif'

  // Check content-type header as fallback
  const contentType = headers.get('content-type')
  if (contentType?.includes('image/')) return contentType

  // Default to JPEG
  return 'image/jpeg'
}

export async function GET(request: NextRequest) {
  // Get the URL parameter
  const url = request.nextUrl.searchParams.get('url')

  // Get unique version parameter (prevents caching issues)
  const version =
    request.nextUrl.searchParams.get('_v') || Date.now().toString()

  // Get width parameter for resizing
  const width = request.nextUrl.searchParams.get('width') || '0'
  const parsedWidth = parseInt(width, 10)

  if (!url) {
    return new NextResponse('Missing URL parameter', { status: 400 })
  }

  try {
    // Create Authorization header with Basic auth
    const auth = Buffer.from(
      `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`,
    ).toString('base64')

    const headers = new Headers({
      Authorization: `Basic ${auth}`,
    })

    // Add X-WP-Privacy header if available
    if (process.env.WORDPRESS_PRIVACY_PASSWORD) {
      headers.append('X-WP-Privacy', process.env.WORDPRESS_PRIVACY_PASSWORD)
    }

    // Ensure the URL is properly decoded before fetching
    const decodedUrl = decodeURIComponent(url)
    const response = await fetch(decodedUrl, { headers })

    if (!response.ok) {
      console.error(
        `Failed to fetch image: ${response.status}, URL: ${decodedUrl}`,
      )
      return new NextResponse(`Failed to fetch image: ${response.status}`, {
        status: response.status,
      })
    }

    const buffer = await response.arrayBuffer()
    const format = getImageFormat(decodedUrl, response.headers)

    // Set caching headers for better performance
    const responseHeaders = {
      'Content-Type': format,
      'Cache-Control': getCacheControlHeaders()['Cache-Control'],
      'X-Image-Version': version,
    }

    return new NextResponse(buffer, { headers: responseHeaders })
  } catch (error) {
    console.error(`Error fetching image: ${error}, URL: ${url}`)
    return new NextResponse('Failed to fetch image', { status: 500 })
  }
}

// import { NextRequest, NextResponse } from 'next/server'

// export async function GET(request: NextRequest) {
//   const url = request.nextUrl.searchParams.get('url')
//   // Get unique version parameter (prevents caching issues)
//   const version =
//     request.nextUrl.searchParams.get('_v') || Date.now().toString()

//   if (!url) {
//     return new NextResponse('Missing URL parameter', { status: 400 })
//   }

//   try {
//     // Create Authorization header with Basic auth
//     const auth = Buffer.from(
//       `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`,
//     ).toString('base64')

//     const headers = new Headers({
//       Authorization: `Basic ${auth}`,
//     })

//     // Add X-WP-Privacy header if available
//     if (process.env.WORDPRESS_PRIVACY_PASSWORD) {
//       headers.append('X-WP-Privacy', process.env.WORDPRESS_PRIVACY_PASSWORD)
//     }

//     // Add cache-busting to the fetch request
//     const fetchOptions = {
//       headers,
//       cache: 'no-store' as RequestCache,
//     }

//     // Ensure the URL is properly decoded before fetching
//     const decodedUrl = decodeURIComponent(url)
//     const response = await fetch(decodedUrl, fetchOptions)

//     if (!response.ok) {
//       console.error(
//         `Failed to fetch image: ${response.status}, URL: ${decodedUrl}`,
//       )
//       return new NextResponse(`Failed to fetch image: ${response.status}`, {
//         status: response.status,
//       })
//     }

//     const buffer = await response.arrayBuffer()
//     const contentType = response.headers.get('content-type')

//     // Return the image with headers that prevent caching issues
//     return new NextResponse(buffer, {
//       headers: {
//         'Content-Type': contentType || 'image/jpeg',
//         'Cache-Control': 'no-cache, no-store, must-revalidate',
//         Pragma: 'no-cache',
//         Expires: '0',
//         'X-Image-Version': version,
//       },
//     })
//   } catch (error) {
//     console.error(`Error fetching image: ${error}, URL: ${url}`)
//     return new NextResponse('Failed to fetch image', { status: 500 })
//   }
// }
