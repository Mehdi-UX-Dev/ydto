import { ArrowRight, Building2, Calendar, GraduationCap } from "lucide-react";
import React from "react";
import Link from "next/link";

function Programs() {
  return (
    <div className="max-w-5xl xl:mx-auto mx-6 ">
      <div className="flex flex-wrap justify-between">
        <div className=" bg-gray-800  rounded-xl ">
          <div className="flex flex-col  ">
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

        <div className=" bg-gray-800  rounded-xl ">
          <div className="flex flex-col  ">
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

        <div className=" bg-gray-800 rounded-xl ">
          <div className="flex flex-col ">
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
