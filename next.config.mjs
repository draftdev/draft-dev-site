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
      'i.imgur.com',
      'imgur.com',
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
