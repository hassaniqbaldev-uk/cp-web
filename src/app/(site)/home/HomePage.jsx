"use client";
import CtaSection1 from "@/components/common/CtaSection1";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhatWeOfferSection from "@/components/sections/WhatWeOfferSection";
import CaseStudiesStickyGridSection from "@/components/case-studies/CaseStudiesStickyGridSection";
import { useEffect } from "react";
import Loader from "@/components/common/Loader";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useLenis } from "lenis/react";

const HomePage = ({ caseStudies }) => {
  const lenis = useLenis();
  const { isLoading, setIsLoading, hasSeenLoader, setHasSeenLoader } =
    useLoadingStore();

  useEffect(() => {
    // RUN LOADER ONLY IF:
    // - user never saw loader before (per session)
    // - AND it's a fresh visit or page refresh
    const isReload = performance.navigation.type === 1; // 1 = reload
    const isFreshEntry = document.referrer === ""; // direct entry

    if (!hasSeenLoader && (isReload || isFreshEntry)) {
      setIsLoading(true);
      setHasSeenLoader(true);
    }
  }, [hasSeenLoader, setIsLoading, setHasSeenLoader]);

  useEffect(() => {
    const html = document.documentElement;

    if (isLoading) {
      html.style.overflow = "hidden"; // lock scroll
      html.style.height = "100%"; // optional: prevents iOS overscroll
      lenis?.stop?.(); // ✅ optional chaining in case lenis not ready yet
    } else {
      html.style.overflow = "";
      html.style.height = "";
      lenis?.start?.();
    }

    // Cleanup (optional, but safe)
    return () => {
      html.style.overflow = "";
      html.style.height = "";
      lenis?.start?.();
    };
  }, [isLoading, lenis]);

  return (
    <>
      {/* Loader */}
      {isLoading && <Loader onHidden={() => setIsLoading(false)} />}

      <HeroSection />
      <AboutSection />
      <WhatWeOfferSection />
      <CaseStudiesStickyGridSection caseStudies={caseStudies} />
      <div className="mx-auto max-w-[120rem] px-[2rem] pb-[8rem] xl:px-[0rem]">
        <CtaSection1 />
      </div>
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
