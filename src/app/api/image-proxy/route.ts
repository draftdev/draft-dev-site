// app/api/image-proxy/route.ts - Optimized with better caching and less logging
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 86400 // 24 hours

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')

  if (!url) {
    return new NextResponse('Missing URL parameter', { status: 400 })
  }

  try {
    const decodedUrl = decodeURIComponent(url)

    // Check if URL is from your WordPress domain
    const isWordPressImage = decodedUrl.includes(
      'candid-cookie.flywheelsites.com',
    )

    const headers: HeadersInit = {
      'User-Agent': 'Mozilla/5.0 (compatible; Draft.dev)',
    }

    // Only add WordPress auth for WordPress images
    if (
      isWordPressImage &&
      process.env.WORDPRESS_API_USERNAME &&
      process.env.WORDPRESS_API_PASSWORD
    ) {
      const auth = Buffer.from(
        `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`,
      ).toString('base64')
      headers.Authorization = `Basic ${auth}`

      if (process.env.WORDPRESS_PRIVACY_PASSWORD) {
        headers['X-WP-Privacy'] = process.env.WORDPRESS_PRIVACY_PASSWORD
      }
    }

    const response = await fetch(decodedUrl, {
      headers,
      next: {
        revalidate: 86400, // Cache for 24 hours
        tags: ['image-proxy'], // Allow for cache invalidation if needed
      },
    })

    if (!response.ok) {
      // Only log errors in development
      if (process.env.NODE_ENV === 'development') {
        console.error(
          `Image proxy: Failed to fetch ${response.status} for: ${decodedUrl}`,
        )
      }

      // Return fallback image instead of failing
      return NextResponse.redirect(
        new URL('/site/med-landscape/write_draft_dev.jpg', request.url),
      )
    }

    const contentType = response.headers.get('content-type')

    // Verify it's actually an image
    if (!contentType || !contentType.startsWith('image/')) {
      if (process.env.NODE_ENV === 'development') {
        console.error(
          `Image proxy: Invalid content type ${contentType} for: ${decodedUrl}`,
        )
      }

      return NextResponse.redirect(
        new URL('/site/med-landscape/write_draft_dev.jpg', request.url),
      )
    }

    const buffer = await response.arrayBuffer()

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        // Aggressive caching to reduce server load
        'Cache-Control':
          'public, max-age=31536000, s-maxage=31536000, immutable',
        Vary: 'Accept-Encoding',
      },
    })
  } catch (error) {
    // Only log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Image proxy error:', error)
    }

    // Redirect to fallback instead of throwing error
    return NextResponse.redirect(
      new URL('/site/med-landscape/write_draft_dev.jpg', request.url),
    )
  }
}
