import Image from "next/image"
import { LiaMapPinSolid } from "react-icons/lia"

import ExperienceCard from "@/components/experience-card"
import { PageWrapper } from "@/components/page-wrapper"

import avatar from "./avatar.jpg"
import { spaceMono } from "./fonts"

export default function Home() {
  return (
    <PageWrapper>
      <section className="w-full h-full flex flex-col items-center">
        <div className="flex gap-6 sm:gap-10 mb-12 sm:mb-8">
          <div className="h-full">
            <Image
              alt="avatar"
              src={avatar}
              width={125}
              height={125}
              placeholder="blur"
              priority
              className="rounded-full"
            />
          </div>

          {/* Info container */}
          <div className="h-full flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl tracking-wider -ml-1 font-bold">
              charlie carr.
            </h1>
            <p
              className={`${spaceMono.className} text-sm sm:text-base tracking-wide`}
            >
              product-focused fullstack dev.
            </p>
            <div className="flex items-center gap-1">
              <LiaMapPinSolid className="w-5 h-5 text-white" />
              <p
                className={`${spaceMono.className} text-sm sm:text-base tracking-wide`}
              >
                nyc
              </p>
            </div>
          </div>
        </div>

        <ExperienceCard />
      </section>
    </PageWrapper>
  )
}
