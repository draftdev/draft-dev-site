// app/learn/[slug]/layout.tsx
import NewsletterFull from '@/components/media/newsletter-full'
import type { Metadata } from 'next'

type BlogLayoutProps = {
  children: React.ReactNode
  params: { slug: string }
}

// Next will call this for every route that matches /learn/[slug]
export async function generateMetadata({
  params,
}: BlogLayoutProps): Promise<Metadata> {
  const { slug } = params

  return {
    alternates: {
      canonical: `/learn/${slug}`,
    },
    // Optionally override or add more metadata:
    title: `Draft.dev Blog – ${slug}`,
    description: 'Technical blog post at Draft.dev',
  }
}

export default function BlogPostLayout({ children }: BlogLayoutProps) {
  return (
    <>
      {children}
      <NewsletterFull />
    </>
  )
}
