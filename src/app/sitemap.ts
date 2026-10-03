import type { MetadataRoute } from "next";
import { langPath, siteUrl } from "@/site";

export const dynamic = "force-static";

// One entry per language, each listing the other as its alternate.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: siteUrl + langPath.en, ko: siteUrl + langPath.ko };
  return Object.values(languages).map((url) => ({ url, alternates: { languages } }));
}
