import "./globals.css"

import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

import Footer from "@/components/footer"
import Header from "@/components/header"

import { libreFranklin } from "./fonts"

export const metadata: Metadata = {
  title: {
    default: "Charlie Carr",
    template: "%s | Charlie Carr",
  },
  description: "Software Development Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.className} background text-white box-border h-full min-h-screen w-screen max-w-screen`}
    >
      <body className="antialiased w-screen h-full min-h-screen max-w-screen flex flex-col items-center">
        <main className="flex-auto min-w-0 mt-6 flex flex-col w-full sm:w-[600px] relative px-6 sm:px-0">
          <Header />
          {children}
          <Analytics />
          <Footer />
        </main>
      </body>
    </html>
  )
}
