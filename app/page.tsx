"use client";

// libraries
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// ui
import Hero from "./ui/home/Hero";
import TechStacks from "@/app/ui/home/TechStack";
import Testimonials from "@/app/ui/home/Testimonials";

// fonts
import { geist, geistMono, preahvihear } from "@/app/ui/fonts";
import { Geist_Mono } from "next/font/google";

gsap.registerPlugin(useGSAP);

export default function Home() {
  return (
    <div>
      {/* Hero  Section*/}
      <Hero />

      {/* Tech Stacks */}
      <TechStacks />

      {/* Random Dev Motivation */}

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}

// useGSAP(() => {
//   const tl = gsap.timeline({
//     defaults: { duration: 0.8, ease: "power2.out" },
//   });

//   if (htmlCard.current && cssCard.current && javascriptCard.current) {
//     tl.from(htmlCard.current, { x: -100, opacity: 0 })
//       .from(cssCard.current, { y: 100, opacity: 0 }, "-=0.4") // overlaps a bit
//       .from(javascriptCard.current, { x: 100, opacity: 0 }, "-=0.4");
//   }
// }, [htmlCard, cssCard, javascriptCard]);

// useGSAP(() => {
//   if (htmlCard.current && cssCard.current && javascriptCard.current) {
//     gsap.to(htmlCard.current, {
//       y: -20,
//       duration: 2,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//     });

//     gsap.to(cssCard.current, {
//       y: 20,
//       duration: 2.5,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       delay: 0.3,
//     });

//     gsap.to(javascriptCard.current, {
//       y: -15,
//       duration: 3,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       delay: 0.6,
//     });
//   }
// }, [htmlCard, cssCard, javascriptCard]);
