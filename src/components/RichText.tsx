import { Fragment } from "react";

// Renders a string, turning [text](url) into links, **text** into bold,
// ![alt](src) into a small inline icon, and \n into a line break.
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(!?\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) {
          return (
            <strong key={i} className="font-semibold text-ink-100">
              {bold[1]}
            </strong>
          );
        }
        const icon = part.match(/^!\[([^\]]+)\]\(([^)]+)\)$/);
        if (icon) {
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={icon[2]}
              alt={icon[1]}
              title={icon[1]}
              className="inline-block -my-1 h-[1.25em] w-auto align-[-0.25em]"
            />
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!link) {
          return part.split("\n").map((line, j) => (
            <Fragment key={`${i}-${j}`}>
              {j > 0 && <br />}
              {line}
            </Fragment>
          ));
        }
        const [, label, href] = link;
        return (
          <a
            key={i}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer noopener"
            className="font-medium text-ink-100 hover:text-accent-300 focus-visible:text-accent-300"
          >
            {label}
          </a>
        );
      })}
    </>
  );
}
