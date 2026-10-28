import { NextResponse } from "next/server";

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
  const { start, name, email, timeZone } = body;

  if (!start || !name?.trim() || !isValidEmail(email) || !timeZone) {
    return NextResponse.json(
      { ok: false, error: "Missing booking details." },
      { status: 400 },
    );
  }

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

    return NextResponse.json({ ok: true, data: result.data || {} });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not complete the booking. Please try again." },
      { status: 502 },
    );
  }
}
