import type { NextConfig } from "next";
import { API_URL } from "./constants/api";

console.log({
  protocol: API_URL.split("://")[0] as "http" | "https",
  hostname: API_URL.split("://")[1].split(":")[0],
  port: API_URL.split(":")[2] || "",
  pathname: "/avatars/**.webp",
});

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.tsx",
        },
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: API_URL.split("://")[0] as "http" | "https",
        hostname: API_URL.split("://")[1].split(":")[0],
        port: API_URL.split(":")[2] || "",
        pathname: "/avatars/**.webp",
      },
    ],
  },
};

export default nextConfig;
