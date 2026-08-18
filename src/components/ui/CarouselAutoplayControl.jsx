"use client";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { Pause, Play } from "lucide-react";

// Accessible pause/play control for autoplay carousels (WCAG 2.2.2 Pause,
// Stop, Hide). Rendered as a direct child of <Swiper> with slot="container-end"
// so it can read the parent Swiper via useSwiper(). It is ABSOLUTELY positioned
// in the carousel's bottom-right corner, so it takes no space in the layout and
// cannot shift or resize the carousel. It does not change any Swiper layout
// config (slidesPerView, breakpoints, spaceBetween, modules). Honours
// prefers-reduced-motion by starting paused. Reusable across every carousel.
// Visually hidden by default via the `sr-only-focusable` utility (globals.css):
// it stays in the accessibility tree and keyboard-focusable, and becomes visible
// on focus, so SC 2.2.2 (Pause, Stop, Hide) is still met without a visible chrome.
const CarouselAutoplayControl = ({ className = "" }) => {
  const swiper = useSwiper();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!swiper?.autoplay) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      swiper.autoplay.stop();
      setPaused(true);
    }
  }, [swiper]);

  const toggle = () => {
    if (!swiper?.autoplay) return;
    if (paused) {
      swiper.autoplay.start();
      setPaused(false);
    } else {
      swiper.autoplay.stop();
      setPaused(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={paused}
      aria-label={paused ? "Play automatic slideshow" : "Pause automatic slideshow"}
      className={`sr-only-focusable absolute right-[1rem] bottom-[1rem] z-[20] flex size-[3rem] items-center justify-center rounded-full border border-[#818181]/30 bg-white/90 text-[#312749] backdrop-blur-[2px] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#312749] ${className}`}
    >
      {paused ? (
        <Play className="size-[1.4rem]" aria-hidden="true" />
      ) : (
        <Pause className="size-[1.4rem]" aria-hidden="true" />
      )}
    </button>
  );
};

export default CarouselAutoplayControl;
