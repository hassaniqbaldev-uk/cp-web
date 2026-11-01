import { NextResponse } from "next/server";
import { sendMetaEvent } from "@/lib/meta/capi";
import { BOOKING_VALUE } from "@/config/tracking";

const isValidEmail = (value) =>
  typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

// Creates a Cal.com booking for the Black Friday 15-min event. Cal handles the
// confirmation email, Google Meet link and dashboard entry; we only pass the
// chosen slot plus the attendee details collected in the quote form.
export async function POST(request) {
  const apiKey = process.env.CAL_API_KEY;
  const eventTypeId = process.env.CAL_EVENT_TYPE_ID;

  if (!apiKey || !eventTypeId) {
    return NextResponse.json(
      { ok: false, error: "Booking is not configured." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => ({}));
  const { start, name, email, timeZone, metadata, eventId, leadSource, fbclid } =
    body;

  if (!start || !name?.trim() || !isValidEmail(email) || !timeZone) {
    return NextResponse.json(
      { ok: false, error: "Missing booking details." },
      { status: 400 },
    );
  }

  // Lead-source metadata: keep only non-empty string values, capped, so it's
  // visible against the booking in Cal.com.
  const cleanMetadata = {};
  if (metadata && typeof metadata === "object") {
    for (const [key, value] of Object.entries(metadata)) {
      if (typeof value === "string" && value.trim()) {
        cleanMetadata[String(key).slice(0, 40)] = value.slice(0, 500);
      }
    }
  }
  const hasMetadata = Object.keys(cleanMetadata).length > 0;

  try {
    // Cal's v2 booking-create endpoint authenticates the personal API key as a
    // query param (Bearer is rejected here, unlike the read endpoints).
    const response = await fetch(
      `https://api.cal.com/v2/bookings?apiKey=${encodeURIComponent(apiKey)}`,
      {
      method: "POST",
      headers: {
        "cal-api-version": "2024-08-13",
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        start,
        eventTypeId: Number(eventTypeId),
        attendee: {
          name: name.trim(),
          email: email.trim(),
          timeZone,
          language: "en",
        },
        ...(hasMetadata ? { metadata: cleanMetadata } : {}),
      }),
      },
    );

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.status !== "success") {
      // Most common real-world failure: the slot was taken between load and
      // submit. Surface a friendly, retryable message.
      const taken =
        response.status === 409 ||
        /already|taken|no longer|not available/i.test(
          result?.error?.message || "",
        );

      return NextResponse.json(
        {
          ok: false,
          error: taken
            ? "That time was just taken. Please pick another slot."
            : "Could not complete the booking. Please try again.",
        },
        { status: taken ? 409 : 502 },
      );
    }

    // Server-side Meta Conversions API (Schedule), de-duplicated with the
    // browser Pixel via the shared eventId. No-ops until META_CAPI_TOKEN is set.
    await sendMetaEvent("Schedule", {
      request,
      eventId,
      email,
      value: BOOKING_VALUE,
      customData: {
        lead_source: leadSource?.lead_source || "",
        lead_medium: leadSource?.lead_medium || "",
        lead_campaign: leadSource?.lead_campaign || "",
      },
      fbclid: fbclid || "",
    });

    return NextResponse.json({ ok: true, data: result.data || {} });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not complete the booking. Please try again." },
      { status: 502 },
    );
  }
}
