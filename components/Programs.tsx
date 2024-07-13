import { Building2, Calendar, GraduationCap } from "lucide-react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <div className="grid grid-cols-2 max-w-5xl xl:mx-auto mx-6  gap-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="scale-75 md:scale-100 transition-transform duration-150 ease-in-out  bg-[radial-gradient(circle,rgba(74,134,232,1)0%,rgba(74,134,232,0)100%)] py-20  border px-10  col-span-2 flex gap-4 rounded-[6px]"
      >
        <GraduationCap size={64} />
        <div className="">
          <h1 className="text-[2rem] font-bold">Academy</h1>
          <p className="md:w-[35em]">
            Empower Afghan youth with cutting-edge technology skills, preparing
            them to drive the nation’s digital transformation
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView && { opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="border scale-75 md:scale-100 transition-transform duration-150 ease-in-out  col-span-2  lg:col-span-1 border-white  px-10 py-10  flex  gap-4 rounded-[6px]"
      >
        <Building2 size={64} />
        <div className="">
          <h1 className="text-[2rem] font-bold">Business Incubation</h1>
          <p className="">
            Support young innovators as they tackle local challenges with
            technology-driven startups.
          </p>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={isInView && { opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="border-white scale-75 md:scale-100 transition-transform duration-150 ease-in-out col-span-2 lg:col-span-1  border px-10 py-10 flex  gap-4 rounded-[6px]"
      >
        <Calendar size={64} />
        <div className="">
          <h1 className="text-[2rem] font-bold">Events</h1>
          <p className="">
            Foster a community of change-makers dedicated to creating lasting,
            positive impacts in Afghanistan.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Programs;
