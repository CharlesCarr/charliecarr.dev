// "use client"

// import { cn } from "@/lib/utils"

import GitHubIcon from "./github-icon"

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  github_url?: string
}

export function Callout({
  children,
  icon,
  github_url,
  ...props
}: CalloutProps) {
  return (
    <div
      className="my-6 flex items-start rounded-lg border border-neutral-400 p-4 relative bg-[#171717]"
      {...props}
    >
      {icon && <span className="text-2xl absolute top-4 left-6">{icon}</span>}

      {github_url && <GitHubIcon github_url={github_url} />}

      <div className="w-full flex justify-center items-center px-12 font-thin tracking-wide">
        {children}
      </div>
    </div>
  )
}
