"use client";

import { useState, useRef, useEffect } from "react";
import { socialLinks } from "./bottom-panel";
import { RiMenu3Fill } from "react-icons/ri";

interface Props {
  // add any props here
}

const DropDownButton = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("isOpen", isOpen);

  const ref = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <div className="ml-auto relative">
      <button onClick={handleButtonClick} className="flex items-center mt-1 sm:mt-0">
        <RiMenu3Fill className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          ref={ref}
          className="absolute right-0 mt-2 py-2 w-[150px] bg-[#111010] border border-white rounded-2xl flex flex-col"
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
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
