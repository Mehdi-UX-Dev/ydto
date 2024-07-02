import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroImage from "@/public/assets/Growth.png";

function HeroSection() {
  return (
    <div className="mt-10 min-[912px]:flex items-center mx-6  ">
      <section className="text-center lg:text-left ">
        <h1 className="font-bold text-[2rem] lg:text-[3rem] px-1 max-w-[25em] mx-auto">
          Nurturing the Next Gen of Afghanistan’s Entrepreneurs & Leaders
        </h1>
        <h5>Equipping Youth to:</h5>
        <TypeAnimation
          sequence={[
            "Lead Afghanistan's tech revolution",
            1000,
            "Empower youth with education",
            1000,
          ]}
          style={{ color: "white" }}
          repeat={Infinity}
          className=""
          wrapper="p"
          speed={50}
        />

        <button className="text-white mt-4 border-white border px-4 w-48 h-14 py-2 rounded-[6px] ">
          Contact Us
        </button>
      </section>
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="hidden min-[912px]:block w-[600px]"
      />
    </div>
  );
}

export default HeroSection;
