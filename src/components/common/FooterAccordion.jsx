import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FooterAccordion = ({ title, links, value }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={value}>
        <AccordionTrigger className="flex w-full items-center justify-between text-[2rem] leading-[3rem] font-semibold text-white">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-[2rem] pt-[2rem]">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="flex items-center gap-[1rem] text-[1.4rem] leading-[2rem] text-white md:text-[1.8rem] md:leading-[2.4rem]"
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FooterAccordion;
