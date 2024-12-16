import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/a/uo6z56scs7/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/600x400/**",
      },
    ],
  },
};

export default nextConfig;
