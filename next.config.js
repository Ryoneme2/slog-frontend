/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
};

module.exports = nextConfig;
