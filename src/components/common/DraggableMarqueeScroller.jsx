"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const DraggableMarqueeScroller = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        markers: true,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.25 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="main relative h-[500px] overflow-hidden bg-black">
      <div className="slider-container absolute top-1/2 -translate-y-1/2">
        <div ref={slider} className="slider relative flex whitespace-nowrap">
          <p
            ref={firstText}
            className="m-0 text-[24rem] leading-[24rem] font-medium text-white"
          >
            Freelance Developer -
          </p>

          <p
            ref={secondText}
            className="absolute left-[100%] m-0 text-[24rem] leading-[24rem] font-medium text-white"
          >
            Freelance Developer -
          </p>
        </div>
      </div>
    </div>
  );
};

export default DraggableMarqueeScroller;
