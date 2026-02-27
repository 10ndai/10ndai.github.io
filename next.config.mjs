/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? process.env.NEXT_PUBLIC_BASE_PATH || '' : ''

const nextConfig = {
  // Enable static HTML export so the site can be hosted on GitHub Pages
  output: 'export',

  // When hosted under a subpath (e.g. /my-portfolio), set NEXT_PUBLIC_BASE_PATH
  // to that subpath (including the leading slash) in your GitHub Pages build env.
  basePath,
  assetPrefix: basePath,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
