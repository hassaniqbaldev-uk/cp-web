# Black Friday form — tracking & measurement spec

Goal: measure every meaningful step of the Black Friday quote form + booking, so we
can (a) see where people drop off, (b) count leads/bookings as conversions, and
(c) build **Meta retargeting audiences** (especially people who visited the page or
started the form but didn't finish).

## Current state (what exists today)

- **GTM is live site-wide**: container `GTM-B8FV6K69` (loaded in `src/app/layout.jsx`).
- **No GA4 config, no Meta Pixel, no form-level events yet.** Nothing is being tracked
  on the form beyond default GTM pageviews.
- Relevant code:
  - Form UI: `src/components/sections/BlackFridayQuoteForm.jsx` (3 steps + thank-you)
  - Lead submit API: `src/app/api/black-friday/route.js`
  - Booking UI: `src/components/sections/BlackFridayBooking.jsx`
  - Booking APIs: `src/app/api/cal/slots/route.js`, `src/app/api/cal/book/route.js`

## Architecture

```
Form / booking components  ──push──▶  window.dataLayer  ──▶  GTM (GTM-B8FV6K69)
                                                              ├──▶ GA4
                                                              └──▶ Meta Pixel (browser)

Lead API  (/api/black-friday)  ──server event──▶  Meta Conversions API (Lead)
Book API  (/api/cal/book)      ──server event──▶  Meta Conversions API (Schedule)
            (shared event_id with the browser Pixel event for de-duplication)
```

Everything funnels through **dataLayer → GTM**, so after the dataLayer is wired once,
new tags are added in GTM with **no further code deploys**. Server-side Meta events
(CAPI) are the only extra code, fired from the two API routes.

---

## 1. Onsite — dataLayer events (the foundation)

Add a tiny helper and push these events from the form/booking components. Every
downstream tool (GA4, Meta) reads from here.

```js
// src/utils/track.js
export const track = (event, params = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};
```

### Event table

| dataLayer `event`    | Fires when                                   | Params                                                   | Where to call |
|----------------------|----------------------------------------------|----------------------------------------------------------|---------------|
| `bf_form_view`       | Form card scrolls into view (once)           | `form_location: "hero"`                                  | IntersectionObserver on the form card |
| `bf_form_start`      | First interaction (first field focus / first pill click) | —                                              | `onFocus` / `goToStep2` first time |
| `bf_step_complete`   | Each successful step advance                 | `step_number` (1–2), `job_type` (on step 1)              | `next()` / `goToStep2` |
| `bf_field_error`     | A field fails validation                     | `field` (`name`\|`email`\|`website`\|`phone`), `step`    | `submit()` / `validateOnBlur` / `next()` |
| `bf_form_submit`     | Lead POST returns success                    | `job_type`, `engagement`, `has_phone` (bool), `lead_id`  | `submit()` success branch |
| `bf_form_error`      | Lead POST fails                              | `reason`                                                 | `submit()` catch/error branch |
| `bf_booking_view`    | Calendar renders on thank-you                | —                                                        | `BlackFridayBooking` mount/effect |
| `bf_slot_selected`   | A time slot is picked                        | `slot_date`                                              | slot `onClick` |
| `bf_booking_complete`| Cal booking confirmed                        | `booking_uid`, `slot_datetime`                           | `confirm()` success branch |
| `bf_add_another`     | "Add another query" clicked                  | —                                                        | `reset()` |

This yields the full funnel:
`view → start → step 1 → step 2 → submit → booking_view → slot_selected → booking_complete`,
so we can see exactly where people drop.

> **Note on existing fields:** `engagement` (one-off/ongoing) and `updates` (marketing
> consent) are already in the form's data model but not yet shown in the UI. If/when
> the Part-B consent checkbox + engagement pill ship, pass them as params here.

---

## 2. GA4

**Prereq:** create a GA4 property + Web data stream → get the **Measurement ID**
(`G-XXXXXXX`). Configure the GA4 Configuration + Event tags in GTM (triggered off the
dataLayer events above).

### Event mapping

| dataLayer event      | GA4 event (recommended name) | Mark as key event (conversion)? |
|----------------------|------------------------------|---------------------------------|
| `bf_form_view`       | `bf_form_view`               | no |
| `bf_form_start`      | `bf_form_start`              | no |
| `bf_step_complete`   | `form_progress` (`step_number`) | no |
| `bf_form_submit`     | **`generate_lead`** (+ `value`, `currency`) | **yes** |
| `bf_booking_complete`| **`schedule`**               | **yes** |
| `bf_form_error`      | `bf_form_error`              | no |

- **`generate_lead`** and **`schedule`** = your two key events/conversions. Give
  `generate_lead` a `value` + `currency` (e.g. an estimated lead value, say
  `value: 50, currency: "GBP"`) so GA4/Ads can optimize on value.
- **Custom dimensions:** register `job_type`, `engagement`, `has_phone` (event-scoped)
  in GA4 Admin → Custom definitions, so you can segment leads by service.
- **Funnel exploration:** build a GA4 Funnel report with steps
  `bf_form_view → bf_form_start → form_progress(1) → form_progress(2) → generate_lead
  → schedule` to visualise drop-off.
- **Google Ads:** if you run Search/PMax, link GA4 ↔ Ads and import `generate_lead` +
  `schedule` as conversions.
- Keep **Enhanced Measurement** on (scroll, outbound clicks).

---

## 3. Meta (Pixel + Conversions API) — incl. retargeting

**Prereq:** Meta Business → Events Manager → create a **Pixel** (get Pixel ID) and a
**Conversions API access token**.

### 3a. Browser Pixel (via GTM)

| Meta event        | Trigger (dataLayer)        | Purpose |
|-------------------|----------------------------|---------|
| `PageView`        | all pages                  | baseline + retargeting seed |
| `ViewContent`     | `bf_form_view` (or BF page load) | **builds the "BF visitors" retargeting audience** |
| custom `BFFormStart` | `bf_form_start`         | retarget form-abandoners |
| custom `BFFormStep`  | `bf_step_complete`      | mid-funnel audience |
| `Lead`            | `bf_form_submit`           | conversion + value |
| `Schedule`        | `bf_booking_complete`      | high-intent conversion |

Add an `eventID` to every Pixel event (e.g. a UUID generated when the event fires)
and pass the **same** `eventID` to the matching server event (below) for
de-duplication.

### 3b. Conversions API (server-side) — recommended

Fire server events from the API routes so conversions survive ad-blockers / iOS / ITP.
POST to the Meta Graph API `/{PIXEL_ID}/events` with the user data **SHA-256 hashed**.

- **`Lead`** from `src/app/api/black-friday/route.js` (after a successful send),
  using the submitted email/phone (hashed) + the same `event_id` as the browser event.
- **`Schedule`** from `src/app/api/cal/book/route.js` (after a successful booking),
  using attendee email (hashed) + matching `event_id`.

Reference shape (server):

```js
// Minimal Meta CAPI call (server route)
import crypto from "crypto";
const sha256 = (v) => crypto.createHash("sha256").update(v.trim().toLowerCase()).digest("hex");

async function metaCapi(eventName, { email, phone, eventId, value, currency }, request) {
  const PIXEL_ID = process.env.META_PIXEL_ID;
  const TOKEN = process.env.META_CAPI_TOKEN;
  if (!PIXEL_ID || !TOKEN) return;

  await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: [{
        event_name: eventName,                       // "Lead" | "Schedule"
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,                           // dedupe with browser Pixel
        action_source: "website",
        event_source_url: request.headers.get("referer") || undefined,
        user_data: {
          em: email ? [sha256(email)] : undefined,
          ph: phone ? [sha256(phone.replace(/\D/g, ""))] : undefined,
          client_ip_address: request.headers.get("x-forwarded-for")?.split(",")[0],
          client_user_agent: request.headers.get("user-agent"),
        },
        custom_data: value ? { value, currency: currency || "GBP" } : undefined,
      }],
    }),
  });
}
```

New env vars required (server-only, set in `.env.local` **and** Vercel):

```
META_PIXEL_ID=xxxxxxxxxxxxxxx
META_CAPI_TOKEN=EAAxxxxxxxx...
```

### 3c. Retargeting audiences to build (the actual ask)

In Meta Ads Manager → Audiences → Custom Audiences (from Website / events):

1. **BF page visitors** — `ViewContent`, last 30/60/90 days → retarget with the offer +
   urgency ("spots left").
2. **Form starters who didn't convert** — `BFFormStart` **minus** `Lead` → highest-value
   retarget; they showed real intent.
3. **Leads** — `Lead` → *exclude* from acquisition sets; use as a **Lookalike** seed.
4. **Booked** — `Schedule` → exclude/nurture; higher-quality Lookalike seed.

---

## 4. Consent (UK GDPR) — do this before firing marketing tags

You're UK-based, so Pixel + GA marketing tags should fire **after** consent.

- Implement **Google Consent Mode v2** + Meta consent signal, gated in GTM via a
  cookie-consent banner. If there's no consent banner on the site yet, that's a
  prerequisite for compliant Meta retargeting.
- The in-form marketing-consent checkbox (Part B) covers **email/CRM** consent;
  the cookie banner covers **pixel/analytics** tracking. They're separate.

---

## 5. Build order & ownership

| # | Task | Who | Type |
|---|------|-----|------|
| 1 | Add `track()` helper + dataLayer pushes in form/booking | dev | code |
| 2 | GA4 property + GTM tags/triggers for GA4 events | implementer | GTM/GA4 dashboard |
| 3 | Meta Pixel base + event tags in GTM (with `eventID`) | implementer | GTM/Meta dashboard |
| 4 | Meta CAPI server events in the 2 API routes (dedupe) | dev | code |
| 5 | Build GA4 funnel + Meta Custom Audiences/Lookalikes | implementer | dashboards |
| 6 | Consent Mode v2 + cookie banner gating | dev + implementer | code + GTM |

**Code we can do now:** #1 (dataLayer) and #4 (CAPI). #2, #3, #5 are dashboard config;
#6 depends on whether a consent banner already exists.

## Required credentials checklist

- [ ] GA4 Measurement ID (`G-XXXXXXX`)
- [ ] Meta Pixel ID
- [ ] Meta Conversions API access token
- [ ] Decision: nominal lead `value` + `currency` for `generate_lead`/`Lead`
- [ ] Confirm whether a cookie-consent/CMP banner exists on the site
