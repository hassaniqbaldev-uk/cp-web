"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import HassanAvatar from "@/assets/icons/ui/hassan-avatar.png";

// Floating WhatsApp widget (replaces the Crisp chat).
//  - Panel is "message the founder", not a faceless support bot.
//  - One tap per service; the message is prefilled and tagged with the page
//    it came from, so we know the context before replying.
//  - The free 15 min call stays one tap away for people who'd rather talk.
//  - Teaser bubble shows once per session, never on first paint.

// ---- Edit these -------------------------------------------------------------
const WHATSAPP_NUMBER = "441618202667"; // international format, no + or spaces
const OFFICE_HOURS = { start: 9, end: 17.5, days: [1, 2, 3, 4, 5] }; // UK time, Mon-Fri
const TEASER_DELAY_MS = 12000;
const TOPICS = [
  {
    id: "website",
    label: "A new website",
    message: "Hi Hassan, I'm looking for a new website.",
  },
  {
    id: "seo",
    label: "Getting found on Google",
    message: "Hi Hassan, I'd like help getting found on Google (SEO).",
  },
  {
    id: "ecommerce",
    label: "Growing my online shop",
    message: "Hi Hassan, I'd like help growing my online shop.",
  },
  {
    id: "care",
    label: "Support for my current site",
    message:
      "Hi Hassan, I need ongoing support or hosting for my current site.",
  },
];
// -----------------------------------------------------------------------------

const TEASER_KEY = "cp-wa-teaser-seen";

// Sends the event to Google Tag Manager
const track = (event, params = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

const isOfficeOpen = () => {
  try {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type)?.value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
      get("weekday"),
    );
    const time = Number(get("hour")) + Number(get("minute")) / 60;
    return (
      OFFICE_HOURS.days.includes(day) &&
      time >= OFFICE_HOURS.start &&
      time < OFFICE_HOURS.end
    );
  } catch {
    return true;
  }
};

const buildLink = (text) => {
  const page = window.location.pathname;
  const full =
    page && page !== "/"
      ? `${text}\n\n(From creativepixels.agency${page})`
      : text;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(full)}`;
};

const WhatsAppIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className="h-[1.4rem] w-[1.4rem]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const CloseIcon = ({ className = "h-[1.6rem] w-[1.6rem]" }) => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
);

const WhatsAppWidget = () => {
  const pathname = usePathname();
  // Panel is tied to the page it was opened on, so it closes on navigation
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const setOpen = (value) => setOpenOn(value ? pathname : null);
  const [teaser, setTeaser] = useState(false);
  const [online, setOnline] = useState(true);
  const [message, setMessage] = useState("");
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  // Office hours status, re-checked every minute
  useEffect(() => {
    const frame = requestAnimationFrame(() => setOnline(isOfficeOpen()));
    const timer = setInterval(() => setOnline(isOfficeOpen()), 60000);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, []);

  // Teaser bubble, once per session
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(TEASER_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;

    const timer = setTimeout(() => setTeaser(true), TEASER_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Escape to close, focus into the panel when it opens
  useEffect(() => {
    if (!open) return;

    panelRef.current?.querySelector("button, a, textarea")?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const dismissTeaser = () => {
    setTeaser(false);
    try {
      sessionStorage.setItem(TEASER_KEY, "1");
    } catch {
      /* storage blocked */
    }
  };

  const toggle = () => {
    dismissTeaser();
    if (!open) track("whatsapp_open");
    setOpen(!open);
  };

  const sendTo = (text, topic) => {
    track("whatsapp_click", { topic });
    window.open(buildLink(text), "_blank", "noopener,noreferrer");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const text = message.trim();
    if (!text) return;
    sendTo(text, "custom");
    setMessage("");
  };

  return (
    <div className="fixed right-[1.6rem] bottom-[1.6rem] z-[110] flex flex-col items-end gap-[1.2rem] md:right-[2.4rem] md:bottom-[2.4rem]">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            id="cp-wa-panel"
            role="dialog"
            aria-label="Chat with CreativePixels on WhatsApp"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            style={{ transformOrigin: "bottom right" }}
            className="w-[calc(100vw-3.2rem)] max-w-[36rem] overflow-hidden rounded-[2.4rem] bg-white shadow-[0px_24px_60px_0px_#07070733]"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-[#070707] px-[2rem] pt-[2rem] pb-[2.4rem] text-white">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-[8rem] -right-[6rem] h-[18rem] w-[18rem] rounded-full opacity-60 blur-[50px]"
                style={{
                  background: "linear-gradient(135deg, #FF37B3, #3078FF)",
                }}
              />
              <div className="relative flex items-start justify-between gap-[1.2rem]">
                <div className="flex items-center gap-[1.2rem]">
                  <div className="relative h-[4.8rem] w-[4.8rem] shrink-0">
                    <Image
                      src={HassanAvatar}
                      alt=""
                      width={48}
                      height={48}
                      className="h-full w-full rounded-full object-cover"
                    />
                    <span
                      className={`absolute right-[0.1rem] bottom-[0.1rem] h-[1.2rem] w-[1.2rem] rounded-full border-2 border-[#070707] ${
                        online ? "bg-[#25D366]" : "bg-[#9A96A3]"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-[1.7rem] leading-[2.2rem] font-semibold">
                      Hassan Iqbal
                    </p>
                    <p className="text-[1.3rem] leading-[1.8rem] text-white/60">
                      Founder, CreativePixels
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    buttonRef.current?.focus();
                  }}
                  aria-label="Close chat"
                  className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <CloseIcon />
                </button>
              </div>
              <p className="relative mt-[1.6rem] text-[1.3rem] leading-[1.8rem] text-white/70">
                {online
                  ? "Usually replies within the hour"
                  : "Out of hours. I'll reply from 9am UK time"}
              </p>
            </div>

            {/* Body */}
            <div className="bg-[#F6F5F8] px-[1.6rem] pt-[1.6rem] pb-[1.2rem]">
              <div className="max-w-[90%] rounded-[1.6rem] rounded-tl-[0.4rem] bg-white px-[1.6rem] py-[1.2rem] text-[1.5rem] leading-[2.2rem] text-[#070707] shadow-[0px_2px_8px_0px_#0707070d]">
                Hi there. What can we help you with? Pick one and I&rsquo;ll
                pick it up on WhatsApp.
              </div>

              <ul className="mt-[1.2rem] flex flex-col gap-[0.6rem]">
                {TOPICS.map((topic) => (
                  <li key={topic.id}>
                    <button
                      type="button"
                      onClick={() => sendTo(topic.message, topic.id)}
                      className="group flex w-full items-center justify-between rounded-[1.2rem] border border-[#E4E3E8] bg-white px-[1.6rem] py-[1.2rem] text-left text-[1.5rem] leading-[2rem] font-medium text-[#070707] transition-all duration-200 hover:border-[#070707] hover:pl-[2rem]"
                    >
                      {topic.label}
                      <span className="text-[#9A96A3] transition-colors group-hover:text-[#070707]">
                        <ArrowIcon />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <form
                onSubmit={onSubmit}
                className="mt-[1.2rem] flex items-end gap-[0.8rem]"
              >
                <label htmlFor="cp-wa-message" className="sr-only">
                  Or write your own message
                </label>
                <textarea
                  id="cp-wa-message"
                  rows={1}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) onSubmit(e);
                  }}
                  placeholder="Or write your own message"
                  className="max-h-[10rem] min-h-[4.4rem] flex-1 resize-none rounded-[1.2rem] border border-[#E4E3E8] bg-white px-[1.4rem] py-[1.1rem] text-[1.5rem] leading-[2rem] text-[#070707] outline-none placeholder:text-[#9A96A3] focus:border-[#070707]"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  aria-label="Send on WhatsApp"
                  className="flex h-[4.4rem] w-[4.4rem] shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity disabled:opacity-40"
                >
                  <WhatsAppIcon className="h-[2rem] w-[2rem]" />
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="border-t border-[#E4E3E8] bg-white px-[2rem] py-[1.4rem]">
              <Link
                href="/call"
                onClick={() =>
                  track("call_booking_click", { source: "whatsapp-widget" })
                }
                className="flex items-center justify-between text-[1.4rem] leading-[2rem] font-medium text-[#625C70] transition-colors hover:text-[#070707]"
              >
                Prefer to talk? Book a free 15 min call
                <ArrowIcon />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Teaser bubble */}
      <AnimatePresence>
        {teaser && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            style={{ transformOrigin: "bottom right" }}
            className="relative flex max-w-[28rem] items-start gap-[1rem] rounded-[1.8rem] rounded-br-[0.4rem] bg-white py-[1.2rem] pr-[3.6rem] pl-[1.2rem] shadow-[0px_12px_40px_0px_#07070726]"
          >
            <Image
              src={HassanAvatar}
              alt=""
              width={36}
              height={36}
              className="h-[3.6rem] w-[3.6rem] shrink-0 rounded-full object-cover"
            />
            <button
              type="button"
              onClick={toggle}
              className="text-left text-[1.4rem] leading-[2rem] text-[#070707]"
            >
              <span className="font-semibold">Got a project in mind?</span>{" "}
              Message me here, I reply myself.
            </button>
            <button
              type="button"
              onClick={dismissTeaser}
              aria-label="Dismiss"
              className="absolute top-[0.8rem] right-[0.8rem] flex h-[2.4rem] w-[2.4rem] items-center justify-center rounded-full text-[#9A96A3] hover:bg-[#F6F5F8] hover:text-[#070707]"
            >
              <CloseIcon className="h-[1.2rem] w-[1.2rem]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="cp-wa-panel"
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        className="group relative flex h-[6rem] w-[6rem] items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 md:h-[6.4rem] md:w-[6.4rem]"
      >
        {/* CP gradient ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full motion-safe:animate-[spin_6s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, #FF37B3, #3078FF, #EE8D00, #FF37B3)",
          }}
        />
        <span className="absolute inset-[0.3rem] rounded-full bg-[#070707]" />
        <span className="relative flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-full bg-[#25D366] text-white md:h-[5rem] md:w-[5rem]">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <CloseIcon className="h-[2rem] w-[2rem]" />
              </motion.span>
            ) : (
              <motion.span
                key="wa"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <WhatsAppIcon className="h-[2.6rem] w-[2.6rem]" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        {teaser && !open && (
          <span
            aria-hidden="true"
            className="absolute top-[0.2rem] right-[0.2rem] h-[1.4rem] w-[1.4rem] rounded-full border-2 border-white bg-[#FF37B3]"
          />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
