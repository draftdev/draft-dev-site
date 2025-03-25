// app/blog/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="px-6 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Unable to load content
        </h2>
        <button
          onClick={() => reset()}
          className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
