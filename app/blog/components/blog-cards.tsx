"use client"

import Link from "next/link"
import { Blog } from "@/.contentlayer/generated"
import { spaceMono } from "@/app/fonts"
import { allBlogs } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { motion } from "framer-motion"
import { BsArrowReturnLeft } from "react-icons/bs"

import ViewCounter from "./view-counter"

interface BlogCardProps {
  post: Blog
}

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

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.div variants={cards}>
      <Link
        className="flex flex-col space-y-1 mb-4 border border-white px-8 py-6 rounded-2xl relative"
        href={`${post.slug}`}
      >
        <p className={`text-xs ${spaceMono.className}`}>{post.category}</p>

        <p className="font-bold text-base sm:text-xl">{post.title}</p>

        <div
          className={`flex gap-2 items-center ${spaceMono.className} text-xs text-neutral-400 tracking-tighter`}
        >
          <p>{format(parseISO(post.date), "MMMM dd, yyyy")}</p>
          <p>{` • `}</p>
          <p>{post.readingTime.text}</p>
          <p>{` • `}</p>
          <ViewCounter slug={post.slug} trackView={false} />
        </div>

        <BsArrowReturnLeft className="absolute right-8 top-1/2 transform translate-y-[-50%] w-4 h-4 sm:w-6 sm:h-6 text-white ml-4" />
      </Link>
    </motion.div>
  )
}

const BlogCardsContainer = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="h-full"
    >
      {allBlogs
        // Comment out filter to see unpublished in DEV
        // .filter((b) => b.published === true)
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
    </motion.div>
  )
}

export default BlogCardsContainer
