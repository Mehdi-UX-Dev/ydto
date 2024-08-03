import Image from "next/image";
import React from "react";
import giz from "@/public/assets/giz.png";
import wfp from "@/public/assets/wfp.svg";
import corp from "@/public/assets/corps.png";
import mrastah from "@/public/assets/mrastajh.jpg";
import heroSectionImage from "@/public/assets/heroSection_illustration.svg";
import Link from "next/link";
import { MoveRight } from "lucide-react";

function HeroSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[80rem]   lg:mx-auto  items-center mx-6 lg: lg:h-[75vh] flex justify-between ">
        <section className=" grow flex flex-col   justify-center ">
          <h1 className="font-bold text-[2rem] text-center lg:text-left lg:text-[3rem] max-w-[25ch] mx-auto ">
            Empowering Afghanistan’s Future Leaders and Innovators
          </h1>

          <p className="text-[1.5rem] text-center lg:text-left  max-w-[35ch]  italic mb-10 text-gray-300 mt-2">
            we colloborate with prestigious organizations to empower and nurture
            youth of Afghanistan for a better future through digital education
            and entrepreneurship.
          </p>

          <Link
            href={"#"}
            className="flex gap-2 items-center justify-center lg:justify-start"
          >
            <span className="text-[1.5rem]">Learn more</span> <MoveRight />{" "}
          </Link>
        </section>

        <Image
          src={heroSectionImage}
          alt="heroSectionImage "
          className="h-fit w-[520px]  hidden lg:block"
        />
      </div>

      <div className="flex mt-20 md:mt-10   items-center flex-col md:flex-row ">
        <h3 className="hidden md:block text-[1.5rem] text-gray-400">
          Our Prestigious Donors:
        </h3>
        <div className="flex flex-wrap overflow-hidden flex-row items-center gap-8 ">
          <Link target="_blank" href={"https://www.giz.de/en/html/index.html"}>
            <Image src={giz} className=" w-32 object-cover" alt="" />
          </Link>
          <Link target="_blank" href={"https://www.wfp.org/"}>
            <Image src={wfp} className="w-40 object-cover" alt="" />
          </Link>
          <Link target="_blank" href={"https://www.mercycorps.org/"}>
            <Image src={corp} className=" w-40 object-cover" alt="" />
          </Link>
          <Link target="_blank" href={"https://www.mrastah.de/"}>
            <Image src={mrastah} className=" w-32 object-cover" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
