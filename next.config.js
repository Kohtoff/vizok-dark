/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.SERVER_URL,
    GOOGLE_API_TOKEN: process.env.GOOGLE_API_TOKEN,
    GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
}

module.exports = nextConfig
