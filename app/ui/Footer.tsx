// prettier-ignore
'use client'

import { geistMono } from "@/app/ui/fonts";
import Link from "next/link";
import { cloneElement } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const now = new Date();
  const year = now.toDateString().split(" ")[3];

  return (
    <footer className="absolute bottom-0 mb-4 w-full border-t border-black p-2 md:my-2 md:py-6 dark:border-white">
      {/* Footer Content */}
      <div className="mx-auto flex max-w-7xl justify-between">
        <p className={`${geistMono.className} text-xs`}>
          <span>© {year} |</span>
          <span className="px-1">Chidozie Achusiogu.</span>
          <span>| All rights reserved.</span>
        </p>

        {/* Social Media icons with links */}
        <div>
          <ul className="flex items-center justify-between gap-4">
            {[
              { link: "https://x.com/dozie_jr", icon: <FaXTwitter /> },
              { link: "https://github.com/collinstyk", icon: <FaGithub /> },
              {
                link: "https://www.linkedin.com/in/dozie-jr-achusiogu-917140226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                icon: <FaLinkedin />,
              },
              {
                link: "https://www.instagram.com/collins_tyk",
                icon: <FaInstagram />,
              },
              { link: "https://wa.me/+2349078312075", icon: <FaWhatsapp /> },
            ].map((item) => {
              const { link, icon } = item;
              return (
                <li>
                  <Link href={link} target="_blank">
                    {cloneElement(icon, { size: 16 })}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
