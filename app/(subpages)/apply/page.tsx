import Form from "@/components/formField";
import React from "react";

function Page() {
  return (
    <div className="my-[120px]">
      <div className="border border-gray-300 max-w-4xl rounded  mx-auto p-10">
        <div className="flex flex-col max-w-[35ch] mx-auto">
          <h1 className=" text-[2rem] font-bold">Fill In the Information</h1>
          <p className="text-gray-300  ">
            Please fill out the quick from below, and our team will get back to
            you as soon as possible.
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Page;
