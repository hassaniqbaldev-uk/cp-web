"use client";
import {
  motion,
  useMotionValue,
  useInView,
  animate,
  useTransform,
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
  const isInView = useInView(ref, { once: true });

  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, value, duration, count]);

  return (
    <motion.span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default Counter;
