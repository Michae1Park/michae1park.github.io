"use client";

import { useEffect, useState } from "react";

// Soft "flashlight" glow that follows the mouse cursor. It sits behind the
// page content, so it lights up the background without washing out text, and
// uses the accent color so it matches the links and highlights.
// It only shows on large screens (1024px and wider, Tailwind's "lg"); on
// smaller screens and phones it is hidden. Change "lg:block" below to
// "md:block" (768px) or "xl:block" (1280px) to move that cutoff.
// Raise or lower STRENGTH (a percentage) to make the glow more or less visible.
const STRENGTH = 5;

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 hidden lg:block"
      style={{
        background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, color-mix(in srgb, var(--color-accent-500) ${STRENGTH}%, transparent), transparent 80%)`,
      }}
    />
  );
}
