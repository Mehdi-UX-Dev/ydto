import Image from "next/image";
import React from "react";
import mrastah from "@/public/assets/mrastajh.jpg";

function Page() {
  return (
    <div className="my-[120px]">
      <h1 className="text-[3rem] font-bold text-center">Our Achievements</h1>
      <div className="flex items-center gap-8 max-w-[80rem] mx-auto mt-10">
        <div className="">
          <Image src={mrastah} alt="" className="" />
          <h1 className="text-[1.25rem] font-bold pt-4 pb-2">
            Mrashtah Project
          </h1>
          <p className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            corrupti in recusandae illo, minus aperiam accusantium quidem quasi
            sunt sit quisquam facilis saepe quos dolores! Ad in quibusdam qui
            numquam!
          </p>
        </div>
        <div className="">
          <Image src={mrastah} alt="" className="" />
          <h1 className="text-[1.25rem] font-bold pt-4 pb-2">
            Mrashtah Project
          </h1>
          <p className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            corrupti in recusandae illo, minus aperiam accusantium quidem quasi
            sunt sit quisquam facilis saepe quos dolores! Ad in quibusdam qui
            numquam!
          </p>
        </div>
        <div className="">
          <Image src={mrastah} alt="" className="" />
          <h1 className="text-[1.25rem] font-bold pt-4 pb-2">
            Mrashtah Project
          </h1>
          <p className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            corrupti in recusandae illo, minus aperiam accusantium quidem quasi
            sunt sit quisquam facilis saepe quos dolores! Ad in quibusdam qui
            numquam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
