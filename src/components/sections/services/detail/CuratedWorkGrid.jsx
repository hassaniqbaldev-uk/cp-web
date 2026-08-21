"use client";

import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import { urlFor } from "@/sanity/caseStudies.image";
import { MotionEffect } from "@/components/effects/motion-effect";

// CP-05 module — a flexible curated-work grid for pages whose curated set is NOT exactly three (the shared
// Work component is a fixed 1-big-+-2-small layout that needs three). Renders any count of case-study cards
// in a responsive grid that adapts columns to the count and centres/caps small counts, so a page with two
// genuine case studies (e.g. Shopify) shows exactly two without padding or a broken layout.
const CuratedWorkGrid = ({ caseStudies = [], label, title, description }) => {
  const items = caseStudies.filter(Boolean);
  if (!items.length) return null;

  const cols = Math.min(items.length, 3);
  const maxW =
    cols === 1 ? "max-w-[52rem]" : cols === 2 ? "max-w-[80rem]" : "max-w-full";

  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {label && (
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div>
                <SectionLabel text={label} textColor="#FF37B3" />
              </div>
            </MotionEffect>
          )}
          {title && (
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div className="mt-[5px] mb-[14px]">
                <SectionTitle text={title} textColor="#312749" />
              </div>
            </MotionEffect>
          )}
          {description && (
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div className="max-w-[74rem]">
                <SectionDescription text={description} textColor="#625C70" />
              </div>
            </MotionEffect>
          )}
        </div>

        <div
          className={`mx-auto mt-[5rem] grid grid-cols-1 gap-[3rem] md:grid-cols-2 xl:mt-[6rem] xl:[grid-template-columns:var(--cols)] ${maxW}`}
          style={{ "--cols": `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {items.map((cs, idx) => (
            <MotionEffect
              key={cs.slug || idx}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4 + idx * 0.15}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              className="h-full"
            >
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
            </MotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedWorkGrid;
