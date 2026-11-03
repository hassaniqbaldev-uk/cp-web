"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronLeft } from "lucide-react";

const TOTAL_STEPS = 5;

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

const META = {
  1: {
    label: "About 20 seconds left",
    title: "Roughly how much does your store sell a month?",
    subtitle: "A rough guess is fine. It just helps us prepare.",
  },
  2: { label: "Step 2", title: "Step 2" },
  3: { label: "Step 3", title: "Step 3" },
  4: { label: "Step 4", title: "Step 4" },
  5: { label: "Last one", title: "Step 5" },
};

const OptionPill = ({ name, value, label, checked, onChange }) => (
  <label className="group flex cursor-pointer items-center gap-[12px] rounded-full border border-transparent bg-[#F4F4F5] px-[16px] py-[13px] transition-colors has-[:checked]:bg-white has-[:checked]:ring-1 has-[:checked]:ring-black/15">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
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
  const [revenue, setRevenue] = useState("under-5k");

  const next = () => setStep((current) => Math.min(current + 1, TOTAL_STEPS));
  const back = () => setStep((current) => Math.max(current - 1, 1));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step < TOTAL_STEPS) next();
    // TODO: submit on the final step once steps 2–5 + backend are defined.
  };

  return (
    <form
      className="max-bf-xl:w-full max-bf-sm:p-[20px] w-[500px] shrink-0 scroll-mt-[120px] rounded-[20px] bg-white p-[30px]"
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
                checked={revenue === id}
                onChange={(event) => setRevenue(event.target.value)}
              />
            ))}
          </div>
        </fieldset>
      )}

      {step > 1 && (
        <div className="mt-[20px] rounded-[12px] border border-dashed border-black/15 px-[20px] py-[40px] text-center">
          <p className="text-text-body/70 text-[14px] tracking-[-0.02em]">
            Step {step} content coming soon.
          </p>
        </div>
      )}

      <button
        type="submit"
        className="mt-[30px] flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase transition-opacity hover:opacity-90"
      >
        {step === TOTAL_STEPS ? "Book my free call" : "Next"}
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>

      <p className="text-text-body/70 mt-[14px] text-center text-[12px] tracking-[-0.02em]">
        No sales spam. We only use your details to arrange your call.
      </p>
    </form>
  );
};

export default BookCallQuoteForm;
