import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faqTabData } from "@/constants/faqPage";
import Image from "next/image";

const FaqTab = () => {
  return (
    <Tabs defaultValue="general" className="gap-[8rem]">
      {/* Tab buttons */}
      <TabsList className="mx-auto flex w-full max-w-[121.3rem] flex-wrap justify-center gap-[1rem] text-center xl:justify-start xl:text-left">
        {faqTabData.map((faq) => (
          <TabsTrigger
            key={faq.tab}
            value={faq.tab}
            className="border-text-primary inline-flex h-[3.8rem] min-w-[11.4rem] cursor-pointer items-center justify-center rounded-full border px-[2rem] py-[.6rem] text-[2rem] font-semibold transition-all duration-300 hover:bg-[#FF37B3] hover:text-white data-[state=active]:bg-[#FF37B3] data-[state=active]:text-white"
          >
            {faq.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab content */}
      {faqTabData.map((faq) => (
        <TabsContent key={faq.tab} value={faq.tab}>
          <div className={`${faq.style} flex flex-col gap-[5rem]`}>
            <h3 className="text-center text-[3.2rem] leading-[5rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem] xl:text-left">
              {faq.title}
            </h3>

            <div className="grid grid-cols-1 gap-[4rem] lg:grid-cols-2">
              {faq.items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left"
                >
                  <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                    <item.icon />
                  </div>

                  <div className="flex flex-col gap-[.5rem]">
                    <h4 className="text-[2.2rem] leading-[3.2rem] font-medium">
                      {item.question}
                    </h4>
                    <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default FaqTab;
