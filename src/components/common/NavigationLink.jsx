"use client";

import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOutTransition } from "@/utils/pageTransition";

const NavigationLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const router = useTransitionRouter();

  // const slideInOut = () => {
  //   // OLD VIEW slides out LEFT
  //   document.documentElement.animate(
  //     [{ transform: "translateX(0)" }, { transform: "translateX(-35%)" }],
  //     {
  //       duration: 1500,
  //       easing: "cubic-bezier(0.87, 0, 0.13, 1)",
  //       fill: "forwards",
  //       pseudoElement: "::view-transition-old(root)",
  //     },
  //   );
  //
  //   // NEW VIEW slides in from RIGHT
  //   document.documentElement.animate(
  //     [{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }],
  //     {
  //       duration: 1500,
  //       easing: "cubic-bezier(0.87, 0, 0.13, 1)",
  //       fill: "forwards",
  //       pseudoElement: "::view-transition-new(root)",
  //     },
  //   );
  // };

  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        router.push(href, {
          onTransitionReady: slideInOutTransition, // 🔥 GLOBAL ANIMATION
        });
      }}
      href={href}
      className={`inline-flex h-[4.6rem] min-w-[7.6rem] items-center justify-center rounded-[6rem] px-[1.6rem] py-[1.1rem] text-[1.6rem] leading-[2.4rem] font-medium transition-all duration-300 ${isActive ? "text-text-primary bg-white" : "navigation-link bg-white/15 text-white"} `}
    >
      {/* Gradient Layer */}
      <div className="gradient-layer" />

      {/* Text Layer */}
      {children}
    </a>
  );
};

export default NavigationLink;
