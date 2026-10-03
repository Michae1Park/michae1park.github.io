"use client";

import Image from "next/image";
import { useRef } from "react";

// Project thumbnail that opens the full-size image in a dialog when clicked.
// The full-size copy of "/projects/x.webp" lives at "/projects/full/x.webp";
// SVG placeholders scale on their own, so they open themselves.
export default function ZoomableImage({
  src,
  className,
  labels,
}: {
  src: string;
  className?: string;
  labels: { open: string; close: string };
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const isSvg = src.endsWith(".svg");
  const fullSrc = isSvg ? src : src.replace("/projects/", "/projects/full/");

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label={labels.open}
        className="relative block cursor-zoom-in"
      >
        <Image src={src} alt="" width={200} height={120} className={className} />
      </button>

      <dialog
        ref={dialog}
        // Clicking the dark backdrop (the dialog itself, not its content) closes it.
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85"
      >
        <Image
          src={fullSrc}
          alt=""
          width={1920}
          height={1440}
          // Photos show at their own size (up to the screen); vector SVGs have no
          // pixel size to go by, so give them a large width and let them scale.
          className={`h-auto max-h-[90vh] rounded ${isSvg ? "w-[min(94vw,1100px)] bg-ink-900" : "w-auto max-w-[94vw]"}`}
          onClick={() => dialog.current?.close()}
        />
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label={labels.close}
          className="fixed right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-lg leading-none text-white hover:bg-black/80"
        >
          ✕
        </button>
      </dialog>
    </>
  );
}
