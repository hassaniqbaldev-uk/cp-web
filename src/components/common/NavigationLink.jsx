"use client";

import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOutTransition } from "@/utils/pageTransition";
import { cn } from "@/lib/utils";

const NavigationLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const router = useTransitionRouter();

  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        router.push(href, {
          onTransitionReady: slideInOutTransition, // 🔥 GLOBAL ANIMATION
        });
      }}
      href={href}
      className={cn(
        "inline-flex h-[4.6rem] items-center justify-center rounded-[6rem] px-[1.6rem] py-[1.1rem] text-[1.6rem] leading-[2.4rem] font-medium transition-all duration-300",
        isActive
          ? "text-text-primary bg-white"
          : "navigation-link bg-white/15 text-white",
      )}
    >
      {/* Gradient Layer */}
      <div className="gradient-layer" />

      {/* Text Layer */}
      {children}
    </a>
  );
};

export default NavigationLink;
