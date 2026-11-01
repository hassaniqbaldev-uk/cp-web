import crypto from "crypto";
import { META_PIXEL_ID, TRACKING_CURRENCY } from "@/config/tracking";

const sha256 = (value) =>
  crypto.createHash("sha256").update(String(value).trim().toLowerCase()).digest("hex");

// Phone: digits only (with country code), then hashed.
const hashPhone = (value) => sha256(String(value).replace(/\D/g, ""));

const clientIp = (request) =>
  (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || undefined;

/**
 * Send a server-side event to the Meta Conversions API. No-ops (silently) when
 * META_CAPI_TOKEN isn't set, so the site works before the token is provisioned.
 * The same event_id is sent from the browser Pixel for de-duplication.
 */
export async function sendMetaEvent(
  eventName,
  {
    request,
    eventId,
    email,
    phone,
    value,
    currency = TRACKING_CURRENCY,
    customData = {},
    fbclid,
  },
) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token || !eventId) return;

  const fbp = request.cookies?.get?.("_fbp")?.value;
  let fbc = request.cookies?.get?.("_fbc")?.value;
  // Rebuild _fbc from the saved fbclid when the cookie isn't present.
  if (!fbc && fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;

  const emailHash = email ? [sha256(email)] : undefined;

  const user_data = {
    client_ip_address: clientIp(request),
    client_user_agent: request.headers.get("user-agent") || undefined,
    fbp: fbp || undefined,
    fbc: fbc || undefined,
    em: emailHash,
    ph: phone ? [hashPhone(phone)] : undefined,
    external_id: emailHash,
  };

  const payload = {
    data: [
      {
        event_name: eventName, // "Lead" | "Schedule"
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: request.headers.get("referer") || undefined,
        user_data,
        custom_data: { value, currency, ...customData },
      },
    ],
  };

  // While testing, set META_CAPI_TEST_CODE (e.g. TEST97288) so events show in
  // Events Manager > Test events. Remove the env var once dedup is confirmed.
  if (process.env.META_CAPI_TEST_CODE) {
    payload.test_event_code = process.env.META_CAPI_TEST_CODE;
  }

  try {
    await fetch(
      `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );
  } catch (err) {
    console.error(`[meta-capi] ${eventName} failed:`, err);
  }
}
