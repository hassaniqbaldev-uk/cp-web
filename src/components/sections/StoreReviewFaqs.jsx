import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Image from "next/image";
import { Plus } from "lucide-react";

// NOTE: answers are drafts derived from the page content — please review and
// correct (especially the VAT one) before launch.
const faqs = [
  {
    id: "really-free",
    question: "Is it really free?",
    answer:
      "Yes. The video review and the 30-minute call are completely free, with no obligation to buy anything.",
  },
  {
    id: "fixes-free",
    question: "Are the fixes free?",
    answer:
      "The review and call are free. If you'd like us to make the fixes, we give you a fixed price on the call — you only pay if you go ahead.",
  },
  {
    id: "who-for",
    question: "Who is it for?",
    answer:
      "Online stores doing £5k+ a month on Shopify or WooCommerce that want more sales from the traffic they already have.",
  },
  {
    id: "on-the-call",
    question: "What happens on the call?",
    answer:
      "We walk through your recorded review together, answer your questions, and give you fixed prices for the fixes — no pressure.",
  },
  {
    id: "change-store",
    question: "Will you change anything on my store?",
    answer:
      "Nothing without your say-so. The review is just a recommendation; we only touch your store if you ask us to.",
  },
  {
    id: "vat",
    question: "Are prices with or without VAT?",
    answer:
      "All prices are shown excluding VAT, which is added where applicable.",
  },
];

const StoreReviewFaqs = () => {
  return (
    <Section id="faq" className="bg-orange/10 max-bf-xl:py-[60px] py-[120px]">
      <Container className="max-bf-xl:px-[40px] max-bf-sm:px-[20px]">
        <div className="max-bf-xl:flex-col-reverse max-bf-xl:gap-[35px] flex items-start justify-between gap-[60px]">
          <div className="max-bf-xl:w-full w-[626px] shrink-0">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-[12px]"
            >
              {faqs.map(({ id, question, answer }) => (
                <AccordionItem
                  key={id}
                  value={id}
                  className="max-bf-sm:px-[20px] rounded-[30px] border-transparent bg-white px-[30px]"
                >
                  <AccordionTrigger className="group flex w-full items-center justify-between gap-[20px] py-[18px]">
                    <span className="max-bf-sm:text-[15px] text-left text-[25px] font-semibold tracking-[-0.07em] text-black">
                      {question}
                    </span>
                    <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full border border-black/25 text-black transition-transform duration-200 group-data-[state=open]:rotate-45">
                      <Plus className="size-[16px]" />
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-[24px]">
                    <p className="text-text-body max-bf-sm:text-[14px] text-[16px] leading-[22px] tracking-[-0.02em]">
                      {answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-bf-xl:w-full max-bf-xl:flex w-[470px] shrink-0 flex-col items-center">
            <p className="max-bf-xl:text-center max-bf-sm:text-[13px] text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
              Frequently asked questions
            </p>

            <h2 className="max-bf-xl:text-center max-bf-sm:text-[30px] max-bf-sm:leading-[34px] mt-[12px] text-[52px] leading-[60px] font-extrabold tracking-[-0.07em] text-black">
              Who reviews
              <br />
              your <span className="text-black/40">store</span>
            </h2>

            <div className="mt-[35px] flex max-w-[360px] items-center gap-[20px] rounded-[16px] bg-white p-[20px]">
              <Image
                src="/images/black-friday/hassan-avatar.png"
                alt="Hassan, Creative Pixels"
                width={100}
                height={100}
                className="max-bf-sm:size-[70px] size-[100px] shrink-0 rounded-full object-cover"
              />

              <div>
                <p className="text-[18px] font-bold tracking-[-0.02em] text-black">
                  Hassan, every time
                </p>

                <p className="text-text-body mt-[6px] text-[14px] leading-[20px] tracking-[-0.02em]">
                  I record every video myself. No AI reports, no juniors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default StoreReviewFaqs;
