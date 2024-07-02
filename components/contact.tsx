import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Contact() {
  return (
    <div className="bg-[radial-gradient(circleat25%_50%,rgba(74,134,232,1)0%,rgba(74,134,232,0)70%),radial-gradient(circleat75%50%,rgba(255,0,0,1)0%,rgba(255,0,0,0)70%)] border border-white max-w-3xl mx-auto text-center p-5">
      <h1 className="text-[2rem] font-bold">Have a question?</h1>
      <p>Contact us and we will response in no time!</p>

      <Dialog>
        <DialogTrigger className="bg-gray-700 rounded-[8px] px-10 py-5 mt-5 ">
          Contact Us
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-[2rem]">
              Have any question?
            </DialogTitle>
            <DialogDescription className="">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="border border-white" />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Contact;
