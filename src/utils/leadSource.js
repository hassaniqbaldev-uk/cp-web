// Lead-source attribution for the Black Friday campaign.
//
// Captures how a visitor arrived (UTMs, click IDs, or the referrer) and keeps
// FIRST touch (localStorage, 90 days) and LAST touch (sessionStorage, per
// visit). Values are sent with the form submit + Cal booking so leads show
// where they came from. All storage access is wrapped in try/catch — private
// mode / blocked storage must never break the form.

const FIRST_TOUCH_KEY = "cp_first_touch";
const LAST_TOUCH_KEY = "cp_last_touch";
const FIRST_TOUCH_TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 days

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

const hostFromReferrer = (referrer) => {
  try {
    return new URL(referrer).hostname.toLowerCase();
  } catch {
    return "";
  }
};

// Derive source/medium (and campaign where known) from the referrer host when
// there are no UTMs.
const deriveFromReferrer = (host, hasFbclid) => {
  // theadminbar.com and any subdomain.
  if (/(^|\.)theadminbar\.com$/.test(host)) {
    return { source: "theadminbar", medium: "deal_listing", campaign: "bf2026" };
  }

  // Any fbclid means a Meta ad click, regardless of referrer.
  if (hasFbclid) return { source: "facebook", medium: "paid_social" };

  if (/(^|\.)facebook\.com$/.test(host) || /(^|\.)instagram\.com$/.test(host)) {
    return { source: "facebook", medium: "social" };
  }

  if (/(^|\.)google\./.test(host)) return { source: "google", medium: "organic" };

  if (/(^|\.)linkedin\.com$/.test(host) || host === "lnkd.in") {
    return { source: "linkedin", medium: "social" };
  }

  if (host) return { source: host, medium: "referral" };

  return { source: "direct", medium: "none" };
};

const computeTouch = () => {
  const params = new URLSearchParams(window.location.search);

  const utm = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) utm[key] = value;
  });

  const fbclid = params.get("fbclid") || "";
  const gclid = params.get("gclid") || "";
  const referrer = document.referrer || "";

  let source;
  let medium;
  let campaign = "";
  let content = "";
  let term = "";

  if (utm.utm_source) {
    // UTMs win when present.
    source = utm.utm_source;
    medium = utm.utm_medium || "";
    campaign = utm.utm_campaign || "";
    content = utm.utm_content || "";
    term = utm.utm_term || "";
  } else {
    const derived = deriveFromReferrer(hostFromReferrer(referrer), Boolean(fbclid));
    source = derived.source;
    medium = derived.medium;
    campaign = derived.campaign || "";
  }

  return {
    source,
    medium,
    campaign,
    content,
    term,
    fbclid,
    gclid,
    referrer,
    landing_page: window.location.href,
    timestamp: new Date().toISOString(),
  };
};

// Call once on page load. Idempotent and safe to call from several components.
export const initLeadSource = () => {
  if (typeof window === "undefined") return;

  const touch = computeTouch();

  // FIRST touch: only written if empty or expired (90-day window).
  try {
    const raw = window.localStorage.getItem(FIRST_TOUCH_KEY);
    let valid = false;
    if (raw) {
      const parsed = JSON.parse(raw);
      valid = Boolean(parsed?.expires && parsed.expires > Date.now());
    }
    if (!valid) {
      window.localStorage.setItem(
        FIRST_TOUCH_KEY,
        JSON.stringify({ touch, expires: Date.now() + FIRST_TOUCH_TTL_MS }),
      );
    }
  } catch {
    /* storage unavailable — ignore */
  }

  // LAST touch: set once per session (a new visit = a fresh sessionStorage).
  try {
    if (!window.sessionStorage.getItem(LAST_TOUCH_KEY)) {
      window.sessionStorage.setItem(LAST_TOUCH_KEY, JSON.stringify({ touch }));
    }
  } catch {
    /* storage unavailable — ignore */
  }
};

const readTouch = (storageName, key) => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window[storageName].getItem(key);
    if (!raw) return null;
    return JSON.parse(raw)?.touch || null;
  } catch {
    return null;
  }
};

// { first, last } — either may be null if storage was unavailable.
export const getLeadTouches = () => ({
  first: readTouch("localStorage", FIRST_TOUCH_KEY),
  last: readTouch("sessionStorage", LAST_TOUCH_KEY),
});

// Plain string map for Cal.com booking metadata, built from the last touch
// (falling back to first). Used by the server booking route; the embed popups
// map these to Cal's "metadata[...]" config keys.
export const getLeadMetadata = () => {
  const { first, last } = getLeadTouches();
  const t = last || first || {};
  return {
    utm_source: t.source || "",
    utm_medium: t.medium || "",
    utm_campaign: t.campaign || "",
    utm_content: t.content || "",
  };
};
