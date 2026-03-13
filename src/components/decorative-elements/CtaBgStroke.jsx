"use client";
import { motion } from "framer-motion";

const CtaBgStroke = () => {
  return (
    <>
      <svg
        width="1282"
        height="352"
        viewBox="0 0 1282 352"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M18.002 333.775C46.6514 291.584 138.068 150.983 202.002 148.974C281.919 146.463 286.502 333.775 211.002 333.775C141.004 333.775 184.097 132.399 453.502 148.974C722.907 165.549 827.223 268.427 989.57 234.272C1151.92 200.118 1216.11 7.15295 1135 18.4744C1074.97 26.8539 1058.43 285.002 1264 206.145"
          stroke="url(#paint0_linear_983_148)"
          strokeWidth="36"
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
            id="paint0_linear_983_148"
            x1="422.502"
            y1="177.754"
            x2="1185.43"
            y2="351.513"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.45" stopColor="white" stopOpacity="0.26" />
            <stop offset="0.65" stopColor="#FEC644" stopOpacity="0.3" />
            <stop offset="1" stopColor="#FEC644" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
export default CtaBgStroke;
