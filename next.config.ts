import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== Enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // <=== Required for static export (GitHub Pages)
  },
  /* 
   * If you are deploying to a subdirectory (e.g. username.github.io/repo-name),
   * you might need to set the basePath:
   * basePath: "/repo-name",
   */
};

export default nextConfig;
