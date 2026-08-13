"use client";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import CheckMarkIcon3 from "@/components/icons/CheckMarkIcon3";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const pricingCards = [
  {
    tag: "Startup Identity",
    category: "Investment",
    price: "From £3k",
    description: "Core essentials to get you to market with confidence.",
    features: [
      "Logo Suite",
      "Color & Typography",
      "Basic Guidelines",
      "Social Assets",
    ],
    cta: {
      text: "Request Proposal",
      href: "",
    },
  },
  {
    tag: "Full Rebrand",
    category: "Investment",
    price: "From £8k",
    description: "Comprehensive overhaul for established businesses.",
    features: [
      "Brand Strategy",
      "Full Visual Identity",
      "Messaging Framework",
      "Collateral Design",
    ],
    cta: {
      text: "Request Proposal",
      href: "",
    },
  },
  {
    tag: "Brand & Web",
    category: "Investment",
    price: "Custom",
    description: "Integrated identity and digital platform build.",
    features: [
      "Holistic Strategy",
      "Web Design & Dev",
      "Copywriting",
      "Launch Support",
    ],
    cta: {
      text: "Request Proposal",
      href: "",
    },
  },
];

export const themeColors = {
  primary: {
    color: "#EE7621",
  },
  secondary: {
    color: "#FF37B3",
  },
  accent: {
    color: "#3078FF",
  },
};

export const themeColorList = Object.values(themeColors);

const Options = ({ service }) => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[1.4rem] text-center">
            <div>
              <SectionTitle text="Investment Options" textColor="#312749" />
            </div>

            <div>
              <SectionDescription
                text="Transparent guidance to help you budget. We tailor every proposal to your specific goals."
                textColor="#625C70"
              />
            </div>
          </div>

          <div className="mt-[5rem] mb-[3rem] rounded-[3rem] border border-[#E4E3E8] p-[3rem] xl:p-[5rem]">
            <div className="flex items-center gap-[1.6rem] md:gap-[2.2rem]">
              <i className="inline-flex size-[5rem] min-w-[5rem] items-center justify-center rounded-[1rem] bg-[#44B276] md:size-[6.8rem] md:min-w-[6.8rem]">
                <CheckMarkIcon3 width="30" height="22" fillColor="#ffffff" />
              </i>

              <div className="flex flex-col gap-[.5rem]">
                <h4 className="text-[1.8rem] leading-[1.8rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.2rem] md:leading-[2.2rem] xl:text-[2.6rem] xl:leading-[2.6rem]">
                  Included as standard
                </h4>

                <p className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70] md:text-[1.6rem] md:leading-[2.6rem] xl:text-[1.8rem] xl:leading-[2.8rem]">
                  Every partnership includes these essentials, ensuring quality
                  and peace of mind from day one.
                </p>
              </div>
            </div>

            <hr className="my-[2rem] w-full border-t border-[#E4E3E8] md:my-[3.5rem]" />

            <ul className="grid grid-cols-1 gap-y-[1.6rem] md:grid-cols-2 lg:grid-cols-3 xl:gap-y-[2.5rem]">
              {service.includeCard.map((item, idx) => (
                <li
                  key={idx}
                  className="inline-flex items-center gap-[1.6rem] text-[1.6rem] tracking-[-0.02em] text-[#312749] xl:text-[2rem]"
                >
                  <div className="size-[.8rem] rounded-full bg-[#44B276]" />

                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden grid-cols-3 gap-[3rem] xl:grid">
            {service.pricingCard.map((card, idx) => {
              const theme = getThemeColor(idx);

              return (
                <div
                  key={idx}
                  style={{ background: theme.color }}
                  className="flex size-full flex-col items-start gap-[2.5rem] rounded-[3rem] px-[3rem] py-[4rem]"
                >
                  <div className="flex w-full flex-col items-start">
                    <span className="text-[1.8rem] font-bold tracking-[-0.02em] text-white uppercase">
                      {card.tag}
                    </span>

                    <span className="mt-[1rem] mb-[.5rem] text-[1.6rem] leading-[2.4rem] text-white">
                      {card.category}
                    </span>

                    <h4 className="text-[4.8rem] leading-[6rem] font-bold text-white">
                      {card.price}
                    </h4>

                    <p className="text-[1.6rem] leading-[2.4rem] text-white">
                      {card.description}
                    </p>

                    <hr className="my-[2rem] w-full border-t border-[#E4E3E8]" />

                    <ul className="flex flex-col gap-[.5rem]">
                      {card.features.map((feature, i) => (
                        <li
                          key={i}
                          className="inline-flex items-center gap-[1rem] text-[1.6rem] font-bold text-white"
                        >
                          <CheckMarkIcon
                            color="#ffffff"
                            width="17"
                            height="17"
                          />
                          <span>{feature.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <PrimaryButton
                    href="/contact"
                    text="Request Proposal"
                    bGcolor="#ffffff"
                    textColor={theme.color}
                  />
                </div>
              );
            })}
          </div>

          {/* Responsive */}
          <div className="block w-full xl:hidden">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                767: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
              }}
              className="mySwiper"
            >
              {service.pricingCard.map((card, idx) => {
                const theme = getThemeColor(idx);

                return (
                  <SwiperSlide
                    key={idx}
                    className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[10rem]"
                  >
                    <div
                      style={{ background: theme.color }}
                      className="flex size-full flex-col items-start gap-[2.5rem] rounded-[3rem] px-[3rem] py-[4rem]"
                    >
                      <div className="flex w-full flex-col items-start">
                        <span className="text-[1.8rem] font-bold tracking-[-0.02em] text-white uppercase">
                          {card.tag}
                        </span>

                        <span className="mt-[1rem] mb-[.5rem] text-[1.6rem] leading-[2.4rem] text-white">
                          {card.category}
                        </span>

                        <h4 className="text-[4.8rem] leading-[6rem] font-bold text-white">
                          {card.price}
                        </h4>

                        <p className="text-[1.6rem] leading-[2.4rem] text-white">
                          {card.description}
                        </p>

                        <hr className="my-[2rem] w-full border-t border-[#E4E3E8]" />

                        <ul className="flex flex-col gap-[.5rem]">
                          {card.features.map((feature, i) => (
                            <li
                              key={i}
                              className="inline-flex items-center gap-[1rem] text-[1.6rem] font-bold text-white"
                            >
                              <CheckMarkIcon
                                color="#ffffff"
                                width="17"
                                height="17"
                              />
                              <span>{feature.label}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <PrimaryButton
                        href="/contact"
                        text="Request Proposal"
                        bGcolor="#ffffff"
                        textColor={theme.color}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Options;
