"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import React, { useEffect, useState } from "react";
import StarIcon from "@/components/icons/StarIcon";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";
import { MotionEffect } from "@/components/effects/motion-effect";

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i <= rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, className = "" }) {
  const initials = t.authorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`rounded-xl border border-zinc-100 bg-white p-5 shadow-sm ${className}`}
    >
      <Stars rating={t.rating} />
      <blockquote className="mt-3 text-sm leading-relaxed text-zinc-700">
        &ldquo;{t.content}&rdquo;
      </blockquote>
      <div className="mt-4 flex items-center gap-2.5 border-t border-zinc-100 pt-3">
        {t.authorAvatar ? (
          <Image
            src={t.authorAvatar}
            alt={t.authorName}
            width={32}
            height={32}
            unoptimized
            className="rounded-full object-cover"
          />
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-medium text-zinc-500">
            {initials}
          </div>
        )}
        <div>
          <p className="text-xs font-semibold text-zinc-900">{t.authorName}</p>
          {(t.authorTitle || t.authorCompany) && (
            <p className="text-[10px] text-zinc-500">
              {[t.authorTitle, t.authorCompany].filter(Boolean).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const COLUMNS = 3;

const TestingTestimonials2 = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`/api/testimonials?all=true`)
      .then((r) => r.json())
      .then((d) => setTestimonials(Array.isArray(d) ? d : []))
      .catch(() => {});
  }, []);

  const cols = Array.from({ length: COLUMNS }, () => []);
  const heights = new Array(COLUMNS).fill(0);
  for (const t of testimonials) {
    const shortest = heights.indexOf(Math.min(...heights));
    cols[shortest].push(t);
    heights[shortest] += (t.content?.length || 100) + 100;
  }

  return (
    <>
      <div className="container py-[10rem]">
        <div className="flex flex-col items-center text-center">
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.1}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <SectionLabel text="Testimonials" textColor="#3078FF" />
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.25}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="mt-[10px] mb-[18px] md:mt-[5px] md:mb-[14px]">
              <SectionTitle text="Built with Pixels. Backed by people." />
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-[1.2rem]">
              <ul className="flex items-center gap-[3px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index}>
                    <StarIcon color="#FF37B3" className="size-[1.5rem]" />
                  </li>
                ))}
              </ul>

              <span className="text-[1.4rem] leading-[3.2rem] font-bold text-[#625C70] md:text-[2rem]">
                4.9/5 from 47+ Clients
              </span>
            </div>
          </MotionEffect>
        </div>

        {/* Dynamic Testimonials Masonry */}
        {testimonials.length > 0 && (
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
          >
            <div className="my-[5rem] flex items-start gap-5">
              {cols.map((col, i) => (
                <div key={i} className="flex-1 space-y-5">
                  {col.map((t) => (
                    <TestimonialCard key={t.id} t={t} />
                  ))}
                </div>
              ))}
            </div>
          </MotionEffect>
        )}

        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.5}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center">
            <PrimaryButton
              text="See More Reviews & Results"
              textColor="#FFFFFF"
              href="/testimonials"
              bGcolor="#312749"
            />
          </div>
        </MotionEffect>
      </div>
    </>
  );
};

export default TestingTestimonials2;
