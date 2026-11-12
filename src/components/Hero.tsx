import { ArrowRight, Mail } from "lucide-react"
import { site } from "../data/site"
import { GitHubIcon, LinkedInIcon } from "./BrandIcons"
import { DottedName } from "./DottedName"
import { Portrait } from "./Portrait"

const socials = [
  { label: "GitHub", href: site.githubUrl, icon: GitHubIcon },
  { label: "LinkedIn", href: site.linkedinUrl, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
]

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-dvh items-center overflow-hidden bg-zinc-950 pb-16 lg:h-dvh lg:pb-0">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
        <Portrait className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 from-0% via-zinc-950/45 via-58% to-transparent" />
      </div>

      <div className="relative z-10 w-full pt-24 lg:pt-0">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="hero-rise text-[3.15rem] leading-[0.92] font-bold tracking-tight text-white sm:text-6xl lg:text-[4.7rem]">
              <span className="sr-only">{site.name}</span>
              <span aria-hidden="true" className="block whitespace-nowrap">
                {site.givenName}
              </span>
              <span aria-hidden="true" className="block whitespace-nowrap">
                <DottedName name={site.familyName} />
              </span>
            </h1>
            <p
              className="hero-rise mt-5 text-xl font-semibold text-emerald-400 sm:text-2xl"
              style={{ animationDelay: "120ms" }}
            >
              {site.title}
            </p>
            <p
              className="hero-rise mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-300 italic lg:mx-0"
              style={{ animationDelay: "220ms" }}
            >
              {site.introduction}
            </p>
            <div
              className="hero-rise mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-[5px] bg-emerald-500 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-emerald-400"
              >
                View my work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="rounded-[5px] border-2 border-zinc-700 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:border-white"
              >
                Contact me
              </a>
            </div>
            <ul
              className="hero-rise mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start"
              style={{ animationDelay: "420ms" }}
            >
              {socials.filter((item) => item.href).map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2.5 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      <Icon className="h-6 w-6" />
                      <span className="text-base font-medium">{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
