// import { getContactEmailTemplate } from "@/emails/contact-template";
// import { getCustomerEmailTemplate } from "@/emails/customer-template";
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, service, message } = body;

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: "Missing required fields" },
//         { status: 400 },
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false, // SES works with STARTTLS on 587
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     // 1. Notification to your team
//     await transporter.sendMail({
//       from: process.env.SMTP_FROM,
//       to: "hassan@cp.agency, afzal@cp.agency, ahsan@cp.agency, taha.b@cp.agency",
//       subject: `New Contact Request from ${name}`,

//       html: getContactEmailTemplate(name, email, service, message), // Clean!
//     });

//     // 2. Thank you to customer
//     await transporter.sendMail({
//       from: process.env.SMTP_FROM,
//       to: email,
//       subject: `Thanks for reaching out about ${service}`,
//       html: getCustomerEmailTemplate(name, email, service, message), // Clean!
//     });

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error("Contact form error:", err);
//     return NextResponse.json(
//       { success: false, error: "Failed to send email" },
//       { status: 500 },
//     );
//   }
// }

import { getContactEmailTemplate } from "@/emails/contact-template";
import { getCustomerEmailTemplate } from "@/emails/customer-template";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, service, message, token } = body;

    // 1️⃣ Validate basic fields
    if (!name || !email || !message || !token) {
      return NextResponse.json(
        { success: false, error: "Missing required fields or token" },
        { status: 400 },
      );
    }

    // 2️⃣ Verify reCAPTCHA token with Google
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      },
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success || verifyData.score < 0.5) {
      console.warn("reCAPTCHA verification failed:", verifyData);
      return NextResponse.json(
        {
          success: false,
          error: "reCAPTCHA failed. Suspicious activity detected.",
        },
        { status: 400 },
      );
    }

    // 3️⃣ Setup mail transporter (Amazon SES / SMTP)
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
      to: "hassan@cp.agency, afzal@cp.agency, ahsan@cp.agency, taha.b@cp.agency",
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
