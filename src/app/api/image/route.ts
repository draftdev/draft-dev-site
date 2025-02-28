import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')
  const width = request.nextUrl.searchParams.get('w') || '768'
  const quality = request.nextUrl.searchParams.get('q') || '75'

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

    const response = await fetch(url, { headers })

    if (!response.ok) {
      return new NextResponse(`Failed to fetch image: ${response.status}`, {
        status: response.status,
      })
    }

    const buffer = await response.arrayBuffer()
    const contentType = response.headers.get('content-type')

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType || 'image/jpeg',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch (error) {
    console.error('Error fetching image:', error)
    return new NextResponse('Failed to fetch image', { status: 500 })
  }
}
