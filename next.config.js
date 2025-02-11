/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  images: {
    unoptimized: true  // Required for static export
  },
  trailingSlash: false,
  basePath: '',
  // Add this to ensure localhost works
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
}

module.exports = nextConfig
