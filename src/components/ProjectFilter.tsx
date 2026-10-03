"use client";

import { useState } from "react";

type Group = { id: string; name: string; items: React.ReactNode };

// Category buttons ("Featured", "Computer Vision", ..., "All") above the
// projects. The first group is shown until another button is picked.
export default function ProjectFilter({
  groups,
  labels,
}: {
  groups: Group[];
  labels: { filterProjects: string };
}) {
  const [selected, setSelected] = useState(groups[0]?.id);
  const visible = groups.find((g) => g.id === selected);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label={labels.filterProjects}>
        {groups.map((o) => {
          const active = o.id === selected;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(o.id)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                active
                  ? "border-accent-300/40 bg-accent-400/10 text-accent-300"
                  : "border-ink-700 text-ink-400 hover:border-ink-500 hover:text-ink-100"
              }`}
            >
              {o.name}
            </button>
          );
        })}
      </div>

      {/* One hover group, so hovering any project dims the rest */}
      <div className="group/list">{visible?.items}</div>
    </>
  );
}
