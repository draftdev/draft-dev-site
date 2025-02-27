import { getWpPost } from '@/app/lib/wordpress'
import parse, { type DOMNode } from 'html-react-parser'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import sanitizeHtml from 'sanitize-html'

export const metadata: Metadata = {
  description: 'Blog post details',
  robots: {
    index: false,
    follow: false,
  },
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const post = await getWpPost(slug)
  if (!post) {
    notFound()
  }
  const transform = (domNode: DOMNode) => {
    if (domNode.type === 'tag' && domNode.name === 'img' && domNode.attribs) {
      const { src, alt } = domNode.attribs
      return (
        <Image
          src={src || '/site/med-landscape/write_draft_dev.jpg'}
          alt={alt || 'Blog image'}
          width={768}
          height={450}
          className="my-4 rounded-lg object-cover"
        />
      )
    }
    return undefined
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
              <span className="font-medium text-gray-700">{displayAuthor}</span>
            </div>
          </div>

          {post.featuredImage && (
            <div className="mb-10 overflow-hidden rounded-xl">
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={String(post.title)}
                className="w-full object-cover"
                width={768}
                height={450}
                priority
              />
            </div>
          )}
          {parse(sanitizedContent, { replace: transform })}
        </article>
      </div>
    </div>
  )
}
