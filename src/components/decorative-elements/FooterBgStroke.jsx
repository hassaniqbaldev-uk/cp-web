"use client";
import { motion } from "framer-motion";

const FooterBgStroke = ({ ...props }) => {
  return (
    <>
      <svg
        width="1596"
        height="308"
        viewBox="0 0 1596 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <motion.path
          d="M16.5005 261.735C58.5617 211.007 193.707 41.353 273.192 48.2158C372.548 56.7943 348.996 301.551 255.501 290.355C168.82 279.975 253.605 23.9628 584.635 85.5107C915.665 147.059 1028.79 296.582 1235.16 276.152C1441.53 255.722 1551.14 13.7977 1448.93 16.5225C1373.28 18.5392 1312.52 352.466 1579.39 280.196"
          stroke="url(#paint0_linear_993_2)"
          strokeOpacity="0.9"
          strokeWidth="33"
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
            id="paint0_linear_993_2"
            x1="100.917"
            y1="65.6256"
            x2="1428.55"
            y2="523.84"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FB3397" stopOpacity="0" />
            <stop offset="0.16" stopColor="#FB3397" />
            <stop offset="0.76" stopColor="#FEC644" stopOpacity="0.8" />
            <stop offset="1" stopColor="#FEC644" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
export default FooterBgStroke;
