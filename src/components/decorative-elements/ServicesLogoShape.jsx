"use client";
import { motion } from "framer-motion";

const ServicesLogoShape = ({ ...props }) => {
  const strokeDuration = 1.2;

  return (
    <svg
      width="131"
      height="178"
      viewBox="0 0 131 178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.4">
        <mask
          id="mask0_1192_6"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="131"
          height="178"
        >
          <rect width="131" height="178" fill="white" />
        </mask>

        <g mask="url(#mask0_1192_6)">
          {/* ===== PATH 1 ===== */}

          {/* Stroke */}
          <motion.path
            d="M95.531 59.0535C86.8684 50.8742 76.042 51.1351 63.0446 51.1351C62.9392 51.1351 62.8409 50.973 62.7355 50.973C67.1556 52.9873 71.2127 55.7225 74.7422 59.0676C83.3321 67.1763 87.6599 77.2829 87.7255 89.3873H108.514C108.444 77.2735 104.116 67.1622 95.531 59.0535Z"
            fill="none"
            stroke="#618402"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: strokeDuration,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          />

          {/* Fill */}
          <motion.path
            d="M95.531 59.0535C86.8684 50.8742 76.042 51.1351 63.0446 51.1351C62.9392 51.1351 62.8409 50.973 62.7355 50.973C67.1556 52.9873 71.2127 55.7225 74.7422 59.0676C83.3321 67.1763 87.6599 77.2829 87.7255 89.3873H108.514C108.444 77.2735 104.116 67.1622 95.531 59.0535Z"
            fill="#618402"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: strokeDuration,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          />

          {/* ===== PATH 2 ===== */}

          <motion.path
            d="M20.5185 0.846712L-0.270355 0.846712L-0.270355 177.829H20.5185L20.5185 0.846712Z"
            fill="none"
            stroke="#618402"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: strokeDuration,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          />

          <motion.path
            d="M20.5185 0.846712L-0.270355 0.846712L-0.270355 177.829H20.5185L20.5185 0.846712Z"
            fill="#618402"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: strokeDuration + 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          />

          {/* ===== PATH 3 ===== */}

          <motion.path
            d="M42.5648 0.846712L20.5185 0.846712L20.5185 177.829H41.9466V46.8057C49.0908 46.6656 56.1798 48.0876 62.7214 50.973V51.0434C75.8523 50.98 86.7841 50.8249 95.517 59.0676C104.107 67.1763 108.435 77.2829 108.5 89.3873H130.118C129.992 64.2008 121.643 43.1862 105.072 26.3435C88.3556 9.34095 67.5198 0.842011 42.5648 0.846712Z"
            fill="none"
            stroke="#B3DB45"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: strokeDuration,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          />

          <motion.path
            d="M42.5648 0.846712L20.5185 0.846712L20.5185 177.829H41.9466V46.8057C49.0908 46.6656 56.1798 48.0876 62.7214 50.973V51.0434C75.8523 50.98 86.7841 50.8249 95.517 59.0676C104.107 67.1763 108.435 77.2829 108.5 89.3873H130.118C129.992 64.2008 121.643 43.1862 105.072 26.3435C88.3556 9.34095 67.5198 0.842011 42.5648 0.846712Z"
            fill="#B3DB45"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: strokeDuration + 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </g>
      </g>
    </svg>
  );
};

export default ServicesLogoShape;
