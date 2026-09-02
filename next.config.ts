import type { NextConfig } from "next";

// Vercel does its own packaging and its build step fails on standalone output
// with Next 16.3.x, looking for a .next/next-server.js.nft.json it cannot
// find. The Dockerfile copies .next/standalone, so keep emitting it everywhere
// except on Vercel.
const nextConfig: NextConfig = {
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
};

export default nextConfig;
