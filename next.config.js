/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      "via.placeholder.com",
      "encrypted-tbn0.gstatic.com",
      "placeimg.com",
      "cdn.chec.io",
    ],
  },
};
