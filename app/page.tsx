"use client";
import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import Programs from "@/components/Programs";
import Info from "@/components/info";
import Partners from "@/components/partners";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

function Page() {
  return (
    <div>
      <Navbar />
      {/* <div className="absolute h-screen w-full -z-10   bg-[radial-gradient(circle_at_top_right,rgba(74,134,232,1)0%,rgba(74,134,232,0.1)50%,rgba(74,134,232,0)100%)]"></div> */}
      {/* <div className="absolute h-screen w-full -z-10   bg-[radial-gradient(circle_at_top_right,rgba(74,134,232,1)0%,rgba(74,134,232,0)100%)]"></div> */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
        className=" mt-10 lg:mt-[40px]  space-y-[120px] lg:space-y-[240px]  mb-[240px]"
      >
        <HeroSection />
        <Programs />
        <Info />
        {/* <Partners /> */}
        <Team />
        <Contact />
      </motion.div>
      <Footer />
    </div>
  );
}

export default Page;
