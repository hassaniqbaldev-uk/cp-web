"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    const cursor = cursorRef.current;

    // Move cursor globally
    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 45,
        y: e.clientY - 45,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] hidden size-[9rem] items-center justify-center rounded-full bg-black/50 p-[1rem] opacity-0 xl:flex"
    >
      <div className="gradient-layer" />
      <span
        ref={textRef}
        id="cursor-text"
        className="cursor-text text-center text-[1.4rem] leading-tight font-medium text-white"
      >
        {/* Default text */}
        View Case
        <br />
        Study
      </span>
    </div>
  );
};

export default CustomCursor;
