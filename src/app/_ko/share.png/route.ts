import { contentKo } from "@/content.ko";
import { shareImage } from "@/og";

// Link-preview image for the Korean page, at /ko/share.png.
export const dynamic = "force-static";

export function GET() {
  return shareImage(contentKo);
}
