import Image from "next/image";
import React from "react";
import giz from "@/public/assets/giz.png";
import wfp from "@/public/assets/wfp.svg";
import corp from "@/public/assets/corps.png";
import mrastah from "@/public/assets/mrastajh.jpg";
import growth from "@/public/assets/Growth.png";

function HeroSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[80rem]   lg:mx-auto  items-center mx-6 h-[75vh] flex justify-between ">
        <section className=" grow flex flex-col items-center  justify-center ">
          <h1 className="font-bold text-[2rem]  lg:text-[3rem] max-w-[25ch] mx-auto ">
            Empowering Afghanistan’s Future Leaders and Innovators
          </h1>

          <p className="text-[1.5rem] max-w-[45ch]  mx-auto italic mb-14 text-gray-300 mt-2">
            we colloborate with prestigious organizations to empower and nurture
            youth of Afghanistan for a better future through digital education
            and entrepreneurship.
          </p>
          {/* <div className="flex justify-center ">
        
          </div> */}
        </section>

        <Image src={growth} alt="Transformation" />
      </div>

      <div className="flex mt-10  items-center flex-col md:flex-row ">
        <h3 className="hidden md:block text-[1.5rem] text-gray-400">
          Our Prestigious Donors:
        </h3>
        <div className="flex overflow-hidden flex-row items-center gap-8 ">
          <Image src={giz} className=" w-32 object-cover" alt="" />
          <Image src={wfp} className="w-40 object-cover" alt="" />
          <Image src={corp} className=" w-40 object-cover" alt="" />
          <Image src={mrastah} className=" w-32 object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
