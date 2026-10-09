// lib/spamProtection.js
// Server-side spam checks shared by every form API route.
import { NextResponse } from "next/server";
import { HONEYPOT_FIELD, MIN_FILL_TIME } from "./spamConfig";

const RECAPTCHA_MIN_SCORE = 0.5;
const RATE_LIMIT_MAX = 5; // submissions...
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // ...per 10 minutes, per IP + form

// ------------------------------
//   Helpers
// ------------------------------

export const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Escape every string field so user input can't inject HTML into our emails
export const escapeFields = (fields) =>
  Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [
      key,
      typeof value === "string" ? escapeHtml(value.trim()) : value,
    ]),
  );

export const isValidEmail = (email) =>
  typeof email === "string" &&
  email.length <= 254 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

// Returns a clean https URL, or null if it isn't a real website address
export const normalizeUrl = (value) => {
  if (typeof value !== "string" || !value.trim()) return null;

  const raw = value.trim();
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

  try {
    const url = new URL(withProtocol);
    if (!["http:", "https:"].includes(url.protocol)) return null;
    if (!url.hostname.includes(".")) return null;
    return url.href;
  } catch {
    return null;
  }
};

// Gmail ignores dots, so bots use "b.a.r.t.l.e.t.t@gmail.com" style variants
// of one inbox to get around duplicate checks and to email-bomb it.
const isDottedGmail = (email) => {
  const [local, domain] = email.toLowerCase().split("@");
  if (!["gmail.com", "googlemail.com"].includes(domain)) return false;
  return (local.match(/\./g) || []).length >= 3;
};

// Catches bot strings like "OccBHqlveUPRlSjVlSNazvzi": one long word of
// letters only, with capitals scattered through the middle.
export const looksLikeGibberish = (value) => {
  if (typeof value !== "string") return false;

  const text = value.trim();
  if (text.length < 10 || /\s/.test(text) || !/^[A-Za-z]+$/.test(text)) {
    return false;
  }

  const innerCapitals = (text.slice(1).match(/[A-Z]/g) || []).length;
  return innerCapitals >= 3 && /[a-z]/.test(text);
};

const getClientIp = (req) =>
  req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
  req.headers.get("x-real-ip") ||
  "unknown";

// In-memory limiter. Resets when the server restarts and isn't shared
// between serverless instances, so it's a backstop, not the main defence.
const submissions = new Map();

const isRateLimited = (key) => {
  const now = Date.now();
  const recent = (submissions.get(key) || []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW,
  );

  recent.push(now);
  submissions.set(key, recent);

  // Keep the map from growing forever
  if (submissions.size > 5000) {
    for (const [k, times] of submissions) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW)) {
        submissions.delete(k);
      }
    }
  }

  return recent.length > RATE_LIMIT_MAX;
};

const verifyRecaptcha = async (token, action, ip) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  // Not configured (e.g. local dev) — skip instead of blocking every form
  if (!secret) {
    console.warn("RECAPTCHA_SECRET_KEY is not set, skipping reCAPTCHA check");
    return true;
  }

  if (!token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = await res.json();

    const passed =
      data.success === true &&
      data.action === action &&
      data.score >= RECAPTCHA_MIN_SCORE;

    // Log why it failed (low score, wrong action, bad key...) for debugging
    if (!passed) {
      console.warn("[spam] reCAPTCHA failed:", {
        action,
        score: data.score,
        returnedAction: data.action,
        errors: data["error-codes"],
      });
    }

    return passed;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
};

// ------------------------------
//   Main check
// ------------------------------

// Bots get a fake success so they don't learn what tripped them
const fakeSuccess = () => NextResponse.json({ success: true });

const reject = (error, status = 400) =>
  NextResponse.json({ success: false, error }, { status });

/**
 * Runs every spam check for a form submission.
 * Returns { ok: true } or { ok: false, response } — return that response as-is.
 *
 * @param {Request} req
 * @param {object} body     The submitted fields (JSON body or FormData as object)
 * @param {object} options
 * @param {string} options.action   reCAPTCHA action name, must match the form
 * @param {string} options.email    Submitted email
 * @param {string} [options.name]   Submitted name
 * @param {string[]} [options.text] Free-text fields (message, goal...)
 */
export async function checkSpam(req, body, { action, email, name, text = [] }) {
  const ip = getClientIp(req);
  const blocked = (reason, response = fakeSuccess()) => {
    console.warn(`[spam] ${action} blocked (${reason}) ip=${ip}`);
    return { ok: false, response };
  };

  // 1️⃣ Honeypot filled
  if (body[HONEYPOT_FIELD]) return blocked("honeypot");

  // 2️⃣ Submitted too fast, or posted straight to the API without the form
  const elapsed = Number(body.formElapsed);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_TIME) {
    return blocked("too fast");
  }

  // 3️⃣ Too many submissions from the same IP
  if (isRateLimited(`${action}:${ip}`)) {
    return blocked(
      "rate limit",
      reject("Too many requests. Please try again later.", 429),
    );
  }

  // 4️⃣ Google reCAPTCHA v3
  const human = await verifyRecaptcha(body.recaptchaToken, action, ip);
  if (!human) {
    return blocked(
      "recaptcha",
      reject("Spam check failed. Please refresh the page and try again."),
    );
  }

  // 5️⃣ Content checks
  if (!isValidEmail(email)) {
    return { ok: false, response: reject("Invalid email") };
  }

  if (isDottedGmail(email)) return blocked("dotted gmail");

  if ([name, ...text].some(looksLikeGibberish)) return blocked("gibberish");

  return { ok: true };
}
