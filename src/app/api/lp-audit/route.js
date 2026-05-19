import { getAuditEmailTemplate } from "@/emails/lp-audit-template";
import { getCustomerEmailTemplate } from "@/emails/lp-customer-template";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, service, email, phone, message, website } = body;

    // Honeypot — silently succeed
    if (website) {
      return NextResponse.json({ success: true });
    }

    // 1️⃣ Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    // Phone format
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json(
        { success: false, error: "Invalid phone" },
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
      to: process.env.LP_AUDIT_RECIPIENTS.split(",").map((s) => s.trim()),
      subject: `New Free Audit Request from ${name || email}`,
      html: getAuditEmailTemplate(
        name,
        service || "Website Audit",
        email,
        phone,
        message,
      ),
    });

    // 5️⃣ Send thank-you email to the customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: `Thanks for requesting a free audit${service ? ` for ${service}` : ""}`,
      html: getCustomerEmailTemplate(
        name,
        service || "Website Audit",
        email,
        phone,
        message,
      ),
    });

    // 6️⃣ Done
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Audit form error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
