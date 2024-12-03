/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    WEBSITE_NAME: process.env.WEBSITE_NAME,
  }
};

export default nextConfig;
