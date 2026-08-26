"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import StarIcon from "@/components/icons/StarIcon";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";

const TestimonialsSlider = dynamic(
  () => import("@/components/ui/TestimonialsSlider"),
  { ssr: false },
);

const CARD_BASE =
  "flex w-full flex-col rounded-[2rem] border border-[#E4E3E8] bg-white backdrop-blur-[10px]";

function Stars({ rating = 5 }) {
  return (
    <ul className="flex items-center gap-[3px]">
      {Array.from({ length: rating || 5 }).map((_, i) => (
        <li key={i}>
          <StarIcon color="#FFBF00" height="20" width="20" />
        </li>
      ))}
    </ul>
  );
}

function Person({ t }) {
  return (
    <div className="flex items-center gap-[1.2rem]">
      <div className="flex overflow-hidden rounded-full">
        {t.avatarUrl && (
          <Image src={t.avatarUrl} alt="" width={56} height={56} unoptimized />
        )}
      </div>

      <div className="flex flex-col items-start text-left">
        <p className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
          {t.name}
        </p>

        <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
          {t.company}
        </span>
      </div>
    </div>
  );
}

// The tall left card: featured image on top, row-span-2. Reproduces the original bento card 1.
function FeaturedCard({ t }) {
  return (
    <div
      className={`${CARD_BASE} row-span-2 h-full items-center gap-[2rem] px-[3rem] pt-[3rem] pb-[4.1rem]`}
    >
      {t.featuredImageUrl && (
        <div className="flex h-[20rem] w-full overflow-hidden rounded-[1.2rem]">
          <Image
            src={t.featuredImageUrl}
            alt=""
            width={319}
            height={319}
            className="size-full object-cover object-top-left"
          />
        </div>
      )}

      <div className="flex flex-col gap-[4rem]">
        <div className="flex flex-col items-start gap-[1.9rem] text-left">
          <Stars rating={t.rating} />
          <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
            {t.quote}
          </p>
        </div>

        <Person t={t} />
      </div>
    </div>
  );
}

// Standard card; `wide` adds col-span-2 (the original bento card 4).
function QuoteCard({ t, wide }) {
  return (
    <div
      className={`${CARD_BASE} ${wide ? "col-span-2 " : ""}h-[31.5rem] justify-between px-[3rem] py-[4.1rem]`}
    >
      <div className="flex flex-col items-start gap-[1.9rem] text-left">
        <Stars rating={t.rating} />
        <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
          {t.quote}
        </p>
      </div>

      <Person t={t} />
    </div>
  );
}

const Testimonials = ({ testimonials = [] }) => {
  // Desktop bento: the first four in order. Card 0 leads (featured image + row-span-2), cards 1 and 2
  // sit beside it, card 3 spans the bottom two columns — identical grid auto-flow to the original.
  const bento = testimonials.slice(0, 4);

  // Mobile slider shape matches the existing TestimonialsSlider renderItem ({ text, avatar }).
  const sliderItems = testimonials.map((t) => ({
    rating: t.rating,
    text: t.quote,
    name: t.name,
    company: t.company,
    avatar: t.avatarUrl,
  }));

  return (
    <>
      <div className="container">
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
            <div className="flex items-center justify-center">
              <span className="text-[1.4rem] leading-[3.2rem] font-bold text-[#625C70] md:text-[2rem]">
                Real reviews from real clients
              </span>
            </div>
          </MotionEffect>
        </div>

        {/* Desktop Bento Grid — single container animation */}
        {bento.length > 0 && (
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
          >
            <div className="my-[5rem] hidden grid-cols-3 gap-[1.3rem] xl:grid">
              {bento[0] && <FeaturedCard t={bento[0]} />}
              {bento[1] && <QuoteCard t={bento[1]} />}
              {bento[2] && <QuoteCard t={bento[2]} />}
              {bento[3] && <QuoteCard t={bento[3]} wide />}
            </div>
          </MotionEffect>
        )}

        {/* Responsive */}
        {sliderItems.length > 0 && (
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.6}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="my-[3rem] block w-full xl:hidden">
              <TestimonialsSlider testimonials={sliderItems} />
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

export default Testimonials;
