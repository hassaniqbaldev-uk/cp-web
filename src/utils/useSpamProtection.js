// utils/useSpamProtection.js
import { useEffect, useRef, useState } from "react";
import { HONEYPOT_FIELD } from "@/lib/spamConfig";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

// One shared script load for every form on the page
let recaptchaPromise = null;

const loadRecaptcha = () => {
  if (!SITE_KEY || typeof window === "undefined") return Promise.resolve(null);
  if (recaptchaPromise) return recaptchaPromise;

  recaptchaPromise = new Promise((resolve) => {
    if (window.grecaptcha?.execute) {
      window.grecaptcha.ready(() => resolve(window.grecaptcha));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () =>
      window.grecaptcha.ready(() => resolve(window.grecaptcha));
    script.onerror = () => {
      recaptchaPromise = null; // allow a retry on next submit
      resolve(null);
    };
    document.head.appendChild(script);
  });

  return recaptchaPromise;
};

const getRecaptchaToken = async (action) => {
  try {
    const grecaptcha = await loadRecaptcha();
    if (!grecaptcha) return "";
    return await grecaptcha.execute(SITE_KEY, { action });
  } catch (error) {
    console.error("reCAPTCHA error:", error);
    return "";
  }
};

/**
 * Spam protection for a form.
 * - Spread `honeypotProps` on <HoneypotField />
 * - Call `preload` on form focus so reCAPTCHA doesn't load on page load (LCP)
 * - Merge `await getSpamFields()` into the request body before sending
 *
 * @param {string} action  reCAPTCHA action, must match the API route
 */
const useSpamProtection = (action) => {
  const [honeypot, setHoneypot] = useState("");
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const getSpamFields = async () => ({
    [HONEYPOT_FIELD]: honeypot,
    formElapsed: Date.now() - mountedAt.current,
    recaptchaToken: await getRecaptchaToken(action),
  });

  return {
    honeypotProps: {
      name: HONEYPOT_FIELD,
      value: honeypot,
      onChange: (e) => setHoneypot(e.target.value),
    },
    preload: loadRecaptcha,
    getSpamFields,
  };
};

export default useSpamProtection;
