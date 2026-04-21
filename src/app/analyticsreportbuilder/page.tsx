'use client'

import { useState, useCallback, useRef } from 'react'

export default function AnalyticsReportBuilder() {
  const [xlsxFile, setXlsxFile] = useState<File | null>(null)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [clientName, setClientName] = useState('')
  const [month, setMonth] = useState(() => {
    const d = new Date()
    d.setMonth(d.getMonth() - 1)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
  })
  const [isDragging, setIsDragging] = useState(false)
  const [isLogoDragging, setIsLogoDragging] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [downloadName, setDownloadName] = useState('')
  const xlsxInputRef = useRef<HTMLInputElement>(null)
  const logoInputRef = useRef<HTMLInputElement>(null)

  const acceptFile = useCallback((file: File) => {
    if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      setXlsxFile(file)
      setError(null)
      setDownloadUrl(null)
      // Pre-fill client name from filename if blank
      setClientName(prev => {
        if (prev) return prev
        return file.name.replace(/\.(xlsx|xls)$/i, '').replace(/[_-]+/g, ' ').trim()
      })
    } else {
      setError('Please upload an .xlsx or .xls file.')
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files[0]
      if (file) acceptFile(file)
    },
    [acceptFile]
  )

  const handleGenerate = async () => {
    if (!xlsxFile || !month) return
    setIsGenerating(true)
    setError(null)
    setDownloadUrl(null)

    // Netlify functions have a ~4.5 MB binary request limit (6 MB base64-encoded).
    // Large xlsx files balloon because of embedded screenshots in xl/media/.
    // Re-serialising through the xlsx library strips those binary blobs while
    // keeping all cell values, reducing a 4-5 MB file to under 200 KB.
    let fileToUpload: File = xlsxFile
    if (xlsxFile.size > 3.5 * 1024 * 1024) {
      try {
        const XLSX = (await import('xlsx')).default
        const ab = await xlsxFile.arrayBuffer()
        const wb = XLSX.read(ab, { type: 'array' })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const out: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
        fileToUpload = new File(
          [out as ArrayBuffer],
          xlsxFile.name,
          { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
        )
      } catch {
        // fall back to original file; the server may still error on very large files
      }
    }

    const fd = new FormData()
    fd.append('file', fileToUpload)
    fd.append('month', month)
    fd.append('clientName', clientName || 'Client')
    if (logoFile) fd.append('logo', logoFile)

    try {
      const res = await fetch('/api/analyticsreports/generate', { method: 'POST', body: fd })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || `Server error (${res.status})`)
      }
      const blob = await res.blob()
      const disposition = res.headers.get('content-disposition') || ''
      const name = disposition.match(/filename="([^"]+)"/)?.[1] || `${month}-report.html`
      if (downloadUrl) URL.revokeObjectURL(downloadUrl)
      setDownloadUrl(URL.createObjectURL(blob))
      setDownloadName(name)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.')
    } finally {
      setIsGenerating(false)
    }
  }

  const canGenerate = !!xlsxFile && !!month && !isGenerating

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Analytics Report Builder</h1>
          <p className="mt-1 text-sm text-gray-500">
            Upload a client Excel file to generate a standalone HTML report.
          </p>
        </div>

        {/* Excel drop zone */}
        <div
          role="button"
          tabIndex={0}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => xlsxInputRef.current?.click()}
          onKeyDown={e => e.key === 'Enter' && xlsxInputRef.current?.click()}
          className={[
            'border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors select-none',
            isDragging
              ? 'border-purple-400 bg-purple-50'
              : xlsxFile
              ? 'border-green-400 bg-green-50'
              : 'border-gray-300 bg-white hover:border-gray-400',
          ].join(' ')}
        >
          <input
            ref={xlsxInputRef}
            type="file"
            accept=".xlsx,.xls"
            className="hidden"
            onChange={e => e.target.files?.[0] && acceptFile(e.target.files[0])}
          />
          {xlsxFile ? (
            <>
              <div className="text-3xl mb-2 text-green-500">✓</div>
              <p className="text-sm font-medium text-green-700">{xlsxFile.name}</p>
              <p className="text-xs text-gray-400 mt-1">Click or drop to replace</p>
            </>
          ) : (
            <>
              <div className="mb-3">
                <svg className="mx-auto h-10 w-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Drop your .xlsx file here</p>
              <p className="text-xs text-gray-400 mt-1">or click to browse</p>
            </>
          )}
        </div>

        {/* Form fields */}
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Name
              </label>
              <input
                type="text"
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                placeholder="e.g. Acme Corp"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Report Month
              </label>
              <input
                type="month"
                value={month}
                onChange={e => setMonth(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Logo upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Client Logo{' '}
              <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <div
              role="button"
              tabIndex={0}
              onDragOver={e => { e.preventDefault(); setIsLogoDragging(true) }}
              onDragLeave={e => { e.preventDefault(); setIsLogoDragging(false) }}
              onDrop={e => {
                e.preventDefault()
                setIsLogoDragging(false)
                const file = e.dataTransfer.files[0]
                if (file) setLogoFile(file)
              }}
              onClick={() => logoInputRef.current?.click()}
              onKeyDown={e => e.key === 'Enter' && logoInputRef.current?.click()}
              className={[
                'border-2 border-dashed rounded-lg px-4 py-3 text-center cursor-pointer transition-colors select-none',
                isLogoDragging
                  ? 'border-purple-400 bg-purple-50'
                  : logoFile
                  ? 'border-green-400 bg-green-50'
                  : 'border-gray-300 bg-white hover:border-gray-400',
              ].join(' ')}
            >
              <input
                ref={logoInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => setLogoFile(e.target.files?.[0] || null)}
              />
              {logoFile ? (
                <p className="text-xs font-medium text-green-700">{logoFile.name} <span className="font-normal text-gray-400">— click or drop to replace</span></p>
              ) : (
                <p className="text-xs text-gray-500">Drop an image here or <span className="text-purple-600 font-medium">click to browse</span></p>
              )}
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          disabled={!canGenerate}
          className="mt-6 w-full py-2.5 rounded-lg text-sm font-medium text-white transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: 'linear-gradient(135deg,#7B6488,#5B4468)' }}
        >
          {isGenerating ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Generating…
            </span>
          ) : (
            'Generate Report'
          )}
        </button>

        {/* Download */}
        {downloadUrl && (
          <div className="mt-4 px-4 py-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
            <p className="text-sm font-medium text-green-800">Report ready</p>
            <a
              href={downloadUrl}
              download={downloadName}
              className="text-sm font-semibold text-green-700 underline hover:text-green-900"
            >
              Download HTML ↓
            </a>
          </div>
        )}

      </div>
    </div>
  )
}
