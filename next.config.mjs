// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/api/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200',
          },
        ],
      },
    ]
  },
}

export default nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'candid-cookie.flywheelsites.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'candid-cookie.flywheelsites.com/',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'glittery-faun-4426fe.netlify.app/',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'glittery-faun-4426fe.netlify.app',
//         pathname: '/**',
//       },
//       {
//         protocol: 'http',
//         hostname: 'glittery-faun-4426fe.netlify.app/',
//         pathname: '/**',
//       },

//       {
//         protocol: 'https',
//         hostname: 'localhost:3000/learn',
//         pathname: '/**',
//       },
//       {
//         protocol: 'http',
//         hostname: 'candid-cookie.flywheelsites.com/',
//         pathname: '/**',
//       },

//       {
//         protocol: 'https',
//         hostname: 'nextdraft.netlify.app',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'app.netlify.com',
//         pathname: '/**',
//       },
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
//         hostname: 'lh7-us.googleusercontent.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'tailwindui.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'http',
//         hostname: 'draft-migrate-test.local',
//         pathname: '/**',
//       },
//       {
//         protocol: 'http',
//         hostname: 'i.imgur.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.imgur.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'imgur.com',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'no-cache.hubspot.com',
//         pathname: '/**',
//       },
//     ],
//   },

//   async headers() {
//     return [
//       {
//         // Add authentication headers for image paths from WordPress
//         source: '/_next/image',
//         headers: [
//           {
//             key: 'Authorization',
//             value: `Basic ${Buffer.from(`${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`).toString('base64')}`,
//           },
//           {
//             key: 'X-WP-Privacy',
//             value: process.env.WORDPRESS_PRIVACY_PASSWORD || '',
//           },
//         ],
//       },
//     ]
//   },
// }

// export default nextConfig
