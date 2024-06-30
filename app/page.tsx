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
      <div className="max-w-[90rem] mx-auto mt-8">
        <Navbar />
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
