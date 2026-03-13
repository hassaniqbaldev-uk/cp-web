"use client";
import { motion, useMotionValue, useInView, animate, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const StatsCounter = ({ value, suffix = "", duration = 1.5 }) => {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const isInView = useInView(ref, { once: true });

  // Convert MotionValue number -> rounded display string/number
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, value, duration, count]);

  return (
    <motion.h4
      ref={ref}
      className=" text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white"
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.h4>
  );
};

export default StatsCounter;
