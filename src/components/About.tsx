import { Cpu, Network, Workflow } from "lucide-react"
import { about } from "../data/site"
import { Portrait } from "./Portrait"
import { Reveal } from "./Reveal"

const icons = [Cpu, Network, Workflow]

export function About() {
  return (
    <section id="about" className="border-t border-zinc-900 bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-600 uppercase">
            {about.eyebrow}
          </p>
          <h2 className="mb-6 max-w-md text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            {about.title}
          </h2>
          <div className="space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-zinc-600">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {about.traits.map((trait, index) => {
              const Icon = icons[index] ?? Network
              return (
                <div
                  key={trait.title}
                  className={index > 0 ? "lg:border-l lg:border-zinc-200 lg:pl-4 sm:border-l sm:border-zinc-200 sm:pl-4 md:border-0 md:pl-0" : ""}
                >
                  <Icon className="mb-3 h-5 w-5 text-emerald-600" aria-hidden="true" />
                  <h3 className="mb-1 text-sm font-semibold text-zinc-900">{trait.title}</h3>
                  <p className="text-xs leading-relaxed text-zinc-500">{trait.text}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
        <Reveal delayMs={120} className="h-full min-h-[320px]">
          <Portrait className="h-full min-h-[420px] rounded-2xl" />
        </Reveal>
      </div>
    </section>
  )
}
