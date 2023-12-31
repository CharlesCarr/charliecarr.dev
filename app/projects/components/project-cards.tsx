"use client"

import { spaceMono } from "@/app/fonts"
import { motion } from "framer-motion"

import ProjectIcons from "./project-icons"

interface Project {
  id: number
  title: string
  app_type: string
  subtitle?: string
  techStack: string[]
  description: string[]
  github_url?: string
  live_url?: string
  blog_path?: string
}

interface ProjectCardProps {
  project: Project
}

const projects: Project[] = [
  {
    id: 0,
    title: "Family Travel Passport",
    app_type: "web app",
    // subtitle: "Freelance contract in partnership with AAA Travel",
    techStack: [
      "Next.js 13",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
    ],
    description: [
      "Travel survey recommendation generator",
      "Ind. freelance role partnering w/ AAA travel",
      "Provides users with personalized travel recs", //  based on survey selections
      "Generates csv / PDF assets for users",
      "Automates lead creation for AAA travel agents",
    ],
    // live_url: "https://familytravelpassport.com/", // replace later?
    // github_url: "test",
    // blog_path: "test",
  },
  {
    id: 1,
    title: "Tennis Grand Slam Dashboard",
    app_type: "web app",
    techStack: ["Next.js 13", "TypeScript", "Supabase", "shadcn/ui", "Vercel"],
    description: [
      "Review all grand slam title rankings (ATP/WTA)",
      "Dashboard provides filtering for specific majors",
      "Review recent major results (finalists/scorelines)",
      "Dynamic chart displays of Top Tens",
    ],
    live_url: "https://grand-slams-dashboard.vercel.app/",
    github_url: "https://github.com/CharlesCarr/grand-slams-dashboard",
    // blog_path: "test",
  },
]

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const cards = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
  },
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    id,
    title,
    app_type,
    subtitle,
    techStack,
    description,
    github_url,
    live_url,
    blog_path,
  } = project

  return (
    <motion.div
      variants={cards}
      className="flex flex-col rounded-2xl border border-white p-8 max-h-[325px]"
    >
      <div className="flex flex-col gap-1">
        <div
          className={`hidden sm:flex flex-wrap w-full justify-center gap-x-4 sm:gap-x-0 sm:justify-between text-xs ${spaceMono.className}`}
        >
          {techStack.map((tech: string) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>
        <div
          className={`flex sm:hidden flex-wrap w-full justify-center gap-x-4 sm:gap-x-0 sm:justify-between text-xs ${spaceMono.className}`}
        >
          {techStack.slice(0, 3).map((tech: string) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>
        <hr />
        <div className="flex flex-col sm:flex-row w-full justify-between items-center mt-1 mb-2 sm:mb-0">
          <p className="text-lg sm:text-xl font-bold mt-1 mb-2">{title}</p>
          <ProjectIcons
            github_url={github_url ?? null}
            live_url={live_url ?? null}
            blog_path={blog_path ?? null}
          />
        </div>
        <p className="text-sm text-opacity-70">{subtitle}</p>
        <ul className="sm:list-disc sm:ml-6 hidden sm:flex flex-col gap-1 text-center sm:text-start">
          {description.map((des: string) => (
            <li key={des} className={`text-sm ${spaceMono.className}`}>
              {des}
            </li>
          ))}
        </ul>
        {/* TO DO: thinking instead of below, add a mobile_description property with one short para */}
        <ul className="sm:list-disc sm:ml-6 flex sm:hidden flex-col gap-1 text-center sm:text-start">
          {description.slice(0, 2).map((des: string) => (
            <li key={des} className={`text-sm ${spaceMono.className}`}>
              {des}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const ProjectCards = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-10 h-full w-full"
    >
      {/* Using grid (cols-2) for future use of various card widths */}
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  )
}
export default ProjectCards
