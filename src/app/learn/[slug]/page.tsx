// app/learn/[slug]/page.tsx
import { getWpPost } from '@/app/lib/wordpress'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import sanitizeHtml from 'sanitize-html'

// Dynamically import components that aren't needed for initial rendering
const BlogContentRenderer = dynamic(() => import('../blog-content-renderer'), {
  loading: () => (
    <div className="h-96 w-full animate-pulse rounded-md bg-gray-100"></div>
  ),
})

export const dynamicRendering = 'force-static'
export const revalidate = 3600 // Revalidate at most once per hour

// This generates static pages for common blog posts at build time
export async function generateStaticParams() {
  // Fetch the most popular blog posts and pre-render them
  // This is a simplified example - you should implement your own logic
  return [
    { slug: 'how-to-create-effective-video-content-for-developers' },
    // Add more popular slugs here
  ]
}

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getWpPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found - Draft.dev',
      description: 'The requested blog post could not be found.',
    }
  }

  const description =
    post.excerpt ||
    sanitizeHtml(post.content, { allowedTags: [] }).substring(0, 160).trim() +
      '...'

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.originalAuthor || post.author?.node?.name || 'Draft.dev'],
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage.node.sourceUrl,
              width: 1200,
              height: 630,
              alt: String(post.title),
            },
          ]
        : [
            {
              url: '/site/med-landscape/write_draft_dev.jpg',
              width: 1200,
              height: 630,
              alt: 'Draft.dev Blog',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: post.featuredImage
        ? [post.featuredImage.node.sourceUrl]
        : ['/site/med-landscape/write_draft_dev.jpg'],
    },
    alternates: {
      canonical: `/learn/${params.slug}`,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = params
  const post = await getWpPost(slug)

  if (!post) {
    notFound()
  }

  const sanitizedContent = sanitizeHtml(post.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      iframe: ['src', 'allow', 'allowfullscreen', 'frameborder', 'scrolling'],
      img: ['src', 'alt', 'title', 'width', 'height'],
    },
  })

  // Figure out the author name
  const displayAuthor =
    post.originalAuthor || post.author?.node?.name || 'Draft.dev'

  // Process the image URL to ensure CDN usage if needed
  const getOptimizedImageUrl = (url: string) => {
    if (url.includes('candid-cookie.flywheelsites.com')) {
      // Use your image proxy service
      return `/api/image?url=${encodeURIComponent(url)}&_v=${Date.now()}`
    }
    return url
  }

  // Create structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      '@type': 'Person',
      name: displayAuthor,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Draft.dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://draft.dev/logo.png',
      },
    },
    description: post.excerpt || '',
    image: post.featuredImage
      ? post.featuredImage.node.sourceUrl
      : '/site/med-landscape/write_draft_dev.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://draft.dev/learn/${slug}`,
    },
  }

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* The actual post layout */}
      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36 lg:px-8">
          <article className="prose prose-lg prose-blue mx-auto max-w-none">
            <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-700 md:text-4xl">
              {post.title}
            </h1>

            <div className="mb-8 flex items-center gap-x-4 text-sm text-gray-500">
              <time
                dateTime={
                  post.date ? new Date(post.date).toISOString() : undefined
                }
              >
                {post.date
                  ? new Date(post.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  : 'Unknown date'}
              </time>
              <span>•</span>
              <div className="flex items-center">
                <span className="font-medium text-gray-700">
                  {displayAuthor}
                </span>
              </div>
            </div>

            {post.featuredImage && (
              <div className="mb-10 overflow-hidden rounded-xl">
                <Image
                  src={getOptimizedImageUrl(post.featuredImage.node.sourceUrl)}
                  alt={String(post.title)}
                  width={768}
                  height={450}
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            )}

            {/* Use dynamic BlogContentRenderer for the content */}
            <BlogContentRenderer content={sanitizedContent} />
          </article>
        </div>
      </div>
    </>
  )
}
