"use client";
import { useState } from "react";
import Card from "../ui/services/Card";

import {
  FaCloud,
  FaCode,
  FaLayerGroup,
  FaMobileAlt,
  FaServer,
  FaTools,
} from "react-icons/fa";

export default function Skills() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  return (
    <main className="my-4 px-6 sm:my-10 lg:px-4">
      {/* Add slide in animations */}
      <div className="mx-auto w-fit space-y-4 text-center">
        <h1 className="text-5xl font-bold text-neutral-500 uppercase">
          What I offer
        </h1>
        {/* Text-gradient */}
        <h4 className="text-primary mx-auto font-bold sm:w-1/2">
          I provide full-stack solutions — from intuitive interfaces to robust
          backends and mobile apps. Whether you’re an employer looking for a
          reliable developer or a client needing a digital solution, here’s how
          I can help:
        </h4>
      </div>

      <section className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            icon: <FaCode />,
            title: "Frontend Development",
            description:
              "I build responsive, accessible, and modern interfaces using HTML, CSS, JavaScript, and React. I also collaborate with designers to translate mockups into functional, high-quality code.",
          },
          {
            icon: <FaServer />,
            title: "Backend Development",
            description:
              "I Develop server-side applications with Node.js and Express.js and also create and integrate RESTful APIs to support scalable systems.",
          },
          {
            icon: <FaLayerGroup />,
            title: "Full-Stack Solutions",
            description:
              "Delivering end-to-end solutions, connecting frontend UIs to backend services. Optimizing applications for performance, maintainability, and security.",
          },
          {
            icon: <FaMobileAlt />,
            title: "Mobile App Development",
            description:
              "Building mobile apps for iOS and Android using React Native and Providing a native-like experience with cross-platform efficiency.",
          },
          {
            icon: <FaCloud />,
            title: "Deployment & Collaboration",
            description:
              "I deploy applications to platforms like Render, Vercel, or Netlify. I work with Git/GitHub for version control, team collaboration, and code reviews.",
          },
          {
            icon: <FaTools />,
            title: "Maintenance & Support",
            description:
              "Updating, Optimizing, and Troubleshooting existing websites or apps. Providing ongoing support to keep your application running smoothly.",
          },
        ].map((item, index) => (
          <Card
            key={index.toString()}
            index={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            isActive={index === activeCardIndex}
            onHover={() => setActiveCardIndex(index)}
          />
        ))}
      </section>
    </main>
  );
}
