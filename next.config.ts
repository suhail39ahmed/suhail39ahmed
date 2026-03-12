import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Allow reading MDX files
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default nextConfig;
