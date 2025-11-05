"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopBtn from "@/components/common/BackToTopBtn";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollToTop from "@/components/common/ScrollToTop";
import Loader from "@/components/common/Loader";
import { useLoadingStore } from "@/store/useLoadingStore";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, DrawSVGPlugin);

export default function SiteLayout({ children }) {
  const { isLoading, setIsLoading } = useLoadingStore();
  const lenisRef = useRef();
  const lenis = useLenis();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

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
        <Header />
        {children}
        <Footer />
        <div className="hidden md:block">
          <BackToTopBtn />
        </div>
      </div>
    </>
  );
}
