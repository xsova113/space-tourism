"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Data } from "@/libs/interfaces";
import axios from "axios";
import HeroWrapper from "../heroWrapper";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/app/utils/motion";

const Crew = () => {
  const [data, setData] = useState<Data>();
  const [selected, setSelected] = useState(0);

  const getData = () => {
    axios.get("./data.json").then((response) => setData(response.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HeroWrapper>
      <Image
        src={"/assets/crew/background-crew-desktop.jpg"}
        alt="background-crew"
        height={1000}
        width={1000}
        className="hidden lg:block absolute inset-0 w-full h-screen -z-10"
      />
      <Image
        src={"/assets/crew/background-crew-tablet.jpg"}
        alt="background-crew"
        height={2000}
        width={1000}
        className="hidden sm:max-lg:block absolute inset-0 w-full min-h-screen -z-10"
      />
      <Image
        src={"/assets/crew/background-crew-mobile.jpg"}
        alt="background-crew"
        height={2000}
        width={1000}
        className="sm:hidden block absolute inset-0 w-full min-h-screen -z-10"
      />

      <div className="flex flex-col lg:flex-row text-white lg:justify-between gap-[100px] overflow-hidden  h-full items-center">
        <div className="flex flex-col w-full lg:w-[45%] gap-20 items-center text-center lg:text-start lg:items-start">
          <div className="flex">
            <motion.div
              variants={zoomIn(0.3, 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="text-white flex gap-6 text-xl"
            >
              <span className="text-gray-400 tracking-widest">02</span>
              <span className="tracking-widest font-extralight">
                MEET YOUR CREW
              </span>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col lg:items-start items-center"
          >
            <h2 className="text-white/60 text-xl">
              {data?.crew[selected].role.toLocaleUpperCase()}
            </h2>
            <h1 className="text-[35px] pt-2 pb-4">
              {data?.crew[selected].name.toLocaleUpperCase()}
            </h1>
            <p className="text-white/70 text-[15px]">
              {data?.crew[selected].bio}
            </p>
          </motion.div>
          <motion.div
            variants={zoomIn(0.3, 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex gap-6"
          >
            {data?.crew.map((item, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full hover:bg-white ${
                  selected === index ? "bg-white" : "bg-white/50"
                } transition cursor-pointer`}
                onClick={() => setSelected(index)}
              />
            ))}
          </motion.div>
        </div>
        {/* <Image
          src={data ? data.crew[selected].images.webp : "/assets/favicon.png"}
          alt="crew-image"
          width={400}
          height={400}
          className="lg:hidden md:max-lg:w-[350px] sm:w-[230px] w-[225px] h-auto"
        /> */}
      </div>
      <Image
        src={data ? data.crew[selected].images.webp : "/assets/favicon.png"}
        alt="crew-image"
        width={350}
        height={350}
        className="hidden lg:block absolute right-[120px] bottom-0 md:max-lg:w-[350px]"
      />
    </HeroWrapper>
  );
};

export default Crew;
