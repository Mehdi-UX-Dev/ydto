import React from "react";
import { motion, easeOut } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: easeOut }}
      className="pt-6 pl-6 flex justify-between"
    >
      <h1 className="font-bold text-[48px]">YDTDO.org</h1>
      <div></div>
    </motion.nav>
  );
}

export default Navbar;
