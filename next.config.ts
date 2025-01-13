import type { NextConfig } from "next";

import "@/env/server";
import "@/env/client";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/a/uo6z56scs7/**",
      },
    ],
  },
};

export default nextConfig;
