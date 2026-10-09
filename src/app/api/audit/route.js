import { getAuditEmailTemplate } from "@/emails/audit-template";
import { getCustomerEmailTemplate } from "@/emails/customer-template";
import { FORM_SERVICES } from "@/contants/contact";
import { checkSpam, escapeFields, normalizeUrl } from "@/lib/spamProtection";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, websiteUrl, service, primaryGoal } = body;

    // 1️⃣ Validate required fields
    if (!email || !websiteUrl) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const cleanUrl = normalizeUrl(websiteUrl);
    if (!cleanUrl) {
      return NextResponse.json(
        { success: false, error: "Invalid website URL" },
        { status: 400 },
      );
    }

    // Service is optional, but must be one of the dropdown options
    if (service && !FORM_SERVICES.includes(service)) {
      return NextResponse.json(
        { success: false, error: "Invalid service" },
        { status: 400 },
      );
    }

    // 2️⃣ Spam protection (honeypot, timing, rate limit, reCAPTCHA, content)
    const spam = await checkSpam(req, body, {
      action: "audit",
      email,
      name,
      text: [primaryGoal],
    });
    if (!spam.ok) return spam.response;

    // Escape user input for the HTML emails (service is already whitelisted)
    const safe = escapeFields({
      name,
      email,
      websiteUrl: cleanUrl,
      primaryGoal,
    });

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
      subject: `New Free Audit Request from ${name || email}`,
      html: getAuditEmailTemplate(
        safe.name,
        safe.email,
        safe.websiteUrl,
        service,
        safe.primaryGoal,
      ),
    });

    // 5️⃣ Send thank-you email to the customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: `Thanks for requesting a free audit${service ? ` for ${service}` : ""}`,
      html: getCustomerEmailTemplate(
        safe.name,
        safe.email,
        service || "Website Audit",
        safe.primaryGoal || "",
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
