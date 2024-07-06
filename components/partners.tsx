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
    <div className="flex flex-col lg:flex-row mx-6">
      <section className="text-center lg:text-left">
        <h1 className=" lg:text-[2rem] font-bold lg:w-[15em]">Our Partners</h1>
        <p className="lg:w-[35em] lg:text-[1.5rem] max-w-prose mx-auto lg:mx-0 ">
          We work with and receive funding from amazing partners across
          government, philanthropy, business, and technology.
        </p>
      </section>

      <div className="flex  flex-wrap ">
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
