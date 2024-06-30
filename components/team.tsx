import Image from "next/image";
import React from "react";
import map from "@/public/assets/map.png";

function Team() {
  return (
    <div className="flex flex-col lg:flex-row">
      <section className="text-center lg:text-left">
        <h1 className="text-[2rem] lg:text-[3rem] font-bold lg:w-[15em]">
          Our Team
        </h1>
        <p className="lg:w-[35em] max-w-prose mx-auto lg:mx-0 ">
          We are a team of social entrepreneurs scattered across Europe and
          Afghanistan - united by our mission to promote empowerment through
          digital education for youth around the world. We believe in the
          transformative power of education.
        </p>
      </section>

      <div className="flex flex-wrap">
        <Image
          src={map}
          alt="Innovation"
          className=" max-w-[500px] hidden lg:block object-contain"
        />
      </div>
    </div>
  );
}

export default Team;
