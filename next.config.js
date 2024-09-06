/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: ['secure.gravatar.com', ' http://wp.jeeptourkamchatka.ru'],
    formats: ['image/webp'],
    // domains: ['wp.jeeptourkamchatka.ru'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: ' http://wp.jeeptourkamchatka.ru',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
