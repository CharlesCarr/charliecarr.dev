"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { spaceMono } from "@/app/fonts"
import { motion } from "framer-motion"

import logo from "../public/images/logo.png"
import DropDownButton from "./drop-down-btn"

const links = [
  { href: "/", label: "home" },
  { href: "/blog", label: "blog" },
  { href: "/projects", label: "projects" },
]

const Header = () => {
  const path = usePathname()

  return (
    <header
      className={`${spaceMono.className} flex items-center justify-between mb-12`}
    >
      <div className="flex flex-start items-center gap-6">
        <Link href="/" className="hidden sm:block">
          <Image
            alt="logo"
            src={logo}
            width={40}
            height={40}
            placeholder="blur"
            priority
            className="shadow-md"
          />
        </Link>

        <nav className="flex">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="relative" href={link.href}>
                  {link.href === path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[1px] w-full bg-white"
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <DropDownButton />
    </header>
  )
}

export default Header
