"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const ConsultationCtaButton = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <button
        data-cal-namespace="15min"
        data-cal-link="hassan-iqbal-mznzu9/15min"
        data-cal-config='{"layout":"month_view","theme":"dark"}'
        className="consultation-gradient-button inline-flex cursor-pointer items-center justify-center"
      >
        <span className="text-span text-[1.6rem] font-semibold tracking-normal text-white md:text-[2rem]">
          Get Free Consultation
        </span>

        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative mr-[-4px] ml-[-2px]"
        >
          <path
            d="M0.0732422 0C1.45666 2.39049 4.0394 4 7 4C9.9606 4 12.5433 2.39049 13.9268 0H16V18H13.9268C12.5433 15.6095 9.9606 14 7 14C4.0394 14 1.45666 15.6095 0.0732422 18H0V0H0.0732422Z"
            fill="#FF37B3"
          />
        </svg>

        <div className="relative size-[5rem] rounded-full">
          <div className="absolute top-0 right-[.4rem] size-[.9rem] animate-pulse rounded-full bg-[#7EE972] outline-2 outline-[#25014A]" />

          <img
            src="/images/consultation-cta-avatar.png"
            alt="Avatar Image"
            className="size-full object-cover object-center"
          />
        </div>
      </button>
    </>
  );
};
export default ConsultationCtaButton;
