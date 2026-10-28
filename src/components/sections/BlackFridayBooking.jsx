"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

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

const BlackFridayBooking = ({ name = "", email = "" }) => {
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

  // Earliest day with availability in the loaded month.
  const earliestOpenDay = useMemo(() => {
    const open = Object.keys(slots)
      .filter((k) => slots[k]?.length)
      .sort();
    return open[0] || "";
  }, [slots]);

  // The day whose times are shown: the user's pick if it still has slots,
  // otherwise fall back to the earliest open day (no setState-in-effect).
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

    try {
      const res = await fetch("/api/cal/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start: selectedTime,
          name,
          email,
          timeZone: tz,
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
    } catch {
      setError("Could not complete the booking. Please try again.");
    } finally {
      setBooking(false);
    }
  };

  if (booked) {
    const when = new Date(booked.start);
    const dateLabel = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      timeZone: tz,
    }).format(when);

    return (
      <div className="mt-[25px] rounded-[12px] border border-black/10 bg-[#F6FBF6] p-[20px]">
        <div className="flex items-center gap-[10px]">
          <span className="flex size-[28px] shrink-0 items-center justify-center rounded-full bg-[#1FA463] text-white">
            <Check size={16} strokeWidth={3} />
          </span>
          <p className="text-[15px] font-bold tracking-[-0.02em] text-black">
            Your call is booked
          </p>
        </div>

        <p className="mt-[12px] text-[14px] leading-[22px] tracking-[-0.02em] text-black">
          {dateLabel} at {timeFormatter.format(when)}. We’ve emailed you a
          confirmation with the Google Meet link — it’s in your calendar too.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-[25px]">
      <h3 className="text-[16px] font-bold tracking-[-0.02em] text-black">
        Want to talk it through? Grab a 15-min slot.
      </h3>

      <div className="mt-[14px] flex gap-[16px] max-sm:flex-col">
        {/* Calendar (left) */}
        <div className="w-[260px] shrink-0 self-start rounded-[12px] border border-black/10 p-[12px] max-sm:w-full">
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
              <div className="grid max-h-[250px] auto-rows-max grid-cols-2 gap-[8px] overflow-y-auto pr-[4px] max-sm:max-h-[180px] max-sm:grid-cols-3">
                {daySlots.map((slot) => {
                  const isSelected = slot.start === selectedTime;
                  return (
                    <button
                      key={slot.start}
                      type="button"
                      onClick={() => setSelectedTime(slot.start)}
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
        className="mt-[18px] flex w-full items-center justify-center gap-[10px] rounded-full bg-black py-[15px] text-[15px] font-extrabold tracking-[-0.02em] text-white uppercase disabled:opacity-40"
      >
        {booking ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Booking…
          </>
        ) : (
          "Confirm booking"
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

export default BlackFridayBooking;
