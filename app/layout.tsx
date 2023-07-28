import "./globals.css";
import { libreFranklin } from "./fonts";
import Navbar from "@/components/nav-bar";
import BottomPanel from "@/components/bottom-panel";
import { Metadata } from "next";
// import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: "Charlie Carr",
    template: "%s | Charlie Carr",
  },
  description: "Software Development Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.className} background text-white box-border h-screen w-screen max-h-screen max-w-screen`}
    >
      <body className="antialiased w-screen h-full sm:h-screen max-h-screen max-w-screen flex flex-col items-center">
        <main className="flex-auto min-w-0 mt-6 flex flex-col w-full sm:w-[525px] relative px-6 sm:px-0">
          <Navbar />
          {children}
          {/* <Analytics /> */}
          <BottomPanel />
        </main>
      </body>
    </html>
  );
}
