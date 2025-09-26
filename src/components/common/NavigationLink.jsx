"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`inline-flex h-[4.6rem] min-w-[7.6rem] items-center justify-center rounded-[6rem] px-[1.6rem] py-[1.1rem] text-[1.6rem] leading-[2.4rem] font-medium transition-all duration-300 ${isActive ? "text-text-primary bg-white" : "navigation-link bg-white/15 text-white"} `}
    >
      {/* Gradient Layer */}
      <div className="gradient-layer" />

      {/* Text Layer */}
      {children}
    </Link>
  );
};

export default NavigationLink;
