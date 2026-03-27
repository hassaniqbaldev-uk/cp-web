"use client";

import { AnimatePresence } from "motion/react";

const AnimatePresenceWrapper = ({ children }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default AnimatePresenceWrapper;
