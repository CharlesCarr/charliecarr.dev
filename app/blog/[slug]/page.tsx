import { Mdx } from "@/components/mdx-components";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import ViewCounter from "../view-counter";
import { spaceMono } from "@/app/fonts";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(slug: string) {
  const post = allBlogs.find((post) => post.slugAsParams === slug);

  if (!post) notFound();

  return post;
}

const BlogPost = async ({ params }: PageProps) => {
  const post = await getPostFromParams(params.slug);
  return (
    <section className="h-full pb-20">
      <h1 className="text-3xl sm:text-5xl max-w-[650px]">
        {/* <Balancer>{post.title}</Balancer> */}
        {post.title}
      </h1>
      <div
        className={`grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 text-sm max-w-[650px] ${spaceMono.className}`}
      >
        <div className="bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {post.publishedAt}
        </div>
        <div className="h-[0.2em] bg-neutral-800 mx-2" />
        <ViewCounter slug={post.slug} trackView />
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
};

export default BlogPost;
