/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'experimental-serverless-trace',
  trailingSlash: true,
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      // Add any other pages you want to export
    };
  },
  basePath: '/my-app',
};
module.exports = nextConfig;
