"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Data } from "@/libs/interfaces";
import axios from "axios";
import HeroWrapper from "../heroWrapper";
import { Bruno_Ace } from "next/font/google";
import { motion } from "framer-motion";
import { planetVariants, zoomIn } from "@/app/utils/motion";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
});

const Destination = () => {
  const [data, setData] = useState<Data>();
  const [selected, setSelected] = useState(0);

  const getData = () => {
    axios
      .get("./data.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HeroWrapper>
      <Image
        src={`/assets/destination/background-destination-desktop.jpg`}
        alt="background-desktop"
        width={1000}
        height={1000}
        className="hidden lg:block absolute inset-0 -z-10 w-full h-full"
      />
      <Image
        src={`/assets/destination/background-destination-tablet.jpg`}
        alt="background-tablet"
        width={1000}
        height={1000}
        className="lg:hidden block absolute inset-0 -z-10 w-full min-h-full"
      />
      <Image
        src={`/assets/destination/background-destination-mobile.jpg`}
        alt="background-mobile"
        width={1000}
        height={1000}
        className="md:hidden block absolute inset-0 -z-10 w-full min-h-full"
      />

      <div className="flex flex-col lg:flex-row items-center text-center lg:text-start lg:items-end">
        <div className="flex flex-col flex-1 gap-20">
          <motion.div
            variants={zoomIn(0.3, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-white flex gap-6 text-xl"
          >
            <span className="text-gray-400 tracking-widest">01</span>
            <span className="tracking-widest font-extralight">
              PICK YOUR DESTINATION
            </span>
          </motion.div>
          <motion.div
            variants={planetVariants("left")}
            initial="hidden"
            whileInView={"show"}
            className="-z-10"
          >
            <Image
              src={"/" + data?.destinations[selected].images.webp}
              alt="moon"
              width={350}
              height={350}
              className="lg:ml-5 mb-20 lg:mb-0"
            />
          </motion.div>
        </div>

        <motion.div
          variants={zoomIn(0.3, 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="text-white flex-col flex-1"
        >
          <div className="flex gap-12 justify-center lg:justify-start">
            {data?.destinations.map((item, index) => (
              <span
                key={index}
                className="text-white/60 hover:text-white border-transparent border-b-2 hover:border-white pb-2 transition-all cursor-pointer"
                onClick={() => setSelected(index)}
              >
                {item.name}
              </span>
            ))}
          </div>

          <h1 className={`text-[78px] ${brunoAce.className}`}>
            {data?.destinations[selected].name.toLocaleUpperCase()}
          </h1>
          <p className="text-white/80 pb-10 text-base">
            {data?.destinations[selected].description}
          </p>

          <hr className="border-t border-gray-600" />

          <div className="flex mt-8">
            <div className="flex flex-col flex-1 gap-2">
              <span className="text-xs text-white/60">AVG. DISTANCE</span>
              <span className="text-2xl">
                {data?.destinations[selected].distance}
              </span>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <span className="text-xs text-white/60">EST. TRAVEL TIME</span>
              <span className="text-2xl">
                {data?.destinations[selected].travel}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </HeroWrapper>
  );
};

export default Destination;
function useCallBack(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
