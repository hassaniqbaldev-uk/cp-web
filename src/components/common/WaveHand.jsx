"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const WaveHand = () => {
  const handRef = useRef();

  useEffect(() => {
    // Wave animation (rotate back and forth)
    gsap.to(handRef.current, {
      rotation: 20, // Rotate 20 degrees
      duration: 0.3,
      yoyo: true, // Go back and forth
      repeat: -1, // Infinite repeat
      ease: "sine.inOut", // Smooth easing
      repeatDelay: 0.2, // Small pause between waves
    });
  }, []);

  return (
    <span
      ref={handRef}
      style={{ display: "inline-block", transformOrigin: "70% 70%" }}
    >
      👋
    </span>
  );
};

export default WaveHand;
