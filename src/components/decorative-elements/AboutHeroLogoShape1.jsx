"use client";
import { motion } from "framer-motion";

const AboutHeroLogoShape1 = (props) => {
  const strokeDuration = 1.2;

  return (
    <svg
      width="113"
      height="226"
      viewBox="0 0 113 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.4">
        <mask
          id="mask0_1031_2"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="0"
          width="114"
          height="226"
        >
          <rect width="112.745" height="225.491" fill="white" />
        </mask>

        <g mask="url(#mask0_1031_2)">
          {/* ================= PATH 1 ================= */}

          {/* STROKE */}
          <motion.path
            d="M32.7837 31.7643C11.2631 53.0877 0.505725 79.6866 0.511684 111.561C0.504365 117.78 0.955552 123.99 1.86156 130.142C5.35992 106.498 15.6674 86.1854 32.7837 69.2044C54.1314 48.0425 80.7743 37.3777 112.712 37.2103V-0.229889C80.7802 -0.0564303 54.1374 10.6083 32.7837 31.7643Z"
            fill="none"
            stroke="#0051E9"
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
            d="M32.7837 31.7643C11.2631 53.0877 0.505725 79.6866 0.511684 111.561C0.504365 117.78 0.955552 123.99 1.86156 130.142C5.35992 106.498 15.6674 86.1854 32.7837 69.2044C54.1314 48.0425 80.7743 37.3777 112.712 37.2103V-0.229889C80.7802 -0.0564303 54.1374 10.6083 32.7837 31.7643Z"
            fill="#0051E9"
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
            d="M32.7837 69.2044C15.6674 86.1794 5.35992 106.492 1.86156 130.142C3.87146 143.896 8.41889 157.153 15.2709 169.233C24.8124 186.32 38.8329 200.46 55.812 210.119C72.8926 219.946 91.8593 224.884 112.712 224.931V170.803C97.6581 170.714 84.9222 165.055 74.5046 153.828C73.3126 152.518 72.1742 151.173 71.0896 149.791C62.9546 139.342 58.8513 126.861 58.7798 112.351H112.712L112.712 37.2103C80.7802 37.3837 54.1374 48.0484 32.7837 69.2044Z"
            fill="none"
            stroke="#3078FF"
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
            d="M32.7837 69.2044C15.6674 86.1794 5.35992 106.492 1.86156 130.142C3.87146 143.896 8.41889 157.153 15.2709 169.233C24.8124 186.32 38.8329 200.46 55.812 210.119C72.8926 219.946 91.8593 224.884 112.712 224.931V170.803C97.6581 170.714 84.9222 165.055 74.5046 153.828C73.3126 152.518 72.1742 151.173 71.0896 149.791C62.9546 139.342 58.8513 126.861 58.7798 112.351H112.712L112.712 37.2103C80.7802 37.3837 54.1374 48.0484 32.7837 69.2044Z"
            fill="#3078FF"
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

export default AboutHeroLogoShape1;
