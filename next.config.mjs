/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'draft-test-local.local',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'optimistic-insurance.localsite.io',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
