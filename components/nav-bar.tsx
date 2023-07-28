import { spaceMono } from "@/app/fonts";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={`${spaceMono.className} flex gap-10 mb-12`}>
      <Link href="/">home</Link>
      <Link href="/blog">blog</Link>
      <Link href="/projects">projects</Link>
    </nav>
  );
};

export default Navbar;
