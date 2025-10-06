"use client";

import { cloneElement, ReactElement, useRef } from "react";

import {
  FaCss3,
  FaGitAlt,
  FaGithubSquare,
  FaHtml5,
  FaReact,
  FaSlack,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAsana,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiRedis,
  SiStyledcomponents,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TechStackCard = ({
  name,
  icon,
  className = "h-full w-full dark:fill-neutral-300",
  cardRef,
}: {
  name: string;
  icon: ReactElement<any>;
  className?: string;
  cardRef?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <div
      className="relative flex h-32 items-center justify-center overflow-hidden rounded-sm p-0.25"
      ref={cardRef}
    >
      <div className="animate-slow-spin to-primary/40 dark:to-primary absolute h-[200%] w-[170%] rounded-sm bg-gradient-to-t from-neutral-100 from-50% via-neutral-200 via-60% to-70% dark:from-neutral-900 dark:via-neutral-700"></div>
      <div className="relative z-10 h-full w-22 rounded-sm bg-neutral-100 p-2 dark:bg-neutral-900">
        <div>
          {cloneElement(icon, { className })}
          <p className="mx-auto w-fit text-xs font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default function TechStacks() {
  const htmlCard = useRef<HTMLDivElement>(null);
  const cssCard = useRef<HTMLDivElement>(null);
  const javascriptCard = useRef<HTMLDivElement>(null);
  return (
    <section className="mt-12 w-full">
      <h1 className="mx-auto w-fit text-5xl font-bold">Skills</h1>
      <div className="#border-y m-0 flex h-fit items-center overflow-hidden border-neutral-300 dark:border-neutral-700">
        {/* Cards */}
        {/* ENHANCEMENT incoming */}
        <div className="flex w-full flex-col space-x-8">
          <div className="animate-infinite-horizontal-movement-reverse flex w-fit space-x-16">
            {/* languages */}
            <div id="languages-cards" className="w-fit space-y-4">
              <h1 className="mx-auto w-fit text-xl font-medium">Languages</h1>
              <div className="flex gap-4">
                {/* html */}
                <TechStackCard
                  name="HTML5"
                  icon={<FaHtml5 />}
                  cardRef={htmlCard}
                />

                {/* javascript */}
                <TechStackCard
                  name="Javascript"
                  icon={<SiJavascript />}
                  cardRef={javascriptCard}
                />

                {/* css */}
                <TechStackCard
                  name="CSS3"
                  icon={<FaCss3 />}
                  cardRef={cssCard}
                />
              </div>
            </div>

            {/* Frameworks and Libraries */}
            <div
              id="frameworks-and-libraries-cards"
              className="w-fit space-y-4"
            >
              <h1 className="mx-auto w-fit text-xl font-medium">
                Frameworks and Libraries
              </h1>
              <div className="flex gap-4">
                {/* styled components */}
                <TechStackCard
                  name="Styled Components"
                  icon={<SiStyledcomponents />}
                  cardRef={cssCard}
                />

                {/* Tailwindcss */}
                <TechStackCard
                  name="Tailwindcss"
                  icon={<RiTailwindCssFill />}
                  cardRef={javascriptCard}
                />

                {/* Next.js */}
                <TechStackCard
                  name="Next.js"
                  icon={<RiNextjsFill />}
                  cardRef={htmlCard}
                />

                {/* React */}
                <TechStackCard
                  name="React"
                  icon={<FaReact />}
                  cardRef={htmlCard}
                />
              </div>
            </div>
          </div>

          <div className="animate-infinite-horizontal-movement flex w-fit space-x-16">
            {/* Tools */}
            <div id="tools-cards" className="w-fit space-y-4">
              <h1 className="mx-auto w-fit text-xl font-medium">Tools</h1>
              <div className="flex gap-4">
                {/* postman */}
                <TechStackCard
                  name="Postman"
                  icon={<SiPostman />}
                  cardRef={cssCard}
                />

                {/* Slack */}
                <TechStackCard
                  name="Slack"
                  icon={<FaSlack />}
                  cardRef={javascriptCard}
                />

                {/* Asana */}
                <TechStackCard
                  name="Asana"
                  icon={<SiAsana />}
                  cardRef={javascriptCard}
                />

                {/* VsCode */}
                <TechStackCard
                  name="VsCode"
                  icon={<VscVscode />}
                  cardRef={cssCard}
                />

                {/* Github */}
                <TechStackCard
                  name="GitHub"
                  icon={<FaGithubSquare />}
                  cardRef={htmlCard}
                />

                {/* Git */}
                <TechStackCard
                  name="Git"
                  icon={<FaGitAlt />}
                  cardRef={htmlCard}
                />
              </div>
            </div>

            {/* Databases */}
            <div id="databases-card" className="w-fit space-y-4">
              <h1 className="mx-auto w-fit text-xl font-medium">Databases</h1>
              <div className="flex gap-4">
                {/* MongoDB */}
                <TechStackCard
                  name="MongoDB"
                  icon={<SiMongodb />}
                  cardRef={cssCard}
                />

                {/* Redis */}
                <TechStackCard
                  name="Redis"
                  icon={<SiRedis />}
                  cardRef={cssCard}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
