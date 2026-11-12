import { Star } from "lucide-react"
import { selectedRepositories, site } from "../data/site"
import { useGitHubProfile, type GitHubRepo } from "../hooks/useGitHub"
import { GitHubIcon } from "./BrandIcons"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

const dateFormat = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
})

function languageShare(repos: GitHubRepo[]) {
  const counts = new Map<string, number>()
  repos.forEach((repo) => {
    if (!repo.language) return
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1)
  })
  const total = [...counts.values()].reduce((sum, count) => sum + count, 0)
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([language, count]) => ({
      language,
      count,
      share: total === 0 ? 0 : Math.round((count / total) * 100),
    }))
}

export function GitHub() {
  const { username, state } = useGitHubProfile()
  const manual = selectedRepositories
  const publicRepos =
    state.status === "ready"
      ? state.repos
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || b.updated_at.localeCompare(a.updated_at))
          .slice(0, 6)
      : []
  const stars =
    state.status === "ready"
      ? state.repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
      : 0
  const languages = state.status === "ready" ? languageShare(state.repos.filter((repo) => !repo.fork)) : []
  const profileUrl = state.status === "ready" ? state.user.html_url : site.githubUrl

  return (
    <section id="github" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="GitHub"
            title="Open source"
            tone="dark"
            description="Public profile figures and repositories from GitHub. Much of my strongest work is private—reach out via Contact if you want to discuss it."
          />
        </Reveal>

        {state.status === "empty" ? (
          <Reveal>
            <div className="rounded-[5px] border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-emerald-400">
                <GitHubIcon className="h-6 w-6" />
                <p className="font-semibold">GitHub profile</p>
              </div>
              <p className="mt-3 max-w-2xl leading-relaxed text-zinc-300">
                A public GitHub profile has not been linked yet. Repository counts, stars, followers, and
                repositories will appear here once it is.
              </p>
            </div>
          </Reveal>
        ) : null}

        {state.status === "loading" ? (
          <p className="text-zinc-400" role="status">
            Loading GitHub activity…
          </p>
        ) : null}

        {state.status === "error" ? (
          <p className="text-zinc-300" role="status">
            {state.message}
          </p>
        ) : null}

        {state.status === "ready" ? (
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <Reveal>
              <a
                href={state.user.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
              >
                <img
                  src={state.user.avatar_url}
                  alt=""
                  className="h-12 w-12 rounded-full border border-zinc-700"
                />
                @{state.user.login}
              </a>
              {state.user.bio ? <p className="mt-3 max-w-md text-sm text-zinc-400">{state.user.bio}</p> : null}
              <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <Stat label="Public repos" value={state.user.public_repos} />
                <Stat label="Stars" value={stars} />
                <Stat label="Followers" value={state.user.followers} />
                <Stat label="Following" value={state.user.following} />
              </dl>
              <p className="mt-4 text-xs text-zinc-500">
                Stars are the total across the public repositories returned for @{username}.
              </p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-300">
                My best work lives in private repositories.{" "}
                <a href="#contact" className="font-medium text-emerald-400 transition-colors hover:text-emerald-300">
                  Contact me
                </a>{" "}
                if you would like to hear more about it.
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h3 className="mb-5 text-xl font-bold sm:text-2xl">Repositories by language</h3>
              {languages.length === 0 ? (
                <p className="text-sm text-zinc-400">No language data was published on these repositories.</p>
              ) : (
                <ul className="space-y-4">
                  {languages.map((item) => (
                    <li key={item.language}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span>{item.language}</span>
                        <span className="text-zinc-400">
                          {item.share}% · {item.count}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-800">
                        <div className="h-1.5 rounded-full bg-emerald-400" style={{ width: `${item.share}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        ) : null}

        {manual.length > 0 || publicRepos.length > 0 ? (
        <div className="mt-14">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-xl font-bold sm:text-2xl">
              {manual.length > 0 ? "Selected repositories" : "Public repositories"}
            </h3>
            {profileUrl ? (
              <a
                href={profileUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
              >
                View profile
              </a>
            ) : null}
          </div>

          {manual.length > 0 ? (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {manual.map((repo) => (
                <li key={repo.url}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block h-full rounded-[5px] border border-zinc-800 bg-zinc-950 p-6 transition-colors duration-300 hover:border-emerald-500"
                  >
                    <h4 className="text-lg font-bold transition-colors group-hover:text-emerald-400">{repo.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{repo.description}</p>
                    {repo.language ? <p className="mt-4 text-xs text-zinc-500">{repo.language}</p> : null}
                  </a>
                </li>
              ))}
            </ul>
          ) : publicRepos.length > 0 ? (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {publicRepos.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block h-full rounded-[5px] border border-zinc-800 bg-zinc-950 p-6 transition-colors duration-300 hover:border-emerald-500"
                  >
                    <h4 className="text-lg font-bold transition-colors group-hover:text-emerald-400">{repo.name}</h4>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                      {repo.description ?? "No description published."}
                    </p>
                    <p className="mt-4 flex items-center gap-3 text-xs text-zinc-500">
                      {repo.language ? <span>{repo.language}</span> : null}
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" aria-hidden="true" />
                        {repo.stargazers_count}
                      </span>
                      <span>{dateFormat.format(new Date(repo.updated_at))}</span>
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        ) : null}
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <dt className="text-xs tracking-wide text-zinc-500 uppercase">{label}</dt>
      <dd className="mt-1 text-3xl font-bold">{value.toLocaleString("en")}</dd>
    </div>
  )
}
