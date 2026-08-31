"use client";
import WaveHandIcon from "@/assets/icons/ui/wave-hand-icon.svg";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import CtaBgStroke from "@/components/decorative-elements/CtaBgStroke";
import CtaBg from "@/assets/images/backgrounds/sticky-cta-bg.webp";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Persistent conversion CTA — fills the "CTA desert" on long pages, on mobile and desktop.
// Behaviour, to respect the constraints:
//  - appears only AFTER the hero has scrolled away (the hero has its own CTA), so it never
//    covers the first screen;
//  - hides when the footer is in view, so it never blocks the closing CTA / contact form;
//  - yields to the cookie-consent banner (both are bottom-anchored) so the two never clash;
//  - is OFF on /contact and /audit — those ARE the destination, a sticky "Start a project"
//    there is noise.
const HERO_OFFSET = 600; // show only once the first screen has scrolled past
const EXCLUDED = ["/contact", "/audit"];

const consentUndecided = () => {
  try {
    const v = localStorage.getItem("cp-consent");
    return v !== "granted" && v !== "denied";
  } catch {
    return false; // storage blocked → don't suppress the CTA
  }
};

const StickyCta = () => {
  const pathname = usePathname();
  const excluded = EXCLUDED.some(
    (p) => pathname === p || pathname?.startsWith(`${p}/`),
  );

  const [scrolledPast, setScrolledPast] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const [consentOpen, setConsentOpen] = useState(false);

  useEffect(() => {
    if (excluded) return;

    setConsentOpen(consentUndecided());
    const onConsentOpen = () => setConsentOpen(true);
    const onConsentDecided = () => setConsentOpen(false);
    window.addEventListener("cp:open-consent", onConsentOpen);
    window.addEventListener("cp:consent-decided", onConsentDecided);

    const onScroll = () => setScrolledPast(window.scrollY > HERO_OFFSET);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const footer = document.getElementById("site-footer");
    let observer;
    if (footer) {
      observer = new IntersectionObserver(
        ([entry]) => setFooterInView(entry.isIntersecting),
        { threshold: 0.1 },
      );
      observer.observe(footer);
    }

    return () => {
      window.removeEventListener("cp:open-consent", onConsentOpen);
      window.removeEventListener("cp:consent-decided", onConsentDecided);
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [excluded, pathname]);

  if (excluded) return null;

  const hidden = !scrolledPast || footerInView || consentOpen;

  return (
    <div
      aria-hidden={hidden}
      className="pointer-events-none fixed bottom-[0rem] left-0 z-[100] w-full xl:bottom-[1.5rem]"
    >
      <div
        className={`pointer-events-auto mx-auto max-w-[120rem] overflow-hidden rounded-[0rem] px-[1.6rem] py-[1rem] transition-transform duration-300 ease-out md:px-[3rem] xl:rounded-[20rem] ${hidden ? "translate-y-[120%]" : "translate-y-0"}`}
      >
        {/*Background Image*/}
        <Image
          src={CtaBg}
          alt=""
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute top-1/2 right-[-2rem] z-[2] -translate-y-1/2 select-none">
          <CtaBgStroke />
        </div>

        <div className="relative z-[10] container">
          <div className="flex items-center justify-between gap-[1.2rem] md:justify-center md:gap-[4rem]">
            <div className="flex items-center gap-[2rem]">
              <i className="hidden min-w-max xl:block">
                <Image
                  src={WaveHandIcon}
                  alt=""
                  width={58}
                  height={58}
                  unoptimized
                />
              </i>

              {/* Full line on desktop; a short prompt below that keeps the bar to one compact row
                  (so it never grows tall enough to obscure content on mobile or tablet). */}
              <h4 className="hidden text-left text-[3rem] leading-[4.4rem] font-bold tracking-[-0.02em] text-white lg:block">
                Let&rsquo;s design, build, and grow your next big project.
              </h4>

              <span className="text-[1.5rem] leading-[2rem] font-bold tracking-[-0.02em] text-white lg:hidden">
                Ready to start your project?
              </span>
            </div>

            <div className="min-w-max">
              <PrimaryButton
                text="Start a project"
                textColor="#FFFFFF"
                bGcolor="#FF37B3"
                href="/contact"
                ctaPosition="sticky-cta"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCta;
