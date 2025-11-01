import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CollinsTYK | Software Engineer ▪︎ Web developer",
  description:
    "Discover the works of Chidozie Collins Achusiogu - A fullstack web developer and software engineer that specializing in modern software technologies. Building high-quality, user-friendly, scalable, and innovative applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} relative antialiased`}>
        <Header />
        <main className="mx-auto max-w-7xl pt-5 pb-40 md:pt-[66px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
