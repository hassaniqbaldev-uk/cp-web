// Loader.jsx
"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import Logo from "@/assets/logo/Logo";

const Loader = ({ onHidden }) => {
  const wrapperRef = useRef(null);
  const [mounted, setMounted] = useState(true);

  const handleLogoComplete = () => {
    if (!wrapperRef.current) return;
    gsap.to(wrapperRef.current, {
      autoAlpha: 0, // opacity + visibility
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        setMounted(false);
        onHidden?.();
      },
    });
  };

  if (!mounted) return null;

  return (
    <div
      ref={wrapperRef}
      className="hero-sec fixed inset-0 z-[1000] flex items-center justify-center"
    >
      <Logo onComplete={handleLogoComplete} />
    </div>
  );
};

export default Loader;
