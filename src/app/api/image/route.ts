import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')
  // Get unique version parameter (prevents caching issues)
  const version =
    request.nextUrl.searchParams.get('_v') || Date.now().toString()

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

    // Add cache-busting to the fetch request
    const fetchOptions = {
      headers,
      cache: 'no-store' as RequestCache,
    }

    // Ensure the URL is properly decoded before fetching
    const decodedUrl = decodeURIComponent(url)
    const response = await fetch(decodedUrl, fetchOptions)

    if (!response.ok) {
      console.error(
        `Failed to fetch image: ${response.status}, URL: ${decodedUrl}`,
      )
      return new NextResponse(`Failed to fetch image: ${response.status}`, {
        status: response.status,
      })
    }

    const buffer = await response.arrayBuffer()
    const contentType = response.headers.get('content-type')

    // Return the image with headers that prevent caching issues
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType || 'image/jpeg',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
        'X-Image-Version': version,
      },
    })
  } catch (error) {
    console.error(`Error fetching image: ${error}, URL: ${url}`)
    return new NextResponse('Failed to fetch image', { status: 500 })
  }
}
