import { NextResponse } from "next/server";

// Returns Cal.com availability for the Black Friday 15-min event, grouped by
// day. The Cal API key stays server-side; the browser only ever hits this
// route. Shape returned to the client: { data: { "YYYY-MM-DD": [{ start }] } }.
export async function GET(request) {
  const apiKey = process.env.CAL_API_KEY;
  const eventTypeId = process.env.CAL_EVENT_TYPE_ID;

  if (!apiKey || !eventTypeId) {
    return NextResponse.json(
      { ok: false, error: "Booking is not configured." },
      { status: 500 },
    );
  }

  const { searchParams } = new URL(request.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  const timeZone = searchParams.get("timeZone") || "Europe/London";

  if (!start || !end) {
    return NextResponse.json(
      { ok: false, error: "Missing date range." },
      { status: 400 },
    );
  }

  const query = new URLSearchParams({
    eventTypeId,
    start,
    end,
    timeZone,
  });

  try {
    const response = await fetch(
      `https://api.cal.com/v2/slots?${query.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "cal-api-version": "2024-09-04",
        },
        // Availability changes constantly; never cache it.
        cache: "no-store",
      },
    );

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.status !== "success") {
      return NextResponse.json(
        { ok: false, error: "Could not load availability." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, data: result.data || {} });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not load availability." },
      { status: 502 },
    );
  }
}
