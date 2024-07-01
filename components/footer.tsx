import Image from "next/image";
import React from "react";
import facebook from "@/public/assets/facebook.svg";
import linkedin from "@/public/assets/linkedin.svg";
import instagram from "@/public/assets/instagram.svg";
import medium from "@/public/assets/medium.svg";
import { Copyright, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="px-10 py-10 mt-5 bg-gradient-to-r from-gray-950 to-gray-800">
      <h1 className="text-[2rem] font-bold">YDTDO.org</h1>
      <p>Teaching the DNA of future from Berlin to Kabul</p>

      <div className="flex items-start gap-8 py-5">
        <div>
          <p>About Us</p>
          <p>Programs</p>
          <p>Community</p>
          <p>Stories</p>
        </div>
        <div>
          <div className="flex text-white gap-2">
            <Image src={facebook} alt="facebook" className="text-white" />
            <Image src={instagram} alt="instagram" />
            <Image src={linkedin} alt="linkedin" />
            <Image src={medium} alt="medium" />
          </div>
          <div className="flex items-center gap-2">
            <Phone />
            <p className="">+49 123456798</p>
          </div>
        </div>
      </div>

      <div className="border-b border-white"></div>
      <div className="flex justify-between pt-2">
        <div className="flex gap-1">
          <p>YDTDO.org</p>
          <Copyright /> <p>2024</p>
        </div>
        <div className="flex gap-2">
          <p className="underline">IMPRIKNT</p>
          <p className="underline">DISCLAIMER</p>
          <p className="underline">PRIVACY POLICY</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
