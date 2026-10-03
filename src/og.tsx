import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import type { Content } from "@/content";

// Images drawn at build time: the link-preview card (app/(en)/share.png,
// app/ko/share.png) and the browser-tab / home-screen icons (app/icon.png,
// app/apple-icon.png). Colors match the site theme (zinc + indigo).
const colors = { bg: "#18181b", text: "#f4f4f5", muted: "#a1a1aa", accent: "#a5b4fc", ring: "#3f3f46" };

// Pretendard covers both Latin and Korean.
const font = (weight: string) =>
  readFile(join(process.cwd(), `node_modules/pretendard/dist/public/static/alternative/Pretendard-${weight}.ttf`));

export const shareImageSize = { width: 1200, height: 630 };

export async function shareImage(c: Content) {
  const [bold, medium, photo] = await Promise.all([
    font("Bold"),
    font("Medium"),
    // The image renderer can't read WebP, so hand it a PNG.
    sharp(join(process.cwd(), "public", c.photo)).resize(300, 300).png().toBuffer(),
  ]);
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 72,
          padding: "0 96px",
          background: colors.bg,
          fontFamily: "Pretendard",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={300}
          height={300}
          alt=""
          style={{ borderRadius: 9999, border: `6px solid ${colors.ring}` }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 700, color: colors.text, lineHeight: 1.1 }}>{c.name}</div>
          {c.altName && <div style={{ marginTop: 12, fontSize: 36, fontWeight: 500, color: colors.muted }}>{c.altName}</div>}
          <div style={{ marginTop: 32, fontSize: 44, fontWeight: 500, color: colors.accent }}>{c.title}</div>
          <div style={{ marginTop: 48, fontSize: 28, fontWeight: 500, color: colors.muted }}>michae1park.github.io</div>
        </div>
      </div>
    ),
    {
      ...shareImageSize,
      fonts: [
        { name: "Pretendard", data: bold, weight: 700 },
        { name: "Pretendard", data: medium, weight: 500 },
      ],
    },
  );
}

// "MP" monogram on a dark square. Home-screen icons stay square since the
// phone rounds the corners itself.
export async function monogram(size: number, rounded: boolean) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.bg,
          borderRadius: rounded ? size * 0.22 : 0,
          color: colors.accent,
          fontFamily: "Pretendard",
          fontWeight: 700,
          fontSize: size * 0.5,
          letterSpacing: -size * 0.02,
        }}
      >
        MP
      </div>
    ),
    { width: size, height: size, fonts: [{ name: "Pretendard", data: await font("Bold"), weight: 700 }] },
  );
}
