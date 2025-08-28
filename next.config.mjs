/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    esmExternals: 'loose',
    optimizePackageImports: [
      '@headlessui/react',
      '@heroicons/react',
      'clsx',
      'dayjs',
    ],
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
    deviceSizes: [320, 360, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [
      16, 32, 48, 64, 96, 128, 256, 320, 360, 384, 400, 480, 512, 768,
    ],
    minimumCacheTTL: 86400,
  },
  webpack: (config) => {
    // Hard block accidental polyfill bundles if a dep tries to pull them in.
    config.resolve.alias['core-js'] = false
    config.resolve.alias['regenerator-runtime'] = false
    return config
  },
}

export default nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   poweredByHeader: false,
//   compiler: {
//     removeConsole: process.env.NODE_ENV === 'production',
//   },
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'thepodcastconsultant.com' },
//       { protocol: 'https', hostname: 'www.thepodcastconsultant.com' },
//       { protocol: 'https', hostname: '*.flywheelsites.com' },
//       { protocol: 'http', hostname: '*.flywheelsites.com' },
//       { protocol: 'https', hostname: 'draft.dev' },
//       { protocol: 'https', hostname: 'i.imgur.com' },
//       { protocol: 'https', hostname: 'imgur.com' },
//       { protocol: 'https', hostname: '*.wp.com' },
//       { protocol: 'https', hostname: 'secure.gravatar.com' },
//     ],
//     formats: ['image/webp', 'image/avif'],
//     deviceSizes: [320, 360, 420, 640, 750, 828, 1080, 1200, 1920],
//     imageSizes: [
//       16, 32, 48, 64, 96, 128, 256, 320, 360, 384, 400, 480, 512, 768,
//     ],
//     minimumCacheTTL: 86400,
//   },
// }

// export default nextConfig
