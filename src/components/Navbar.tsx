import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { navItems, site } from "../data/site"
import { cn } from "../lib/cn"
import { DottedName } from "./DottedName"
import { useActiveSection } from "../hooks/useActiveSection"

export function Navbar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-zinc-800 bg-zinc-950/95 backdrop-blur"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-xl font-bold tracking-tight text-white" aria-label="Go to home">
          <DottedName name={site.name} />
        </a>

        <nav className="hidden items-center gap-x-5 xl:gap-x-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const current = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={current ? "location" : undefined}
                className={cn(
                  "border-b-2 pb-1 text-sm font-medium transition-colors duration-200",
                  current
                    ? "border-emerald-400 text-emerald-400"
                    : "border-transparent text-zinc-300 hover:text-white",
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          className="text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          className="max-h-[calc(100dvh-4.25rem)] min-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-zinc-800 bg-zinc-950 px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {navItems.map((item) => {
              const current = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={current ? "location" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-[5px] px-3 py-3 text-base font-medium",
                      current ? "bg-zinc-900 text-emerald-400" : "text-zinc-200 hover:bg-zinc-900 hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
