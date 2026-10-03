import { Inter } from "next/font/google";
import Spotlight from "@/components/Spotlight";
import type { Lang } from "@/components/LangToggle";
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// The <html> shell shared by both languages. Each language has its own root
// layout (app/(en)/layout.tsx, app/ko/layout.tsx) so <html lang> is correct.
export default function Document({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${inter.variable} antialiased`}>
      <body className="bg-ink-900 leading-relaxed text-ink-300 selection:bg-accent-300 selection:text-accent-900">
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
