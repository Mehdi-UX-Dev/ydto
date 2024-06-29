import { GraduationCap } from "lucide-react";
import React from "react";

function Programs() {
  return (
    <div>
      <div className="border w-fit px-10 py-5 flex  gap-4">
        <GraduationCap size={64} />
        <div>
          <h1 className="text-[2rem] font-bold">Academy</h1>
          <p className="w-[35em]">
            Empowering Afghan youth with cutting-edge tech skills to lead the
            nation’s digital revolution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
