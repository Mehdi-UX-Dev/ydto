import Image from "next/image";
import React from "react";
import facebook from "@/public/assets/facebook.svg";
import linkedin from "@/public/assets/linkedin.svg";
import instagram from "@/public/assets/instagram.svg";
import { Copyright } from "lucide-react";
import Logo from "@/public/assets/logo.svg";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-10 py-10 mt-5  bg-gray-900 text-white ">
      <div className="flex gap-4">
        <Image src={Logo} alt="Logo" className="w-20 mb-2" />
        <div className="space-y-1">
          <h3 className="max-w-[25ch]">
            Youth Digital Training and Developement Organization
          </h3>
          <h3>د ځوانانو د ډیجیټل زده کړی او پرمختګ موسسه</h3>
        </div>
      </div>
      <div className="flex items-start gap-14 py-14 ">
        <div>
          <h3 className="text-[1.5rem] pb-4">Who We Are</h3>
          <ul className="space-y-1">
            <li>Our Leadership</li>
            <li>Our Achievements</li>
            <li>Our Background</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1.5rem] pb-4">What We Do</h3>
          <ul className="space-y-1">
            <li>Digital Training</li>
            <li>Web Developement Bootcamp</li>
            <li>UX/UI Bootcamp</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1.5rem] pb-4">Contact Us</h3>
          <p className="pb-1">Adress: Taimani 13th Street</p>
          <p className="pb-1">Show On Map</p>
          <Link href={"tel:+93123456789"}>Tel:+93789456789</Link>
        </div>
      </div>
      <div className="flex flex-wrap text-white gap-4 pb-2">
        <Image src={facebook} alt="facebook" className="w-10" />
        <Image src={instagram} alt="instagram" className="w-10" />
        <Image src={linkedin} alt="linkedin" className="w-10`" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-2 ">
        <div className="flex gap-1 items-center">
          <p>Copyright</p>
          <Copyright />{" "}
          <p>{year} Youth Digital Training and Developement Organization</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
