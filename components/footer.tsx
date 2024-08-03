import Image from "next/image";
import React from "react";
import facebook from "@/public/assets/facebook.svg";
import linkedin from "@/public/assets/linkedin.svg";
import instagram from "@/public/assets/instagram.svg";
import medium from "@/public/assets/medium.svg";
import { Copyright, Phone } from "lucide-react";
import Logo from "@/public/assets/logo.svg";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-10 py-10 mt-5  bg-gray-900">
      <div className="flex gap-4 items-center">
        <Image src={Logo} alt="Logo" className="w-20 mb-2" />
        <h3 className="max-w-[25ch]">
          Youth Digital Training and Development Organization
        </h3>
      </div>
      {/* //todo we need a slogan for the org */}
      <div className="flex items-start gap-8 py-5 lg:text-[1.5rem]">
        <div>
          <p>About Us</p>
          <p>Programs</p>
          <p>Community</p>
          <p>Stories</p>
        </div>
        <div>
          <div className="flex flex-wrap text-white gap-2">
            <Image src={facebook} alt="facebook" className="text-white" />
            <Image src={instagram} alt="instagram" />
            <Image src={linkedin} alt="linkedin" />
            <Image src={medium} alt="medium" />
          </div>
          <div className="flex items-center gap-2">
            <Phone className="hidden md:block" />
            <Link href={"tel:+93744063886"} type="">
              +93 744063886
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-white"></div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-2 ">
        <div className="flex gap-1 text-[1.5rem] items-center">
          <p>ydtdo.org</p>
          <Copyright /> <p>{year}</p>
        </div>
        <div className="md:flex gap-2 ">
          <p className="underline">DISCLAIMER</p>
          <p className="underline">PRIVACY POLICY</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
