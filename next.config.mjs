// next.config.js
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'thepodcastconsultant.com' },
      { protocol: 'https', hostname: 'www.thepodcastconsultant.com' },
      { protocol: 'https', hostname: '*.flywheelsites.com' },
      { protocol: 'http', hostname: '*.flywheelsites.com' },
      { protocol: 'https', hostname: 'draft.dev' },
      { protocol: 'https', hostname: 'i.imgur.com' },
      { protocol: 'https', hostname: 'imgur.com' },
      { protocol: 'https', hostname: '*.wp.com' },
      { protocol: 'https', hostname: 'secure.gravatar.com' },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400,
    // Reasonable defaults; keep wide for hero/LCP candidates
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768],
  },
}

export default withBundleAnalyzer(nextConfig)
