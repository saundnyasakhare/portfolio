/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
