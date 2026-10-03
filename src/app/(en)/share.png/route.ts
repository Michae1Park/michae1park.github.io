import { content } from "@/content";
import { shareImage } from "@/og";

// Link-preview image for the English page, at /share.png.
export const dynamic = "force-static";

export function GET() {
  return shareImage(content);
}
