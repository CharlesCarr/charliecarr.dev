import { Metadata } from "next"

// import { PageWrapper } from "@/components/page-wrapper";
import ProjectCards from "./components/project-cards"

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of my personal and freelance web dev projects.",
}

export default function Projects() {
  return (
    // <PageWrapper>
    <section className="w-full h-full flex flex-col mb-20">
      <h1 className="text-3xl sm:text-5xl tracking-wider mb-6">PROJECTS.</h1>

      <ProjectCards />
    </section>
    // </PageWrapper>
  )
}
