import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sendContactForm } from "@/lib/api";

function Contact() {
  const [values, setEmail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendMail: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    sendContactForm(values);
  };

  return (
    <div className="scale-75 md:scale-100 transition-transform duration-150 ease-in-out bg-[radial-gradient(circleat25%_50%,rgba(74,134,232,1)0%,rgba(74,134,232,0)70%),radial-gradient(circleat75%50%,rgba(255,0,0,1)0%,rgba(255,0,0,0)70%)] border border-white max-w-3xl mx-auto text-center p-5">
      <h1 className="text-[2rem] font-bold">Have a question?</h1>
      <p>Contact us and we will response in no time!</p>

      <Dialog>
        <DialogTrigger className="bg-gray-700 rounded-[8px] h-14 w-44 px-10  mt-5 ">
          Contact Us
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-[2rem]">Contact Form</DialogTitle>
            <div className="">
              <form onSubmit={sendMail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border h-12 w-full bg-gray-700 mt-1"
                    onChange={(e) =>
                      setEmail((cred) => ({ ...cred, name: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="name" className="text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="name"
                    className="border h-12 w-full bg-gray-700 mt-1"
                    onChange={(e) =>
                      setEmail((cred) => ({ ...cred, email: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="name" className="text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border w-full h-40 bg-gray-700 mt-1"
                    onChange={(e) =>
                      setEmail((cred) => ({ ...cred, message: e.target.value }))
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-600 h-12 rounded-[8px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Contact;
