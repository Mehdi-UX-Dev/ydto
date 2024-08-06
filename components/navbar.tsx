import React from "react";
import { motion, easeOut } from "framer-motion";
import { WhatWeDo } from "./whatWeDo";
import Link from "next/link";
import { MobileNavMenu } from "./mobileNavMenu";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { usePathname } from "next/navigation";
import { WhoWeAre } from "./whoWeAre";

function Navbar() {
  const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const path = usePathname();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: easeOut }}
      className=" flex items-center justify-between mx-6 max-w-[80rem] xl:mx-auto  pt-4 lg:pt-8"
    >
      <div className="flex items-center gap-4">
        <Image src={logo} alt="YDTDO" className="w-20 object-cover" />
        <div className="lg:flex flex-col items-end hidden ">
          <p className="w-[25ch]">
            Youth Digital Training and Developement Organization
          </p>
          <p>د ځوانانو د ډیجیټل زده کړی او پرمختګ موسسه</p>
        </div>
      </div>
      <div className="xl:flex  items-center gap-4 lg:gap-8 hidden">
        <WhoWeAre />
        <WhatWeDo />

        <Link
          href={"#contact"}
          className="lg:text-[24px] hidden lg:block"
          onClick={(e) => {
            e.preventDefault(), smoothScroll("contact");
          }}
        >
          Contact Us
        </Link>
      </div>

      <div className="flex items-center gap-8">
        {path !== "/apply" && (
          <Link
            href={"/apply"}
            className="w-[12rem] hidden sm:block  h-16 relative  cursor-pointer hover:scale-110  "
          >
            <span className="highlight "></span>
            <span className="text   text-[1.5rem]">Apply Now</span>
          </Link>
        )}

        <MobileNavMenu />
      </div>
    </motion.nav>
  );
}

export default Navbar;
