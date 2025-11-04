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
import Flip from "gsap/Flip";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

// Register the plugin globally
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, DrawSVGPlugin, Flip);

export default function SiteLayout({ children }) {
  const { isLoading, setIsLoading } = useLoadingStore();
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Loader */}
        {isLoading && <Loader onHidden={() => setIsLoading(false)} />}

        <div>
          <ReactLenis
            root
            options={{
              lerp: 0.06, // Smooth interpolation (0 = instant, 1 = no movement)
              duration: 1.6, // Optional: sets fixed scroll duration (in seconds)
              smoothTouch: true, // 👈 enables smooth scroll for touch devices
              touchMultiplier: 1.5, // 👈 controls scroll sensitivity on touch (higher = faster)
              gestureOrientation: "vertical", // ensures proper vertical scroll gestures
              smoothWheel: true, // 👈 ensures smooth scroll for mouse wheel too
              autoRaf: false, // we let GSAP’s ticker handle the raf
            }}
            ref={lenisRef}
          />
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
          <div className="hidden md:block">
            <BackToTopBtn />
          </div>
        </div>
      </body>
    </html>
  );
}
