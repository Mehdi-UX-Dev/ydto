import { ArrowRight, Building2, Calendar, GraduationCap } from "lucide-react";
import React from "react";
import Link from "next/link";

function Programs() {
  return (
    <div className="max-w-5xl xl:mx-auto mx-6 ">
      <h1 className="bg-blue-400 text-[2rem] w-fit font-bold px-4 py-2 mb-8 mx-auto">
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
