"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Google Consent Mode v2 banner. The DENIED-by-default state and the re-grant of a
// stored 'granted' choice are set in the beforeInteractive script in layout.jsx, so
// consent is correct BEFORE GTM loads (including on repeat visits). This component only
// handles the visible choice: show the banner when there is no stored decision, and
// push a consent 'update' on Accept / Reject.
//
// Storage key `cp-consent` holds "granted" | "denied". Repeat visits with a stored value
// do NOT show the banner. The footer "Cookie preferences" control dispatches
// `cp:open-consent` to reopen it so anyone can change their mind.
const STORAGE_KEY = "cp-consent";

const GRANTED = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
};
const DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
};

const updateConsent = (state) => {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", state);
  }
};

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored !== "granted" && stored !== "denied") setVisible(true);

    const open = () => setVisible(true);
    window.addEventListener("cp:open-consent", open);
    return () => window.removeEventListener("cp:open-consent", open);
  }, []);

  const decide = (granted) => {
    updateConsent(granted ? GRANTED : DENIED);
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {
      /* storage blocked — consent still applied for this session */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[120] px-[1.5rem] pb-[1.5rem] md:px-[2rem] md:pb-[2rem]"
    >
      <div className="mx-auto flex w-full max-w-[120rem] flex-col gap-[1.6rem] rounded-[2rem] border border-[#E4E3E8] bg-white p-[2rem] shadow-[0px_12px_40px_0px_#00000022] md:flex-row md:items-center md:justify-between md:gap-[3rem] md:p-[2.5rem]">
        <p className="text-[1.4rem] leading-[2.2rem] font-normal tracking-normal text-[#625C70] md:text-[1.5rem] md:leading-[2.4rem]">
          We use cookies to understand how the site is used and to improve it.
          You can accept or reject non-essential cookies. See our{" "}
          <Link
            href="/legal/cookies-policy"
            className="font-semibold text-[#3078FF] underline underline-offset-2"
          >
            cookie policy
          </Link>
          .
        </p>

        <div className="flex shrink-0 items-center gap-[1rem] md:gap-[1.4rem]">
          <button
            type="button"
            onClick={() => decide(false)}
            className="inline-flex h-[4.4rem] cursor-pointer items-center justify-center rounded-[7rem] border border-[#D6D6D6] bg-white px-[2.4rem] text-[1.4rem] font-semibold tracking-normal text-[#312749] transition-colors duration-200 hover:border-[#312749] md:text-[1.6rem]"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="inline-flex h-[4.4rem] cursor-pointer items-center justify-center rounded-[7rem] bg-[#FF37B3] px-[2.8rem] text-[1.4rem] font-semibold tracking-normal text-white transition-opacity duration-200 hover:opacity-90 md:text-[1.6rem]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
