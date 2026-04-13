import React from "react";
import { MotionEffect } from "../effects/motion-effect";
import SectionLabel from "../ui/SectionLabel";
import Image from "next/image";
import AuditForm from "../ui/AuditForm";
import SectionDescription from "../ui/SectionDescription";

const LpAuditSection = () => {
  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="relative z-[10] container">
        <div className="flex flex-col items-center justify-center gap-[4rem] xl:flex-row">
          <div className="flex w-full flex-col items-center text-center md:w-[63rem] xl:items-start xl:text-left">
            <SectionLabel text="Free wordpress Audit" textColor="#3078FF" />

            <h2 className="mt-[1.3rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8.5rem]">
              Claim Your Free{" "}
              <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
                WordPress Website Audit Today
              </span>
            </h2>

            <div className="max-w-[58.5rem]">
              <SectionDescription
                text="Not sure where your website stands? Let our experts perform a full WordPress audit to identify opportunities, highlight areas for improvement, and provide actionable recommendations — completely free and with no obligation. Simply fill out the form and our team will get back to you with a detailed analysis."
                textColor="#625C70"
              />
            </div>

            <h5 className="mt-[3rem] text-[1.8rem] leading-[2.2rem] font-bold tracking-normal md:text-[2rem] md:leading-[2.5rem]">
              No spam. Your information is 100% secure.
            </h5>
          </div>

          <AuditForm />
        </div>
      </div>
    </section>
  );
};

export default LpAuditSection;
