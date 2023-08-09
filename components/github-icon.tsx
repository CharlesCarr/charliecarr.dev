"use client"

import { FaGithub } from "react-icons/fa"

interface GitHubIconProps {
  github_url: string
}

const GitHubIcon = ({ github_url }: GitHubIconProps) => {
  const clickHandler = (url: string) => {
    // will need to add conditional in future for blog_path
    // or create separate fn for that
    window.open(url, "_blank", "noopener")
  }
  return (
    <FaGithub
      className="w-6 h-6 cursor-pointer absolute bottom-4 right-6"
      onClick={() => clickHandler(github_url)}
    />
  )
}

export default GitHubIcon
