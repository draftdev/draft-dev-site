import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 3600

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')

  if (!url) {
    return new NextResponse('Missing URL parameter', { status: 400 })
  }

  try {
    const auth = Buffer.from(
      `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`,
    ).toString('base64')

    const response = await fetch(decodeURIComponent(url), {
      headers: {
        Authorization: `Basic ${auth}`,
        ...(process.env.WORDPRESS_PRIVACY_PASSWORD
          ? { 'X-WP-Privacy': process.env.WORDPRESS_PRIVACY_PASSWORD }
          : {}),
      },
      next: { revalidate: 86400 }, // Cache for 24 hours at the fetch level
    })

    if (!response.ok) {
      console.error(`Failed to fetch image: ${response.status} for URL: ${url}`)
      return new NextResponse(`Failed to fetch image: ${response.status}`, {
        status: response.status,
      })
    }

    const buffer = await response.arrayBuffer()
    const contentType = response.headers.get('content-type') || 'image/jpeg'

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control':
          'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
      },
    })
  } catch (error) {
    console.error('Image proxy error:', error)
    return new NextResponse('Failed to fetch image', { status: 500 })
  }
}
