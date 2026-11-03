"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  HelpCircle,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import StoreReviewBooking from "./StoreReviewBooking";
import HoneypotField from "../ui/HoneypotField";
import useSpamProtection from "@/utils/useSpamProtection";
import { initLeadSource, getLeadTouches } from "@/utils/leadSource";
import { track, getLeadParams, newEventId } from "@/utils/track";
import { LEAD_VALUE, TRACKING_CURRENCY } from "@/config/tracking";

const TOTAL_STEPS = 5;

// Step 1 — store platform. Each option is tinted with its brand colour and
// shows a brand-coloured icon on a white circle. WooCommerce uses a coloured
// brand SVG; the rest use lucide glyphs tinted with `color`.
const platforms = [
  {
    id: "shopify",
    label: "Shopify",
    color: "#5E8E3E",
    tint: "bg-[#F2F6F0]",
    icon: { Glyph: ShoppingBag },
  },
  {
    id: "woocommerce",
    label: "WooCommerce",
    color: "#7F54B3",
    tint: "bg-[#F5F1F9]",
    icon: { img: "/icons/woocommerce-icon-color.svg" },
  },
  {
    id: "something-else",
    label: "Something else",
    color: "#EC4899",
    tint: "bg-[#FDF0F7]",
    icon: { Glyph: HelpCircle },
  },
];

// Step 2 — monthly store revenue.
const revenues = [
  { id: "under-5k", label: "Under £5k" },
  { id: "5k-10k", label: "£5k to £10k" },
  { id: "10k-25k", label: "£10k to £25k" },
  { id: "25k-50k", label: "£25k to £50k" },
  { id: "50k-plus", label: "£50k+" },
  { id: "no-say-revenue", label: "Rather not say" },
];

// Step 3 — budget for fixes.
const budgets = [
  { id: "under-1k", label: "Under £1,000" },
  { id: "1k-3.5k", label: "£1,000 to £3,500" },
  { id: "3.5k-plus", label: "£3,500+" },
  { id: "no-say-budget", label: "Rather not say" },
];

// Step 4 — timeline + who decides.
const timelines = [
  { id: "next-month", label: "In the next month" },
  { id: "1-3-months", label: "In 1 to 3 months" },
  { id: "exploring", label: "Just exploring for now" },
];

const deciders = [
  { id: "me", label: "Me" },
  { id: "me-partner", label: "Me and a partner" },
  { id: "someone-else", label: "Someone else" },
];

const META = {
  1: {
    label: "Takes about 30 seconds",
    title: "Which platform is your store on?",
  },
  2: {
    label: "About 25 seconds left",
    title: "Roughly how much does your store sell a month?",
  },
  3: {
    label: "About 20 seconds left",
    title: "If we find the right fixes, what budget do you have in mind?",
  },
  4: { label: "Halfway there", title: "When would you want to start?" },
  5: { label: "Last details", title: "Where should we send your review?" },
};

const initialData = {
  platform: "",
  revenue: "",
  budget: "",
  timeline: "",
  decider: "",
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

// Plain radio pill (revenue / budget / timeline / who decides).
const OptionPill = ({ name, value, label, checked, onChange, onClick }) => (
  <label className="group has-[:checked]:bg-grey max-bf-sm:gap-[8px] flex cursor-pointer items-center gap-[10px] rounded-full border border-black/15 px-[18px] py-[12px] transition-colors has-[:checked]:border-transparent">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      onClick={onClick}
      className="sr-only"
    />

    <span className="flex size-[14px] shrink-0 items-center justify-center rounded-full border border-black/30 group-has-[:checked]:border-black">
      <span className="size-[6px] scale-0 rounded-full bg-black transition-transform group-has-[:checked]:scale-100" />
    </span>

    <span className="max-bf-sm:text-[13px] text-[14px] tracking-[-0.02em] text-black">
      {label}
    </span>
  </label>
);

// Brand-tinted pill with an icon (step 1, platform).
const PlatformPill = ({
  name,
  value,
  label,
  checked,
  onChange,
  onClick,
  icon,
  color,
  tint,
}) => {
  const Glyph = icon?.Glyph;

  return (
    <label
      className={`group flex cursor-pointer items-center gap-[12px] rounded-full border border-transparent px-[16px] py-[12px] transition-colors has-[:checked]:ring-1 has-[:checked]:ring-black/15 ${tint}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        onClick={onClick}
        className="sr-only"
      />

      <span className="flex size-[16px] shrink-0 items-center justify-center rounded-full border border-black/30 group-has-[:checked]:border-black">
        <span className="size-[8px] scale-0 rounded-full bg-black transition-transform group-has-[:checked]:scale-100" />
      </span>

      <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
        {icon?.img ? (
          <Image
            src={icon.img}
            alt=""
            width={17}
            height={17}
            className="size-[17px]"
          />
        ) : (
          Glyph && <Glyph size={17} strokeWidth={2.2} color={color} />
        )}
      </span>

      <span className="text-[15px] font-medium tracking-[-0.02em] text-black">
        {label}
      </span>
    </label>
  );
};

const StoreReviewQuoteForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { honeypotProps, preload, getSpamFields } =
    useSpamProtection("store_review");

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

    // Fire sr_form_start once, on the first real interaction.
    if (!startedRef.current) {
      startedRef.current = true;
      track("sr_form_start");
    }
  };

  // Clear any pending auto-advance on unmount.
  useEffect(() => () => window.clearTimeout(advanceTimer.current), []);

  // Picking an option on a selection step auto-advances (like the BF form),
  // after a short delay so the choice is visible first. Fires on click so
  // re-selecting an already-chosen option still advances. Step 4 holds two
  // questions, so it only advances once both are answered.
  const onOptionClick = (key) => () => {
    // Fire sr_form_start once, on the first real interaction.
    if (!startedRef.current) {
      startedRef.current = true;
      track("sr_form_start");
    }

    if (step === 4) {
      const otherFilled = key === "timeline" ? !!data.decider : !!data.timeline;
      if (!otherFilled) return;
    }

    window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(() => {
      track("sr_step_complete", { step });
      setStep((current) => Math.min(current + 1, 5));
    }, 220);
  };

  // Capture lead source (UTMs / referrer / click IDs) on page load.
  useEffect(() => {
    initLeadSource();
  }, []);

  // Fire sr_form_view once when the form is 50% in view.
  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !viewedRef.current) {
          viewedRef.current = true;
          track("sr_form_view");
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll back to the top of the card on each step change, and focus the first
  // text field of the new step (step 5 only).
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
    step === 1
      ? !!data.platform
      : step === 2
        ? !!data.revenue
        : step === 3
          ? !!data.budget
          : step === 4
            ? !!data.timeline && !!data.decider
            : true;

  const back = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 1));
  };

  const advanceFromSelection = () => {
    if (!canAdvance) return;
    track("sr_step_complete", { step });
    setStep((current) => current + 1);
  };

  // Step 5: validate contact details, submit the lead, then move to booking.
  const submitLead = async () => {
    const fieldErrors = {
      name: !data.name.trim(),
      email: !isValidEmail(data.email),
      website: data.website.trim() ? !isLikelyUrl(data.website) : true,
    };

    if (fieldErrors.name || fieldErrors.email || fieldErrors.website) {
      setErrors(fieldErrors);
      Object.entries(fieldErrors).forEach(([field, invalid]) => {
        if (invalid) track("sr_field_error", { step: 5, field });
      });
      return;
    }

    setErrors({});
    setError("");
    setSubmitting(true);

    const eventId = newEventId();

    const payload = {
      platform: labelOf(platforms, data.platform),
      revenue: labelOf(revenues, data.revenue),
      budget: labelOf(budgets, data.budget),
      timeline: labelOf(timelines, data.timeline),
      decider: labelOf(deciders, data.decider),
      name: data.name.trim(),
      email: data.email.trim(),
      website: data.website.trim(),
    };

    try {
      const { first, last } = getLeadTouches();

      const response = await fetch("/api/store-review", {
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
        setError("Something went wrong. Please try again, or book a call.");
        track("sr_form_error", { step: 5, error_type: "api" });
        return;
      }

      track("sr_form_submit", {
        event_id: eventId,
        ...getLeadParams(),
        value: LEAD_VALUE,
        currency: TRACKING_CURRENCY,
      });

      // Lead captured — move on to pick a time (step 6).
      setStep(6);
    } catch {
      setError("Something went wrong. Please try again, or book a call.");
      track("sr_form_error", { step: 5, error_type: "network" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 5) submitLead();
    else advanceFromSelection();
  };

  const cardClassName =
    "w-[500px] shrink-0 scroll-mt-[120px] rounded-[20px] bg-white p-[30px] max-bf-xl:w-full max-bf-sm:p-[20px]";

  // Steps 6–7 (pick a time + booked) are handled by the booking component. It
  // renders its own step chrome, so the shared form shell steps aside.
  if (step >= 6) {
    return (
      <div ref={cardRef} className={cardClassName}>
        <StoreReviewBooking
          name={data.name.trim()}
          email={data.email.trim()}
          onBack={() => setStep(5)}
          metadata={{
            platform: labelOf(platforms, data.platform),
            revenue: labelOf(revenues, data.revenue),
            budget: labelOf(budgets, data.budget),
            timeline: labelOf(timelines, data.timeline),
            decider: labelOf(deciders, data.decider),
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

      {step === 1 && (
        <fieldset className="mt-[22px]">
          <legend className="sr-only">Which platform is your store on?</legend>

          <div className="flex flex-col gap-[12px]">
            {platforms.map(({ id, label, icon, color, tint }) => (
              <PlatformPill
                key={id}
                name="platform"
                value={id}
                label={label}
                icon={icon}
                color={color}
                tint={tint}
                checked={data.platform === id}
                onChange={set("platform")}
                onClick={onOptionClick("platform")}
              />
            ))}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="mt-[20px]">
          <legend className="sr-only">
            Roughly how much does your store sell a month?
          </legend>

          <p className="text-text-body mb-[18px] text-[13px] tracking-[-0.02em]">
            A rough guess is fine. It just helps us prepare.
          </p>

          <div className="max-bf-sm:grid-cols-1 grid grid-cols-2 gap-[10px]">
            {revenues.map(({ id, label }) => (
              <OptionPill
                key={id}
                name="revenue"
                value={id}
                label={label}
                checked={data.revenue === id}
                onChange={set("revenue")}
                onClick={onOptionClick("revenue")}
              />
            ))}
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="mt-[20px]">
          <legend className="sr-only">
            If we find the right fixes, what budget do you have in mind?
          </legend>

          <p className="text-text-body mb-[18px] text-[13px] tracking-[-0.02em]">
            No commitment. Prices are fixed and agreed before anything starts.
          </p>

          <div className="max-bf-sm:grid-cols-1 grid grid-cols-2 gap-[10px]">
            {budgets.map(({ id, label }) => (
              <OptionPill
                key={id}
                name="budget"
                value={id}
                label={label}
                checked={data.budget === id}
                onChange={set("budget")}
                onClick={onOptionClick("budget")}
              />
            ))}
          </div>
        </fieldset>
      )}

      {step === 4 && (
        <div className="mt-[22px] flex flex-col gap-[24px]">
          <fieldset>
            <legend className="sr-only">When would you want to start?</legend>

            <div className="flex flex-col gap-[10px]">
              {timelines.map(({ id, label }) => (
                <OptionPill
                  key={id}
                  name="timeline"
                  value={id}
                  label={label}
                  checked={data.timeline === id}
                  onChange={set("timeline")}
                  onClick={onOptionClick("timeline")}
                />
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-[12px] block text-[16px] font-bold tracking-[-0.04em] text-black">
              Who decides on work for the store?
            </legend>

            <div className="max-bf-sm:grid-cols-1 grid grid-cols-2 gap-[10px]">
              {deciders.map(({ id, label }) => (
                <OptionPill
                  key={id}
                  name="decider"
                  value={id}
                  label={label}
                  checked={data.decider === id}
                  onChange={set("decider")}
                  onClick={onOptionClick("decider")}
                />
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 5 && (
        <div className="mt-[20px] flex flex-col gap-[16px]">
          <div>
            <label htmlFor="sr-name" className={labelClassName}>
              First name
              <RequiredMark />
            </label>

            <input
              ref={firstFieldRef}
              id="sr-name"
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
            <label htmlFor="sr-email" className={labelClassName}>
              Work email
              <RequiredMark />
            </label>

            <input
              id="sr-email"
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
            <label htmlFor="sr-website" className={labelClassName}>
              Store website
              <RequiredMark />
            </label>

            <input
              id="sr-website"
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
        {submitting ? "Saving…" : step === 5 ? "See available times" : "Next"}
        {!submitting && <ArrowUpRight size={18} strokeWidth={2.5} />}
      </button>

      {error && (
        <p className="mt-[12px] text-center text-[13px] font-medium text-[#D33]">
          {error}
        </p>
      )}

      <p className="text-text-body/70 mt-[14px] text-center text-[12px] tracking-[-0.02em]">
        {step === 5
          ? "We only use these to arrange and remind you about your call. No marketing emails."
          : "No sales spam. We only use your details to arrange your call."}
      </p>
    </form>
  );
};

export default StoreReviewQuoteForm;
