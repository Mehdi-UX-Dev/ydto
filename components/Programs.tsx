import { Building2, Calendar, GraduationCap } from "lucide-react";
import React from "react";

function Programs() {
  return (
    <div className=" grid grid-cols-2 max-w-5xl xl:mx-auto mx-6  gap-8">
      <div className="scale-75 md:scale-100 transition-transform duration-150 ease-in-out  bg-[radial-gradient(circle,rgba(74,134,232,1)0%,rgba(74,134,232,0)100%)] py-20  border px-10  col-span-2 flex  gap-4 rounded-[6px]">
        <GraduationCap size={64} />
        <div className="">
          <h1 className="text-[2rem] font-bold">Academy</h1>
          <p className="md:w-[35em]">
            Empowering Afghan youth with cutting-edge tech skills to lead the
            nation’s digital revolution.
          </p>
        </div>
      </div>

      <div className="border scale-75 md:scale-100 transition-transform duration-150 ease-in-out  col-span-2  lg:col-span-1 border-white  px-10 py-10  flex  gap-4 rounded-[6px]">
        <Building2 size={64} />
        <div className="">
          <h1 className="text-[2rem] font-bold">Business Incubation</h1>
          <p className="">
            Supporting young innovators in solving local challenges through
            technology-driven startups.
          </p>
        </div>
      </div>
      <div className="border-white scale-75 md:scale-100 transition-transform duration-150 ease-in-out col-span-2 lg:col-span-1  border px-10 py-10 flex  gap-4 rounded-[6px]">
        <Calendar size={64} />
        <div className="">
          <h1 className="text-[2rem] font-bold">Events</h1>
          <p className="">
            Fostering a community of change-makers to create lasting, positive
            impact in Afghanistan..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
