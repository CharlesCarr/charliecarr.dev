import { notFound } from "next/navigation"
import { spaceMono } from "@/app/fonts"
import { allBlogs } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

import { Mdx } from "@/components/mdx-components"

import ViewCounter from "../components/view-counter"

interface PageProps {
  params: {
    slug: string
  }
}

async function getPostFromParams(slug: string) {
  const post = allBlogs.find((post) => post.slugAsParams === slug)

  if (!post) notFound()

  return post
}

const BlogPost = async ({ params }: PageProps) => {
  const post = await getPostFromParams(params.slug)
  return (
    <article className="h-full pb-20 prose dark:prose-invert">
      <p className={`${spaceMono.className} text-sm mb-2`}>{post.category}</p>
      <h1 className="text-3xl sm:text-5xl max-w-[650px] mb-0 pb-0 leading-tight">{post.title}</h1>
      <p className={`${spaceMono.className} text-xs`}>{post.readingTime.text}</p>
      <div
        className={`grid grid-cols-[auto_1fr_auto] items-center mb-8 text-sm max-w-[650px] ${spaceMono.className}`}
      >
        <div className="bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {format(parseISO(post.date), "MMMM dd, yyyy")}
        </div>
        <div className="h-[0.2em] bg-neutral-800 mx-2" />
        <ViewCounter slug={post.slug} trackView />
      </div>
      <Mdx code={post.body.code} />
    </article>
  )
}

export default BlogPost
