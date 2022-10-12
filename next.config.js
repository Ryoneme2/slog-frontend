/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  excludeFile: (str) => /\*.{spec,test,cy}.{tsx.ts}/.test(str),
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\*.cy.tsx$/,
    });
    return config;
  },
};

module.exports = nextConfig;
