import { contentKo } from "@/content.ko";
import { pageMetadata } from "@/site";
import Document from "@/components/Document";
// Korean font (Pretendard), designed to pair with Inter. Only the pieces for
// characters actually on the page get downloaded.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";

export const metadata = pageMetadata(contentKo, "ko");

export default function RootLayout({ children }: LayoutProps<"/ko">) {
  return <Document lang="ko">{children}</Document>;
}
