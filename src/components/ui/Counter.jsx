"use client";
import {
  motion,
  useMotionValue,
  useInView,
  animate,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
}) => {
  const ref = useRef(null);
  const count = useMotionValue(0);
  // Fire slightly before fully in view so the count lands as the section settles.
  const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  // Reduced motion: show the real number immediately, independent of scroll/inView —
  // otherwise the counter is stuck at 0 for reduced-motion users (and any environment
  // where the in-view observer never fires). This is the trigger bug being fixed.
  useEffect(() => {
    if (prefersReducedMotion) {
      count.set(value);
    }
  }, [prefersReducedMotion, value, count]);

  // Full motion: run the count-up once the element scrolls into view.
  useEffect(() => {
    if (prefersReducedMotion || !isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, value, duration, count, prefersReducedMotion]);

  return (
    <motion.span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default Counter;
