// app/learn/[slug]/layout.tsx
import NewsletterFull from '@/components/media/newsletter-full'

type BlogLayoutProps = {
  children: React.ReactNode
  params: { slug: string }
}

export default function BlogPostLayout({ children }: BlogLayoutProps) {
  return (
    <>
      {children}
      <NewsletterFull />
    </>
  )
}
