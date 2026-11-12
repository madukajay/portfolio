type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  tone?: "light" | "dark"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark"

  return (
    <div className="mb-12">
      <p
        className={`mb-3 text-sm font-semibold tracking-wide uppercase ${dark ? "text-emerald-400" : "text-emerald-600"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-zinc-900"} ${description ? "mb-4" : ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed ${dark ? "text-zinc-300" : "text-zinc-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
