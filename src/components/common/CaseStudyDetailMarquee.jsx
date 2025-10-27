"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const CaseStudyDetailMarquee = ({ caseStudy }) => {
  return (
    <Marquee speed={40} gradient={false} pauseOnHover={true}>
      {[
        caseStudy.imageColumn8,
        caseStudy.imageColumn9,
        caseStudy.imageColumn10,
        caseStudy.imageColumn11,
        caseStudy.imageColumn12,
      ].map((item, idx) => (
        <div key={idx} className="mx-[.735rem] flex-shrink-0">
          <div className="relative inline-block h-[22rem] w-[30rem] overflow-hidden rounded-[2rem] md:h-[32.6rem] md:w-[47rem]">
            <Image
              src={item}
              alt="Image"
              width={470}
              height={326}
              priority
              className="size-full"
              unoptimized
            />
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default CaseStudyDetailMarquee;
