"use client";
import { motion } from "framer-motion";

const HomeHeroLogoShape2 = (props) => {
  const strokeDuration = 1.2;

  return (
    <svg
      width="86"
      height="172"
      viewBox="0 0 86 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.4">
        <mask
          id="mask0_964_203"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="86"
          height="172"
        >
          <rect width="85.9846" height="171.969" fill="white" />
        </mask>

        <g mask="url(#mask0_964_203)">
          {/* ================= PATH 1 ================= */}

          {/* STROKE */}
          <motion.path
            d="M25.0027 24.2253C8.59021 40.4875 0.386147 60.773 0.390692 85.0819C0.38511 89.8245 0.729205 94.561 1.42016 99.2526C4.08816 81.2205 11.9491 65.7292 25.0027 52.7788C41.2834 36.6398 61.6024 28.5064 85.9599 28.3787V-0.174805C61.607 -0.0425177 41.288 8.09088 25.0027 24.2253Z"
            fill="none"
            stroke="#C41818"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: strokeDuration,
              ease: "easeOut",
            }}
          />

          {/* FILL */}
          <motion.path
            d="M25.0027 24.2253C8.59021 40.4875 0.386147 60.773 0.390692 85.0819C0.38511 89.8245 0.729205 94.561 1.42016 99.2526C4.08816 81.2205 11.9491 65.7292 25.0027 52.7788C41.2834 36.6398 61.6024 28.5064 85.9599 28.3787V-0.174805C61.607 -0.0425177 41.288 8.09088 25.0027 24.2253Z"
            fill="#C41818"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: strokeDuration,
              ease: "easeOut",
            }}
          />

          {/* ================= PATH 2 ================= */}

          {/* STROKE */}
          <motion.path
            d="M25.0027 52.7788C11.9491 65.7247 4.08816 81.216 1.42016 99.2526C2.95301 109.742 6.42107 119.852 11.6467 129.065C18.9235 142.096 29.6161 152.88 42.5651 160.246C55.5915 167.741 70.0563 171.506 85.9598 171.543V130.262C74.4788 130.194 64.7658 125.879 56.8209 117.317C55.9119 116.318 55.0437 115.291 54.2165 114.238C48.0123 106.268 44.883 96.7505 44.8285 85.684H85.9598L85.9599 28.3787C61.607 28.511 41.288 36.6443 25.0027 52.7788Z"
            fill="none"
            stroke="#FC2534"
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

          {/* FILL */}
          <motion.path
            d="M25.0027 52.7788C11.9491 65.7247 4.08816 81.216 1.42016 99.2526C2.95301 109.742 6.42107 119.852 11.6467 129.065C18.9235 142.096 29.6161 152.88 42.5651 160.246C55.5915 167.741 70.0563 171.506 85.9598 171.543V130.262C74.4788 130.194 64.7658 125.879 56.8209 117.317C55.9119 116.318 55.0437 115.291 54.2165 114.238C48.0123 106.268 44.883 96.7505 44.8285 85.684H85.9598L85.9599 28.3787C61.607 28.511 41.288 36.6443 25.0027 52.7788Z"
            fill="#FC2534"
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
    </svg>
  );
};

export default HomeHeroLogoShape2;
