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
        <form className="max-w-md mx-auto space-y-8 mt-8">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="border h-12 w-full bg-gray-700 mt-1"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="border h-12 w-full bg-gray-700 mt-1"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className="border h-12 w-full bg-gray-700 mt-1"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="email"
              className="border h-12 w-full bg-gray-700 mt-1"
            />
          </div>
          <button className="border border-gray-400 font-bold text-[1.25rem] text-center w-full py-4 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
