// app/robots.js

export default function robots() {
  const netlifyUrl = process.env.DEPLOY_URL || process.env.URL || ''
  const isNetlifyDomain = netlifyUrl.includes('netlify.app')

  if (isNetlifyDomain) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/*/[slug]',
          '/learn/assets',
          '/learn/platforms',
          '/learn/writing',
          '/learn/technical-blogs',

          '/learn/assets/*',
          '/categories/*',
          '/assets/*',
          '/learn/posts/*',
          '/learn/content-marketing',
        ],
      },
    ],
    sitemap: 'https://draft.dev/blog_sitemap.xml',
  }
}
