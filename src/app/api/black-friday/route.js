import { NextResponse } from "next/server";
import { z } from "zod";
import { checkSpam } from "@/lib/spamProtection";
import { HONEYPOT_FIELD } from "@/lib/spamConfig";
import { sendMail } from "@/lib/mail/smtp";
import { blackFridayLeadEmail } from "@/lib/mail/templates/blackFridayLead";

export const runtime = "nodejs";

const schema = z.object({
  jobType: z.string().max(100).default(""),
  website: z.string().max(300).default(""),
  details: z.string().max(5000).default(""),
  engagement: z.string().max(100).default(""),
  name: z.string().trim().min(1, "Name is required").max(120),
  agency: z.string().max(120).default(""),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().max(60).default(""),
  contact: z.string().max(60).default(""),
  updates: z.boolean().default(false),
  [HONEYPOT_FIELD]: z.string().optional(),
});

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "bad-request" },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation" },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Reuse the site-wide spam checks (honeypot, timing, rate limit, reCAPTCHA,
  // content). It reads the honeypot/formElapsed/recaptchaToken off the raw
  // body and returns a ready-made response on failure.
  const spam = await checkSpam(request, body, {
    action: "black_friday",
    email: data.email,
    name: data.name,
    text: [data.details, data.jobType],
  });
  if (!spam.ok) return spam.response;

  try {
    const { subject, html } = blackFridayLeadEmail(data);
    await sendMail({ subject, html, replyTo: data.email });
  } catch (err) {
    console.error("[black-friday] email send failed:", err);
    return NextResponse.json(
      { ok: false, error: "send-failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
