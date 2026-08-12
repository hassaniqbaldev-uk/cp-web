"use client";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { Pause, Play } from "lucide-react";

// Accessible pause/play control for autoplay carousels (WCAG 2.2.2 Pause,
// Stop, Hide). Rendered as a direct child of <Swiper> with slot="container-end"
// so it sits below the slides in normal flow (no overlap, no clipping) and can
// read the parent Swiper instance via useSwiper(). Also honours
// prefers-reduced-motion by starting paused. Reusable across every autoplay
// carousel and intended to carry into the consolidated slider in Step 3.
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
      className={`mx-auto z-[20] mt-[.5rem] mb-[1rem] flex size-[3.6rem] items-center justify-center rounded-full border border-[#818181]/30 bg-white text-[#312749] transition-colors hover:bg-[#F1F1F3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#312749] ${className}`}
    >
      {paused ? (
        <Play className="size-[1.6rem]" aria-hidden="true" />
      ) : (
        <Pause className="size-[1.6rem]" aria-hidden="true" />
      )}
    </button>
  );
};

export default CarouselAutoplayControl;
