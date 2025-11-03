"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const CaseStudyCard = ({ caseStudy }) => {
  useGSAP(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to("#cursor", {
        x: clientX - 90 / 2,
        y: clientY - 90 / 2,
        duration: 1,
        delay: 0,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
    <>
      <div
        id="cursor"
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-50 size-[9rem] items-center justify-center rounded-full bg-black/50 p-[1rem] opacity-0 xl:flex"
      >
        {/* Gradient Layer */}
        <div className="gradient-layer" />

        <span className="cursor-text text-center text-[1.4rem] leading-tight font-medium text-white">
          View Case
          <br />
          Study
        </span>
      </div>

      <Link
        onMouseEnter={() => {
          gsap.to("#cursor", { opacity: 1, duration: 0.3 });
          gsap.to(".cursor-text", { opacity: 1, duration: 0.3 }); // 🧠 add this line
        }}
        onMouseLeave={() => {
          gsap.to("#cursor", { opacity: 0, duration: 0.3 });
          gsap.to(".cursor-text", { opacity: 0, duration: 0.3 }); // and hide again
        }}
        href={`/case-studies/${caseStudy.Slug}`}
        className="case-study-card flex w-full cursor-none items-center justify-between gap-[4rem] p-[4rem]"
        style={{ boxShadow: "0px 4px 24px 0px #1A1A1A33" }}
      >
        <div
          className="relative block h-[34.6rem] w-[48.8rem] overflow-hidden rounded-[1.4rem]"
          style={{ boxShadow: "0px 4px 24px 0px #1A1A1A80" }}
        >
          <Image
            // src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${caseStudy.ThumbnailImage.url}`}
            src={`${caseStudy.ThumbnailImage.url}`}
            fill
            priority
            className="size-full object-cover"
            alt={`${caseStudy.ThumbnailImage.alternativeText}`}
            unoptimized
          />
        </div>

        <div className="flex w-[55.9rem] flex-col items-center gap-[1.8rem] text-center lg:items-start lg:text-left">
          <ul className="flex flex-wrap gap-[1rem]">
            {caseStudy.Tags.map((tag) => (
              <li
                key={tag.id}
                className="bg-text-primary inline-flex h-[4rem] items-center justify-center gap-[.8rem] rounded-[4px] px-[1.2rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase"
              >
                <span>{tag.Tag}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-text-primary line-clamp-1 overflow-hidden text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
            {caseStudy.Title}
          </h3>

          <p className="text-text-primary line-clamp-3 overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal">
            {caseStudy.ShortDescription}
          </p>

          <div className="flex w-full flex-col items-start gap-[1.8rem]">
            <span className="text-text-primary/60 text-[1.6rem] leading-[2.4rem] font-medium uppercase">
              TECHNOLOGY USED
            </span>

            <ul className="flex w-full items-center justify-start gap-[3.3rem] border-y border-[#424242]/50 py-[1.8rem]">
              {caseStudy.Tools.slice(0, 4).map((tech) => (
                <li key={tech.id} className="h-[2.2rem]">
                  <img
                    src={`${tech.url}`}
                    alt={`${tech.alternativeText}`}
                    className="h-[2.2rem]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CaseStudyCard;
