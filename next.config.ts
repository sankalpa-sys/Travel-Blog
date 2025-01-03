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
          },
          {
              hostname: "i0.wp.com",
              protocol: "https"
          },
          {
              hostname: "www.vivaanadventure.com",
              protocol: "https"
          }, {
              hostname: "spotted-vole-227.convex.cloud",
              protocol: "https"
          },{
              hostname: "img.clerk.com",
              protocol: "https"
          },
      ]
  }
};

export default nextConfig;
