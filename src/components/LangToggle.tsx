import { langPath } from "@/site";

export type Lang = "en" | "ko";

// "EN | KO" switch. Links to the other language's page, staying on the same
// section (e.g. /#projects -> /ko/#projects).
export default function LangToggle({ lang, section = "" }: { lang: Lang; section?: string }) {
  const hash = section ? `#${section}` : "";
  return (
    <div className="flex shrink-0 items-center rounded-full border border-ink-700 p-0.5 text-xs font-bold">
      {(["en", "ko"] as const).map((l) =>
        l === lang ? (
          <span key={l} className="rounded-full bg-ink-700 px-2.5 py-1 text-ink-100" aria-current="true">
            {l.toUpperCase()}
          </span>
        ) : (
          <a
            key={l}
            href={langPath[l] + hash}
            hrefLang={l}
            lang={l}
            aria-label={l === "ko" ? "한국어로 보기" : "View in English"}
            className="rounded-full px-2.5 py-1 text-ink-400 transition-colors hover:text-ink-100"
          >
            {l.toUpperCase()}
          </a>
        ),
      )}
    </div>
  );
}
