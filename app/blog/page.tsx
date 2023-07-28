import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import ViewCounter from "./view-counter";
import { BsArrowReturnLeft } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export const revalidate = 60;

export default async function BlogPage() {
  return (
    <section className="w-full h-full flex flex-col">
      <h1 className="text-3xl sm:text-5xl tracking-wider mb-14">BLOG.</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 border border-white px-8 py-6 rounded-2xl"
            href={`${post.slug}`}
          >
            <div className="w-full flex justify-between items-center">
              <div className="w-full flex gap-6">
                <div className="w-fit flex flex-col">
                  <p className="text-base sm:text-lg">{post.publishedAt}</p>
                  <ViewCounter slug={post.slug} trackView={false} />
                </div>
                <p className="font-bold text-base sm:text-xl">{post.title}</p>
              </div>

              <BsArrowReturnLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white ml-4" />
            </div>
          </Link>
        ))}
    </section>
  );
}
