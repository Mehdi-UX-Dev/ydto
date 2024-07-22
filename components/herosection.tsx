import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import giz from "@/public/assets/giz.png";
import wfp from "@/public/assets/wfp.png";
import corp from "@/public/assets/corps.png";
import mrastah from "@/public/assets/mrastah.png";

function HeroSection() {
  return (
    <div className="max-w-[80rem]   lg:mx-auto  items-center mx-6 h-[75vh] flex flex-col justify-between ">
      <section className="text-center grow flex flex-col justify-center ">
        <h1 className="font-bold text-[2rem]  lg:text-[3rem] max-w-[25ch] mx-auto ">
          Empowering Afghanistan’s Future Leaders and Innovators
        </h1>
        {/* <h5 className="text-[2rem] ">Equipping Youth to:</h5> */}
        {/* <TypeAnimation
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
        /> */}
        <p className="text-[1.5rem] max-w-[45ch]  mx-auto italic mb-14 text-gray-300 mt-2">
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
      <div className="flex mt-10  items-center flex-col md:flex-row ">
        <h3 className="hidden md:block text-[1.5rem] text-gray-400">
          Our Great Partners:
        </h3>
        <div className="flex overflow-hidden flex-row items-center gap-8 ">
          <Image src={giz} className=" w-20 object-cover" alt="" />
          <Image src={wfp} className="w-40 object-cover" alt="" />
          <Image src={corp} className=" w-20 object-cover" alt="" />
          <Image src={mrastah} className=" w-20 object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
