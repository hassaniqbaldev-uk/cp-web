"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import LightFeatureCard2 from "@/components/ui/LightFeatureCard2";
import { MotionEffect } from "@/components/effects/motion-effect";

// CP-05 module — the specialisms that sit UNDER a parent offer, framed as part of it rather than
// competing services. Data comes from `service.specialistLinks[]` ({ label, href, description }).
// E.g. Web Design & Development links down to WordPress, Migrations, Accessibility and Speed; Ecommerce
// links to Shopify. Rendered as light cards with a "learn more" link, a lighter treatment than the
// headline capability cards, so the hierarchy reads parent-first.
const COLORS = ["#3078FF", "#ED910C", "#FF37B3", "#44B276", "#7C3AED"];

const SpecialistLinks = ({
  links = [],
  label = "Part of the offer",
  title = "Specialisms built into this service",
  description = "These are not separate products to weigh up. They are the deeper parts of the same offer, and we bring them in wherever your project needs them.",
}) => {
  // The section needs at least TWO links to read as a set. A single card in a multi-column grid looks
  // like something failed to load, so the section hides itself (e.g. Branding, which only relates to
  // UI/UX). This handles any future one-link page automatically.
  if (links.length < 2) return null;

  // Grid adapts to the count so a page with 2 specialisms (e.g. Ecommerce) doesn't leave a gap in a
  // 4-up row, and a page with 4 (e.g. Web Design & Development) fills the row. Centred + width-capped
  // for small counts.
  const cols = Math.min(links.length, 4);
  const maxW =
    cols <= 2 ? "max-w-[72rem]" : cols === 3 ? "max-w-[104rem]" : "max-w-full";

  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div>
              <SectionLabel text={label} textColor="#3078FF" />
            </div>
          </MotionEffect>

          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div className="mt-[5px] mb-[14px]">
              <SectionTitle text={title} textColor="#312749" />
            </div>
          </MotionEffect>

          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div className="max-w-[74rem]">
              <SectionDescription text={description} textColor="#625C70" />
            </div>
          </MotionEffect>
        </div>

        <div
          className={`mx-auto mt-[5rem] grid grid-cols-1 gap-[3rem] md:grid-cols-2 xl:mt-[6rem] xl:[grid-template-columns:var(--cols)] ${maxW}`}
          style={{ "--cols": `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {links.map((link, idx) => (
            <MotionEffect
              key={link.href || idx}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4 + idx * 0.12}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              className="h-full"
            >
              <LightFeatureCard2
                title={link.label}
                description={link.description}
                color={COLORS[idx % COLORS.length]}
                link={link.href}
                linkText="Learn more"
              />
            </MotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistLinks;
