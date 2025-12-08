"use client";

import SectionLabel2 from "@/components/common/SectionLabel2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const PageIntroSection = () => {
  const labelRef = useRef();
  const container = useRef();
  const [introData, setIntroData] = useState({
    section_label: "News Articles",
    page_title: "Blogs",
    page_description:
      "Read our lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis aliquet pulvinar. Nunc viverra faucibus diam adipiscing elit.",
  });

  // ✅ Fetch ACF data from WP
  useEffect(() => {
    // ✅ Step 1: Load cached data first (if any)
    const cached = localStorage.getItem("blogIntro");
    if (cached) {
      setIntroData(JSON.parse(cached));
    }

    // ✅ Step 2: Fetch new data
    const fetchIntro = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/pages?slug=blogs&_fields=acf`,
        );
        const data = await res.json();

        if (data[0]?.acf) {
          setIntroData(data[0].acf);

          // ✅ Step 3: Save fresh data in localStorage
          localStorage.setItem("blogIntro", JSON.stringify(data[0].acf));
        }
      } catch (error) {
        console.error("Failed to load blog intro:", error);
      }
    };

    fetchIntro();
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        labelRef.current,
        { rotate: "-2deg" },
        {
          rotation: "+=3",
          duration: 0.15,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          repeatDelay: 0.5,
        },
      );
    },
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      className="page-intro relative px-[3rem] pt-[18rem] xl:px-[0rem]"
    >
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
          <div ref={labelRef} className="category-badge">
            <SectionLabel2
              text={introData.section_label}
              bgColor="bg-[#FFC300]"
              textColor="#070707"
            />
          </div>

          <h1 className="my-[2rem] text-[4rem] leading-[5rem] font-bold tracking-[-0.03em] text-[#070707] md:text-[7rem] md:leading-[8.4rem]">
            {introData.page_title}
          </h1>

          <p className="text-[1.8rem] leading-[2.8rem] font-medium text-[#070707] md:text-[2.2rem] md:leading-[3.2rem]">
            {introData.page_description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageIntroSection;
