"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopBtn from "@/components/common/BackToTopBtn";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollToTop from "@/components/common/ScrollToTop";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { ViewTransitions } from "next-view-transitions";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, DrawSVGPlugin);

export default function SiteLayout({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <div>
      <ReactLenis
        root
        ref={lenisRef}
        options={{
          lerp: 0.06, // slightly higher = smoother easing (0.05–0.1 sweet spot)
          duration: 1.5, // length of the easing (in seconds)
          smoothWheel: true, // smooths mouse wheel input
          smoothTouch: true, // enables touch inertia (MUST for mobile)
          touchMultiplier: 2, // scroll distance multiplier for touch
          wheelMultiplier: 1, // normal sensitivity for desktop
          gestureOrientation: "vertical", // vertical swipe orientation
          normalizeWheel: true, // ensures even scroll speed across devices
          syncTouch: true, // smooths touch scroll updates to Lenis’ internal state
          autoRaf: false, // we let GSAP ticker drive it (good for ScrollTrigger)
        }}
      />

      <ScrollToTop />
      <ViewTransitions>
        <Header />
        <div>{children}</div>
        <Footer />
      </ViewTransitions>
      <div className="hidden md:block">
        <BackToTopBtn />
      </div>
    </div>
  );
}
