import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { offerServicesDropdownData } from "@/constants/globals";
import Link from "next/link";

const HamburgerAccordion = ({ setIsOpen }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div className="flex items-center justify-between">
          {/* Left side: text as a link */}
          <Link
            onClick={() => setIsOpen(false)}
            href="/services"
            className="flex w-full items-center justify-between text-[3rem] leading-[4rem] font-semibold uppercase md:text-[4rem] md:leading-[5rem]"
          >
            Services
          </Link>

          {/* Right side: arrow trigger */}
          <AccordionTrigger className="flex size-[4rem] items-center justify-center rounded-[.5rem] bg-white/20"></AccordionTrigger>
        </div>
        <AccordionContent>
          {offerServicesDropdownData.map((item) =>
            item.columns.map((item2, idx) => (
              <div key={idx} className="flex flex-col gap-[2rem] pt-[2rem]">
                <h5 className="text-[2.2rem] leading-[2.5rem] font-medium text-[#FED202] md:text-[2.6rem] md:leading-[3rem]">
                  {item2.title}
                </h5>

                <ul className="flex flex-col gap-[2rem]">
                  {item2.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={link.href}
                        className="flex items-center gap-[1rem] text-[1.4rem] leading-[2rem] md:text-[1.8rem] md:leading-[2.4rem]"
                      >
                        <div className={`size-[1rem] rounded-full border-2`} />{" "}
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )),
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default HamburgerAccordion;
