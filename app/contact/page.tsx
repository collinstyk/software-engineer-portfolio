import { CiLocationOn, CiMail } from "react-icons/ci";
import { cn } from "../lib/utils";
import { geistMono } from "../ui/fonts";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { cloneElement } from "react";
import { GoArrowRight } from "react-icons/go";

const socials = [
  {
    link: "mailto:collinstyk803@gmail.com",
    label: "collinstyk803@gmail.com",
    title: "E-mail:",
    icon: <CiMail strokeWidth={1} size={24} />,
  },
  {
    link: "https://wa.me/+2349078312075",
    label: "Send a message",
    title: "WhatsApp:",
    icon: <FaWhatsapp strokeWidth={1} size={24} />,
  },
  {
    link: "tel:+2349078312075",
    label: "+234 907 831 2075",
    title: "Contact:",
    icon: <BsTelephoneFill size={24} />,
  },
];

const fields = [
  { name: "fullname", inputType: "text", label: "Fullname", required: true },
  { name: "email", inputType: "email", label: "Email", required: true },
  { name: "phone-number", inputType: "tel", label: "Phone", required: true },
  { name: "subject", inputType: "text", label: "Subject", required: true },
  { name: "message", inputType: "textarea", label: "Message", required: true },
];

export default function Contact() {
  return (
    <main className="mx-6 my-4 px-6 lg:px-4">
      <section className="flex flex-col gap-8 space-y-8 sm:p-10 md:flex-row md:justify-between">
        <div>
          <h1
            className={cn(
              "mb-6 text-center text-5xl font-bold text-neutral-500 uppercase sm:text-6xl lg:text-left",
              geistMono.className,
            )}
          >
            {/* Add Shimering effect */}
            Contact Me
          </h1>
          <h4 className="mb-4 text-center font-semibold md:text-left">
            Let's create something great together
          </h4>

          <div>
            <ul className="space-y-4">
              {socials.map((item) => {
                const { link, label, title, icon } = item;
                return (
                  <li key={item.link}>
                    <div className="flex items-center space-x-4">
                      {cloneElement(icon)}

                      <span>
                        <h6 className="text-sm font-light">{title}</h6>
                        <Link
                          href={link}
                          target="_blank"
                          className="!font-normal"
                        >
                          {label}
                        </Link>
                      </span>
                    </div>
                  </li>
                );
              })}

              {/* Location */}
              {/* <li>
                <div className="flex items-center space-x-4">
                  <CiLocationOn strokeWidth={1} size={24} />

                  <span>
                    <h6 className="text-sm font-light">Location:</h6>
                    <p className="!font-normal">
                      Benin City, Edo State, Nigeria
                    </p>
                  </span>
                </div>
              </li> */}
            </ul>
          </div>
        </div>

        <form className="">
          <h4 className="text-sm font-semibold uppercase">Get in touch</h4>
          <div className="mt-6 gap-4 space-y-4 sm:grid sm:grid-cols-2">
            {fields.map((field) => {
              const { name, inputType, label, required } = field;

              if (inputType === "textarea")
                return (
                  <div key={name} className="relative col-span-2">
                    <textarea
                      required={required}
                      spellCheck
                      name={name}
                      id={name}
                      autoComplete="off"
                      className="peer h-36 w-full rounded-lg border border-neutral-500 bg-transparent p-3.5 outline-none valid:border-neutral-600 focus:border-neutral-600 dark:valid:border-neutral-400 dark:focus:border-neutral-400"
                    />
                    <label
                      htmlFor={name}
                      className="dark:peer-focus:bg-background dark:peer-valid:bg-background peer-focus:text-dark-gray pointer-events-none absolute top-0 left-0 px-3.5 pt-3.5 text-neutral-500 transition-all peer-valid:z-10 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:bg-[#e7e8fd] peer-valid:pt-0 peer-valid:text-white peer-focus:z-10 peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:bg-[#e7e8fd] peer-focus:pt-0 dark:text-neutral-400 dark:peer-focus:text-white"
                    >
                      {label}
                    </label>
                  </div>
                );
              else
                return (
                  <div key={name} className="relative col-span-1">
                    <input
                      type={inputType}
                      name={name}
                      id={name}
                      required={required}
                      autoComplete="off"
                      className="peer h-13 w-full rounded-lg border border-neutral-500 bg-transparent p-3.5 outline-none valid:border-neutral-600 focus:border-neutral-600 dark:valid:border-neutral-400 dark:focus:border-neutral-400"
                    />
                    <label
                      htmlFor={name}
                      className="dark:peer-focus:bg-background dark:peer-valid:bg-background peer-focus:text-dark-gray pointer-events-none absolute top-0 left-0 px-3.5 pt-3.5 text-neutral-500 transition-all peer-valid:z-10 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:bg-[#e7e8fd] peer-valid:pt-0 peer-valid:text-white peer-focus:z-10 peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:bg-[#e7e8fd] peer-focus:pt-0 dark:text-neutral-400 dark:peer-focus:text-white"
                    >
                      {label}
                    </label>
                  </div>
                );
            })}

            <button className="bg-primary col-span-2 flex w-full cursor-pointer items-center justify-center space-x-4 rounded-xl py-3 text-lg font-medium">
              <span>send</span> <GoArrowRight size={24} />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

// TODO
// Try another way to validate the subject input
