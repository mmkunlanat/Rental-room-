/** @type {import('next').NextConfig} */
const nextConfig = {
  // Styling
  compiler: {
    styledComponents: true,
  },

  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],
    unoptimized: process.env.VERCEL_ENV === 'preview' || process.env.NODE_ENV === 'development',
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },

  // Rewrites for API routes
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  },

  // Performance
  swcMinify: true,
  productionBrowserSourceMaps: false,

  // Experimental features
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
