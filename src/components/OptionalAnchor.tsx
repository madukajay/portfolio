import type { ReactNode } from "react"
import { isExternal } from "../lib/cn"

type OptionalAnchorProps = {
  href: string
  className: string
  pendingClassName?: string
  children: ReactNode
}

export function OptionalAnchor({
  href,
  className,
  pendingClassName,
  children,
}: OptionalAnchorProps) {
  if (!href) {
    return (
      <span className={pendingClassName ?? `${className} cursor-default`}>
        {children}
        <span className="font-normal text-zinc-400"> · pending</span>
      </span>
    )
  }

  const external = isExternal(href)

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  )
}
