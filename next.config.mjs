/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  distDir: "docs",
  reactStrictMode: false
};

export default nextConfig;
