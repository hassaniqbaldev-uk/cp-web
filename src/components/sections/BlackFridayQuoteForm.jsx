"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import BookCallButton from "../ui/BookCallButton";
import BlackFridayBooking from "./BlackFridayBooking";
import HoneypotField from "../ui/HoneypotField";
import useSpamProtection from "@/utils/useSpamProtection";

const jobTypes = [
  { id: "wordpress", label: "Wordpress" },
  { id: "woocommerce", label: "WooCommerce" },
  { id: "shopify", label: "Shopify" },
  { id: "seo", label: "SEO" },
  { id: "print", label: "Print" },
  { id: "something-else", label: "Something else" },
];

const contactMethods = [
  { id: "email", label: "Email" },
  { id: "call", label: "Call back" },
];

const TOTAL_STEPS = 3;

const initialData = {
  jobType: "wordpress",
  website: "",
  details: "",
  engagement: "one-off",
  name: "",
  agency: "",
  email: "",
  phone: "",
  contact: "email",
  updates: false,
};

const META = {
  1: { label: "About 30 seconds", title: "Send us a small job" },
  2: { label: "About 20 seconds left", title: "Tell us about the job" },
  3: { label: "Last one", title: "Where should we send the quote?" },
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

// Accepts international formats; just needs enough digits to be a real number.
const isValidPhone = (value) => value.replace(/\D/g, "").length >= 7;

const fieldClassName =
  "w-full rounded-[10px] border border-black/15 px-[16px] py-[12px] text-[16px] tracking-[-0.02em] text-black placeholder:text-text-body/50 focus:border-black focus:outline-none";

const labelClassName =
  "mb-[8px] block text-[13px] font-medium tracking-[-0.02em] text-black";

// Red asterisk marking a required field.
const RequiredMark = () => (
  <span className="text-[#D33]" aria-hidden="true">
    {" "}
    *
  </span>
);

const OptionPill = ({ name, value, label, checked, onChange }) => (
  <label className="group has-[:checked]:bg-grey flex cursor-pointer items-center gap-[10px] rounded-full border border-black/15 px-[18px] py-[12px] transition-colors has-[:checked]:border-transparent max-sm:gap-[5px]">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />

    <span className="flex size-[14px] shrink-0 items-center justify-center rounded-full border border-black/30 group-has-[:checked]:border-black">
      <span className="size-[6px] scale-0 rounded-full bg-black transition-transform group-has-[:checked]:scale-100" />
    </span>

    <span className="text-[14px] tracking-[-0.02em] text-black max-sm:text-[12px]">
      {label}
    </span>
  </label>
);

const BlackFridayQuoteForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);

  const set = (key) => (event) => {
    setData((current) => ({ ...current, [key]: event.target.value }));
    // Clear a field's red border as soon as the user starts fixing it.
    setErrors((current) =>
      current[key] ? { ...current, [key]: false } : current,
    );
  };

  const next = () => {
    // Website is required; catch it on step 2 so it can't be missed on step 3.
    if (step === 2 && !data.website.trim()) {
      setErrors((current) => ({ ...current, website: true }));
      return;
    }

    setStep((current) => Math.min(current + 1, TOTAL_STEPS));
  };

  const back = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 1));
  };

  // Clear the thank-you screen and start a fresh blank form.
  const reset = () => {
    setData(initialData);
    setStep(1);
    setError("");
    setErrors({});
    setSubmitted(false);
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  // Per-field validation state: true = invalid (shows a red border).
  const [errors, setErrors] = useState({});

  const { honeypotProps, preload, getSpamFields } =
    useSpamProtection("black_friday");

  const submit = async () => {
    // Validation failures just turn the offending fields' borders red
    // (no message).
    const fieldErrors = {
      name: !data.name.trim(),
      email: !isValidEmail(data.email),
      phone: !isValidPhone(data.phone),
    };

    if (fieldErrors.name || fieldErrors.email || fieldErrors.phone) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/black-friday", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...(await getSpamFields()) }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        setError("Something went wrong. Please try again, or book a call.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again, or book a call.");
    } finally {
      setSubmitting(false);
    }
  };

  const cardClassName =
    "w-[540px] shrink-0 rounded-[20px] bg-white p-[30px] max-xl:w-full max-sm:p-[20px]";

  if (submitted) {
    return (
      <div className={cardClassName}>
        <div className="flex items-center gap-[12px]">
          <Image
            src="/images/home/hassan-avatar-img.png"
            alt="Hassan, Creative Pixels"
            width={44}
            height={44}
            className="size-[44px] rounded-full object-cover"
          />

          <div>
            <p className="text-[14px] font-semibold tracking-[-0.02em] text-black">
              Hassan
            </p>

            <p className="text-text-body/60 text-[12px] tracking-[-0.02em]">
              Usually replies in a few hours
            </p>
          </div>
        </div>

        <h2 className="mt-[25px] text-[24px] font-bold tracking-[-0.02em] text-black">
          Thanks {data.name || "there"}, you’re in.
        </h2>

        <p className="text-text-body mt-[10px] text-[14px] leading-[22px] tracking-[-0.02em]">
          Got your brief. A senior person will look at it and reply within a few
          hours from a real human, not an auto-responder.
        </p>

        <BlackFridayBooking name={data.name} email={data.email} />

        <button
          type="button"
          onClick={reset}
          className="mt-[12px] flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[16px] text-[14px] font-extrabold tracking-[-0.02em] text-white uppercase transition-opacity hover:opacity-90"
        >
          Add another query
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    );
  }

  return (
    <div className={cardClassName} onFocus={preload}>
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

      <h2 className="mt-[20px] text-[25px] leading-[36px] font-bold tracking-[-0.07em] text-black">
        {META[step].title}
      </h2>

      {step === 1 && (
        <>
          <p className="text-text-body mt-[6px] text-[12px] tracking-[-0.02em]">
            No commitment. What’s it for?
          </p>

          <fieldset className="mt-[30px]">
            <legend className="sr-only">What do you need help with?</legend>

            <div className="grid grid-cols-2 gap-[10px] max-sm:text-[14px]">
              {jobTypes.map(({ id, label }) => (
                <OptionPill
                  key={id}
                  name="job-type"
                  value={id}
                  label={label}
                  checked={data.jobType === id}
                  onChange={set("jobType")}
                />
              ))}
            </div>
          </fieldset>
        </>
      )}

      {step === 2 && (
        <div className="mt-[20px] flex flex-col gap-[20px]">
          <div>
            <label htmlFor="quote-website" className={labelClassName}>
              Website URL
              <RequiredMark />
            </label>

            <input
              id="quote-website"
              type="text"
              placeholder="yoursite.com"
              value={data.website}
              onChange={set("website")}
              className={`${fieldClassName} ${errors.website ? "border-[#D33]!" : ""}`}
            />
          </div>

          <div>
            <label htmlFor="quote-details" className={labelClassName}>
              What needs doing?
            </label>

            <textarea
              id="quote-details"
              rows={3}
              placeholder="e.g. Fix the checkout on a WooCommerce store, move a site to a new host…"
              value={data.details}
              onChange={set("details")}
              className={`${fieldClassName} resize-none`}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mt-[20px] flex flex-col gap-[20px]">
          <div className="grid grid-cols-2 gap-[12px]">
            <div>
              <label htmlFor="quote-name" className={labelClassName}>
                Your name
                <RequiredMark />
              </label>

              <input
                id="quote-name"
                type="text"
                autoComplete="name"
                placeholder="Sarah"
                value={data.name}
                onChange={set("name")}
                className={`${fieldClassName} ${errors.name ? "border-[#D33]!" : ""}`}
              />
            </div>

            <div>
              <label htmlFor="quote-agency" className={labelClassName}>
                Agency name
              </label>

              <input
                id="quote-agency"
                type="text"
                placeholder="Bright Media"
                value={data.agency}
                onChange={set("agency")}
                className={fieldClassName}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[12px]">
            <div>
              <label htmlFor="quote-email" className={labelClassName}>
                Work email
                <RequiredMark />
              </label>

              <input
                id="quote-email"
                type="email"
                autoComplete="email"
                placeholder="name@agency.co.uk"
                value={data.email}
                onChange={set("email")}
                className={`${fieldClassName} ${errors.email ? "border-[#D33]!" : ""}`}
              />
            </div>

            <div>
              <label htmlFor="quote-phone" className={labelClassName}>
                Phone
                <RequiredMark />
              </label>

              <input
                id="quote-phone"
                type="tel"
                autoComplete="tel"
                placeholder="07123 456789"
                value={data.phone}
                onChange={set("phone")}
                className={`${fieldClassName} ${errors.phone ? "border-[#D33]!" : ""}`}
              />
            </div>
          </div>

          <fieldset>
            <legend className={labelClassName}>Best way to reach you?</legend>

            <div className="grid grid-cols-2 gap-[12px]">
              {contactMethods.map(({ id, label }) => (
                <OptionPill
                  key={id}
                  name="contact"
                  value={id}
                  label={label}
                  checked={data.contact === id}
                  onChange={set("contact")}
                />
              ))}
            </div>
          </fieldset>
        </div>
      )}

      <HoneypotField {...honeypotProps} />

      <button
        type="button"
        onClick={step === TOTAL_STEPS ? submit : next}
        disabled={submitting}
        className="mt-[33px] flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase disabled:opacity-60"
      >
        {submitting
          ? "Sending…"
          : step === TOTAL_STEPS
            ? "Get my quote"
            : "Next"}
        {!submitting && <ArrowUpRight size={18} strokeWidth={2.5} />}
      </button>

      {error && (
        <p className="mt-[12px] text-center text-[13px] font-medium text-[#D33]">
          {error}
        </p>
      )}

      <p className="text-text-body mt-[14px] text-center text-[12px] tracking-[-0.02em]">
        Prefer to talk?{" "}
        <BookCallButton className="font-bold underline underline-offset-2 hover:text-black">
          Book a 15-min call
        </BookCallButton>
      </p>
    </div>
  );
};

export default BlackFridayQuoteForm;
