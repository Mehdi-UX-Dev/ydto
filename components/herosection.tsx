import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroImage from "@/public/assets/Growth.png";

function HeroSection() {
  return (
    <div className="max-w-[80rem] lg:mx-auto min-[912px]:grid grid-cols-12 items-center mx-6  ">
      <section className="text-center lg:text-left col-span-6 ">
        <h1 className="font-bold text-[2rem] lg:text-[3rem] px-1 max-w-[25em] mx-auto">
          Empowering Afghanistan’s Future Leaders and Innovators
        </h1>
        <h5 className="text-[2rem] ">Equipping Youth to:</h5>
        <TypeAnimation
          sequence={[
            "Lead Afghanistan's tech revolution",
            1000,
            "Skills to Succeed",
            1000,
          ]}
          repeat={Infinity}
          className="text-white text-[1.5rem]"
          wrapper="p"
          speed={50}
        />

        {/* <button className="text-foreground mt-8 text-[1.5rem] border-foreground border px-5 w-48  rounded-[6px] py-3">
          Contact Us
        </button> */}
        <p className="text-[1.5rem] italic mt-10">
          Join us in transforming the future of Afghan youth through digital
          education and entrepreneurship.
        </p>
        <button className="w-64 h-20 relative mt-4 cursor-pointer">
          <span className="highlight "></span>
          <span className="text text-[1.5rem]">Get Involved</span>
        </button>
      </section>
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="hidden min-[912px]:block  col-span-6 "
      />
    </div>
  );
}

export default HeroSection;
