import React from "react";
import { motion, easeOut } from "framer-motion";
import { DropdownComponent } from "./dropdown";
import Link from "next/link";
import { MobileNavMenu } from "./mobileNavMenu";

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
      className=" flex items-center justify-between mx-6 max-w-[90rem] xl:mx-auto mt-4 lg:mt-8"
    >
      <h1 className="font-bold  lg:text-[48px]">YDTDO.org</h1>
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
