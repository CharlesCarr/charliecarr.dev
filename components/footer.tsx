"use client"

import { FaFilePdf, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const socialLinks = [
  {
    component: <FaFilePdf className="w-6 h-6" />,
    url: "/charlie_carr_resume_aug_2023.pdf",
    name: "Resume",
  },
  {
    component: <FaGithub className="w-6 h-6" />,
    url: "https://github.com/CharlesCarr",
    name: "GitHub",
  },
  {
    component: <FaLinkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/charliecarr4/",
    name: "LinkedIn",
  },
  {
    component: <FaTwitter className="w-6 h-6" />,
    url: "https://twitter.com/charcarr04",
    name: "Twitter",
  },
]

const Footer = () => {
  return (
    <div className="w-full absolute inset-x-0 bottom-8 flex gap-12 sm:gap-20 justify-center items-center">
      {socialLinks.map((link: any) => (
        <button key={link.url} onClick={() => window.open(link.url)}>
          {link.component}
        </button>
      ))}
    </div>
  )
}

export default Footer
