"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import RightArrowIcon from "@/assets/icons/right-arrow-icon.svg";

const CommonBtn1 = () => {
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
    <button
      data-cal-namespace="15min"
      data-cal-link="hassan-iqbal-mznzu9/15min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      className="common-btn-1-parent inline-flex cursor-pointer items-center"
    >
      <div className={`common-btn-1 overflow-hidden whitespace-nowrap`}>
        {/* Gradient Layer */}
        <div className="gradient-layer" />

        {/* Fill Layer (background animation) */}
        <div className="fill-layer" />

        {/* Text Layer */}
        <span className="relative z-10">Book a Call</span>
      </div>

      <i className="relative z-[0] mx-[-.3rem]">
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.475586 0C1.85901 2.39049 4.44175 4 7.40234 4C10.3629 4 12.9457 2.39049 14.3291 0H16.4023V18H14.3291C12.9457 15.6095 10.3629 14 7.40234 14C4.44175 14 1.85901 15.6095 0.475586 18H0.402344V0H0.475586Z"
            fill="#FF37B3"
          />
        </svg>
      </i>

      <div className={`common-btn-arrow-1 overflow-hidden`}>
        {/* Gradient Layer */}
        <div className="gradient-layer" />

        {/* Fill Layer (background animation) */}
        <div className="fill-layer" />

        <i className="relative z-10">
          <RightArrowIcon className="fill-white" />
        </i>
      </div>
    </button>
  );
};

export default CommonBtn1;
