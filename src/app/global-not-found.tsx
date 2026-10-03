import type { Metadata } from "next";
import Document from "@/components/Document";
import { langPath } from "@/site";

// 404 page for any URL that isn't on the site. Needed because each language
// has its own root layout, so there's no single layout to build one from.
export const metadata: Metadata = {
  title: "Page not found",
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

export default function GlobalNotFound() {
  return (
    <Document lang="en">
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-300">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-100">Page not found</h1>
        <p className="mt-3">There&apos;s nothing at this address.</p>
        <div className="mt-8 flex gap-6 font-medium">
          <a href={langPath.en} className="text-ink-100 hover:text-accent-300">
            Go to home
          </a>
          <a href={langPath.ko} lang="ko" className="text-ink-100 hover:text-accent-300">
            한국어 홈
          </a>
        </div>
      </main>
    </Document>
  );
}
