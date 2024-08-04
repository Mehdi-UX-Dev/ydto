import { ArrowRight, Building2, Calendar, GraduationCap } from "lucide-react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

function Programs1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <div className="grid grid-cols-2 max-w-5xl xl:mx-auto mx-6  gap-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="bg-[radial-gradient(circle,rgba(108,99,255,1)0%,rgba(108,99,255,0)100%)] py-20  border px-10  col-span-2 flex gap-4 rounded-[6px]"
      >
        <GraduationCap className="hidden md:block" size={64} />
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
        className="border  col-span-2  lg:col-span-1 border-white  p-10  flex  gap-4 rounded-[6px]"
      >
        <Building2 className="hidden md:block " size={64} />
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
        className="border-white   col-span-2 lg:col-span-1  border px-10 py-10 flex  gap-4 rounded-[6px]"
      >
        <Calendar className="hidden md:block " size={64} />
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

function Programs() {
  return (
    <div className="max-w-5xl xl:mx-auto mx-6 ">
      <h1 className="bg-blue-400 text-[2rem] w-fit font-bold px-4 py-2 mb-8 mx-auto  ">
        What We Do
      </h1>
      <div className="flex flex-wrap gap-8">
        <div className=" bg-gray-800 w-fit rounded-xl ">
          <div className="flex flex-col w-fit ">
            <div className="bg-gray-600 rounded-xl px-8 py-4 flex justify-center ">
              <GraduationCap size={128} />
            </div>

            <section className="p-4 ">
              <h1 className="text-[1.5rem] font-bold pb-2 pt-4">Academy</h1>
              <p className="max-w-[25ch] pb-4">
                Empower Afghan youth with cutting-edge technology skills,
                preparing them to drive the nation’s digital transformation
              </p>

              <Link
                href={"#"}
                className="flex items-center gap-2 text-gray-400"
              >
                <span>Learn More</span>
                <ArrowRight />
              </Link>
            </section>
          </div>
        </div>

        <div className=" bg-gray-800 w-fit rounded-xl ">
          <div className="flex flex-col w-fit ">
            <div className="bg-gray-600 rounded-xl px-8 py-4 flex justify-center ">
              <Building2 size={128} />
            </div>

            <section className="p-4 ">
              <h1 className="text-[1.5rem] font-bold pb-2 pt-4">
                Business Incubation{" "}
              </h1>
              <p className="max-w-[25ch] pb-4">
                Support young innovators as they tackle local challenges with
                technology-driven startups
              </p>

              <Link
                href={"#"}
                className="flex items-center gap-2 text-gray-400"
              >
                <span>Learn More</span>
                <ArrowRight />
              </Link>
            </section>
          </div>
        </div>

        <div className=" bg-gray-800 w-fit rounded-xl ">
          <div className="flex flex-col w-fit ">
            <div className="bg-gray-600 rounded-xl px-8 py-4 flex justify-center ">
              <Calendar size={128} />
            </div>

            <section className="p-4 ">
              <h1 className="text-[1.5rem] font-bold pb-2 pt-4">Events</h1>
              <p className="max-w-[25ch] pb-4">
                Foster a community of change-makers dedicated to creating
                lasting, positive impacts in Afghanistan.
              </p>

              <Link
                href={"#"}
                className="flex items-center gap-2 text-gray-400"
              >
                <span>Learn More</span>
                <ArrowRight />
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
