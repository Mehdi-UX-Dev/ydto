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

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error in POST /api:", error.message); // Log the error for debugging
    return NextResponse.json(
      { success: false, message: error.message || "unknown error" },
      { status: 500 }
    );
  }
}
