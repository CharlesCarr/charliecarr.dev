"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { RiMenu3Fill } from "react-icons/ri"

import { socialLinks } from "./footer"

interface Props {
  // add any props here
}

const DropDownButton = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log("isOpen", isOpen)

  const ref = useRef<HTMLDivElement>(null)

  const handleButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [isOpen])

  return (
    <div className="ml-auto relative">
      <button
        onClick={handleButtonClick}
        className="flex items-center mt-1 sm:mt-0"
      >
        <RiMenu3Fill className="w-4 h-4" />
      </button>

      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ delay: 0.2 }}
            ref={ref}
            className="absolute right-0 mt-2 py-2 w-[150px] bg-[#111010] border border-white rounded-2xl flex flex-col z-50"
          >
            {socialLinks.map((link: any) => (
              <button
                key={link.url}
                onClick={() => window.open(link.url)}
                className="flex justify-between text-sm px-5 py-2"
              >
                <p>{link.name}</p>
                {link.component}
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

export default DropDownButton
