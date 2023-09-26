/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
