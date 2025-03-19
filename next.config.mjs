// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,

  images: {
    domains: [
      // WordPress domains
      'candid-cookie.flywheelsites.com',

      // Other image domains
      'draft.dev',
      'i0.wp.com',
      'i1.wp.com',
      'i2.wp.com',
      'i3.wp.com',
      'secure.gravatar.com',
    ],

    // Generate modern image formats
    formats: ['image/webp', 'image/avif'],

    // Use 24 hour caching
    minimumCacheTTL: 86400,

    // Increase image size limit if needed for larger blog images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768],
  },
}

export default nextConfig

// // next.config.mjs
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   poweredByHeader: false,

//   images: {
//     domains: [
//       'candid-cookie.flywheelsites.com',
//       'draft.dev',
//       'i0.wp.com',
//       'i1.wp.com',
//       'i2.wp.com',
//       'i3.wp.com',
//       'secure.gravatar.com',
//     ],
//     formats: ['image/webp', 'image/avif'],
//     minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
//     remotePatterns: [
//       // WordPress specific patterns
//       {
//         protocol: 'https',
//         hostname: 'candid-cookie.flywheelsites.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'http',
//         hostname: 'candid-cookie.flywheelsites.com',
//         pathname: '/**',
//       },
//       // Gravatar and other common image services
//       {
//         protocol: 'https',
//         hostname: '*.gravatar.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'img.youtube.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.imgur.com',
//         pathname: '/**',
//       },
//       // Deployment-specific patterns
//       {
//         protocol: 'https',
//         hostname: 'nextdraft.netlify.app',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'glittery-faun-4426fe.netlify.app',
//         pathname: '/**',
//       },
//       // Fallback pattern for any other HTTPS sources
//       {
//         protocol: 'https',
//         hostname: '**',
//         pathname: '/**',
//       },
//     ],
//   },
//   async headers() {
//     return [
//       {
//         source: '/api/image',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000',
//           },
//         ],
//       },
//     ]
//   },
// }

// export default nextConfig
