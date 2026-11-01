"use client";

import { useEffect } from "react";
import {
  track,
  getLeadParams,
  getBookingSource,
  newEventId,
} from "@/utils/track";
import { BOOKING_VALUE, TRACKING_CURRENCY } from "@/config/tracking";

// Listens for successful bookings made through the Cal.com embed popups
// (header / menu / CTA "Book a call") and fires bf_booking_complete. The inline
// thank-you calendar reports its own completion via the API, so it isn't an
// embed booking and won't double-count here.
export default function BlackFridayCalTracking() {
  useEffect(() => {
    (async () => {
      try {
        const { getCalApi } = await import("@calcom/embed-react");
        const cal = await getCalApi({ namespace: "15min" });

        cal("on", {
          action: "bookingSuccessful",
          callback: () => {
            track("bf_booking_complete", {
              event_id: newEventId(),
              source: getBookingSource(),
              ...getLeadParams(),
              value: BOOKING_VALUE,
              currency: TRACKING_CURRENCY,
            });
          },
        });
      } catch {
        /* embed not available — ignore */
      }
    })();
  }, []);

  return null;
}
