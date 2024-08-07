import Image from "next/image";
import React from "react";
import profilePic from "@/public/assets/ihsanayubi.jpeg";

function Page() {
  return (
    <div>
      <h1 className="text-[3rem] font-bold text-center my-[120px]">
        Leadership Team
      </h1>
      <div className="max-w-[80rem] mx-auto flex gap-8">
        <Image
          src={profilePic}
          alt="Ihsanullah Ayubi"
          title="Ihsanullah Ayubi"
        />
        <div className="max-w-[65ch]">
          <h1 className="text-[1.5rem] font-bold ">Ihsanullah Ayubi</h1>
          <p className="text-gray-300 text-[1.5rem] pb-4">CEO of YDTDO</p>

          <article>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            quaerat est iusto ratione nobis fugit blanditiis sequi quibusdam!
            Sed perferendis velit tenetur aperiam nostrum! Esse doloremque
            quidem unde debitis ratione. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Error, nostrum ab aperiam, quibusdam nemo eius
            nulla, sapiente praesentium eveniet ex dolor quas ducimus corporis
            accusamus est laudantium. Pariatur, vel illum?
          </article>
        </div>
      </div>
      <div className="w-full border-t border-gray-700 h-1 max-w-[60rem] mx-auto my-[120px]" />
      <div className="max-w-[80rem] mx-auto relative">
        <h1 className="text-[2rem] font-bold mb-10 text-center">Our Board</h1>
        <div className="flex gap-8  overflow-x-auto scrollbar-thin !scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-700 scrollbar-track-slate-500 ">
          <div className="shrink-0 ">
            <Image src={profilePic} alt="" className="" />
            <h1 className="pt-2 font-bold">John Doe</h1>
            <p>COO & Directory</p>
          </div>
          <div className="shrink-0">
            <Image src={profilePic} alt="" />
            <h1 className="pt-2 font-bold">John Doe</h1>
            <p>COO & Directory</p>
          </div>
          <div className="shrink-0">
            <Image src={profilePic} alt="" />
            <h1 className="pt-2 font-bold">John Doe</h1>
            <p>COO & Directory</p>
          </div>
          <div className="shrink-0">
            <Image src={profilePic} alt="" />
            <h1 className="pt-2 font-bold">John Doe</h1>
            <p>COO & Directory</p>
          </div>
          <div className="shrink-0">
            <Image src={profilePic} alt="" />
            <h1 className="pt-2 font-bold">John Doe</h1>
            <p>COO & Directory</p>
          </div>
          <div className="shrink-0">
            <Image src={profilePic} alt="" />
            <h1 className="pt-2 font-bold">John Doe</h1>
            <p>COO & Directory</p>
          </div>
        </div>
        {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] w-1/12 h-full "></div> */}
      </div>
    </div>
  );
}

export default Page;
