// next.config.js
const path = require('path');

module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  // Add this configuration to tell Next.js where to find your pages directory
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  }
};
