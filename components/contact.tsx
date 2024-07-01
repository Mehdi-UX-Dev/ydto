import React from "react";

function Contact() {
  return (
    <div className="bg-[radial-gradient(circleat25%_50%,rgba(74,134,232,1)0%,rgba(74,134,232,0)70%),radial-gradient(circleat75%50%,rgba(255,0,0,1)0%,rgba(255,0,0,0)70%)] border border-white max-w-3xl mx-auto text-center p-5">
      <h1 className="text-[2rem] font-bold">Have a question?</h1>
      <p>Contact us and we will response in no time!</p>
      <button className="bg-gray-700 rounded-[8px] px-10 py-5 mt-5 ">
        Contact Us
      </button>
    </div>
  );
}

export default Contact;
