"use client";

import Link from "next/link";
import Image from "next/image";
import HassanAvatar from "@/assets/icons/ui/hassan-avatar.png";
import { trackCta } from "@/lib/analytics/events";

// Reworked (O20, 21 Aug 2026): was a Cal.com "Book with Hassan" avatar booking button. Booking is
// removed everywhere, so this now leads to the enquiry flow (/contact) as a "Start a project" CTA. The
// visual is kept — the gradient pill, the arrow and the avatar (a friendly human face on the CTA) — only
// what it leads to changed. Default text is "Start a project"; callers can override.
const GradientButton = ({
  text = "Start a project",
  href = "/contact",
  ctaPosition = "gradient-cta",
}) => {
  return (
    <Link
      href={href}
      onClick={() => trackCta(text, ctaPosition)}
      className="gradient-button inline-flex cursor-pointer items-center justify-center"
    >
      <div className="text-span">
        <span className="relative z-[10]">{text}</span>
      </div>

      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative mr-[-4px] ml-[-2px]"
      >
        <path
          d="M0.0732422 0C1.45666 2.39049 4.0394 4 7 4C9.9606 4 12.5433 2.39049 13.9268 0H16V18H13.9268C12.5433 15.6095 9.9606 14 7 14C4.0394 14 1.45666 15.6095 0.0732422 18H0V0H0.0732422Z"
          fill="#FF37B3"
        />
      </svg>

      <div className="relative size-[4rem] rounded-full md:size-[5rem]">
        <div className="absolute top-0 right-[0rem] size-[.7rem] animate-pulse rounded-full bg-[#7EE972] outline-2 outline-[#25014A] md:right-[.4rem] md:size-[.9rem]" />

        <Image
          src={HassanAvatar}
          alt=""
          className=""
          width={99}
          height={99}
        />
      </div>
    </Link>
  );
};
export default GradientButton;
