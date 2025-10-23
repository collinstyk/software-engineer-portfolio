"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cloneElement, useEffect, useRef, useState } from "react";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { luckiest_guy } from "@/app/ui/fonts";
import { CgDisplayGrid, CgProfile } from "react-icons/cg";
import {
  MdAlternateEmail,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { TbLogs } from "react-icons/tb";

gsap.registerPlugin(useGSAP);

function Logo() {
  return (
    <div className="p-0.25 max-[600px]:min-[550px]:text-2xl min-[600px]:text-4xl">
      <div className="flex items-center">
        <span className="">{"<"}</span>
        <h1 className={`${luckiest_guy.className} font-luckiest-guy`}>
          <span>{"TYK"}</span>
        </h1>
        <span className="">{"/>"}</span>
      </div>
    </div>
  );
}

function Pages({ extraClasses }: { extraClasses?: string }) {
  const pathname = usePathname();

  return (
    <ul
      className={`flex h-fit gap-2 bg-neutral-50 p-1 min-[400px]:rounded-full min-[400px]:ring min-[400px]:ring-neutral-300 sm:gap-3 dark:bg-neutral-800 dark:ring-neutral-800 ${extraClasses ? extraClasses : ""}`}
    >
      {[
        { value: "about", icon: <CgProfile /> },
        { value: "services", icon: <MdOutlineMiscellaneousServices /> },
        { value: "works", icon: <CgDisplayGrid /> },
        { value: "contact", icon: <MdAlternateEmail /> },
        { value: "blog", icon: <TbLogs /> },
      ].map((item, index) => {
        const { value, icon } = item;
        return (
          <li
            key={index}
            className={`cursor-pointer rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 ${pathname.slice(1) === value ? "bg-neutral-200 dark:bg-neutral-700" : ""}`}
          >
            <Link
              href={value}
              className={`no-link-style flex items-center gap-2 rounded-sm px-2 py-1 font-medium capitalize`}
            >
              {cloneElement(icon)}
              <p className="hidden sm:block">{value}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

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
      className="flex cursor-pointer gap-2 rounded-full bg-neutral-200 px-1.5 py-1 dark:bg-neutral-700"
    >
      {/* <span className="h-4 w-4 rounded-full" ref={toggleRef} /> */}
      <span className="icon #-z-10">
        <IoMoon className="moon hidden dark:block" />
        <IoSunnyOutline className="sun dark:hidden" />
      </span>
    </button>
  );
}

export default function Header() {
  return (
    <div className="header fixed right-0 bottom-0 left-0 z-10 h-fit px-8 py-4 backdrop-blur-sm lg:top-0">
      <header className="mx-auto max-w-7xl">
        <nav className="flex w-full flex-wrap items-center justify-between gap-2">
          {/* logo */}
          <Link href="/" className="logo">
            <Logo />
          </Link>

          {/* navbar */}
          <span className="max-[400px]:hidden">
            <Pages />
          </span>

          {/* toggle dark mode button */}
          <span className="max-[400px]:hidden">
            <DarkModeToggle />
          </span>

          <div className="flex flex-1 items-center gap-2 overflow-clip rounded-full bg-neutral-50 ring ring-neutral-300 min-[400px]:hidden dark:bg-neutral-800 dark:ring-neutral-800">
            {/* navbar */}
            <Pages extraClasses="!justify-between flex-1" />
            <span className="text-neutral-500">|</span>
            {/* toggle dark mode button */}
            <span className="mx-1">
              <DarkModeToggle />
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
}

// TODO
// 1) Bring to attention the contact link
