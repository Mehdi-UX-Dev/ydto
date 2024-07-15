import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroImage from "@/public/assets/Growth.png";

function HeroSection() {
  return (
    <div className="max-w-[80rem] lg:mx-auto   items-center mx-6  ">
      <section className="text-center  ">
        <h1 className="font-bold text-[2rem] lg:text-[3rem] ">
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
        <p className="text-[1.5rem] max-w-[45ch]  mx-auto italic mt-10">
          Join us in transforming the future of Afghan youth through digital
          education and entrepreneurship.
        </p>
        <div className="flex justify-center ">
          <button className="w-64 h-20 relative mt-4 cursor-pointer ">
            <span className="highlight "></span>
            <span className="text text-[1.5rem]">Get Involved</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
