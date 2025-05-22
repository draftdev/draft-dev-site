import { getWpPost } from '@/app/lib/wordpress'
import parse, { type DOMNode } from 'html-react-parser'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import sanitizeHtml from 'sanitize-html'

export const dynamic = 'force-dynamic'
export const revalidate = 0

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
      robots: { index: true, follow: true },
    }
  }

  // Sanitize excerpt if it exists
  const cleanExcerpt = post.excerpt
    ? sanitizeHtml(post.excerpt, { allowedTags: [] }).trim()
    : null

  const description =
    cleanExcerpt && cleanExcerpt.length > 0
      ? cleanExcerpt
      : sanitizeHtml(post.content, { allowedTags: [] })
          .substring(0, 160)
          .trim() + '...'

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

  const transform = (domNode: DOMNode) => {
    if (domNode.type === 'tag' && domNode.name === 'img' && domNode.attribs) {
      const { src, alt } = domNode.attribs
      if (!src) return undefined

      // Don't use getImageUrl here - Next.js Image will handle optimization
      const imageUrl = src

      // For content images, use Next.js Image component for optimization
      return (
        <div className="my-4">
          <Image
            src={imageUrl}
            alt={alt || 'Blog image'}
            width={768}
            height={512}
            className="mx-auto rounded-lg object-cover"
            quality={85}
            sizes="(max-width: 768px) 100vw, 768px"
            // Skip Next.js optimization for external non-whitelisted domains
            unoptimized={
              !imageUrl.includes('candid-cookie.flywheelsites.com') &&
              !imageUrl.startsWith('/')
            }
          />
        </div>
      )
    }
    return undefined
  }

  const sanitizedContent = sanitizeHtml(post.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['style', 'class'], // Allow style and class on all elements
      h1: ['id', 'style', 'class'],
      h2: ['id', 'style', 'class'],
      h3: ['id', 'style', 'class'],
      h4: ['id', 'style', 'class'],
      iframe: ['src', 'allow', 'allowfullscreen', 'frameborder', 'scrolling'],
      img: ['src', 'alt', 'title', 'width', 'height'],
    },
    allowedStyles: {
      '*': {
        // Allow common CSS properties
        border: [/.*/],
        'border-left': [/.*/],
        'border-right': [/.*/],
        'border-top': [/.*/],
        'border-bottom': [/.*/],
        padding: [/.*/],
        margin: [/.*/],
        'background-color': [/.*/],
        background: [/.*/],
        color: [/.*/],
        'font-weight': [/.*/],
        'font-size': [/.*/],
        'text-align': [/.*/],
        width: [/.*/],
        height: [/.*/],
      },
    },
  })
  const displayAuthor =
    post.originalAuthor || post.author?.node?.name || 'Draft.dev'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-36 lg:px-8">
          <article className="prose prose-lg prose-blue mx-auto max-w-none">
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-700">
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
                  src={post.featuredImage.node.sourceUrl}
                  alt={String(post.title)}
                  className="w-full rounded-xl object-cover"
                  width={1200}
                  height={675}
                  loading="eager"
                  priority
                  quality={90}
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </div>
            )}

            {/* Render the sanitized, transformed HTML content */}
            {parse(sanitizedContent, { replace: transform })}
          </article>
        </div>
      </div>
    </>
  )
}
