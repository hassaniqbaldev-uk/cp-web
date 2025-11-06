"use client";
import SectionTitle from "../common/SectionTitle";
import CaseStudyCard from "./CaseStudyCard";
import DownArrowIcon from "@/assets/icons/down-arrow.svg";
import SubtractDarkIcon from "@/assets/icons/subtract-dark.svg";
import CaseStudyCardSlider from "./CaseStudyCardSlider";
import { useEffect, useState } from "react";

const CaseStudiesGridSection = ({ caseStudies }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [data, setData] = useState(caseStudies?.data || []);
  const [isOffline, setIsOffline] = useState(false);
  const containerRef = useRef(null);
  const lastVisibleCount = useRef(visibleCount);

  useEffect(() => {
    async function loadCaseStudies() {
      try {
        const res = await fetch("/api/strapi-proxy");
        if (!res.ok) throw new Error("API not ok");

        const json = await res.json();
        if (json?.data?.length) {
          setData(json.data);
          localStorage.setItem("caseStudiesCache", JSON.stringify(json.data));
          setIsOffline(false);
        }
      } catch (err) {
        console.warn("⚠️ API failed, loading from cache:", err.message);
        const cached = localStorage.getItem("caseStudiesCache");
        if (cached) {
          setData(JSON.parse(cached));
          setIsOffline(true);
        } else {
          setIsOffline(true);
        }
      }
    }

    loadCaseStudies();
  }, []);

  // Animate new cards when visibleCount changes
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const newItems = gsap.utils
        .toArray(containerRef.current.querySelectorAll(".case-card"))
        .slice(lastVisibleCount.current, visibleCount);

      if (newItems.length) {
        gsap.fromTo(
          newItems,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
        );
      }

      lastVisibleCount.current = visibleCount;
    },
    { dependencies: [visibleCount] },
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="overflow-hidden px-[3rem] pt-[8rem] xl:px-[0rem] xl:pt-[10rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="mx-auto max-w-[82.6rem] text-center">
          <SectionTitle label="Trusted by business across the UK, US and Australia." />
        </div>

        <div className="mt-[4rem] hidden xl:block">
          <div className="mb-[5rem] flex flex-col gap-[5rem]">
            {data.slice(0, visibleCount).map((caseStudy) => (
              <div key={caseStudy.id} className="case-card">
                <CaseStudyCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>

          {visibleCount < data.length && (
            <button
              onClick={handleLoadMore}
              className="hidden w-full cursor-pointer items-center xl:inline-flex"
            >
              <span className="inline-flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                Load More
              </span>

              <i className="-mx-[.4rem] min-w-max">
                <div className="inline-flex size-[1.8rem] items-center justify-center">
                  <SubtractDarkIcon />
                </div>
              </i>

              <i className="min-w-max">
                <div className="inline-flex size-[5.6rem] items-center justify-center rounded-full bg-[#141414]">
                  <DownArrowIcon className="size-[1.8rem]" />
                </div>
              </i>
            </button>
          )}
        </div>

        <div className="mt-[4rem] block w-full xl:hidden">
          <CaseStudyCardSlider caseStudies={data} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGridSection;
