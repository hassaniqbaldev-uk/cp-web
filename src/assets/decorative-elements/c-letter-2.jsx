"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const CLetter2 = (props) => {
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
              trigger: svgRef.current, // the SVG triggers animation
              start: "top 80%", // when top of SVG hits 80% of viewport
              toggleActions: "play none none none", // play only once
            },
          })
          .to(path, {
            strokeDashoffset: 0,
            duration: 3, // slow stroke draw
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
      viewBox="0 0 560 603"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M326.976 418.229C287.206 405.036 252.204 380.431 226.331 347.481C185.595 296.517 171.206 238.295 183.162 172.815C192.076 123.959 214.056 80.2324 249.102 41.6361L215.823 4.60199e-05C154.773 49.3256 119.906 110.6 111.222 183.822C102.51 257.595 122.497 324.938 171.185 385.851C203.386 426.138 242.199 455.334 287.625 473.439C332.049 491.458 380.564 496.977 427.914 489.399C475.702 481.958 519.652 462.289 559.766 430.392L531.545 395.085C507.04 408.804 480.604 418.741 453.133 424.559C409.191 433.788 367.139 431.678 326.976 418.229Z"
        fill="#FFE600"
        stroke="#FFE600"
        strokeWidth="4"
      />
      <path
        d="M377.947 353.043C340.523 347.474 309.114 328.815 283.722 297.066C258.33 265.317 247.129 230.922 250.118 193.881C253.056 157.153 269.15 126.964 298.4 103.312L248.95 41.4455C213.962 79.9893 192.031 123.7 183.156 172.578C171.227 238.026 185.668 296.27 226.478 347.309C252.375 380.288 287.391 404.929 327.161 418.162C367.333 431.661 409.383 433.804 453.314 424.592C480.771 418.8 507.19 408.887 531.674 395.189L477.161 326.988C448.154 349.886 415.083 358.571 377.947 353.043Z"
        fill="#ED910C"
        stroke="#ED910C"
        strokeWidth="4"
      />
    </svg>
  );
};

export default CLetter2;
