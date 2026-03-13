"use client";

import HomeHeader from "@/components/layout/HomeHeader";
import HomeHero from "@/components/sections/hero/HomeHero";
import Expertise from "@/components/sections/expertise/Expertise";
import Services from "@/components/sections/services/Services";
import Established from "@/components/sections/established/Established";
import Process from "@/components/sections/process/Process";
import Work from "@/components/sections/work/Work";
import Cta from "@/components/sections/cta/Cta";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Contact from "@/components/sections/contact/Contact";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export async function generateMetadata() {
  const title = "CreativePixels | Web Design, WordPress & Branding Agency";
  const description =
    "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://creativepixels.agency/",
      siteName: "CreativePixels",
      images: [
        {
          url: "/images/og-image-assets/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image-assets/og-image.jpg"],
    },
  };
}

const CONTENT_VARIANTS = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 30 },
  },
};

const HomePage = ({ caseStudies }) => {
  const [transition, setTransition] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
          className="absolute inset-0"
        />

        <HomeHeader transition={transition} />

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
      <Expertise />
      <Services />
      <Established />
      <Process />
      <Work caseStudies={caseStudies} />
      <section className="overflow-hidden px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ffd900]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
