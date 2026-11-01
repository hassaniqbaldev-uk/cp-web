// Browser-side tracking helpers: push campaign events to the GTM dataLayer.
// GTM (GTM-B8FV6K69) forwards these to GA4, Google Ads and the Meta Pixel — we
// never load gtag.js or the Pixel base code directly.

import { getLeadTouches } from "./leadSource";

// Push an event to the dataLayer. No personal data (name/email/phone/company/
// website) must ever be passed here.
export const track = (event, params = {}) => {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch {
    /* never let tracking break the UI */
  }
};

// lead_source / lead_medium / lead_campaign for events + CAPI, from the last
// touch (the converting visit), falling back to first touch.
export const getLeadParams = () => {
  const { first, last } = getLeadTouches();
  const t = last || first || {};
  return {
    lead_source: t.source || "",
    lead_medium: t.medium || "",
    lead_campaign: t.campaign || "",
  };
};

// Map the form's job-type ids to the tracking enum.
export const mapJobType = (id) => (id === "something-else" ? "other" : id || "");

// Unique id shared between the browser event and the server CAPI event.
export const newEventId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

// Which booking entry point was used last (for the embed popup's
// bookingSuccessful callback, which has no button context of its own).
let bookingSource = "hero";
export const setBookingSource = (source) => {
  bookingSource = source || "hero";
};
export const getBookingSource = () => bookingSource;
