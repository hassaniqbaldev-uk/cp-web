"use client";

import Link from "next/link";
import Image from "next/image";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import { urlFor } from "@/sanity/caseStudies.image";

// Shared case-study card (thumbnail + title + excerpt + arrow), extracted from CuratedWorkGrid so every
// surface that lists case studies uses one card, not a copy. Used by CuratedWorkGrid and the homepage
// per-pillar feature blocks.
const CaseStudyCard = ({ caseStudy: cs }) => {
  if (!cs) return null;
  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      style={{ boxShadow: "11px 11px 65px 0px #00000012" }}
      className="flex h-full flex-col gap-[2rem] rounded-[3rem] bg-white px-[2rem] pt-[2rem] pb-[3rem]"
    >
      {cs.thumbnailImage && (
        <div className="flex h-[26rem] w-full overflow-hidden rounded-[2rem]">
          <Image
            src={urlFor(cs.thumbnailImage)?.width(737).height(497).fit("crop").url()}
            alt={cs.title || "Case study"}
            width={737}
            height={497}
            className="size-full object-cover"
            unoptimized
          />
        </div>
      )}

      <div className="flex flex-col px-[1rem]">
        <hr className="my-[2rem] w-full border-t border-black/10" />
        <div className="flex items-center justify-between gap-[1.5rem]">
          <div className="flex flex-col gap-[.6rem] text-left">
            <h3 className="text-[2rem] leading-[2.6rem] font-bold tracking-[-0.02em] text-[#312749]">
              {cs.title}
            </h3>
            {cs.excerpt && (
              <p className="text-[1.5rem] leading-[2.2rem] text-[#625C70]">
                {cs.excerpt}
              </p>
            )}
          </div>
          <i
            className="inline-flex size-[4.4rem] min-w-[4.4rem] items-center justify-center rounded-full"
            style={{ background: cs.iconBg || "#FF37B3" }}
          >
            <TiltArrowIcon color={cs.iconColor || "#ffffff"} />
          </i>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
