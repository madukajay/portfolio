import { useState } from "react"
import { site } from "../data/site"

type PortraitProps = {
  className?: string
}

export function Portrait({ className = "" }: PortraitProps) {
  const [failed, setFailed] = useState(false)
  const showPhoto = Boolean(site.portrait) && !failed

  return (
    <div className={`relative overflow-hidden bg-zinc-800 ${className}`}>
      {showPhoto ? (
        <img
          src={site.portrait}
          alt={`Portrait of ${site.name}`}
          className="absolute inset-0 h-full w-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="absolute inset-0"
          role="img"
          aria-label="Profile photograph placeholder"
        >
          <div className="absolute inset-0 bg-zinc-800" />
          <div className="absolute inset-x-[18%] top-[16%] h-[26%] rounded-full bg-zinc-700" />
          <div className="absolute inset-x-[8%] top-[40%] h-[72%] rounded-t-[999px] bg-zinc-700" />
          <p className="absolute inset-x-0 bottom-8 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
            Profile photograph
          </p>
        </div>
      )}
    </div>
  )
}
