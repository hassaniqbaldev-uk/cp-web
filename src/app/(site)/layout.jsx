"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopBtn from "@/components/common/BackToTopBtn";
import StickyHeader from "@/components/layout/StickyHeader";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import ScrollToTop from "@/components/common/ScrollToTop";
import Loader from "@/components/common/Loader";
import { useLoadingStore } from "@/store/useLoadingStore";
import Flip from "gsap/Flip";

// Register the plugin globally
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, Flip);

export default function SiteLayout({ children }) {
  const lenisRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const { isLoading, setIsLoading } = useLoadingStore();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      function update(time) {
        lenisRef.current?.lenis?.raf(time * 1000);
      }
      gsap.ticker.add(update);
      return () => gsap.ticker.remove(update);
    }
  }, [isMobile]);

  return (
    <html lang="en">
      <body className={isLoading ? "overflow-hidden" : ""}>
        {/* Loader */}
        {isLoading && <Loader onHidden={() => setIsLoading(false)} />}

        {/* Main content with fade-in effect */}
        <div>
          <ScrollToTop />
          <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
          <Header />
          <StickyHeader />
          {children}
          <Footer />
          <BackToTopBtn />
        </div>
      </body>
    </html>
  );
}
