import Image from "next/image";
import type { Content } from "@/content";
import Nav from "@/components/Nav";
import ProjectFilter from "@/components/ProjectFilter";
import ZoomableImage from "@/components/ZoomableImage";
import type { Lang } from "@/components/LangToggle";
import RichText from "@/components/RichText";
import SocialIcon from "@/components/SocialIcon";

// Small uppercase labels (section headings, dates) suit English; Korean has no
// capitals, so it gets a larger size and normal letter spacing instead.
const koLabel = (lang: Lang, en: string, ko: string) => (lang === "ko" ? ko : en);

function SectionHeading({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <h2
      className={`mb-8 font-bold text-ink-100 ${koLabel(lang, "text-sm uppercase tracking-widest", "text-base")}`}
    >
      {children}
    </h2>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const accentPill =
  "flex items-center rounded-full bg-accent-400/10 px-3 py-1 text-xs font-medium leading-5 text-accent-300";
const outlinePill = "rounded-full border border-ink-700 px-2.5 py-0.5 text-xs leading-5 text-ink-400";

// Tools used. Accent pills on experience; "quiet" outlined pills on projects,
// where the keyword tags are the ones that should stand out.
function Skills({ skills, label, quiet }: { skills: string[]; label: string; quiet?: boolean }) {
  if (skills.length === 0) return null;
  return (
    <ul className="mt-2 flex flex-wrap" aria-label={label}>
      {skills.map((skill) => (
        <li key={skill} className="mr-1.5 mt-2">
          <div className={quiet ? outlinePill : accentPill}>{skill}</div>
        </li>
      ))}
    </ul>
  );
}

// Project keywords (methods and problems), highlighted with accent pills.
function Tags({ tags, label }: { tags: string[]; label: string }) {
  if (tags.length === 0) return null;
  return (
    <ul className="mt-2 flex flex-wrap" aria-label={label}>
      {tags.map((tag) => (
        <li key={tag} className="mr-1.5 mt-2">
          <div className={accentPill}>{tag}</div>
        </li>
      ))}
    </ul>
  );
}

// Extra links under a project's description (report, poster, video, ...).
// "relative" keeps them clickable above the card's whole-card link. Links to
// another part of this page (e.g. "#patents") open in place, not in a new tab.
function ExtraLinks({ links }: { links: { label: string; url: string }[] }) {
  return (
    <ul className="relative mt-2 flex flex-wrap gap-x-4 gap-y-1">
      {links.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            {...(link.url.startsWith("#") ? {} : { target: "_blank", rel: "noreferrer noopener" })}
            className="group/link inline-flex items-baseline text-sm font-medium text-ink-300 hover:text-accent-300 focus-visible:text-accent-300"
          >
            {link.label}
            <ArrowIcon />
          </a>
        </li>
      ))}
    </ul>
  );
}

// Label for a group inside a section, e.g. "Papers" and "Patents" under Publications.
function SubHeading({ lang, id, children }: { lang: Lang; id?: string; children: React.ReactNode }) {
  return (
    <h3
      id={id}
      className={`mb-6 scroll-mt-24 font-semibold text-ink-400 ${koLabel(lang, "text-xs uppercase tracking-widest", "text-sm")}`}
    >
      {children}
    </h3>
  );
}

// Dates only wrap at the dash, e.g. "Mar 2018 —" / "Aug 2023".
function DateLabel({ lang, children }: { lang: Lang; children: string }) {
  const parts = children.split(" — ");
  return (
    <p
      className={`font-semibold text-ink-400 ${koLabel(lang, "text-xs uppercase tracking-wide", "text-sm")}`}
    >
      {parts.map((part, i) => (
        <span key={i} className="whitespace-nowrap">
          {part}
          {i < parts.length - 1 && " — "}
        </span>
      ))}
    </p>
  );
}

// Card with the hover highlight effect used for experience and projects.
// Hovering one card dims the others (on large screens). "muted" greys the card
// out (e.g. unfinished projects) and "badges" add small labels after the title;
// "accent" ones (e.g. a role like PI) stand out, the rest (e.g. "In progress") stay muted.
function Card({
  left,
  title,
  subtitle,
  url,
  badges,
  muted,
  children,
}: {
  left: React.ReactNode;
  title: string;
  subtitle?: string;
  url?: string;
  badges?: { label: string; accent?: boolean }[];
  muted?: boolean;
  children?: React.ReactNode;
}) {
  const fade = muted ? "opacity-50 grayscale" : "";
  const lastSpace = title.lastIndexOf(" ") + 1;
  const titleStart = title.slice(0, lastSpace);
  const titleEnd = title.slice(lastSpace);

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-ink-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <div className={`z-10 mb-2 mt-1 sm:col-span-2 ${fade}`}>{left}</div>
        <div className={`z-10 sm:col-span-6 ${fade}`}>
          <h3 className="font-medium leading-snug text-ink-100">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                className="group/link inline-flex items-baseline text-base font-medium leading-tight text-ink-100 hover:text-accent-300 focus-visible:text-accent-300"
              >
                {/* Makes the whole card clickable on large screens */}
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                  {titleStart}
                  {/* Keep the arrow on the same line as the last word */}
                  <span className="inline-block whitespace-nowrap">
                    {titleEnd}
                    <ArrowIcon />
                  </span>
                </span>
              </a>
            ) : (
              <span className="text-base leading-tight">{title}</span>
            )}
            {badges?.map((b) => (
              <span
                key={b.label}
                className={`ml-2 inline-block rounded-full border px-2 py-0.5 align-middle text-xs font-medium ${
                  b.accent ? "border-accent-300/40 text-accent-300" : "border-ink-600 text-ink-300"
                }`}
              >
                {b.label}
              </span>
            ))}
          </h3>
          {subtitle && <p className="mt-1 text-sm text-ink-300">{subtitle}</p>}
          {children}
        </div>
      </div>
    </li>
  );
}

// The whole page, in one language. Rendered by app/(en)/page.tsx (English) and
// app/ko/page.tsx (Korean).
export default function Home({ c, lang }: { c: Content; lang: Lang }) {
  const l = c.labels;
  // Projects marked "hidden" stay in the content file but don't appear on the page.
  const shownProjects = c.projects.filter((project) => !project.hidden);
  const zoomLabels = {
    open: koLabel(lang, "View full-size image", "전체 크기로 보기"),
    close: koLabel(lang, "Close", "닫기"),
  };

  return (
    // Korean wraps between words (keep-all), not mid-word like the default.
    <div lang={lang} className={lang === "ko" ? "break-keep" : undefined}>
      <a
        href="#content"
        className="absolute left-0 top-0 z-50 block -translate-x-full rounded bg-accent-300 px-4 py-3 text-sm font-bold uppercase tracking-widest text-ink-900 focus-visible:translate-x-0"
      >
        {l.skipToContent}
      </a>

      <Nav lang={lang} labels={l} showEssays={c.essays.length > 0} />

      <div className="mx-auto max-w-2xl px-6 pb-12 pt-12 md:pt-20">
        {/* About */}
        <header id="about" className="scroll-mt-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight text-ink-100 sm:text-5xl">
              {c.name}
            </h1>
            {c.altName && <p className="mt-2 text-sm text-ink-400">{c.altName}</p>}
            <h2 className="mt-3 text-lg font-medium tracking-tight text-ink-100 sm:text-xl">
              {c.title}
            </h2>
            {c.tagline && <p className="mt-4 max-w-md leading-normal">{c.tagline}</p>}

            <Image
              src={c.photo}
              alt={l.photoAlt}
              width={160}
              height={160}
              priority
              className="mt-8 h-32 w-32 rounded-full object-cover ring-2 ring-ink-700 sm:h-40 sm:w-40"
            />
          </div>

          <ul className="mt-8 list-disc space-y-2 pl-5 marker:text-ink-500">
            {c.bio.map((line) =>
              typeof line === "string" ? (
                <li key={line}>
                  <RichText text={line} />
                </li>
              ) : (
                <li key={line.text}>
                  <RichText text={line.text} />
                  <ul className="mt-1 list-[circle] space-y-1 pl-5">
                    {line.items.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                </li>
              ),
            )}
          </ul>

          <ul className="mt-8 flex items-center gap-5" aria-label={l.socialMedia}>
            {c.socials.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.icon}
                  title={s.icon}
                  className="block hover:text-ink-100"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </header>

        <main id="content" className="pt-24">
          {/* Experience */}
          <section id="experience" className="mb-16 scroll-mt-24 md:mb-24">
            <SectionHeading lang={lang}>{l.experience}</SectionHeading>
            <ol className="group/list">
              {c.experience.map((job) => (
                <Card
                  key={job.role + job.company}
                  title={job.role}
                  subtitle={job.company}
                  url={"url" in job ? (job.url as string) : undefined}
                  left={<DateLabel lang={lang}>{job.dates}</DateLabel>}
                >
                  <p className="mt-2 text-sm leading-normal">
                    <RichText text={job.description} />
                  </p>
                  <Skills skills={job.skills} label={l.technologiesUsed} />
                </Card>
              ))}
            </ol>
            {c.resume && (
              <a
                href={c.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="group/link inline-flex items-baseline font-semibold leading-tight text-ink-100 hover:text-accent-300"
              >
                <span className="border-b border-transparent pb-px transition group-hover/link:border-accent-300">
                  {l.viewResume}
                </span>
                <ArrowIcon />
              </a>
            )}
          </section>

          {/* Projects */}
          <section id="projects" className="mb-16 scroll-mt-24 md:mb-24">
            <SectionHeading lang={lang}>{l.projects}</SectionHeading>
            <ProjectFilter
              labels={l}
              groups={[
                ...c.projectCategories.map((cat) => ({
                  ...cat,
                  projects: shownProjects.filter((project) => project.categories.includes(cat.id)),
                })),
                { id: "all", name: l.showAll, projects: shownProjects },
              ].map((group) => ({
                id: group.id,
                name: group.name,
                items: (
                  <ul>
                    {group.projects
                      .map((project) => (
                        <Card
                          key={project.name}
                          title={project.name}
                          subtitle={project.years}
                          badges={[
                            ...(project.role ? [{ label: project.role, accent: true }] : []),
                            ...(project.inProgress ? [{ label: l.inProgress }] : []),
                          ]}
                          muted={"inProgress" in project && project.inProgress}
                          left={
                            "image" in project && project.image ? (
                              <>
                                <ZoomableImage src={project.image} labels={zoomLabels} className="rounded border-2 border-ink-200/10 transition group-hover:border-ink-200/30" />
                                {"extraImages" in project &&
                                  project.extraImages?.map((src) => (
                                    <div key={src} className="mt-2">
                                      <ZoomableImage src={src} labels={zoomLabels} className="rounded border-2 border-ink-200/10 transition group-hover:border-ink-200/30" />
                                    </div>
                                  ))}
                                {"imageCredit" in project && project.imageCredit && (
                                  <p className="mt-1 text-xs text-ink-500">
                                    {l.photoCredit}:{" "}
                                    {"imageCreditUrl" in project && project.imageCreditUrl ? (
                                      <a
                                        href={project.imageCreditUrl}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="underline decoration-ink-600 underline-offset-2 hover:text-ink-300"
                                      >
                                        {project.imageCredit}
                                      </a>
                                    ) : (
                                      project.imageCredit
                                    )}
                                  </p>
                                )}
                              </>
                            ) : null
                          }
                        >
                          <p className="mt-2 text-sm leading-normal">
                            <RichText text={project.description} />
                          </p>
                          {"links" in project && project.links && <ExtraLinks links={project.links} />}
                          <Tags tags={project.tags} label={l.projectKeywords} />
                          <Skills skills={project.skills} label={l.technologiesUsed} quiet />
                        </Card>
                      ))}
                  </ul>
                ),
              }))}
            />
          </section>

          {/* Publications: papers and patents, as two labeled groups */}
          <section id="publications" className="mb-16 scroll-mt-24 md:mb-24">
            <SectionHeading lang={lang}>{l.publications}</SectionHeading>
            {/* One hover group, so hovering any entry dims both papers and patents */}
            <div className="group/list">
              <SubHeading lang={lang}>{l.papers}</SubHeading>
              <ol>
                {c.publications.map((pub) => (
                  <Card
                    key={pub.title}
                    title={pub.title}
                    url={"url" in pub ? pub.url : undefined}
                    left={<DateLabel lang={lang}>{pub.year}</DateLabel>}
                  >
                    <p className="mt-2 text-sm leading-normal">
                      <RichText text={pub.authors} />
                    </p>
                    <p className="mt-1 text-sm italic leading-normal text-ink-400">
                      {pub.venue}
                    </p>
                  </Card>
                ))}
              </ol>

              <SubHeading lang={lang} id="patents">
                {l.patents}
              </SubHeading>
              <ol>
                {c.patents.map((patent) => (
                  <Card
                    key={patent.title}
                    title={patent.title}
                    url={"url" in patent ? patent.url : undefined}
                    left={<DateLabel lang={lang}>{patent.year}</DateLabel>}
                  >
                    <p className="mt-2 text-sm leading-normal">
                      <RichText text={patent.authors} />
                    </p>
                    <p className="mt-1 text-sm italic leading-normal text-ink-400">
                      {"number" in patent && patent.number ? `${patent.number} · ${patent.status}` : patent.status}
                    </p>
                  </Card>
                ))}
              </ol>
            </div>
          </section>

          {/* Essays (hidden when there are none) */}
          {c.essays.length > 0 && (
            <section id="essays" className="mb-16 scroll-mt-24 md:mb-24">
              <SectionHeading lang={lang}>{l.essays}</SectionHeading>
              <ol className="group/list">
                {c.essays.map((essay) => (
                  <Card
                    key={essay.title}
                    title={essay.title}
                    url={essay.url}
                    left={<DateLabel lang={lang}>{essay.date}</DateLabel>}
                  >
                    {"description" in essay && essay.description && (
                      <p className="mt-2 text-sm leading-normal">
                        <RichText text={essay.description} />
                      </p>
                    )}
                  </Card>
                ))}
              </ol>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
