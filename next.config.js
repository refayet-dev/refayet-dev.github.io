/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { 
    unoptimized: true,
    domains: ['/cdn.shopify.com']
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;