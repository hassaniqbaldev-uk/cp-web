"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const BookCtaButton = () => {
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
        className="book-gradient-button inline-flex cursor-pointer items-center justify-center"
      >
        <span className="text-span">Book a Call</span>

        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative mr-[-2.5px] ml-[-2px]"
        >
          <path
            d="M0.0732422 0C1.45666 2.39049 4.0394 4 7 4C9.9606 4 12.5433 2.39049 13.9268 0H16V18H13.9268C12.5433 15.6095 9.9606 14 7 14C4.0394 14 1.45666 15.6095 0.0732422 18H0V0H0.0732422Z"
            fill="#FF37B3"
          />
        </svg>

        <i className="arrow-icon">
          <img src="/assets/icons/white-arrow.svg" alt="Icon" />
        </i>
      </button>
    </>
  );
};
export default BookCtaButton;
