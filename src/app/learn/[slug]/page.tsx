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

export const revalidate = 3600
export const dynamicParams = true

type Props = {
  params: Promise<{ slug: string }>
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
  const { slug } = await params // ✅ await the promise
  const post = await getWpPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found - Draft.dev',
      description: 'The requested blog post could not be found.',
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

  const displayAuthor =
    post.originalAuthor || post.author?.node?.name || 'Draft.dev Team'

  // Use direct image URL (no proxy)
  const imageUrl = getImageUrl(post.featuredImage?.node?.sourceUrl)
  const imageAlt = getImageAlt(post)

  const postUrl = `https://draft.dev/learn/${slug}`

  return {
    title: post.title,
    description,
    keywords:
      post.customFields?.targetKeywords?.join(', ') || post.seo?.focuskw,
    authors: [{ name: displayAuthor, url: 'https://draft.dev/about' }],

    openGraph: {
      type: 'article',
      url: postUrl,
      siteName: 'Draft.dev',
      locale: 'en_US',
      title: post.title,
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
      title: post.title,
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

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params // ✅ await the promise
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
      const { src, alt, width, height } = domNode.attribs
      if (!src) return undefined

      const imageUrl = getImageUrl(src)

      // First <img> in the post == "header image"
      const isHeaderImage = isFirstImage
      isFirstImage = false

      // Aspect ratio from WP attrs (fallback 16:9)
      const imgWidth = width ? parseInt(width) : 16
      const imgHeight = height ? parseInt(height) : 9
      const aspectRatio = (imgHeight / imgWidth) * 100

      return (
        <div className={`my-6 ${isHeaderImage ? 'hidden sm:block' : ''}`}>
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{ paddingBottom: `${aspectRatio}%` }}
          >
            <Image
              src={imageUrl}
              alt={alt || 'Blog content image'}
              fill
              className="rounded-lg object-cover"
              quality={75}
              priority={isHeaderImage}
              // If it's the header image, treat mobile as 0px so we don't fetch a big file for hidden content.
              sizes={
                isHeaderImage
                  ? '(max-width: 639px) 0px, (max-width: 1024px) 672px, 700px'
                  : '(max-width: 640px) 100vw, (max-width: 1024px) 672px, 400px'
              }
              loading={isHeaderImage ? 'eager' : 'lazy'}
              fetchPriority={isHeaderImage ? 'high' : 'auto'}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )
    }
    return undefined
  }

  // let isFirstImage = true

  // const transform = (domNode: DOMNode) => {
  //   if (domNode.type === 'tag' && domNode.name === 'img' && domNode.attribs) {
  //     const { src, alt, width, height } = domNode.attribs
  //     if (!src) return undefined

  //     const imageUrl = getImageUrl(src)
  //     const isLCP = isFirstImage
  //     isFirstImage = false

  //     const imgWidth = width ? parseInt(width) : 16
  //     const imgHeight = height ? parseInt(height) : 9
  //     const aspectRatio = (imgHeight / imgWidth) * 100

  //     return (
  //       <div className="my-6">
  //         <div
  //           className="relative w-full overflow-hidden rounded-lg"
  //           style={{ paddingBottom: `${aspectRatio}%` }}
  //         >
  //           <Image
  //             src={imageUrl}
  //             alt={alt || 'Blog content image'}
  //             fill
  //             className="rounded-lg object-cover"
  //             quality={75}
  //             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 672px, 400px"
  //             priority={isLCP}
  //             placeholder="blur"
  //             blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
  //           />
  //         </div>
  //       </div>
  //     )
  //   }
  //   return undefined
  // }

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

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* FAQ Schema */}
      {post.customFields?.faqQuestions &&
        post.customFields.faqQuestions.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                '@id': `https://draft.dev/learn/${slug}#faq`,
                mainEntity: generateFAQSchema(post.customFields.faqQuestions),
              }),
            }}
          />
        )}

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
          <article className="prose prose-lg prose-blue mx-auto max-w-none">
            {/* Breadcrumbs */}
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

            {/* Header */}
            <header className="mb-10">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                {post.title}
              </h1>

              {/* Meta */}
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

            {/* Content */}
            <div className="prose-headings:scroll-mt-20">
              {parse(sanitizedContent, { replace: transform })}
            </div>

            {/* FAQ */}
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

            {/* Footer */}
            <footer className="not-prose py-10">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
                {/* Author */}
                <div>
                  <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                    About the Author
                  </h2>

                  <div className="flex flex-col space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="text-lg font-medium text-gray-900">
                          {displayAuthor}
                        </h4>

                        {(post.customFields?.authorLinkedIn ||
                          post.customFields?.authorTwitter) && (
                          <div className="flex items-center space-x-3">
                            {post.customFields?.authorLinkedIn && (
                              <a
                                href={post.customFields.authorLinkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 transition-colors hover:text-blue-600"
                                aria-label="LinkedIn profile"
                              >
                                <svg
                                  className="h-4 w-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                              </a>
                            )}

                            {post.customFields?.authorTwitter && (
                              <a
                                href={`https://twitter.com/${post.customFields.authorTwitter.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 transition-colors hover:text-blue-400"
                                aria-label="Twitter profile"
                              >
                                <svg
                                  className="h-4 w-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                      </div>

                      {post.customFields?.authorCredentials && (
                        <p className="mb-3 text-sm text-gray-600">
                          {post.customFields.authorCredentials}
                        </p>
                      )}

                      {post.customFields?.authorBio && (
                        <p className="text-sm leading-relaxed text-gray-700">
                          {post.customFields.authorBio}
                        </p>
                      )}
                    </div>

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

                {/* Continue Reading */}
                <div className="group block rounded-lg bg-gray-50 p-6 transition-colors hover:bg-gray-100">
                  <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                    Continue Reading
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Explore our complete library of technical content marketing
                    resources and developer relations insights.
                  </p>
                  <Link href="/learn">
                    <span className="text-primary mt-4 inline-flex items-center font-medium">
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
                </div>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </>
  )
}
