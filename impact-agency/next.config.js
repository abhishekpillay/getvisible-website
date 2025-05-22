/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  }
};

module.exports = nextConfig;
