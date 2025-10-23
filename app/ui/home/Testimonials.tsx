"use client";

import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="relative mt-12 w-full space-y-8">
      <h1 className="mx-auto w-fit text-5xl font-bold">Testimonials</h1>

      <section className="mx-8 flex gap-6">
        {[
          {
            body: "Chidozie transformed our outdated website into a modern, responsive platform that truly reflects our brand. His attention to detail and understanding of both frontend design and backend logic made the whole process smooth and efficient.",
            image: "/collins-1.jpg",
            name: "Collins Achusiogu",
            description: "Founder, BizShelves",
          },
          {
            body: "Chidozie is a dependable developer with a strong grasp of React and Node.js. He quickly adapts to new technologies and contributes clean, well-structured code. His ability to collaborate and problem-solve makes him an asset to any engineering team.",
            image: "/collins-1.jpg",
            name: "Matthew Sunday",
            description: "Product Designer",
          },
          {
            body: "Working with Chidozie was a great experience. He’s creative, organized, and always brings fresh ideas to the table. From UI layouts to backend integration, he handled every part of the project with professionalism.",
            image: "/collins-1.jpg",
            name: "James Victor",
            description: "Senior Software Engineer",
          },
          {
            body: "Chidozie transformed our outdated website into a modern, responsive platform that truly reflects our brand. His attention to detail and understanding of both frontend design and backend logic made the whole process smooth and efficient.",
            image: "/collins-1.jpg",
            name: "Amaka Okafor",
            description: "Founder, Standard Barrels Ltd",
          },
        ].map((testimonial) => {
          const { body, image, name, description } = testimonial;
          return (
            <article className="w-68 rounded-lg bg-neutral-50 px-4 pb-4 shadow-xl dark:bg-neutral-800">
              <div className="relative bottom-8 mx-auto w-fit rounded-full bg-[#e7e8fd] p-2 dark:bg-[#010109]">
                <Image
                  src={image}
                  height={60}
                  width={60}
                  alt="testimonial portrait"
                  className="rounded-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="#text-center relative text-sm">
                  <span className="text-primary/40 absolute -top-2 -left-3 text-7xl">
                    “
                  </span>
                  <span className="z-10">{body}</span>
                  <span className="text-primary/40 absolute right-2 -bottom-6 text-5xl">
                    ”
                  </span>
                </p>
                <h5 className="#text-center z-10 text-sm font-semibold">
                  {name} -{" "}
                  <span className="text-primary text-xs font-normal">
                    {description}
                  </span>
                </h5>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Testimonials;
