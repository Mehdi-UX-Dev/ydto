"use client";
import Image from "next/image";
import React from "react";
import { easeOut, motion } from "framer-motion";

function Page() {
  return (
    <div className="">
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: easeOut }}
        className="pt-6 pl-6"
      >
        {/* <Image src={""} alt="" /> */}
        <h1 className="font-bold text-[48px]">YDTO.org</h1>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex justify-center items-center h-[calc(100vh-150px)]  overflow-hidden "
      >
        <h1 className="  text-[32px] ">
          Pardon Our Dust, We&apos;re Crafting a New Website!
        </h1>
      </motion.div>
    </div>
  );
}

export default Page;
