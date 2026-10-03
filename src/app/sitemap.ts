import type { MetadataRoute } from "next";
import { langPath, siteUrl } from "@/site";

export const dynamic = "force-static";

// English only while the Korean page is disabled (app/_ko). To re-enable:
// const languages = { en: siteUrl + langPath.en, ko: siteUrl + langPath.ko };
// return Object.values(languages).map((url) => ({ url, alternates: { languages } }));
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl + langPath.en }];
}
