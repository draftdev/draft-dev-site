import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createHash } from 'crypto'

const SALT = '-draft-analytics-tool-2025'

function computeToken(password: string): string {
  return createHash('sha256').update(password + SALT).digest('hex')
}

async function login(formData: FormData) {
  'use server'
  const entered = formData.get('password') as string
  const correct = process.env.ANALYTICS_TOOL_PASSWORD || ''

  if (entered === correct) {
    const token = computeToken(correct)
    const cookieStore = await cookies()
    cookieStore.set('analytics_auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })
    redirect('/analyticsreportbuilder')
  }

  redirect('/analyticsreportbuilder/login?error=1')
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-900">Analytics Report Builder</h1>
            <p className="mt-1 text-sm text-gray-500">Internal tool — sign in to continue</p>
          </div>

          {error && (
            <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">Incorrect password. Please try again.</p>
            </div>
          )}

          <form action={login} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoFocus
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
              style={{ background: 'linear-gradient(135deg,#7B6488,#5B4468)' }}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
