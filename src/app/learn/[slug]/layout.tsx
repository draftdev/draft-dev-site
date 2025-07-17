// app/learn/[slug]/layout.tsx

type BlogLayoutProps = {
  children: React.ReactNode
  params: { slug: string }
}

export default function BlogPostLayout({ children }: BlogLayoutProps) {
  return <>{children}</>
}
