import Image from "next/image";

export default function About() {
  return (
    <div className="mt-4">
      <main className="relative mx-auto my-20 flex w-2/3 justify-center gap-10">
        <div className="sticky">
          <div className="w-fit rounded-full border-2 border-neutral-500 dark:border-neutral-700">
            <Image
              src={"/collins-1.jpg"}
              alt="Chidozie Collins Achusiogu"
              height={158}
              width={158}
              className="rounded-full"
            />
          </div>
          {/* socials, gmail, phone number and other links */}
        </div>
        <article className="flex-1 space-y-5">
          <h1 className="text-6xl font-bold">Collins Achusiogu.</h1>
          <h3 className="text-4xl font-extralight">Fullstack Web Developer.</h3>
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
