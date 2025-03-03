// app/api/wordpress/route.ts
import { getWpPostsForApi } from '@/app/lib/wordpress-api' // Use the non-cached version
import { NextResponse } from 'next/server'

// Required for Next.js 13+ App Router to handle POST requests
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

    // Use the non-cached version of getWpPosts
    const { posts, pageInfo } = await getWpPostsForApi(
      first,
      after,
      currentPage,
    )

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
