import { monogram } from "@/og";

// Browser-tab icon, at /icon.png. A route handler (not the icon.tsx
// convention) so the static export writes a real .png file for GitHub Pages.
export const dynamic = "force-static";

export function GET() {
  return monogram(64, true);
}
