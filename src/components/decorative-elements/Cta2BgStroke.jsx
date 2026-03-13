"use client";
import { motion } from "framer-motion";

const Cta2BgStroke = () => {
  return (
    <svg
      width="1126"
      height="316"
      viewBox="0 0 1126 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M17.5028 278.672C41.3899 238.696 102.323 157.928 159.829 153.222C231.712 147.34 246.019 294.249 178.001 297.63C114.94 300.764 142.942 138.823 386.406 141.96C629.87 145.096 727.804 231.33 872.506 192.737C1017.21 154.144 1077.93 17.8587 1002.02 17.5003C947.403 17.2424 926.404 213.338 1108.01 131.814"
        stroke="url(#paint0_linear_1144_2)"
        strokeWidth="35"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 1.8, delay: 0.2, ease: "easeOut" },
          opacity: { duration: 0.3 },
        }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <defs>
        <linearGradient
          id="paint0_linear_1144_2"
          x1="407.021"
          y1="144.048"
          x2="1028.47"
          y2="279.549"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.425547" stopColor="white" stopOpacity="0.26" />
          <stop offset="0.617096" stopColor="#FFBF00" />
          <stop offset="1" stopColor="#FFE400" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Cta2BgStroke;
