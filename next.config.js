/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Pillar 1: Technical Infrastructure
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable Gzip/Brotli compression
  
  // Pillar 4: Core Web Vitals - Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'], // Modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
  },
  
  // Pillar 1: Cache headers for static assets
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
  
  // Pillar 1: Redirect configuration (301 for permanent)
  async redirects() {
    return [
      // Add permanent redirects here as needed
    ]
  },
}

module.exports = nextConfig
