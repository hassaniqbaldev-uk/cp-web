import { getContactEmailTemplate } from "@/emails/contact-template";
import { getCustomerEmailTemplate } from "@/emails/customer-template";
import { FORM_SERVICES } from "@/contants/contact";
import { checkSpam, escapeFields } from "@/lib/spamProtection";
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

    // Service must be one of the dropdown options
    if (!FORM_SERVICES.includes(service)) {
      return NextResponse.json(
        { success: false, error: "Invalid service" },
        { status: 400 },
      );
    }

    // 2️⃣ Spam protection (honeypot, timing, rate limit, reCAPTCHA, content)
    const spam = await checkSpam(req, body, {
      action: "contact",
      email,
      name,
      text: [message],
    });
    if (!spam.ok) return spam.response;

    // Escape user input for the HTML emails (service is already whitelisted)
    const safe = escapeFields({ name, email, message });

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
      to: "hello@cp.agency, afzal@cp.agency",
      // to: "taha.b@cp.agency",
      subject: `New Contact Request from ${name}`,
      html: getContactEmailTemplate(
        safe.name,
        safe.email,
        service,
        safe.message,
      ),
    });

    // 5️⃣ Send thank-you email to the customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: `Thanks for reaching out about ${service}`,
      html: getCustomerEmailTemplate(
        safe.name,
        safe.email,
        service,
        safe.message,
      ),
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
