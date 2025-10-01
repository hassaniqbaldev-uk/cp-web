import SectionLabel2 from "../common/SectionLabel2";
import SectionTitle from "../common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UpArrowIcon from "@/assets/icons/up-arrow-dark.svg";
import { accordionData } from "@/constants/agenciesPage";
import CommonBtn3 from "../common/CommonBtn3";
import LineStroke25 from "@/assets/decorative-elements/line-stroke-25.svg";

const WorkingProcessSection = () => {
  return (
    <section className="relative pt-[14.7rem] pb-[6.8rem]">
      <div className="pointer-events-none absolute inset-0 z-[0] select-none">
        <LineStroke25 className="absolute top-[50rem] left-1/2 -translate-x-1/2" />
      </div>

      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center">
          <div className="rotate-[-2deg]">
            <SectionLabel2
              text="Our Working Process"
              bgColor="bg-[#FFC300]"
              textColor="text-black"
            />
          </div>

          <div className="mt-[2rem] mb-[3.6rem]">
            <SectionTitle label="How We Work With Agencies" />
          </div>

          <p className="max-w-[114.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-[#070707]">
            Every agency works differently with their own systems, tools, and
            workflows. Some partner with us for{" "}
            <span className="text-[#FF37B3]">
              white label web design, others for WordPress development,
            </span>{" "}
            and many for both. Whether you need{" "}
            <span className="text-[#EE8D00]">
              outsourced production or long-term agency growth support,
            </span>{" "}
            we adapt to your way of working, not the other way around.
          </p>
        </div>

        <div className="mt-[3.6rem]">
          <Accordion type="single" collapsible className="">
            {accordionData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="!border-b border-[#9C9C9C] px-[2.8rem] py-[3rem] transition-all duration-200 data-[state=open]:rounded-[2rem] data-[state=open]:bg-[#FFE500]"
              >
                <AccordionTrigger className="group flex w-full items-center justify-between">
                  <div className="flex items-center gap-[6rem]">
                    <i className="relative inline-flex size-[5.8rem] items-center justify-center">
                      <item.icon />
                    </i>

                    <span className="text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em] text-[#070707]">
                      {item.number}
                    </span>

                    <span className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                      {item.title}
                    </span>
                  </div>

                  <i className="relative inline-flex size-[1.6rem] rotate-180 items-center justify-center opacity-40 transition-all duration-200 group-data-[state=open]:rotate-0 group-data-[state=open]:opacity-100">
                    <UpArrowIcon />
                  </i>
                </AccordionTrigger>

                <AccordionContent>
                  <p className="mx-auto mt-[2rem] max-w-[75.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-[5rem] flex flex-col items-center gap-[3rem] text-center">
          <p className="text-[2.2rem] leading-[3.2rem] font-medium text-[#070707]">
            With CreativePixels, the process isn't fixed - it's flexible. We're
            your white label agency partner, ready to scale design, development,
            or strategy support around your needs.
          </p>

          <CommonBtn3
            textColor="#FFFFFF"
            bgColor="#FF37B3"
            label="Get Free Consultation"
            href="/contact"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
