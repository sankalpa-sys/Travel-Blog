import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              hostname: "images.pexels.com",
              protocol: "https"
          },
          {
              hostname: "image.tmdb.org",
              protocol: "https"
          }
      ]
  }
};

export default nextConfig;
