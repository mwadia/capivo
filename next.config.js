/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/my-app',
  target: 'experimental-serverless-trace',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add any other pages you want to export
    };
  },
};

module.exports = nextConfig;
