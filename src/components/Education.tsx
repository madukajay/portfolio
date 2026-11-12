import { GraduationCap } from "lucide-react"
import { education } from "../data/site"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function Education() {
  return (
    <section id="education" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="University of Moratuwa"
            description="An electronics and telecommunications engineering degree, completed with first-class standing."
          />
        </Reveal>
        <Reveal>
          <article className="grid gap-8 border-t border-zinc-200 pt-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-[5px] border-2 border-emerald-500 text-emerald-700">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-emerald-600">{education.period}</p>
              <h3 className="mt-1 text-xl font-bold text-zinc-900">{education.credential}</h3>
              <p className="mt-1 font-medium text-zinc-700">{education.major}</p>
              <p className="mt-2 text-sm text-zinc-500">
                {education.school} · {education.location}
              </p>
            </div>
            <ul className="space-y-2 text-sm text-zinc-700 md:text-right">
              {education.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
