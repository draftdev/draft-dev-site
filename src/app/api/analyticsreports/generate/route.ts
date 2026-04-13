import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { generateReport } from '@/lib/analyticsreports/generator'

const SALT = '-draft-analytics-tool-2025'

function verifyAuth(request: NextRequest): boolean {
  const cookie = request.cookies.get('analytics_auth')
  if (!cookie) return false
  const expected = createHash('sha256')
    .update((process.env.ANALYTICS_TOOL_PASSWORD || '') + SALT)
    .digest('hex')
  return cookie.value === expected
}

export async function POST(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }

  const file = formData.get('file') as File | null
  const month = formData.get('month') as string | null
  const clientName = (formData.get('clientName') as string | null) || 'Client'
  const logo = formData.get('logo') as File | null

  if (!file) {
    return NextResponse.json({ error: 'No Excel file provided' }, { status: 400 })
  }
  if (!month || !/^\d{4}-\d{2}$/.test(month)) {
    return NextResponse.json({ error: 'Invalid month — expected YYYY-MM format' }, { status: 400 })
  }

  try {
    const excelBuffer = Buffer.from(await file.arrayBuffer())
    const logoBuffer = logo && logo.size > 0 ? Buffer.from(await logo.arrayBuffer()) : null
    const logoExt = logo?.name.split('.').pop()?.toLowerCase() || 'png'

    const html = await generateReport({ excelBuffer, month, clientName, logoBuffer, logoExt })

    const filename = `${month}-${clientName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-report.html`

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to generate report'
    console.error('[analyticsreports] generate error:', err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
