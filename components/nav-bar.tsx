import { spaceMono } from "@/app/fonts";
import Link from "next/link";
import DropDownButton from "./drop-down-btn";
import Image from "next/image";
import logo from "../public/images/logo.png";

const Navbar = () => {
  return (
    <nav
      className={`${spaceMono.className} flex items-center justify-center sm:justify-start gap-10 mb-12`}
    >
      <Image
        alt="logo"
        src={logo}
        width={40}
        height={40}
        placeholder="blur"
        priority
        className="hidden sm:block shadow-md"
      />
      <Link href="/">home</Link>
      <Link href="/blog">blog</Link>
      <Link href="/projects">projects</Link>
      <DropDownButton />
    </nav>
  );
};

export default Navbar;
