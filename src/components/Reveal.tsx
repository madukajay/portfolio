import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "../lib/cn"

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: "div" | "li"
}

export function Reveal({ children, className, delayMs = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as

  return (
    <Tag
      ref={ref as never}
      style={{ animationDelay: `${delayMs}ms` }}
      className={cn(visible && "reveal", className)}
    >
      {children}
    </Tag>
  )
}
