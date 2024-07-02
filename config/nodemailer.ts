import nodemailer from "nodemailer";

export let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email,
    pass: process.env.Email_Pass,
  },
});

export const mailOptions = {
  from: process.env.Email,
  to: process.env.Email,
};
