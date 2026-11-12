type DottedNameProps = {
  name: string
  dotClassName?: string
}

export function DottedName({
  name,
  dotClassName = "bg-emerald-400",
}: DottedNameProps) {
  const index = name.indexOf("i")
  if (index === -1) return <>{name}</>

  return (
    <>
      {name.slice(0, index)}<span className="relative inline-block">i<span aria-hidden="true" className={`pointer-events-none absolute top-[0.12em] left-1/2 h-[0.22em] w-[0.22em] -translate-x-1/2 rounded-full ${dotClassName}`} /></span>{name.slice(index + 1)}
    </>
  )
}
