import { getImageAlt, getImageUrl } from '@/app/lib/image-utils'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/app/lib/schema'
import { getWpPost } from '@/app/lib/wordpress'
import parse, { type DOMNode } from 'html-react-parser'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import sanitizeHtml from 'sanitize-html'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600
export const dynamicParams = true

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const processPostContent = cache(async (post: any) => {
  const sanitizedContent = sanitizeHtml(post.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['style', 'class', 'id'],
      h1: ['id', 'style', 'class'],
      h2: ['id', 'style', 'class'],
      h3: ['id', 'style', 'class'],
      h4: ['id', 'style', 'class'],
      h5: ['id', 'style', 'class'],
      h6: ['id', 'style', 'class'],
      iframe: [
        'src',
        'allow',
        'allowfullscreen',
        'frameborder',
        'scrolling',
        'width',
        'height',
      ],
      img: ['src', 'alt', 'title', 'width', 'height', 'class', 'style'],
      div: ['class', 'style', 'id'],
      span: ['class', 'style', 'id'],
      pre: ['class', 'style'],
      code: ['class', 'style'],
    },
    allowedStyles: {
      '*': {
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
        display: [/.*/],
        'max-width': [/.*/],
        'max-height': [/.*/],
      },
    },
  })

  const readingTime =
    post.customFields?.readingTime ||
    Math.ceil(
      sanitizedContent.replace(/<[^>]*>/g, ' ').split(/\s+/).length / 200,
    )

  return { sanitizedContent, readingTime }
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getWpPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      robots: { index: false, follow: false }, // Change follow to false for 404s
    }
  }

  const cleanExcerpt = post.excerpt
    ? sanitizeHtml(post.excerpt, { allowedTags: [] }).trim()
    : null

  const description =
    cleanExcerpt && cleanExcerpt.length > 0
      ? cleanExcerpt
      : sanitizeHtml(post.content, { allowedTags: [] })
          .substring(0, 160)
          .trim() + '...'

  const displayAuthor =
    post.originalAuthor || post.author?.node?.name || 'Draft.dev Team'

  const imageUrl = getImageUrl(post.featuredImage?.node?.sourceUrl)
  const imageAlt = getImageAlt(post)

  const postUrl = `https://draft.dev/learn/${params.slug}`

  return {
    title: post.title,
    description,
    keywords:
      post.customFields?.targetKeywords?.join(', ') ||
      post.seo?.focuskw ||
      'technical content marketing, developer relations',
    authors: [{ name: displayAuthor }],

    openGraph: {
      type: 'article',
      url: postUrl,
      siteName: 'Draft.dev',
      locale: 'en_US',
      title: `${post.title} - Draft.dev`,
      description: post.seo?.opengraphDescription || description,
      publishedTime: post.date,
      modifiedTime: post.modified || post.date,
      authors: [displayAuthor],
      section: post.categories?.[0]?.name || 'Technical Content Marketing',
      tags: post.customFields?.targetKeywords || [],
      images: [
        {
          url: imageUrl.startsWith('/')
            ? `https://draft.dev${imageUrl}`
            : imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${post.title} - Draft.dev`,
      description: post.seo?.twitterDescription || description,
      images: [
        imageUrl.startsWith('/') ? `https://draft.dev${imageUrl}` : imageUrl,
      ],
      creator: '@draftdev',
      site: '@draftdev',
    },

    alternates: {
      canonical: postUrl,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = params
  const post = await getWpPost(slug)

  if (!post) {
    notFound()
  }

  // Process content with caching
  const { sanitizedContent, readingTime } = await processPostContent(post)
  const articleSchema = generateArticleSchema(post, slug)
  const breadcrumbSchema = generateBreadcrumbSchema(post.title, slug)

  let isFirstImage = true

  const transform = (domNode: DOMNode) => {
    if (domNode.type === 'tag' && domNode.name === 'img' && domNode.attribs) {
      const { src, alt } = domNode.attribs
      if (!src) return undefined

      const imageUrl = getImageUrl(src)
      const isLCP = isFirstImage // First image is likely LCP
      isFirstImage = false // Subsequent images won't be prioritized

      return (
        <div className="my-6">
          <Image
            src={imageUrl}
            alt={alt || 'Blog content image'}
            width={700}
            height={400}
            className="mx-auto rounded-lg object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, 700px"
            priority={isLCP} // ✅ First image gets priority for LCP
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
      )
    }
    return undefined
  }

  const displayAuthor =
    post.originalAuthor || post.author?.node?.name || 'Draft.dev Team'

  return (
    <>
      {/* INDIVIDUAL POST SCHEMAS ONLY */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Breadcrumb Schema - navigation path to this post */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* FAQ Schema - only if this post has FAQs */}
      {post.customFields?.faqQuestions &&
        post.customFields.faqQuestions.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: generateFAQSchema(post.customFields.faqQuestions),
              }),
            }}
          />
        )}

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
          <article className="prose prose-lg prose-blue mx-auto max-w-none">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="not-prose mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-gray-700"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-gray-300">/</span>
                </li>
                <li>
                  <Link
                    href="/learn"
                    className="transition-colors hover:text-gray-700"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-gray-300">/</span>
                </li>
                <li
                  className="max-w-xs truncate font-medium text-gray-900"
                  title={post.title}
                >
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="mb-10">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                {post.title}
              </h1>

              {/* Article Meta Information */}
              <div className="flex flex-wrap items-center gap-4 border-b border-gray-200 pb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <time
                    dateTime={
                      post.date ? new Date(post.date).toISOString() : undefined
                    }
                  >
                    {post.date
                      ? new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                      : 'Unknown date'}
                  </time>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-gray-900">
                    {displayAuthor}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{readingTime} min read</span>
                </div>

                {post.categories?.[0] && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                      {post.categories[0].name}
                    </span>
                  </div>
                )}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose-headings:scroll-mt-20">
              {parse(sanitizedContent, { replace: transform })}
            </div>

            {/* FAQ Section */}
            {post.customFields?.faqQuestions &&
              post.customFields.faqQuestions.length > 0 && (
                <div className="not-prose mt-16">
                  <h2 className="mb-8 text-2xl font-bold text-gray-900">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {post.customFields.faqQuestions.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 pb-6"
                      >
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">
                          {faq.question}
                        </h3>
                        <div className="prose prose-sm text-gray-700">
                          {parse(faq.answer)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Article Footer */}
            <footer className="not-prose mt-16 border-t border-gray-200 pt-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand">
                      <span className="text-sm font-semibold text-white">
                        {displayAuthor.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {displayAuthor}
                    </p>
                    {/* Show author credentials if available */}
                    {post.customFields?.authorCredentials && (
                      <p className="text-xs text-gray-500">
                        {post.customFields.authorCredentials}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 sm:mt-0">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Share this article:</span>

                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://draft.dev/learn/${slug}`)}&via=draftdev`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 transition-colors hover:text-blue-700"
                    >
                      Twitter
                    </a>

                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://draft.dev/learn/${slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 transition-colors hover:text-blue-700"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </article>

          {/* Related Articles Section */}
          <aside className="mt-16 border-t border-gray-200 pt-16">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-2xl font-bold text-gray-900">
                Continue Reading
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Link
                  href="/learn"
                  className="group block rounded-lg bg-gray-50 p-6 transition-colors hover:bg-gray-100"
                >
                  <h3 className="subheader-gradient text-lg group-hover:text-primary-80">
                    Browse All Articles
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Explore our complete library of technical content marketing
                    resources and developer relations insights.
                  </p>
                  <span className="mt-4 inline-flex items-center font-medium text-primary">
                    View all posts
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/call"
                  className="group block rounded-lg bg-gradient-brand p-6 text-white transition-opacity hover:opacity-90"
                >
                  <h3 className="text-lg font-semibold">
                    Need Technical Content?
                  </h3>
                  <p className="mt-2 text-blue-100">
                    Let our team of 300+ technical experts create content that
                    resonates with your developer audience.
                  </p>
                  <span className="mt-4 inline-flex items-center font-medium">
                    Schedule a call
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
