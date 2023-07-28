"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaFilePdf } from "react-icons/fa";

const socialLinks = [
  {
    component: <FaFilePdf className="w-6 h-6" />,
    url: "/charlie_carr_resume_2023.pdf",
  },
  {
    component: <FaGithub className="w-6 h-6" />,
    url: "https://github.com/CharlesCarr",
  },
  {
    component: <FaLinkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/charliecarr4/",
  },
  {
    component: <FaTwitter className="w-6 h-6" />,
    url: "https://twitter.com/charcarr04",
  },
];

const BottomPanel = () => {
  return (
    <div className="w-full absolute inset-x-0 bottom-8 flex gap-12 sm:gap-20 justify-center items-center">
      {socialLinks.map((link: any) => (
        <button key={link.url} onClick={() => window.open(link.url)}>
          {link.component}
        </button>
      ))}
    </div>
  );
};

export default BottomPanel;
