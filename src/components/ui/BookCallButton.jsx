"use client";

import { useEffect, useRef } from "react";
import { getLeadMetadata } from "@/utils/leadSource";
import { track, setBookingSource } from "@/utils/track";

const BASE_CONFIG = { layout: "month_view", theme: "dark" };

const onBlackFridayPage = () =>
  typeof window !== "undefined" &&
  window.location.pathname.startsWith("/black-friday");

export default function BookCallButton({
  className = "",
  children,
  source = "hero",
  onClick,
  ...props
}) {
  const btnRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { getCalApi } = await import("@calcom/embed-react");
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

  // Attach lead-source metadata so popup bookings show their source in Cal.com
  // (only keys that actually have a value; no-op off the campaign page). Cal
  // reads data-cal-config from the DOM at click time, so setting it via a ref
  // after mount is enough.
  useEffect(() => {
    const meta = Object.fromEntries(
      Object.entries(getLeadMetadata()).filter(([, value]) => value),
    );
    if (Object.keys(meta).length && btnRef.current) {
      btnRef.current.setAttribute(
        "data-cal-config",
        JSON.stringify({ ...BASE_CONFIG, metadata: meta }),
      );
    }
  }, []);

  // Opening the Cal popup counts as a booking view (campaign page only).
  const handleClick = (event) => {
    if (onBlackFridayPage()) {
      setBookingSource(source);
      track("bf_booking_view", { source });
    }
    onClick?.(event);
  };

  return (
    <button
      ref={btnRef}
      type="button"
      data-cal-namespace="15min"
      data-cal-link="hassan-iqbal-mznzu9/15min"
      data-cal-config={JSON.stringify(BASE_CONFIG)}
      className={`inline-flex cursor-pointer items-center justify-center ${className}`}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
