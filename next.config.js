/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "liontrex.com",
        port: "",
        pathname: "/images/user/**",
      },
    ],
  },
};

module.exports = nextConfig;
