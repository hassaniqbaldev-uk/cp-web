import { getAuditEmailTemplate } from "@/emails/lp-audit-template";
import { getCustomerEmailTemplate } from "@/emails/lp-customer-template";
import { checkSpam, escapeFields } from "@/lib/spamProtection";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, service, email, phone, message } = body;

    // 1️⃣ Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
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

    // 2️⃣ Spam protection (honeypot, timing, rate limit, reCAPTCHA, content)
    // Email format is checked in here too
    const spam = await checkSpam(req, body, {
      action: "lp_audit",
      email,
      name,
      text: [message],
    });
    if (!spam.ok) return spam.response;

    // Escape user input for the HTML emails
    const safe = escapeFields({ name, service, email, phone, message });

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
      to: process.env.LP_AUDIT_RECIPIENTS.split(",").map((s) => s.trim()),
      subject: `New Free Audit Request from ${name || email}`,
      html: getAuditEmailTemplate(
        safe.name,
        safe.service || "Website Audit",
        safe.email,
        safe.phone,
        safe.message,
      ),
    });

    // 5️⃣ Send thank-you email to the customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: `Thanks for requesting a free audit${service ? ` for ${service}` : ""}`,
      html: getCustomerEmailTemplate(
        safe.name,
        safe.service || "Website Audit",
        safe.email,
        safe.phone,
        safe.message,
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
