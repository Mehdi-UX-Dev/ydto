"use client";
import Image from "next/image";
import React from "react";
import { easeOut, motion } from "framer-motion";
import logo from "@/public/assets/logo.png";
import Navbar from "@/components/navbar";

function Page() {
  return (
    <div className="">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex justify-center items-center h-[calc(100vh-150px)]  overflow-hidden "
      >
        <h1 className="  text-[32px] text-center ">
          Pardon Our Dust, We&apos;re Crafting a New Website!
        </h1>
      </motion.div>
    </div>
  );
}

export default Page;
