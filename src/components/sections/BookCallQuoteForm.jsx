"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import BookCallBooking from "./BookCallBooking";
import HoneypotField from "../ui/HoneypotField";
import useSpamProtection from "@/utils/useSpamProtection";
import { initLeadSource, getLeadTouches } from "@/utils/leadSource";
import { track, getLeadParams, newEventId } from "@/utils/track";
import { LEAD_VALUE, TRACKING_CURRENCY } from "@/config/tracking";

const TOTAL_STEPS = 3;

// Step 1 — rough monthly store revenue. Six options laid out in a 2-column
// grid (row-wise), matching the design order.
const revenues = [
  { id: "under-5k", label: "Under £5k" },
  { id: "25k-50k", label: "£25k to £50k" },
  { id: "5k-10k", label: "£5k to £10k" },
  { id: "50k-plus", label: "£50k+" },
  { id: "10k-25k", label: "£10k to £25k" },
  { id: "rather-not-say", label: "Rather not say" },
];

// Step 2 — budget for fixes.
const budgets = [
  { id: "under-1k", label: "Under £1,000" },
  { id: "1k-3.5k", label: "£1,000 to £3,500" },
  { id: "3.5k-plus", label: "£3,500+" },
  { id: "no-say-budget", label: "Rather not say" },
];

const META = {
  1: {
    label: "About 20 seconds left",
    title: "Roughly how much does your store sell a month?",
    subtitle: "A rough guess is fine. It just helps us prepare.",
  },
  2: {
    label: "About 10 seconds left",
    title: "If we find the right fixes, what budget do you have in mind?",
    subtitle: "No commitment. Prices are fixed and agreed before anything starts.",
  },
  3: {
    label: "Last details",
    title: "Where should we send your call details?",
  },
};

const initialData = {
  revenue: "",
  budget: "",
  name: "",
  email: "",
  website: "",
};

// Readable label for a chosen option id, for the lead email + Cal metadata.
const labelOf = (list, id) => list.find((o) => o.id === id)?.label || "";

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

// A website just needs to look like a domain: a dot + TLD and no spaces.
const isLikelyUrl = (value) =>
  /\.[a-z]{2,}/i.test(value.trim()) && !/\s/.test(value.trim());

const fieldClassName =
  "w-full rounded-[10px] border border-black/15 px-[16px] py-[12px] text-[16px] tracking-[-0.02em] text-black placeholder:text-text-body/50 focus:border-black focus:outline-none";

const labelClassName =
  "mb-[8px] block text-[13px] font-medium tracking-[-0.02em] text-black";

const RequiredMark = () => (
  <span className="text-[#D33]" aria-hidden="true">
    {" "}
    *
  </span>
);

const OptionPill = ({ name, value, label, checked, onChange, onClick }) => (
  <label className="group flex cursor-pointer items-center gap-[12px] rounded-full border border-transparent bg-[#F4F4F5] px-[16px] py-[13px] transition-colors has-[:checked]:bg-white has-[:checked]:ring-1 has-[:checked]:ring-black/15">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      onClick={onClick}
      className="sr-only"
    />

    <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full border border-black/30 group-has-[:checked]:border-black">
      <span className="size-[8px] scale-0 rounded-full bg-black transition-transform group-has-[:checked]:scale-100" />
    </span>

    <span className="text-[15px] font-medium tracking-[-0.02em] text-black">
      {label}
    </span>
  </label>
);

const BookCallQuoteForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { honeypotProps, preload, getSpamFields } =
    useSpamProtection("book_a_call");

  const cardRef = useRef(null);
  const firstFieldRef = useRef(null);
  const firstRender = useRef(true);
  const startedRef = useRef(false);
  const viewedRef = useRef(false);
  const advanceTimer = useRef(null);

  const set = (key) => (event) => {
    const { value } = event.target;
    setData((current) => ({ ...current, [key]: value }));
    setErrors((current) =>
      current[key] ? { ...current, [key]: false } : current,
    );

    // Fire bc_form_start once, on the first real interaction.
    if (!startedRef.current) {
      startedRef.current = true;
      track("bc_form_start");
    }
  };

  // Clear any pending auto-advance on unmount.
  useEffect(() => () => window.clearTimeout(advanceTimer.current), []);

  // Picking an option on a selection step auto-advances (like the BF form),
  // after a short delay so the choice is visible first. Fires on click so
  // re-selecting an already-chosen option still advances.
  const onOptionClick = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      track("bc_form_start");
    }

    window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(() => {
      track("bc_step_complete", { step });
      setStep((current) => Math.min(current + 1, TOTAL_STEPS));
    }, 220);
  };

  // Capture lead source (UTMs / referrer / click IDs) on page load.
  useEffect(() => {
    initLeadSource();
  }, []);

  // Fire bc_form_view once when the form is 50% in view.
  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !viewedRef.current) {
          viewedRef.current = true;
          track("bc_form_view");
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll back to the top of the card on each step change, and focus the first
  // text field of the new step (step 3 only).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    firstFieldRef.current?.focus({ preventScroll: true });
  }, [step]);

  // Can the current selection step advance?
  const canAdvance =
    step === 1 ? !!data.revenue : step === 2 ? !!data.budget : true;

  const back = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 1));
  };

  const advanceFromSelection = () => {
    if (!canAdvance) return;
    track("bc_step_complete", { step });
    setStep((current) => current + 1);
  };

  // Step 3: validate contact details, submit the lead, then move to booking.
  const submitLead = async () => {
    const fieldErrors = {
      name: !data.name.trim(),
      email: !isValidEmail(data.email),
      website: data.website.trim() ? !isLikelyUrl(data.website) : true,
    };

    if (fieldErrors.name || fieldErrors.email || fieldErrors.website) {
      setErrors(fieldErrors);
      Object.entries(fieldErrors).forEach(([field, invalid]) => {
        if (invalid) track("bc_field_error", { step: 3, field });
      });
      return;
    }

    setErrors({});
    setError("");
    setSubmitting(true);

    const eventId = newEventId();

    const payload = {
      revenue: labelOf(revenues, data.revenue),
      budget: labelOf(budgets, data.budget),
      name: data.name.trim(),
      email: data.email.trim(),
      website: data.website.trim(),
    };

    try {
      const { first, last } = getLeadTouches();

      const response = await fetch("/api/book-a-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          firstTouch: first,
          lastTouch: last,
          eventId,
          ...(await getSpamFields()),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        setError("Something went wrong. Please try again.");
        track("bc_form_error", { step: 3, error_type: "api" });
        return;
      }

      track("bc_form_submit", {
        event_id: eventId,
        ...getLeadParams(),
        value: LEAD_VALUE,
        currency: TRACKING_CURRENCY,
      });

      // Lead captured — move on to pick a time (step 4, the booking phase).
      setStep(4);
    } catch {
      setError("Something went wrong. Please try again.");
      track("bc_form_error", { step: 3, error_type: "network" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 3) submitLead();
    else advanceFromSelection();
  };

  const cardClassName =
    "w-[500px] shrink-0 scroll-mt-[120px] rounded-[20px] bg-white p-[30px] max-bf-xl:w-full max-bf-sm:p-[20px]";

  // The booking phase (pick a time → booked) is handled by the booking
  // component. It renders its own chrome, so the shared form shell steps aside.
  if (step >= 4) {
    return (
      <div ref={cardRef} className={cardClassName}>
        <BookCallBooking
          name={data.name.trim()}
          email={data.email.trim()}
          onBack={() => setStep(3)}
          metadata={{
            revenue: labelOf(revenues, data.revenue),
            budget: labelOf(budgets, data.budget),
            website: data.website.trim(),
          }}
        />
      </div>
    );
  }

  return (
    <form
      ref={cardRef}
      className={cardClassName}
      onFocus={preload}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              aria-label="Go back a step"
              className="flex size-[32px] shrink-0 items-center justify-center rounded-full border border-black/15 text-black transition-colors hover:bg-black hover:text-white"
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>
          )}

          <span className="text-dark-pink text-[16px] font-medium tracking-[-0.02em]">
            Step {step} of {TOTAL_STEPS}
          </span>
        </div>

        <span className="text-text-body/60 text-[14px] tracking-[-0.02em]">
          {META[step].label}
        </span>
      </div>

      <div className="bg-dark-pink/15 mt-[12px] h-[5px] w-full overflow-hidden rounded-full">
        <div
          className="bg-dark-pink h-full rounded-full transition-[width] duration-300"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      <h2 className="mt-[20px] text-[25px] leading-[32px] font-bold tracking-[-0.04em] text-black">
        {META[step].title}
      </h2>

      {META[step].subtitle && (
        <p className="text-text-body/70 mt-[6px] text-[14px] leading-[20px] tracking-[-0.02em]">
          {META[step].subtitle}
        </p>
      )}

      {step === 1 && (
        <fieldset className="mt-[20px]">
          <legend className="sr-only">
            Roughly how much does your store sell a month?
          </legend>

          <div className="grid grid-cols-2 gap-[12px] max-bf-sm:grid-cols-1">
            {revenues.map(({ id, label }) => (
              <OptionPill
                key={id}
                name="revenue"
                value={id}
                label={label}
                checked={data.revenue === id}
                onChange={set("revenue")}
                onClick={onOptionClick}
              />
            ))}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="mt-[20px]">
          <legend className="sr-only">
            If we find the right fixes, what budget do you have in mind?
          </legend>

          <div className="grid grid-cols-2 gap-[12px] max-bf-sm:grid-cols-1">
            {budgets.map(({ id, label }) => (
              <OptionPill
                key={id}
                name="budget"
                value={id}
                label={label}
                checked={data.budget === id}
                onChange={set("budget")}
                onClick={onOptionClick}
              />
            ))}
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <div className="mt-[20px] flex flex-col gap-[16px]">
          <div>
            <label htmlFor="bc-name" className={labelClassName}>
              First name
              <RequiredMark />
            </label>

            <input
              ref={firstFieldRef}
              id="bc-name"
              type="text"
              autoComplete="given-name"
              placeholder="Sarah"
              value={data.name}
              onChange={set("name")}
              aria-invalid={errors.name ? true : undefined}
              className={`${fieldClassName} ${errors.name ? "border-[#D33]!" : ""}`}
            />
          </div>

          <div>
            <label htmlFor="bc-email" className={labelClassName}>
              Work email
              <RequiredMark />
            </label>

            <input
              id="bc-email"
              type="email"
              autoComplete="email"
              placeholder="name@yourstore.com"
              value={data.email}
              onChange={set("email")}
              aria-invalid={errors.email ? true : undefined}
              className={`${fieldClassName} ${errors.email ? "border-[#D33]!" : ""}`}
            />
          </div>

          <div>
            <label htmlFor="bc-website" className={labelClassName}>
              Store website
              <RequiredMark />
            </label>

            <input
              id="bc-website"
              type="text"
              inputMode="url"
              placeholder="yourstore.com"
              value={data.website}
              onChange={set("website")}
              aria-invalid={errors.website ? true : undefined}
              className={`${fieldClassName} ${errors.website ? "border-[#D33]!" : ""}`}
            />
          </div>
        </div>
      )}

      <HoneypotField {...honeypotProps} />

      <button
        type="submit"
        disabled={!canAdvance || submitting}
        className="mt-[30px] flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase transition-opacity hover:opacity-90 disabled:opacity-40 disabled:hover:opacity-40"
      >
        {submitting ? "Saving…" : step === 3 ? "See available times" : "Next"}
        {!submitting && <ArrowUpRight size={18} strokeWidth={2.5} />}
      </button>

      {error && (
        <p className="mt-[12px] text-center text-[13px] font-medium text-[#D33]">
          {error}
        </p>
      )}

      <p className="text-text-body/70 mt-[14px] text-center text-[12px] tracking-[-0.02em]">
        {step === 3
          ? "We only use these to arrange and remind you about your call. No marketing emails."
          : "No sales spam. We only use your details to arrange your call."}
      </p>
    </form>
  );
};

export default BookCallQuoteForm;
