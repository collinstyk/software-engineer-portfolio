import { cloneElement, ReactElement } from "react";

type CardProps = {
  index: number;
  icon: ReactElement<any>;
  iconClass?: string;
  size?: number;
  title: string;
  description: string;
  isActive: boolean;
  onHover: () => void;
};

export default function Card({
  index,
  icon,
  iconClass,
  size = 24,
  title,
  description,
  isActive,
  onHover,
}: CardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-xl p-0.25"
      onMouseEnter={onHover}
    >
      <div
        className={`before:from-primary before:to-primary after:from-primary after:to-primary relative h-full space-y-3 rounded-xl bg-neutral-50 p-4 shadow-lg before:absolute before:-top-0.25 before:-left-0.25 before:-z-10 before:h-[calc(100%+1px)] before:w-[calc(100%+1px)] before:bg-gradient-to-br before:from-20% before:via-neutral-700 before:via-50% before:to-80% before:transition-opacity before:duration-300 after:absolute after:top-0.25 after:left-0.25 after:-z-10 after:h-[calc(100%+1px)] after:w-[calc(100%+1px)] after:bg-gradient-to-br after:from-20% after:via-neutral-700 after:via-50% after:to-80% after:transition-opacity after:duration-300 dark:bg-neutral-900 ${isActive ? "before:opacity-100 after:opacity-100" : "before:opacity-0 after:opacity-0"}`}
      >
        <span className="bg-primary shadow-primary inline-block rounded-full p-4 text-neutral-50 shadow-[0_5px_35px]">
          {cloneElement(icon, { className: iconClass ? iconClass : "", size })}
        </span>
        <article className="space-y-2">
          <h3 className="text-lg font-medium sm:text-2xl">{title}</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        </article>
      </div>
      <div
        className={`bg-primary absolute left-1/2 h-[200px] w-[200px] transition-all duration-300 ${isActive ? "-translate-x-1/2 opacity-100" : "translate-1/2 opacity-0"} blur-[80px]`}
      ></div>
    </div>
  );
}

// Might have to change the primary color to teal or green
