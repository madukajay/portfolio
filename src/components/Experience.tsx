import { experience, experienceIntro } from "../data/site"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function Experience() {
  return (
    <section id="experience" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience"
            description={experienceIntro}
          />
        </Reveal>

        <div className="relative">
          <div className="absolute top-2 bottom-2 left-[27px] w-0.5 bg-emerald-200 sm:left-[35px]" />
          <div className="absolute bottom-0.5 left-[28px] h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-500 ring-4 ring-emerald-100 sm:left-[36px]" />

          <ol className="space-y-10">
            {experience.map((role, index) => (
              <Reveal key={role.period} as="li" delayMs={index * 40}>
                <div className="relative flex gap-4 sm:gap-6">
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-[5px] border-2 border-emerald-500 bg-white text-sm font-bold text-emerald-700 shadow-sm sm:h-[70px] sm:w-[70px]"
                    aria-hidden="true"
                  >
                    P
                  </div>
                  <div className="min-w-0 flex-1 pb-2">
                    <p className={`text-sm font-semibold ${role.current ? "text-emerald-600" : "text-zinc-500"}`}>
                      <time>{role.period}</time>
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-zinc-800 sm:text-xl">{role.title}</h3>
                    <p className="mt-1 font-semibold text-emerald-600">{role.company}</p>
                    <p className="text-sm text-zinc-500">{role.location}</p>
                    <p className="mt-3 mb-3 text-sm leading-relaxed text-zinc-600">{role.summary}</p>
                    <ul className="space-y-2 text-sm leading-relaxed text-zinc-600">
                      {role.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {role.technologies.map((technology) => (
                        <li key={technology}>
                          <span className="inline-flex rounded-[5px] bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                            {technology}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
