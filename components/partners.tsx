import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const pics = [
  "asara.png",
  "berlin.png",
  "blockchain.png",
  "celo.png",
  "founderly.png",
  "skatiestan.png",
  "startsteps.png",
];
// function  Partners() {
//   return (
//     <div className="flex flex-col lg:flex-row mx-6">
//       <section className="text-center lg:text-left">
//         <h1 className=" lg:text-[2rem] font-bold lg:w-[15em]">Our Partners</h1>
//         <p className="lg:w-[35em] lg:text-[1.5rem] max-w-prose mx-auto lg:mx-0 ">
//           We work with and receive funding from amazing partners across
//           government, philanthropy, business, and technology.
//         </p>
//       </section>

//       <div className="flex  flex-wrap ">
//         {pics.map((image) => (
//           <Image
//             key={image}
//             src={`/assets/${image}`}
//             alt="Innovation"
//             height={200}
//             width={200}
//             className=" max-w-[500px] hidden lg:block object-contain"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Partners;

const Slider = () => {
  return (
    <div className="flex max-w-[90rem] mx-auto">
      <section className="text-center lg:text-left">
        <h1 className=" lg:text-[2rem] font-bold lg:w-[15em]">Our Partners</h1>
        <p className="lg:w-[35em] lg:text-[1.5rem] max-w-prose mx-auto lg:mx-0 ">
          We work with and receive funding from amazing partners across
          government, philanthropy, business, and technology.
        </p>
      </section>
      <div className="relative overflow-hidden w-full flex items-center">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: [-500, 1000] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {pics.map((image, index) => (
            <div key={index} className="flex-none px-2">
              <Image
                key={image}
                src={`/assets/${image}`}
                alt="Innovation"
                height={200}
                width={200}
                className=" max-w-[500px] hidden lg:block object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
