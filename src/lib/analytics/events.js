// Central GA4 event-name registry (D14 analytics). Event names are defined ONCE
// here and referenced by constant — never typed as string literals at call sites,
// because a typo in an event name is a silent failure.

export const ANALYTICS_EVENTS = {
  CTA_CLICK: "cta_click",
  ENQUIRY_STARTED: "enquiry_started",
  ENQUIRY_STEP_2: "enquiry_step_2",
  ENQUIRY_STEP_3: "enquiry_step_3",
  ENQUIRY_SUBMITTED: "enquiry_submitted",
  CALL_BOOKING_CLICKED: "call_booking_clicked",
  CASE_STUDY_VIEW: "case_study_view",
  SERVICE_SELECTED: "service_selected",
  SOLUTION_SELECTED: "solution_selected",
  INDUSTRY_SELECTED: "industry_selected",
  PRICING_VIEW: "pricing_view",
  EMAIL_CLICK: "email_click",
  PHONE_CLICK: "phone_click",
};

// Events whose host UI does not exist yet — kept in the registry so they are ready,
// but they cannot fire and must NOT be claimed as live:
//  - enquiry_step_2 / enquiry_step_3: the multi-step enquiry flow is not built.
//  - industry_selected: industry pages have no route until CP-08.
export const PENDING_EVENTS = new Set([
  ANALYTICS_EVENTS.ENQUIRY_STEP_2,
  ANALYTICS_EVENTS.ENQUIRY_STEP_3,
  ANALYTICS_EVENTS.INDUSTRY_SELECTED,
]);

// Fire an event. This is a SAFE NO-OP until the analytics runtime (GTM/gtag) and
// the consent layer land in a later Step 3 sub-phase: with neither `gtag` nor a
// `dataLayer` present, nothing is sent. Wiring events now means the components
// carry them from birth rather than being retrofitted; they simply have no sink
// yet. Do not treat a wired event as a verified/live event.
export function track(event, params = {}) {
  if (typeof window === "undefined") return;
  const page_path = window.location?.pathname;
  const payload = page_path ? { page_path, ...params } : params;
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...payload });
  }
}

// Convenience for the shared CTA buttons: fires `cta_click` with the label + slot.
// `cta_label` and `cta_position` are the pair that make cta_click meaningful (§10).
export function trackCta(cta_label, cta_position = "") {
  track(ANALYTICS_EVENTS.CTA_CLICK, { cta_label, cta_position });
}
