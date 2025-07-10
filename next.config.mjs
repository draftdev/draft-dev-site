/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,

  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http', // Add HTTP support
        hostname: 'candid-cookie.flywheelsites.com',
      },
      {
        protocol: 'https',
        hostname: 'candid-cookie.flywheelsites.com', // Add this specific domain
      },
      {
        protocol: 'https',
        hostname: '*.flywheelsites.com',
      },
      {
        protocol: 'https',
        hostname: 'draft.dev',
      },
      {
        protocol: 'https',
        hostname: '*.imgur.com',
      },
      {
        protocol: 'https',
        hostname: '*.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
    ],

    formats: ['image/avif', 'image/webp'],

    // Optimize caching
    minimumCacheTTL: 31536000, // 1 year for immutable images

    deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],

    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff|woff2)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  compress: true,

  productionBrowserSourceMaps: false,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   poweredByHeader: false,

//   images: {
//     domains: [
//       // WordPress domains
//       'candid-cookie.flywheelsites.com',

//       // Other image domains
//       'draft.dev',
//       'i.imgur.com',
//       'imgur.com',
//       'i0.wp.com',
//       'i1.wp.com',
//       'i2.wp.com',
//       'i3.wp.com',
//       'secure.gravatar.com',
//     ],

//     // Generate modern image formats
//     formats: ['image/webp', 'image/avif'],

//     // Use 24 hour caching
//     minimumCacheTTL: 86400,

//     // Increase image size limit if needed for larger blog images
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768],
//   },
// }

// export default nextConfig
