"use client";

import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdArticle } from "react-icons/md";

interface ProjectIconsProps {
  github_url: string | null;
  live_url: string | null;
  blog_path: string | null;
}

function ProjectIcons({ github_url, live_url, blog_path }: ProjectIconsProps) {
  const clickHandler = (url: string) => {
    // will need to add conditional in future for blog_path
    // or create separate fn for that
    window.open(url, "_blank", "noopener");
  };

  return (
    <div className="flex items-center gap-4">
      {github_url && (
        <FaGithub
          className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
          onClick={() => clickHandler(github_url)}
        />
      )}
      {blog_path && (
        <MdArticle
          className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
          onClick={() => clickHandler(blog_path)}
        />
      )}
      {live_url && (
        <HiOutlineExternalLink
          className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
          onClick={() => clickHandler(live_url)}
        />
      )}
    </div>
  );
}

export default ProjectIcons;
