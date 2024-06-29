"use client";
import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import Programs from "@/components/Programs";

function Page() {
  return (
    <div className="max-w-[90rem] mx-auto mt-8">
      <Navbar />
      <HeroSection />
      <Programs />
    </div>
  );
}

export default Page;
