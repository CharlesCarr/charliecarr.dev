"use client"

import { allBlogs } from "contentlayer/generated"

import { supabase } from "@/lib/supabase"

function SeedButton() {
  const handleSeed = async () => {
    console.log("allBlogs", allBlogs)

    try {
      // GET all rows in views
      let { data: views, error: getViewsErr } = await supabase
        .from("views")
        .select("*")

      if (getViewsErr) {
        throw new Error(`Error: ${getViewsErr.message}`)
      }

      let newBlogs: any

      // if some views exist already
      if (views && views.length > 0) {
        // Filter and create a new array
        newBlogs = allBlogs
          .filter((blog) => !views?.some((view) => view.slug === blog.slug))
          .map((blog) => blog.slug)
        console.log("newBlogs", newBlogs)
      } else {
        // add allBlogs to supabase
        newBlogs = allBlogs.map((blog) => {
          return { slug: blog.slug }
        })
        console.log("newBlogs", newBlogs)
      }

      // add newBlogs to supabase
      const { data: newViews, error: addViewsErr } = await supabase
        .from("views")
        .insert([...newBlogs])

      if (addViewsErr) {
        throw new Error(`Error: ${addViewsErr.message}`)
      }

      console.log("newViews", newViews)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <button
      // onClick={handleSeed}
      className="w-[150px] h-[50px] border border-white rounded-xl"
    >
      Click to Seed Views DB
    </button>
  )
}

export default SeedButton
