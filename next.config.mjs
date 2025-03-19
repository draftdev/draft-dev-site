// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,

  images: {
    domains: [
      'candid-cookie.flywheelsites.com',
      'draft.dev',
      'i0.wp.com',
      'i1.wp.com',
      'i2.wp.com',
      'i3.wp.com',
      'secure.gravatar.com',
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    remotePatterns: [
      // WordPress specific patterns
      {
        protocol: 'https',
        hostname: 'candid-cookie.flywheelsites.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'candid-cookie.flywheelsites.com',
        pathname: '/**',
      },
      // Gravatar and other common image services
      {
        protocol: 'https',
        hostname: '*.gravatar.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      // Deployment-specific patterns
      {
        protocol: 'https',
        hostname: 'nextdraft.netlify.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'glittery-faun-4426fe.netlify.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Authorization',
            value: `Basic ${Buffer.from(`${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`).toString('base64')}`,
          },
          {
            key: 'X-WP-Privacy',
            value: process.env.WORDPRESS_PRIVACY_PASSWORD || '',
          },
        ],
      },
      {
        source: '/api/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=604800', // 30 days cache, 7 days stale-while-revalidate
          },
        ],
      },
      {
        // Cache static assets
        source: '/:path*.(jpg|jpeg|png|webp|avif|ico|svg|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400', // 7 days, SWR 1 day
          },
        ],
      },
      {
        // Cache JS and CSS
        source: '/:path*.(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year, immutable
          },
        ],
      },
    ]
  },
}

export default nextConfig
