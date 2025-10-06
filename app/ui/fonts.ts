import { Geist, Geist_Mono, Luckiest_Guy, Preahvihear } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const preahvihear = Preahvihear({
  weight: "400",
  subsets: ["khmer", "latin"],
});
export const luckiest_guy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});
