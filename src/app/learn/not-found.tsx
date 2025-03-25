import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="px-6 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Content Not Found
        </h2>
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Back to Draft.dev
        </Link>
      </div>
    </div>
  )
}
