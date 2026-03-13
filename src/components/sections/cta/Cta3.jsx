"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import Cta2BgStroke from "@/components/decorative-elements/Cta2BgStroke";
import { motion } from "framer-motion";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import PrimaryButton from "@/components/ui/PrimaryButton";

const Cta3 = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative container rounded-[3rem] border border-[#d7d7d7] bg-[#EC9122] px-[2rem] py-[5.5rem] md:px-[6rem]"
      >
        <div className="pointer-events-none absolute top-[-3rem] right-[-2rem] z-[2] select-none xl:right-[6rem]">
          <Cta2BgStroke />
        </div>

        <div className="relative z-[10] flex h-full w-full flex-col items-end justify-between gap-[2rem] xl:flex-row">
          <div className="flex w-full flex-col items-center text-center xl:w-[70rem] xl:items-start xl:text-left">
            <div className="mb-[1.5rem] max-w-[50rem]">
              <SectionTitle text="Download All Documents" textColor="#ffffff" />
            </div>

            <div className="max-w-[59rem]">
              <SectionDescription
                text="Need offline access? Download our complete legal pack as a PDF bundle for your records or legal review."
                textColor="#ffffff"
              />
            </div>
          </div>

          <div className="relative flex w-full justify-center xl:w-[36rem] xl:justify-end">
            <PrimaryButton
              text="Download Legal Pack (PDF)"
              bGcolor="#312749"
              textColor="#FFFFFF"
              href=""
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Cta3;
