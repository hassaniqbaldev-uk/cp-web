"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const containerRef = useRef();

  useGSAP(() => {
    if (children.key !== displayChildren.key) {
      // slide old page out to left
      gsap
        .to(containerRef.current, {
          x: "-100%", // full width left
          duration: 0.6,
          ease: "power2.inOut",
        })
        .then(() => {
          // swap page
          setDisplayChildren(children);
          // position new page off right then slide in
          gsap.fromTo(
            containerRef.current,
            { x: "100%" },
            {
              x: "0%",
              duration: 0.6,
              ease: "power2.out",
            },
          );
        });
    }
  }, [children]);

  return (
    <div ref={containerRef} style={{ overflow: "hidden", width: "100%" }}>
      {displayChildren}
    </div>
  );
}
