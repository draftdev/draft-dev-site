import { getWpPostsForApi } from '@/app/lib/wordpress-api'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

function parsePagingParams(
  input: { after: string | null; first?: string | number; currentPage?: string | number },
) {
  const after = input.after
  const first = Number.parseInt(String(input.first ?? 10), 10)
  const currentPage = Number.parseInt(String(input.currentPage ?? 1), 10)

  return {
    after,
    first: Number.isFinite(first) && first > 0 ? first : 10,
    currentPage: Number.isFinite(currentPage) && currentPage > 0 ? currentPage : 1,
  }
}

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams
    const { after, first, currentPage } = parsePagingParams({
      after: search.get('after'),
      first: search.get('first'),
      currentPage: search.get('currentPage'),
    })

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { after, first, currentPage } = parsePagingParams(body)

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
