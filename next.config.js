/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


const path = require('path')

// module.exports = {
//   assetPrefix:'.',
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     unoptimized: true,
//   },
// }

// next.config.js

const basePath = process.env.NODE_ENV === 'production' ? '/development/next-test' : '';

module.exports = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  basePath,
  assetPrefix: basePath,
  images: {
    path: `${basePath}/_next/image`,
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // This will replace all `basePath` occurrences with an empty string
      config.output.publicPath = config.output.publicPath.replace(basePath, '');
    }
    return config;
  },
};


