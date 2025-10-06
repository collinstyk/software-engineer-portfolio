// prettier-ignore
'use client'

import { geistMono } from "@/app/ui/fonts";

function Footer() {
  const now = new Date();
  const year = now.toDateString().split(" ")[3];

  return (
    <footer className="relative p-2">
      <hr className="absolute top-0 left-0 w-full border-black dark:border-white" />
      {/* Footer Content */}
      <div className="mx-auto max-w-7xl">
        <p className={`${geistMono.className} text-xs`}>
          <span>© {year} |</span>
          <span className="px-1">Chidozie Achusiogu.</span>
          <span>| All rights reserved.</span>
        </p>

        {/* Social Media icons with links */}
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
