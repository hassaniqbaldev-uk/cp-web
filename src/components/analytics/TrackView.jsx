"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics/events";

// Fires a GA4 view event once when the page mounts. Used for page-level view
// events (case_study_view, and later pricing_view via IntersectionObserver in
// its own module). Renders nothing.
export default function TrackView({ event, params = {} }) {
  const key = JSON.stringify(params);
  useEffect(() => {
    track(event, params);
    // params is serialised into `key` so re-fires only on a real change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, key]);
  return null;
}
