export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ")
}

export function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}
