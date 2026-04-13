import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_PREFIX = '/analyticsreportbuilder'
const LOGIN_PATH = '/analyticsreportbuilder/login'
const COOKIE_NAME = 'analytics_auth'
const SALT = '-draft-analytics-tool-2025'

async function computeToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(password + SALT)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (!pathname.startsWith(PROTECTED_PREFIX)) {
    return NextResponse.next()
  }

  // Always allow the login page
  if (pathname === LOGIN_PATH || pathname.startsWith(LOGIN_PATH + '/')) {
    return NextResponse.next()
  }

  const authCookie = request.cookies.get(COOKIE_NAME)
  const expected = await computeToken(process.env.ANALYTICS_TOOL_PASSWORD || '')

  if (authCookie?.value === expected) {
    return NextResponse.next()
  }

  const loginUrl = new URL(LOGIN_PATH, request.url)
  loginUrl.searchParams.set('from', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/analyticsreportbuilder/:path*'],
}
