/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/3D--PORTFOLIO-2',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
