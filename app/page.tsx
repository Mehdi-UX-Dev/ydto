"use client";
import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import Programs from "@/components/Programs";
import Info from "@/components/info";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

function Page() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
        className=" mt-10 lg:mt-[40px]  space-y-[120px] lg:space-y-[240px]  mb-[240px]"
      >
        <HeroSection />
        <Info />
        <Programs />
        <Team />
        <Contact />
      </motion.div>
      <Footer />
    </div>
  );
}

export default Page;
