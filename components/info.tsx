import React from "react";
import illus1 from "@/public/assets/illus_1.svg";
import Image from "next/image";
import growth from "@/public/assets/icon.png";
import people from "@/public/assets/people.png";
import startup from "@/public/assets/startup.png";

function Info() {
  return (
    <div id="about" className="space-y-[60px] ">
      <div className="grid grid-cols-12 mx-6">
        <section className="text-center lg:text-left col-span-12 lg:col-span-6">
          <h1 className="text-[1.5rem] lg:text-[2rem] font-bold  ">
            Youth Potential Unleashed By Entrepreneurship
          </h1>
          <p className="mx-auto lg:mx-0 lg:text-[1.5rem]">
            We support local talent who want to create positive impact and lead
            Afghanistan with technical skills and digital innovation.
          </p>
        </section>

        <Image
          src={illus1}
          alt="Innovation"
          className="  hidden lg:block lg:col-span-6 justify-self-center"
        />
      </div>

      <div>
        <section className="text-center lg:text-left mx-6">
          <h1 className="text-[1.5rem] font-bold lg:text-[3rem] ">
            Leading the Change: Revolutionizing Afghanistan&apos;s Future
            Through Education
          </h1>
          <p className="lg:text-[1.5rem]">
            we empower Afghan youth with digital education to lead, innovate,
            and create a brighter future. As a collective of social
            entrepreneurs across Europe and Afghanistan, our bootcamps nurture
            talent, inspire leadership, and drive positive change.
          </p>
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-4 mt-4">
            <div>
              <div className="flex items-center justify-center lg:justify-start  gap-2">
                <Image src={growth} alt="" />
                <h4 className="font-bold lg:text-[2rem]">Career Potential</h4>
              </div>
              <p className="max-w-[45ch]">
                Acquire the skills that top employers demand, opening doors to
                exciting job opportunities.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center lg:justify-start  gap-2">
                <Image src={people} alt="" />
                <h4 className="font-bold lg:text-[2rem]">Global Connection</h4>
              </div>
              <p className="max-w-[45ch]">
                Expand your network and collaborate with peers and mentors
                around the world.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Image src={startup} alt="" />
                <h4 className="font-bold lg:text-[2rem]">
                  Entrepreneurial Mindset
                </h4>
              </div>
              <p className="max-w-[45ch]">
                Learn to think like an entrepreneur and turn your ideas into
                reality.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Info;
