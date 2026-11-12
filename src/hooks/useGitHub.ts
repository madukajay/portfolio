import { useEffect, useState } from "react"
import { site } from "../data/site"

export type GitHubUser = {
  login: string
  name: string | null
  bio: string | null
  html_url: string
  avatar_url: string
  public_repos: number
  followers: number
  following: number
}

export type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  fork: boolean
  archived: boolean
  updated_at: string
}

export type GitHubState =
  | { status: "idle" | "empty" | "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; user: GitHubUser; repos: GitHubRepo[] }

function usernameFromConfig() {
  const explicit = site.githubUsername.trim().replace(/^@/, "")
  if (explicit) return explicit

  const url = site.githubUrl.trim()
  if (!url) return ""

  try {
    const parsed = new URL(url)
    if (!parsed.hostname.endsWith("github.com")) return ""
    return parsed.pathname.split("/").filter(Boolean)[0] ?? ""
  } catch {
    return ""
  }
}

export function useGitHubProfile() {
  const username = usernameFromConfig()
  const [state, setState] = useState<GitHubState>({ status: "idle" })

  useEffect(() => {
    if (!username) {
      setState({ status: "empty" })
      return
    }

    const controller = new AbortController()
    setState({ status: "loading" })

    const headers = { Accept: "application/vnd.github+json" }

    async function load() {
      try {
        const [userResponse, repoResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
            headers,
            signal: controller.signal,
          }),
          fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated&type=owner`,
            { headers, signal: controller.signal },
          ),
        ])

        if (userResponse.status === 404) {
          setState({
            status: "error",
            message: "GitHub could not find that username.",
          })
          return
        }

        if (!userResponse.ok || !repoResponse.ok) {
          setState({
            status: "error",
            message: "GitHub statistics are unavailable right now.",
          })
          return
        }

        const user = (await userResponse.json()) as GitHubUser
        const repos = (await repoResponse.json()) as GitHubRepo[]

        if (!user.login || !Array.isArray(repos)) {
          setState({
            status: "error",
            message: "GitHub statistics are unavailable right now.",
          })
          return
        }

        setState({ status: "ready", user, repos })
      } catch {
        if (controller.signal.aborted) return
        setState({
          status: "error",
          message: "GitHub statistics are unavailable right now.",
        })
      }
    }

    void load()
    return () => controller.abort()
  }, [username])

  return { username, state }
}
