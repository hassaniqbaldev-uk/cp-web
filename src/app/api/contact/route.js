import { getContactEmailTemplate } from "@/emails/contact-template";
import { getCustomerEmailTemplate } from "@/emails/customer-template";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body;

    // 1️⃣ Validate basic fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 2️⃣ Setup mail transporter (Amazon SES / SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // STARTTLS on port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 4️⃣ Send email to your team
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "hassan@cp.agency, afzal@cp.agency, ahsan@cp.agency",
      subject: `New Contact Request from ${name}`,
      html: getContactEmailTemplate(name, email, service, message),
    });

    // 5️⃣ Send thank-you email to the customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: `Thanks for reaching out about ${service}`,
      html: getCustomerEmailTemplate(name, email, service, message),
    });

    // 6️⃣ Done
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
