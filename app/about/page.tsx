import Image from "next/image";
import Link from "next/link";
import { cloneElement } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { geistMono } from "../ui/fonts";

const socials = [
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
];

export default function About() {
  return (
    <div className="mt-4">
      <main className="relative mx-auto my-6 flex w-2/3 flex-col justify-center gap-10 md:flex-row">
        <div className="sticky flex w-fit flex-col items-center space-y-6 max-md:mx-auto md:block">
          {/* Profile Image */}
          <div className="w-fit rounded-full border-2 border-neutral-500 dark:border-neutral-700">
            <Image
              src={"/collins-1.jpg"}
              alt="Chidozie Collins Achusiogu"
              height={200}
              width={200}
              className="rounded-full"
            />
          </div>

          {/* Work Experience */}
        </div>
        <article className="flex-1 space-y-5">
          <h1 className="text-5xl font-semibold max-md:text-center md:text-6xl md:font-bold">
            Collins Achusiogu.
          </h1>
          <h3 className="text-4xl font-extralight max-md:text-center">
            Fullstack Web Developer.
          </h3>
          {/* socials, gmail, phone number and other links */}
          <div className="w-fit space-y-4 max-md:mx-auto">
            <ul className="flex items-center gap-4 max-md:justify-center md:justify-between">
              {socials.map((item) => {
                const { link, icon } = item;
                return (
                  <li>
                    <Link href={link} target="_blank">
                      {cloneElement(icon, { size: 24 })}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <hr className="border-neutral-500" />
            <Link
              href={"mailto:collinstyk803@gmail.com"}
              className="flex space-x-4"
            >
              <IoMdMail size={24} />{" "}
              <span className={geistMono.className}>
                collinstyk803@gmail.com
              </span>
            </Link>
          </div>

          <p className="text-lg">
            I’m a passionate Full-Stack Developer with a growing focus on
            building clean, functional, and user-friendly applications. I love
            turning ideas into interactive experiences — from designing
            intuitive interfaces with HTML, CSS, and React, to developing
            efficient backends with Node.js and Express.
          </p>
          <p className="text-lg">
            What drives me most is problem-solving: taking a real-world
            challenge and breaking it down into simple, elegant solutions.
            Whether it’s creating a personal project that improves everyday
            tasks, or collaborating on a team to build something impactful, I
            bring curiosity, persistence, and attention to detail to every step
            of the process.
          </p>
          <p className="text-lg">
            Outside of coding, I’m constantly learning — exploring new
            frameworks, experimenting with UI/UX design, and building side
            projects that stretch my skills. I believe growth comes from both
            practice and sharing knowledge, so I also document my journey
            through writing and tutorials. My goal is to join a team where I can
            contribute meaningfully while continuing to develop as a software
            engineer, building projects that scale and create real value for
            people.
          </p>
        </article>
      </main>
    </div>
  );
}
