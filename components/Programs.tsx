import { GraduationCap } from "lucide-react";
import React from "react";

function Programs() {
  return (
    <div className="mb-10 grid grid-cols-2 max-w-5xl mx-auto gap-4">
      <div className="bg-[radial-gradient(circle_at_right,rgba(74,134,232)0%,rgba(252,189,109)_100%)]  border px-10 py-5 h-64 col-span-2 flex items-center gap-4 rounded-[6px]">
        <GraduationCap size={64} />
        <div className="">
          <h1 className="text-[2rem] font-bold">Academy</h1>
          <p className="md:w-[35em]">
            Empowering Afghan youth with cutting-edge tech skills to lead the
            nation’s digital revolution.
          </p>
        </div>
      </div>

      <div className="border col-span-2  lg:col-span-1 border-white  px-10 py-5 h-48 flex items-center gap-4 rounded-[6px]">
        <GraduationCap size={64} />
        <div className="">
          <h1 className="text-[2rem] font-bold">Academy</h1>
          <p className="">
            Empowering Afghan youth with cutting-edge tech skills to lead the
            nation’s digital revolution.
          </p>
        </div>
      </div>
      <div className="border-white col-span-2 lg:col-span-1  border px-10 py-5 h-48 flex items-center gap-4 rounded-[6px]">
        <GraduationCap size={64} />
        <div className="">
          <h1 className="text-[2rem] font-bold">Academy</h1>
          <p className="">
            Empowering Afghan youth with cutting-edge tech skills to lead the
            nation’s digital revolution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
