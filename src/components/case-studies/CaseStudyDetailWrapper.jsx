"use client";
import { useEffect, useState } from "react";
import CaseStudyHeroSection from "@/components/case-studies/CaseStudyHeroSection";
import CaseStudyOverviewSection from "@/components/case-studies/CaseStudyOverviewSection";
import CaseStudyChallengeSection from "@/components/case-studies/CaseStudyChallengeSection";
import CaseStudyApproachSection from "@/components/case-studies/CaseStudyApproachSection";
import CaseStudySolutionSection from "@/components/case-studies/CaseStudySolutionSection";
import CaseStudyResultsSection from "@/components/case-studies/CaseStudyResultsSection";
import ContactSection from "@/components/sections/ContactSection";

const CaseStudyDetailWrapper = ({ slug, caseStudy }) => {
  const [data, setData] = useState(caseStudy);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    async function fetchCaseStudy() {
      try {
        const res = await fetch(`/api/strapi-proxy?slug=${slug}`);
        if (!res.ok) throw new Error("Network error");

        const json = await res.json();
        const fresh = json?.data?.[0];
        if (fresh) {
          setData(fresh);
          localStorage.setItem(`caseStudy-${slug}`, JSON.stringify(fresh));
          setIsOffline(false);
        }
      } catch (err) {
        console.warn("⚠️ Using cached case study:", err.message);
        const cached = localStorage.getItem(`caseStudy-${slug}`);
        if (cached) {
          setData(JSON.parse(cached));
          setIsOffline(true);
        } else {
          setIsOffline(true);
        }
      }
    }

    fetchCaseStudy();
  }, [slug]);

  if (!data) {
    return (
      <p className="mt-[4rem] text-center text-gray-500">
        No case study found.
      </p>
    );
  }

  return (
    <>
      {isOffline && (
        <p className="mt-[1rem] text-center text-gray-500">
          You’re viewing cached version (offline mode)
        </p>
      )}

      <CaseStudyHeroSection caseStudy={data} />
      <CaseStudyOverviewSection caseStudy={data} />
      <CaseStudyChallengeSection caseStudy={data} />
      <CaseStudyApproachSection caseStudy={data} />
      <CaseStudySolutionSection caseStudy={data} />
      <CaseStudyResultsSection caseStudy={data} />

      <div className="overflow-hidden">
        <ContactSection />
      </div>
    </>
  );
};

export default CaseStudyDetailWrapper;
