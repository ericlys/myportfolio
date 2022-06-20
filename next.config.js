/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'user-images.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig
