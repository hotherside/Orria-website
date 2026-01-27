import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  /* 
   * If you are deploying to a specific path (e.g. https://username.github.io/repo-name),
   * you may need to set the basePath:
   */
  basePath: "/Orria-website",
  reactCompiler: true,
};

export default nextConfig;
