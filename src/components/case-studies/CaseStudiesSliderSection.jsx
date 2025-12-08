"use client";

import SectionTitle from "../common/SectionTitle";
import CaseStudyCardSlider from "./CaseStudyCardSlider";
import SectionDescription from "../common/SectionDescription";
import SectionLabel2 from "../common/SectionLabel2";
import { useEffect, useState } from "react";

const CaseStudiesSliderSection = ({ caseStudies }) => {
  const [data, setData] = useState(caseStudies?.data || []);
  const [isOffline, setIsOffline] = useState(false);

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

  return (
    <section className="overflow-hidden px-[3rem] pt-[8rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <div>
            <SectionLabel2 text="Case Studies" textColor="text-black" />
          </div>

          <div className="case-study-heading">
            <SectionTitle label="A decade of digital done right" />
          </div>

          <div className="case-study-desc max-w-[76.5rem]">
            <SectionDescription label="We’ve crafted websites and brands that blend design, development, and strategy into measurable success." />
          </div>
        </div>

        <div className="mt-[4rem] w-full">
          <CaseStudyCardSlider caseStudies={data} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSliderSection;
