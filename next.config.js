/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for development
  reactStrictMode: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Disable trailing slashes for cleaner URLs
  trailingSlash: false,
  
  // Configure base path if needed (empty for root domain)
  basePath: '',
  
  // Configure asset prefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Image optimization configuration
  images: {
    unoptimized: true, // Disable default image optimization
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'ext.same-assets.com',
      'ugc.same-assets.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ugc.same-assets.com',
        pathname: '/**',
      },
    ],
  },
  
  // Custom webpack configuration
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
  
  // Environment variables
  env: {
    // Add any environment variables here if needed
  },
  
  // Enable production browser source maps
  productionBrowserSourceMaps: false,
  
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

module.exports = nextConfig;