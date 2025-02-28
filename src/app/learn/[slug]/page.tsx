// [slug]/page.tsx
import { getWpPost } from '@/app/lib/wordpress'
import parse, { type DOMNode } from 'html-react-parser'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const description =
    post.excerpt ||
    sanitizeHtml(post.content, { allowedTags: [] }).substring(0, 160).trim() +
      '...'

  return {
    title: post.title,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
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
      description: description,
      images: post.featuredImage
        ? [post.featuredImage.node.sourceUrl]
        : ['/site/med-landscape/write_draft_dev.jpg'],
    },
    alternates: {
      canonical: `https://draft.dev/learn/${params.slug}`,
    },
  }
}

// Use the same Props type for the page component
export default async function PostPage({ params }: Props) {
  const { slug } = params

  const post = await getWpPost(slug)
  if (!post) {
    notFound()
  }

  const transform = (domNode: DOMNode) => {
    if (domNode.type === 'tag' && domNode.name === 'img' && domNode.attribs) {
      const { src, alt, width, height } = domNode.attribs

      if (!src) return undefined
      const timestamp = Date.now()
      const uniqueId = Math.random().toString(36).substring(2, 10)

      let imageUrl = src

      if (src.includes('candid-cookie.flywheelsites.com')) {
        imageUrl = `/api/image?url=${encodeURIComponent(src.trim())}&_v=${timestamp}-${uniqueId}`
      }

      return (
        <div className="my-4">
          <img
            src={imageUrl}
            alt={alt || 'Blog image'}
            width={width || '768'}
            height={height || 'auto'}
            className="mx-auto rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      )
    }
    return undefined
  }

  {
    post.featuredImage && (
      <div className="mb-10 overflow-hidden rounded-xl">
        <Image
          src={
            post.featuredImage.node.sourceUrl.includes(
              'candid-cookie.flywheelsites.com',
            )
              ? `/api/image?url=${encodeURIComponent(post.featuredImage.node.sourceUrl.trim())}`
              : post.featuredImage.node.sourceUrl
          }
          alt={String(post.title)}
          className="w-full object-cover"
          width={768}
          height={450}
          priority
        />
      </div>
    )
  }

  const sanitizedContent = sanitizeHtml(post.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      iframe: ['src', 'allow', 'allowfullscreen', 'frameborder', 'scrolling'],
      img: ['src', 'alt', 'title', 'width', 'height'],
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

              {post.categories?.[0] && (
                <>
                  <span>•</span>
                  <Link
                    href={`/categories/${String(post.categories[0].name).toLowerCase()}`}
                    className="text-primary hover:underline"
                  >
                    {post.categories[0].name}
                  </Link>
                </>
              )}

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
                  src={
                    post.featuredImage.node.sourceUrl.includes(
                      'candid-cookie.flywheelsites.com',
                    )
                      ? `/api/image?url=${encodeURIComponent(post.featuredImage.node.sourceUrl.trim())}&_v=${Date.now()}`
                      : post.featuredImage.node.sourceUrl
                  }
                  alt={String(post.title)}
                  className="w-full rounded-xl object-cover"
                  width="768"
                  height="450"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            )}
            {parse(sanitizedContent, { replace: transform })}
          </article>
        </div>
      </div>
    </>
  )
}
