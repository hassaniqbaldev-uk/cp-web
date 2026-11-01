import { NextResponse } from "next/server";
import { z } from "zod";
import { checkSpam } from "@/lib/spamProtection";
import { HONEYPOT_FIELD } from "@/lib/spamConfig";
import { sendMail } from "@/lib/mail/smtp";
import { blackFridayLeadEmail } from "@/lib/mail/templates/blackFridayLead";
import { sendMetaEvent } from "@/lib/meta/capi";
import { LEAD_VALUE } from "@/config/tracking";

export const runtime = "nodejs";

// Lead-source touch sent from the browser (UTMs / referrer / click IDs). All
// fields optional and length-capped; unknown keys are stripped.
const touchSchema = z
  .object({
    source: z.string().max(200).optional(),
    medium: z.string().max(200).optional(),
    campaign: z.string().max(200).optional(),
    content: z.string().max(200).optional(),
    term: z.string().max(200).optional(),
    fbclid: z.string().max(500).optional(),
    gclid: z.string().max(500).optional(),
    referrer: z.string().max(1000).optional(),
    landing_page: z.string().max(1000).optional(),
    timestamp: z.string().max(40).optional(),
  })
  .nullish();

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
  firstTouch: touchSchema,
  lastTouch: touchSchema,
  eventId: z.string().max(100).optional(),
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

  // Server-side Meta Conversions API (Lead), de-duplicated with the browser
  // Pixel via the shared eventId. No-ops until META_CAPI_TOKEN is set.
  const last = data.lastTouch || {};
  await sendMetaEvent("Lead", {
    request,
    eventId: data.eventId,
    email: data.email,
    phone: data.phone,
    value: LEAD_VALUE,
    customData: {
      job_type: data.jobType === "something-else" ? "other" : data.jobType || "",
      lead_source: last.source || "",
      lead_medium: last.medium || "",
      lead_campaign: last.campaign || "",
    },
    fbclid: last.fbclid || "",
  });

  return NextResponse.json({ ok: true });
}
