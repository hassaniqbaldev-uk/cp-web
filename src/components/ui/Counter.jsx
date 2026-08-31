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

// Renders the REAL number by default (server-side + first paint) so a stat is NEVER shown
// as 0 to a visitor. The count-up runs only for a stat that starts BELOW the fold: it is
// primed to 0 while off-screen (invisible to the user) and animates up when scrolled into
// view. A stat already on-screen at load (e.g. the hero) shows its real figure with no
// reset-to-zero flash; reduced-motion and no-JS always show the real figure.
const Counter = ({ value, prefix = "", suffix = "", duration = 1.6 }) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(value); // start at the real number, never 0
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  const primedRef = useRef(false); // captured the initial state once
  const belowFoldRef = useRef(false);
  const ranRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    // Capture, once, whether the stat was off-screen at first paint.
    if (!primedRef.current) {
      primedRef.current = true;
      const r = ref.current.getBoundingClientRect();
      belowFoldRef.current = !(r.top < window.innerHeight && r.bottom > 0);
      // Prime a below-the-fold stat to 0 while it is still off-screen so it can count up.
      if (!prefersReducedMotion && belowFoldRef.current) {
        count.set(0);
      }
    }

    // Above the fold, reduced motion, or no animation needed → keep the real number.
    if (prefersReducedMotion || !belowFoldRef.current) return;

    if (isInView && !ranRef.current) {
      ranRef.current = true;
      const controls = animate(count, value, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, prefersReducedMotion, value, duration, count]);

  return (
    <motion.span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default Counter;
