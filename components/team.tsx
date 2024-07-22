import Image from "next/image";
import React from "react";
import team from "@/public/assets/team.svg";

function Team() {
  return (
    <div className="flex flex-col justify-between lg:flex-row mx-6 max-w-[90rem] lg:mx-auto">
      <section className="text-center lg:text-left">
        <h1 className="lg:text-[2rem]  font-bold ">Our Team</h1>
        <p className=" max-w-[25em] text-[1.5rem] mx-auto lg:mx-0 ">
          We are a team of social entrepreneurs from Europe and Afghanistan,
          united by our mission to empower youth through digital education. We
          believe in the transformative power of education.
        </p>
      </section>

      <div className="flex flex-wrap ">
        <Image
          src={team}
          alt="Innovation"
          className=" max-w-[500px] hidden lg:block object-contain"
        />
      </div>
    </div>
  );
}

export default Team;
