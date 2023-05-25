"use client";

import { navItems } from "@/libs/constant";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { container, fadeIn, items, zoomIn } from "../utils/motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleSize = () => {
    if (window.innerWidth >= 640) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
  }, []);

  return (
    <>
      {open && (
        <div className={`absolute inset-0`} onClick={() => setOpen(false)} />
      )}
      <div className="flex flex-col items-center md:-mr-[55px] sm:-mr-[55px] z-50">
        <div className="flex items-center justify-between pt-8 transition-all sm:pt-0 w-full sm:gap-[90px] md:gap-[200px] lg:gap-0 ">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 0.5)}
            initial="hidden"
            whileInView={"show"}
          >
            <Link href={"/"}>
              <Image
                src={"/assets/shared/logo.svg"}
                alt="logo"
                width={50}
                height={50}
                className="bg-white rounded-full cursor-pointer"
              />
            </Link>
          </motion.div>

          <div className="hidden lg:block md:w-[440px] z-10 relative transition-all">
            <div className="border-b border-white/25 ml-10 w-[94%] relative" />
          </div>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="sm:hidden block w-[35px] h-[30px] cursor-pointer z-10"
          >
            <Image
              src={`/assets/shared/icon-${open ? "close" : "hamburger"}.svg`}
              onClick={() => setOpen(!open)}
              alt="burger-icon"
              width={50}
              height={30}
            />
          </motion.div>

          <motion.div
            variants={container("left", "tween")}
            initial="hidden"
            whileInView={"show"}
            className="hidden sm:block relative items-center w-[75%]"
          >
            <div className="flex text-white font-extralight lg:text-md sm:text-md sm:gap-8 lg:gap-10 backdrop-blur-lg bg-slate-600/20 pt-9 px-20 sm:px-5 md:px-10 lg:pl-20 lg:pr-[100px]">
              {navItems.map((item) => (
                <motion.div key={item.tag} variants={items}>
                  <Link
                    href={item.url}
                    className="flex gap-3 border-b-2 border-transparent focus:border-white hover:border-white pb-9 transition-all cursor-pointer"
                  >
                    <span className="hidden lg:block font-semibold">
                      {item.tag}
                    </span>
                    <h1 className="text-white/80">{item.title}</h1>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {open && (
          <motion.div
            variants={container("left", "tween")}
            initial="hidden"
            animate="show"
            className="bg-black/90 absolute items-start pt-[180px] pl-6 left-[130px] text-[13px] inset-0 flex flex-col "
          >
            {navItems.map((item) => (
              <motion.div key={item.tag} variants={items}>
                <Link
                  className="text-white font-extralight text-lg flex gap-5 space-y-6 items-baseline cursor-pointer hover:text-white/70 transition-all border-b-2 border-transparent hover:border-white/80 pb-2"
                  href={item.url}
                  onClick={() => setOpen(false)}
                >
                  <span className="font-semibold">{item.tag}</span>
                  <h1 className="text-white/90 hover:text-white/70">
                    {item.title}
                  </h1>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default NavBar;
