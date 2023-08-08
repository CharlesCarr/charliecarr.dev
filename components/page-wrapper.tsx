"use client"

import React from "react"
import { AnimatePresence, motion } from "framer-motion"

interface PageWrapperProps {
  children: React.ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
)
