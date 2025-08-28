import '@/styles/prose.css'
import '@/styles/tailwind.css'

type BlogLayoutProps = {
  children: React.ReactNode
  params: { slug: string }
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <>{children}</>
}
