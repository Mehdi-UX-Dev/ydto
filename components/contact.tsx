import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sendContactForm } from "@/lib/api";
import { Asterisk, LoaderCircle, X } from "lucide-react";
import { useToast } from "./ui/use-toast";

function Contact() {
  const [values, setEmail] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const [dialog, setDialogVisiblity] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMail: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { success, message } = await sendContactForm(values);

      if (success) {
        toast({
          title: "Sent Successfully",
          description:
            "Thank for your message, we will contact you in no time!",
        });
        setDialogVisiblity(false);
        setLoading(false);
      } else {
        toast({
          variant: "destructive",
          title: "Could not send the message",
          description: message,
        });
        setLoading(false);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Server Error",
        description: error.message,
      });
    }
  };
  return (
    <div
      id="contact"
      className="  mx-6   border border-white max-w-3xl lg:mx-auto text-center p-10"
    >
      <h1 className="text-[2.5rem] font-bold ">Have a question?</h1>
      <p className="lg:text-[1.5rem]">Contact us and we’ll respond promptly!</p>

      <Dialog open={dialog}>
        <DialogTrigger asChild>
          <button
            onClick={() => setDialogVisiblity(true)}
            className="bg-bluePrimary font-bold  rounded-[8px] hover:bg-gray-800 hover:scale-110   px-16 py-5 lg:text-[1.5rem]  mt-10  "
          >
            Contact Us
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-between ">
              <DialogTitle className="text-[2rem]">Contact Form</DialogTitle>
              <X
                className="text-gray-400 cursor-pointer h-5 w-5"
                onClick={() => setDialogVisiblity(false)}
              />
            </div>
            <div className="">
              <form onSubmit={sendMail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-gray-300 flex ">
                    <span>Name</span>{" "}
                    <Asterisk size={16} className="text-red-400" />
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="border h-12 w-full bg-gray-700 mt-1"
                    onChange={(e) =>
                      setEmail((cred) => ({ ...cred, name: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-300 flex">
                    <span> Email </span>
                    <Asterisk size={16} className="text-red-400" />
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="border h-12 w-full bg-gray-700 mt-1"
                    onChange={(e) =>
                      setEmail((cred) => ({ ...cred, email: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-gray-300 flex">
                    <span>Message</span>
                    <Asterisk size={16} className="text-red-400" />
                  </label>
                  <textarea
                    id="message"
                    required
                    className="border w-full h-40 bg-gray-700 mt-1"
                    onChange={(e) =>
                      setEmail((cred) => ({ ...cred, message: e.target.value }))
                    }
                  />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full disabled:bg-gray-400 disabled:opacity-50 bg-gray-600 h-12 rounded-[8px] flex justify-center items-center gap-2 hover:bg-gray-800  "
                >
                  {loading ? (
                    <LoaderCircle className={`h-5 w-5 animate-spin `} />
                  ) : (
                    <p>Submit</p>
                  )}
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
