import { skillGroups } from "../data/site"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function Technologies() {
  return (
    <section id="technologies" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Technologies"
            title="Technologies I work with"
            description="Languages, systems, and tools I use professionally and on independent projects. I pick the one that fits the job."
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delayMs={index * 60}>
              <h3 className="mb-4 text-lg font-semibold text-zinc-900">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex items-center rounded-[5px] border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
