/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000,
  },
  distDir: 'public_html',
};

export default nextConfig;
