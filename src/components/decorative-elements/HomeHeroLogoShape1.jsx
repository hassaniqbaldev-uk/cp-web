"use client";
import { motion } from "framer-motion";

const HomeHeroLogoShape1 = (props) => {
  const strokeDuration = 1.2;

  return (
    <svg
      width="93"
      height="186"
      viewBox="0 0 93 186"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.32">
        <mask
          id="mask0_1191_2"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="93"
          height="186"
        >
          <rect width="93" height="186" fill="white" />
        </mask>

        <g mask="url(#mask0_1191_2)">
          {/* ================= PATH 1 ================= */}

          {/* STROKE (draws first) */}
          <motion.path
            d="M34.9114 133.235C27.3045 121.482 23.3137 107.741 23.437 93.7271C23.437 71.8938 31.8024 53.6721 48.5332 39.0618C61.0167 28.156 75.8329 21.3203 92.982 18.5549V0.735687C66.8379 0.874174 45.0252 9.60311 27.5441 26.9226C9.93368 44.3848 1.12638 66.1596 1.12207 92.247C1.12207 109.493 5.14949 125.23 13.2044 139.46C21.0198 153.447 32.4989 165.022 46.3987 172.93C60.3828 180.976 75.9062 185.018 92.969 185.057V169.931C83.744 168.4 74.803 165.476 66.4498 161.259C53.0781 154.486 42.5653 145.144 34.9114 133.235Z"
            fill="none"
            stroke="#FFD600"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: strokeDuration,
              ease: "easeOut",
            }}
          />

          {/* FILL (appears after stroke) */}
          <motion.path
            d="M34.9114 133.235C27.3045 121.482 23.3137 107.741 23.437 93.7271C23.437 71.8938 31.8024 53.6721 48.5332 39.0618C61.0167 28.156 75.8329 21.3203 92.982 18.5549V0.735687C66.8379 0.874174 45.0252 9.60311 27.5441 26.9226C9.93368 44.3848 1.12638 66.1596 1.12207 92.247C1.12207 109.493 5.14949 125.23 13.2044 139.46C21.0198 153.447 32.4989 165.022 46.3987 172.93C60.3828 180.976 75.9062 185.018 92.969 185.057V169.931C83.744 168.4 74.803 165.476 66.4498 161.259C53.0781 154.486 42.5653 145.144 34.9114 133.235Z"
            fill="#FFD600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: strokeDuration,
              ease: "easeOut",
            }}
          />

          {/* ================= PATH 2 ================= */}

          <motion.path
            d="M61.7345 126.834C53.1405 117.573 48.8436 106.148 48.8436 92.5585C48.8436 78.9696 53.0866 67.6505 61.5728 58.6013C69.9899 49.617 80.4705 45.0924 93.0143 45.0275V18.5549C75.8695 21.3247 61.0531 28.1603 48.5654 39.0618C31.8303 53.6721 23.465 71.8938 23.4693 93.7271C23.346 107.741 27.3368 121.482 34.9437 133.235C42.5933 145.149 53.1018 154.486 66.4692 161.246C74.8224 165.463 83.7633 168.387 92.9884 169.918V140.706C80.6559 140.654 70.2379 136.03 61.7345 126.834Z"
            fill="none"
            stroke="#ED910C"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: strokeDuration,
              delay: 0.15,
              ease: "easeOut",
            }}
          />

          <motion.path
            d="M61.7345 126.834C53.1405 117.573 48.8436 106.148 48.8436 92.5585C48.8436 78.9696 53.0866 67.6505 61.5728 58.6013C69.9899 49.617 80.4705 45.0924 93.0143 45.0275V18.5549C75.8695 21.3247 61.0531 28.1603 48.5654 39.0618C31.8303 53.6721 23.465 71.8938 23.4693 93.7271C23.346 107.741 27.3368 121.482 34.9437 133.235C42.5933 145.149 53.1018 154.486 66.4692 161.246C74.8224 165.463 83.7633 168.387 92.9884 169.918V140.706C80.6559 140.654 70.2379 136.03 61.7345 126.834Z"
            fill="#ED910C"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: strokeDuration + 0.15,
              ease: "easeOut",
            }}
          />
        </g>
      </g>

      <defs>
        <linearGradient
          id="paint0_linear_1191_2"
          x1="46.5"
          y1="0"
          x2="46.5"
          y2="186"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HomeHeroLogoShape1;
