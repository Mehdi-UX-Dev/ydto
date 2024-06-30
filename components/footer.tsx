import Image from "next/image";
import React from "react";
import facebook from "@/public/assets/facebook.svg";
import linkedin from "@/public/assets/linkedin.svg";
import instagram from "@/public/assets/instagram.svg";
import medium from "@/public/assets/medium.svg";

function Footer() {
  return (
    <footer className="px-10 py-5">
      <h1 className="text-[2rem] font-bold">YDTDO.org</h1>
      <p>Teaching the DNA of future from Berlin to Kabul</p>

      <div>
        <div>
          <p>About Us</p>
          <p>Programs</p>
          <p>Community</p>
          <p>Stories</p>
        </div>
        <div className="flex text-white">
          <Image src={facebook} alt="facebook" className="text-white" />
          <Image src={instagram} alt="instagram" />
          <Image src={linkedin} alt="linkedin" />
          <Image src={medium} alt="medium" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
