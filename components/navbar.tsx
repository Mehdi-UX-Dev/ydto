import React from "react";
import { motion, easeOut } from "framer-motion";
import { DropdownComponent } from "./dropdown";
import Link from "next/link";
import { MobileNavMenu } from "./mobileNavMenu";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: easeOut }}
      className=" flex items-center justify-between mx-6"
    >
      <h1 className="font-bold  lg:text-[48px]">YDTDO.org</h1>
      <div className="md:flex  items-center gap-4 hidden">
        <DropdownComponent />
        <Link href={"#"} className="lg:text-[24px]">
          About Us
        </Link>
        <Link href={"#"} className="lg:text-[24px]">
          Contact Us
        </Link>
      </div>

      <MobileNavMenu />
    </motion.nav>
  );
}

export default Navbar;
