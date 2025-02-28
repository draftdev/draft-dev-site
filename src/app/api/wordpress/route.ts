import { getWpPosts } from '@/app/lib/wordpress'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { after, first = 10, currentPage = 2 } = body

    if (!after) {
      return NextResponse.json(
        { error: 'Missing cursor parameter' },
        { status: 400 },
      )
    }

    const { posts, pageInfo } = await getWpPosts(first, after, currentPage)

    // Return clean response
    return NextResponse.json({
      posts,
      pageInfo,
    })
  } catch (error) {
    console.error('WordPress API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts', details: String(error) },
      { status: 500 },
    )
  }
}
