/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'candid-cookie.flywheelsites.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost:3000/learn',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'candid-cookie.flywheelsites.com/',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'nextdraft.netlify.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'app.netlify.com',
        pathname: '/**',
      },
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
        hostname: 'lh7-us.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'draft-migrate-test.local',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'no-cache.hubspot.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
