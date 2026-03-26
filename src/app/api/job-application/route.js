import {
  getJobApplicationEmailTemplate,
  getJobApplicantEmailTemplate,
} from "@/emails/job-application-template";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // 2. Validate required fields
    if (!fullName || !email || !resume) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 3. Convert resume file to buffer for email attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    // 4. Setup transporter — same as contact route
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const jobTitle = formData.get("jobTitle") || "Open Position";

    // 5. Send email to your team with resume attached
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      // to: "join@cp.agency",
      to: "taha.b@cp.agency",
      subject: `New Job Application from ${fullName}`,
      html: getJobApplicationEmailTemplate(
        fullName,
        email,
        phone,
        portfolio,
        message,
        jobTitle,
      ),
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    // 6. Send confirmation email to applicant
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: `We received your application for ${jobTitle}`,
      html: getJobApplicantEmailTemplate(fullName, email, jobTitle),
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
