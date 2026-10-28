"use client";

import { useEffect } from "react";

// Adds a body class while this page is mounted so globals.css can hide the
// floating reCAPTCHA v3 badge (scoped to Black Friday only). The required
// reCAPTCHA text attribution is shown in the quote form instead.
export default function HideRecaptchaBadge() {
  useEffect(() => {
    document.body.classList.add("hide-recaptcha-badge");

    return () => document.body.classList.remove("hide-recaptcha-badge");
  }, []);

  return null;
}
