import { navItems } from "../data/site"
import { useEffect, useState } from "react"

export function useActiveSection() {
  const [active, setActive] = useState<string>(navItems[0].id)

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0.05, 0.2, 0.45] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return active
}
