"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const TestBtn = () => {
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
      className="cursor-pointer rounded bg-amber-400 px-4 py-2"
    >
      Click me
    </button>
  );
};

export default TestBtn;
