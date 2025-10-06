"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CallPage = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#ff37b3" },
        },
        hideEventTypeDetails: true,
        layout: "column_view",
      });
    })();
  }, []);

  return (
    <div className="w-full pt-[11rem]">
      <Cal
        namespace="15min"
        calLink="hassan-iqbal-mznzu9/15min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "column_view" }}
      />
    </div>
  );
};

export default CallPage;
