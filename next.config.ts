import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Christiana-s-Porfolio",
  assetPrefix: "/Christiana-s-Porfolio/",
  reactCompiler: true,
};

export default nextConfig;
