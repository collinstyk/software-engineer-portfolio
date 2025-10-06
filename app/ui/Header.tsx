"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { luckiest_guy } from "@/app/ui/fonts";

gsap.registerPlugin(useGSAP);

function Logo() {
  // Remove the container and style the angle bracketts
  return (
    <div className="p-0.25 text-4xl">
      <div className="flex items-center">
        <span className="">{"<"}</span>
        <h1 className={`${luckiest_guy.className} font-luckiest-guy`}>
          {"TYK"}
        </h1>
        <span className="">{"/>"}</span>
      </div>
    </div>
  );
}

function Pages() {
  const pathname = usePathname();

  return (
    <ul className="flex h-fit space-x-1 rounded-full bg-transparent p-1 ring ring-neutral-300 dark:ring-neutral-800">
      {["about", "services", "works", "contact", "blog"].map((item, index) => (
        <li
          key={index}
          className={`cursor-pointer rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-700 ${pathname.slice(1) === item ? "bg-neutral-50 dark:bg-neutral-700" : ""}`}
        >
          <Link
            href={item}
            className={`no-link-style rounded-sm font-medium capitalize`}
          >
            <p className="px-2 py-0.5">{item}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Add background to the icon
function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ? true : false,
  );
  const handleToggle = () => setIsDarkMode((prev) => !prev);

  const toggleRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    // console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      html?.classList.add("dark");
      html?.classList.remove("light");
    } else {
      localStorage.setItem("theme", "light");
      html?.classList.remove("dark");
      html?.classList.add("light");
    }
  }, [isDarkMode]);

  // useGSAP(() => {
  //   gsap.to(toggleRef.current, { x: isDarkMode ? 24 : "0%", duration: 0.25 });
  //   gsap.to(".icon", { x: isDarkMode ? -24 : 0, duration: 0.25 });
  // }, [isDarkMode]);

  return (
    <button
      onClick={handleToggle}
      className="flex cursor-pointer gap-2 rounded-full p-2"
    >
      {/* <span className="h-4 w-4 rounded-full" ref={toggleRef} /> */}
      <span className="icon -z-10">
        <IoMoon className="moon hidden dark:block" />
        <IoSunnyOutline className="sun dark:hidden" />
      </span>
    </button>
  );
}

export default function Header() {
  return (
    <div className="header fixed right-0 bottom-0 left-0 z-10 h-fit px-8 py-4 backdrop-blur-sm sm:top-0">
      <header className="mx-auto max-w-7xl">
        <nav className="flex w-full items-center justify-between">
          {/* logo */}
          <Link href="/" className="logo">
            <Logo />
          </Link>

          {/* navbar */}
          <Pages />

          {/* toggle dark mode button */}
          <DarkModeToggle />
        </nav>
      </header>
    </div>
  );
}

// TODO
// 1) Bring to attention the contact link
