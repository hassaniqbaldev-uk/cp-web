"use client";
import { PROCESS_2_CARD } from "@/contants";
import Process2Timeline from "@/components/ui/Process2Timeline";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const Process2 = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div ref={containerRef} className="flex flex-col">
            {PROCESS_2_CARD.map((item, idx) => (
              <Process2Timeline
                key={idx}
                item={item}
                index={idx}
                totalSteps={PROCESS_2_CARD.length}
                scrollYProgress={scrollYProgress}
                isLast={idx === PROCESS_2_CARD.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process2;
