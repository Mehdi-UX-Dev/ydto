import { mailOptions } from "./../../config/nodemailer";
import { transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    await transporter.sendMail({
      ...mailOptions,
      text: data.message,
      subject: "Demo Generated Data Text",
    });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({
    data,
  });
}
