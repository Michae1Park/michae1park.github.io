"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Content } from "@/content";
import LangToggle, { type Lang } from "@/components/LangToggle";

const allSections = [
  "about",
  "experience",
  "projects",
  "publications",
  "essays",
] as const;

// Sticky top bar with section links and an English/Korean toggle. The link for
// the section currently on screen gets highlighted.
export default function Nav({
  lang,
  labels,
  showEssays,
}: {
  lang: Lang;
  labels: Content["labels"];
  showEssays: boolean;
}) {
  const sections = useMemo(
    () => allSections.filter((id) => id !== "essays" || showEssays),
    [showEssays],
  );
  const [active, setActive] = useState("");
  // After a nav click, keep that link highlighted while the page scrolls there.
  const clickedAt = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (Date.now() - clickedAt.current < 1000) return;
      // At the very bottom, highlight the last section.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        setActive(sections[sections.length - 1]);
        return;
      }
      // Otherwise, the last section whose top has passed 40% of the screen.
      const current = sections.findLast((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top < window.innerHeight * 0.4;
      });
      setActive(current ?? sections[0]);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <header className="sticky top-0 z-20 bg-ink-900/75 backdrop-blur">
      <nav className="mx-auto flex max-w-2xl items-center gap-4 px-6 py-4">
        {/* Korean has no capitals, so it gets a larger size and normal spacing
            instead of small, widely spaced uppercase. */}
        <ul
          className={`flex flex-1 flex-wrap justify-center gap-x-4 gap-y-1 font-bold sm:justify-start sm:gap-x-6 ${
            lang === "ko" ? "text-sm" : "text-xs uppercase tracking-wider sm:tracking-widest"
          }`}
        >
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => {
                  clickedAt.current = Date.now();
                  setActive(id);
                }}
                className={`block py-1 transition-colors ${
                  active === id ? "text-ink-100" : "text-ink-400 hover:text-ink-100"
                }`}
              >
                {labels[id]}
              </a>
            </li>
          ))}
        </ul>
        <LangToggle lang={lang} section={active} />
      </nav>
    </header>
  );
}

