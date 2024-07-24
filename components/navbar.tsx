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
      <Image src={logo} alt="" className=" object-cover" />
      <p>Youth Digital Training and Developement Organization</p>
      <p></p>
      <div className="md:flex  items-center gap-4 hidden">
        <DropdownComponent />
        <Link
          onClick={(e) => {
            e.preventDefault(), smoothScroll("about");
          }}
          href={"#about"}
          className="lg:text-[24px]"
        >
          About Us
        </Link>
        <Link
          href={"#contact"}
          className="lg:text-[24px]"
          onClick={(e) => {
            e.preventDefault(), smoothScroll("contact");
          }}
        >
          Contact Us
        </Link>
      </div>

      <MobileNavMenu />
    </motion.nav>
  );
}

export default Navbar;
