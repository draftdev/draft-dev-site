// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,

  images: {
    // Use remotePatterns instead of domains (to avoid deprecation warning)
    remotePatterns: [
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
      {
        protocol: 'https',
        hostname: 'draft.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i1.wp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i2.wp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i3.wp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '/**',
      },
    ],

    // Generate modern image formats
    formats: ['image/webp', 'image/avif'],

    // Use 24 hour caching
    minimumCacheTTL: 86400,

    // Increase image size limit if needed for larger blog images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768],

    // Allow SVG and increase timeout for slow responses
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Add some debugging for development
  async rewrites() {
    return []
  },

  async headers() {
    return [
      {
        source: '/api/image-proxy',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
          },
        ],
      },
    ]
  },
}

export default nextConfig
