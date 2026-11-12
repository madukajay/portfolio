import { navItems, site } from "../data/site"
import { GitHubIcon, LinkedInIcon } from "./BrandIcons"
import { OptionalAnchor } from "./OptionalAnchor"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-emerald-600 bg-zinc-900 py-16 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="md:col-span-2 lg:col-span-1">
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed">{site.footerBio}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Resources</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.resumeUrl ? (
              <li>
                <a href={site.resumeUrl} className="transition-colors hover:text-white">
                  Resume
                </a>
              </li>
            ) : null}
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Connect</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <OptionalAnchor
                href={site.linkedinUrl}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </OptionalAnchor>
            </li>
            <li>
              <OptionalAnchor
                href={site.githubUrl}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
                pendingClassName="inline-flex items-center gap-2 text-zinc-400"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </OptionalAnchor>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-4 text-sm text-zinc-500 sm:px-6 lg:px-8">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
