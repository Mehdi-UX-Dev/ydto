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

function Page() {
  return (
    <>
      <Navbar />
      <div className=" mt-10 lg:mt-[80px]  space-y-[240px] mb-[240px]">
        <HeroSection />
        <Programs />
        <Info />
        <Partners />
        <Team />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Page;
