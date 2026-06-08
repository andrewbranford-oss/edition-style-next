import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? "/edition-style-next" : "",
  assetPrefix: isProd ? "/edition-style-next/" : "",
};

export default nextConfig;
