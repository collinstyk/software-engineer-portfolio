"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="max-w-7xl pt-8 sm:pt-4">
      {/* Navigate to featured work button */}
      {/* Add revealing arrow animation */}
      <button
        onClick={() => router.push("/works")}
        className="bg-primary/50 border-primary #animate-pulse before:animate-shine dark:before:via-primary text-primary-dark/60 dark:text-primary relative mx-auto flex cursor-pointer items-center overflow-hidden rounded-full border px-4 py-0.75 font-medium before:absolute before:h-full before:w-full before:-skew-x-20 before:rounded-full before:bg-gradient-to-r before:from-transparent before:from-20% before:via-white/30 before:via-50% before:to-transparent before:to-80% dark:before:from-transparent dark:before:to-transparent"
      >
        <p>View my works</p>
      </button>

      <main className="mx-auto flex w-fit space-x-8 py-4 sm:pt-8">
        {/* Hero profile Image */}
        {/* <div className="from-primary/20 dark:from-primary/80 bg-radial from-30% to-50% dark:from-10% dark:to-20%">
                <picture>
                  <Image
                    src={"/collins-1-removebg-preview.png"}
                    alt="web developer and software engineer"
                    width={500}
                    height={300}
                  />
                </picture>
              </div> */}

        {/*  */}
        {/* Hovering animations of tech stacks */}
        <article className={`mx-auto w-2/3 text-center`}>
          <h1 className={`mb-9 text-5xl leading-[1em] font-bold sm:text-7xl`}>
            Building Real-World solutions with{" "}
            <span className="text-primary">code</span>
          </h1>
          <p className="text-2xl">
            {/* Writing Animation (Software Engineer) */} Hey there, I'm{" "}
            <Link href={"/about"} className="font-bold">
              Collins
            </Link>{" "}
            , a Web developer passionate about turning ideas into user-friendly
            digital experiences. Explore my portfolio to see how I turn
            challenges into solutions with creativity, code and persistence.
          </p>
        </article>
      </main>

      {/* Navigate to about me button | More to be done */}
      <button
        onClick={() => router.push("/about")}
        className="mx-auto flex cursor-pointer rounded-full border border-neutral-300 px-2 py-1 dark:border-neutral-700"
      >
        <div className="flex items-center space-x-4">
          <Image
            src={"/collins-1.jpg"}
            alt="web developer and software engineer"
            width={28}
            height={28}
            className="rounded-full"
          />
          <h1 className="mr-2.5 text-sm font-medium">About - CollinsTYK</h1>
        </div>
      </button>
    </section>
  );
}
