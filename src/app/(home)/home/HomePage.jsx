"use client";

import HomeHeader from "@/components/layout/HomeHeader";
import HomeHero from "@/components/sections/hero/HomeHero";
import ServicesPillars from "@/components/sections/services/ServicesPillars";
import PillarFeature from "@/components/sections/home/PillarFeature";
import Established from "@/components/sections/established/Established";
import Lifecycle from "@/components/sections/home/Lifecycle";
import Work from "@/components/sections/work/Work";
import Cta from "@/components/sections/cta/Cta";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Contact from "@/components/sections/contact/Contact";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import Footer from "@/components/layout/Footer";

const CONTENT_VARIANTS = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 30 },
  },
};

const HomePage = ({ selectedWork, webEcommerceWork, navData }) => {
  const [transition, setTransition] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoaded]);

  useEffect(() => {
    const timer = setTimeout(() => setTransition(true), 1250);
    const timer2 = setTimeout(() => setIsLoaded(true), 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center">
        <HomeHeader transition={transition} navData={navData} />

        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#050510",
            backgroundImage: [
              "radial-gradient(ellipse 35% 40% at 98% 0%, rgba(10, 218, 255, 0.55) 0%, rgba(10, 180, 255, 0.15) 40%, transparent 70%)",
              "radial-gradient(ellipse 45% 55% at 102% 92%, rgba(236, 53, 147, 0.6) 0%, rgba(180, 20, 120, 0.2) 40%, transparent 70%)",
              "radial-gradient(ellipse 55% 50% at 100% 55%, rgba(95, 4, 141, 0.45) 0%, rgba(80, 10, 120, 0.15) 40%, transparent 65%)",
              "radial-gradient(ellipse 50% 60% at -5% 80%, rgba(200, 120, 50, 0.18) 0%, rgba(160, 80, 40, 0.08) 40%, transparent 60%)",
              "radial-gradient(ellipse 45% 55% at 15% 75%, rgba(140, 60, 100, 0.15) 0%, transparent 55%)",
              "radial-gradient(ellipse 160% 160% at 50% 60%, rgba(30, 12, 80, 0.7) 0%, rgba(20, 8, 60, 0.4) 35%, transparent 60%)",
              "radial-gradient(ellipse 90% 90% at 70% 40%, rgba(25, 10, 70, 0.5) 0%, transparent 60%)",
              "radial-gradient(ellipse 40% 45% at 95% 15%, rgba(30, 60, 180, 0.2) 0%, transparent 55%)",
            ].join(", "),
          }}
        />

        {transition && (
          <motion.div
            variants={CONTENT_VARIANTS}
            initial="hidden"
            animate={transition ? "visible" : "hidden"}
            className="w-full"
          >
            <HomeHero key={String(transition)} />
          </motion.div>
        )}
      </div>
      {/* Selected work sits high so the page shows capability rather than describing it.
          Flagship-only (fetched in page.jsx), so archive work never surfaces. */}
      <Work
        caseStudies={selectedWork}
        label="Selected work"
        title="Work we've delivered."
        description="A selection of recent projects across brand, web and ecommerce."
      />
      {/* Four pillars — reuses the services-hub ServicesPillars (one source, no second version).
          Web & Ecommerce leads by order and carries the weight. Replaces the old generic
          Expertise + Services sections, which predated the pillar model. */}
      <ServicesPillars columns={navData.serviceColumns} />
      {/* Web & Ecommerce — the heaviest per-pillar block (45-50% of the business). Its work is a
          DISTINCT curated set (page.jsx guarantees no overlap with Selected work above), so the two
          work sections never repeat. The other three pillars follow as concise blocks (no work). */}
      <PillarFeature
        eyebrow="Web & Ecommerce"
        eyebrowColor="#3078FF"
        accentColor="#3078FF"
        title="Websites, stores, apps and platforms."
        description="The core of what we do, and the largest part of our business. Fast, search-friendly websites, Shopify and WooCommerce stores, custom apps, and the platforms behind them."
        capabilities={[
          { label: "Websites", href: "/services/web-design-development" },
          { label: "Ecommerce", href: "/services/ecommerce" },
          { label: "Apps", href: "/services/custom-app-development" },
          { label: "Platforms", href: "/services/wordpress" },
        ]}
        work={webEcommerceWork}
        cta={{
          text: "Explore web and ecommerce",
          href: "/services/web-design-development",
        }}
        ctaPosition="home-web-ecommerce"
      />
      {/* AI & Automation — the only other block that earns a standalone slot (it carries the one proof
          that pillar has, Biome4Pets). Brand & Growth were dropped: they only restated the pillar
          overview above. The #F7FAFF tint keeps the background alternating (pillars=dark, Web&Ecom=white,
          AI=tint, Established=white) so the flow reads as one page, not sections dropped in. */}
      <PillarFeature
        variant="concise"
        background="tint"
        eyebrow="AI & Automation"
        eyebrowColor="#7C3AED"
        accentColor="#7C3AED"
        title="Take the manual work off your team."
        description="We apply AI and automation to the operational bottlenecks that slow a business down, so people spend less time on process and more on the work that matters."
        proof={{
          text: "Biome4Pets: 200 reports that took three days now take one.",
          href: "/case-studies/biome4pets",
        }}
        cta={{
          text: "Explore AI and automation",
          href: "/services/ai-automation",
        }}
      />
      {/* Why CreativePixels (Established) — white. Lifecycle — dark (launch/improve/grow/automate arc,
          each stage tied to a pillar; not a second trust pitch). Keeps the alternation:
          AI (tint) -> Why (white) -> Lifecycle (dark) -> Cta (white). */}
      <Established />
      <Lifecycle />
      <section className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ffd900]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
      <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
