"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const WhiteLabelEye = (props) => {
  const containerRef = useRef();

  useGSAP(
    () => {
      // Eye fade animation
      gsap.to(".eye-paths", {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // Gradient line fade animation (starts after eye)
      gsap.to(".gradient-line", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <svg
        viewBox="0 0 282 259"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <foreignObject x="-47.7" y="-7.56816" width="377.4" height="275.136">
          <div xmlns="http://www.w3.org/1999/xhtml"></div>
        </foreignObject>

        {/* Eye paths with fade animation */}
        <g
          data-figma-bg-blur-radius="47.7"
          className="eye-paths"
          style={{ opacity: 0 }}
        >
          <path
            d="M280.208 124.515C277.688 121.069 217.663 40.1318 140.999 40.1318C64.3347 40.1318 4.30602 121.069 1.78949 124.512C-0.596497 127.781 -0.596497 132.215 1.78949 135.485C4.30602 138.931 64.3347 219.868 140.999 219.868C217.663 219.868 277.688 138.931 280.208 135.488C282.597 132.219 282.597 127.781 280.208 124.515ZM140.999 201.275C84.5275 201.275 35.6174 147.555 21.139 129.994C35.5987 112.417 84.4063 58.7251 140.999 58.7251C197.467 58.7251 246.374 112.435 260.858 130.006C246.399 147.583 197.591 201.275 140.999 201.275Z"
            fill="url(#paint0_linear_519_7)"
          />
          <path
            d="M140.999 74.2198C110.242 74.2198 85.2181 99.2435 85.2181 130C85.2181 160.757 110.242 185.781 140.999 185.781C171.755 185.781 196.779 160.757 196.779 130C196.779 99.2435 171.755 74.2198 140.999 74.2198ZM140.999 167.187C120.493 167.187 103.812 150.505 103.812 130C103.812 109.495 120.494 92.8136 140.999 92.8136C161.504 92.8136 178.185 109.495 178.185 130C178.185 150.505 161.504 167.187 140.999 167.187Z"
            fill="url(#paint1_linear_519_7)"
          />
        </g>

        <foreignObject
          x="10.7048"
          y="-47.2952"
          width="260.879"
          height="353.743"
        >
          <div xmlns="http://www.w3.org/1999/xhtml"></div>
        </foreignObject>

        {/* Gradient line with fade animation */}
        <path
          className="gradient-line"
          data-figma-bg-blur-radius="47.7"
          d="M90.1114 246.589C86.1597 253.433 77.4073 255.778 70.5628 251.827C63.7184 247.875 61.374 239.123 65.3256 232.279L192.178 12.5637C196.13 5.71922 204.881 3.37364 211.726 7.32515C218.57 11.2768 220.916 20.0292 216.964 26.8737L90.1114 246.589Z"
          fill="url(#paint2_linear_519_7)"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />

        <defs>
          <clipPath
            id="bgblur_0_519_7_clip_path"
            transform="translate(47.7 7.56816)"
          >
            <path d="M280.208 124.515C277.688 121.069 217.663 40.1318 140.999 40.1318C64.3347 40.1318 4.30602 121.069 1.78949 124.512C-0.596497 127.781 -0.596497 132.215 1.78949 135.485C4.30602 138.931 64.3347 219.868 140.999 219.868C217.663 219.868 277.688 138.931 280.208 135.488C282.597 132.219 282.597 127.781 280.208 124.515ZM140.999 201.275C84.5275 201.275 35.6174 147.555 21.139 129.994C35.5987 112.417 84.4063 58.7251 140.999 58.7251C197.467 58.7251 246.374 112.435 260.858 130.006C246.399 147.583 197.591 201.275 140.999 201.275Z" />
            <path d="M140.999 74.2198C110.242 74.2198 85.2181 99.2435 85.2181 130C85.2181 160.757 110.242 185.781 140.999 185.781C171.755 185.781 196.779 160.757 196.779 130C196.779 99.2435 171.755 74.2198 140.999 74.2198ZM140.999 167.187C120.493 167.187 103.812 150.505 103.812 130C103.812 109.495 120.494 92.8136 140.999 92.8136C161.504 92.8136 178.185 109.495 178.185 130C178.185 150.505 161.504 167.187 140.999 167.187Z" />
          </clipPath>
          <clipPath
            id="bgblur_1_519_7_clip_path"
            transform="translate(-10.7048 47.2952)"
          >
            <path d="M90.1114 246.589C86.1597 253.433 77.4073 255.778 70.5628 251.827C63.7184 247.875 61.374 239.123 65.3256 232.279L192.178 12.5637C196.13 5.71922 204.881 3.37364 211.726 7.32515C218.57 11.2768 220.916 20.0292 216.964 26.8737L90.1114 246.589Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_519_7"
            x1="4.53377"
            y1="54.7538"
            x2="286.489"
            y2="122.397"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCC40" />
            <stop offset="0.466346" stopColor="#EC9122" />
            <stop offset="1" stopColor="#FF2CAE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_519_7"
            x1="4.53377"
            y1="54.7538"
            x2="286.489"
            y2="122.397"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCC40" />
            <stop offset="0.466346" stopColor="#EC9122" />
            <stop offset="1" stopColor="#FF2CAE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_519_7"
            x1="213.788"
            y1="19.3448"
            x2="96.8651"
            y2="7.24694"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCC40" />
            <stop offset="0.466346" stopColor="#EC9122" />
            <stop offset="1" stopColor="#FF2CAE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WhiteLabelEye;
