"use client";
import SectionTitle from "../common/SectionTitle";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyCardSlider from "./CaseStudyCardSlider";
import SectionLabel2 from "../common/SectionLabel2";
import SectionDescription from "../common/SectionDescription";
import { useEffect, useState } from "react";

const CaseStudiesStickyGridSection = ({ caseStudies }) => {
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
    <section className="px-[3rem] py-[8rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="top-[6rem] flex flex-col items-center gap-[2rem] text-center xl:sticky">
          <div>
            <SectionLabel2 text="Case Studies" textColor="text-black" />
          </div>

          <div className="case-study-heading">
            <SectionTitle label="Digital Done Right" />
          </div>

          <div className="case-study-desc max-w-[76.5rem]">
            <SectionDescription label="We’ve crafted websites and brands that blend design, development, and strategy into measurable success." />
          </div>
        </div>

        <div className="mt-20 hidden xl:block">
          <div className="flex flex-col gap-[5rem]">
            {data.slice(0, 4).map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="sticky top-[35rem] xl:top-[28rem]"
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[4rem] block w-full overflow-hidden xl:hidden">
          <CaseStudyCardSlider caseStudies={data} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesStickyGridSection;
