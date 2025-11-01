"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const BookBadge = () => {
  const getDynamicMonth = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const now = new Date();
    const currentMonth = now.getMonth(); // 0 = January, 11 = December
    return months[currentMonth]; // ✅ return current month, not next
  };

  const dynamicText = getDynamicMonth();

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
      className="inline-flex h-[4rem] cursor-pointer items-center justify-center gap-[1rem] rounded-[.8rem] bg-white/20 px-[2rem] py-[1rem] text-[1.4rem] leading-[2.2rem] font-medium text-white md:h-[4.4rem] md:min-w-[28.1rem] md:text-[1.6rem] md:leading-[2.4rem]"
    >
      {/* Pulsing dot */}
      <span className="relative">
        <span className="absolute top-1/2 left-1/2 inline-flex size-[1.8rem] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#FFE400] opacity-75"></span>
        <span className="relative inline-flex size-[1rem] rounded-full bg-[#FFE400]"></span>
      </span>
      Limited {dynamicText} slots available
    </button>
  );
};

export default BookBadge;
