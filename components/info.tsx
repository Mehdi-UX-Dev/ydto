import React from "react";
import illus1 from "@/public/assets/illus_1.svg";
import Image from "next/image";
import growth from "@/public/assets/icon.png";
import people from "@/public/assets/people.png";
import startup from "@/public/assets/startup.png";

function Info() {
  return (
    <div>
      <div className="flex justify-center lg:justify-between mx-6">
        <section className="text-center lg:text-left">
          <h1 className="text-[2rem] lg:text-[3rem] font-bold lg:w-[15em]">
            Youth Potential Unleashed By Entrepreneurship
          </h1>
          <p className="lg:w-[35em] max-w-prose mx-auto lg:mx-0 ">
            We support local talent who want to create positive impact and lead
            Afghanistan with technical skills and digital innovation.
          </p>
        </section>

        <Image
          src={illus1}
          alt="Innovation"
          className=" max-w-[500px] hidden lg:block"
        />
      </div>

      <div>
        <section>
          <h1 className="text-[3rem]">
            Leading the Change: Revolutionizing Afghanistan&apos;s Future
            Through Education
          </h1>
          <p>
            At Startupistan, we empower Afghan youth with digital education to
            lead, innovate, and create a brighter future. As a collective of
            social entrepreneurs across Europe and Afghanistan, our bootcamps
            nurture talent, inspire leadership, and drive positive change.
          </p>
          <div className="flex ">
            <div>
              <div className="flex items-center gap-2">
                <Image src={growth} alt="" />
                <h4 className="font-bold text-[1.5rem]">Career Potential</h4>
              </div>
              <p className="max-w-[45ch]">
                Acquire the skills that top employers demand, opening doors to
                exciting job opportunities.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Image src={growth} alt="" />
                <h4 className="font-bold text-[1.5rem]">Global Connection</h4>
              </div>
              <p className="max-w-[45ch]">
                Expand your network and collaborate with peers and mentors
                around the world.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Image src={startup} alt="" />
                <h4 className="font-bold text-[1.5rem]">
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
