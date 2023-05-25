"use client";

import Image from "next/image";
import { Bruno_Ace } from "next/font/google";
import { motion } from "framer-motion";
import { container, fadeIn, zoomIn } from "../utils/motion";
import Link from "next/link";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div>
      <Image
        src={"/assets/home/background-home-desktop.jpg"}
        alt="home-bg-image"
        width={1900}
        height={2000}
        className="hidden lg:block absolute inset-0 -z-10 transition-all h-screen min-w-screen"
      />

      <Image
        src={"/assets/home/background-home-tablet.jpg"}
        alt="home-bg-image"
        width={1900}
        height={2000}
        className="hidden lg:hidden sm:block absolute inset-0 -z-10 transition-all min-h-screen min-w-screen"
      />

      <Image
        src={"/assets/home/background-home-mobile.jpg"}
        alt="home-bg-image"
        width={1900}
        height={2000}
        className="lg:hidden md:hidden block absolute inset-0 -z-10 transition-all h-[115%] min-w-screen"
      />

      <motion.div
        variants={fadeIn("right", "spring", 0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="flex flex-col md:flex-row justify-between items-center px-16 md:place-items-end md:pt-44 pt-24 gap-20 md:gap-0"
      >
        <div className="flex flex-col md:max-w-[45%] text-center md:text-start">
          <h1 className="text-slate-400 tracking-wider">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <span
            className={`text-white text-[70px] pb-6 pt-5 ${brunoAce.className}`}
          >
            SPACE
          </span>
          <p className="text-slate-400">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truely out of
            this world experience!
          </p>
        </div>
        <Link href={"destination"}>
          <motion.div
            variants={zoomIn(0.3, 0.5)}
            initial="hidden"
            whileInView={"show"}
            className={`p-20 w-[200px] h-[200px] rounded-[100%] bg-white flex items-center justify-center text-2xl ${brunoAce.className} hover:bg-gray-300`}
          >
            EXPLORE
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
