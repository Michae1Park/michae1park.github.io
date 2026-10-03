import type { Metadata } from "next";
import type { Content } from "@/content";
import type { Lang } from "@/components/LangToggle";

// Where the site is published. Used for absolute URLs in link previews,
// the sitemap, and the language alternates below.
export const siteUrl = "https://michae1park.github.io";

// Path of each language's home page.
export const langPath: Record<Lang, string> = { en: "/", ko: "/ko/" };

// <head> tags for one language's page: title and description, links to the
// other language version (hreflang), and link previews (Open Graph / X).
export function pageMetadata(c: Content, lang: Lang): Metadata {
  const description = [`${c.name} — ${c.title}.`, c.tagline].join(" ").trim();
  return {
    metadataBase: new URL(siteUrl),
    title: c.name,
    description,
    alternates: {
      canonical: langPath[lang],
      languages: { en: langPath.en, ko: langPath.ko, "x-default": langPath.en },
    },
    openGraph: {
      type: "profile",
      url: langPath[lang],
      siteName: c.name,
      title: `${c.name} — ${c.title}`,
      description,
      locale: lang === "ko" ? "ko_KR" : "en_US",
      alternateLocale: lang === "ko" ? "en_US" : "ko_KR",
      // Drawn at build time by app/(en)/share.png and app/ko/share.png.
      images: [{ url: `${langPath[lang]}share.png`, width: 1200, height: 630, alt: `${c.name} — ${c.title}` }],
    },
    twitter: { card: "summary_large_image" },
    // Drawn at build time by app/icon.png and app/apple-icon.png.
    icons: { icon: "/icon.png", apple: "/apple-icon.png" },
    // The site is already dark; stop the Dark Reader extension from rewriting
    // inline styles before hydration (causes hydration mismatch warnings).
    other: { "darkreader-lock": "true" },
  };
}
