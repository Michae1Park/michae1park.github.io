import { content } from "@/content";
import { pageMetadata } from "@/site";
import Document from "@/components/Document";

export const metadata = pageMetadata(content, "en");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <Document lang="en">{children}</Document>;
}
