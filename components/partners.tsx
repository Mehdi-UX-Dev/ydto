import Image from "next/image";
import React from "react";

const pics = [
  "asara.png",
  "berlin.png",
  "blockchain.png",
  "celo.png",
  "founderly.png",
  "skatiestan.png",
  "startsteps.png",
];
function Partners() {
  return (
    <div className="flex flex-col lg:flex-row">
      <section className="text-center lg:text-left">
        <h1 className="text-[2rem] lg:text-[3rem] font-bold lg:w-[15em]">
          Youth Potential Unleashed By Entrepreneurship
        </h1>
        <p className="lg:w-[35em] max-w-prose mx-auto lg:mx-0 ">
          We support local talent who want to create positive impact and lead
          Afghanistan with technical skills and digital innovation.
        </p>
      </section>

      <div className="flex  flex-wrap">
        {pics.map((image) => (
          <Image
            key={image}
            src={`/assets/${image}`}
            alt="Innovation"
            height={200}
            width={200}
            className=" max-w-[500px] hidden lg:block object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default Partners;
