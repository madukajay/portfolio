import { projects } from "../data/site"
import { OptionalAnchor } from "./OptionalAnchor"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description="Network monitoring, analytics, and management work from Paraqum Technologies, plus an independent business project. Links are shown only where a public URL exists."
          />
        </Reveal>

        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {projects.map((project, index) => (
            <Reveal key={project.title}>
              <article className="grid gap-6 py-10 lg:grid-cols-[7rem_1fr_auto] lg:gap-10">
                <p className="text-sm font-semibold tracking-[0.18em] text-emerald-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{project.title}</h3>
                  <p className="mt-2 text-sm font-medium text-emerald-700">{project.context}</p>
                  <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600">{project.summary}</p>
                  {project.points.length > 0 ? (
                    <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-relaxed text-zinc-600">
                      {project.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {project.technologies.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li key={technology}>
                          <span className="inline-flex rounded-[5px] border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700">
                            {technology}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-5 text-sm text-zinc-500">Technology details to be added.</p>
                  )}
                </div>
                <div className="flex flex-row gap-4 lg:flex-col lg:items-end lg:pt-1">
                  <OptionalAnchor
                    href={project.githubUrl}
                    className="text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-500"
                    pendingClassName="text-sm font-semibold text-zinc-500"
                  >
                    GitHub
                  </OptionalAnchor>
                  <OptionalAnchor
                    href={project.demoUrl}
                    className="text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-500"
                    pendingClassName="text-sm font-semibold text-zinc-500"
                  >
                    Live demo
                  </OptionalAnchor>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
