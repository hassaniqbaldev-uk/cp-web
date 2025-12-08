"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const PLetter = (props) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");

      paths.forEach((path) => {
        const length = path.getTotalLength();

        // reset stroke & fill before animation
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fillOpacity: 0,
        });

        // create timeline that runs on scroll
        gsap
          .timeline({
            scrollTrigger: {
              trigger: svgRef.current, // SVG itself is trigger
              start: "top 60%", // play when it enters view
              toggleActions: "play none none none", // play only once
            },
          })
          .to(path, {
            strokeDashoffset: 0,
            duration: 2.5, // stroke draw speed
            ease: "power1.inOut",
          })
          .to(path, {
            fillOpacity: 1,
            duration: 1, // then fade fill
            ease: "power1.inOut",
          });
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width="98"
      height="179"
      viewBox="0 0 98 179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M70.0788 31.5054C76.2835 38.9362 80.2485 48.1155 81.4915 57.8888C83.5705 73.098 79.7126 86.6259 69.9394 98.4839C62.6417 107.327 53.3936 113.57 42.2058 117.201L43.899 129.62C61.3557 126.918 75.0832 118.669 85.1136 104.861C95.2083 90.9298 99.0126 74.88 96.5264 56.6784C94.8868 44.6635 90.7075 34.0944 83.9777 24.9824C77.4301 16.016 68.6642 9.08951 58.6338 4.965C48.5391 0.762027 37.7801 -0.515673 26.3673 1.15431L27.8032 11.701C34.1151 11.8467 40.3734 13.0011 46.353 15.097C55.9333 18.5042 63.8419 23.9736 70.0788 31.5054Z"
        fill="#EC3593"
        stroke="#EC3593"
        strokeWidth="3"
      />
      <path
        d="M52.8042 38.6336C59.4268 44.2376 63.3811 51.7693 64.667 61.24C65.953 70.6995 64.1955 79.0157 59.3947 86.1776C54.626 93.2722 48.0462 97.4752 39.6661 98.7753L42.1844 117.201C53.3722 113.559 62.6095 107.327 69.918 98.4839C79.7019 86.6371 83.549 73.098 81.4808 57.8888C80.227 48.1043 76.262 38.9362 70.068 31.5054C63.8205 23.9624 55.9119 18.5042 46.353 15.1194C40.3734 13.0123 34.1151 11.8691 27.8032 11.7234L30.5788 32.0658C38.8195 30.8889 46.2351 33.0857 52.8042 38.6336Z"
        fill="#B11F80"
        stroke="#B11F80"
        strokeWidth="3"
      />
      <path
        d="M26.7498 1.2678L0.821289 5.13557L24.4836 178.652L50.4122 174.785L26.7498 1.2678Z"
        fill="#EC3593"
        stroke="#EC3593"
        strokeWidth="3"
      />
    </svg>
  );
};

export default PLetter;
