/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/json_yaml_visuazlier',
  // assetPrefix: '/json_yaml_visuazlier/',
  assetPrefix: './',
};

module.exports = nextConfig;
