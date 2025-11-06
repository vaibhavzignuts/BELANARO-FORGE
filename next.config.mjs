/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'via.placeholder.com',
      'placehold.co',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: '**.placehold.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable compression
  compress: true,
  // Optimize bundle size
  swcMinify: true,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap'],
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
