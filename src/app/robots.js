export default function robots() {
  // Check if we're in a Netlify deploy preview or branch deploy
  const isNetlifyPreview =
    process.env.CONTEXT === 'deploy-preview' ||
    process.env.CONTEXT === 'branch-deploy' ||
    process.env.NETLIFY_SITE_NAME?.includes('netlify')

  // Handle Netlify environments
  if (isNetlifyPreview) {
    // Block all crawling on preview/branch deploys
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    }
  }

  // Default rules for production (draft.dev)
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
          '/learn/content-marketing',
          '/learn/assets/*',
          '/categories/*',
          '/assets/*',
          '/learn/posts/*',
        ],
      },
    ],
    sitemap: 'https://draft.dev/blog_sitemap.xml',
  }
}
