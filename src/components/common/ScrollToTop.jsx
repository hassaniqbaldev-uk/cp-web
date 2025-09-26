// components/ScrollToTop.js
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Get the current URL hash
    const hash = window.location.hash;

    if (hash) {
      // There's an anchor link - wait for the page to load and scroll to the element
      const elementId = hash.replace("#", "");

      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      // Small delay to ensure the page content is loaded
      setTimeout(scrollToElement, 100);
    } else {
      // No anchor link - scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
