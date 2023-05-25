"use client";

import { Bruno_Ace } from "next/font/google";
import React, { useEffect, useState } from "react";
import HeroWrapper from "../heroWrapper";
import Image from "next/image";
import { Data } from "@/libs/interfaces";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, zoomIn } from "@/app/utils/motion";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
});

const Technology = () => {
  const [data, setData] = useState<Data>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    axios.get("./data.json").then((response) => setData(response.data));
  }, []);

  return (
    <HeroWrapper>
      <Image
        src={"/assets/technology/background-technology-desktop.jpg"}
        alt="background-desktop"
        width={1000}
        height={1000}
        className="absolute inset-0 -z-10 hidden lg:block w-full min-h-[110%]"
      />
      <Image
        src={"/assets/technology/background-technology-tablet.jpg"}
        alt="background-tablet"
        width={1000}
        height={1000}
        className="absolute inset-0 -z-10 lg:hidden sm:max-md:block w-full min-h-[165%]"
      />
      <Image
        src={"/assets/technology/background-technology-mobile.jpg"}
        alt="background-mobile"
        width={1000}
        height={1000}
        className="absolute inset-0 -z-10 sm:hidden block min-w-screen min-h-[190%]"
      />

      <div className="flex flex-col lg:flex-row gap-x-16 items-center text-center lg:text-start lg:items-end">
        <div className="flex flex-col w-[90%] lg:w-[60%]">
          <motion.div
            variants={zoomIn(0.3, 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="text-white text-xl lg:pb-28 pb-14 flex gap-4 justify-center lg:justify-normal"
          >
            <span className="text-white/60 tracking-widest">03</span>
            <span className="font-extralight">SPACE LAUNCH 101</span>
          </motion.div>
          <div className="flex flex-col-reverse items-center lg:flex-row gap-12">
            <motion.div
              variants={fadeIn("down", "tween", 0.3, 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="flex lg:flex-col gap-6 max-lg:pb-20"
            >
              {data?.technology.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`w-16 h-16 rounded-full border-white/30 border text-white focus:bg-white focus:text-black`}
                >
                  {index + 1}
                </button>
              ))}
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.3, 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col w-full"
            >
              <span className={`text-white/60 tracking-widest font-extralight`}>
                THE TERMINOLOGY...
              </span>
              <h1
                className={`${brunoAce.className} text-white text-[35px] max-lg:pb-8 max-lg:pt-4`}
              >
                {data?.technology[selected].name.toLocaleUpperCase()}
              </h1>
              <p className="text-white/70 pt-6">
                {data?.technology[selected].description}
              </p>
            </motion.div>
          </div>
        </div>

        <Image
          src={"/" + data?.technology[selected].images.portrait}
          alt="image"
          width={300}
          height={300}
          className="flex lg:w-[350px] lg:h-[350px] w-[350px] h-[350px] transition-all lg:absolute bottom-20 right-0"
        />
      </div>
    </HeroWrapper>
  );
};

export default Technology;
