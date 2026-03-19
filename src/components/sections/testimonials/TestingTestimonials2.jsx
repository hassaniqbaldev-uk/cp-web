"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { useEffect, useState, useMemo, useCallback } from "react";
import StarIcon from "@/components/icons/StarIcon";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MotionEffect } from "@/components/effects/motion-effect";

const COLUMNS = 3;
const INITIAL_DISPLAY = 10;
const LOAD_MORE_COUNT = 12;

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-[18px] w-[18px] ${i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
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
  const clamped =
    t.content.length > 280
      ? t.content.slice(0, 280).trimEnd() + "..."
      : t.content;

  return (
    <div
      className={`rounded-2xl bg-white p-4 sm:p-6 dark:bg-[#1C1C1E] ${className}`}
      style={{
        boxShadow:
          "0 1px 8px -2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
      }}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <Stars rating={t.rating} />
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 fill-current opacity-15"
          style={{ color: "#71717A" }}
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
        </svg>
      </div>
      <blockquote className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        &ldquo;{clamped}&rdquo;
      </blockquote>
      <div className="flex items-center gap-2 sm:gap-3">
        {t.authorAvatar ? (
          <img
            src={t.authorAvatar}
            alt={t.authorName}
            className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
            style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium sm:h-10 sm:w-10"
            style={{ background: "#F4F4F5", color: "#71717A" }}
          >
            {initials}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
            {t.authorName}
          </p>
          {(t.authorTitle || t.authorCompany) && (
            <p className="truncate text-xs text-gray-500">
              {[t.authorTitle, t.authorCompany].filter(Boolean).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const TestingTestimonials2 = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY);

  useEffect(() => {
    fetch(
      `https://revuora.app/api/testimonials/public/featured?orgSlug=creativepixels&all=true`,
    )
      .then((r) => r.json())
      .then((d) => setTestimonials(Array.isArray(d) ? d : []))
      .catch(() => {});
  }, []);

  const displayed = useMemo(
    () => testimonials.slice(0, displayCount),
    [testimonials, displayCount],
  );
  const hasMore = testimonials.length > displayCount;
  const loadMore = useCallback(
    () => setDisplayCount((c) => c + LOAD_MORE_COUNT),
    [],
  );

  const cols = useMemo(() => {
    const result = Array.from({ length: COLUMNS }, () => []);
    const heights = new Array(COLUMNS).fill(0);
    for (const t of displayed) {
      const shortest = heights.indexOf(Math.min(...heights));
      result[shortest].push(t);
      heights[shortest] += (t.content?.length || 100) + 100;
    }
    return result;
  }, [displayed]);

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
            {hasMore && (
              <div className="mt-6 mb-8 flex justify-center">
                <button
                  onClick={loadMore}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700 transition-colors"
                >
                  Show more ({testimonials.length - displayCount} remaining)
                </button>
              </div>
            )}
          </MotionEffect>
        )}
      </div>
    </>
  );
};

export default TestingTestimonials2;
