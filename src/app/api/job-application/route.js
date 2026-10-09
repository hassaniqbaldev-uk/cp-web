import {
  getJobApplicationEmailTemplate,
  getJobApplicantEmailTemplate,
} from "@/emails/job-application-template";
import { checkSpam, escapeFields } from "@/lib/spamProtection";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(req) {
  try {
    // 1. Parse FormData (not JSON — because of file)
    const formData = await req.formData();
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const portfolio = formData.get("portfolio");
    const resume = formData.get("resume");
    const jobTitle = formData.get("jobTitle") || "Open Position";

    // 2. Validate required fields
    if (!fullName || !email || !resume || typeof resume === "string") {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Same rules as the form — the browser check alone can be bypassed
    if (
      !ALLOWED_RESUME_TYPES.includes(resume.type) ||
      resume.size > MAX_RESUME_SIZE
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid resume file" },
        { status: 400 },
      );
    }

    // 3. Spam protection (honeypot, timing, rate limit, reCAPTCHA, content)
    const spam = await checkSpam(req, Object.fromEntries(formData), {
      action: "job_application",
      email,
      name: fullName,
      text: [message],
    });
    if (!spam.ok) return spam.response;

    // Escape user input for the HTML emails
    const safe = escapeFields({
      fullName,
      email,
      phone,
      message,
      portfolio,
      jobTitle,
    });

    // 4. Convert resume file to buffer for email attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    // 5. Setup transporter — same as contact route
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 6. Send email to your team with resume attached
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      // to: "join@cp.agency",
      to: "join@cp.agency",
      subject: `New Job Application from ${fullName}`,
      html: getJobApplicationEmailTemplate(
        safe.fullName,
        safe.email,
        safe.phone,
        safe.portfolio,
        safe.message,
        safe.jobTitle,
      ),
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    // 7. Send confirmation email to applicant
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: `We received your application for ${jobTitle}`,
      html: getJobApplicantEmailTemplate(
        safe.fullName,
        safe.email,
        safe.jobTitle,
      ),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Job application error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send application" },
      { status: 500 },
    );
  }
}
