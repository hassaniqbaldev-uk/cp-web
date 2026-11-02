"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  HelpCircle,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";

const TOTAL_STEPS = 5;

// Step 1 — store platform. Each option is tinted with its brand colour and
// shows a brand-coloured icon on a white circle (same treatment as planned for
// the Black Friday form). WooCommerce uses a coloured brand SVG; the rest use
// lucide glyphs tinted with `color`.
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

const META = {
  1: {
    label: "Takes about 30 seconds",
    title: "Which platform is your store on?",
  },
  2: { label: "Step 2", title: "Step 2" },
  3: { label: "Step 3", title: "Step 3" },
  4: { label: "Step 4", title: "Step 4" },
  5: { label: "Last one", title: "Step 5" },
};

const OptionPill = ({
  name,
  value,
  label,
  checked,
  onChange,
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
  const [platform, setPlatform] = useState("shopify");

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

      {step === 1 && (
        <fieldset className="mt-[20px]">
          <legend className="sr-only">Which platform is your store on?</legend>

          <div className="flex flex-col gap-[12px]">
            {platforms.map(({ id, label, icon, color, tint }) => (
              <OptionPill
                key={id}
                name="platform"
                value={id}
                label={label}
                icon={icon}
                color={color}
                tint={tint}
                checked={platform === id}
                onChange={(event) => setPlatform(event.target.value)}
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
        {step === TOTAL_STEPS ? "Get my free review" : "Next"}
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>

      <p className="text-text-body/70 mt-[14px] text-center text-[12px] tracking-[-0.02em]">
        No sales spam. We only use your details to arrange your call.
      </p>
    </form>
  );
};

export default StoreReviewQuoteForm;
