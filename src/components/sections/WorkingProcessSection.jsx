import SectionLabel2 from "../common/SectionLabel2";
import SectionTitle from "../common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DiscoveryIcon from "@/assets/icons/discovery-icon.svg";

const WorkingProcessSection = () => {
  return (
    <section className="pt-[14.7rem] pb-[6.8rem]">
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
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6rem]">
                    <i className="relative inline-flex size-[5.8rem] items-center justify-center">
                      <DiscoveryIcon />
                    </i>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
