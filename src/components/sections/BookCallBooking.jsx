"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  CalendarPlus,
  Check,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { getLeadMetadata, getLeadTouches } from "@/utils/leadSource";
import { track, getLeadParams, newEventId } from "@/utils/track";
import { BOOKING_VALUE, TRACKING_CURRENCY } from "@/config/tracking";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
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

// The call runs 30 minutes (matches the hero promise).
const CALL_MINUTES = 30;

// Local calendar-date key ("YYYY-MM-DD"), matching how Cal groups slots for the
// requested timeZone.
const dayKey = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const startOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);
const isSameMonth = (a, b) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();

// "YYYYMMDDTHHMMSSZ" (UTC) for a Google Calendar template link.
const gcalStamp = (date) =>
  date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

// A "save to Google Calendar" link for the booked slot. Cal.com also emails a
// proper invite; this is just a one-tap convenience on the confirmation screen.
const googleCalendarUrl = (startIso) => {
  const start = new Date(startIso);
  const end = new Date(start.getTime() + CALL_MINUTES * 60 * 1000);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Your call with Creative Pixels",
    dates: `${gcalStamp(start)}/${gcalStamp(end)}`,
    details:
      "Your free 30-minute call with Hassan. The Google Meet link is in your confirmation email.",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

// The booking phase comes after the numbered form steps, so it shows its own
// short label (back control / status) rather than a "Step X of N" counter.
const PhaseHeader = ({ showBack, status, onBack }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-[12px]">
      {showBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back a step"
          className="flex size-[32px] shrink-0 items-center justify-center rounded-full border border-black/15 text-black transition-colors hover:bg-black hover:text-white"
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>
      )}

      <span className="text-dark-pink text-[16px] font-medium tracking-[-0.02em]">
        {status}
      </span>
    </div>
  </div>
);

// The booking phase (pick a time → booked) of the Book a Call form. Self-
// contained: it fetches availability and books against the shared /api/cal
// endpoints, using the attendee details and qualifying answers from the form.
const BookCallBooking = ({ name = "", email = "", metadata = {}, onBack }) => {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const tz = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/London",
    [],
  );

  const [month, setMonth] = useState(() => startOfMonth(new Date()));
  const [slots, setSlots] = useState({});
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [booking, setBooking] = useState(false);
  const [booked, setBooked] = useState(null);
  const [error, setError] = useState("");

  const timeFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: tz,
      }),
    [tz],
  );

  // Pull availability for the whole visible month (from today onward).
  const loadSlots = useCallback(async () => {
    setLoadingSlots(true);
    setError("");

    const first = startOfMonth(month);
    const rangeStart = first < today ? today : first;
    const rangeEnd = new Date(month.getFullYear(), month.getMonth() + 1, 1);

    try {
      const params = new URLSearchParams({
        start: dayKey(rangeStart),
        end: dayKey(rangeEnd),
        timeZone: tz,
      });

      const res = await fetch(`/api/cal/slots?${params.toString()}`);
      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.ok) {
        setSlots({});
        setError("Could not load available times. Please try again.");
        return;
      }

      setSlots(json.data || {});
    } catch {
      setSlots({});
      setError("Could not load available times. Please try again.");
    } finally {
      setLoadingSlots(false);
    }
  }, [month, today, tz]);

  useEffect(() => {
    // Fetch-on-change effect: loading availability when the month changes is a
    // valid external-sync use of setState.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadSlots();
  }, [loadSlots]);

  // Reaching the booking step counts as a booking view.
  useEffect(() => {
    track("bc_booking_view", { source: "hero_form" });
  }, []);

  // Earliest day with availability in the loaded month.
  const earliestOpenDay = useMemo(() => {
    const open = Object.keys(slots)
      .filter((k) => slots[k]?.length)
      .sort();
    return open[0] || "";
  }, [slots]);

  // The day whose times are shown: the user's pick if it still has slots,
  // otherwise fall back to the earliest open day.
  const activeDay =
    selectedDay && slots[selectedDay]?.length ? selectedDay : earliestOpenDay;

  const grid = useMemo(() => {
    const first = startOfMonth(month);
    const lead = (first.getDay() + 6) % 7; // 0 = Monday
    const daysInMonth = new Date(
      month.getFullYear(),
      month.getMonth() + 1,
      0,
    ).getDate();

    const cells = [];
    for (let i = 0; i < lead; i += 1) cells.push(null);
    for (let d = 1; d <= daysInMonth; d += 1) {
      cells.push(new Date(month.getFullYear(), month.getMonth(), d));
    }
    return cells;
  }, [month]);

  const canGoPrev = !isSameMonth(month, today);

  const goPrev = () => {
    if (!canGoPrev) return;
    setSelectedTime("");
    setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  };
  const goNext = () => {
    setSelectedTime("");
    setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));
  };

  const daySlots = activeDay ? slots[activeDay] || [] : [];

  const confirm = async () => {
    if (!selectedTime) return;

    setBooking(true);
    setError("");

    // Shared id for browser event + server CAPI (Schedule) de-duplication.
    const eventId = newEventId();
    const leadParams = getLeadParams();

    // Cal booking metadata: lead source + the qualifying answers, so the booked
    // call in Cal.com carries the store's revenue/budget context.
    const bookingMetadata = { ...getLeadMetadata(), ...metadata };

    try {
      const res = await fetch("/api/cal/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start: selectedTime,
          name,
          email,
          timeZone: tz,
          metadata: bookingMetadata,
          eventId,
          leadSource: leadParams,
          fbclid: getLeadTouches().last?.fbclid || "",
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.ok) {
        setError(json.error || "Could not complete the booking.");
        // If the slot was taken, refresh availability so they can repick.
        if (res.status === 409) {
          setSelectedTime("");
          loadSlots();
        }
        return;
      }

      setBooked({ start: selectedTime });
      track("bc_booking_complete", {
        event_id: eventId,
        source: "hero_form",
        ...leadParams,
        value: BOOKING_VALUE,
        currency: TRACKING_CURRENCY,
      });
    } catch {
      setError("Could not complete the booking. Please try again.");
    } finally {
      setBooking(false);
    }
  };

  // ── Booked confirmation ───────────────────────────────────────────────────
  if (booked) {
    const when = new Date(booked.start);
    const dateLabel = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      timeZone: tz,
    }).format(when);

    return (
      <div>
        <PhaseHeader showBack={false} status="All done" onBack={onBack} />

        <div className="mt-[22px] flex items-center gap-[12px]">
          <span className="max-bf-sm:size-[38px] flex size-[44px] shrink-0 items-center justify-center rounded-full bg-[#1FA463] text-white">
            <Check size={24} strokeWidth={3} />
          </span>

          <h2 className="max-bf-sm:text-[22px] text-[26px] font-bold tracking-[-0.04em] text-black">
            You’re booked in.
          </h2>
        </div>

        <p className="mt-[14px] text-[15px] leading-[23px] tracking-[-0.02em] text-black">
          {dateLabel} at {timeFormatter.format(when)}. We’ve emailed a
          confirmation with your Google Meet link.
        </p>

        <div className="max-bf-sm:p-[14px] mt-[20px] rounded-[12px] bg-[#F6FBF6] p-[18px]">
          <p className="text-[13px] font-bold tracking-[-0.02em] text-black uppercase">
            What happens next
          </p>

          <ul className="mt-[12px] flex flex-col gap-[10px]">
            {[
              "Hassan looks at your store before the call",
              "On the call, we go through what’s costing you sales",
              "You get fixed prices, and a written quote within 1 working day",
            ].map((item) => (
              <li key={item} className="flex items-start gap-[10px]">
                <Check
                  size={18}
                  strokeWidth={2.5}
                  className="text-[#1FA463] mt-[2px] shrink-0"
                />
                <span className="text-[14px] leading-[20px] tracking-[-0.02em] text-black">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={googleCalendarUrl(booked.start)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("bc_add_to_calendar")}
          className="mt-[20px] flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[15px] font-extrabold tracking-[-0.02em] text-white uppercase transition-opacity hover:opacity-90"
        >
          <CalendarPlus size={18} strokeWidth={2.5} />
          Add to my calendar
        </a>
      </div>
    );
  }

  // ── Pick a time ───────────────────────────────────────────────────────────
  return (
    <div>
      <PhaseHeader showBack status="Pick a time" onBack={onBack} />

      <h2 className="max-bf-sm:text-[22px] max-bf-sm:leading-[28px] mt-[20px] text-[25px] leading-[32px] font-bold tracking-[-0.04em] text-black">
        Pick a time for your call
      </h2>

      <p className="text-text-body mt-[6px] text-[13px] tracking-[-0.02em]">
        A free 30-minute call with Hassan.
      </p>

      <div className="mt-[18px] flex gap-[16px] max-bf-sm:flex-col">
        {/* Calendar (left) */}
        <div className="w-[240px] shrink-0 self-start rounded-[12px] border border-black/10 p-[12px] max-bf-sm:w-full">
          {/* Month header */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Previous month"
              className="flex size-[28px] items-center justify-center rounded-full border border-black/15 text-black transition-colors hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
            >
              <ChevronLeft size={15} strokeWidth={2.5} />
            </button>

            <span className="text-[14px] font-bold tracking-[-0.02em] text-black">
              {MONTHS[month.getMonth()]} {month.getFullYear()}
            </span>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next month"
              className="flex size-[28px] items-center justify-center rounded-full border border-black/15 text-black transition-colors hover:bg-black hover:text-white"
            >
              <ChevronRight size={15} strokeWidth={2.5} />
            </button>
          </div>

          {/* Weekday labels */}
          <div className="mt-[10px] grid grid-cols-7 gap-[3px]">
            {WEEKDAYS.map((d) => (
              <span
                key={d}
                className="text-text-body/60 py-[2px] text-center text-[10px] font-medium tracking-[-0.02em]"
              >
                {d}
              </span>
            ))}
          </div>

          {/* Day grid */}
          <div className="mt-[3px] grid grid-cols-7 gap-[3px]">
            {grid.map((date, i) => {
              if (!date) return <span key={`blank-${i}`} />;

              const key = dayKey(date);
              const isPast = date < today;
              const hasSlots = (slots[key]?.length || 0) > 0;
              const isOpen = hasSlots && !isPast;
              const isSelected = key === activeDay;

              return (
                <button
                  key={key}
                  type="button"
                  disabled={!isOpen}
                  onClick={() => {
                    setSelectedDay(key);
                    setSelectedTime("");
                  }}
                  className={`flex aspect-square items-center justify-center rounded-[6px] text-[12px] font-medium tracking-[-0.02em] transition-colors ${
                    isSelected
                      ? "bg-dark-pink text-white"
                      : isOpen
                        ? "hover:bg-dark-pink/10 text-black"
                        : "text-black/25"
                  } disabled:cursor-not-allowed`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time slots (right, scrollable) */}
        <div className="flex min-w-0 flex-1 flex-col">
          {loadingSlots ? (
            <div className="text-text-body/60 flex flex-1 items-center justify-center gap-[8px] py-[20px] text-[13px]">
              <Loader2 size={16} className="animate-spin" />
              Loading times…
            </div>
          ) : daySlots.length ? (
            <>
              <p className="text-text-body/70 mb-[8px] text-[12px] tracking-[-0.02em]">
                Times in your timezone ({tz.replace(/_/g, " ")})
              </p>
              <div className="grid max-h-[250px] auto-rows-max grid-cols-[repeat(auto-fill,minmax(88px,1fr))] gap-[8px] overflow-y-auto pr-[4px] max-bf-sm:max-h-[200px]">
                {daySlots.map((slot) => {
                  const isSelected = slot.start === selectedTime;
                  return (
                    <button
                      key={slot.start}
                      type="button"
                      onClick={() => {
                        setSelectedTime(slot.start);
                        track("bc_slot_selected");
                      }}
                      className={`rounded-[8px] border py-[10px] text-center text-[13px] font-semibold tracking-[-0.02em] transition-colors ${
                        isSelected
                          ? "border-dark-pink bg-dark-pink text-white"
                          : "border-black/15 text-black hover:border-black"
                      }`}
                    >
                      {timeFormatter.format(new Date(slot.start))}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <p className="text-text-body/70 flex flex-1 items-center justify-center py-[12px] text-center text-[13px] tracking-[-0.02em]">
              No times left this month — try the next one.
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={confirm}
        disabled={!selectedTime || booking}
        className="mt-[18px] flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase disabled:opacity-40"
      >
        {booking ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Booking…
          </>
        ) : (
          "Confirm my call"
        )}
      </button>

      {error && (
        <p className="mt-[12px] text-center text-[13px] font-medium text-[#D33]">
          {error}
        </p>
      )}
    </div>
  );
};

export default BookCallBooking;
