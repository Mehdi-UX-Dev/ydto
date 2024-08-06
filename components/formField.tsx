"use client";
import React, { useState } from "react";

type credentialsType = {
  name: string;
  lastName: string;
  phoneNumber: number;
  email: string;
};

//todo use the standard packages for the fetch of the data like swr or redux react query

function Form() {
  const [credentials, setCredentials] = useState<credentialsType | null>(null);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.id);
    setCredentials((prev) => ({
      ...(prev as credentialsType),
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-8 mt-8">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="border h-12 w-full bg-gray-700 mt-1"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          className="border h-12 w-full bg-gray-700 mt-1"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          className="border h-12 w-full bg-gray-700 mt-1"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phoneNumber"
          type="number"
          onChange={handleChange}
          className="border h-12 w-full bg-gray-700 mt-1"
          required
        />
      </div>
      <button
        type="submit"
        className="border border-gray-400 font-bold text-[1.25rem] text-center w-full py-4 "
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
