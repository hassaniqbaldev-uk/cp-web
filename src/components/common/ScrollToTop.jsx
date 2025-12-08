"use client";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

const ScrollToTop = () => {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    // Small timeout ensures page is rendered before scrolling
    const timer = setTimeout(() => {
      lenis.scrollTo(0, { lerp: 0.1 });
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname, lenis]);

  return null; // this component has no visible UI
};

export default ScrollToTop;
