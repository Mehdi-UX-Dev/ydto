import React from "react";
import { motion, easeOut } from "framer-motion";
import { DropdownComponent } from "./dropdown";
import Link from "next/link";
import { MobileNavMenu } from "./mobileNavMenu";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";

function Navbar() {
  const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: easeOut }}
      className=" flex items-center justify-between mx-6 max-w-[80rem] xl:mx-auto  pt-4 lg:pt-8"
    >
      <div className="flex items-center gap-4">
        <Image src={logo} alt="YDTDO" className="w-20 object-cover" />
        <div className="flex flex-col items-end">
          <p className="w-[25ch]">
            Youth Digital Training and Developement Organization
          </p>
          <p>د ځوانانو د ډیجیټل زده کړی او پرمختګ موسسه</p>
        </div>
      </div>
      <div className="md:flex  items-center gap-4 lg:gap-8 hidden">
        {/* <DropdownComponent /> */}

        {/* <Link href={"#"} className="lg:text-[24px]">
          Home
        </Link> */}
        <Link href={"#"} className="lg:text-[24px]">
          Who we are
        </Link>
        <Link href={"#"} className="lg:text-[24px]">
          What we do
        </Link>
        {/* <Link href={"#"} className="lg:text-[24px]">
          Vacancies
        </Link> */}
        {/* <Link
          onClick={(e) => {
            e.preventDefault(), smoothScroll("about");
          }}
          href={"#about"}
          className="lg:text-[24px]"
        >
          About Us
        </Link> */}
        <Link
          href={"#contact"}
          className="lg:text-[24px]"
          onClick={(e) => {
            e.preventDefault(), smoothScroll("contact");
          }}
        >
          Contact Us
        </Link>

        <button className="w-[12rem] h-16 relative  cursor-pointer hover:scale-110">
          <span className="highlight "></span>
          <span className="text   text-[1.5rem]">Apply Now</span>
        </button>
      </div>

      <MobileNavMenu />
    </motion.nav>
  );
}

export default Navbar;
