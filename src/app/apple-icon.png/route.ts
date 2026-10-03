import { monogram } from "@/og";

// Home-screen icon for iPhone/iPad, at /apple-icon.png.
export const dynamic = "force-static";

export function GET() {
  return monogram(180, false);
}
