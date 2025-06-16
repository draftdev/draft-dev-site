import { getWpPostsForApi } from '@/app/lib/wordpress-api'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { after, first = 10, currentPage = 1 } = body

    if (!after) {
      return NextResponse.json(
        { error: 'Missing required parameter: after' },
        { status: 400 },
      )
    }

    const result = await getWpPostsForApi(first, after, currentPage)

    return NextResponse.json(result, {
      headers: {
        'Cache-Control':
          'public, max-age=300, s-maxage=300, stale-while-revalidate=150',
      },
    })
  } catch (error) {
    console.error('API Route Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 },
    )
  }
}
