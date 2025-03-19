import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')
  const id = request.nextUrl.searchParams.get('id') || 'default'

  if (!url) {
    return new NextResponse('Missing URL parameter', { status: 400 })
  }

  try {
    const auth = Buffer.from(
      `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`,
    ).toString('base64')

    const headers = new Headers({
      Authorization: `Basic ${auth}`,
    })

    if (process.env.WORDPRESS_PRIVACY_PASSWORD) {
      headers.append('X-WP-Privacy', process.env.WORDPRESS_PRIVACY_PASSWORD)
    }

    const fetchOptions = {
      headers,
      cache: 'no-store' as RequestCache,
    }

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

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType || 'image/jpeg',
        'Cache-Control':
          'public, max-age=2592000, stale-while-revalidate=604800', // 30 days, SWR 7 days
        'X-Image-ID': id,
      },
    })
  } catch (error) {
    console.error(`Error fetching image: ${error}, URL: ${url}`)
    return new NextResponse('Failed to fetch image', { status: 500 })
  }
}
