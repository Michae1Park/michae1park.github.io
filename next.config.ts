import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a fully static site into /out so it can be hosted on GitHub Pages.
  output: "export",
  // Write pages as folder/index.html (e.g. /ko/ -> out/ko/index.html) so
  // GitHub Pages serves them at clean URLs.
  trailingSlash: true,
  images: { unoptimized: true },
  // Enables app/global-not-found.tsx, the site-wide 404 page (each language
  // has its own root layout, so there's no shared one to build it from).
  experimental: { globalNotFound: true },
  // Dev only: extra hosts (besides localhost) allowed to open `npm run dev`,
  // e.g. this machine's LAN IP. Set per machine in .env.local (gitignored):
  // DEV_ORIGINS=192.168.1.10,other-host
  allowedDevOrigins: process.env.DEV_ORIGINS?.split(",").map((s) => s.trim()) ?? [],
};

export default nextConfig;
