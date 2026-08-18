"use client";

import { useRef, useState } from "react";
import { ANALYTICS_EVENTS, track } from "@/lib/analytics/events";

/*
  Shared form core (Step 3). Headless: each form supplies its own field markup as
  children, so no form's layout/design changes. What every form INHERITS and can no
  longer omit:

  1. Honeypot spam protection — a visually-hidden `website` field is injected here and
     checked on submit (and passed to the server, which also checks). A form literally
     cannot be built without it. This is the gap we found last week.
  2. Accessibility — errors are announced to screen readers via a role="alert"
     aria-live region; on a failed submit focus moves to the first invalid field;
     `fieldProps(name)` supplies aria-invalid / aria-describedby wiring.
  3. GA4 — enquiry_started (first field interaction) and enquiry_submitted (success)
     fire via the shared event registry. enquiry_step_2 / enquiry_step_3 are PENDING
     host UI (the multi-step flow does not exist yet) and are intentionally not wired.

  The form keeps its own state; it passes current `values` down and a `validate` that
  returns an errors map. Transport is "json" (default) or "multipart" (file uploads).

  children is a render-prop: ({ errors, errorId, fieldProps, submitting }) => JSX.
*/
export default function Form({
  endpoint,
  transport = "json", // "json" | "multipart"
  values = {},
  validate,
  buildPayload, // optional (values) => object | FormData
  onSuccess,
  onError,
  analyticsForm, // label sent as GA4 `form` param, e.g. "contact"
  className = "",
  style,
  children,
  ...rest
}) {
  const formRef = useRef(null);
  const startedRef = useRef(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const errorId = (name) => `${name}-error`;

  const fieldProps = (name) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? errorId(name) : undefined,
  });

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    track(
      ANALYTICS_EVENTS.ENQUIRY_STARTED,
      analyticsForm ? { form: analyticsForm } : {},
    );
  };

  const focusFirst = (errs) => {
    const first = Object.keys(errs)[0];
    if (!first || !formRef.current) return;
    const el =
      formRef.current.querySelector(`[name="${first}"]`) ||
      formRef.current.querySelector(`#${CSS.escape(first)}`);
    el?.focus?.();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: a bot filled the hidden field. Pretend success, send nothing.
    if (website) {
      onSuccess?.({ success: true, bot: true });
      return;
    }

    const errs = (validate ? validate(values) : {}) || {};
    if (Object.keys(errs).length) {
      setErrors(errs);
      setAnnouncement(Object.values(errs)[0] || "Please fix the errors and try again.");
      focusFirst(errs);
      return;
    }

    setErrors({});
    setAnnouncement("");
    setSubmitting(true);

    try {
      let body;
      let headers;
      if (transport === "multipart") {
        if (buildPayload) {
          body = buildPayload(values);
        } else {
          body = new FormData();
          Object.entries(values).forEach(([k, v]) => body.append(k, v));
        }
        body.append("website", website); // honeypot passthrough
      } else {
        const payload = buildPayload ? buildPayload(values) : values;
        body = JSON.stringify({ ...payload, website });
        headers = { "Content-Type": "application/json" };
      }

      const res = await fetch(endpoint, { method: "POST", headers, body });
      const data = await res.json().catch(() => ({}));

      if (data.success) {
        track(
          ANALYTICS_EVENTS.ENQUIRY_SUBMITTED,
          analyticsForm ? { form: analyticsForm } : {},
        );
        onSuccess?.(data);
      } else {
        setAnnouncement("Failed to send. Please try again later.");
        onError?.(data);
      }
    } catch (err) {
      setAnnouncement("Something went wrong. Try again.");
      onError?.(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onInput={markStarted}
      noValidate
      className={className}
      style={style}
      {...rest}
    >
      {/* Honeypot — visually hidden, kept out of the a11y tree and tab order. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {typeof children === "function"
        ? children({ errors, errorId, fieldProps, submitting })
        : children}

      {/* Screen-reader announcement for validation / submit status. */}
      <p role="alert" aria-live="assertive" className="sr-only">
        {announcement}
      </p>
    </form>
  );
}
