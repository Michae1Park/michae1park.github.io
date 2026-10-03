import { contentKo } from "@/content.ko";
import { pageMetadata } from "@/site";
import Document from "@/components/Document";
// Korean font (Pretendard), designed to pair with Inter. Only the pieces for
// characters actually on the page get downloaded.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";

export const metadata = pageMetadata(contentKo, "ko");

// Disabled: the leading "_" in app/_ko keeps this route out of the site.
// Rename the folder back to app/ko to re-enable the Korean page.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Document lang="ko">{children}</Document>;
}
