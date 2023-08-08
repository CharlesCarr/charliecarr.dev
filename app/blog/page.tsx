import type { Metadata } from "next"

import { PageWrapper } from "@/components/page-wrapper"

import BlogCardsContainer from "./components/blog-cards"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, building in public, product / design, and more.",
}

export const revalidate = 60

export default async function BlogPage() {
  return (
    // <PageWrapper>
    <section className="w-full min-h-full flex flex-col">
      <h1 className="text-3xl sm:text-5xl tracking-wider mb-14">BLOG.</h1>
      <BlogCardsContainer />
    </section>
    // </PageWrapper>
  )
}
